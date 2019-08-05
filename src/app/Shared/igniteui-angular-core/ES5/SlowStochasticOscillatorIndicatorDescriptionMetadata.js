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
import { SlowStochasticOscillatorIndicatorDescription } from "./SlowStochasticOscillatorIndicatorDescription";
/**
 * @hidden
 */
var SlowStochasticOscillatorIndicatorDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(SlowStochasticOscillatorIndicatorDescriptionMetadata, _super);
    function SlowStochasticOscillatorIndicatorDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SlowStochasticOscillatorIndicatorDescriptionMetadata.b = function (a) {
        if (SlowStochasticOscillatorIndicatorDescriptionMetadata.a == null) {
            SlowStochasticOscillatorIndicatorDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            SlowStochasticOscillatorIndicatorDescriptionMetadata.c(a, SlowStochasticOscillatorIndicatorDescriptionMetadata.a);
        }
    };
    SlowStochasticOscillatorIndicatorDescriptionMetadata.c = function (a, b) {
        StrategyBasedIndicatorDescriptionMetadata.c(a, b);
        b.item("Period", "Number:int");
    };
    SlowStochasticOscillatorIndicatorDescriptionMetadata.d = function (a) {
        SlowStochasticOscillatorIndicatorDescriptionMetadata.b(a);
        a.n("SlowStochasticOscillatorIndicator", function () { return new SlowStochasticOscillatorIndicatorDescription(); });
        a.m("SlowStochasticOscillatorIndicator", SlowStochasticOscillatorIndicatorDescriptionMetadata.a);
    };
    SlowStochasticOscillatorIndicatorDescriptionMetadata.$t = markType(SlowStochasticOscillatorIndicatorDescriptionMetadata, 'SlowStochasticOscillatorIndicatorDescriptionMetadata');
    SlowStochasticOscillatorIndicatorDescriptionMetadata.a = null;
    return SlowStochasticOscillatorIndicatorDescriptionMetadata;
}(Base));
export { SlowStochasticOscillatorIndicatorDescriptionMetadata };
//# sourceMappingURL=SlowStochasticOscillatorIndicatorDescriptionMetadata.js.map