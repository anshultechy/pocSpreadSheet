/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { FilterExpressionVisitor } from "./FilterExpressionVisitor";
import { DefaultODataLiteralEmitter } from "./DefaultODataLiteralEmitter";
import { StringBuilder } from "./StringBuilder";
import { markType } from "./type";
/**
 * @hidden
 */
export class ODataDataSourceFilterExpressionVisitor extends FilterExpressionVisitor {
    constructor(a, ..._rest) {
        super();
        this.h = null;
        this.f = null;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    this.f = new DefaultODataLiteralEmitter();
                    this.h = new StringBuilder(0);
                }
                break;
            case 1:
                {
                    let c = _rest[0];
                    {
                        this.f = new DefaultODataLiteralEmitter();
                        this.h = new StringBuilder(0);
                    }
                    this.f = c;
                }
                break;
        }
    }
    toString() {
        return this.h.toString();
    }
    visitOperationExpression(a) {
        let b = true;
        let c = "";
        switch (a.operator) {
            case 10:
                c = "add";
                break;
            case 7:
                c = "and";
                break;
            case 13:
                c = "div";
                break;
            case 0:
            case 1:
                c = "eq";
                break;
            case 3:
                c = "gt";
                break;
            case 4:
                c = "ge";
                break;
            case 15:
                b = false;
                break;
            case 5:
                c = "lt";
                break;
            case 6:
                c = "le";
                break;
            case 14:
                c = "mod";
                break;
            case 12:
                c = "mul";
                break;
            case 9:
                c = "not";
                b = false;
                break;
            case 2:
                c = "ne";
                break;
            case 8:
                c = "or";
                break;
            case 11:
                c = "sub";
                break;
            default:
                c = "eq";
                break;
        }
        if (b) {
            if (this.g(a, a.left)) {
                this.h.l("(");
            }
            this.visit(a.left);
            if (this.g(a, a.left)) {
                this.h.l(")");
            }
            this.h.l(" ");
            this.h.l(c);
            this.h.l(" ");
            if (this.g(a, a.right)) {
                this.h.l("(");
            }
            this.visit(a.right);
            if (this.g(a, a.right)) {
                this.h.l(")");
            }
        }
        else {
            if (a.operator == 15) {
                this.h.l("(");
            }
            else {
                this.h.u(c + " ");
            }
            if (a.left != null) {
                this.visit(a.left);
            }
            else {
                this.visit(a.right);
            }
            if (a.operator == 15) {
                this.h.l(")");
            }
        }
    }
    g(a, b) {
        let c = a.precedence;
        let d = b != null ? b.precedence : 0;
        if (b != null && b.isOperation && b.operator == 15) {
            return false;
        }
        return d < c;
    }
    visitFunctionExpression(a) {
        let b = "";
        switch (a.functionType) {
            case 19:
                b = "ceiling";
                break;
            case 10:
                b = "concat";
                break;
            case 0:
                b = "contains";
                break;
            case 11:
                b = "day";
                break;
            case 1:
                b = "endswith";
                break;
            case 18:
                b = "floor";
                break;
            case 12:
                b = "hour";
                break;
            case 4:
                b = "indexof";
                break;
            case 3:
                b = "length";
                break;
            case 13:
                b = "minute";
                break;
            case 14:
                b = "month";
                break;
            case 5:
                b = "replace";
                break;
            case 17:
                b = "round";
                break;
            case 15:
                b = "second";
                break;
            case 2:
                b = "startswith";
                break;
            case 6:
                b = "substring";
                break;
            case 7:
                b = "tolower";
                break;
            case 8:
                b = "toupper";
                break;
            case 9:
                b = "trim";
                break;
            case 16:
                b = "year";
                break;
        }
        this.h.l(b);
        this.h.l("(");
        let c = true;
        for (let d = 0; d < a.functionArguments.j.count; d++) {
            if (c) {
                c = false;
            }
            else {
                this.h.l(", ");
            }
            this.visit(a.functionArguments.j.item(d));
        }
        this.h.l(")");
    }
    visitLiteralExpression(a) {
        this.i(a, a.literalValue);
    }
    i(a, b) {
        let c = this.f.emitLiteral(b, a.leaveUnquoted);
        this.h.l(c);
    }
    visitPropertyReferenceExpression(a) {
        this.j(a.propertyReference);
    }
    j(a) {
        this.h.l(a);
    }
}
ODataDataSourceFilterExpressionVisitor.$t = markType(ODataDataSourceFilterExpressionVisitor, 'ODataDataSourceFilterExpressionVisitor', FilterExpressionVisitor.$);
//# sourceMappingURL=ODataDataSourceFilterExpressionVisitor.js.map