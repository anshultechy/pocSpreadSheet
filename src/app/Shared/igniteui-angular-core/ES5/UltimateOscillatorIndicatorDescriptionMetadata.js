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
import { UltimateOscillatorIndicatorDescription } from "./UltimateOscillatorIndicatorDescription";
/**
 * @hidden
 */
var UltimateOscillatorIndicatorDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(UltimateOscillatorIndicatorDescriptionMetadata, _super);
    function UltimateOscillatorIndicatorDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UltimateOscillatorIndicatorDescriptionMetadata.b = function (a) {
        if (UltimateOscillatorIndicatorDescriptionMetadata.a == null) {
            UltimateOscillatorIndicatorDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            UltimateOscillatorIndicatorDescriptionMetadata.c(a, UltimateOscillatorIndicatorDescriptionMetadata.a);
        }
    };
    UltimateOscillatorIndicatorDescriptionMetadata.c = function (a, b) {
        StrategyBasedIndicatorDescriptionMetadata.c(a, b);
    };
    UltimateOscillatorIndicatorDescriptionMetadata.d = function (a) {
        UltimateOscillatorIndicatorDescriptionMetadata.b(a);
        a.n("UltimateOscillatorIndicator", function () { return new UltimateOscillatorIndicatorDescription(); });
        a.m("UltimateOscillatorIndicator", UltimateOscillatorIndicatorDescriptionMetadata.a);
    };
    UltimateOscillatorIndicatorDescriptionMetadata.$t = markType(UltimateOscillatorIndicatorDescriptionMetadata, 'UltimateOscillatorIndicatorDescriptionMetadata');
    UltimateOscillatorIndicatorDescriptionMetadata.a = null;
    return UltimateOscillatorIndicatorDescriptionMetadata;
}(Base));
export { UltimateOscillatorIndicatorDescriptionMetadata };
//# sourceMappingURL=UltimateOscillatorIndicatorDescriptionMetadata.js.map