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
import { FullStochasticOscillatorIndicatorDescription } from "./FullStochasticOscillatorIndicatorDescription";
/**
 * @hidden
 */
var FullStochasticOscillatorIndicatorDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(FullStochasticOscillatorIndicatorDescriptionMetadata, _super);
    function FullStochasticOscillatorIndicatorDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FullStochasticOscillatorIndicatorDescriptionMetadata.b = function (a) {
        if (FullStochasticOscillatorIndicatorDescriptionMetadata.a == null) {
            FullStochasticOscillatorIndicatorDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            FullStochasticOscillatorIndicatorDescriptionMetadata.c(a, FullStochasticOscillatorIndicatorDescriptionMetadata.a);
        }
    };
    FullStochasticOscillatorIndicatorDescriptionMetadata.c = function (a, b) {
        StrategyBasedIndicatorDescriptionMetadata.c(a, b);
        b.item("Period", "Number:int");
        b.item("SmoothingPeriod", "Number:int");
        b.item("TriggerPeriod", "Number:int");
    };
    FullStochasticOscillatorIndicatorDescriptionMetadata.d = function (a) {
        FullStochasticOscillatorIndicatorDescriptionMetadata.b(a);
        a.n("FullStochasticOscillatorIndicator", function () { return new FullStochasticOscillatorIndicatorDescription(); });
        a.m("FullStochasticOscillatorIndicator", FullStochasticOscillatorIndicatorDescriptionMetadata.a);
    };
    FullStochasticOscillatorIndicatorDescriptionMetadata.$t = markType(FullStochasticOscillatorIndicatorDescriptionMetadata, 'FullStochasticOscillatorIndicatorDescriptionMetadata');
    FullStochasticOscillatorIndicatorDescriptionMetadata.a = null;
    return FullStochasticOscillatorIndicatorDescriptionMetadata;
}(Base));
export { FullStochasticOscillatorIndicatorDescriptionMetadata };
//# sourceMappingURL=FullStochasticOscillatorIndicatorDescriptionMetadata.js.map