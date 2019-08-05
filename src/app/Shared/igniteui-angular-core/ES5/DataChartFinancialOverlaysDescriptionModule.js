/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "./type";
import { PriceChannelOverlayDescriptionMetadata } from "./PriceChannelOverlayDescriptionMetadata";
import { BollingerBandsOverlayDescriptionMetadata } from "./BollingerBandsOverlayDescriptionMetadata";
/**
 * @hidden
 */
var DataChartFinancialOverlaysDescriptionModule = /** @class */ (function (_super) {
    tslib_1.__extends(DataChartFinancialOverlaysDescriptionModule, _super);
    function DataChartFinancialOverlaysDescriptionModule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DataChartFinancialOverlaysDescriptionModule.register = function (a) {
        PriceChannelOverlayDescriptionMetadata.d(a);
        BollingerBandsOverlayDescriptionMetadata.d(a);
    };
    DataChartFinancialOverlaysDescriptionModule.$t = markType(DataChartFinancialOverlaysDescriptionModule, 'DataChartFinancialOverlaysDescriptionModule');
    return DataChartFinancialOverlaysDescriptionModule;
}(Base));
export { DataChartFinancialOverlaysDescriptionModule };
//# sourceMappingURL=DataChartFinancialOverlaysDescriptionModule.js.map