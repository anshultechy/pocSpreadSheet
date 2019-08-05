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
var LeftClipper = /** @class */ (function (_super) {
    tslib_1.__extends(LeftClipper, _super);
    function LeftClipper() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.m = 0;
        return _this;
    }
    LeftClipper.prototype.e = function (a) {
        return a.x >= this.m;
    };
    LeftClipper.prototype.k = function (a, b) {
        return { $type: Point_$type, x: this.m, y: a.y + (b.y - a.y) * (this.m - a.x) / (b.x - a.x) };
    };
    LeftClipper.$t = markType(LeftClipper, 'LeftClipper', EdgeClipper.$);
    return LeftClipper;
}(EdgeClipper));
export { LeftClipper };
//# sourceMappingURL=LeftClipper.js.map