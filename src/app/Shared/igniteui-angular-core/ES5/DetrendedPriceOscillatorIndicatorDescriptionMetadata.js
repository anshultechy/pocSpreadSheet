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
import { DetrendedPriceOscillatorIndicatorDescription } from "./DetrendedPriceOscillatorIndicatorDescription";
/**
 * @hidden
 */
var DetrendedPriceOscillatorIndicatorDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(DetrendedPriceOscillatorIndicatorDescriptionMetadata, _super);
    function DetrendedPriceOscillatorIndicatorDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DetrendedPriceOscillatorIndicatorDescriptionMetadata.b = function (a) {
        if (DetrendedPriceOscillatorIndicatorDescriptionMetadata.a == null) {
            DetrendedPriceOscillatorIndicatorDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            DetrendedPriceOscillatorIndicatorDescriptionMetadata.c(a, DetrendedPriceOscillatorIndicatorDescriptionMetadata.a);
        }
    };
    DetrendedPriceOscillatorIndicatorDescriptionMetadata.c = function (a, b) {
        StrategyBasedIndicatorDescriptionMetadata.c(a, b);
        b.item("Period", "Number:int");
    };
    DetrendedPriceOscillatorIndicatorDescriptionMetadata.d = function (a) {
        DetrendedPriceOscillatorIndicatorDescriptionMetadata.b(a);
        a.n("DetrendedPriceOscillatorIndicator", function () { return new DetrendedPriceOscillatorIndicatorDescription(); });
        a.m("DetrendedPriceOscillatorIndicator", DetrendedPriceOscillatorIndicatorDescriptionMetadata.a);
    };
    DetrendedPriceOscillatorIndicatorDescriptionMetadata.$t = markType(DetrendedPriceOscillatorIndicatorDescriptionMetadata, 'DetrendedPriceOscillatorIndicatorDescriptionMetadata');
    DetrendedPriceOscillatorIndicatorDescriptionMetadata.a = null;
    return DetrendedPriceOscillatorIndicatorDescriptionMetadata;
}(Base));
export { DetrendedPriceOscillatorIndicatorDescriptionMetadata };
//# sourceMappingURL=DetrendedPriceOscillatorIndicatorDescriptionMetadata.js.map