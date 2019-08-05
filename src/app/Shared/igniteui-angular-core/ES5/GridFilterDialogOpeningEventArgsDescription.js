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
var GridFilterDialogOpeningEventArgsDescription = /** @class */ (function (_super) {
    tslib_1.__extends(GridFilterDialogOpeningEventArgsDescription, _super);
    function GridFilterDialogOpeningEventArgsDescription() {
        var _this = _super.call(this) || this;
        _this.f = null;
        _this.h = null;
        return _this;
    }
    GridFilterDialogOpeningEventArgsDescription.prototype.get_type = function () {
        return "GridFilterDialogOpeningEventArgs";
    };
    Object.defineProperty(GridFilterDialogOpeningEventArgsDescription.prototype, "type", {
        get: function () {
            return this.get_type();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridFilterDialogOpeningEventArgsDescription.prototype, "filter", {
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
    Object.defineProperty(GridFilterDialogOpeningEventArgsDescription.prototype, "propertyType", {
        get: function () {
            return this.h;
        },
        set: function (a) {
            this.h = a;
            this.e("PropertyType");
        },
        enumerable: true,
        configurable: true
    });
    GridFilterDialogOpeningEventArgsDescription.$t = markType(GridFilterDialogOpeningEventArgsDescription, 'GridFilterDialogOpeningEventArgsDescription', Description.$);
    return GridFilterDialogOpeningEventArgsDescription;
}(Description));
export { GridFilterDialogOpeningEventArgsDescription };
//# sourceMappingURL=GridFilterDialogOpeningEventArgsDescription.js.map