/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "./type";
/**
 * @hidden
 */
var PointTester = /** @class */ (function (_super) {
    tslib_1.__extends(PointTester, _super);
    function PointTester() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.a = false;
        _this.b = false;
        return _this;
    }
    PointTester.prototype.c = function (a, b, c, d, e, f, g, h) {
        var i = Math.abs(d - f);
        var j = Math.abs(f - h);
        var k = 0;
        var l = 0;
        if (i == 0 && j == 0) {
            return false;
        }
        if (i == 0 && j != 0) {
            k = (e + c) / 2;
            l = (-(g - e) / (h - f)) * (k - ((e + g) / 2)) + ((f + h) / 2);
        }
        if (i != 0 && j == 0) {
            k = (g + e) / 2;
            l = (-(e - c) / (f - d)) * (k - ((c + e) / 2)) + ((d + f) / 2);
        }
        if (i != 0 && j != 0) {
            var m = -(e - c) / (f - d);
            var n = -(g - e) / (h - f);
            var o = (c + e) / 2;
            var p = (e + g) / 2;
            var q = (d + f) / 2;
            var r = (f + h) / 2;
            k = (m * o - n * p + r - q) / (m - n);
            l = i > j ? m * (k - o) + q : n * (k - p) + r;
        }
        var s = e - k;
        var t = f - l;
        var u = s * s + t * t;
        s = a - k;
        t = b - l;
        var v = s * s + t * t;
        this.b = v <= u;
        this.a = k < a && ((a - k) * (a - k)) > u;
        return true;
    };
    PointTester.$t = markType(PointTester, 'PointTester');
    return PointTester;
}(Base));
export { PointTester };
//# sourceMappingURL=PointTester.js.map