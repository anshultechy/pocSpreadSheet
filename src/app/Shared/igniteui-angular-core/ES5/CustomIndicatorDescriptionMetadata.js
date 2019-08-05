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
import { CustomIndicatorDescription } from "./CustomIndicatorDescription";
/**
 * @hidden
 */
var CustomIndicatorDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(CustomIndicatorDescriptionMetadata, _super);
    function CustomIndicatorDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomIndicatorDescriptionMetadata.b = function (a) {
        if (CustomIndicatorDescriptionMetadata.a == null) {
            CustomIndicatorDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            CustomIndicatorDescriptionMetadata.c(a, CustomIndicatorDescriptionMetadata.a);
        }
    };
    CustomIndicatorDescriptionMetadata.c = function (a, b) {
        StrategyBasedIndicatorDescriptionMetadata.c(a, b);
    };
    CustomIndicatorDescriptionMetadata.d = function (a) {
        CustomIndicatorDescriptionMetadata.b(a);
        a.n("CustomIndicator", function () { return new CustomIndicatorDescription(); });
        a.m("CustomIndicator", CustomIndicatorDescriptionMetadata.a);
    };
    CustomIndicatorDescriptionMetadata.$t = markType(CustomIndicatorDescriptionMetadata, 'CustomIndicatorDescriptionMetadata');
    CustomIndicatorDescriptionMetadata.a = null;
    return CustomIndicatorDescriptionMetadata;
}(Base));
export { CustomIndicatorDescriptionMetadata };
//# sourceMappingURL=CustomIndicatorDescriptionMetadata.js.map