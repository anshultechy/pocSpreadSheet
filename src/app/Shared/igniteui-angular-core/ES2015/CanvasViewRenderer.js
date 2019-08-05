/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, Point_$type, typeCast, markType, PointUtil } from "./type";
import { IRenderer_$type } from "./IRenderer";
import { Brush } from "./Brush";
import { List$1 } from "./List$1";
import { ArcSegment } from "./ArcSegment";
import { Size } from "./Size";
import { CoreGeometryUtil } from "./CoreGeometryUtil";
import { TransformGroup } from "./TransformGroup";
import { TranslateTransform } from "./TranslateTransform";
import { RotateTransform } from "./RotateTransform";
import { ScaleTransform } from "./ScaleTransform";
import { isNaN_ } from "./number";
/**
 * @hidden
 */
export class CanvasViewRenderer extends Base {
    constructor() {
        super(...arguments);
        this.i = null;
        this.g = 0;
        this.e = 0;
        this.h = 0;
        this.f = 0;
        this.b = false;
        this.c = false;
        this.z = null;
        this.l = "left";
        this.a = null;
        this.d = 1;
    }
    h$e() {
        return this.i;
    }
    get h$d() {
        return this.i;
    }
    set h$d(a) {
        this.i = a;
    }
    k(a, b, c, d, e, f, g) {
        return CanvasViewRenderer.j(this.i, a, b, c, d, e, f, g);
    }
    static j(a, b, c, d, e, f, g, h) {
        let i;
        if (b.useCustomDirection) {
            let j, k, l, m, n;
            n = e - c;
            j = c + b.startX * n;
            l = c + b.endX * n;
            n = f - d;
            k = d + b.startY * n;
            m = d + b.endY * n;
            if (h) {
                let o = g / 2;
                j -= o;
                l += o;
                k -= o;
                m += o;
            }
            i = a.createLinearGradient(j, k, l, m);
        }
        else {
            if (h) {
                let p = g / 2;
                c -= p;
                e += p;
                d -= p;
                f += p;
            }
            i = a.createLinearGradient(c, d, c, f);
        }
        for (let q = 0; q < b.gradientStops.length; q++) {
            let r = b.gradientStops[q];
            i.addColorStop(r.offset, r._fill);
        }
        return i;
    }
    h$t(a) {
        if (a._visibility != 0) {
            return;
        }
        let b = a.n;
        let c = a.o;
        let d = a.width;
        let e = a.height;
        let f = a.al;
        let g = a.am;
        this.i.beginPath();
        this.i.globalAlpha = (a._opacity * this.d);
        if (f > 0 || g > 0) {
            if (f > d / 2) {
                f = (d / 2);
            }
            if (g > e / 2) {
                g = (e / 2);
            }
            let h = Math.min(f, g);
            this.i.beginPath();
            this.i.moveTo(b + h, c);
            this.i.lineTo(b + d - h, c);
            this.i.arc(b + d - h, c + h, h, (3 / 2 * Math.PI), 0, false);
            this.i.lineTo(b + d, c + e - h);
            this.i.arc(b + d - h, c + e - h, h, 0, (Math.PI / 2), false);
            this.i.lineTo(b + h, c + e);
            this.i.arc(b + h, c + e - h, h, (Math.PI / 2), Math.PI, false);
            this.i.lineTo(b, c + h);
            this.i.arc(b + h, c + h, h, Math.PI, (3 / 2 * Math.PI), false);
            this.i.closePath();
        }
        else {
            this.i.rect(b, c, d, e);
        }
        let i = a._fill;
        let j = a._stroke;
        if (i != null) {
            if (i.isGradient && c == c && b == b) {
                this.i.fillStyle = this.k(i, b, c, b + d, c + e, a.ac, false);
            }
            else {
                this.i.fillStyle = i._fill;
            }
            this.i.fill();
        }
        if (j != null) {
            if (j.isGradient && c == c && b == b) {
                this.i.strokeStyle = this.k(j, b, c, b + d, c + e, a.ac, true);
            }
            else {
                this.i.strokeStyle = j._fill;
            }
            this.i.lineWidth = a.ac;
            this.i.stroke();
        }
        this.i.globalAlpha = 1;
    }
    h$q(a) {
        if (a._visibility != 0) {
            return;
        }
        this.i.beginPath();
        if (a._opacity < 1 || this.d < 1) {
            this.i.globalAlpha = (a._opacity * this.d);
        }
        let b = a._fill;
        let c = a._stroke;
        this.b = (b != null && b.isGradient) || (c != null && c.isGradient);
        if (this.b) {
            this.e = -1.7976931348623157E+308;
            this.f = -1.7976931348623157E+308;
            this.g = 1.7976931348623157E+308;
            this.h = 1.7976931348623157E+308;
            this.c = false;
        }
        this.h$o(a.aj);
        if (b != null) {
            if (b.isGradient && this.c) {
                this.i.fillStyle = this.k(b, this.g, this.h, this.e, this.f, a.ac, false);
            }
            else {
                this.i.fillStyle = a._fill._fill;
            }
            this.i.fill();
        }
        if (c != null) {
            if (c.isGradient && this.c) {
                this.i.strokeStyle = this.k(c, this.g, this.h, this.e, this.f, a.ac, true);
            }
            else {
                this.i.strokeStyle = a._stroke._fill;
            }
            this.i.lineWidth = a.ac;
            if (a.ac > 0) {
                this.i.stroke();
            }
        }
        if (a._opacity < 1 || this.d < 1) {
            this.i.globalAlpha = 1;
        }
    }
    h$o(a) {
        if (a == null) {
            return;
        }
        let b = a.a;
        switch (b) {
            case 0:
                for (let c = 0; c < a.c.count; c++) {
                    this.h$o(a.c._inner[c]);
                }
                break;
            case 4:
                this.s(a);
                break;
            case 1:
                this.q(a);
                break;
            case 2:
                this.v(a);
                break;
            case 3:
                this.o(a);
                break;
        }
    }
    o(a) {
        this.i.moveTo(a.d.x, (a.d.y - a.c));
        this.z = { $type: Point_$type, x: a.d.x, y: a.d.y - a.c };
        let b = ((() => {
            let $ret = new ArcSegment();
            $ret.e = { $type: Point_$type, x: a.d.x, y: a.d.y + a.c };
            $ret.b = false;
            $ret.f = new Size(1, a.b, a.c);
            return $ret;
        })());
        let c = ((() => {
            let $ret = new ArcSegment();
            $ret.e = { $type: Point_$type, x: a.d.x, y: a.d.y - a.c };
            $ret.b = false;
            $ret.f = new Size(1, a.b, a.c);
            return $ret;
        })());
        let d = this.b;
        this.b = false;
        this.m(b);
        this.m(c);
        this.b = d;
        if (!this.b) {
            return;
        }
        let e = a.d.x - a.b;
        let f = a.d.y + a.b;
        let g = a.d.x - a.c;
        let h = a.d.y + a.c;
        let i = this.e;
        let j = this.f;
        let k = this.g;
        let l = this.h;
        this.g = e < k ? e : k;
        this.h = g < l ? g : l;
        this.e = f > i ? f : i;
        this.f = h > j ? h : j;
        this.c = true;
    }
    s(a) {
        let b = a.b;
        let c = b.count;
        for (let d = 0; d < c; d++) {
            this.p(b._inner[d]);
        }
    }
    p(a) {
        let b = a == null ? null : a._startPoint;
        if (PointUtil.equals(b, null)) {
            return;
        }
        let c = b.x;
        let d = b.y;
        this.i.moveTo(c, d);
        if (this.b) {
            let e = this.e;
            let f = this.f;
            let g = this.g;
            let h = this.h;
            this.g = c < g ? c : g;
            this.h = d < h ? d : h;
            this.e = c > e ? c : e;
            this.f = d > f ? d : f;
            this.c = true;
        }
        this.z = b;
        let i = a._segments;
        let j = i.count;
        for (let k = 0; k < j; k++) {
            this.w(i._inner[k]);
        }
        if (a._isClosed) {
            this.i.closePath();
        }
    }
    w(a) {
        let b = a.a;
        switch (b) {
            case 0:
                this.r(a);
                break;
            case 3:
                this.u(a);
                break;
            case 4:
                this.m(a);
                break;
            case 1:
                this.n(a);
                break;
            case 2:
                this.t(a);
                break;
        }
    }
    y(a, b, c, d, e, f, g, h) {
        let i = 1 / 50;
        let j;
        let k;
        let l;
        let m;
        let n;
        let o;
        let p;
        let q = this.g;
        let r = this.h;
        let s = this.e;
        let t = this.f;
        for (let u = 0; u <= 1; u += i) {
            j = 1 - u;
            k = j * j;
            l = k * j;
            m = u * u;
            n = m * u;
            o = l * a + 3 * k * u * c + 3 * j * m * e + n * g;
            p = l * b + 3 * k * u * d + 3 * j * m * f + n * h;
            q = o < q ? o : q;
            r = p < r ? p : r;
            s = o > s ? o : s;
            t = p > t ? p : t;
        }
        this.g = q;
        this.h = r;
        this.e = s;
        this.f = t;
        this.c = true;
    }
    n(a) {
        this.i.bezierCurveTo(a.e.x, a.e.y, a.f.x, a.f.y, a.g.x, a.g.y);
        if (this.b) {
            this.y(this.z.x, this.z.y, a.e.x, a.e.y, a.f.x, a.f.y, a.g.x, a.g.y);
        }
    }
    t(a) {
        let b = 0;
        let c = a.b.count;
        let d = a.b;
        let e = this.z;
        let f = this.z;
        let g = this.z;
        let h = this.b;
        while (b < c) {
            if (b + 1 < c && b + 2 < c) {
                e = d._inner[b];
                f = d._inner[b + 1];
                g = d._inner[b + 2];
                this.i.bezierCurveTo(e.x, e.y, f.x, f.y, g.x, g.y);
                if (h) {
                    this.y(this.z.x, this.z.y, e.x, e.y, f.x, f.y, g.x, g.y);
                    this.z = g;
                }
            }
            b = b + 3;
        }
        this.z = g;
    }
    x(a, b, c, d, e) {
        let f = new List$1(Point_$type, 0);
        f.add(a);
        f.add({ $type: Point_$type, x: a.x + Math.cos(b) * d, y: a.y + Math.sin(b) * d });
        f.add({ $type: Point_$type, x: a.x + Math.cos(c) * d, y: a.y + Math.sin(c) * d });
        let g = Math.PI * 2;
        let h = Math.PI / 2;
        let i = Math.PI;
        let j = Math.PI * 3 / 2;
        while (b < 0) {
            b += g;
        }
        while (b > g) {
            b -= g;
        }
        while (c < 0) {
            c += g;
        }
        while (c > g) {
            c -= g;
        }
        if (e) {
            if ((0 > c && 0 < b) || (g > c && g < b) || (b < c)) {
                f.add({ $type: Point_$type, x: a.x + Math.cos(0) * d, y: a.y + Math.sin(0) * d });
            }
            if (h > c && h < b) {
                f.add({ $type: Point_$type, x: a.x + Math.cos(h) * d, y: a.y + Math.sin(h) * d });
            }
            if (i > c && i < b) {
                f.add({ $type: Point_$type, x: a.x + Math.cos(i) * d, y: a.y + Math.sin(i) * d });
            }
            if (j > c && j < b) {
                f.add({ $type: Point_$type, x: a.x + Math.cos(j) * d, y: a.y + Math.sin(j) * d });
            }
        }
        else {
            if ((0 > b && 0 < c) || (g > b && g < c) || (c < b)) {
                f.add({ $type: Point_$type, x: a.x + Math.cos(0) * d, y: a.y + Math.sin(0) * d });
            }
            if (h > b && h < c) {
                f.add({ $type: Point_$type, x: a.x + Math.cos(h) * d, y: a.y + Math.sin(h) * d });
            }
            if (i > b && i < c) {
                f.add({ $type: Point_$type, x: a.x + Math.cos(i) * d, y: a.y + Math.sin(i) * d });
            }
            if (j > b && j < c) {
                f.add({ $type: Point_$type, x: a.x + Math.cos(j) * d, y: a.y + Math.sin(j) * d });
            }
        }
        let k = 1.7976931348623157E+308;
        let l = 1.7976931348623157E+308;
        let m = -1.7976931348623157E+308;
        let n = -1.7976931348623157E+308;
        for (let o = 0; o < f.count; o++) {
            let p = f._inner[o];
            k = Math.min(k, p.x);
            l = Math.min(l, p.y);
            m = Math.max(m, p.x);
            n = Math.max(n, p.y);
        }
        this.g = Math.min(this.g, k);
        this.h = Math.min(this.h, l);
        this.e = Math.max(this.e, m);
        this.f = Math.max(this.f, n);
        this.c = true;
    }
    m(a) {
        let b = this.z;
        let c = a.e;
        if (a.f.width != a.f.height) {
            this.i.save();
            this.i.scale(a.f.width / a.f.height, 1);
            b = { $type: Point_$type, x: b.x * (a.f.height / a.f.width), y: b.y };
            c = { $type: Point_$type, x: c.x * (a.f.height / a.f.width), y: c.y };
        }
        let d = a.d == 0;
        let e = CoreGeometryUtil.b(b, c, a.f.height, d, a.b);
        let f = Math.atan2(b.y - e.y, b.x - e.x);
        let g = Math.atan2(c.y - e.y, c.x - e.x);
        let h = (Math.abs(g - f) < Math.PI);
        if (a.b == h) {
            if (f < g) {
                f += 2 * Math.PI;
            }
            else {
                g += 2 * Math.PI;
            }
        }
        if (!isNaN_(e.x) && !isNaN_(e.y) && !isNaN_(a.f.height) && !isNaN_(f) && !isNaN_(g)) {
            this.i.arc(e.x, e.y, a.f.height, f, g, d);
            if (this.b) {
                this.x(e, f, g, a.f.height, d);
            }
        }
        this.z = a.e;
        if (a.f.width != a.f.height) {
            this.i.restore();
        }
    }
    r(a) {
        let b = a.c.x;
        let c = a.c.y;
        this.i.lineTo(b, c);
        this.z = a.c;
        if (this.b) {
            let d = this.e;
            let e = this.f;
            let f = this.g;
            let g = this.h;
            this.g = b < f ? b : f;
            this.h = c < g ? c : g;
            this.e = b > d ? b : d;
            this.f = c > e ? c : e;
            this.c = true;
        }
    }
    u(a) {
        let b = a._points;
        let c = b.count;
        if (this.b) {
            let d = this.g;
            let e = this.h;
            let f = this.e;
            let g = this.f;
            let h;
            let i;
            for (let j = 0; j < c; j++) {
                h = b._inner[j].x;
                i = b._inner[j].y;
                this.i.lineTo(h, i);
                d = h < d ? h : d;
                e = i < e ? i : e;
                f = h > f ? h : f;
                g = i > g ? i : g;
            }
            this.g = d;
            this.h = e;
            this.e = f;
            this.f = g;
            this.c = true;
        }
        else {
            for (let k = 0; k < c; k++) {
                this.i.lineTo(b._inner[k].x, b._inner[k].y);
            }
        }
        this.z = a._points._inner[c - 1];
    }
    v(a) {
        this.i.rect(a.d.left, a.d.top, a.d.width, a.d.height);
        if (this.b) {
            let b = a.d;
            let c = this.g;
            let d = this.h;
            let e = this.e;
            let f = this.f;
            let g = b.left;
            let h = b.right;
            let i = b.top;
            let j = b.bottom;
            this.g = g < c ? g : c;
            this.h = i < d ? i : d;
            this.e = h > e ? h : e;
            this.f = j > f ? j : f;
            this.c = true;
        }
    }
    q(a) {
        this.i.moveTo(a.c.x, a.c.y);
        this.i.lineTo(a.b.x, a.b.y);
        if (this.b) {
            let b = a.c;
            let c = a.b;
            let d = this.g;
            let e = this.h;
            let f = this.e;
            let g = this.f;
            let h = b.x < c.x ? b.x : c.x;
            let i = b.x > c.x ? b.x : c.x;
            let j = b.y < c.y ? b.y : c.y;
            let k = b.y > c.y ? b.y : c.y;
            this.g = h < d ? h : d;
            this.h = j < e ? j : e;
            this.e = i > f ? i : f;
            this.f = k > g ? k : g;
            this.c = true;
        }
    }
    h$u(a) {
        if (a._visibility == 0 && a.ak != null) {
            if (a._opacity < 1 || this.d < 1) {
                this.i.globalAlpha = (a._opacity * this.d);
            }
            let def_ = this.l;
            let con_ = this.i;
            con_.textAlign = def_;
            this.i.fillStyle = a.am != null ? a.am._fill : null;
            this.i.textBaseline = "top";
            this.i.fillText(a.ak, a.n, a.o);
            if (a._opacity < 1 || this.d < 1) {
                this.i.globalAlpha = 1;
            }
        }
    }
    h$v(a, b, c) {
        if (a._visibility == 0) {
            if (a._opacity < 1 || this.d < 1) {
                this.i.globalAlpha = (a._opacity * this.d);
            }
            let d = b.left + b.width / 2;
            let e = a.ak.split(' ');
            this.i.fillStyle = a.am._fill;
            this.i.textBaseline = "top";
            this.i.textAlign = "center";
            let f = b.width;
            let g = b.height;
            let h = b.top;
            let i = "";
            for (let j = 0; j < e.length; j++) {
                let k = i + e[j];
                let l = this.i.measureText(k);
                if (l.width > f) {
                    if (i != null) {
                        this.i.fillText(i, d, h);
                    }
                    i = "";
                    h = h + c;
                }
                i = i + e[j] + " ";
            }
            if (i != null) {
                this.i.fillText(i, d, h);
            }
            if (a._opacity < 1 || this.d < 1) {
                this.i.globalAlpha = 1;
            }
        }
    }
    h$r(a) {
        if (a.aj == null || a.aj.count < 1) {
            return;
        }
        this.i.beginPath();
        this.i.globalAlpha = (a._opacity * this.d);
        let b = a.aj;
        let c = b._inner[0];
        let d = a._fill;
        let e = a._stroke;
        this.b = (d != null && d.isGradient) || (e != null && e.isGradient);
        if (this.b) {
            let f = 1.7976931348623157E+308;
            let g = -1.7976931348623157E+308;
            let h = 1.7976931348623157E+308;
            let i = -1.7976931348623157E+308;
            let j = c.x;
            let k = c.y;
            f = j < f ? j : f;
            h = k < h ? k : h;
            g = j > g ? j : g;
            i = k > i ? k : i;
            this.i.moveTo(j, k);
            for (let l = 1; l < b.count; l++) {
                j = b._inner[l].x;
                k = b._inner[l].y;
                this.i.lineTo(j, k);
                f = j < f ? j : f;
                h = k < h ? k : h;
                g = j > g ? j : g;
                i = k > i ? k : i;
            }
            this.i.closePath();
            this.g = f;
            this.h = h;
            this.e = g;
            this.f = i;
        }
        else {
            this.i.moveTo(c.x, c.y);
            for (let m = 1; m < b.count; m++) {
                this.i.lineTo(b._inner[m].x, b._inner[m].y);
            }
            this.i.closePath();
        }
        if (d != null) {
            if (d.isGradient) {
                this.i.fillStyle = this.k(d, this.g, this.h, this.e, this.f, a.ac, false);
            }
            else {
                this.i.fillStyle = d._fill;
            }
            this.i.fill();
        }
        if (e != null) {
            if (e.isGradient) {
                this.i.strokeStyle = this.k(e, this.g, this.h, this.e, this.f, a.ac, true);
            }
            else {
                this.i.strokeStyle = e._fill;
            }
            this.i.lineWidth = a.ac;
            this.i.stroke();
        }
        this.i.globalAlpha = 1;
    }
    h$s(a) {
        if (a.aj == null || a.aj.count < 1) {
            return;
        }
        this.i.beginPath();
        this.i.globalAlpha = (a._opacity * this.d);
        let b = a.aj;
        let c = b._inner[0];
        let d = a._fill;
        let e = a._stroke;
        this.b = (d != null && d.isGradient) || (e != null && e.isGradient);
        if (this.b) {
            let f = 1.7976931348623157E+308;
            let g = -1.7976931348623157E+308;
            let h = 1.7976931348623157E+308;
            let i = -1.7976931348623157E+308;
            let j = c.x;
            let k = c.y;
            f = j < f ? j : f;
            h = k < h ? k : h;
            g = j > g ? j : g;
            i = k > i ? k : i;
            this.i.moveTo(j, k);
            for (let l = 1; l < b.count; l++) {
                j = b._inner[l].x;
                k = b._inner[l].y;
                this.i.lineTo(j, k);
                f = j < f ? j : f;
                h = k < h ? k : h;
                g = j > g ? j : g;
                i = k > i ? k : i;
            }
            this.g = f;
            this.h = h;
            this.e = g;
            this.f = i;
        }
        else {
            this.i.moveTo(c.x, c.y);
            for (let m = 1; m < b.count; m++) {
                this.i.lineTo(b._inner[m].x, b._inner[m].y);
            }
        }
        if (d != null) {
            if (d.isGradient) {
                this.i.fillStyle = this.k(d, this.g, this.h, this.e, this.f, a.ac, false);
            }
            else {
                this.i.fillStyle = d._fill;
            }
            this.i.fill();
        }
        if (e != null) {
            if (e.isGradient) {
                this.i.strokeStyle = this.k(e, this.g, this.h, this.e, this.f, a.ac, true);
            }
            else {
                this.i.strokeStyle = e._fill;
            }
            this.i.lineWidth = a.ac;
            this.i.stroke();
        }
        this.i.globalAlpha = 1;
    }
    h$n(a, b) {
        if (b._visibility == 1) {
            return;
        }
        if ((b._opacity != 1 || this.d != 1) && !a.isHitTestRender) {
            this.i.globalAlpha = (b._opacity * this.d);
        }
        let c = b.ah;
        if (c != null && c.render != null) {
            a.context = this.i;
            a.xPosition = b.n;
            a.yPosition = b.o;
            a.data = b.content;
            c.render(a);
        }
        this.i.globalAlpha = 1;
    }
    h$h(a) {
        if (typeCast(TransformGroup.$, a) !== null) {
            let b = a;
            for (let c = b.j.count - 1; c >= 0; c--) {
                let d = b.j._inner[c];
                this.h$h(d);
            }
        }
        else if (typeCast(TranslateTransform.$, a) !== null) {
            let e = a;
            this.i.translate(e.j, e.k);
        }
        else if (typeCast(RotateTransform.$, a) !== null) {
            let f = a;
            let g = f.j * Math.PI / 180;
            let h = Math.cos(g);
            let i = Math.sin(g);
            let j = f.k * (1 - h) + f.l * i;
            let k = f.l * (1 - h) - f.k * i;
            this.i.transform(h, i, i * -1, h, j, k);
        }
        else if (typeCast(ScaleTransform.$, a) !== null) {
            let l = a;
            this.i.transform(l.l, 0, 0, l.m, l.j - l.l * l.j, l.k - l.m * l.k);
        }
    }
    h$p(a) {
        if (a._visibility != 0) {
            return;
        }
        this.i.beginPath();
        this.i.globalAlpha = (a._opacity * this.d);
        this.i.moveTo(a.aj, a.al);
        this.i.lineTo(a.ak, a.am);
        if (this.b) {
            this.g = 1.7976931348623157E+308;
            this.e = -1.7976931348623157E+308;
            this.h = 1.7976931348623157E+308;
            this.f = -1.7976931348623157E+308;
            let b = this.g;
            let c = this.h;
            let d = this.e;
            let e = this.f;
            let f = a.aj < a.ak ? a.aj : a.ak;
            let g = a.aj > a.ak ? a.aj : a.ak;
            let h = a.al < a.am ? a.al : a.am;
            let i = a.al > a.am ? a.al : a.am;
            this.g = f < b ? f : b;
            this.h = h < c ? h : c;
            this.e = g > d ? g : d;
            this.f = i > e ? i : e;
        }
        let j = a._fill;
        let k = a._stroke;
        if (j != null) {
            if (j.isGradient) {
                this.i.fillStyle = this.k(j, this.g, this.h, this.e, this.e, a.ac, false);
            }
            else {
                this.i.fillStyle = j._fill;
            }
            this.i.fill();
        }
        if (k != null) {
            if (k.isGradient) {
                this.i.strokeStyle = this.k(k, this.g, this.h, this.e, this.e, a.ac, true);
            }
            else {
                this.i.strokeStyle = a._stroke._fill;
            }
            this.i.lineWidth = a.ac;
            this.i.stroke();
        }
        this.i.globalAlpha = 1;
    }
    h$ac(a) {
        this.i.beginPath();
        this.i.rect(a.left, a.top, a.width, a.height);
        this.i.clip();
    }
    h$x() {
        this.i.save();
    }
    h$w() {
        this.i.restore();
    }
    h$y(a, b) {
        this.i.scale(a, b);
    }
    h$ad(a, b) {
        this.i.translate(a, b);
    }
    h$i(a, b, c, d) {
        this.i.clearRect(a, b, c, d);
    }
    h$k(a, b, c, d, e, f) {
        if (b != 1) {
            this.i.globalAlpha = (b * this.d);
        }
        this.i.drawImage(a, c, d, e, f);
        if (b != 1) {
            this.i.globalAlpha = 1;
        }
    }
    h$l(a, b, c, d, e, f, g, h, i, j) {
        if (b != 1) {
            this.i.globalAlpha = (b * this.d);
        }
        this.i.drawImage(a, c, d, e, f, g, h, i, j);
        if (b != 1) {
            this.i.globalAlpha = 1;
        }
    }
    h$a(a, b) {
        let c = this.i.getImageData(a, b, 1, 1);
        let d = new Array(4);
        d[0] = c.data[0];
        d[1] = c.data[1];
        d[2] = c.data[2];
        d[3] = c.data[3];
        return d;
    }
    h$f() {
        return this.i.font;
    }
    h$b() {
        return this.a;
    }
    h$z(a) {
        if (this.i.font != a) {
            this.i.font = a;
        }
    }
    h$aa(a) {
        this.a = a;
        let b = a != null ? a.fontString : null;
        if (this.i.font != b) {
            this.i.font = b;
        }
    }
    h$c(a) {
        let b = this.i.measureText(a);
        return b.width;
    }
    h$ab(a) {
        this.d = a;
    }
    h$g(shape_, style_) {
        if (style_ == null) {
            return;
        }
        let fillColor_ = null;
        let strokeColor_ = null;
        let strokeThickness_ = NaN;
        let opacity_ = NaN;
        let s_ = style_;
        if (s_.fill) {
            fillColor_ = s_.fill;
        }
        ;
        if (s_.stroke) {
            strokeColor_ = s_.stroke;
        }
        ;
        if (s_.strokeThickness) {
            strokeThickness_ = s_.strokeThickness;
        }
        ;
        if (s_.opacity) {
            opacity_ = s_.opacity;
        }
        ;
        if (fillColor_ != null) {
            shape_._fill = ((() => {
                let $ret = new Brush();
                $ret.fill = fillColor_;
                return $ret;
            })());
        }
        if (strokeColor_ != null) {
            shape_._stroke = ((() => {
                let $ret = new Brush();
                $ret.fill = strokeColor_;
                return $ret;
            })());
        }
        if (strokeThickness_ != undefined && !isNaN_(strokeThickness_)) {
            shape_.ac = strokeThickness_;
        }
        if (!isNaN_(opacity_)) {
            shape_._opacity = opacity_;
        }
    }
    h$m(a, b, c, d) {
        this.i.shadowColor = a;
        this.i.shadowBlur = b;
        this.i.shadowOffsetX = c;
        this.i.shadowOffsetY = d;
    }
    h$j() {
        this.i.shadowColor = "rgba(0,0,0,0)";
        this.i.shadowBlur = 0;
        this.i.shadowOffsetX = 0;
        this.i.shadowOffsetY = 0;
    }
}
CanvasViewRenderer.$t = markType(CanvasViewRenderer, 'CanvasViewRenderer', Base.$, [IRenderer_$type]);
//# sourceMappingURL=CanvasViewRenderer.js.map