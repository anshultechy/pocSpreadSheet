/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { CustomContourValueResolverEventArgsDescriptionMetadata } from "./CustomContourValueResolverEventArgsDescriptionMetadata";
import { ContourValueResolverDescriptionMetadata } from "./ContourValueResolverDescriptionMetadata";
import { CustomContourValueResolverDescription } from "./CustomContourValueResolverDescription";
/**
 * @hidden
 */
export class CustomContourValueResolverDescriptionMetadata extends Base {
    static b(a) {
        if (CustomContourValueResolverDescriptionMetadata.a == null) {
            CustomContourValueResolverDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            CustomContourValueResolverDescriptionMetadata.c(a, CustomContourValueResolverDescriptionMetadata.a);
            CustomContourValueResolverEventArgsDescriptionMetadata.d(a);
        }
    }
    static c(a, b) {
        ContourValueResolverDescriptionMetadata.c(a, b);
        b.item("GetCustomContourValuesRef", "EventRef::getCustomContourValues");
    }
    static d(a) {
        CustomContourValueResolverDescriptionMetadata.b(a);
        a.n("CustomContourValueResolver", () => new CustomContourValueResolverDescription());
        a.m("CustomContourValueResolver", CustomContourValueResolverDescriptionMetadata.a);
    }
}
CustomContourValueResolverDescriptionMetadata.$t = markType(CustomContourValueResolverDescriptionMetadata, 'CustomContourValueResolverDescriptionMetadata');
CustomContourValueResolverDescriptionMetadata.a = null;
//# sourceMappingURL=CustomContourValueResolverDescriptionMetadata.js.map