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
var GridFilterExpressionsEventArgsDescription = /** @class */ (function (_super) {
    tslib_1.__extends(GridFilterExpressionsEventArgsDescription, _super);
    function GridFilterExpressionsEventArgsDescription() {
        var _this = _super.call(this) || this;
        _this.f = null;
        return _this;
    }
    GridFilterExpressionsEventArgsDescription.prototype.get_type = function () {
        return "GridFilterExpressionsEventArgs";
    };
    Object.defineProperty(GridFilterExpressionsEventArgsDescription.prototype, "type", {
        get: function () {
            return this.get_type();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridFilterExpressionsEventArgsDescription.prototype, "filterExpressions", {
        get: function () {
            return this.f;
        },
        set: function (a) {
            this.f = a;
            this.e("FilterExpressions");
        },
        enumerable: true,
        configurable: true
    });
    GridFilterExpressionsEventArgsDescription.$t = markType(GridFilterExpressionsEventArgsDescription, 'GridFilterExpressionsEventArgsDescription', Description.$);
    return GridFilterExpressionsEventArgsDescription;
}(Description));
export { GridFilterExpressionsEventArgsDescription };
//# sourceMappingURL=GridFilterExpressionsEventArgsDescription.js.map