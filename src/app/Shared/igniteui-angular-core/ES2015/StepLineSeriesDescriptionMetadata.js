/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { HorizontalAnchoredCategorySeriesDescriptionMetadata } from "./HorizontalAnchoredCategorySeriesDescriptionMetadata";
import { StepLineSeriesDescription } from "./StepLineSeriesDescription";
/**
 * @hidden
 */
export class StepLineSeriesDescriptionMetadata extends Base {
    static b(a) {
        if (StepLineSeriesDescriptionMetadata.a == null) {
            StepLineSeriesDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            StepLineSeriesDescriptionMetadata.c(a, StepLineSeriesDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        HorizontalAnchoredCategorySeriesDescriptionMetadata.c(a, b);
    }
    static d(a) {
        StepLineSeriesDescriptionMetadata.b(a);
        a.n("StepLineSeries", () => new StepLineSeriesDescription());
        a.m("StepLineSeries", StepLineSeriesDescriptionMetadata.a);
    }
}
StepLineSeriesDescriptionMetadata.$t = markType(StepLineSeriesDescriptionMetadata, 'StepLineSeriesDescriptionMetadata');
StepLineSeriesDescriptionMetadata.a = null;
//# sourceMappingURL=StepLineSeriesDescriptionMetadata.js.map