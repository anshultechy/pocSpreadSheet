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
import { PositiveVolumeIndexIndicatorDescription } from "./PositiveVolumeIndexIndicatorDescription";
/**
 * @hidden
 */
var PositiveVolumeIndexIndicatorDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(PositiveVolumeIndexIndicatorDescriptionMetadata, _super);
    function PositiveVolumeIndexIndicatorDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PositiveVolumeIndexIndicatorDescriptionMetadata.b = function (a) {
        if (PositiveVolumeIndexIndicatorDescriptionMetadata.a == null) {
            PositiveVolumeIndexIndicatorDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            PositiveVolumeIndexIndicatorDescriptionMetadata.c(a, PositiveVolumeIndexIndicatorDescriptionMetadata.a);
        }
    };
    PositiveVolumeIndexIndicatorDescriptionMetadata.c = function (a, b) {
        StrategyBasedIndicatorDescriptionMetadata.c(a, b);
    };
    PositiveVolumeIndexIndicatorDescriptionMetadata.d = function (a) {
        PositiveVolumeIndexIndicatorDescriptionMetadata.b(a);
        a.n("PositiveVolumeIndexIndicator", function () { return new PositiveVolumeIndexIndicatorDescription(); });
        a.m("PositiveVolumeIndexIndicator", PositiveVolumeIndexIndicatorDescriptionMetadata.a);
    };
    PositiveVolumeIndexIndicatorDescriptionMetadata.$t = markType(PositiveVolumeIndexIndicatorDescriptionMetadata, 'PositiveVolumeIndexIndicatorDescriptionMetadata');
    PositiveVolumeIndexIndicatorDescriptionMetadata.a = null;
    return PositiveVolumeIndexIndicatorDescriptionMetadata;
}(Base));
export { PositiveVolumeIndexIndicatorDescriptionMetadata };
//# sourceMappingURL=PositiveVolumeIndexIndicatorDescriptionMetadata.js.map