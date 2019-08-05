/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { TextMetricsProviderBase } from "../../igniteui-angular-excel/ES2015/excel.core";
import { Size } from "../../igniteui-angular-core/ES2015/Size";
import { Nullable$1, markType } from "../../igniteui-angular-core/ES2015/type";
/**
 * @hidden
 */
export class SpreadsheetRenderCache_MeasureTextMetricsProvider extends TextMetricsProviderBase {
    constructor(a, b) {
        super(b);
        this._h = null;
        this._h = a;
    }
    _d(a) {
        return this._h._d(a);
    }
    _g(a, b, c = Nullable$1.toNullable(Size.$, null), d = true, e = false) {
        return this._h._g(a, b, c, d, e);
    }
    _e(a) {
        return this._h._e(a);
    }
    get__b() {
        return this._h._b;
    }
    toString() {
        return this._h.toString();
    }
    dispose() {
        super.dispose();
    }
}
SpreadsheetRenderCache_MeasureTextMetricsProvider.$t = markType(SpreadsheetRenderCache_MeasureTextMetricsProvider, 'SpreadsheetRenderCache_MeasureTextMetricsProvider', TextMetricsProviderBase.$);
//# sourceMappingURL=SpreadsheetRenderCache_MeasureTextMetricsProvider.js.map
