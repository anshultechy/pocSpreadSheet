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
var ColumnSortDescriptionDescription = /** @class */ (function (_super) {
    tslib_1.__extends(ColumnSortDescriptionDescription, _super);
    function ColumnSortDescriptionDescription() {
        var _this = _super.call(this) || this;
        _this.f = null;
        _this.g = null;
        return _this;
    }
    ColumnSortDescriptionDescription.prototype.get_type = function () {
        return "ColumnSortDescription";
    };
    Object.defineProperty(ColumnSortDescriptionDescription.prototype, "type", {
        get: function () {
            return this.get_type();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColumnSortDescriptionDescription.prototype, "propertyPath", {
        get: function () {
            return this.f;
        },
        set: function (a) {
            this.f = a;
            this.e("PropertyPath");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColumnSortDescriptionDescription.prototype, "sortDirection", {
        get: function () {
            return this.g;
        },
        set: function (a) {
            this.g = a;
            this.e("SortDirection");
        },
        enumerable: true,
        configurable: true
    });
    ColumnSortDescriptionDescription.$t = markType(ColumnSortDescriptionDescription, 'ColumnSortDescriptionDescription', Description.$);
    return ColumnSortDescriptionDescription;
}(Description));
export { ColumnSortDescriptionDescription };
//# sourceMappingURL=ColumnSortDescriptionDescription.js.map