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
import { NegativeVolumeIndexIndicatorDescription } from "./NegativeVolumeIndexIndicatorDescription";
/**
 * @hidden
 */
var NegativeVolumeIndexIndicatorDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(NegativeVolumeIndexIndicatorDescriptionMetadata, _super);
    function NegativeVolumeIndexIndicatorDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NegativeVolumeIndexIndicatorDescriptionMetadata.b = function (a) {
        if (NegativeVolumeIndexIndicatorDescriptionMetadata.a == null) {
            NegativeVolumeIndexIndicatorDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            NegativeVolumeIndexIndicatorDescriptionMetadata.c(a, NegativeVolumeIndexIndicatorDescriptionMetadata.a);
        }
    };
    NegativeVolumeIndexIndicatorDescriptionMetadata.c = function (a, b) {
        StrategyBasedIndicatorDescriptionMetadata.c(a, b);
    };
    NegativeVolumeIndexIndicatorDescriptionMetadata.d = function (a) {
        NegativeVolumeIndexIndicatorDescriptionMetadata.b(a);
        a.n("NegativeVolumeIndexIndicator", function () { return new NegativeVolumeIndexIndicatorDescription(); });
        a.m("NegativeVolumeIndexIndicator", NegativeVolumeIndexIndicatorDescriptionMetadata.a);
    };
    NegativeVolumeIndexIndicatorDescriptionMetadata.$t = markType(NegativeVolumeIndexIndicatorDescriptionMetadata, 'NegativeVolumeIndexIndicatorDescriptionMetadata');
    NegativeVolumeIndexIndicatorDescriptionMetadata.a = null;
    return NegativeVolumeIndexIndicatorDescriptionMetadata;
}(Base));
export { NegativeVolumeIndexIndicatorDescriptionMetadata };
//# sourceMappingURL=NegativeVolumeIndexIndicatorDescriptionMetadata.js.map