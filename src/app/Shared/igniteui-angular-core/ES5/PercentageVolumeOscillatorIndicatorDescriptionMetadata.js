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
import { PercentageVolumeOscillatorIndicatorDescription } from "./PercentageVolumeOscillatorIndicatorDescription";
/**
 * @hidden
 */
var PercentageVolumeOscillatorIndicatorDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(PercentageVolumeOscillatorIndicatorDescriptionMetadata, _super);
    function PercentageVolumeOscillatorIndicatorDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PercentageVolumeOscillatorIndicatorDescriptionMetadata.b = function (a) {
        if (PercentageVolumeOscillatorIndicatorDescriptionMetadata.a == null) {
            PercentageVolumeOscillatorIndicatorDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            PercentageVolumeOscillatorIndicatorDescriptionMetadata.c(a, PercentageVolumeOscillatorIndicatorDescriptionMetadata.a);
        }
    };
    PercentageVolumeOscillatorIndicatorDescriptionMetadata.c = function (a, b) {
        StrategyBasedIndicatorDescriptionMetadata.c(a, b);
        b.item("ShortPeriod", "Number:int");
        b.item("LongPeriod", "Number:int");
    };
    PercentageVolumeOscillatorIndicatorDescriptionMetadata.d = function (a) {
        PercentageVolumeOscillatorIndicatorDescriptionMetadata.b(a);
        a.n("PercentageVolumeOscillatorIndicator", function () { return new PercentageVolumeOscillatorIndicatorDescription(); });
        a.m("PercentageVolumeOscillatorIndicator", PercentageVolumeOscillatorIndicatorDescriptionMetadata.a);
    };
    PercentageVolumeOscillatorIndicatorDescriptionMetadata.$t = markType(PercentageVolumeOscillatorIndicatorDescriptionMetadata, 'PercentageVolumeOscillatorIndicatorDescriptionMetadata');
    PercentageVolumeOscillatorIndicatorDescriptionMetadata.a = null;
    return PercentageVolumeOscillatorIndicatorDescriptionMetadata;
}(Base));
export { PercentageVolumeOscillatorIndicatorDescriptionMetadata };
//# sourceMappingURL=PercentageVolumeOscillatorIndicatorDescriptionMetadata.js.map