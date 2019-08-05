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
var PolySimplification = /** @class */ (function (_super) {
    tslib_1.__extends(PolySimplification, _super);
    function PolySimplification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PolySimplification.b = function (a, b) {
        var c = a.c;
        var d = a.d;
        if (c.length == 0) {
            return 0;
        }
        var e = 0;
        var f = 0;
        var g = b * b;
        e++;
        var h;
        var i;
        var j;
        for (var k = 0; k < c.length; k++) {
            h = c[k] - c[f];
            i = d[k] - d[f];
            j = (h * h) + (i * i);
            if (j > g) {
                c[e] = c[k];
                d[e] = d[k];
                e++;
                f = k;
            }
        }
        return e;
    };
    PolySimplification.a = function (a, b) {
        var c = b.x - a.x;
        var d = b.y - a.y;
        return (c * c) + (d * d);
    };
    PolySimplification.$t = markType(PolySimplification, 'PolySimplification');
    return PolySimplification;
}(Base));
export { PolySimplification };
//# sourceMappingURL=PolySimplification.js.map