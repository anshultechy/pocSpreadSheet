/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, Nullable$1, markType } from "../../igniteui-angular-core/ES5/type";
import { Color } from "../../igniteui-angular-core/ES5/Color";
/**
 * @hidden
 */
var SpreadsheetGridLinePen = /** @class */ (function (_super) {
    tslib_1.__extends(SpreadsheetGridLinePen, _super);
    function SpreadsheetGridLinePen(a) {
        var _this = _super.call(this) || this;
        _this.a = Nullable$1.toNullable(Color.$, null);
        _this.a = a;
        return _this;
    }
    Object.defineProperty(SpreadsheetGridLinePen.prototype, "b", {
        get: function () {
            return this.a;
        },
        enumerable: true,
        configurable: true
    });
    SpreadsheetGridLinePen.$t = markType(SpreadsheetGridLinePen, 'SpreadsheetGridLinePen');
    return SpreadsheetGridLinePen;
}(Base));
export { SpreadsheetGridLinePen };
//# sourceMappingURL=SpreadsheetGridLinePen.js.map
