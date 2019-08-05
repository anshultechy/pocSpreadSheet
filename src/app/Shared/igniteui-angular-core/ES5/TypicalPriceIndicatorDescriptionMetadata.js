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
import { TypicalPriceIndicatorDescription } from "./TypicalPriceIndicatorDescription";
/**
 * @hidden
 */
var TypicalPriceIndicatorDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(TypicalPriceIndicatorDescriptionMetadata, _super);
    function TypicalPriceIndicatorDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TypicalPriceIndicatorDescriptionMetadata.b = function (a) {
        if (TypicalPriceIndicatorDescriptionMetadata.a == null) {
            TypicalPriceIndicatorDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            TypicalPriceIndicatorDescriptionMetadata.c(a, TypicalPriceIndicatorDescriptionMetadata.a);
        }
    };
    TypicalPriceIndicatorDescriptionMetadata.c = function (a, b) {
        StrategyBasedIndicatorDescriptionMetadata.c(a, b);
    };
    TypicalPriceIndicatorDescriptionMetadata.d = function (a) {
        TypicalPriceIndicatorDescriptionMetadata.b(a);
        a.n("TypicalPriceIndicator", function () { return new TypicalPriceIndicatorDescription(); });
        a.m("TypicalPriceIndicator", TypicalPriceIndicatorDescriptionMetadata.a);
    };
    TypicalPriceIndicatorDescriptionMetadata.$t = markType(TypicalPriceIndicatorDescriptionMetadata, 'TypicalPriceIndicatorDescriptionMetadata');
    TypicalPriceIndicatorDescriptionMetadata.a = null;
    return TypicalPriceIndicatorDescriptionMetadata;
}(Base));
export { TypicalPriceIndicatorDescriptionMetadata };
//# sourceMappingURL=TypicalPriceIndicatorDescriptionMetadata.js.map