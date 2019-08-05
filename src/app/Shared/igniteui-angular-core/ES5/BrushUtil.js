/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
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
var BrushUtil = /** @class */ (function (_super) {
    tslib_1.__extends(BrushUtil, _super);
    function BrushUtil() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BrushUtil.h = function (a, b) {
        if (a == null) {
            return a;
        }
        if (a.isGradient) {
            var c = a.clone();
            for (var d = 0; d < c.gradientStops.length; d++) {
                var e = c.gradientStops[d];
                e.color = ColorUtil.o(e.color, b);
            }
            return c;
        }
        else {
            var f_1 = ColorUtil.o(a.color, b);
            return ((function () {
                var $ret = new Brush();
                $ret.color = f_1;
                return $ret;
            })());
        }
    };
    BrushUtil.g = function (a, b, c, d) {
        var e = new Brush();
        if (a == null && c == null) {
            e._fill = "transparent";
            return e;
        }
        var f = null, g = null;
        var h = null, i = null;
        if (a == null) {
            var j_1 = c.isGradient ? ((function () {
                var $ret = new Color();
                $ret.l = 0;
                $ret.o = 255;
                $ret.n = 255;
                $ret.m = 255;
                return $ret;
            })()) : ((function () {
                var $ret = new Color();
                $ret.l = 0;
                $ret.o = c.color.o;
                $ret.n = c.color.n;
                $ret.m = c.color.m;
                return $ret;
            })());
            f = ((function () {
                var $ret = new Brush();
                $ret.color = j_1;
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
            var k_1 = a.isGradient ? ((function () {
                var $ret = new Color();
                $ret.l = 0;
                $ret.o = 255;
                $ret.n = 255;
                $ret.m = 255;
                return $ret;
            })()) : ((function () {
                var $ret = new Color();
                $ret.l = 0;
                $ret.o = a.color.o;
                $ret.n = a.color.n;
                $ret.m = a.color.m;
                return $ret;
            })());
            g = ((function () {
                var $ret = new Brush();
                $ret.color = k_1;
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
    };
    BrushUtil.k = function (a, b, c, d) {
        var e = new Brush();
        e.color = ColorUtil.n(a.color, b, c.color, d);
        return e;
    };
    BrushUtil.j = function (a, b, c, d) {
        var e = new LinearGradientBrush();
        e.gradientStops = BrushUtil.c(a.color, b, c.gradientStops, d);
        if (c.useCustomDirection) {
            e.useCustomDirection = true;
            e.startX = c.startX;
            e.startY = c.startY;
            e.endX = c.endX;
            e.endY = c.endY;
        }
        return e;
    };
    BrushUtil.i = function (a, b, c, d) {
        var e = new LinearGradientBrush();
        e.gradientStops = BrushUtil.b(a.gradientStops, b, c.gradientStops, d);
        if (a.useCustomDirection || c.useCustomDirection) {
            e.useCustomDirection = true;
            e.startX = a.startX + b * (c.startX - a.startX);
            e.startY = a.startY + b * (c.startY - a.startY);
            e.endX = (1 - b) * a.endX + b * c.endX;
            e.endY = (1 - b) * a.endY + b * c.endY;
        }
        return e;
    };
    BrushUtil.c = function (a, b, c, d) {
        var e = new Array(c.length);
        var _loop_1 = function (f) {
            e[f] = ((function () {
                var $ret = new GradientStop();
                $ret.offset = c[f].offset;
                $ret.color = ColorUtil.n(a, b, c[f].color, d);
                return $ret;
            })());
        };
        for (var f = 0; f < c.length; ++f) {
            _loop_1(f);
        }
        return e;
    };
    BrushUtil.b = function (a, b, c, d) {
        var e = Math.min(a.length, c.length);
        var f = Math.max(a.length, c.length);
        var g = new Array(f);
        var h = 0;
        for (; h < e; ++h) {
            g[h] = ((function () {
                var $ret = new GradientStop();
                $ret.offset = (1 - b) * a[h].offset + b * c[h].offset;
                $ret.color = ColorUtil.n(a[h].color, b, c[h].color, d);
                return $ret;
            })());
        }
        for (; h < a.length; ++h) {
            g[h] = ((function () {
                var $ret = new GradientStop();
                $ret.offset = (1 - b) * a[h].offset + b * c[c.length - 1].offset;
                $ret.color = ColorUtil.n(a[h].color, b, c[c.length - 1].color, d);
                return $ret;
            })());
        }
        for (; h < c.length; ++h) {
            g[h] = ((function () {
                var $ret = new GradientStop();
                $ret.offset = (1 - b) * a[a.length - 1].offset + b * c[h].offset;
                $ret.color = ColorUtil.n(a[a.length - 1].color, b, c[h].color, d);
                return $ret;
            })());
        }
        return g;
    };
    BrushUtil.a = function (a, b) {
        var c = new Array(2);
        b.addClass(a);
        var d = new Brush();
        d._fill = b.getStyleProperty("background-color");
        var e = new Brush();
        e._fill = b.getStyleProperty("border-top-color");
        b.removeClass(a);
        c[0] = d;
        c[1] = e;
        return c;
    };
    BrushUtil.d = function (palleteName_, container_, a, b, c) {
        if (c === void 0) { c = null; }
        a = new BrushCollection();
        b = new BrushCollection();
        var d;
        var e = new List$1(String_$type, 0);
        e.add("background-color");
        e.add("border-top-color");
        container_.startCSSQuery();
        var f = container_.getCssDefaultValuesForClassCollection("ui-" + palleteName_ + "-palette-", e.toArray());
        var g = f.length;
        if (g == 0) {
            if (c == null) {
                c = ["#B1BFC9", "#50a8be", "#798995", "#fc6754", "#4F606C", "#fec33c", "#374650", "#3c6399", "#162C3B", "#91af49"];
            }
            for (var h = 0; h < c.length - 1; h += 2) {
                d = new Brush();
                d._fill = c[h];
                b.add(d);
                d = new Brush();
                d._fill = c[h + 1];
                a.add(d);
            }
        }
        for (var i = 0; i < g; i++) {
            var j = new Brush();
            j._fill = f[i][0];
            var k = new Brush();
            k._fill = f[i][1];
            a.add(j);
            b.add(k);
        }
        container_.endCSSQuery();
        return {
            p2: a,
            p3: b
        };
    };
    BrushUtil.e = function (a, b, c, container_, d, e, f) {
        if (f === void 0) { f = null; }
        d = new BrushCollection();
        e = new BrushCollection();
        if (f == null) {
            f = ["#B1BFC9", "#50a8be", "#798995", "#fc6754", "#4F606C", "#fec33c", "#374650", "#3c6399", "#162C3B", "#91af49"];
        }
        container_.startCSSQuery();
        var g = new List$1(String_$type, 0);
        g.add("background-image");
        var h = container_.getCssDefaultValuesForClassCollection(a, g.toArray());
        var i = h.length;
        var j = container_.getCssDefaultValuesForClassCollection(b, g.toArray());
        var k = j.length;
        for (var l = 0; l < i; l++) {
            d.add(CssGradientUtil.brushFromGradientString(h[l][0]));
        }
        for (var m = 0; m < k; m++) {
            e.add(CssGradientUtil.brushFromGradientString(j[m][0]));
        }
        g.clear();
        var n = 0;
        var o = 0;
        var p = Math.min(i, k);
        var q = null;
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
                for (var r = 0; r < p; r++) {
                    var s = new Brush();
                    s._fill = q[r][n];
                    d.add(s);
                }
            }
            else {
                for (var t = 0; t < f.length - 1; t += 2) {
                    var u = new Brush();
                    u = new Brush();
                    u._fill = f[t + 1];
                    d.add(u);
                }
            }
        }
        if (k == 0) {
            if (p > 0) {
                for (var v = 0; v < p; v++) {
                    var w = new Brush();
                    w._fill = q[v][o];
                    e.add(w);
                }
            }
            else {
                for (var x = 0; x < f.length - 1; x += 2) {
                    var y = new Brush();
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
    };
    BrushUtil.f = function (a, b, c, container_, d) {
        var e = null;
        container_.startCSSQuery();
        var f = container_.getCssDefaultPropertyValue(a, "background-image");
        if (f != null) {
            e = CssGradientUtil.brushFromGradientString(f);
        }
        if (e == null) {
            e = new Brush();
            var g = container_.getCssDefaultPropertyValue(b, c);
            e._fill = g != null ? g : d;
        }
        container_.endCSSQuery();
        return e;
    };
    BrushUtil.$t = markType(BrushUtil, 'BrushUtil');
    return BrushUtil;
}(Base));
export { BrushUtil };
//# sourceMappingURL=BrushUtil.js.map