/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "./type";
import { ScalerVisibleBounds } from "./ScalerVisibleBounds";
import { Rect } from "./Rect";
/**
 * @hidden
 */
var HeatTileScaler = /** @class */ (function (_super) {
    tslib_1.__extends(HeatTileScaler, _super);
    function HeatTileScaler() {
        var _this = _super.call(this) || this;
        _this.b = 0;
        _this.c = 0;
        _this.d = 0;
        _this.e = 0;
        _this.b = 85.05112878 - -85.05112878;
        _this.c = 180 - -180;
        _this.d = _this.k(85.05112878);
        _this.e = _this.k(85.05112878) - _this.k(-85.05112878);
        return _this;
    }
    HeatTileScaler.prototype.k = function (a) {
        var b = a * (0.017453292519943295);
        var c = Math.sin(b);
        var d = 0.5 * Math.log((1 + c) / (1 - c));
        return d;
    };
    HeatTileScaler.a = function (a, b) {
        var c = new Rect(0, b.left / a.width, b.top / a.height, b.width / a.width, b.height / a.height);
        var d = c.left + c.width * a.left;
        var e = c.left + c.width * a.right;
        var f = c.top + c.height * a.top;
        var g = c.top + c.height * a.bottom;
        var h = new ScalerVisibleBounds(d, f, e, g);
        return h;
    };
    HeatTileScaler.m = function (a) {
        a = Math.exp(2 * a);
        return Math.asin((a - 1) / (a + 1)) / 0.017453292519943295;
    };
    HeatTileScaler.prototype.t = function (a, b, c) {
        var d = (a - c.top) * b.width + b.top * c.height;
        d = this.k(85.05112878) - d / (c.height / this.e);
        return HeatTileScaler.m(d);
    };
    HeatTileScaler.prototype.r = function (a, b, c) {
        var d = c.top + this.l(a, c.height);
        return (d - b.top * c.height) / b.width;
    };
    HeatTileScaler.prototype.l = function (a, b) {
        a = a > -85.05112878 ? (a < 85.05112878 ? a : 85.05112878) : -85.05112878;
        var c = this.k(a);
        var d = (this.d - c) * b / this.e;
        return (d);
    };
    HeatTileScaler.prototype.u = function (a, b, c) {
        var d = b.left + b.width * (a - c.left) / c.width;
        return -180 + d * (this.c);
    };
    HeatTileScaler.prototype.s = function (a, b, c) {
        var d = (a - -180) / (this.c);
        return c.left + c.width * (d - b.left) / b.width;
    };
    HeatTileScaler.prototype.i = function (a, b) {
        var c = HeatTileScaler.a(a, b);
        return this.t(b.bottom, a, b);
    };
    HeatTileScaler.prototype.g = function (a, b) {
        var c = HeatTileScaler.a(a, b);
        return this.t(b.top, a, b);
    };
    HeatTileScaler.prototype.j = function (a, b) {
        var c = HeatTileScaler.a(a, b);
        return this.u(b.left, a, b);
    };
    HeatTileScaler.prototype.h = function (a, b) {
        var c = HeatTileScaler.a(a, b);
        return this.u(b.right, a, b);
    };
    HeatTileScaler.prototype.v = function (a, b, c) {
        var d = c.height;
        var e = c.top;
        for (var f = 0; f < a.count; f++) {
            var g = a._inner[f];
            g = g > -85.05112878 ? (g < 85.05112878 ? g : 85.05112878) : -85.05112878;
            var h = g * (0.017453292519943295);
            var i = Math.sin(h);
            var j = 0.5 * Math.log((1 + i) / (1 - i));
            var k = (this.d - j) * d / this.e;
            k = e + k;
            a._inner[f] = (k - b.top * d) / b.width;
        }
    };
    HeatTileScaler.prototype.w = function (a, b, c) {
        var d = c.left;
        var e = c.width;
        var f = b.left;
        var g = b.width;
        for (var h = 0; h < a.count; h++) {
            var i = (a._inner[h] - -180) / (this.c);
            a._inner[h] = c.left + c.width * (i - b.left) / b.width;
        }
    };
    HeatTileScaler.$t = markType(HeatTileScaler, 'HeatTileScaler');
    return HeatTileScaler;
}(Base));
export { HeatTileScaler };
//# sourceMappingURL=HeatTileScaler.js.map