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
import { PercentagePriceOscillatorIndicatorDescription } from "./PercentagePriceOscillatorIndicatorDescription";
/**
 * @hidden
 */
var PercentagePriceOscillatorIndicatorDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(PercentagePriceOscillatorIndicatorDescriptionMetadata, _super);
    function PercentagePriceOscillatorIndicatorDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PercentagePriceOscillatorIndicatorDescriptionMetadata.b = function (a) {
        if (PercentagePriceOscillatorIndicatorDescriptionMetadata.a == null) {
            PercentagePriceOscillatorIndicatorDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            PercentagePriceOscillatorIndicatorDescriptionMetadata.c(a, PercentagePriceOscillatorIndicatorDescriptionMetadata.a);
        }
    };
    PercentagePriceOscillatorIndicatorDescriptionMetadata.c = function (a, b) {
        StrategyBasedIndicatorDescriptionMetadata.c(a, b);
        b.item("ShortPeriod", "Number:int");
        b.item("LongPeriod", "Number:int");
    };
    PercentagePriceOscillatorIndicatorDescriptionMetadata.d = function (a) {
        PercentagePriceOscillatorIndicatorDescriptionMetadata.b(a);
        a.n("PercentagePriceOscillatorIndicator", function () { return new PercentagePriceOscillatorIndicatorDescription(); });
        a.m("PercentagePriceOscillatorIndicator", PercentagePriceOscillatorIndicatorDescriptionMetadata.a);
    };
    PercentagePriceOscillatorIndicatorDescriptionMetadata.$t = markType(PercentagePriceOscillatorIndicatorDescriptionMetadata, 'PercentagePriceOscillatorIndicatorDescriptionMetadata');
    PercentagePriceOscillatorIndicatorDescriptionMetadata.a = null;
    return PercentagePriceOscillatorIndicatorDescriptionMetadata;
}(Base));
export { PercentagePriceOscillatorIndicatorDescriptionMetadata };
//# sourceMappingURL=PercentagePriceOscillatorIndicatorDescriptionMetadata.js.map