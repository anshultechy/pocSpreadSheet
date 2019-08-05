/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { GradientStop } from "./GradientStop";
import { Base, Nullable$1, markType, typeCast, PointUtil } from "./type";
import { Color } from "./Color";
import { intDivide, isNaN_, isInfinity } from "./number";
import { stringContains } from "./string";
/**
 * @hidden
 */
export class Brush extends Base {
    constructor() {
        super(...arguments);
        this.isGradient = false;
        this.isRadialGradient = false;
        this.isImageFill = false;
        this._fill = null;
        this.f = null;
        this.k = new Color();
    }
    get fill() {
        return this._fill;
    }
    set fill(a) {
        this._fill = a;
    }
    get color() {
        if (this._fill == null && (this.isGradient || this.isRadialGradient)) {
            this._fill = this.i();
        }
        if (this._fill == this.f) {
            return this.k;
        }
        let a = new Color();
        if (this._fill != null) {
            a.colorString = this._fill;
            this.k = a;
            this.f = this._fill;
            if (this._fill.length == 9) {
                this._fill = this.k.colorString;
                this.f = this._fill;
            }
        }
        return a;
    }
    set color(a) {
        this.k = a;
        this.f = this.k.colorString;
        this._fill = this.f;
    }
    i() {
        return null;
    }
    equals(a) {
        if (a == null) {
            return false;
        }
        let b = a;
        return Base.equalsStatic(this._fill, b._fill) && this.color.equals(b.color) && this.isGradient == b.isGradient && this.isImageFill == b.isImageFill && this.isRadialGradient == b.isRadialGradient;
    }
    getHashCode() {
        let a = Base.getHashCodeStatic(this.isGradient) ^ Base.getHashCodeStatic(this.isRadialGradient) ^ Base.getHashCodeStatic(this.isImageFill);
        if (this.f != null) {
            a ^= Base.getHashCodeStatic(this.f);
        }
        if (Color.e(Nullable$1.toNullable(Color.$, this.k), Nullable$1.toNullable(Color.$, null))) {
            a ^= this.k.getHashCode();
        }
        return a;
    }
    static create(val_) {
        CssGradientUtil.touch();
        let b_ = new Brush();
        if (!val_) {
            return null;
        }
        if (typeof val_ == 'string') {
            if (CssGradientUtil.isGradient(val_)) {
                b_ = CssGradientUtil.brushFromGradientString(val_);
            }
            else {
                b_ = new Brush();
                b_.fill = val_;
            }
        }
        else if (val_.type == 'linearGradient') {
            b_ = new LinearGradientBrush();
            if (val_.startPoint && val_.endPoint) {
                b_.useCustomDirection = true;
                b_.startX = val_.startPoint.x;
                b_.startY = val_.startPoint.y;
                b_.endX = val_.endPoint.x;
                b_.endY = val_.endPoint.y;
            }
            if (val_.colorStops) {
                let stops = [];
                for (var i = 0; i < val_.colorStops.length; i++) {
                    let colorStop = new GradientStop();
                    colorStop.offset = val_.colorStops[i].offset;
                    colorStop.fill = val_.colorStops[i].color;
                    stops.push(colorStop);
                }
                b_.gradientStops = stops;
            }
        }
        ;
        return b_;
    }
}
Brush.$t = markType(Brush, 'Brush');
/**
 * @hidden
 */
export class LinearGradientBrush extends Brush {
    constructor() {
        super();
        this.useCustomDirection = false;
        this.startX = 0;
        this.startY = 0;
        this.endX = 0;
        this.endY = 0;
        this.isAbsolute = false;
        this.gradientStops = null;
        this.useCustomDirection = false;
        this.startX = 0;
        this.startY = 0;
        this.endX = 0;
        this.endY = 1;
        this.isAbsolute = false;
        this.gradientStops = new Array(0);
        this.isGradient = true;
    }
    clone() {
        let a = new LinearGradientBrush();
        a.startX = this.startX;
        a.startY = this.startY;
        a.endX = this.endX;
        a.endY = this.endY;
        a.useCustomDirection = this.useCustomDirection;
        a.isAbsolute = this.isAbsolute;
        if (this.gradientStops != null) {
            a.gradientStops = new Array(this.gradientStops.length);
            for (let b = 0; b < this.gradientStops.length; b++) {
                a.gradientStops[b] = this.gradientStops[b].clone();
            }
        }
        return a;
    }
    equals(a) {
        if (a == null) {
            return false;
        }
        let b = typeCast(LinearGradientBrush.$, a);
        if (b == null) {
            return false;
        }
        let c = super.equals(a) && this.startX == b.startX && this.startY == b.startY && this.endX == b.endX && this.endY == b.endY && this.isAbsolute == b.isAbsolute && this.useCustomDirection == b.useCustomDirection;
        if (c == false) {
            return false;
        }
        if (this.gradientStops.length != b.gradientStops.length) {
            return false;
        }
        for (let d = 0, e = this.gradientStops.length; d < e; d++) {
            if (!this.gradientStops[d].equals(b.gradientStops[d])) {
                return false;
            }
        }
        return true;
    }
    getHashCode() {
        return super.getHashCode() ^ (this.startX) ^ (this.startY) ^ (this.endX) ^ (this.endY);
    }
    i() {
        if (this.gradientStops != null && this.gradientStops.length > 0) {
            return this.gradientStops[0].color.colorString;
        }
        return super.i();
    }
}
LinearGradientBrush.$t = markType(LinearGradientBrush, 'LinearGradientBrush', Brush.$);
/**
 * @hidden
 */
export class CssGradientUtil extends Base {
    static touch() {
    }
    static isGradient(a) {
        return stringContains(a, "linear-gradient") || stringContains(a, "radial-gradient");
    }
    static brushFromGradientString(a) {
        let b = (/hsl\([\s\S]+?\)[\s\S]*?[,\)]|rgba?\([\s\S]+?\)[\s\S]*?[,\)]|[^\(\)]*?[,\)]/gim), c = (/\s*\d*%\s*$/), d = (/^\s\s*/), e = (/\s\s*$/), f = (/[,\)]?$/);
        let g;
        let h, i = 1, j = 0, k, l;
        let m = false;
        let n;
        let o = a.match(b);
        if (o == null || o.length <= 1) {
            return null;
        }
        let p = new LinearGradientBrush();
        k = o.length;
        g = o[0];
        if (stringContains(g, "to") || stringContains(g, "deg")) {
            h = CssGradientUtil.c(g);
            p.useCustomDirection = true;
            let q = CssGradientUtil.a(h);
            p.startX = q[0].x;
            p.startY = q[0].y;
            p.endX = q[1].x;
            p.endY = q[1].y;
            n = new Array(k - 1);
        }
        else {
            n = new Array(k);
            i = 0;
        }
        for (; i < k; i++) {
            let r = new GradientStop();
            g = o[i];
            g = g.replace(d, "").replace(e, "").replace(f, "");
            l = g.search(c);
            if (l != -1) {
                r._fill = g.substr(0, l);
                r.offset = parseFloat(g.substr(l + 1)) / 100;
            }
            else {
                r._fill = g;
                r.offset = -1;
                m = true;
            }
            n[j] = r;
            j++;
        }
        if (m) {
            if (n[0].offset == -1) {
                n[0].offset = 0;
            }
            if (n[n.length - 1].offset == -1) {
                n[n.length - 1].offset = 1;
            }
            CssGradientUtil.f(n);
        }
        p.gradientStops = n;
        return p;
    }
    static f(a) {
        let b, c, d, e, f = -1, g = -1, h = 0;
        let i = false;
        for (b = g + 1; b < a.length; b++) {
            let j = a[b];
            if (j.offset != -1) {
                f = Math.max(f, j.offset);
                j.offset = f;
                if (i) {
                    d = 1;
                    e = intDivide((f - h), (b - g));
                    for (c = g + 1; c < b; c++) {
                        a[c].offset = h + e * d;
                        d++;
                    }
                    i = false;
                }
                g = b;
                h = f;
            }
            else {
                i = true;
            }
        }
    }
    static c(a) {
        let b = (/to\s*top\s*/i), c = (/to\s*right\s*top\s*/i), d = (/to\s*right\s*/i), e = (/to\s*right\s*bottom\s*/i), f = (/to\s*bottom\s*/i), g = (/to\s*left\s*bottom\s*/i), h = (/to\s*left\s*/i), i = (/to\s*left\s*top\s*/i);
        if (stringContains(a, "deg")) {
            return parseFloat(a);
        }
        if (b.test(a)) {
            return 0;
        }
        if (c.test(a)) {
            return 45;
        }
        if (d.test(a)) {
            return 90;
        }
        if (e.test(a)) {
            return 135;
        }
        if (f.test(a)) {
            return 180;
        }
        if (g.test(a)) {
            return 225;
        }
        if (h.test(a)) {
            return 270;
        }
        return i.test(a) ? 315 : 180;
    }
    static d(a) {
        return Math.PI * a / 180;
    }
    static e(a) {
        if (isNaN_(a) || isInfinity(a)) {
            return a;
        }
        while (a > 360) {
            a -= 360;
        }
        while (a < 0) {
            a += 360;
        }
        return a;
    }
    static a(a) {
        let b = new Array(2);
        let c = PointUtil.create();
        let d = PointUtil.create();
        let e = CssGradientUtil.e(a);
        if (e >= 0 && e <= 45) {
            let f = Math.tan(CssGradientUtil.d(e));
            c.x = 0.5 - 0.5 * f;
            c.y = 1;
            d.x = 0.5 + 0.5 * f;
            d.y = 0;
        }
        else if (e > 180 && e <= 225) {
            let g = Math.tan(CssGradientUtil.d(e - 180));
            c.x = 0.5 + 0.5 * g;
            c.y = 0;
            d.x = 0.5 - 0.5 * g;
            d.y = 1;
        }
        else if (e > 135 && e <= 180) {
            let h = Math.tan(CssGradientUtil.d(180 - e));
            c.x = 0.5 - 0.5 * h;
            c.y = 0;
            d.x = 0.5 + 0.5 * h;
            d.y = 1;
        }
        else if (e > 315 && e < 360) {
            let i = Math.tan(CssGradientUtil.d(360 - e));
            c.x = 0.5 + 0.5 * i;
            c.y = 1;
            d.x = 0.5 - 0.5 * i;
            d.y = 0;
        }
        else if (e > 45 && e <= 90) {
            let j = Math.tan(CssGradientUtil.d(90 - e));
            d.y = 0.5 - 0.5 * j;
            d.x = 1;
            c.y = 0.5 + 0.5 * j;
            c.x = 0;
        }
        else if (e > 90 && e <= 135) {
            let k = Math.tan(CssGradientUtil.d(e - 90));
            d.y = 0.5 + 0.5 * k;
            d.x = 1;
            c.y = 0.5 - 0.5 * k;
            c.x = 0;
        }
        else if (e > 225 && e <= 270) {
            let l = Math.tan(CssGradientUtil.d(270 - e));
            c.y = 0.5 - 0.5 * l;
            c.x = 1;
            d.y = 0.5 + 0.5 * l;
            d.x = 0;
        }
        else if (e > 270 && e <= 315) {
            let m = Math.tan(CssGradientUtil.d(e - 270));
            c.y = 0.5 + 0.5 * m;
            c.x = 1;
            d.y = 0.5 - 0.5 * m;
            d.x = 0;
        }
        b[0] = c;
        b[1] = d;
        return b;
    }
}
CssGradientUtil.$t = markType(CssGradientUtil, 'CssGradientUtil');
//# sourceMappingURL=Brush_combined.js.map