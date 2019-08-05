/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { FilterExpressionDescriptionMetadata } from "./FilterExpressionDescriptionMetadata";
import { FunctionFilterExpressionDescription } from "./FunctionFilterExpressionDescription";
/**
 * @hidden
 */
export class FunctionFilterExpressionDescriptionMetadata extends Base {
    static b(a) {
        if (FunctionFilterExpressionDescriptionMetadata.a == null) {
            FunctionFilterExpressionDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            FunctionFilterExpressionDescriptionMetadata.c(a, FunctionFilterExpressionDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        FilterExpressionDescriptionMetadata.c(a, b);
        b.item("FunctionType", "ExportedType:string:FilterExpressionFunctionType");
    }
    static d(a) {
        FunctionFilterExpressionDescriptionMetadata.b(a);
        a.n("FunctionFilterExpression", () => new FunctionFilterExpressionDescription());
        a.m("FunctionFilterExpression", FunctionFilterExpressionDescriptionMetadata.a);
    }
}
FunctionFilterExpressionDescriptionMetadata.$t = markType(FunctionFilterExpressionDescriptionMetadata, 'FunctionFilterExpressionDescriptionMetadata');
FunctionFilterExpressionDescriptionMetadata.a = null;
//# sourceMappingURL=FunctionFilterExpressionDescriptionMetadata.js.map