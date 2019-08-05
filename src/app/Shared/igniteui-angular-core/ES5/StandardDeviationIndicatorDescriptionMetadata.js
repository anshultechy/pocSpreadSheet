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
import { StandardDeviationIndicatorDescription } from "./StandardDeviationIndicatorDescription";
/**
 * @hidden
 */
var StandardDeviationIndicatorDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(StandardDeviationIndicatorDescriptionMetadata, _super);
    function StandardDeviationIndicatorDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StandardDeviationIndicatorDescriptionMetadata.b = function (a) {
        if (StandardDeviationIndicatorDescriptionMetadata.a == null) {
            StandardDeviationIndicatorDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            StandardDeviationIndicatorDescriptionMetadata.c(a, StandardDeviationIndicatorDescriptionMetadata.a);
        }
    };
    StandardDeviationIndicatorDescriptionMetadata.c = function (a, b) {
        StrategyBasedIndicatorDescriptionMetadata.c(a, b);
        b.item("Period", "Number:int");
    };
    StandardDeviationIndicatorDescriptionMetadata.d = function (a) {
        StandardDeviationIndicatorDescriptionMetadata.b(a);
        a.n("StandardDeviationIndicator", function () { return new StandardDeviationIndicatorDescription(); });
        a.m("StandardDeviationIndicator", StandardDeviationIndicatorDescriptionMetadata.a);
    };
    StandardDeviationIndicatorDescriptionMetadata.$t = markType(StandardDeviationIndicatorDescriptionMetadata, 'StandardDeviationIndicatorDescriptionMetadata');
    StandardDeviationIndicatorDescriptionMetadata.a = null;
    return StandardDeviationIndicatorDescriptionMetadata;
}(Base));
export { StandardDeviationIndicatorDescriptionMetadata };
//# sourceMappingURL=StandardDeviationIndicatorDescriptionMetadata.js.map