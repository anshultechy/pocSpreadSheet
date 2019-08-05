/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, Point_$type, markType } from "./type";
import { isNaN_, isInfinity } from "./number";
/**
 * @hidden
 */
var CoreGeometryUtil = /** @class */ (function (_super) {
    tslib_1.__extends(CoreGeometryUtil, _super);
    function CoreGeometryUtil() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CoreGeometryUtil.a = function (a) {
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
    };
    CoreGeometryUtil.b = function (a, b, c, d, e) {
        var f = { $type: Point_$type, x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 };
        var g = b.x - a.x;
        var h = b.y - a.y;
        var i = Math.sqrt(g * g + h * h);
        var j = h;
        var k = g * -1;
        if (e == d) {
            j = h * -1;
            k = g;
        }
        var l = Math.max(Math.abs(j), Math.abs(k));
        j = j / l;
        k = k / l;
        var m = Math.sqrt(j * j + k * k);
        var n = j / m;
        var o = k / m;
        var p = i / 2;
        var q = Math.sqrt(c * c - p * p);
        if (isNaN_(q)) {
            q = 0;
        }
        var r = q * n;
        var s = q * o;
        var t = { $type: Point_$type, x: f.x + r, y: f.y + s };
        return t;
    };
    CoreGeometryUtil.$t = markType(CoreGeometryUtil, 'CoreGeometryUtil');
    return CoreGeometryUtil;
}(Base));
export { CoreGeometryUtil };
//# sourceMappingURL=CoreGeometryUtil.js.map