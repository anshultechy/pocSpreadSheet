/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "./type";
import { FilterExpression } from "./FilterExpression";
/**
 * @hidden
 */
var FilterFactory = /** @class */ (function (_super) {
    tslib_1.__extends(FilterFactory, _super);
    function FilterFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(FilterFactory, "instance", {
        get: function () {
            if (FilterFactory.as == null) {
                FilterFactory.as = new FilterFactory();
            }
            return FilterFactory.as;
        },
        enumerable: true,
        configurable: true
    });
    FilterFactory.build = function (a) {
        var b = FilterFactory.instance;
        return a(b);
    };
    FilterFactory.prototype.property = function (a) {
        return FilterExpression.property(a);
    };
    FilterFactory.prototype.literal = function (a) {
        return FilterExpression.literal(a);
    };
    FilterFactory.prototype.group = function (a) {
        return FilterExpression.operation(a, 15, null);
    };
    FilterFactory.prototype.and = function (a, b) {
        return FilterExpression.operation(a, 7, b);
    };
    FilterFactory.prototype.or = function (a, b) {
        return FilterExpression.operation(a, 8, b);
    };
    FilterFactory.prototype.not = function (a) {
        return FilterExpression.operation(a, 9, null);
    };
    FilterFactory.prototype.add = function (a, b) {
        return FilterExpression.operation(a, 10, b);
    };
    FilterFactory.prototype.divide = function (a, b) {
        return FilterExpression.operation(a, 13, b);
    };
    FilterFactory.prototype.equal = function (a, b) {
        return FilterExpression.operation(a, 1, b);
    };
    FilterFactory.prototype.greaterThan = function (a, b) {
        return FilterExpression.operation(a, 3, b);
    };
    FilterFactory.prototype.greaterThanOrEqual = function (a, b) {
        return FilterExpression.operation(a, 4, b);
    };
    FilterFactory.prototype.lessThan = function (a, b) {
        return FilterExpression.operation(a, 5, b);
    };
    FilterFactory.prototype.lessThanOrEqual = function (a, b) {
        return FilterExpression.operation(a, 6, b);
    };
    FilterFactory.prototype.modulus = function (a, b) {
        return FilterExpression.operation(a, 14, b);
    };
    FilterFactory.prototype.multiply = function (a, b) {
        return FilterExpression.operation(a, 12, b);
    };
    FilterFactory.prototype.notEqual = function (a, b) {
        return FilterExpression.operation(a, 2, b);
    };
    FilterFactory.prototype.subtract = function (a, b) {
        return FilterExpression.operation(a, 11, b);
    };
    FilterFactory.prototype.ceiling = function (a) {
        return FilterExpression.func(19, a);
    };
    FilterFactory.prototype.concat = function (a, b) {
        return FilterExpression.func(10, a, b);
    };
    FilterFactory.prototype.concat1 = function (a, b) {
        return FilterExpression.func(10, a, FilterExpression.literal(b));
    };
    FilterFactory.prototype.contains = function (a, b) {
        if (typeof b === 'string') {
            b = FilterExpression.literal(b);
        }
        return FilterExpression.func(0, a, b);
    };
    FilterFactory.prototype.day = function (a) {
        return FilterExpression.func(11, a);
    };
    FilterFactory.prototype.endsWith = function (a, b) {
        if (typeof b === 'string') {
            b = FilterExpression.literal(b);
        }
        return FilterExpression.func(1, a, b);
    };
    FilterFactory.prototype.floor = function (a) {
        return FilterExpression.func(18, a);
    };
    FilterFactory.prototype.hour = function (a) {
        return FilterExpression.func(12, a);
    };
    FilterFactory.prototype.indexOf = function (a, b) {
        if (typeof b === 'string') {
            b = FilterExpression.literal(b);
        }
        return FilterExpression.func(4, a, b);
    };
    FilterFactory.prototype.length = function (a) {
        return FilterExpression.func(3, a);
    };
    FilterFactory.prototype.minute = function (a) {
        return FilterExpression.func(13, a);
    };
    FilterFactory.prototype.month = function (a) {
        return FilterExpression.func(14, a);
    };
    FilterFactory.prototype.replace = function (a, b, c) {
        if (typeof b === 'string') {
            b = FilterExpression.literal(b);
        }
        if (typeof c === 'string') {
            c = FilterExpression.literal(c);
        }
        return FilterExpression.func(5, a, b, c);
    };
    FilterFactory.prototype.round = function (a) {
        return FilterExpression.func(17, a);
    };
    FilterFactory.prototype.second = function (a) {
        return FilterExpression.func(15, a);
    };
    FilterFactory.prototype.startsWith = function (a, b) {
        if (typeof b === 'string') {
            b = FilterExpression.literal(b);
        }
        return FilterExpression.func(2, a, b);
    };
    FilterFactory.prototype.substring = function (a, b, c) {
        if (c === void 0) { c = null; }
        if (typeof b === 'number') {
            b = FilterExpression.literal(b);
        }
        if (c != null && typeof c === 'number') {
            c = FilterExpression.literal(c);
        }
        if (c != null) {
            return FilterExpression.func(6, a, b, c);
        }
        else {
            return FilterExpression.func(6, a, b);
        }
    };
    FilterFactory.prototype.toLower = function (a) {
        return FilterExpression.func(7, a);
    };
    FilterFactory.prototype.toUpper = function (a) {
        return FilterExpression.func(8, a);
    };
    FilterFactory.prototype.trim = function (a) {
        return FilterExpression.func(9, a);
    };
    FilterFactory.prototype.year = function (a) {
        return FilterExpression.func(16, a);
    };
    FilterFactory.prototype.date = function (a) {
        return FilterExpression.func(20, a);
    };
    FilterFactory.prototype.time = function (a) {
        return FilterExpression.func(21, a);
    };
    FilterFactory.prototype.now = function () {
        return FilterExpression.func(16);
    };
    FilterFactory.prototype.isOf = function (a, b) {
        return FilterExpression.func(16, a);
    };
    FilterFactory.prototype.cast = function (a, b) {
        return FilterExpression.func(24, a);
    };
    FilterFactory.$t = markType(FilterFactory, 'FilterFactory');
    FilterFactory.as = null;
    return FilterFactory;
}(Base));
export { FilterFactory };
//# sourceMappingURL=FilterFactory.js.map