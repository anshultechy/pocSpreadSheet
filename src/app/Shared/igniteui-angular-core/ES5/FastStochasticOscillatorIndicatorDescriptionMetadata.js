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
import { FastStochasticOscillatorIndicatorDescription } from "./FastStochasticOscillatorIndicatorDescription";
/**
 * @hidden
 */
var FastStochasticOscillatorIndicatorDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(FastStochasticOscillatorIndicatorDescriptionMetadata, _super);
    function FastStochasticOscillatorIndicatorDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FastStochasticOscillatorIndicatorDescriptionMetadata.b = function (a) {
        if (FastStochasticOscillatorIndicatorDescriptionMetadata.a == null) {
            FastStochasticOscillatorIndicatorDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            FastStochasticOscillatorIndicatorDescriptionMetadata.c(a, FastStochasticOscillatorIndicatorDescriptionMetadata.a);
        }
    };
    FastStochasticOscillatorIndicatorDescriptionMetadata.c = function (a, b) {
        StrategyBasedIndicatorDescriptionMetadata.c(a, b);
        b.item("Period", "Number:int");
    };
    FastStochasticOscillatorIndicatorDescriptionMetadata.d = function (a) {
        FastStochasticOscillatorIndicatorDescriptionMetadata.b(a);
        a.n("FastStochasticOscillatorIndicator", function () { return new FastStochasticOscillatorIndicatorDescription(); });
        a.m("FastStochasticOscillatorIndicator", FastStochasticOscillatorIndicatorDescriptionMetadata.a);
    };
    FastStochasticOscillatorIndicatorDescriptionMetadata.$t = markType(FastStochasticOscillatorIndicatorDescriptionMetadata, 'FastStochasticOscillatorIndicatorDescriptionMetadata');
    FastStochasticOscillatorIndicatorDescriptionMetadata.a = null;
    return FastStochasticOscillatorIndicatorDescriptionMetadata;
}(Base));
export { FastStochasticOscillatorIndicatorDescriptionMetadata };
//# sourceMappingURL=FastStochasticOscillatorIndicatorDescriptionMetadata.js.map