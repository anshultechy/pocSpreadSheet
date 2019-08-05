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
export class FilterExpressionDescriptionMetadata extends Base {
    static b(a) {
        if (FilterExpressionDescriptionMetadata.a == null) {
            FilterExpressionDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            FilterExpressionDescriptionMetadata.c(a, FilterExpressionDescriptionMetadata.a);
        }
    }
    static c(a, b) {
    }
    static d(a) {
        FilterExpressionDescriptionMetadata.b(a);
        a.m("FilterExpression", FilterExpressionDescriptionMetadata.a);
    }
}
FilterExpressionDescriptionMetadata.$t = markType(FilterExpressionDescriptionMetadata, 'FilterExpressionDescriptionMetadata');
FilterExpressionDescriptionMetadata.a = null;
//# sourceMappingURL=FilterExpressionDescriptionMetadata.js.map