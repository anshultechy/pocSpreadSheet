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
import { EaseOfMovementIndicatorDescription } from "./EaseOfMovementIndicatorDescription";
/**
 * @hidden
 */
var EaseOfMovementIndicatorDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(EaseOfMovementIndicatorDescriptionMetadata, _super);
    function EaseOfMovementIndicatorDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EaseOfMovementIndicatorDescriptionMetadata.b = function (a) {
        if (EaseOfMovementIndicatorDescriptionMetadata.a == null) {
            EaseOfMovementIndicatorDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            EaseOfMovementIndicatorDescriptionMetadata.c(a, EaseOfMovementIndicatorDescriptionMetadata.a);
        }
    };
    EaseOfMovementIndicatorDescriptionMetadata.c = function (a, b) {
        StrategyBasedIndicatorDescriptionMetadata.c(a, b);
    };
    EaseOfMovementIndicatorDescriptionMetadata.d = function (a) {
        EaseOfMovementIndicatorDescriptionMetadata.b(a);
        a.n("EaseOfMovementIndicator", function () { return new EaseOfMovementIndicatorDescription(); });
        a.m("EaseOfMovementIndicator", EaseOfMovementIndicatorDescriptionMetadata.a);
    };
    EaseOfMovementIndicatorDescriptionMetadata.$t = markType(EaseOfMovementIndicatorDescriptionMetadata, 'EaseOfMovementIndicatorDescriptionMetadata');
    EaseOfMovementIndicatorDescriptionMetadata.a = null;
    return EaseOfMovementIndicatorDescriptionMetadata;
}(Base));
export { EaseOfMovementIndicatorDescriptionMetadata };
//# sourceMappingURL=EaseOfMovementIndicatorDescriptionMetadata.js.map