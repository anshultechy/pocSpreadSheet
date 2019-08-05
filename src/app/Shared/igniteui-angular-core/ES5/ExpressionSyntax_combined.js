/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "./type";
/**
 * @hidden
 */
var ExpressionSyntax = /** @class */ (function (_super) {
    tslib_1.__extends(ExpressionSyntax, _super);
    function ExpressionSyntax() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExpressionSyntax.c = function (a, b, c) {
        var d = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            d[_i - 3] = arguments[_i];
        }
        return null;
    };
    ExpressionSyntax.a = function (a) {
        var b = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            b[_i - 1] = arguments[_i];
        }
        return null;
    };
    ExpressionSyntax.b = function (a, b) {
        return null;
    };
    ExpressionSyntax.d = function (a) {
        return null;
    };
    ExpressionSyntax.e = function (a, b) {
        return null;
    };
    ExpressionSyntax.$t = markType(ExpressionSyntax, 'ExpressionSyntax');
    return ExpressionSyntax;
}(Base));
export { ExpressionSyntax };
/**
 * @hidden
 */
var LambdaExpression = /** @class */ (function (_super) {
    tslib_1.__extends(LambdaExpression, _super);
    function LambdaExpression() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LambdaExpression.$t = markType(LambdaExpression, 'LambdaExpression', ExpressionSyntax.$);
    return LambdaExpression;
}(ExpressionSyntax));
export { LambdaExpression };
/**
 * @hidden
 */
var MemberExpression = /** @class */ (function (_super) {
    tslib_1.__extends(MemberExpression, _super);
    function MemberExpression() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.f = null;
        return _this;
    }
    MemberExpression.prototype.g = function (a) {
        return null;
    };
    MemberExpression.$t = markType(MemberExpression, 'MemberExpression', ExpressionSyntax.$);
    return MemberExpression;
}(ExpressionSyntax));
export { MemberExpression };
/**
 * @hidden
 */
var MethodCallExpression = /** @class */ (function (_super) {
    tslib_1.__extends(MethodCallExpression, _super);
    function MethodCallExpression() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.f = null;
        _this.g = null;
        return _this;
    }
    MethodCallExpression.prototype.h = function (a, b) {
        return null;
    };
    MethodCallExpression.$t = markType(MethodCallExpression, 'MethodCallExpression', ExpressionSyntax.$);
    return MethodCallExpression;
}(ExpressionSyntax));
export { MethodCallExpression };
/**
 * @hidden
 */
var ParameterExpression = /** @class */ (function (_super) {
    tslib_1.__extends(ParameterExpression, _super);
    function ParameterExpression() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.f = false;
        _this.g = null;
        return _this;
    }
    ParameterExpression.$t = markType(ParameterExpression, 'ParameterExpression', ExpressionSyntax.$);
    return ParameterExpression;
}(ExpressionSyntax));
export { ParameterExpression };
//# sourceMappingURL=ExpressionSyntax_combined.js.map