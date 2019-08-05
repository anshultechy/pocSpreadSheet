/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { FilterExpressionDescriptionMetadata } from "./FilterExpressionDescriptionMetadata";
import { FunctionFilterExpressionDescription } from "./FunctionFilterExpressionDescription";
/**
 * @hidden
 */
var FunctionFilterExpressionDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(FunctionFilterExpressionDescriptionMetadata, _super);
    function FunctionFilterExpressionDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FunctionFilterExpressionDescriptionMetadata.b = function (a) {
        if (FunctionFilterExpressionDescriptionMetadata.a == null) {
            FunctionFilterExpressionDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            FunctionFilterExpressionDescriptionMetadata.c(a, FunctionFilterExpressionDescriptionMetadata.a);
        }
    };
    FunctionFilterExpressionDescriptionMetadata.c = function (a, b) {
        FilterExpressionDescriptionMetadata.c(a, b);
        b.item("FunctionType", "ExportedType:string:FilterExpressionFunctionType");
    };
    FunctionFilterExpressionDescriptionMetadata.d = function (a) {
        FunctionFilterExpressionDescriptionMetadata.b(a);
        a.n("FunctionFilterExpression", function () { return new FunctionFilterExpressionDescription(); });
        a.m("FunctionFilterExpression", FunctionFilterExpressionDescriptionMetadata.a);
    };
    FunctionFilterExpressionDescriptionMetadata.$t = markType(FunctionFilterExpressionDescriptionMetadata, 'FunctionFilterExpressionDescriptionMetadata');
    FunctionFilterExpressionDescriptionMetadata.a = null;
    return FunctionFilterExpressionDescriptionMetadata;
}(Base));
export { FunctionFilterExpressionDescriptionMetadata };
//# sourceMappingURL=FunctionFilterExpressionDescriptionMetadata.js.map