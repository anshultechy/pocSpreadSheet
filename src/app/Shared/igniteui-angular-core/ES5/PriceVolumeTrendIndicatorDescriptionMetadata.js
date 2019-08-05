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
import { PriceVolumeTrendIndicatorDescription } from "./PriceVolumeTrendIndicatorDescription";
/**
 * @hidden
 */
var PriceVolumeTrendIndicatorDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(PriceVolumeTrendIndicatorDescriptionMetadata, _super);
    function PriceVolumeTrendIndicatorDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PriceVolumeTrendIndicatorDescriptionMetadata.b = function (a) {
        if (PriceVolumeTrendIndicatorDescriptionMetadata.a == null) {
            PriceVolumeTrendIndicatorDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            PriceVolumeTrendIndicatorDescriptionMetadata.c(a, PriceVolumeTrendIndicatorDescriptionMetadata.a);
        }
    };
    PriceVolumeTrendIndicatorDescriptionMetadata.c = function (a, b) {
        StrategyBasedIndicatorDescriptionMetadata.c(a, b);
    };
    PriceVolumeTrendIndicatorDescriptionMetadata.d = function (a) {
        PriceVolumeTrendIndicatorDescriptionMetadata.b(a);
        a.n("PriceVolumeTrendIndicator", function () { return new PriceVolumeTrendIndicatorDescription(); });
        a.m("PriceVolumeTrendIndicator", PriceVolumeTrendIndicatorDescriptionMetadata.a);
    };
    PriceVolumeTrendIndicatorDescriptionMetadata.$t = markType(PriceVolumeTrendIndicatorDescriptionMetadata, 'PriceVolumeTrendIndicatorDescriptionMetadata');
    PriceVolumeTrendIndicatorDescriptionMetadata.a = null;
    return PriceVolumeTrendIndicatorDescriptionMetadata;
}(Base));
export { PriceVolumeTrendIndicatorDescriptionMetadata };
//# sourceMappingURL=PriceVolumeTrendIndicatorDescriptionMetadata.js.map