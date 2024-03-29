/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Nullable$1, Number_$type } from "./type";
export function nullableConcat(v1, v2) {
    if (v1 == null) {
        v1 = "";
    }
    else if (!!v1.isNullable) {
        v1 = v1.getValueOrDefault1("");
    }
    if (v2 == null) {
        v2 = "";
    }
    else if (!!v2.isNullable) {
        v2 = v2.getValueOrDefault1("");
    }
    return v1.toString() + v2.toString();
}
export function nullableAdd(v1, v2) {
    if (v1.isNullable && !v1.hasValue) {
        return null;
    }
    if (v2.isNullable && !v2.hasValue) {
        return null;
    }
    var val1 = v1;
    var val2 = v2;
    if (v1.isNullable) {
        val1 = v1.value;
    }
    if (v2.isNullable) {
        val2 = v2.value;
    }
    return Nullable$1.toNullable(Number_$type, val1 + val2);
}
export function nullableSubtract(v1, v2) {
    if (v1.isNullable && !v1.hasValue) {
        return null;
    }
    if (v2.isNullable && !v2.hasValue) {
        return null;
    }
    var val1 = v1;
    var val2 = v2;
    if (v1.isNullable) {
        val1 = v1.value;
    }
    if (v2.isNullable) {
        val2 = v2.value;
    }
    return Nullable$1.toNullable(Number_$type, val1 - val2);
}
export function nullableMultiply(v1, v2) {
    if (v1.isNullable && !v1.hasValue) {
        return null;
    }
    if (v2.isNullable && !v2.hasValue) {
        return null;
    }
    var val1 = v1;
    var val2 = v2;
    if (v1.isNullable) {
        val1 = v1.value;
    }
    if (v2.isNullable) {
        val2 = v2.value;
    }
    return Nullable$1.toNullable(Number_$type, val1 * val2);
}
export function nullableDivide(v1, v2) {
    if (v1.isNullable && !v1.hasValue) {
        return null;
    }
    if (v2.isNullable && !v2.hasValue) {
        return null;
    }
    var val1 = v1;
    var val2 = v2;
    if (v1.isNullable) {
        val1 = v1.value;
    }
    if (v2.isNullable) {
        val2 = v2.value;
    }
    return Nullable$1.toNullable(Number_$type, val1 / val2);
}
export function nullableModulus(v1, v2) {
    if (v1.isNullable && !v1.hasValue) {
        return null;
    }
    if (v2.isNullable && !v2.hasValue) {
        return null;
    }
    var val1 = v1;
    var val2 = v2;
    if (v1.isNullable) {
        val1 = v1.value;
    }
    if (v2.isNullable) {
        val2 = v2.value;
    }
    return Nullable$1.toNullable(Number_$type, val1 % val2);
}
export function nullableGreaterThan(v1, v2) {
    if (v1.isNullable && !v1.hasValue) {
        return false;
    }
    if (v2.isNullable && !v2.hasValue) {
        return false;
    }
    var val1 = v1;
    var val2 = v2;
    if (v1.isNullable) {
        val1 = v1.value;
    }
    if (v2.isNullable) {
        val2 = v2.value;
    }
    return val1 > val2;
}
export function nullableGreaterThanOrEqual(v1, v2) {
    if (v1.isNullable && !v1.hasValue) {
        return false;
    }
    if (v2.isNullable && !v2.hasValue) {
        return false;
    }
    var val1 = v1;
    var val2 = v2;
    if (v1.isNullable) {
        val1 = v1.value;
    }
    if (v2.isNullable) {
        val2 = v2.value;
    }
    return val1 >= val2;
}
export function nullableLessThan(v1, v2) {
    if (v1.isNullable && !v1.hasValue) {
        return false;
    }
    if (v2.isNullable && !v2.hasValue) {
        return false;
    }
    var val1 = v1;
    var val2 = v2;
    if (v1.isNullable) {
        val1 = v1.value;
    }
    if (v2.isNullable) {
        val2 = v2.value;
    }
    return val1 < val2;
}
export function nullableLessThanOrEqual(v1, v2) {
    if (v1.isNullable && !v1.hasValue) {
        return false;
    }
    if (v2.isNullable && !v2.hasValue) {
        return false;
    }
    var val1 = v1;
    var val2 = v2;
    if (v1.isNullable) {
        val1 = v1.value;
    }
    if (v2.isNullable) {
        val2 = v2.value;
    }
    return val1 <= val2;
}
export function nullableIsNull(v) {
    /*jshint eqnull:true */
    return v == null || (!!v.isNullable && !v.hasValue);
}
export function nullableEquals(v1, v2) {
    /*jshint eqnull:true */
    var v1IsNull = (v1 == null) || (!!v1.isNullable && !v1.hasValue);
    var v2IsNull = (v2 == null) || (!!v2.isNullable && !v2.hasValue);
    if (v1IsNull && v2IsNull) {
        return true;
    }
    if (v1IsNull != v2IsNull) {
        return false;
    }
    var val1 = v1;
    var val2 = v2;
    if (v1.isNullable) {
        val1 = v1.value;
    }
    if (v2.isNullable) {
        val2 = v2.value;
    }
    return val1 == val2;
}
export function nullableNotEquals(v1, v2) {
    return !nullableEquals(v1, v2);
}
export function unwrapNullable(v) {
    /*jshint eqnull:true */
    if (v == null || !v.isNullable) {
        return v;
    }
    if (!v.hasValue) {
        return null;
    }
    return v.value;
}
export function wrapNullable($t, v) {
    /*jshint eqnull:true */
    if (v != null && v.isNullable) {
        return v;
    }
    return Nullable$1.toNullable($t, v);
}
//# sourceMappingURL=nullable.js.map