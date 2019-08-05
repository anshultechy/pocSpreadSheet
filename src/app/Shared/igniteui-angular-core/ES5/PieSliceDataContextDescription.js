/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { DataContextDescription } from "./DataContextDescription";
import { markType } from "./type";
/**
 * @hidden
 */
var PieSliceDataContextDescription = /** @class */ (function (_super) {
    tslib_1.__extends(PieSliceDataContextDescription, _super);
    function PieSliceDataContextDescription() {
        var _this = _super.call(this) || this;
        _this.w = 0;
        _this.u = false;
        return _this;
    }
    PieSliceDataContextDescription.prototype.get_type = function () {
        return "PieSliceDataContext";
    };
    Object.defineProperty(PieSliceDataContextDescription.prototype, "percentValue", {
        get: function () {
            return this.w;
        },
        set: function (a) {
            this.w = a;
            this.e("PercentValue");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PieSliceDataContextDescription.prototype, "isOthersSlice", {
        get: function () {
            return this.u;
        },
        set: function (a) {
            this.u = a;
            this.e("IsOthersSlice");
        },
        enumerable: true,
        configurable: true
    });
    PieSliceDataContextDescription.$t = markType(PieSliceDataContextDescription, 'PieSliceDataContextDescription', DataContextDescription.$);
    return PieSliceDataContextDescription;
}(DataContextDescription));
export { PieSliceDataContextDescription };
//# sourceMappingURL=PieSliceDataContextDescription.js.map