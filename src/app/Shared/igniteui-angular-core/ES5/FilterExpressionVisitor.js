/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "./type";
import { InvalidOperationException } from "./InvalidOperationException";
/**
 * @hidden
 */
var FilterExpressionVisitor = /** @class */ (function (_super) {
    tslib_1.__extends(FilterExpressionVisitor, _super);
    function FilterExpressionVisitor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FilterExpressionVisitor.prototype.visit = function (a) {
        if (a == null) {
            throw new InvalidOperationException(1, "Expected an expression but found none");
        }
        if (a.isOperation) {
            this.visitOperationExpression(a);
        }
        else if (a.isFunction) {
            this.visitFunctionExpression(a);
        }
        else if (a.isLiteral) {
            this.visitLiteralExpression(a);
        }
        else if (a.isPropertyReference) {
            this.visitPropertyReferenceExpression(a);
        }
    };
    FilterExpressionVisitor.prototype.visitOperationExpression = function (a) {
        if (a.left != null) {
            this.visit(a.left);
        }
        if (a.right != null) {
            this.visit(a.right);
        }
    };
    FilterExpressionVisitor.prototype.visitFunctionExpression = function (a) {
        for (var b = 0; b < a.functionArguments.j.count; b++) {
            this.visit(a.functionArguments.j.item(b));
        }
    };
    FilterExpressionVisitor.prototype.visitLiteralExpression = function (a) {
    };
    FilterExpressionVisitor.prototype.visitPropertyReferenceExpression = function (a) {
    };
    FilterExpressionVisitor.$t = markType(FilterExpressionVisitor, 'FilterExpressionVisitor');
    return FilterExpressionVisitor;
}(Base));
export { FilterExpressionVisitor };
//# sourceMappingURL=FilterExpressionVisitor.js.map