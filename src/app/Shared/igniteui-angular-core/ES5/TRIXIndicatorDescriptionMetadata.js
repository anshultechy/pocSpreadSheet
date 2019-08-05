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
import { TRIXIndicatorDescription } from "./TRIXIndicatorDescription";
/**
 * @hidden
 */
var TRIXIndicatorDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(TRIXIndicatorDescriptionMetadata, _super);
    function TRIXIndicatorDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TRIXIndicatorDescriptionMetadata.b = function (a) {
        if (TRIXIndicatorDescriptionMetadata.a == null) {
            TRIXIndicatorDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            TRIXIndicatorDescriptionMetadata.c(a, TRIXIndicatorDescriptionMetadata.a);
        }
    };
    TRIXIndicatorDescriptionMetadata.c = function (a, b) {
        StrategyBasedIndicatorDescriptionMetadata.c(a, b);
        b.item("Period", "Number:int");
    };
    TRIXIndicatorDescriptionMetadata.d = function (a) {
        TRIXIndicatorDescriptionMetadata.b(a);
        a.n("TRIXIndicator", function () { return new TRIXIndicatorDescription(); });
        a.m("TRIXIndicator", TRIXIndicatorDescriptionMetadata.a);
    };
    TRIXIndicatorDescriptionMetadata.$t = markType(TRIXIndicatorDescriptionMetadata, 'TRIXIndicatorDescriptionMetadata');
    TRIXIndicatorDescriptionMetadata.a = null;
    return TRIXIndicatorDescriptionMetadata;
}(Base));
export { TRIXIndicatorDescriptionMetadata };
//# sourceMappingURL=TRIXIndicatorDescriptionMetadata.js.map