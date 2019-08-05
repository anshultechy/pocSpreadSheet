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
var GridFilterDialogViewModelGroupingDescription = /** @class */ (function (_super) {
    tslib_1.__extends(GridFilterDialogViewModelGroupingDescription, _super);
    function GridFilterDialogViewModelGroupingDescription() {
        var _this = _super.call(this) || this;
        _this.i = 0;
        _this.h = 0;
        _this.f = false;
        return _this;
    }
    GridFilterDialogViewModelGroupingDescription.prototype.get_type = function () {
        return "GridFilterDialogViewModelGrouping";
    };
    Object.defineProperty(GridFilterDialogViewModelGroupingDescription.prototype, "type", {
        get: function () {
            return this.get_type();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridFilterDialogViewModelGroupingDescription.prototype, "startIndex", {
        get: function () {
            return this.i;
        },
        set: function (a) {
            this.i = a;
            this.e("StartIndex");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridFilterDialogViewModelGroupingDescription.prototype, "endIndex", {
        get: function () {
            return this.h;
        },
        set: function (a) {
            this.h = a;
            this.e("EndIndex");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridFilterDialogViewModelGroupingDescription.prototype, "isOrGrouping", {
        get: function () {
            return this.f;
        },
        set: function (a) {
            this.f = a;
            this.e("IsOrGrouping");
        },
        enumerable: true,
        configurable: true
    });
    GridFilterDialogViewModelGroupingDescription.$t = markType(GridFilterDialogViewModelGroupingDescription, 'GridFilterDialogViewModelGroupingDescription', Description.$);
    return GridFilterDialogViewModelGroupingDescription;
}(Description));
export { GridFilterDialogViewModelGroupingDescription };
//# sourceMappingURL=GridFilterDialogViewModelGroupingDescription.js.map