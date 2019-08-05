/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "./type";
import { DataChartDescriptionMetadata } from "./DataChartDescriptionMetadata";
/**
 * @hidden
 */
var DataChartDescriptionCoreModule = /** @class */ (function (_super) {
    tslib_1.__extends(DataChartDescriptionCoreModule, _super);
    function DataChartDescriptionCoreModule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DataChartDescriptionCoreModule.register = function (a) {
        DataChartDescriptionMetadata.d(a);
    };
    DataChartDescriptionCoreModule.$t = markType(DataChartDescriptionCoreModule, 'DataChartDescriptionCoreModule');
    return DataChartDescriptionCoreModule;
}(Base));
export { DataChartDescriptionCoreModule };
//# sourceMappingURL=DataChartDescriptionCoreModule.js.map