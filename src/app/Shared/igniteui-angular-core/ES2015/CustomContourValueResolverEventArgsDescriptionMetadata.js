/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { CustomContourValueResolverEventArgsDescription } from "./CustomContourValueResolverEventArgsDescription";
/**
 * @hidden
 */
export class CustomContourValueResolverEventArgsDescriptionMetadata extends Base {
    static b(a) {
        if (CustomContourValueResolverEventArgsDescriptionMetadata.a == null) {
            CustomContourValueResolverEventArgsDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            CustomContourValueResolverEventArgsDescriptionMetadata.c(a, CustomContourValueResolverEventArgsDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        b.item("ContourValues", "Array:double");
    }
    static d(a) {
        CustomContourValueResolverEventArgsDescriptionMetadata.b(a);
        a.n("CustomContourValueResolverEventArgs", () => new CustomContourValueResolverEventArgsDescription());
        a.m("CustomContourValueResolverEventArgs", CustomContourValueResolverEventArgsDescriptionMetadata.a);
    }
}
CustomContourValueResolverEventArgsDescriptionMetadata.$t = markType(CustomContourValueResolverEventArgsDescriptionMetadata, 'CustomContourValueResolverEventArgsDescriptionMetadata');
CustomContourValueResolverEventArgsDescriptionMetadata.a = null;
//# sourceMappingURL=CustomContourValueResolverEventArgsDescriptionMetadata.js.map