/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
export function log10(value) {
    return Math.log(value) / Math.log(10);
}
export function toDouble(value) {
    return +value;
}
export let toDecimal = toDouble;
export function compareTo(value, other) {
    if (value == other) {
        return 0;
    }
    if (value < other) {
        return -1;
    }
    return 1;
}
export function isInfinity(value) {
    return !isFinite(value) && !isNaN_(value);
}
export function intDivide(value, divisor) {
    var result = value / divisor;
    return truncate(result);
}
export function truncate(val) {
    if (val >= 0) {
        return Math.floor(val);
    }
    else {
        return Math.ceil(val);
    }
}
export function logBase(n, n2) {
    return Math.log(n) / Math.log(n2);
}
export function tryParseNumber(s, v) {
    var value = Number(s);
    if (value !== null && isFinite(value) && s.trim().length !== 0) {
        return {
            p1: value,
            ret: true
        };
    }
    else {
        return {
            p1: 0,
            ret: false
        };
    }
}
export function isNegativeInfinity(v) {
    return v == Number.NEGATIVE_INFINITY;
}
export function isPositiveInfinity(v) {
    return v == Number.POSITIVE_INFINITY;
}
export function isNaN_(v) {
    return v !== v; // http://us6.campaign-archive1.com/?u=2cc20705b76fa66ab84a6634f&id=43bf7f05e9
}
//# sourceMappingURL=number.js.map