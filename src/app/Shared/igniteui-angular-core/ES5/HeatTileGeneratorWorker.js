/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, Number_$type, markType } from "./type";
import { List$1 } from "./List$1";
import { HeatTileImageCreatedEventArgs } from "./HeatTileImageCreatedEventArgs";
import { truncate, isNaN_, logBase } from "./number";
/**
 * @hidden
 */
var HeatTileGeneratorWorker = /** @class */ (function (_super) {
    tslib_1.__extends(HeatTileGeneratorWorker, _super);
    function HeatTileGeneratorWorker(a) {
        var _this = _super.call(this) || this;
        _this.f = null;
        _this.a = null;
        _this.n = 0;
        _this.o = 0;
        _this.p = 0;
        _this.w = null;
        _this.u = 0;
        _this.h = false;
        _this.r = 0;
        _this.i = 0;
        _this.j = 0;
        _this.k = 0;
        _this.l = 0;
        _this._completedSink = null;
        _this.f = a;
        HeatTileGeneratorWorker.s++;
        if (HeatTileGeneratorWorker.s == 0x7FFFFFFFFFFFFFFF) {
            HeatTileGeneratorWorker.s = 0;
        }
        _this.r = HeatTileGeneratorWorker.s;
        return _this;
    }
    Object.defineProperty(HeatTileGeneratorWorker.prototype, "t", {
        get: function () {
            return this.r;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeatTileGeneratorWorker.prototype, "g", {
        get: function () {
            return this.f;
        },
        enumerable: true,
        configurable: true
    });
    HeatTileGeneratorWorker.prototype.doWork = function () {
        var a = this.g.blurRadius;
        var b = a;
        var c = this.g.maxBlurRadius;
        var d = this.g.scaler;
        this.n = this.g.x;
        this.o = this.g.y;
        this.p = this.g.z;
        if (this.g.useBlurRadiusAdjustedForZoom && this.p > 0) {
            var e = Math.sqrt(1 * 1 + 1 * 1) * Math.pow(2, this.p - 1);
            b = a * e;
        }
        if (!isNaN_(c)) {
            if (b > c) {
                b = c;
            }
        }
        var f = this.g.xValues;
        var g = this.g.yValues;
        var h = this.g.values;
        var i = this.g.xValues.length;
        var j = this.g.yValues.length;
        var k;
        var l;
        var m;
        var n;
        var o;
        var p;
        var q;
        var r = this.g.minimumVisibleLongitude;
        var s = this.g.maximumVisibleLongitude;
        var t = this.g.minimumVisibleLatitude;
        var u = this.g.maximumVisibleLatitude;
        var v = this.q(this.g.tileViewport, b);
        var w = this.c(v, b);
        var x = Math.abs(d.t(0, this.g.window, this.g.tileViewport) - d.t(b, this.g.window, this.g.tileViewport));
        var y = Math.abs(d.u(0, this.g.window, this.g.tileViewport) - d.u(b, this.g.window, this.g.tileViewport));
        var z;
        var aa;
        var ab = new List$1(Number_$type, 0);
        var ac = new List$1(Number_$type, 0);
        var ad = new List$1(Number_$type, 0);
        for (var ae = 0; ae < i; ae++) {
            k = f[ae];
            l = g[ae];
            m = h[ae];
            n = k - y;
            o = k + y;
            p = l - x;
            q = l + x;
            if (o < r || q < t || p > u || n > s) {
                continue;
            }
            ab.add(k);
            ac.add(l);
            ad.add(m);
        }
        var af = this.d(this.g.tileViewport);
        var ag = this.b(this.g.tileViewport);
        var ah = truncate(this.g.tileViewport.width);
        var ai = ac.count;
        d.v(ac, this.g.window, this.g.tileViewport);
        d.w(ab, this.g.window, this.g.tileViewport);
        var aj;
        var ak;
        var al;
        var am;
        for (var an = 0; an < ai; an++) {
            z = truncate(Math.floor(ab._inner[an] - b));
            aa = truncate(Math.floor(ac._inner[an] - b));
            for (var ao = z; ao < z + v; ao++) {
                for (var ap = aa; ap < aa + v; ap++) {
                    aj = ao - z;
                    ak = ap - aa;
                    if (ao < 0 || ao > (ah - 1) || ap < 0 || ap > (ah - 1)) {
                        continue;
                    }
                    al = w[ak * v + aj];
                    am = ad._inner[an] * al;
                    ag[ap * ah + ao] = ag[ap * ah + ao] + am;
                }
            }
        }
        var aq = ag.length;
        var ar = -1.7976931348623157E+308;
        var as = 1.7976931348623157E+308;
        var at;
        if (!isNaN_(this.g.globalMinimum) && !isNaN_(this.g.globalMaximum) && this.g.useGlobalMinMax && !this.g.testRun) {
            as = this.g.globalMinimum;
            ar = this.g.globalMaximum;
            if (!isNaN_(this.g.minimumValue)) {
                as = this.g.minimumValue;
            }
            if (!isNaN_(this.g.maximumValue)) {
                ar = this.g.maximumValue;
            }
        }
        else if (!isNaN_(this.g.minimumValue) && !isNaN_(this.g.maximumValue)) {
            as = this.g.minimumValue;
            ar = this.g.maximumValue;
        }
        else {
            var au = -1;
            var av = -1;
            for (var aw = 0; aw < aq; aw++) {
                at = ag[aw];
                if (at > 0) {
                    if (at > ar) {
                        ar = at;
                        au = aw;
                    }
                    if (at < as) {
                        as = at;
                        av = aw;
                    }
                }
            }
            var ax = truncate(Math.floor(au / ah));
            var ay = au % ah;
            var az = truncate(Math.floor(av / ah));
            var a0 = av % ah;
            this.g.globalMinimum = as;
            this.g.globalMaximum = ar;
            var a1 = 0;
            var a2 = 0;
            var a3 = 0;
            var a4 = 0;
            var a5 = 0;
            var a6 = 0;
            for (var a7 = 0; a7 < ai; a7++) {
                z = truncate(Math.floor(ab._inner[a7] - b));
                aa = truncate(Math.floor(ac._inner[a7] - b));
                for (var a8 = z; a8 < z + v; a8++) {
                    for (var a9 = aa; a9 < aa + v; a9++) {
                        aj = a8 - z;
                        ak = a9 - aa;
                        if (a8 < 0 || a8 > (ah - 1) || a9 < 0 || a9 > (ah - 1)) {
                            continue;
                        }
                        if (a8 == ay && a9 == ax) {
                            a1++;
                            a3 = a3 + d.t(ac._inner[a7], this.g.window, this.g.tileViewport);
                            a4 = a4 + d.u(ab._inner[a7], this.g.window, this.g.tileViewport);
                        }
                        if (a8 == a0 && a9 == az) {
                            a2++;
                            a5 = a5 + d.t(ac._inner[a7], this.g.window, this.g.tileViewport);
                            a6 = a6 + d.u(ab._inner[a7], this.g.window, this.g.tileViewport);
                        }
                    }
                }
            }
            this.i = a3 / a1;
            this.j = a4 / a1;
            this.k = a5 / a2;
            this.l = a6 / a2;
            if (!isNaN_(this.g.minimumValue)) {
                as = this.g.minimumValue;
            }
            if (!isNaN_(this.g.maximumValue)) {
                ar = this.g.maximumValue;
            }
        }
        if (!this.g.testRun) {
            this.x(af, ag, ar, as);
            this.a = af;
        }
        this.z();
    };
    HeatTileGeneratorWorker.prototype.x = function (a, b, c, d) {
        var e;
        var f = b.length;
        if (this.g.useLogarithmicScale) {
            if (d <= 0) {
                d = 0;
            }
            else {
                d = logBase(d, this.g.logarithmBase);
            }
            if (c <= 0) {
                c = 0;
            }
            else {
                c = logBase(c, this.g.logarithmBase);
            }
        }
        var g = 0;
        var h = c - d;
        if (isNaN_(h) || h <= 0) {
            h = 1;
        }
        var i;
        var j;
        var k;
        var l;
        var m = this.g.useLogarithmicScale;
        var n = this.g.logarithmBase;
        if (this.g.scaleColors != null) {
            var o = new Array(this.g.scaleColors.length);
            var p = new Array(this.g.scaleColors.length);
            var q = new Array(this.g.scaleColors.length);
            var r = new Array(this.g.scaleColors.length);
            var s = new Array(this.g.scaleColors.length);
            var t = new Array(this.g.scaleColors.length);
            var u = new Array(this.g.scaleColors.length);
            var v = new Array(this.g.scaleColors.length);
            var w = new Array(this.g.scaleColors.length);
            var x = new Array(this.g.scaleColors.length);
            var y = new Array(this.g.scaleColors.length);
            var z = new Array(this.g.scaleColors.length);
            var aa = this.g.scaleColorOffsets;
            if (aa == null || aa.length != this.g.scaleColors.length) {
                aa = new Array(this.g.scaleColors.length);
                if (aa.length == 1) {
                    aa[0] = 0;
                }
                else {
                    for (var ab = 0; ab < this.g.scaleColors.length; ab++) {
                        aa[ab] = ab / (this.g.scaleColors.length - 1);
                    }
                }
            }
            for (var ac = 0; ac < this.g.scaleColors.length; ac++) {
                o[ac] = this.g.scaleColors[ac].l;
                q[ac] = this.g.scaleColors[ac].o;
                s[ac] = this.g.scaleColors[ac].n;
                u[ac] = this.g.scaleColors[ac].m;
                if (ac < this.g.scaleColors.length - 1) {
                    p[ac] = this.g.scaleColors[ac + 1].l;
                    r[ac] = this.g.scaleColors[ac + 1].o;
                    t[ac] = this.g.scaleColors[ac + 1].n;
                    v[ac] = this.g.scaleColors[ac + 1].m;
                }
                else {
                    p[ac] = this.g.scaleColors[ac].l;
                    r[ac] = this.g.scaleColors[ac].o;
                    t[ac] = this.g.scaleColors[ac].n;
                    v[ac] = this.g.scaleColors[ac].m;
                }
                w[ac] = p[ac] - o[ac];
                x[ac] = r[ac] - q[ac];
                y[ac] = t[ac] - s[ac];
                z[ac] = v[ac] - u[ac];
            }
            for (var ad = 0; ad < f; ad++) {
                e = b[ad];
                if (e == 0) {
                    continue;
                }
                if (m) {
                    if (e <= 0) {
                        e = 0;
                    }
                    else {
                        e = logBase(e, n);
                    }
                }
                g = (e - d) / (h);
                if (g < 0) {
                    g = 0;
                }
                if (g > 1) {
                    g = 1;
                }
                var ae = 0;
                for (var af = 0; af < aa.length; af++) {
                    if (aa[af] >= g) {
                        ae = af - 1;
                        break;
                    }
                }
                if (ae > aa.length - 2) {
                    ae = aa.length - 2;
                }
                if (ae < 0) {
                    ae = 0;
                }
                g = (g - aa[ae]) / (aa[ae + 1] - aa[ae]);
                i = truncate(Math.floor(o[ae] + g * (w[ae])));
                j = truncate(Math.floor(q[ae] + g * (x[ae])));
                k = truncate(Math.floor(s[ae] + g * (y[ae])));
                l = truncate(Math.floor(u[ae] + g * (z[ae])));
                a[4 * ad] = i;
                a[4 * ad + 1] = j;
                a[4 * ad + 2] = k;
                a[4 * ad + 3] = l;
            }
        }
        else {
            var ag = this.g.minimumColor.l;
            var ah = this.g.maximumColor.l;
            var ai = this.g.minimumColor.o;
            var aj = this.g.maximumColor.o;
            var ak = this.g.minimumColor.n;
            var al = this.g.maximumColor.n;
            var am = this.g.minimumColor.m;
            var an = this.g.maximumColor.m;
            var ao = ah - ag;
            var ap = aj - ai;
            var aq = al - ak;
            var ar = an - am;
            for (var as = 0; as < f; as++) {
                e = b[as];
                if (e == 0) {
                    continue;
                }
                if (m) {
                    e = logBase(e, n);
                }
                g = (e - d) / (h);
                if (g < 0) {
                    g = 0;
                }
                if (g > 1) {
                    g = 1;
                }
                i = truncate(Math.floor(ag + g * (ao)));
                j = truncate(Math.floor(ai + g * (ap)));
                k = truncate(Math.floor(ak + g * (aq)));
                l = truncate(Math.floor(am + g * (ar)));
                a[4 * as] = i;
                a[4 * as + 1] = j;
                a[4 * as + 2] = k;
                a[4 * as + 3] = l;
            }
        }
    };
    HeatTileGeneratorWorker.prototype.b = function (a) {
        var b = new Array(truncate(a.width) * truncate(a.height));
        for (var c = 0; c < b.length; c++) {
            b[c] = 0;
        }
        return b;
    };
    HeatTileGeneratorWorker.prototype.d = function (a) {
        var b = new Array(truncate(a.width) * truncate(a.height) * 4);
        for (var c = 0; c < b.length; c++) {
            b[c] = 0;
        }
        return b;
    };
    HeatTileGeneratorWorker.prototype.c = function (a, b) {
        var c = new Array(a * a);
        for (var d = 0; d < c.length; d++) {
            c[d] = 0;
        }
        var e = a / 2;
        var f = a / 2;
        for (var g = 0; g < a; g++) {
            for (var h = 0; h < a; h++) {
                var i = Math.sqrt(Math.pow(g - f, 2) + Math.pow(h - f, 2));
                if (i > e) {
                    c[h * a + g] = 0;
                }
                else {
                    c[h * a + g] = e - i;
                }
            }
        }
        var j = 0;
        var k = -1.7976931348623157E+308;
        var l = 1.7976931348623157E+308;
        for (var m = 0; m < a; m++) {
            for (var n = 0; n < a; n++) {
                var o = c[n * a + m];
                if (o == 0) {
                    continue;
                }
                j += o;
                k = o > k ? o : k;
                l = o < l ? o : l;
            }
        }
        for (var p = 0; p < a; p++) {
            for (var q = 0; q < a; q++) {
                var r = c[q * a + p];
                if (r == 0) {
                    continue;
                }
                var s = (r - l) / (k - l);
                c[q * a + p] = 0.01 + s * (0.99);
            }
        }
        c[truncate(f) * a + truncate(f)] = 1;
        return c;
    };
    HeatTileGeneratorWorker.prototype.q = function (a, b) {
        return truncate(Math.floor(b * 2));
    };
    HeatTileGeneratorWorker.prototype.z = function () {
        var _this = this;
        if (this.completedSink == null) {
            return;
        }
        this.completedSink.onCompleted(((function () {
            var $ret = new HeatTileImageCreatedEventArgs();
            $ret.url = _this.w;
            $ret.x = _this.n;
            $ret.y = _this.o;
            $ret.z = _this.p;
            $ret.globalMinimumValue = _this.g.globalMinimum;
            $ret.globalMaximumValue = _this.g.globalMaximum;
            $ret.globalMaximumValueLongitude = _this.j;
            $ret.globalMaximumValueLatitude = _this.i;
            $ret.globalMinimumValueLongitude = _this.l;
            $ret.globalMinimumValueLatitude = _this.k;
            $ret.imageData = _this.a;
            $ret.image = _this.g.image;
            return $ret;
        })()));
    };
    Object.defineProperty(HeatTileGeneratorWorker.prototype, "completedSink", {
        get: function () {
            return this._completedSink;
        },
        set: function (a) {
            this._completedSink = a;
        },
        enumerable: true,
        configurable: true
    });
    HeatTileGeneratorWorker.$t = markType(HeatTileGeneratorWorker, 'HeatTileGeneratorWorker');
    HeatTileGeneratorWorker.v = {};
    HeatTileGeneratorWorker.s = 0;
    HeatTileGeneratorWorker.m = 0;
    return HeatTileGeneratorWorker;
}(Base));
export { HeatTileGeneratorWorker };
//# sourceMappingURL=HeatTileGeneratorWorker.js.map