/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Brush } from "./Brush";
import { LinearGradientBrush } from "./LinearGradientBrush";
import { GradientStop } from "./GradientStop";
import { Color } from "./Color";
import { ColorUtil } from "./ColorUtil";
import { BrushCollection } from "./BrushCollection";
import { List$1 } from "./List$1";
import { CssGradientUtil } from "./CssGradientUtil";
/**
 * @hidden
 */
export class BrushUtil extends Base {
    static h(a, b) {
        if (a == null) {
            return a;
        }
        if (a.isGradient) {
            let c = a.clone();
            for (let d = 0; d < c.gradientStops.length; d++) {
                let e = c.gradientStops[d];
                e.color = ColorUtil.o(e.color, b);
            }
            return c;
        }
        else {
            let f = ColorUtil.o(a.color, b);
            return ((() => {
                let $ret = new Brush();
                $ret.color = f;
                return $ret;
            })());
        }
    }
    static g(a, b, c, d) {
        let e = new Brush();
        if (a == null && c == null) {
            e._fill = "transparent";
            return e;
        }
        let f = null, g = null;
        let h = null, i = null;
        if (a == null) {
            let j = c.isGradient ? ((() => {
                let $ret = new Color();
                $ret.l = 0;
                $ret.o = 255;
                $ret.n = 255;
                $ret.m = 255;
                return $ret;
            })()) : ((() => {
                let $ret = new Color();
                $ret.l = 0;
                $ret.o = c.color.o;
                $ret.n = c.color.n;
                $ret.m = c.color.m;
                return $ret;
            })());
            f = ((() => {
                let $ret = new Brush();
                $ret.color = j;
                return $ret;
            })());
        }
        else {
            if (a.isGradient) {
                h = a;
            }
            else {
                f = a;
            }
        }
        if (c == null) {
            let k = a.isGradient ? ((() => {
                let $ret = new Color();
                $ret.l = 0;
                $ret.o = 255;
                $ret.n = 255;
                $ret.m = 255;
                return $ret;
            })()) : ((() => {
                let $ret = new Color();
                $ret.l = 0;
                $ret.o = a.color.o;
                $ret.n = a.color.n;
                $ret.m = a.color.m;
                return $ret;
            })());
            g = ((() => {
                let $ret = new Brush();
                $ret.color = k;
                return $ret;
            })());
        }
        else {
            if (c.isGradient) {
                i = c;
            }
            else {
                g = c;
            }
        }
        if (f != null && g != null) {
            return BrushUtil.k(f, b, g, d);
        }
        if (f != null && i != null) {
            return BrushUtil.j(f, b, i, d);
        }
        if (h != null && g != null) {
            return BrushUtil.j(g, 1 - b, h, d);
        }
        if (h != null && i != null) {
            return BrushUtil.i(h, b, i, d);
        }
        return e;
    }
    static k(a, b, c, d) {
        let e = new Brush();
        e.color = ColorUtil.n(a.color, b, c.color, d);
        return e;
    }
    static j(a, b, c, d) {
        let e = new LinearGradientBrush();
        e.gradientStops = BrushUtil.c(a.color, b, c.gradientStops, d);
        if (c.useCustomDirection) {
            e.useCustomDirection = true;
            e.startX = c.startX;
            e.startY = c.startY;
            e.endX = c.endX;
            e.endY = c.endY;
        }
        return e;
    }
    static i(a, b, c, d) {
        let e = new LinearGradientBrush();
        e.gradientStops = BrushUtil.b(a.gradientStops, b, c.gradientStops, d);
        if (a.useCustomDirection || c.useCustomDirection) {
            e.useCustomDirection = true;
            e.startX = a.startX + b * (c.startX - a.startX);
            e.startY = a.startY + b * (c.startY - a.startY);
            e.endX = (1 - b) * a.endX + b * c.endX;
            e.endY = (1 - b) * a.endY + b * c.endY;
        }
        return e;
    }
    static c(a, b, c, d) {
        let e = new Array(c.length);
        for (let f = 0; f < c.length; ++f) {
            e[f] = ((() => {
                let $ret = new GradientStop();
                $ret.offset = c[f].offset;
                $ret.color = ColorUtil.n(a, b, c[f].color, d);
                return $ret;
            })());
        }
        return e;
    }
    static b(a, b, c, d) {
        let e = Math.min(a.length, c.length);
        let f = Math.max(a.length, c.length);
        let g = new Array(f);
        let h = 0;
        for (; h < e; ++h) {
            g[h] = ((() => {
                let $ret = new GradientStop();
                $ret.offset = (1 - b) * a[h].offset + b * c[h].offset;
                $ret.color = ColorUtil.n(a[h].color, b, c[h].color, d);
                return $ret;
            })());
        }
        for (; h < a.length; ++h) {
            g[h] = ((() => {
                let $ret = new GradientStop();
                $ret.offset = (1 - b) * a[h].offset + b * c[c.length - 1].offset;
                $ret.color = ColorUtil.n(a[h].color, b, c[c.length - 1].color, d);
                return $ret;
            })());
        }
        for (; h < c.length; ++h) {
            g[h] = ((() => {
                let $ret = new GradientStop();
                $ret.offset = (1 - b) * a[a.length - 1].offset + b * c[h].offset;
                $ret.color = ColorUtil.n(a[a.length - 1].color, b, c[h].color, d);
                return $ret;
            })());
        }
        return g;
    }
    static a(a, b) {
        let c = new Array(2);
        b.addClass(a);
        let d = new Brush();
        d._fill = b.getStyleProperty("background-color");
        let e = new Brush();
        e._fill = b.getStyleProperty("border-top-color");
        b.removeClass(a);
        c[0] = d;
        c[1] = e;
        return c;
    }
    static d(palleteName_, container_, a, b, c = null) {
        a = new BrushCollection();
        b = new BrushCollection();
        let d;
        let e = new List$1(String_$type, 0);
        e.add("background-color");
        e.add("border-top-color");
        container_.startCSSQuery();
        let f = container_.getCssDefaultValuesForClassCollection("ui-" + palleteName_ + "-palette-", e.toArray());
        let g = f.length;
        if (g == 0) {
            if (c == null) {
                c = ["#B1BFC9", "#50a8be", "#798995", "#fc6754", "#4F606C", "#fec33c", "#374650", "#3c6399", "#162C3B", "#91af49"];
            }
            for (let h = 0; h < c.length - 1; h += 2) {
                d = new Brush();
                d._fill = c[h];
                b.add(d);
                d = new Brush();
                d._fill = c[h + 1];
                a.add(d);
            }
        }
        for (let i = 0; i < g; i++) {
            let j = new Brush();
            j._fill = f[i][0];
            let k = new Brush();
            k._fill = f[i][1];
            a.add(j);
            b.add(k);
        }
        container_.endCSSQuery();
        return {
            p2: a,
            p3: b
        };
    }
    static e(a, b, c, container_, d, e, f = null) {
        d = new BrushCollection();
        e = new BrushCollection();
        if (f == null) {
            f = ["#B1BFC9", "#50a8be", "#798995", "#fc6754", "#4F606C", "#fec33c", "#374650", "#3c6399", "#162C3B", "#91af49"];
        }
        container_.startCSSQuery();
        let g = new List$1(String_$type, 0);
        g.add("background-image");
        let h = container_.getCssDefaultValuesForClassCollection(a, g.toArray());
        let i = h.length;
        let j = container_.getCssDefaultValuesForClassCollection(b, g.toArray());
        let k = j.length;
        for (let l = 0; l < i; l++) {
            d.add(CssGradientUtil.brushFromGradientString(h[l][0]));
        }
        for (let m = 0; m < k; m++) {
            e.add(CssGradientUtil.brushFromGradientString(j[m][0]));
        }
        g.clear();
        let n = 0;
        let o = 0;
        let p = Math.min(i, k);
        let q = null;
        if (i == 0) {
            g.add("background-color");
        }
        if (k == 0) {
            g.add("border-top-color");
            o = i == 0 ? 1 : 0;
        }
        if (g.count > 0) {
            q = container_.getCssDefaultValuesForClassCollection(c, g.toArray());
            p = q.length;
        }
        if (i == 0) {
            if (p > 0) {
                for (let r = 0; r < p; r++) {
                    let s = new Brush();
                    s._fill = q[r][n];
                    d.add(s);
                }
            }
            else {
                for (let t = 0; t < f.length - 1; t += 2) {
                    let u = new Brush();
                    u = new Brush();
                    u._fill = f[t + 1];
                    d.add(u);
                }
            }
        }
        if (k == 0) {
            if (p > 0) {
                for (let v = 0; v < p; v++) {
                    let w = new Brush();
                    w._fill = q[v][o];
                    e.add(w);
                }
            }
            else {
                for (let x = 0; x < f.length - 1; x += 2) {
                    let y = new Brush();
                    y._fill = f[x];
                    e.add(y);
                }
            }
        }
        container_.endCSSQuery();
        return {
            p4: d,
            p5: e
        };
    }
    static f(a, b, c, container_, d) {
        let e = null;
        container_.startCSSQuery();
        let f = container_.getCssDefaultPropertyValue(a, "background-image");
        if (f != null) {
            e = CssGradientUtil.brushFromGradientString(f);
        }
        if (e == null) {
            e = new Brush();
            let g = container_.getCssDefaultPropertyValue(b, c);
            e._fill = g != null ? g : d;
        }
        container_.endCSSQuery();
        return e;
    }
}
BrushUtil.$t = markType(BrushUtil, 'BrushUtil');
//# sourceMappingURL=BrushUtil.js.map