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
import { MassIndexIndicatorDescription } from "./MassIndexIndicatorDescription";
/**
 * @hidden
 */
var MassIndexIndicatorDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(MassIndexIndicatorDescriptionMetadata, _super);
    function MassIndexIndicatorDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MassIndexIndicatorDescriptionMetadata.b = function (a) {
        if (MassIndexIndicatorDescriptionMetadata.a == null) {
            MassIndexIndicatorDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            MassIndexIndicatorDescriptionMetadata.c(a, MassIndexIndicatorDescriptionMetadata.a);
        }
    };
    MassIndexIndicatorDescriptionMetadata.c = function (a, b) {
        StrategyBasedIndicatorDescriptionMetadata.c(a, b);
    };
    MassIndexIndicatorDescriptionMetadata.d = function (a) {
        MassIndexIndicatorDescriptionMetadata.b(a);
        a.n("MassIndexIndicator", function () { return new MassIndexIndicatorDescription(); });
        a.m("MassIndexIndicator", MassIndexIndicatorDescriptionMetadata.a);
    };
    MassIndexIndicatorDescriptionMetadata.$t = markType(MassIndexIndicatorDescriptionMetadata, 'MassIndexIndicatorDescriptionMetadata');
    MassIndexIndicatorDescriptionMetadata.a = null;
    return MassIndexIndicatorDescriptionMetadata;
}(Base));
export { MassIndexIndicatorDescriptionMetadata };
//# sourceMappingURL=MassIndexIndicatorDescriptionMetadata.js.map