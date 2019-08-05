/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { StrategyBasedIndicatorDescriptionMetadata } from "./StrategyBasedIndicatorDescriptionMetadata";
import { SlowStochasticOscillatorIndicatorDescription } from "./SlowStochasticOscillatorIndicatorDescription";
/**
 * @hidden
 */
export class SlowStochasticOscillatorIndicatorDescriptionMetadata extends Base {
    static b(a) {
        if (SlowStochasticOscillatorIndicatorDescriptionMetadata.a == null) {
            SlowStochasticOscillatorIndicatorDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            SlowStochasticOscillatorIndicatorDescriptionMetadata.c(a, SlowStochasticOscillatorIndicatorDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        StrategyBasedIndicatorDescriptionMetadata.c(a, b);
        b.item("Period", "Number:int");
    }
    static d(a) {
        SlowStochasticOscillatorIndicatorDescriptionMetadata.b(a);
        a.n("SlowStochasticOscillatorIndicator", () => new SlowStochasticOscillatorIndicatorDescription());
        a.m("SlowStochasticOscillatorIndicator", SlowStochasticOscillatorIndicatorDescriptionMetadata.a);
    }
}
SlowStochasticOscillatorIndicatorDescriptionMetadata.$t = markType(SlowStochasticOscillatorIndicatorDescriptionMetadata, 'SlowStochasticOscillatorIndicatorDescriptionMetadata');
SlowStochasticOscillatorIndicatorDescriptionMetadata.a = null;
//# sourceMappingURL=SlowStochasticOscillatorIndicatorDescriptionMetadata.js.map