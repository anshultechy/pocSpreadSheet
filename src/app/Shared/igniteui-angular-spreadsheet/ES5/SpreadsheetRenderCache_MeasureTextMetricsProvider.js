/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { TextMetricsProviderBase } from "../../igniteui-angular-excel/ES5/excel.core";
import { Size } from "../../igniteui-angular-core/ES5/Size";
import { Nullable$1, markType } from "../../igniteui-angular-core/ES5/type";
/**
 * @hidden
 */
var SpreadsheetRenderCache_MeasureTextMetricsProvider = /** @class */ (function (_super) {
    tslib_1.__extends(SpreadsheetRenderCache_MeasureTextMetricsProvider, _super);
    function SpreadsheetRenderCache_MeasureTextMetricsProvider(a, b) {
        var _this = _super.call(this, b) || this;
        _this._h = null;
        _this._h = a;
        return _this;
    }
    SpreadsheetRenderCache_MeasureTextMetricsProvider.prototype._d = function (a) {
        return this._h._d(a);
    };
    SpreadsheetRenderCache_MeasureTextMetricsProvider.prototype._g = function (a, b, c, d, e) {
        if (c === void 0) { c = Nullable$1.toNullable(Size.$, null); }
        if (d === void 0) { d = true; }
        if (e === void 0) { e = false; }
        return this._h._g(a, b, c, d, e);
    };
    SpreadsheetRenderCache_MeasureTextMetricsProvider.prototype._e = function (a) {
        return this._h._e(a);
    };
    SpreadsheetRenderCache_MeasureTextMetricsProvider.prototype.get__b = function () {
        return this._h._b;
    };
    SpreadsheetRenderCache_MeasureTextMetricsProvider.prototype.toString = function () {
        return this._h.toString();
    };
    SpreadsheetRenderCache_MeasureTextMetricsProvider.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
    };
    SpreadsheetRenderCache_MeasureTextMetricsProvider.$t = markType(SpreadsheetRenderCache_MeasureTextMetricsProvider, 'SpreadsheetRenderCache_MeasureTextMetricsProvider', TextMetricsProviderBase.$);
    return SpreadsheetRenderCache_MeasureTextMetricsProvider;
}(TextMetricsProviderBase));
export { SpreadsheetRenderCache_MeasureTextMetricsProvider };
//# sourceMappingURL=SpreadsheetRenderCache_MeasureTextMetricsProvider.js.map
