/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { ScalerParamsDescription } from "./ScalerParamsDescription";
/**
 * @hidden
 */
export class ScalerParamsDescriptionMetadata extends Base {
    static b(a) {
        if (ScalerParamsDescriptionMetadata.a == null) {
            ScalerParamsDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            ScalerParamsDescriptionMetadata.c(a, ScalerParamsDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        b.item("ReferenceValue", "Number:double");
    }
    static d(a) {
        ScalerParamsDescriptionMetadata.b(a);
        a.n("ScalerParams", () => new ScalerParamsDescription());
        a.m("ScalerParams", ScalerParamsDescriptionMetadata.a);
    }
}
ScalerParamsDescriptionMetadata.$t = markType(ScalerParamsDescriptionMetadata, 'ScalerParamsDescriptionMetadata');
ScalerParamsDescriptionMetadata.a = null;
//# sourceMappingURL=ScalerParamsDescriptionMetadata.js.map