/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { getEnumerator } from "./type";
import { EnumUtil } from './type';
export function stringStartsWith(str, check) {
    return str.indexOf(check) == 0;
}
export function stringEndsWith(str, check) {
    var ind = str.lastIndexOf(check);
    return ind >= 0 && ind == str.length - check.length;
}
export function stringContains(str, check) {
    return str.indexOf(check) != -1;
}
export function stringCreateFromCharArray(charArray) {
    return charArray.join("");
}
export function stringCreateFromChar(char, count) {
    var ret = "";
    for (var i = 0; i < count; i++) {
        ret = ret + char;
    }
    return ret;
}
export function stringCreateFromCharArraySlice(charArray, start, length) {
    var ret = "";
    for (var i = 0; i < length; i++) {
        ret = ret + charArray[start + i];
    }
    return ret;
}
;
export function stringToCharArray(target) {
    return target.split("");
}
export function stringCopyToCharArray(source, sourceIndex, destination, destinationIndex, count) {
    for (var i = destinationIndex; i < destinationIndex + count; i++) {
        destination[i] = source.charAt(sourceIndex + i - destinationIndex);
    }
}
;
export function stringIsDigit(str, index) {
    index = index || 0;
    var ch = str.charAt(index);
    if (ch >= "0" && ch <= "9") {
        return true;
    }
    return false;
}
;
export function charMaxValue() {
    return "\uffff";
}
export function charMinValue() {
    return "\u0000";
}
// static toDateTime(target: string) {
// 	var result = new Date(target);
// 	if (!isNaN(+result)) {
// 		return result;
// 	}
// 	// TODO: Cache this regex?
// 	if (/^((([0-9]{1,4})\s*(\s+((a|p)m?)\s*))|(([0-9]{1,4})\s*:\s*([0-9]?[0-9])\s*(:\s*([0-9]?[0-9])\s*(.\s*([0-9]{0,4})[0-9]*\s*)?)?(\s+((a|p)m?)\s*)?)|(\s*([0-9]?[0-9])\s*:\s*([0-9]?[0-9])\s*.\s*([0-9]{0,4})[0-9]*\s*(\s+((a|p)m?)\s*)?))$/i.test(target)) {
// 		// The string can be a time string only, in which case we should return today at that time.
// 		return new Date(new Date().toDateString() + " " + target);
// 	}
// 	throw new FormatException(1, "The string cannot be converted to a date");
// }
// static toDecimal(target: string) {
// 	var result = +target;
// 	if (isNaN(result)) {
// 		new FormatException(1, "The string cannot be converted to a number");
// 	}
// 	return result;
// }
export function stringToString1(target) {
    return target.toString();
}
export function stringRemove(target, index, count) {
    if (!count || ((index + count) > target.length)) {
        return target.substr(0, index);
    }
    return target.substr(0, index) + target.substr(index + count);
}
export function stringCompareTo(target, other) {
    if (target == other) {
        return 0;
    }
    if (target < other) {
        return -1;
    }
    return 1;
}
export var stringCompare = stringCompareTo;
export function stringIsNullOrEmpty(target) { return !target || target.length < 1; }
export function stringIsNullOrWhiteSpace(target) { return !target || target.trim().length < 1; }
export function stringEmpty() { return ""; }
export function stringEquals(target, other) { return target == other; }
export function stringEscapeRegExp(str) {
    return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
export function createGuid() {
    /*jslint bitwise: true */
    function S4() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }
    return (S4() + S4() + "-" + S4() + "-4" + S4().substr(0, 3) + "-" + S4() + "-" + S4() +
        S4() + S4()).toLowerCase();
}
export function stringConcat() {
    var _a;
    var s = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        s[_i] = arguments[_i];
    }
    return (_a = String.prototype).concat.apply(_a, tslib_1.__spread(s));
}
export function stringReplace(str, oldValue, newValue) {
    return str.replace(new RegExp(stringEscapeRegExp(oldValue), "g"), newValue);
}
export function stringJoin(sep) {
    var vals = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        vals[_i - 1] = arguments[_i];
    }
    return vals.join(sep);
}
export function stringJoin1($t, sep, vals) {
    var result;
    var en = getEnumerator(vals);
    while (en.moveNext()) {
        var v = en.current.toString();
        if (result === undefined) {
            result = v;
        }
        else {
            result += sep + v;
        }
    }
    return result;
}
export function stringToString$1($t, v) {
    if (v !== null && $t) {
        if ($t.isNullable) {
            $t = $t.typeArguments[0];
        }
        if ($t.isEnumType) {
            return EnumUtil.getName($t, v);
        }
    }
    return v.toString();
}
export function stringToLocaleLower(str, locale) {
    if (locale == null || locale.name == null)
        return str.toLocaleLowerCase();
    return str.toLocaleLowerCase(locale.name);
}
export function stringToLocaleUpper(str, locale) {
    if (locale == null || locale.name == null)
        return str.toLocaleUpperCase();
    return str.toLocaleUpperCase(locale.name);
}
//# sourceMappingURL=string.js.map