/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
/**
 * @hidden
 */
export class ContourValueResolverDescriptionMetadata extends Base {
    static b(a) {
        if (ContourValueResolverDescriptionMetadata.a == null) {
            ContourValueResolverDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            ContourValueResolverDescriptionMetadata.c(a, ContourValueResolverDescriptionMetadata.a);
        }
    }
    static c(a, b) {
    }
    static d(a) {
        ContourValueResolverDescriptionMetadata.b(a);
        a.m("ContourValueResolver", ContourValueResolverDescriptionMetadata.a);
    }
}
ContourValueResolverDescriptionMetadata.$t = markType(ContourValueResolverDescriptionMetadata, 'ContourValueResolverDescriptionMetadata');
ContourValueResolverDescriptionMetadata.a = null;
//# sourceMappingURL=ContourValueResolverDescriptionMetadata.js.map