/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "./type";
import { LegendDescriptionMetadata } from "./LegendDescriptionMetadata";
import { ItemLegendDescriptionMetadata } from "./ItemLegendDescriptionMetadata";
/**
 * @hidden
 */
var LegendDescriptionModule = /** @class */ (function (_super) {
    tslib_1.__extends(LegendDescriptionModule, _super);
    function LegendDescriptionModule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LegendDescriptionModule.register = function (a) {
        LegendDescriptionMetadata.d(a);
        ItemLegendDescriptionMetadata.d(a);
    };
    LegendDescriptionModule.$t = markType(LegendDescriptionModule, 'LegendDescriptionModule');
    return LegendDescriptionModule;
}(Base));
export { LegendDescriptionModule };
//# sourceMappingURL=LegendDescriptionModule.js.map