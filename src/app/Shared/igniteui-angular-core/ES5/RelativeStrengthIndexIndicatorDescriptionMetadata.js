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
import { RelativeStrengthIndexIndicatorDescription } from "./RelativeStrengthIndexIndicatorDescription";
/**
 * @hidden
 */
var RelativeStrengthIndexIndicatorDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(RelativeStrengthIndexIndicatorDescriptionMetadata, _super);
    function RelativeStrengthIndexIndicatorDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RelativeStrengthIndexIndicatorDescriptionMetadata.b = function (a) {
        if (RelativeStrengthIndexIndicatorDescriptionMetadata.a == null) {
            RelativeStrengthIndexIndicatorDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            RelativeStrengthIndexIndicatorDescriptionMetadata.c(a, RelativeStrengthIndexIndicatorDescriptionMetadata.a);
        }
    };
    RelativeStrengthIndexIndicatorDescriptionMetadata.c = function (a, b) {
        StrategyBasedIndicatorDescriptionMetadata.c(a, b);
        b.item("Period", "Number:int");
    };
    RelativeStrengthIndexIndicatorDescriptionMetadata.d = function (a) {
        RelativeStrengthIndexIndicatorDescriptionMetadata.b(a);
        a.n("RelativeStrengthIndexIndicator", function () { return new RelativeStrengthIndexIndicatorDescription(); });
        a.m("RelativeStrengthIndexIndicator", RelativeStrengthIndexIndicatorDescriptionMetadata.a);
    };
    RelativeStrengthIndexIndicatorDescriptionMetadata.$t = markType(RelativeStrengthIndexIndicatorDescriptionMetadata, 'RelativeStrengthIndexIndicatorDescriptionMetadata');
    RelativeStrengthIndexIndicatorDescriptionMetadata.a = null;
    return RelativeStrengthIndexIndicatorDescriptionMetadata;
}(Base));
export { RelativeStrengthIndexIndicatorDescriptionMetadata };
//# sourceMappingURL=RelativeStrengthIndexIndicatorDescriptionMetadata.js.map