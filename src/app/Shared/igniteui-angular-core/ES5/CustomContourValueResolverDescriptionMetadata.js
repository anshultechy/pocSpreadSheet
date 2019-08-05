/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { CustomContourValueResolverEventArgsDescriptionMetadata } from "./CustomContourValueResolverEventArgsDescriptionMetadata";
import { ContourValueResolverDescriptionMetadata } from "./ContourValueResolverDescriptionMetadata";
import { CustomContourValueResolverDescription } from "./CustomContourValueResolverDescription";
/**
 * @hidden
 */
var CustomContourValueResolverDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(CustomContourValueResolverDescriptionMetadata, _super);
    function CustomContourValueResolverDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomContourValueResolverDescriptionMetadata.b = function (a) {
        if (CustomContourValueResolverDescriptionMetadata.a == null) {
            CustomContourValueResolverDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            CustomContourValueResolverDescriptionMetadata.c(a, CustomContourValueResolverDescriptionMetadata.a);
            CustomContourValueResolverEventArgsDescriptionMetadata.d(a);
        }
    };
    CustomContourValueResolverDescriptionMetadata.c = function (a, b) {
        ContourValueResolverDescriptionMetadata.c(a, b);
        b.item("GetCustomContourValuesRef", "EventRef::getCustomContourValues");
    };
    CustomContourValueResolverDescriptionMetadata.d = function (a) {
        CustomContourValueResolverDescriptionMetadata.b(a);
        a.n("CustomContourValueResolver", function () { return new CustomContourValueResolverDescription(); });
        a.m("CustomContourValueResolver", CustomContourValueResolverDescriptionMetadata.a);
    };
    CustomContourValueResolverDescriptionMetadata.$t = markType(CustomContourValueResolverDescriptionMetadata, 'CustomContourValueResolverDescriptionMetadata');
    CustomContourValueResolverDescriptionMetadata.a = null;
    return CustomContourValueResolverDescriptionMetadata;
}(Base));
export { CustomContourValueResolverDescriptionMetadata };
//# sourceMappingURL=CustomContourValueResolverDescriptionMetadata.js.map