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
var GridFilterDialogViewModelDescription = /** @class */ (function (_super) {
    tslib_1.__extends(GridFilterDialogViewModelDescription, _super);
    function GridFilterDialogViewModelDescription() {
        var _this = _super.call(this) || this;
        _this.l = null;
        _this.h = false;
        _this.j = 0;
        _this.f = null;
        return _this;
    }
    GridFilterDialogViewModelDescription.prototype.get_type = function () {
        return "GridFilterDialogViewModel";
    };
    Object.defineProperty(GridFilterDialogViewModelDescription.prototype, "type", {
        get: function () {
            return this.get_type();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridFilterDialogViewModelDescription.prototype, "propertyType", {
        get: function () {
            return this.l;
        },
        set: function (a) {
            this.l = a;
            this.e("PropertyType");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridFilterDialogViewModelDescription.prototype, "isTopLevelOr", {
        get: function () {
            return this.h;
        },
        set: function (a) {
            this.h = a;
            this.e("IsTopLevelOr");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridFilterDialogViewModelDescription.prototype, "maxGroupingLevels", {
        get: function () {
            return this.j;
        },
        set: function (a) {
            this.j = a;
            this.e("MaxGroupingLevels");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridFilterDialogViewModelDescription.prototype, "rows", {
        get: function () {
            return this.f;
        },
        set: function (a) {
            this.f = a;
            this.e("Rows");
        },
        enumerable: true,
        configurable: true
    });
    GridFilterDialogViewModelDescription.$t = markType(GridFilterDialogViewModelDescription, 'GridFilterDialogViewModelDescription', Description.$);
    return GridFilterDialogViewModelDescription;
}(Description));
export { GridFilterDialogViewModelDescription };
//# sourceMappingURL=GridFilterDialogViewModelDescription.js.map