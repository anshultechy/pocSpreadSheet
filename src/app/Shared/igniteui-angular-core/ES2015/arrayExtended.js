/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Type } from "./type";
export function arrayClear1(array, index, length) {
    for (var i = index; i < index + length; i++) {
        array[i] = null;
    }
}
export function arrayCopy1(source, sourceIndex, dest, destIndex, count) {
    var i;
    if (source == dest && sourceIndex < destIndex) {
        for (i = count - 1; i >= 0; i--) {
            dest[i + destIndex] = source[i + sourceIndex];
        }
    }
    else {
        for (i = 0; i < count; i++) {
            dest[i + destIndex] = source[i + sourceIndex];
        }
    }
}
export function arrayCopy2(source, dest, count) {
    for (var i = 0; i < count; i++) {
        dest[i] = source[i];
    }
}
export function arrayCopyTo(source, dest, index) {
    for (var i = 0; i < source.length; i++) {
        dest[index++] = source[i];
    }
}
export function arrayIndexOf1($t, array, value) {
    return array.indexOf(value);
}
export function arrayContains(array, value) {
    for (var i = 0; i < array.length; i++) {
        if (Type.equalsStatic(array[i], value))
            return true;
    }
    return false;
}
export function arrayLast(array) {
    return array[array.length - 1];
}
//# sourceMappingURL=arrayExtended.js.map