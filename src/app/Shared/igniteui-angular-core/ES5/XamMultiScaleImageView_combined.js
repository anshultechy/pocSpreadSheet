/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, runOn, Delegate_$type, Type, markType, typeCast, INotifyPropertyChanged_$type, PropertyChangedEventArgs, EventArgs, Point_$type } from "./type";
import { ISchedulableRender_$type } from "./ISchedulableRender";
import { List$1 } from "./List$1";
import { Image } from "./Image";
import { RenderingContext } from "./RenderingContext";
import { Dictionary$2 } from "./Dictionary$2";
import { Tile } from "./Tile";
import { Rect } from "./Rect";
import { CanvasRenderScheduler } from "./CanvasRenderScheduler";
import { StackPool$1 } from "./StackPool$1";
import { WriteableBitmap } from "./WriteableBitmap";
import { Uri } from "./Uri";
import { CancellingMultiScaleImageEventArgs } from "./CancellingMultiScaleImageEventArgs";
import { DownloadingMultiScaleImageEventArgs } from "./DownloadingMultiScaleImageEventArgs";
import { CanvasViewRenderer } from "./CanvasViewRenderer";
import { truncate, intDivide, logBase } from "./number";
import { DependencyObject } from "./DependencyObject";
import { Control } from "./Control";
import { DependencyProperty } from "./DependencyProperty";
import { IEasingFunction_$type } from "./IEasingFunction";
import { LRUCache$2 } from "./LRUCache$2";
import { TilePositionComparer } from "./TilePositionComparer";
import { Convert } from "./Convert";
import { MathUtil } from "./MathUtil";
import { PropertyMetadata } from "./PropertyMetadata";
import { dateNow } from "./date";
/**
 * @hidden
 */
var XamMultiScaleImageView = /** @class */ (function (_super) {
    tslib_1.__extends(XamMultiScaleImageView, _super);
    function XamMultiScaleImageView(a) {
        var _this = _super.call(this) || this;
        _this.b = null;
        _this.h = null;
        _this.g = new Dictionary$2(Base.$, List$1.$.specialize(Delegate_$type), 0);
        _this.j = new List$1(Tile.$, 0);
        _this.i = new List$1(Tile.$, 0);
        _this.p = -1;
        _this.o = -1;
        _this.k = null;
        _this.m = null;
        _this.c = null;
        _this._isDirty = false;
        _this.au = Rect.empty;
        _this.l = null;
        _this.b = a;
        _this.b.ag.l(_this);
        _this.h = new List$1(Image.$, 0);
        _this.b.ap = ((function () {
            var $ret = new StackPool$1(Image.$);
            $ret.j = runOn(_this, _this.at);
            $ret.b = runOn(_this, _this.y);
            $ret.c = runOn(_this, _this.aa);
            $ret.d = runOn(_this, _this.z);
            return $ret;
        })());
        for (var b = 0; b < 4; ++b) {
            _this.i.add(null);
        }
        return _this;
    }
    XamMultiScaleImageView.prototype.at = function () {
        return new Image();
    };
    XamMultiScaleImageView.prototype.y = function (a) {
        this.h.add(a);
    };
    XamMultiScaleImageView.prototype.aa = function (a) {
        this.h.remove(a);
    };
    XamMultiScaleImageView.prototype.z = function (a) {
    };
    XamMultiScaleImageView.prototype.ao = function (a, b, c) {
        a.n = b;
        a.o = c;
    };
    XamMultiScaleImageView.prototype.r = function (a) {
        var _loop_1 = function (b) {
            if (a == this_1.i._inner[b]) {
                if (a.h != null && a.h.ac != null) {
                    var c = a.h.ac;
                    var d_1 = c.c;
                    var e_1 = this_1.b.ao.r(a.e + 8, a.c, a.d);
                    if (e_1 != null) {
                        var f = ((function () {
                            var $ret = new CancellingMultiScaleImageEventArgs();
                            $ret.uri = e_1.value;
                            $ret.image = d_1;
                            return $ret;
                        })());
                        this_1.b.bl(f);
                    }
                    if (this_1.g.containsKey(d_1)) {
                        var g = this_1.g.item(d_1);
                        for (var h = 0; h < g.count; h++) {
                            g._inner[h]();
                        }
                        g.clear();
                        this_1.g.removeItem(d_1);
                    }
                }
                this_1.i._inner[b] = null;
                this_1.q();
                return { value: void 0 };
            }
        };
        var this_1 = this;
        for (var b = 0; b < this.i.count; ++b) {
            var state_1 = _loop_1(b);
            if (typeof state_1 === "object")
                return state_1.value;
        }
        for (var i = 0; i < this.j.count; ++i) {
            if (this.j._inner[i] == a) {
                this.j.removeAt(i);
                break;
            }
        }
    };
    XamMultiScaleImageView.prototype.u = function (a) {
        this.j.add(a);
        this.j.aa(function (b, c) {
            var d = 0;
            var e = 0;
            if (b.g != null) {
                d = b.g.ac.b;
            }
            if (c.g != null) {
                e = c.g.ac.b;
            }
            if (d < e) {
                return -1;
            }
            else if (d > e) {
                return 1;
            }
            return 0;
        });
        this.q();
    };
    XamMultiScaleImageView.prototype.q = function () {
        var _this = this;
        var index_ = -1;
        if (this.j.count > 0) {
            for (var a = 0; a < this.i.count; ++a) {
                if (this.i._inner[a] == null) {
                    index_ = a;
                    break;
                }
            }
        }
        if (index_ >= 0) {
            this.i._inner[index_] = this.j._inner[0];
            var b = new WriteableBitmap(this.b.ao.m, this.b.ao.k);
            this.i._inner[index_].h.ac = b;
            var ele_ = this.l.createElement("img");
            var c_1 = ele_.getNativeElement();
            b.c = c_1;
            var self_ = this;
            var d = new List$1(Delegate_$type, 0);
            this.g.addItem(c_1, d);
            d.add(ele_.listen("load", function (e) { return _this.ab(e, index_); }));
            d.add(ele_.listen("readystatechange", function (e) { return _this.ab(e, index_); }));
            d.add(ele_.listen("error", function (e) { return _this.ac(e, index_); }));
            this.j.removeAt(0);
            var e = this.b.ao.r(this.i._inner[index_].e + 8, this.i._inner[index_].c, this.i._inner[index_].d);
            if (e == null) {
                return;
            }
            var f_1 = e.value;
            var g = ((function () {
                var $ret = new DownloadingMultiScaleImageEventArgs();
                $ret.uri = f_1;
                $ret.image = c_1;
                return $ret;
            })());
            this.b.bm(g);
            f_1 = g.uri;
            if (f_1 != null) {
                c_1.src = f_1;
            }
        }
    };
    XamMultiScaleImageView.prototype.ab = function (a, b) {
        var e_ = a.originalEvent;
        var img_ = (e_.target);
        var c = (img_.complete || (img_.readyState == 'complete' && e_.type == 'readystatechange'));
        if (c) {
            this.downloadCompleted(a, b);
        }
    };
    XamMultiScaleImageView.prototype.ac = function (a, b) {
        this.downloadError(a, b);
    };
    XamMultiScaleImageView.prototype.downloadError = function (a, b) {
        var c = this.i._inner[b];
        this.i._inner[b] = null;
        if (c != null && c.h != null && c.h.ac != null) {
            var e_ = a.originalEvent;
            var d = (e_.target);
            if (this.g.containsKey(d)) {
                var e = this.g.item(d);
                for (var f = 0; f < e.count; f++) {
                    e._inner[f]();
                }
                e.clear();
                this.g.removeItem(d);
            }
        }
        this.q();
        this.ad();
    };
    XamMultiScaleImageView.prototype.downloadCompleted = function (a, b) {
        var c = this.i._inner[b];
        var d = true;
        if (c != null && c.h != null && c.h.ac != null) {
            d = false;
            var ele_ = c.h.ac.c;
            if (!ele_.complete) {
                d = true;
            }
            if ((ele_.width == 0 && ele_.height == 0)) {
                d = true;
            }
        }
        this.i._inner[b] = null;
        if (d) {
            this.q();
            this.ad();
            return;
        }
        var e_ = a.originalEvent;
        var e = (e_.target);
        if (this.g.containsKey(e)) {
            var f = this.g.item(e);
            for (var g = 0; g < f.count; g++) {
                f._inner[g]();
            }
            f.clear();
            this.g.removeItem(e);
        }
        this.b.bf(c, c.h.ac);
        if (c.h != null) {
            this.b.b1(c);
        }
        this.q();
        this.ad();
    };
    XamMultiScaleImageView.prototype.a = function (a, b, c, d) {
        var e = new WriteableBitmap(a, a);
        e.c = b.c;
        if (!b.d.isEmpty) {
            c += truncate(Math.round(b.d.left));
            d += truncate(Math.round(b.d.top));
        }
        e.d = new Rect(0, c, d, a, a);
        return e;
    };
    XamMultiScaleImageView.prototype.am = function (a) {
        a.s = 0;
    };
    XamMultiScaleImageView.prototype.an = function (a) {
        a.s = 1;
    };
    XamMultiScaleImageView.prototype.f = function () {
        return true;
    };
    XamMultiScaleImageView.prototype.s = function (a) {
        if (this.b.al != null) {
            this.b.al.deferredRefresh();
        }
        else {
            if (this.k != null) {
                this.k.setTimeout(a, 0);
            }
            else {
                window.setTimeout(a, 0);
            }
        }
    };
    XamMultiScaleImageView.prototype.aq = function () {
        if (this.p == -1) {
            this.p = window.setInterval(runOn(this.b, this.b.b0), 50);
        }
    };
    XamMultiScaleImageView.prototype.as = function () {
        if (this.p != -1) {
            window.clearInterval(this.p);
            this.p = -1;
        }
    };
    XamMultiScaleImageView.prototype.ap = function () {
        if (this.o == -1) {
            this.o = window.setInterval(runOn(this.b, this.b.bi), 50);
        }
    };
    XamMultiScaleImageView.prototype.ar = function () {
        if (this.o != -1) {
            window.clearInterval(this.o);
            this.o = -1;
        }
    };
    XamMultiScaleImageView.prototype.t = function () {
        if (this.p != -1) {
            this.ar();
            this.b.bp();
        }
    };
    XamMultiScaleImageView.prototype.ae = function (a) {
        this.k = a;
        this.k.rootWrapper.setStyleProperty("position", "relative");
        this.m = this.k.createElement("canvas");
        this.m.setStyleProperty("position", "absolute");
        this.m.setStyleProperty("top", "0px");
        this.m.setStyleProperty("left", "0px");
        this.k.append(this.m);
        this.c = new RenderingContext(new CanvasViewRenderer(), this.k.get2DCanvasContext(this.m));
        this.af(this.k.rootWrapper.width(), this.k.rootWrapper.height());
    };
    XamMultiScaleImageView.prototype.af = function (a, b) {
        this.m.setAttribute("width", truncate((a * this.b.a2)).toString());
        this.m.setAttribute("height", truncate((b * this.b.a2)).toString());
        this.m.setStyleProperty("width", a.toString() + "px");
        this.m.setStyleProperty("height", b.toString() + "px");
        this.b.cb = new Rect(0, 0, 0, a, b);
        this.b.bw();
    };
    XamMultiScaleImageView.prototype.aj = function () {
        this.ad();
    };
    Object.defineProperty(XamMultiScaleImageView.prototype, "index", {
        get: function () {
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    XamMultiScaleImageView.prototype.postRender = function () {
    };
    Object.defineProperty(XamMultiScaleImageView.prototype, "isDirty", {
        get: function () {
            return this._isDirty;
        },
        set: function (a) {
            this._isDirty = a;
        },
        enumerable: true,
        configurable: true
    });
    XamMultiScaleImageView.prototype.ad = function () {
        if (this.c == null) {
            return;
        }
        if (!this.isDirty) {
            this.isDirty = true;
            this.b.ag.n();
        }
    };
    XamMultiScaleImageView.prototype.undirty = function (a) {
        this.isDirty = false;
        this.ak();
    };
    XamMultiScaleImageView.prototype.ak = function () {
        if (this.c == null) {
            return;
        }
        if (this.c.d && this.b.a2 != 1) {
            this.c.z();
            this.c.aa(this.b.a2, this.b.a2);
        }
        if (!this.au.isEmpty) {
            this.c.k(this.au.left, this.au.top, this.au.width, this.au.height);
        }
        this.au = this.b.cb;
        for (var a = 0; a < this.h.count; a++) {
            var b = this.h._inner[a];
            if (b.s == 0) {
                this.al(b);
            }
        }
        for (var c = 0; c < this.h.count; c++) {
            var d = this.h._inner[c];
            if (d.s == 1) {
                this.al(d);
            }
        }
        if (this.c.d && this.b.a2 != 1) {
            this.c.y();
        }
        this.b.bk();
        this.b.bn();
    };
    XamMultiScaleImageView.prototype.d = function () {
        var a = true;
        for (var b = 0; b < this.i.count; b++) {
            if (this.i._inner[b] != null) {
                a = false;
            }
        }
        return a;
    };
    XamMultiScaleImageView.prototype.al = function (a) {
        if (this.c == null) {
            return;
        }
        var b = a.ac;
        var c = a._opacity;
        if (b == null || b.c == null) {
            return;
        }
        if (this.e(b.c)) {
            return;
        }
        if (!b.d.isEmpty) {
            if (b.d.width < 1 || b.d.height < 1) {
                return;
            }
            this.c.n(b.c, c, b.d.left, b.d.top, b.d.width, b.d.height, Math.round(a.n + this.b.cb.left), Math.round(a.o + this.b.cb.top), a.width, a.height);
        }
        else {
            this.c.m(b.c, c, Math.round(a.n + this.b.cb.left), Math.round(a.o + this.b.cb.top), a.width, a.height);
        }
    };
    XamMultiScaleImageView.prototype.e = function (a) {
        var img_ = a;
        if (!img_.complete) {
            return true;
        }
        if ((img_.width == 0 && img_.height == 0)) {
            return true;
        }
        return false;
    };
    XamMultiScaleImageView.prototype.x = function () {
        this.ad();
    };
    XamMultiScaleImageView.prototype.ag = function (a) {
        this.c = a;
        this.ad();
    };
    XamMultiScaleImageView.prototype.ah = function (a) {
        this.l = a;
    };
    XamMultiScaleImageView.prototype.ai = function (a) {
        this.b.cb = a;
        this.b.bw();
    };
    XamMultiScaleImageView.prototype.preRender = function () {
    };
    XamMultiScaleImageView.prototype.isValid = function () {
        return true;
    };
    XamMultiScaleImageView.$t = markType(XamMultiScaleImageView, 'XamMultiScaleImageView', Base.$, [ISchedulableRender_$type]);
    return XamMultiScaleImageView;
}(Base));
export { XamMultiScaleImageView };
/**
 * @hidden
 */
var XamMultiScaleTileSource = /** @class */ (function (_super) {
    tslib_1.__extends(XamMultiScaleTileSource, _super);
    function XamMultiScaleTileSource(a, b, c, d, e) {
        var _this = _super.call(this) || this;
        _this.o = 0;
        _this.n = 0;
        _this.m = 0;
        _this.k = 0;
        _this.l = 0;
        _this.j = null;
        _this.o = a;
        _this.n = b;
        _this.m = c;
        _this.k = d;
        _this.l = e;
        return _this;
    }
    Object.defineProperty(XamMultiScaleTileSource.prototype, "q", {
        get: function () {
            return this.o;
        },
        set: function (a) {
            this.o = a;
            this.t(0, 0, 0, 0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XamMultiScaleTileSource.prototype, "p", {
        get: function () {
            return this.n;
        },
        set: function (a) {
            this.n = a;
            this.t(0, 0, 0, 0);
        },
        enumerable: true,
        configurable: true
    });
    XamMultiScaleTileSource.prototype.r = function (a, b, c) {
        var d = new List$1(Base.$, 0);
        this.s(a, b, c, d);
        var e = null;
        if (d.count > 0) {
            e = typeCast(Uri.$, d._inner[0]);
        }
        return e;
    };
    XamMultiScaleTileSource.prototype.t = function (a, b, c, d) {
        if (this.j != null) {
            this.j.bj(a, b, c, d);
        }
    };
    XamMultiScaleTileSource.$t = markType(XamMultiScaleTileSource, 'XamMultiScaleTileSource', DependencyObject.$);
    return XamMultiScaleTileSource;
}(DependencyObject));
export { XamMultiScaleTileSource };
/**
 * @hidden
 */
var XamMultiScaleImage = /** @class */ (function (_super) {
    tslib_1.__extends(XamMultiScaleImage, _super);
    function XamMultiScaleImage() {
        var _this = _super.call(this) || this;
        _this.ap = null;
        _this.an = null;
        _this.ak = null;
        _this.b8 = null;
        _this.a0 = 0;
        _this.propertyChanged = null;
        _this.a8 = 0;
        _this.a9 = 0;
        _this.ay = new Date();
        _this.b9 = null;
        _this.a1 = 0;
        _this.aw = new List$1(Tile.$, 0);
        _this.au = false;
        _this.aq = new LRUCache$2(Tile.$, WriteableBitmap.$, 1, 0x7FFFFFFF, new TilePositionComparer());
        _this.ax = new List$1(Tile.$, 0);
        _this.imageTilesReady = null;
        _this.as = false;
        _this.cb = null;
        _this.ag = null;
        _this.imagesChanged = null;
        _this.downloadingImage = null;
        _this.cancellingImage = null;
        _this.az = 1;
        _this.cb = Rect.empty;
        _this.ag = new CanvasRenderScheduler();
        _this.an = new XamMultiScaleImageView(_this);
        _this.ab = XamMultiScaleImage.$;
        _this.b8 = _this.ca;
        _this.a0 = _this.a3;
        return _this;
    }
    Object.defineProperty(XamMultiScaleImage.prototype, "al", {
        get: function () {
            return this.ak;
        },
        set: function (a) {
            if (this.ak != null) {
                this.ak.unRegister(this);
            }
            this.ak = a;
            if (this.ak != null) {
                this.ak.register(this, runOn(this, this.bx));
            }
        },
        enumerable: true,
        configurable: true
    });
    XamMultiScaleImage.prototype.bo = function (a, b, c) {
        var d = new PropertyChangedEventArgs(a);
        if (this.propertyChanged != null) {
            this.propertyChanged(this, d);
        }
        switch (a) {
            case XamMultiScaleImage.$$p[0]:
                if (this.ao != null) {
                    this.ao.j = this;
                }
                this.bv();
                this.by();
                this.bw();
                break;
            case XamMultiScaleImage.$$p[3]:
                this.bz();
                break;
            case XamMultiScaleImage.$$p[4]:
                this.bz();
                break;
            case XamMultiScaleImage.$$p[2]:
                if (!this.av) {
                    this.an.t();
                }
                break;
        }
    };
    XamMultiScaleImage.prototype.by = function () {
        this.b2();
        if (this.ao != null) {
            this.a8 = Convert.toInt32(logBase(this.ao.m, 2));
            this.a9 = Convert.toInt32(logBase(this.ao.q, 2));
        }
    };
    XamMultiScaleImage.prototype.bj = function (a, b, c, d) {
        this.bv();
        this.by();
        this.bw();
    };
    XamMultiScaleImage.prototype.bz = function () {
        if (this.av) {
            this.ay = dateNow();
            this.b9 = this.b8;
            this.a1 = this.a0;
            this.an.aq();
        }
        else {
            this.b8 = this.ca;
            this.a0 = this.a3;
            this.bw();
        }
    };
    XamMultiScaleImage.prototype.b0 = function () {
        var a = 2;
        var b = dateNow().getTime() - this.ay.getTime();
        var c = b / 1000;
        var d = MathUtil.b((c) / a, 0, 1);
        var e = this.aj != null ? this.aj.ease(d) : d;
        var f = 1 - e;
        this.a0 = this.a1 * f + this.a3 * e;
        this.b8 = { $type: Point_$type, x: this.b9.x * f + this.ca.x * e, y: this.b9.y * f + this.ca.y * e };
        if (d >= 1) {
            this.an.as();
        }
        else {
        }
        this.bw();
    };
    XamMultiScaleImage.prototype.a6 = function (a, b, c) {
        for (var d = 0; d < this.aw.count; ++d) {
            if (this.aw._inner[d].c == a && this.aw._inner[d].d == b && this.aw._inner[d].e == c) {
                return d;
            }
        }
        return -1;
    };
    XamMultiScaleImage.prototype.bx = function (a) {
        var _this = this;
        this.au = false;
        this.as = false;
        if (this.ao == null || !this.an.f() || this.cb.width == 0 || this.cb.height == 0) {
            return;
        }
        var b = truncate(Math.ceil(this.cb.width / this.ao.m));
        var c = truncate(Math.max(1, Math.floor(-logBase(this.a0 / b, 2))));
        if (c >= this.a9 - 8) {
            c = (this.a9 - 8) - 1;
        }
        var d = truncate(Math.round(Math.pow(2, c)));
        var e = this.a0;
        var f = this.cb.height * e / this.cb.width;
        var g = this.ao.q / Math.pow(2, c);
        var h = this.ao.p / Math.pow(2, c);
        var i = Math.max(truncate(Math.floor((this.b8.x * this.ao.q) / g)), 0);
        var j = Math.min(truncate(Math.ceil(((this.b8.x + e) * this.ao.q) / g)), d);
        var k = Math.max(truncate(Math.floor((this.b8.y * this.ao.p) / h)), 0);
        var l = Math.min(truncate(Math.ceil(((this.b8.y + f) * this.ao.q) / h)), d);
        var m = ((i * g) - (this.b8.x * this.ao.q)) / g;
        var n = ((k * h) - (this.b8.y * this.ao.p)) / h;
        var o = (e * this.ao.q / g) * (this.ao.m / this.cb.width);
        var p = new List$1(Tile.$, 0);
        var _loop_2 = function (q) {
            var _loop_4 = function (r) {
                var s = this_2.a6(q, r, c);
                if (s >= 0) {
                    p.add(this_2.aw._inner[s]);
                    this_2.aw.removeAt(s);
                }
                else {
                    p.add(((function () {
                        var $ret = new Tile();
                        $ret.c = q;
                        $ret.d = r;
                        $ret.e = c;
                        return $ret;
                    })()));
                }
            };
            for (var r = k; r < l; ++r) {
                _loop_4(r);
            }
        };
        var this_2 = this;
        for (var q = i; q < j; ++q) {
            _loop_2(q);
        }
        this.ap.f = true;
        this.b2();
        this.aw = p;
        var _loop_3 = function (t) {
            if (this_3.aw._inner[t].h == null) {
                this_3.aw._inner[t].h = this_3.ap.a();
                this_3.aw._inner[t].h._opacity = 1;
                this_3.an.am(this_3.aw._inner[t].h);
                var u = this_3.am(this_3.aw._inner[t]);
                if (u != null) {
                    this_3.aw._inner[t].h.ac = u;
                }
                else {
                    var v = null;
                    var w = ((function () {
                        var $ret = new Tile();
                        $ret.c = _this.aw._inner[t].c;
                        $ret.d = _this.aw._inner[t].d;
                        $ret.e = _this.aw._inner[t].e;
                        return $ret;
                    })());
                    while (w.e >= 0 && v == null) {
                        w.c = w.c >> 1;
                        w.d = w.d >> 1;
                        w.e = w.e - 1;
                        v = this_3.am(w);
                    }
                    if (v != null) {
                        var x = truncate(Math.pow(2, this_3.aw._inner[t].e - w.e));
                        var y = intDivide(256, x);
                        var z = y * (this_3.aw._inner[t].c % x);
                        var aa = y * (this_3.aw._inner[t].d % x);
                        this_3.aw._inner[t].g = this_3.ap.a();
                        this_3.aw._inner[t].g._opacity = 1;
                        this_3.an.an(this_3.aw._inner[t].g);
                        u = this_3.an.a(y, v, z, aa);
                        this_3.aw._inner[t].g.ac = u;
                    }
                    this_3.an.u(this_3.aw._inner[t]);
                }
            }
            var ab = this_3.ao.m / o;
            var ac = this_3.ao.k / o;
            var ad = (this_3.aw._inner[t].c - i + m) * ab;
            var ae = (this_3.aw._inner[t].d - k + n) * ac;
            this_3.aw._inner[t].h.width = ab + 0.5;
            this_3.aw._inner[t].h.height = ac + 0.5;
            this_3.an.ao(this_3.aw._inner[t].h, ad, ae);
            if (this_3.aw._inner[t].g != null) {
                this_3.aw._inner[t].g.width = ab + 0.5;
                this_3.aw._inner[t].g.height = ac + 0.5;
                this_3.an.ao(this_3.aw._inner[t].g, ad, ae);
            }
        };
        var this_3 = this;
        for (var t = 0; t < this.aw.count; ++t) {
            _loop_3(t);
        }
        this.ap.f = false;
        this.an.aj();
    };
    XamMultiScaleImage.prototype.bw = function () {
        if (this.ao == null || !this.an.f() || this.cb.width == 0 || this.cb.height == 0) {
            return;
        }
        if (this.au) {
            return;
        }
        this.au = true;
        this.an.s(runOn(this, this.bx));
    };
    XamMultiScaleImage.prototype.b2 = function () {
        for (var a = 0; a < this.aw.count; ++a) {
            this.an.r(this.aw._inner[a]);
            this.bg(this.aw._inner[a]);
            if (this.aw._inner[a].h != null) {
                this.ap.n(this.aw._inner[a].h);
                this.aw._inner[a].h.ac = null;
                this.aw._inner[a].h = null;
            }
        }
    };
    XamMultiScaleImage.prototype.bv = function () {
        this.ar.i();
    };
    XamMultiScaleImage.prototype.am = function (a) {
        return this.ar.item(a);
    };
    XamMultiScaleImage.prototype.bf = function (a, b) {
        this.ar.item(a, b);
    };
    Object.defineProperty(XamMultiScaleImage.prototype, "ar", {
        get: function () {
            return this.aq;
        },
        set: function (a) {
            this.aq = a;
        },
        enumerable: true,
        configurable: true
    });
    XamMultiScaleImage.prototype.at = function () {
        return this.ax.count != 0;
    };
    XamMultiScaleImage.prototype.bk = function () {
        var a = true;
        if (this.at()) {
            a = false;
        }
        if (!this.an.d()) {
            a = false;
        }
        if (a && !this.as) {
            if (this.imageTilesReady != null) {
                this.imageTilesReady(this, new EventArgs());
            }
        }
        this.as = a;
    };
    XamMultiScaleImage.prototype.b1 = function (a) {
        if (a.g != null) {
            a.b = dateNow();
            this.ax.add(a);
            this.an.ap();
        }
        else {
            this.bk();
        }
    };
    XamMultiScaleImage.prototype.bg = function (a) {
        if (a.g != null) {
            this.ap.n(a.g);
            a.g.ac = null;
            a.g = null;
            for (var b = 0; b < this.ax.count; ++b) {
                if (this.ax._inner[b] == a) {
                    this.ax.removeAt(b);
                    break;
                }
            }
            if (this.ax.count == 0) {
                this.an.ar();
            }
        }
    };
    XamMultiScaleImage.prototype.bi = function () {
        var a = dateNow();
        var b = 0.5;
        for (var c = 0; c < this.ax.count;) {
            var d = a.getTime() - this.ax._inner[c].b.getTime();
            var e = d / 1000;
            var f = (e) / b;
            f = MathUtil.b(f, 0, 1);
            this.ax._inner[c].g._opacity = 1 - f;
            if (f >= 1) {
                this.ap.n(this.ax._inner[c].g);
                this.ax._inner[c].g.ac = null;
                this.ax._inner[c].g = null;
                this.ax.removeAt(c);
            }
            else {
                ++c;
            }
            this.an.x();
        }
        if (this.ax.count == 0) {
            this.an.ar();
        }
    };
    XamMultiScaleImage.prototype.bp = function () {
        this.a0 = this.a3;
        this.b8 = this.ca;
        this.bw();
    };
    XamMultiScaleImage.prototype.br = function (a) {
        var b = a;
        this.ag.j(b);
        this.an.ae(a);
    };
    XamMultiScaleImage.prototype.bs = function (a) {
        this.an.ag(a);
    };
    XamMultiScaleImage.prototype.bt = function (a) {
        this.an.ah(a);
    };
    XamMultiScaleImage.prototype.bu = function (a) {
        this.an.ai(a);
    };
    XamMultiScaleImage.prototype.bn = function () {
        if (this.imagesChanged != null) {
            this.imagesChanged(this, new EventArgs());
        }
    };
    XamMultiScaleImage.prototype.bh = function () {
        this.au = false;
    };
    XamMultiScaleImage.prototype.bm = function (a) {
        if (this.downloadingImage != null) {
            this.downloadingImage(this, a);
        }
    };
    XamMultiScaleImage.prototype.bl = function (a) {
        if (this.cancellingImage != null) {
            this.cancellingImage(this, a);
        }
    };
    Object.defineProperty(XamMultiScaleImage.prototype, "a2", {
        get: function () {
            return this.az;
        },
        enumerable: true,
        configurable: true
    });
    XamMultiScaleImage.prototype.bq = function (a) {
        this.az = a;
    };
    Object.defineProperty(XamMultiScaleImage.prototype, "a7", {
        get: function () {
            return this.ar.h;
        },
        set: function (a) {
            var b = a != this.a7;
            if (b) {
                this.ar = new LRUCache$2(Tile.$, WriteableBitmap.$, 1, a, new TilePositionComparer());
            }
        },
        enumerable: true,
        configurable: true
    });
    XamMultiScaleImage.$t = markType(XamMultiScaleImage, 'XamMultiScaleImage', Control.$, [INotifyPropertyChanged_$type]);
    return XamMultiScaleImage;
}(Control));
export { XamMultiScaleImage };
Type.dep(DependencyProperty, PropertyMetadata, XamMultiScaleImage, 'bo', ['Source:ao:b3', [XamMultiScaleTileSource.$, null], 'SpringsEasingFunction:aj:b4', [IEasingFunction_$type, null], 'UseSprings:av:b5', [0, false], 'ViewportOrigin:ca:b6', [Point_$type, { $type: Point_$type, x: 0, y: 0 }], 'ViewportWidth:a3:b7', [1, 1]]);
//# sourceMappingURL=XamMultiScaleImageView_combined.js.map