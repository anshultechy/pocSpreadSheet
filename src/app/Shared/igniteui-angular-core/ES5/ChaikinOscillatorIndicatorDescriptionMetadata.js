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
import { ChaikinOscillatorIndicatorDescription } from "./ChaikinOscillatorIndicatorDescription";
/**
 * @hidden
 */
var ChaikinOscillatorIndicatorDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(ChaikinOscillatorIndicatorDescriptionMetadata, _super);
    function ChaikinOscillatorIndicatorDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChaikinOscillatorIndicatorDescriptionMetadata.b = function (a) {
        if (ChaikinOscillatorIndicatorDescriptionMetadata.a == null) {
            ChaikinOscillatorIndicatorDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            ChaikinOscillatorIndicatorDescriptionMetadata.c(a, ChaikinOscillatorIndicatorDescriptionMetadata.a);
        }
    };
    ChaikinOscillatorIndicatorDescriptionMetadata.c = function (a, b) {
        StrategyBasedIndicatorDescriptionMetadata.c(a, b);
        b.item("ShortPeriod", "Number:int");
        b.item("LongPeriod", "Number:int");
    };
    ChaikinOscillatorIndicatorDescriptionMetadata.d = function (a) {
        ChaikinOscillatorIndicatorDescriptionMetadata.b(a);
        a.n("ChaikinOscillatorIndicator", function () { return new ChaikinOscillatorIndicatorDescription(); });
        a.m("ChaikinOscillatorIndicator", ChaikinOscillatorIndicatorDescriptionMetadata.a);
    };
    ChaikinOscillatorIndicatorDescriptionMetadata.$t = markType(ChaikinOscillatorIndicatorDescriptionMetadata, 'ChaikinOscillatorIndicatorDescriptionMetadata');
    ChaikinOscillatorIndicatorDescriptionMetadata.a = null;
    return ChaikinOscillatorIndicatorDescriptionMetadata;
}(Base));
export { ChaikinOscillatorIndicatorDescriptionMetadata };
//# sourceMappingURL=ChaikinOscillatorIndicatorDescriptionMetadata.js.map