/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { StrategyBasedIndicatorDescriptionMetadata } from "./StrategyBasedIndicatorDescriptionMetadata";
import { EaseOfMovementIndicatorDescription } from "./EaseOfMovementIndicatorDescription";
/**
 * @hidden
 */
export class EaseOfMovementIndicatorDescriptionMetadata extends Base {
    static b(a) {
        if (EaseOfMovementIndicatorDescriptionMetadata.a == null) {
            EaseOfMovementIndicatorDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            EaseOfMovementIndicatorDescriptionMetadata.c(a, EaseOfMovementIndicatorDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        StrategyBasedIndicatorDescriptionMetadata.c(a, b);
    }
    static d(a) {
        EaseOfMovementIndicatorDescriptionMetadata.b(a);
        a.n("EaseOfMovementIndicator", () => new EaseOfMovementIndicatorDescription());
        a.m("EaseOfMovementIndicator", EaseOfMovementIndicatorDescriptionMetadata.a);
    }
}
EaseOfMovementIndicatorDescriptionMetadata.$t = markType(EaseOfMovementIndicatorDescriptionMetadata, 'EaseOfMovementIndicatorDescriptionMetadata');
EaseOfMovementIndicatorDescriptionMetadata.a = null;
//# sourceMappingURL=EaseOfMovementIndicatorDescriptionMetadata.js.map