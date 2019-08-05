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
import { OperationFilterExpressionDescription } from "./OperationFilterExpressionDescription";
/**
 * @hidden
 */
var OperationFilterExpressionDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(OperationFilterExpressionDescriptionMetadata, _super);
    function OperationFilterExpressionDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OperationFilterExpressionDescriptionMetadata.b = function (a) {
        if (OperationFilterExpressionDescriptionMetadata.a == null) {
            OperationFilterExpressionDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            OperationFilterExpressionDescriptionMetadata.c(a, OperationFilterExpressionDescriptionMetadata.a);
            FilterExpressionDescriptionMetadata.d(a);
        }
    };
    OperationFilterExpressionDescriptionMetadata.c = function (a, b) {
        FilterExpressionDescriptionMetadata.c(a, b);
        b.item("PropertyName", "String");
        b.item("ValueRef", "(w:Value,wf:Value)DataRef");
        b.item("Left", "ExportedType");
        b.item("Right", "ExportedType");
        b.item("Operator", "ExportedType:string:FilterExpressionOperatorType");
    };
    OperationFilterExpressionDescriptionMetadata.d = function (a) {
        OperationFilterExpressionDescriptionMetadata.b(a);
        a.n("OperationFilterExpression", function () { return new OperationFilterExpressionDescription(); });
        a.m("OperationFilterExpression", OperationFilterExpressionDescriptionMetadata.a);
    };
    OperationFilterExpressionDescriptionMetadata.$t = markType(OperationFilterExpressionDescriptionMetadata, 'OperationFilterExpressionDescriptionMetadata');
    OperationFilterExpressionDescriptionMetadata.a = null;
    return OperationFilterExpressionDescriptionMetadata;
}(Base));
export { OperationFilterExpressionDescriptionMetadata };
//# sourceMappingURL=OperationFilterExpressionDescriptionMetadata.js.map