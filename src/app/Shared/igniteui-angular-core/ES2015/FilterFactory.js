/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, markType } from "./type";
import { FilterExpression } from "./FilterExpression";
/**
 * @hidden
 */
export class FilterFactory extends Base {
    static get instance() {
        if (FilterFactory.as == null) {
            FilterFactory.as = new FilterFactory();
        }
        return FilterFactory.as;
    }
    static build(a) {
        let b = FilterFactory.instance;
        return a(b);
    }
    property(a) {
        return FilterExpression.property(a);
    }
    literal(a) {
        return FilterExpression.literal(a);
    }
    group(a) {
        return FilterExpression.operation(a, 15, null);
    }
    and(a, b) {
        return FilterExpression.operation(a, 7, b);
    }
    or(a, b) {
        return FilterExpression.operation(a, 8, b);
    }
    not(a) {
        return FilterExpression.operation(a, 9, null);
    }
    add(a, b) {
        return FilterExpression.operation(a, 10, b);
    }
    divide(a, b) {
        return FilterExpression.operation(a, 13, b);
    }
    equal(a, b) {
        return FilterExpression.operation(a, 1, b);
    }
    greaterThan(a, b) {
        return FilterExpression.operation(a, 3, b);
    }
    greaterThanOrEqual(a, b) {
        return FilterExpression.operation(a, 4, b);
    }
    lessThan(a, b) {
        return FilterExpression.operation(a, 5, b);
    }
    lessThanOrEqual(a, b) {
        return FilterExpression.operation(a, 6, b);
    }
    modulus(a, b) {
        return FilterExpression.operation(a, 14, b);
    }
    multiply(a, b) {
        return FilterExpression.operation(a, 12, b);
    }
    notEqual(a, b) {
        return FilterExpression.operation(a, 2, b);
    }
    subtract(a, b) {
        return FilterExpression.operation(a, 11, b);
    }
    ceiling(a) {
        return FilterExpression.func(19, a);
    }
    concat(a, b) {
        return FilterExpression.func(10, a, b);
    }
    concat1(a, b) {
        return FilterExpression.func(10, a, FilterExpression.literal(b));
    }
    contains(a, b) {
        if (typeof b === 'string') {
            b = FilterExpression.literal(b);
        }
        return FilterExpression.func(0, a, b);
    }
    day(a) {
        return FilterExpression.func(11, a);
    }
    endsWith(a, b) {
        if (typeof b === 'string') {
            b = FilterExpression.literal(b);
        }
        return FilterExpression.func(1, a, b);
    }
    floor(a) {
        return FilterExpression.func(18, a);
    }
    hour(a) {
        return FilterExpression.func(12, a);
    }
    indexOf(a, b) {
        if (typeof b === 'string') {
            b = FilterExpression.literal(b);
        }
        return FilterExpression.func(4, a, b);
    }
    length(a) {
        return FilterExpression.func(3, a);
    }
    minute(a) {
        return FilterExpression.func(13, a);
    }
    month(a) {
        return FilterExpression.func(14, a);
    }
    replace(a, b, c) {
        if (typeof b === 'string') {
            b = FilterExpression.literal(b);
        }
        if (typeof c === 'string') {
            c = FilterExpression.literal(c);
        }
        return FilterExpression.func(5, a, b, c);
    }
    round(a) {
        return FilterExpression.func(17, a);
    }
    second(a) {
        return FilterExpression.func(15, a);
    }
    startsWith(a, b) {
        if (typeof b === 'string') {
            b = FilterExpression.literal(b);
        }
        return FilterExpression.func(2, a, b);
    }
    substring(a, b, c = null) {
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
    }
    toLower(a) {
        return FilterExpression.func(7, a);
    }
    toUpper(a) {
        return FilterExpression.func(8, a);
    }
    trim(a) {
        return FilterExpression.func(9, a);
    }
    year(a) {
        return FilterExpression.func(16, a);
    }
    date(a) {
        return FilterExpression.func(20, a);
    }
    time(a) {
        return FilterExpression.func(21, a);
    }
    now() {
        return FilterExpression.func(16);
    }
    isOf(a, b) {
        return FilterExpression.func(16, a);
    }
    cast(a, b) {
        return FilterExpression.func(24, a);
    }
}
FilterFactory.$t = markType(FilterFactory, 'FilterFactory');
FilterFactory.as = null;
//# sourceMappingURL=FilterFactory.js.map