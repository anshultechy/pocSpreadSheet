/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { FilterExpressionDescriptionMetadata } from "./FilterExpressionDescriptionMetadata";
import { LiteralFilterExpressionDescription } from "./LiteralFilterExpressionDescription";
/**
 * @hidden
 */
export class LiteralFilterExpressionDescriptionMetadata extends Base {
    static b(a) {
        if (LiteralFilterExpressionDescriptionMetadata.a == null) {
            LiteralFilterExpressionDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            LiteralFilterExpressionDescriptionMetadata.c(a, LiteralFilterExpressionDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        FilterExpressionDescriptionMetadata.c(a, b);
        b.item("LiteralValueRef", "(w:LiteralValue,wf:LiteralValue)DataRef");
        b.item("LeaveUnquoted", "Boolean");
    }
    static d(a) {
        LiteralFilterExpressionDescriptionMetadata.b(a);
        a.n("LiteralFilterExpression", () => new LiteralFilterExpressionDescription());
        a.m("LiteralFilterExpression", LiteralFilterExpressionDescriptionMetadata.a);
    }
}
LiteralFilterExpressionDescriptionMetadata.$t = markType(LiteralFilterExpressionDescriptionMetadata, 'LiteralFilterExpressionDescriptionMetadata');
LiteralFilterExpressionDescriptionMetadata.a = null;
//# sourceMappingURL=LiteralFilterExpressionDescriptionMetadata.js.map