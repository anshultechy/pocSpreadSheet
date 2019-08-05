/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "./type";
import { DoughnutChartDescriptionMetadata } from "./DoughnutChartDescriptionMetadata";
import { RingSeriesDescriptionMetadata } from "./RingSeriesDescriptionMetadata";
/**
 * @hidden
 */
var DoughnutChartDescriptionModule = /** @class */ (function (_super) {
    tslib_1.__extends(DoughnutChartDescriptionModule, _super);
    function DoughnutChartDescriptionModule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DoughnutChartDescriptionModule.register = function (a) {
        DoughnutChartDescriptionMetadata.d(a);
        RingSeriesDescriptionMetadata.d(a);
    };
    DoughnutChartDescriptionModule.$t = markType(DoughnutChartDescriptionModule, 'DoughnutChartDescriptionModule');
    return DoughnutChartDescriptionModule;
}(Base));
export { DoughnutChartDescriptionModule };
//# sourceMappingURL=DoughnutChartDescriptionModule.js.map