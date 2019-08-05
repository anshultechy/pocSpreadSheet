/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, markType } from "./type";
import { LegendDescriptionMetadata } from "./LegendDescriptionMetadata";
import { ItemLegendDescriptionMetadata } from "./ItemLegendDescriptionMetadata";
/**
 * @hidden
 */
export class LegendDescriptionModule extends Base {
    static register(a) {
        LegendDescriptionMetadata.d(a);
        ItemLegendDescriptionMetadata.d(a);
    }
}
LegendDescriptionModule.$t = markType(LegendDescriptionModule, 'LegendDescriptionModule');
//# sourceMappingURL=LegendDescriptionModule.js.map