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
var ColumnComparisonFilterConditionDescription = /** @class */ (function (_super) {
    tslib_1.__extends(ColumnComparisonFilterConditionDescription, _super);
    function ColumnComparisonFilterConditionDescription() {
        var _this = _super.call(this) || this;
        _this.i = null;
        _this.j = null;
        _this.g = false;
        return _this;
    }
    ColumnComparisonFilterConditionDescription.prototype.get_type = function () {
        return "ColumnComparisonFilterCondition";
    };
    Object.defineProperty(ColumnComparisonFilterConditionDescription.prototype, "operator", {
        get: function () {
            return this.i;
        },
        set: function (a) {
            this.i = a;
            this.e("Operator");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColumnComparisonFilterConditionDescription.prototype, "valueRef", {
        get: function () {
            return this.j;
        },
        set: function (a) {
            this.j = a;
            this.e("ValueRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColumnComparisonFilterConditionDescription.prototype, "isCaseSensitive", {
        get: function () {
            return this.g;
        },
        set: function (a) {
            this.g = a;
            this.e("IsCaseSensitive");
        },
        enumerable: true,
        configurable: true
    });
    ColumnComparisonFilterConditionDescription.$t = markType(ColumnComparisonFilterConditionDescription, 'ColumnComparisonFilterConditionDescription', ColumnFilterConditionDescription.$);
    return ColumnComparisonFilterConditionDescription;
}(ColumnFilterConditionDescription));
export { ColumnComparisonFilterConditionDescription };
//# sourceMappingURL=ColumnComparisonFilterConditionDescription.js.map