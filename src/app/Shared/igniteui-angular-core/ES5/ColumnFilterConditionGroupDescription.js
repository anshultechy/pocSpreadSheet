/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { ColumnFilterConditionDescription } from "./ColumnFilterConditionDescription";
import { markType } from "./type";
/**
 * @hidden
 */
var ColumnFilterConditionGroupDescription = /** @class */ (function (_super) {
    tslib_1.__extends(ColumnFilterConditionGroupDescription, _super);
    function ColumnFilterConditionGroupDescription() {
        var _this = _super.call(this) || this;
        _this.i = false;
        _this.g = null;
        return _this;
    }
    ColumnFilterConditionGroupDescription.prototype.get_type = function () {
        return "ColumnFilterConditionGroup";
    };
    Object.defineProperty(ColumnFilterConditionGroupDescription.prototype, "usesOrOperator", {
        get: function () {
            return this.i;
        },
        set: function (a) {
            this.i = a;
            this.e("UsesOrOperator");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColumnFilterConditionGroupDescription.prototype, "item", {
        get: function () {
            return this.g;
        },
        set: function (a) {
            this.g = a;
            this.e("Item");
        },
        enumerable: true,
        configurable: true
    });
    ColumnFilterConditionGroupDescription.$t = markType(ColumnFilterConditionGroupDescription, 'ColumnFilterConditionGroupDescription', ColumnFilterConditionDescription.$);
    return ColumnFilterConditionGroupDescription;
}(ColumnFilterConditionDescription));
export { ColumnFilterConditionGroupDescription };
//# sourceMappingURL=ColumnFilterConditionGroupDescription.js.map