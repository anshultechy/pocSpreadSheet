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
var GridFilterDialogFilterChangeEventArgsDescription = /** @class */ (function (_super) {
    tslib_1.__extends(GridFilterDialogFilterChangeEventArgsDescription, _super);
    function GridFilterDialogFilterChangeEventArgsDescription() {
        var _this = _super.call(this) || this;
        _this.f = null;
        return _this;
    }
    GridFilterDialogFilterChangeEventArgsDescription.prototype.get_type = function () {
        return "GridFilterDialogFilterChangeEventArgs";
    };
    Object.defineProperty(GridFilterDialogFilterChangeEventArgsDescription.prototype, "type", {
        get: function () {
            return this.get_type();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridFilterDialogFilterChangeEventArgsDescription.prototype, "filter", {
        get: function () {
            return this.f;
        },
        set: function (a) {
            this.f = a;
            this.e("Filter");
        },
        enumerable: true,
        configurable: true
    });
    GridFilterDialogFilterChangeEventArgsDescription.$t = markType(GridFilterDialogFilterChangeEventArgsDescription, 'GridFilterDialogFilterChangeEventArgsDescription', Description.$);
    return GridFilterDialogFilterChangeEventArgsDescription;
}(Description));
export { GridFilterDialogFilterChangeEventArgsDescription };
//# sourceMappingURL=GridFilterDialogFilterChangeEventArgsDescription.js.map