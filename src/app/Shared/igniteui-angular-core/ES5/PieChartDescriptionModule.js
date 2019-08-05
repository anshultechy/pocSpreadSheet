/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "./type";
import { PieChartDescriptionMetadata } from "./PieChartDescriptionMetadata";
/**
 * @hidden
 */
var PieChartDescriptionModule = /** @class */ (function (_super) {
    tslib_1.__extends(PieChartDescriptionModule, _super);
    function PieChartDescriptionModule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PieChartDescriptionModule.register = function (a) {
        PieChartDescriptionMetadata.d(a);
    };
    PieChartDescriptionModule.$t = markType(PieChartDescriptionModule, 'PieChartDescriptionModule');
    return PieChartDescriptionModule;
}(Base));
export { PieChartDescriptionModule };
//# sourceMappingURL=PieChartDescriptionModule.js.map