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
var PolygonUtil = /** @class */ (function (_super) {
    tslib_1.__extends(PolygonUtil, _super);
    function PolygonUtil() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PolygonUtil.a = function (a, b) {
        if (a == null) {
            return false;
        }
        var c = a.count;
        if (c < 4) {
            return false;
        }
        var d = false;
        for (var e = 0, f = c - 1; e < c; f = e++) {
            if (((a.item(e).y > b.y) != (a.item(f).y > b.y)) && (b.x < (a.item(f).x - a.item(e).x) * (b.y - a.item(e).y) / (a.item(f).y - a.item(e).y) + a.item(e).x)) {
                d = !d;
            }
        }
        return d;
    };
    PolygonUtil.$t = markType(PolygonUtil, 'PolygonUtil');
    return PolygonUtil;
}(Base));
export { PolygonUtil };
//# sourceMappingURL=PolygonUtil.js.map