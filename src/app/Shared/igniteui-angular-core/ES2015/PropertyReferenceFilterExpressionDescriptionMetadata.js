/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { FilterExpressionDescriptionMetadata } from "./FilterExpressionDescriptionMetadata";
import { PropertyReferenceFilterExpressionDescription } from "./PropertyReferenceFilterExpressionDescription";
/**
 * @hidden
 */
export class PropertyReferenceFilterExpressionDescriptionMetadata extends Base {
    static b(a) {
        if (PropertyReferenceFilterExpressionDescriptionMetadata.a == null) {
            PropertyReferenceFilterExpressionDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            PropertyReferenceFilterExpressionDescriptionMetadata.c(a, PropertyReferenceFilterExpressionDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        FilterExpressionDescriptionMetadata.c(a, b);
        b.item("PropertyReference", "String");
    }
    static d(a) {
        PropertyReferenceFilterExpressionDescriptionMetadata.b(a);
        a.n("PropertyReferenceFilterExpression", () => new PropertyReferenceFilterExpressionDescription());
        a.m("PropertyReferenceFilterExpression", PropertyReferenceFilterExpressionDescriptionMetadata.a);
    }
}
PropertyReferenceFilterExpressionDescriptionMetadata.$t = markType(PropertyReferenceFilterExpressionDescriptionMetadata, 'PropertyReferenceFilterExpressionDescriptionMetadata');
PropertyReferenceFilterExpressionDescriptionMetadata.a = null;
//# sourceMappingURL=PropertyReferenceFilterExpressionDescriptionMetadata.js.map