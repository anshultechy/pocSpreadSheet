/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { EdgeClipper } from "./EdgeClipper";
import { Point_$type, markType } from "./type";
/**
 * @hidden
 */
var TopClipper = /** @class */ (function (_super) {
    tslib_1.__extends(TopClipper, _super);
    function TopClipper() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.m = 0;
        return _this;
    }
    TopClipper.prototype.e = function (a) {
        return a.y >= this.m;
    };
    TopClipper.prototype.k = function (a, b) {
        return { $type: Point_$type, x: a.x + (b.x - a.x) * (this.m - a.y) / (b.y - a.y), y: this.m };
    };
    TopClipper.$t = markType(TopClipper, 'TopClipper', EdgeClipper.$);
    return TopClipper;
}(EdgeClipper));
export { TopClipper };
//# sourceMappingURL=TopClipper.js.map