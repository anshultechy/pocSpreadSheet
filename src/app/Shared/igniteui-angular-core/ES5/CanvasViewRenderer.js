/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
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
var CanvasViewRenderer = /** @class */ (function (_super) {
    tslib_1.__extends(CanvasViewRenderer, _super);
    function CanvasViewRenderer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.i = null;
        _this.g = 0;
        _this.e = 0;
        _this.h = 0;
        _this.f = 0;
        _this.b = false;
        _this.c = false;
        _this.z = null;
        _this.l = "left";
        _this.a = null;
        _this.d = 1;
        return _this;
    }
    CanvasViewRenderer.prototype.h$e = function () {
        return this.i;
    };
    Object.defineProperty(CanvasViewRenderer.prototype, "h$d", {
        get: function () {
            return this.i;
        },
        set: function (a) {
            this.i = a;
        },
        enumerable: true,
        configurable: true
    });
    CanvasViewRenderer.prototype.k = function (a, b, c, d, e, f, g) {
        return CanvasViewRenderer.j(this.i, a, b, c, d, e, f, g);
    };
    CanvasViewRenderer.j = function (a, b, c, d, e, f, g, h) {
        var i;
        if (b.useCustomDirection) {
            var j = void 0, k = void 0, l = void 0, m = void 0, n = void 0;
            n = e - c;
            j = c + b.startX * n;
            l = c + b.endX * n;
            n = f - d;
            k = d + b.startY * n;
            m = d + b.endY * n;
            if (h) {
                var o = g / 2;
                j -= o;
                l += o;
                k -= o;
                m += o;
            }
            i = a.createLinearGradient(j, k, l, m);
        }
        else {
            if (h) {
                var p = g / 2;
                c -= p;
                e += p;
                d -= p;
                f += p;
            }
            i = a.createLinearGradient(c, d, c, f);
        }
        for (var q = 0; q < b.gradientStops.length; q++) {
            var r = b.gradientStops[q];
            i.addColorStop(r.offset, r._fill);
        }
        return i;
    };
    CanvasViewRenderer.prototype.h$t = function (a) {
        if (a._visibility != 0) {
            return;
        }
        var b = a.n;
        var c = a.o;
        var d = a.width;
        var e = a.height;
        var f = a.al;
        var g = a.am;
        this.i.beginPath();
        this.i.globalAlpha = (a._opacity * this.d);
        if (f > 0 || g > 0) {
            if (f > d / 2) {
                f = (d / 2);
            }
            if (g > e / 2) {
                g = (e / 2);
            }
            var h = Math.min(f, g);
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
        var i = a._fill;
        var j = a._stroke;
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
    };
    CanvasViewRenderer.prototype.h$q = function (a) {
        if (a._visibility != 0) {
            return;
        }
        this.i.beginPath();
        if (a._opacity < 1 || this.d < 1) {
            this.i.globalAlpha = (a._opacity * this.d);
        }
        var b = a._fill;
        var c = a._stroke;
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
    };
    CanvasViewRenderer.prototype.h$o = function (a) {
        if (a == null) {
            return;
        }
        var b = a.a;
        switch (b) {
            case 0:
                for (var c = 0; c < a.c.count; c++) {
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
    };
    CanvasViewRenderer.prototype.o = function (a) {
        this.i.moveTo(a.d.x, (a.d.y - a.c));
        this.z = { $type: Point_$type, x: a.d.x, y: a.d.y - a.c };
        var b = ((function () {
            var $ret = new ArcSegment();
            $ret.e = { $type: Point_$type, x: a.d.x, y: a.d.y + a.c };
            $ret.b = false;
            $ret.f = new Size(1, a.b, a.c);
            return $ret;
        })());
        var c = ((function () {
            var $ret = new ArcSegment();
            $ret.e = { $type: Point_$type, x: a.d.x, y: a.d.y - a.c };
            $ret.b = false;
            $ret.f = new Size(1, a.b, a.c);
            return $ret;
        })());
        var d = this.b;
        this.b = false;
        this.m(b);
        this.m(c);
        this.b = d;
        if (!this.b) {
            return;
        }
        var e = a.d.x - a.b;
        var f = a.d.y + a.b;
        var g = a.d.x - a.c;
        var h = a.d.y + a.c;
        var i = this.e;
        var j = this.f;
        var k = this.g;
        var l = this.h;
        this.g = e < k ? e : k;
        this.h = g < l ? g : l;
        this.e = f > i ? f : i;
        this.f = h > j ? h : j;
        this.c = true;
    };
    CanvasViewRenderer.prototype.s = function (a) {
        var b = a.b;
        var c = b.count;
        for (var d = 0; d < c; d++) {
            this.p(b._inner[d]);
        }
    };
    CanvasViewRenderer.prototype.p = function (a) {
        var b = a == null ? null : a._startPoint;
        if (PointUtil.equals(b, null)) {
            return;
        }
        var c = b.x;
        var d = b.y;
        this.i.moveTo(c, d);
        if (this.b) {
            var e = this.e;
            var f = this.f;
            var g = this.g;
            var h = this.h;
            this.g = c < g ? c : g;
            this.h = d < h ? d : h;
            this.e = c > e ? c : e;
            this.f = d > f ? d : f;
            this.c = true;
        }
        this.z = b;
        var i = a._segments;
        var j = i.count;
        for (var k = 0; k < j; k++) {
            this.w(i._inner[k]);
        }
        if (a._isClosed) {
            this.i.closePath();
        }
    };
    CanvasViewRenderer.prototype.w = function (a) {
        var b = a.a;
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
    };
    CanvasViewRenderer.prototype.y = function (a, b, c, d, e, f, g, h) {
        var i = 1 / 50;
        var j;
        var k;
        var l;
        var m;
        var n;
        var o;
        var p;
        var q = this.g;
        var r = this.h;
        var s = this.e;
        var t = this.f;
        for (var u = 0; u <= 1; u += i) {
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
    };
    CanvasViewRenderer.prototype.n = function (a) {
        this.i.bezierCurveTo(a.e.x, a.e.y, a.f.x, a.f.y, a.g.x, a.g.y);
        if (this.b) {
            this.y(this.z.x, this.z.y, a.e.x, a.e.y, a.f.x, a.f.y, a.g.x, a.g.y);
        }
    };
    CanvasViewRenderer.prototype.t = function (a) {
        var b = 0;
        var c = a.b.count;
        var d = a.b;
        var e = this.z;
        var f = this.z;
        var g = this.z;
        var h = this.b;
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
    };
    CanvasViewRenderer.prototype.x = function (a, b, c, d, e) {
        var f = new List$1(Point_$type, 0);
        f.add(a);
        f.add({ $type: Point_$type, x: a.x + Math.cos(b) * d, y: a.y + Math.sin(b) * d });
        f.add({ $type: Point_$type, x: a.x + Math.cos(c) * d, y: a.y + Math.sin(c) * d });
        var g = Math.PI * 2;
        var h = Math.PI / 2;
        var i = Math.PI;
        var j = Math.PI * 3 / 2;
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
        var k = 1.7976931348623157E+308;
        var l = 1.7976931348623157E+308;
        var m = -1.7976931348623157E+308;
        var n = -1.7976931348623157E+308;
        for (var o = 0; o < f.count; o++) {
            var p = f._inner[o];
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
    };
    CanvasViewRenderer.prototype.m = function (a) {
        var b = this.z;
        var c = a.e;
        if (a.f.width != a.f.height) {
            this.i.save();
            this.i.scale(a.f.width / a.f.height, 1);
            b = { $type: Point_$type, x: b.x * (a.f.height / a.f.width), y: b.y };
            c = { $type: Point_$type, x: c.x * (a.f.height / a.f.width), y: c.y };
        }
        var d = a.d == 0;
        var e = CoreGeometryUtil.b(b, c, a.f.height, d, a.b);
        var f = Math.atan2(b.y - e.y, b.x - e.x);
        var g = Math.atan2(c.y - e.y, c.x - e.x);
        var h = (Math.abs(g - f) < Math.PI);
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
    };
    CanvasViewRenderer.prototype.r = function (a) {
        var b = a.c.x;
        var c = a.c.y;
        this.i.lineTo(b, c);
        this.z = a.c;
        if (this.b) {
            var d = this.e;
            var e = this.f;
            var f = this.g;
            var g = this.h;
            this.g = b < f ? b : f;
            this.h = c < g ? c : g;
            this.e = b > d ? b : d;
            this.f = c > e ? c : e;
            this.c = true;
        }
    };
    CanvasViewRenderer.prototype.u = function (a) {
        var b = a._points;
        var c = b.count;
        if (this.b) {
            var d = this.g;
            var e = this.h;
            var f = this.e;
            var g = this.f;
            var h = void 0;
            var i = void 0;
            for (var j = 0; j < c; j++) {
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
            for (var k = 0; k < c; k++) {
                this.i.lineTo(b._inner[k].x, b._inner[k].y);
            }
        }
        this.z = a._points._inner[c - 1];
    };
    CanvasViewRenderer.prototype.v = function (a) {
        this.i.rect(a.d.left, a.d.top, a.d.width, a.d.height);
        if (this.b) {
            var b = a.d;
            var c = this.g;
            var d = this.h;
            var e = this.e;
            var f = this.f;
            var g = b.left;
            var h = b.right;
            var i = b.top;
            var j = b.bottom;
            this.g = g < c ? g : c;
            this.h = i < d ? i : d;
            this.e = h > e ? h : e;
            this.f = j > f ? j : f;
            this.c = true;
        }
    };
    CanvasViewRenderer.prototype.q = function (a) {
        this.i.moveTo(a.c.x, a.c.y);
        this.i.lineTo(a.b.x, a.b.y);
        if (this.b) {
            var b = a.c;
            var c = a.b;
            var d = this.g;
            var e = this.h;
            var f = this.e;
            var g = this.f;
            var h = b.x < c.x ? b.x : c.x;
            var i = b.x > c.x ? b.x : c.x;
            var j = b.y < c.y ? b.y : c.y;
            var k = b.y > c.y ? b.y : c.y;
            this.g = h < d ? h : d;
            this.h = j < e ? j : e;
            this.e = i > f ? i : f;
            this.f = k > g ? k : g;
            this.c = true;
        }
    };
    CanvasViewRenderer.prototype.h$u = function (a) {
        if (a._visibility == 0 && a.ak != null) {
            if (a._opacity < 1 || this.d < 1) {
                this.i.globalAlpha = (a._opacity * this.d);
            }
            var def_ = this.l;
            var con_ = this.i;
            con_.textAlign = def_;
            this.i.fillStyle = a.am != null ? a.am._fill : null;
            this.i.textBaseline = "top";
            this.i.fillText(a.ak, a.n, a.o);
            if (a._opacity < 1 || this.d < 1) {
                this.i.globalAlpha = 1;
            }
        }
    };
    CanvasViewRenderer.prototype.h$v = function (a, b, c) {
        if (a._visibility == 0) {
            if (a._opacity < 1 || this.d < 1) {
                this.i.globalAlpha = (a._opacity * this.d);
            }
            var d = b.left + b.width / 2;
            var e = a.ak.split(' ');
            this.i.fillStyle = a.am._fill;
            this.i.textBaseline = "top";
            this.i.textAlign = "center";
            var f = b.width;
            var g = b.height;
            var h = b.top;
            var i = "";
            for (var j = 0; j < e.length; j++) {
                var k = i + e[j];
                var l = this.i.measureText(k);
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
    };
    CanvasViewRenderer.prototype.h$r = function (a) {
        if (a.aj == null || a.aj.count < 1) {
            return;
        }
        this.i.beginPath();
        this.i.globalAlpha = (a._opacity * this.d);
        var b = a.aj;
        var c = b._inner[0];
        var d = a._fill;
        var e = a._stroke;
        this.b = (d != null && d.isGradient) || (e != null && e.isGradient);
        if (this.b) {
            var f = 1.7976931348623157E+308;
            var g = -1.7976931348623157E+308;
            var h = 1.7976931348623157E+308;
            var i = -1.7976931348623157E+308;
            var j = c.x;
            var k = c.y;
            f = j < f ? j : f;
            h = k < h ? k : h;
            g = j > g ? j : g;
            i = k > i ? k : i;
            this.i.moveTo(j, k);
            for (var l = 1; l < b.count; l++) {
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
            for (var m = 1; m < b.count; m++) {
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
    };
    CanvasViewRenderer.prototype.h$s = function (a) {
        if (a.aj == null || a.aj.count < 1) {
            return;
        }
        this.i.beginPath();
        this.i.globalAlpha = (a._opacity * this.d);
        var b = a.aj;
        var c = b._inner[0];
        var d = a._fill;
        var e = a._stroke;
        this.b = (d != null && d.isGradient) || (e != null && e.isGradient);
        if (this.b) {
            var f = 1.7976931348623157E+308;
            var g = -1.7976931348623157E+308;
            var h = 1.7976931348623157E+308;
            var i = -1.7976931348623157E+308;
            var j = c.x;
            var k = c.y;
            f = j < f ? j : f;
            h = k < h ? k : h;
            g = j > g ? j : g;
            i = k > i ? k : i;
            this.i.moveTo(j, k);
            for (var l = 1; l < b.count; l++) {
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
            for (var m = 1; m < b.count; m++) {
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
    };
    CanvasViewRenderer.prototype.h$n = function (a, b) {
        if (b._visibility == 1) {
            return;
        }
        if ((b._opacity != 1 || this.d != 1) && !a.isHitTestRender) {
            this.i.globalAlpha = (b._opacity * this.d);
        }
        var c = b.ah;
        if (c != null && c.render != null) {
            a.context = this.i;
            a.xPosition = b.n;
            a.yPosition = b.o;
            a.data = b.content;
            c.render(a);
        }
        this.i.globalAlpha = 1;
    };
    CanvasViewRenderer.prototype.h$h = function (a) {
        if (typeCast(TransformGroup.$, a) !== null) {
            var b = a;
            for (var c = b.j.count - 1; c >= 0; c--) {
                var d = b.j._inner[c];
                this.h$h(d);
            }
        }
        else if (typeCast(TranslateTransform.$, a) !== null) {
            var e = a;
            this.i.translate(e.j, e.k);
        }
        else if (typeCast(RotateTransform.$, a) !== null) {
            var f = a;
            var g = f.j * Math.PI / 180;
            var h = Math.cos(g);
            var i = Math.sin(g);
            var j = f.k * (1 - h) + f.l * i;
            var k = f.l * (1 - h) - f.k * i;
            this.i.transform(h, i, i * -1, h, j, k);
        }
        else if (typeCast(ScaleTransform.$, a) !== null) {
            var l = a;
            this.i.transform(l.l, 0, 0, l.m, l.j - l.l * l.j, l.k - l.m * l.k);
        }
    };
    CanvasViewRenderer.prototype.h$p = function (a) {
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
            var b = this.g;
            var c = this.h;
            var d = this.e;
            var e = this.f;
            var f = a.aj < a.ak ? a.aj : a.ak;
            var g = a.aj > a.ak ? a.aj : a.ak;
            var h = a.al < a.am ? a.al : a.am;
            var i = a.al > a.am ? a.al : a.am;
            this.g = f < b ? f : b;
            this.h = h < c ? h : c;
            this.e = g > d ? g : d;
            this.f = i > e ? i : e;
        }
        var j = a._fill;
        var k = a._stroke;
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
    };
    CanvasViewRenderer.prototype.h$ac = function (a) {
        this.i.beginPath();
        this.i.rect(a.left, a.top, a.width, a.height);
        this.i.clip();
    };
    CanvasViewRenderer.prototype.h$x = function () {
        this.i.save();
    };
    CanvasViewRenderer.prototype.h$w = function () {
        this.i.restore();
    };
    CanvasViewRenderer.prototype.h$y = function (a, b) {
        this.i.scale(a, b);
    };
    CanvasViewRenderer.prototype.h$ad = function (a, b) {
        this.i.translate(a, b);
    };
    CanvasViewRenderer.prototype.h$i = function (a, b, c, d) {
        this.i.clearRect(a, b, c, d);
    };
    CanvasViewRenderer.prototype.h$k = function (a, b, c, d, e, f) {
        if (b != 1) {
            this.i.globalAlpha = (b * this.d);
        }
        this.i.drawImage(a, c, d, e, f);
        if (b != 1) {
            this.i.globalAlpha = 1;
        }
    };
    CanvasViewRenderer.prototype.h$l = function (a, b, c, d, e, f, g, h, i, j) {
        if (b != 1) {
            this.i.globalAlpha = (b * this.d);
        }
        this.i.drawImage(a, c, d, e, f, g, h, i, j);
        if (b != 1) {
            this.i.globalAlpha = 1;
        }
    };
    CanvasViewRenderer.prototype.h$a = function (a, b) {
        var c = this.i.getImageData(a, b, 1, 1);
        var d = new Array(4);
        d[0] = c.data[0];
        d[1] = c.data[1];
        d[2] = c.data[2];
        d[3] = c.data[3];
        return d;
    };
    CanvasViewRenderer.prototype.h$f = function () {
        return this.i.font;
    };
    CanvasViewRenderer.prototype.h$b = function () {
        return this.a;
    };
    CanvasViewRenderer.prototype.h$z = function (a) {
        if (this.i.font != a) {
            this.i.font = a;
        }
    };
    CanvasViewRenderer.prototype.h$aa = function (a) {
        this.a = a;
        var b = a != null ? a.fontString : null;
        if (this.i.font != b) {
            this.i.font = b;
        }
    };
    CanvasViewRenderer.prototype.h$c = function (a) {
        var b = this.i.measureText(a);
        return b.width;
    };
    CanvasViewRenderer.prototype.h$ab = function (a) {
        this.d = a;
    };
    CanvasViewRenderer.prototype.h$g = function (shape_, style_) {
        if (style_ == null) {
            return;
        }
        var fillColor_ = null;
        var strokeColor_ = null;
        var strokeThickness_ = NaN;
        var opacity_ = NaN;
        var s_ = style_;
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
            shape_._fill = ((function () {
                var $ret = new Brush();
                $ret.fill = fillColor_;
                return $ret;
            })());
        }
        if (strokeColor_ != null) {
            shape_._stroke = ((function () {
                var $ret = new Brush();
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
    };
    CanvasViewRenderer.prototype.h$m = function (a, b, c, d) {
        this.i.shadowColor = a;
        this.i.shadowBlur = b;
        this.i.shadowOffsetX = c;
        this.i.shadowOffsetY = d;
    };
    CanvasViewRenderer.prototype.h$j = function () {
        this.i.shadowColor = "rgba(0,0,0,0)";
        this.i.shadowBlur = 0;
        this.i.shadowOffsetX = 0;
        this.i.shadowOffsetY = 0;
    };
    CanvasViewRenderer.$t = markType(CanvasViewRenderer, 'CanvasViewRenderer', Base.$, [IRenderer_$type]);
    return CanvasViewRenderer;
}(Base));
export { CanvasViewRenderer };
//# sourceMappingURL=CanvasViewRenderer.js.map