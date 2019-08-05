/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { markEnum } from "./type";
/**
 * Identifies the operator type of an operator filter expression.
 */
export var FilterExpressionOperatorType;
(function (FilterExpressionOperatorType) {
    /**
     * No operator type specified.
     */
    FilterExpressionOperatorType[FilterExpressionOperatorType["None"] = 0] = "None";
    /**
     * Determines if two expressions are equal.
     */
    FilterExpressionOperatorType[FilterExpressionOperatorType["Equal"] = 1] = "Equal";
    /**
     * Determines if two expressions are not equal.
     */
    FilterExpressionOperatorType[FilterExpressionOperatorType["NotEqual"] = 2] = "NotEqual";
    /**
     * Determines if an expression is greater than another.
     */
    FilterExpressionOperatorType[FilterExpressionOperatorType["GreaterThan"] = 3] = "GreaterThan";
    /**
     * Determines if an expression is greater than or equal to another.
     */
    FilterExpressionOperatorType[FilterExpressionOperatorType["GreaterThanOrEqual"] = 4] = "GreaterThanOrEqual";
    /**
     * Determines if an expression is less than another.
     */
    FilterExpressionOperatorType[FilterExpressionOperatorType["LessThan"] = 5] = "LessThan";
    /**
     * Determines if an expression is less than or equal to another.
     */
    FilterExpressionOperatorType[FilterExpressionOperatorType["LessThanOrEqual"] = 6] = "LessThanOrEqual";
    /**
     * Applies the And operator to two expressions.
     */
    FilterExpressionOperatorType[FilterExpressionOperatorType["And"] = 7] = "And";
    /**
     * Applies the Or operator to two expressions.
     */
    FilterExpressionOperatorType[FilterExpressionOperatorType["Or"] = 8] = "Or";
    /**
     * Applies the Not operator to a single expression.
     */
    FilterExpressionOperatorType[FilterExpressionOperatorType["Not"] = 9] = "Not";
    /**
     * Adds two expressions.
     */
    FilterExpressionOperatorType[FilterExpressionOperatorType["Add"] = 10] = "Add";
    /**
     * Subtracts one expression from another.
     */
    FilterExpressionOperatorType[FilterExpressionOperatorType["Subtract"] = 11] = "Subtract";
    /**
     * Multiplies two expressions.
     */
    FilterExpressionOperatorType[FilterExpressionOperatorType["Multiply"] = 12] = "Multiply";
    /**
     * Divides one expression by another.
     */
    FilterExpressionOperatorType[FilterExpressionOperatorType["Divide"] = 13] = "Divide";
    /**
     * Performs the modulus of one expression by another.
     */
    FilterExpressionOperatorType[FilterExpressionOperatorType["Modulo"] = 14] = "Modulo";
    /**
     * Groups an expression.
     */
    FilterExpressionOperatorType[FilterExpressionOperatorType["Grouping"] = 15] = "Grouping";
})(FilterExpressionOperatorType || (FilterExpressionOperatorType = {}));
/**
 * @hidden
 */
export var FilterExpressionOperatorType_$type = markEnum('FilterExpressionOperatorType', 'None,0|Equal,1|NotEqual,2|GreaterThan,3|GreaterThanOrEqual,4|LessThan,5|LessThanOrEqual,6|And,7|Or,8|Not,9|Add,10|Subtract,11|Multiply,12|Divide,13|Modulo,14|Grouping,15');
//# sourceMappingURL=FilterExpressionOperatorType.js.map