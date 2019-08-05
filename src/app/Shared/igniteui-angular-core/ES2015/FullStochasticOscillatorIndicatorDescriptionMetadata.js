/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { StrategyBasedIndicatorDescriptionMetadata } from "./StrategyBasedIndicatorDescriptionMetadata";
import { FullStochasticOscillatorIndicatorDescription } from "./FullStochasticOscillatorIndicatorDescription";
/**
 * @hidden
 */
export class FullStochasticOscillatorIndicatorDescriptionMetadata extends Base {
    static b(a) {
        if (FullStochasticOscillatorIndicatorDescriptionMetadata.a == null) {
            FullStochasticOscillatorIndicatorDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            FullStochasticOscillatorIndicatorDescriptionMetadata.c(a, FullStochasticOscillatorIndicatorDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        StrategyBasedIndicatorDescriptionMetadata.c(a, b);
        b.item("Period", "Number:int");
        b.item("SmoothingPeriod", "Number:int");
        b.item("TriggerPeriod", "Number:int");
    }
    static d(a) {
        FullStochasticOscillatorIndicatorDescriptionMetadata.b(a);
        a.n("FullStochasticOscillatorIndicator", () => new FullStochasticOscillatorIndicatorDescription());
        a.m("FullStochasticOscillatorIndicator", FullStochasticOscillatorIndicatorDescriptionMetadata.a);
    }
}
FullStochasticOscillatorIndicatorDescriptionMetadata.$t = markType(FullStochasticOscillatorIndicatorDescriptionMetadata, 'FullStochasticOscillatorIndicatorDescriptionMetadata');
FullStochasticOscillatorIndicatorDescriptionMetadata.a = null;
//# sourceMappingURL=FullStochasticOscillatorIndicatorDescriptionMetadata.js.map