/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, markType } from "./type";
import { InvalidOperationException } from "./InvalidOperationException";
/**
 * @hidden
 */
export class FilterExpressionVisitor extends Base {
    visit(a) {
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
    }
    visitOperationExpression(a) {
        if (a.left != null) {
            this.visit(a.left);
        }
        if (a.right != null) {
            this.visit(a.right);
        }
    }
    visitFunctionExpression(a) {
        for (let b = 0; b < a.functionArguments.j.count; b++) {
            this.visit(a.functionArguments.j.item(b));
        }
    }
    visitLiteralExpression(a) {
    }
    visitPropertyReferenceExpression(a) {
    }
}
FilterExpressionVisitor.$t = markType(FilterExpressionVisitor, 'FilterExpressionVisitor');
//# sourceMappingURL=FilterExpressionVisitor.js.map