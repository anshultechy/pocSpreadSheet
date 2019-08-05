/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { StrategyBasedIndicatorDescriptionMetadata } from "./StrategyBasedIndicatorDescriptionMetadata";
import { AbsoluteVolumeOscillatorIndicatorDescription } from "./AbsoluteVolumeOscillatorIndicatorDescription";
/**
 * @hidden
 */
export class AbsoluteVolumeOscillatorIndicatorDescriptionMetadata extends Base {
    static b(a) {
        if (AbsoluteVolumeOscillatorIndicatorDescriptionMetadata.a == null) {
            AbsoluteVolumeOscillatorIndicatorDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            AbsoluteVolumeOscillatorIndicatorDescriptionMetadata.c(a, AbsoluteVolumeOscillatorIndicatorDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        StrategyBasedIndicatorDescriptionMetadata.c(a, b);
        b.item("ShortPeriod", "Number:int");
        b.item("LongPeriod", "Number:int");
    }
    static d(a) {
        AbsoluteVolumeOscillatorIndicatorDescriptionMetadata.b(a);
        a.n("AbsoluteVolumeOscillatorIndicator", () => new AbsoluteVolumeOscillatorIndicatorDescription());
        a.m("AbsoluteVolumeOscillatorIndicator", AbsoluteVolumeOscillatorIndicatorDescriptionMetadata.a);
    }
}
AbsoluteVolumeOscillatorIndicatorDescriptionMetadata.$t = markType(AbsoluteVolumeOscillatorIndicatorDescriptionMetadata, 'AbsoluteVolumeOscillatorIndicatorDescriptionMetadata');
AbsoluteVolumeOscillatorIndicatorDescriptionMetadata.a = null;
//# sourceMappingURL=AbsoluteVolumeOscillatorIndicatorDescriptionMetadata.js.map