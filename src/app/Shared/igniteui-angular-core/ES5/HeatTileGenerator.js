/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, Number_$type, Delegate_$type, markType } from "./type";
import { ITileGenerator_$type } from "./ITileGenerator";
import { Color } from "./Color";
import { HeatTileScaler } from "./HeatTileScaler";
import { Rect } from "./Rect";
import { HeatTileGeneratorWorkerManager } from "./HeatTileGeneratorWorkerManager";
import { Dictionary$2 } from "./Dictionary$2";
import { Tuple$2 } from "./Tuple$2";
import { List$1 } from "./List$1";
import { TileImageZoomChangingEventArgs } from "./TileImageZoomChangingEventArgs";
import { TileWorkSettings } from "./TileWorkSettings";
import { truncate, isNaN_ } from "./number";
/**
 * @hidden
 */
var HeatTileGenerator = /** @class */ (function (_super) {
    tslib_1.__extends(HeatTileGenerator, _super);
    function HeatTileGenerator() {
        var _this = _super.call(this) || this;
        _this.m = new HeatTileScaler();
        _this.bz = new Rect(0, 0, 0, 256, 256);
        _this.l = new HeatTileGeneratorWorkerManager();
        _this.e = null;
        _this.d = null;
        _this.c = null;
        _this.bw = new Color();
        _this.bv = new Color();
        _this.b = null;
        _this.a = null;
        _this.ac = 0;
        _this.am = NaN;
        _this.p = false;
        _this.q = false;
        _this.r = false;
        _this.ao = NaN;
        _this.an = NaN;
        _this.al = 10;
        _this.s = false;
        _this.t = true;
        _this.a0 = null;
        _this.ax = null;
        _this.ad = NaN;
        _this.ag = NaN;
        _this.aw = {};
        _this.au = -1;
        _this.ay = {};
        _this.ak = 0;
        _this.aj = 0;
        _this.z = new Dictionary$2(String_$type, Tuple$2.$.specialize(Number_$type, Number_$type), 0);
        _this.aa = new Dictionary$2(String_$type, List$1.$.specialize(Delegate_$type), 0);
        _this.ah = 0;
        _this.ai = 0;
        _this.ae = 0;
        _this.af = 0;
        _this.n = false;
        _this.ab = new List$1(Delegate_$type, 0);
        _this.o = false;
        _this.m = new HeatTileScaler();
        return _this;
    }
    Object.defineProperty(HeatTileGenerator.prototype, "k", {
        get: function () {
            return this.e;
        },
        set: function (a) {
            var b = this.e;
            this.e = a;
            if (this.e != b) {
                this.br("YValues", b, this.e);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeatTileGenerator.prototype, "j", {
        get: function () {
            return this.d;
        },
        set: function (a) {
            var b = this.d;
            this.d = a;
            if (this.d != b) {
                this.br("XValues", b, this.d);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeatTileGenerator.prototype, "i", {
        get: function () {
            return this.c;
        },
        set: function (a) {
            var b = this.c;
            this.c = a;
            if (this.c != b) {
                this.br("Values", b, this.c);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeatTileGenerator.prototype, "by", {
        get: function () {
            return this.bw;
        },
        set: function (a) {
            var b = this.bw;
            this.bw = a;
            if (Color.d(this.bw, b)) {
                this.br("MinimumColor", b, this.bw);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeatTileGenerator.prototype, "bx", {
        get: function () {
            return this.bv;
        },
        set: function (a) {
            var b = this.bv;
            this.bv = a;
            if (Color.d(this.bv, b)) {
                this.br("MaximumColor", b, this.bv);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeatTileGenerator.prototype, "scaleColors", {
        get: function () {
            return this.b;
        },
        set: function (a) {
            var b = this.b;
            this.b = a;
            if (this.b != b) {
                this.br("ScaleColors", b, this.b);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeatTileGenerator.prototype, "g", {
        get: function () {
            return this.a;
        },
        set: function (a) {
            var b = this.a;
            this.a = a;
            if (this.a != b) {
                this.br("ScaleColorOffsets", b, this.a);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeatTileGenerator.prototype, "ap", {
        get: function () {
            return this.ac;
        },
        set: function (a) {
            var b = this.ac;
            this.ac = a;
            if (this.ac != b) {
                this.br("BlurRadius", b, this.ac);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeatTileGenerator.prototype, "ar", {
        get: function () {
            return this.am;
        },
        set: function (a) {
            var b = this.am;
            this.am = a;
            if (this.am != b) {
                this.br("MaxBlurRadius", b, this.am);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeatTileGenerator.prototype, "u", {
        get: function () {
            return this.p;
        },
        set: function (a) {
            var b = this.p;
            this.p = a;
            if (this.p != b) {
                this.br("UseBlurRadiusAdjustedForZoom", b, this.p);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeatTileGenerator.prototype, "v", {
        get: function () {
            return this.q;
        },
        set: function (a) {
            var b = this.q;
            this.q = a;
            if (this.q != b) {
                this.br("UseGlobalMinMax", b, this.q);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeatTileGenerator.prototype, "w", {
        get: function () {
            return this.r;
        },
        set: function (a) {
            var b = this.r;
            this.r = a;
            if (this.r != b) {
                this.br("UseGlobalMinMaxAdjustedForZoom", b, this.r);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeatTileGenerator.prototype, "at", {
        get: function () {
            return this.ao;
        },
        set: function (a) {
            var b = this.ao;
            this.ao = a;
            if (this.ao != b) {
                this.br("MinimumValue", b, this.ao);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeatTileGenerator.prototype, "as", {
        get: function () {
            return this.an;
        },
        set: function (a) {
            var b = this.an;
            this.an = a;
            if (this.an != b) {
                this.br("MaximumValue", b, this.an);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeatTileGenerator.prototype, "aq", {
        get: function () {
            return this.al;
        },
        set: function (a) {
            var b = this.al;
            this.al = a;
            if (this.al != b) {
                this.br("LogarithmBase", b, this.al);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeatTileGenerator.prototype, "x", {
        get: function () {
            return this.s;
        },
        set: function (a) {
            var b = this.s;
            this.s = a;
            if (this.s != b) {
                this.br("UseLogarithmicScale", b, this.s);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeatTileGenerator.prototype, "y", {
        get: function () {
            return this.t;
        },
        set: function (a) {
            var b = this.t;
            this.t = a;
            if (this.t != b) {
                this.br("UseWebWorkers", b, this.t);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeatTileGenerator.prototype, "bi", {
        get: function () {
            return this.a0;
        },
        set: function (a) {
            var b = this.a0;
            this.a0 = a;
            if (this.a0 != b) {
                this.br("WebWorkerScriptPath", b, this.a0);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeatTileGenerator.prototype, "az", {
        get: function () {
            return this.ax;
        },
        set: function (a) {
            var b = this.ax;
            this.ax = a;
            if (this.ax != b) {
                this.br("WebWorkerInstance", b, this.ax);
            }
        },
        enumerable: true,
        configurable: true
    });
    HeatTileGenerator.prototype.bo = function () {
        this.e = null;
        this.d = null;
        this.c = null;
        this.l.w();
    };
    HeatTileGenerator.prototype.br = function (a, b, c) {
        this.bs(a, b, c);
    };
    HeatTileGenerator.prototype.bs = function (a, b, c) {
        switch (a) {
            case "XValues":
            case "YValues":
            case "Values":
                this.bq();
                break;
            case "UseWebWorkers":
                this.l.e = this.y;
                break;
            case "WebWorkerScriptPath":
                this.l.p = this.bi;
                break;
            case "WebWorkerInstance":
                this.l.n = this.az;
                break;
        }
    };
    HeatTileGenerator.prototype.getTile = function (a, b, c, d, e, f, g) {
        this.getTile1(a, b, c, d, e, f, g, false);
    };
    HeatTileGenerator.prototype.getTile1 = function (a, b, c, d, e, f, g, h) {
        var _this = this;
        var i = NaN;
        var j = NaN;
        if (!h && this.v && (isNaN_(this.ag) || isNaN_(this.ad))) {
            var k = false;
            if ((isNaN_(this.ag) || isNaN_(this.ad)) && !this.n) {
                k = true;
                this.n = true;
            }
            else {
                this.ab.add(function () { return _this.bm(a, b, c, h, j, i, d, e, f, g); });
                return;
            }
            if (k) {
                var l_1 = 1.7976931348623157E+308;
                var m_1 = -1.7976931348623157E+308;
                var n_1 = 0;
                var o_1 = 0;
                var p_1 = 0;
                var q_1 = 0;
                this.getTile1(0, 0, 0, function (r, s) {
                    var t = s;
                    l_1 = t.globalMinimumValue;
                    m_1 = t.globalMaximumValue;
                    n_1 = t.globalMinimumValueLongitude;
                    o_1 = t.globalMinimumValueLatitude;
                    p_1 = t.globalMaximumValueLongitude;
                    q_1 = t.globalMaximumValueLatitude;
                    var u = new Rect(0, 0, 0, 1, 1);
                    var v = _this.bz;
                    i = l_1;
                    j = m_1;
                    var w = new List$1(Delegate_$type, 0);
                    _this.ag = i;
                    _this.ad = j;
                    _this.ah = o_1;
                    _this.ai = n_1;
                    _this.ae = q_1;
                    _this.af = p_1;
                    for (var x = 0; x < _this.ab.count; x++) {
                        w.add(_this.ab._inner[x]);
                    }
                    _this.ab.clear();
                    _this.bm(a, b, c, h, j, i, d, e, f, g);
                    for (var y = 0; y < w.count; y++) {
                        w._inner[y]();
                    }
                }, function (r, s) {
                }, function (r, s) {
                }, g, true);
                return;
            }
            else {
                i = this.ag;
                j = this.ad;
            }
        }
        else {
            i = this.ag;
            j = this.ad;
        }
        this.bm(a, b, c, h, j, i, d, e, f, g);
    };
    HeatTileGenerator.prototype.cancelTile = function (a, b, c) {
        this.l.s(a, b, c);
    };
    HeatTileGenerator.prototype.bm = function (a, b, c, d, e, f, g, h, i, j) {
        var _this = this;
        this.bn(a, b, c, d, i, function () {
            if (_this.w && !d) {
                if (a > 0 && _this.z.containsKey(a.toString())) {
                    var k = _this.z.item(a.toString());
                    e = k.c;
                    f = k.d;
                }
            }
            var l = _this.b0(a, b, c);
            var m = new TileWorkSettings();
            m.window = l;
            m.z = a;
            m.x = b;
            m.y = c;
            m.globalMinimum = f;
            m.globalMaximum = e;
            m.useGlobalMinMax = _this.v;
            m.minimumValue = _this.at;
            m.maximumValue = _this.as;
            m.useLogarithmicScale = _this.x;
            m.logarithmBase = _this.aq;
            if (m.logarithmBase <= 0) {
                m.logarithmBase = 10;
            }
            m.tileViewport = _this.bz;
            m.maximumColor = _this.bx;
            m.minimumColor = _this.by;
            m.scaler = _this.m;
            m.values = _this.c;
            m.blurRadius = _this.ap;
            if (m.blurRadius <= 0) {
                m.blurRadius = 1;
            }
            m.useBlurRadiusAdjustedForZoom = _this.u;
            m.maxBlurRadius = _this.ar;
            if (m.maxBlurRadius <= 0) {
                m.maxBlurRadius = 1;
            }
            m.values = _this.i;
            m.scaleColors = _this.scaleColors;
            m.scaleColorOffsets = _this.g;
            m.minimumVisibleLatitude = _this.m.i(l, _this.bz);
            m.maximumVisibleLatitude = _this.m.g(l, _this.bz);
            m.minimumVisibleLongitude = _this.m.j(l, _this.bz);
            m.maximumVisibleLongitude = _this.m.h(l, _this.bz);
            m.yValues = _this.e;
            m.xValues = _this.d;
            if (_this.c == null && _this.e != null) {
                _this.c = new Array(_this.e.length);
                for (var n = 0; n < _this.e.length; n++) {
                    _this.c[n] = 1;
                }
                m.values = _this.c;
            }
            if (!_this.o) {
                _this.o = true;
                m.isNewData = true;
            }
            m.image = j;
            m.testRun = d;
            _this.l.y(m, function (o, p) {
                p.url = _this.a2(p.imageData);
                p.imageData = _this.f(p.imageData);
                g(_this, p);
            }, h);
        });
    };
    HeatTileGenerator.prototype.bn = function (a, b, c, d, e, f) {
        var g = false;
        g = this.au != a;
        if (!g || d) {
            f();
            return;
        }
        var h = false;
        var i = false;
        if (a != this.au) {
            if (this.z.containsKey(a.toString()) && !isNaN_(this.z.item(a.toString()).c) && !isNaN_(this.z.item(a.toString()).d)) {
                this.au = a;
                e(this, ((function () {
                    var $ret = new TileImageZoomChangingEventArgs();
                    $ret.z = a;
                    $ret.x = b;
                    $ret.y = c;
                    return $ret;
                })()));
                h = true;
            }
            else if (this.z.containsKey(a.toString())) {
                if (a > 0 && this.w) {
                    var j = void 0;
                    if (this.aa.containsKey(a.toString())) {
                        j = this.aa.item(a.toString());
                    }
                    else {
                        j = new List$1(Delegate_$type, 0);
                        this.aa.addItem(a.toString(), j);
                    }
                    j.add(f);
                }
            }
            else {
                if (a > 0 && this.w) {
                    this.z.addItem(a.toString(), new Tuple$2(Number_$type, Number_$type, NaN, NaN));
                    i = true;
                }
            }
        }
        if (i) {
            if (a > 0 && this.w) {
                this.bt(a, f);
            }
        }
        if (h) {
            f();
        }
    };
    HeatTileGenerator.prototype.a2 = function (a) {
        if (a == null) {
            return null;
        }
        var b = document.createElement("canvas");
        b.setAttribute("width", "256");
        b.setAttribute("height", "256");
        var c = b.getContext("2d");
        var d = c.getImageData(0, 0, 256, 256);
        var e = d.data;
        var f = e.length / 4;
        for (var g = 0; g < f; g++) {
            var h = a[g * 4];
            var i = a[g * 4 + 1];
            var j = a[g * 4 + 2];
            var k = a[g * 4 + 3];
            e[g * 4] = i;
            e[g * 4 + 1] = j;
            e[g * 4 + 2] = k;
            e[g * 4 + 3] = h;
        }
        c.putImageData(d, 0, 0);
        var ele_ = b;
        return (ele_.toDataURL());
    };
    HeatTileGenerator.prototype.f = function (a) {
        if (a == null) {
            return null;
        }
        return a;
    };
    HeatTileGenerator.prototype.bt = function (a, b) {
        var _this = this;
        var c = 0;
        var d = 0;
        var e = 0;
        var f = 0;
        var g = new Rect(0, 0, 0, 256 * Math.pow(2, a), 256 * Math.pow(2, a));
        var h = new Rect(0, 0, 0, 1, 1);
        var i = this.m.s(this.af, h, g);
        var j = this.m.r(this.ae, h, g);
        var k = this.m.s(this.ai, h, g);
        var l = this.m.r(this.ah, h, g);
        c = truncate(Math.floor(k / 256));
        d = truncate(Math.floor(l / 256));
        e = truncate(Math.floor(i / 256));
        f = truncate(Math.floor(j / 256));
        var m = 0;
        var n = 0;
        this.getTile1(a, c, d, function (o, p) {
            var q = p;
            m = q.globalMinimumValue;
            n = q.globalMaximumValue;
            if (e != c && f != d) {
                _this.getTile1(a, e, f, function (r, s) {
                    var t = s;
                    n = t.globalMaximumValue;
                    _this.bu(a, n, m, b);
                }, function (r, s) {
                }, function (r, s) {
                }, null, true);
            }
            else {
                _this.bu(a, n, m, b);
            }
        }, function (o, p) {
        }, function (o, p) {
        }, null, true);
    };
    HeatTileGenerator.prototype.bu = function (a, b, c, d) {
        if (b < this.aj) {
            b = this.aj;
        }
        if (isNaN_(c) || c > this.ak) {
            c = this.ak;
        }
        var e = new List$1(Delegate_$type, 0);
        this.z.item(a.toString(), new Tuple$2(Number_$type, Number_$type, b, c));
        if (this.aa.containsKey(a.toString())) {
            var f = this.aa.item(a.toString());
            for (var g = 0; g < f.count; g++) {
                e.add(f._inner[g]);
            }
        }
        this.aa.removeItem(a.toString());
        this.au = a;
        d();
        for (var h = 0; h < e.count; h++) {
            e._inner[h]();
        }
    };
    HeatTileGenerator.prototype.b0 = function (a, b, c) {
        var d = truncate(Math.pow(2, a)) * 256;
        var e = (b * 256) / d;
        var f = (c * 256) / d;
        var g = 256 / d;
        var h = 256 / d;
        return new Rect(0, e, f, g, h);
    };
    HeatTileGenerator.prototype.bq = function () {
        var a = -1.7976931348623157E+308;
        var b = 1.7976931348623157E+308;
        if (this.c != null) {
            for (var c = 0; c < this.c.length; c++) {
                var d = this.c[c];
                a = d > a ? d : a;
                b = d < b ? d : b;
            }
        }
        var e = this.ak = b * 0.01;
        this.aj = a;
        this.o = false;
    };
    HeatTileGenerator.$t = markType(HeatTileGenerator, 'HeatTileGenerator', Base.$, [ITileGenerator_$type]);
    return HeatTileGenerator;
}(Base));
export { HeatTileGenerator };
//# sourceMappingURL=HeatTileGenerator.js.map