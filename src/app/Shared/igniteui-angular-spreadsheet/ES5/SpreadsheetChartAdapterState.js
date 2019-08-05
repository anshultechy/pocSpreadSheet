/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "../../igniteui-angular-core/ES5/type";
/**
 * @hidden
 */
var SpreadsheetChartAdapterState = /** @class */ (function (_super) {
    tslib_1.__extends(SpreadsheetChartAdapterState, _super);
    function SpreadsheetChartAdapterState(a, b, c, d, e) {
        var _this = _super.call(this) || this;
        _this.d = 0;
        _this.f = null;
        _this.g = null;
        _this.a = null;
        _this.c = null;
        _this.b = null;
        _this.c = a;
        _this.f = b;
        _this.g = c;
        _this.a = d;
        _this.b = e;
        return _this;
    }
    SpreadsheetChartAdapterState.prototype.e = function () {
        this.d++;
        return this.d;
    };
    SpreadsheetChartAdapterState.$t = markType(SpreadsheetChartAdapterState, 'SpreadsheetChartAdapterState');
    return SpreadsheetChartAdapterState;
}(Base));
export { SpreadsheetChartAdapterState };
//# sourceMappingURL=SpreadsheetChartAdapterState.js.map
