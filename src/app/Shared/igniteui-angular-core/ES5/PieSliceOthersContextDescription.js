/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Description } from "./Description";
import { markType } from "./type";
/**
 * @hidden
 */
var PieSliceOthersContextDescription = /** @class */ (function (_super) {
    tslib_1.__extends(PieSliceOthersContextDescription, _super);
    function PieSliceOthersContextDescription() {
        var _this = _super.call(this) || this;
        _this.f = null;
        return _this;
    }
    PieSliceOthersContextDescription.prototype.get_type = function () {
        return "PieSliceOthersContext";
    };
    Object.defineProperty(PieSliceOthersContextDescription.prototype, "type", {
        get: function () {
            return this.get_type();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PieSliceOthersContextDescription.prototype, "dataRef", {
        get: function () {
            return this.f;
        },
        set: function (a) {
            this.f = a;
            this.e("DataRef");
        },
        enumerable: true,
        configurable: true
    });
    PieSliceOthersContextDescription.$t = markType(PieSliceOthersContextDescription, 'PieSliceOthersContextDescription', Description.$);
    return PieSliceOthersContextDescription;
}(Description));
export { PieSliceOthersContextDescription };
//# sourceMappingURL=PieSliceOthersContextDescription.js.map