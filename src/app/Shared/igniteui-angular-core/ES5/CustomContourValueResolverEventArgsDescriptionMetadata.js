/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { CustomContourValueResolverEventArgsDescription } from "./CustomContourValueResolverEventArgsDescription";
/**
 * @hidden
 */
var CustomContourValueResolverEventArgsDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(CustomContourValueResolverEventArgsDescriptionMetadata, _super);
    function CustomContourValueResolverEventArgsDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomContourValueResolverEventArgsDescriptionMetadata.b = function (a) {
        if (CustomContourValueResolverEventArgsDescriptionMetadata.a == null) {
            CustomContourValueResolverEventArgsDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            CustomContourValueResolverEventArgsDescriptionMetadata.c(a, CustomContourValueResolverEventArgsDescriptionMetadata.a);
        }
    };
    CustomContourValueResolverEventArgsDescriptionMetadata.c = function (a, b) {
        b.item("ContourValues", "Array:double");
    };
    CustomContourValueResolverEventArgsDescriptionMetadata.d = function (a) {
        CustomContourValueResolverEventArgsDescriptionMetadata.b(a);
        a.n("CustomContourValueResolverEventArgs", function () { return new CustomContourValueResolverEventArgsDescription(); });
        a.m("CustomContourValueResolverEventArgs", CustomContourValueResolverEventArgsDescriptionMetadata.a);
    };
    CustomContourValueResolverEventArgsDescriptionMetadata.$t = markType(CustomContourValueResolverEventArgsDescriptionMetadata, 'CustomContourValueResolverEventArgsDescriptionMetadata');
    CustomContourValueResolverEventArgsDescriptionMetadata.a = null;
    return CustomContourValueResolverEventArgsDescriptionMetadata;
}(Base));
export { CustomContourValueResolverEventArgsDescriptionMetadata };
//# sourceMappingURL=CustomContourValueResolverEventArgsDescriptionMetadata.js.map