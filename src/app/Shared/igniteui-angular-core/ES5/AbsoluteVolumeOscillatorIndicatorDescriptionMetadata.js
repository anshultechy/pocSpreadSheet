/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { StrategyBasedIndicatorDescriptionMetadata } from "./StrategyBasedIndicatorDescriptionMetadata";
import { AbsoluteVolumeOscillatorIndicatorDescription } from "./AbsoluteVolumeOscillatorIndicatorDescription";
/**
 * @hidden
 */
var AbsoluteVolumeOscillatorIndicatorDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(AbsoluteVolumeOscillatorIndicatorDescriptionMetadata, _super);
    function AbsoluteVolumeOscillatorIndicatorDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AbsoluteVolumeOscillatorIndicatorDescriptionMetadata.b = function (a) {
        if (AbsoluteVolumeOscillatorIndicatorDescriptionMetadata.a == null) {
            AbsoluteVolumeOscillatorIndicatorDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            AbsoluteVolumeOscillatorIndicatorDescriptionMetadata.c(a, AbsoluteVolumeOscillatorIndicatorDescriptionMetadata.a);
        }
    };
    AbsoluteVolumeOscillatorIndicatorDescriptionMetadata.c = function (a, b) {
        StrategyBasedIndicatorDescriptionMetadata.c(a, b);
        b.item("ShortPeriod", "Number:int");
        b.item("LongPeriod", "Number:int");
    };
    AbsoluteVolumeOscillatorIndicatorDescriptionMetadata.d = function (a) {
        AbsoluteVolumeOscillatorIndicatorDescriptionMetadata.b(a);
        a.n("AbsoluteVolumeOscillatorIndicator", function () { return new AbsoluteVolumeOscillatorIndicatorDescription(); });
        a.m("AbsoluteVolumeOscillatorIndicator", AbsoluteVolumeOscillatorIndicatorDescriptionMetadata.a);
    };
    AbsoluteVolumeOscillatorIndicatorDescriptionMetadata.$t = markType(AbsoluteVolumeOscillatorIndicatorDescriptionMetadata, 'AbsoluteVolumeOscillatorIndicatorDescriptionMetadata');
    AbsoluteVolumeOscillatorIndicatorDescriptionMetadata.a = null;
    return AbsoluteVolumeOscillatorIndicatorDescriptionMetadata;
}(Base));
export { AbsoluteVolumeOscillatorIndicatorDescriptionMetadata };
//# sourceMappingURL=AbsoluteVolumeOscillatorIndicatorDescriptionMetadata.js.map