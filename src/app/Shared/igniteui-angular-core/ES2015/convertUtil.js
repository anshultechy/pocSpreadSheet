/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { FormatException } from "./type";
import { dateMinValue } from "./date";
import { truncate } from "./number";
export class ConvertUtil {
    static toBoolean(v, provider) {
        if (v.toBoolean) {
            return v.toBoolean(provider);
        }
        if (typeof v === 'string' || v instanceof String) {
            if (v.toLowerCase().trim() == "true") {
                return true;
            }
            return false;
        }
        return !!v;
    }
    static toString1(v, provider) {
        if (v.toString1) {
            return v.toString1(provider);
        }
        if (typeof v === 'string' || v instanceof String) {
            return v;
        }
        return v.toString();
    }
    static toChar(v, provider) {
        if (v.toChar) {
            return v.toChar(provider);
        }
        if (typeof v === 'string' || v instanceof String) {
            return v[0];
        }
        return String.fromCharCode(+v);
    }
    static toDateTime(v, provider) {
        if (v.toDateTime) {
            return v.toDateTime(provider);
        }
        if (v == null) {
            return dateMinValue();
        }
        var str = v.toString();
        if (/^\s*([0-9]{1,4}\s*((\s+[ap]m?)|(((:\s*[0-9]{1,2}\s*){1,2}(\.\s*[0-9]+)?)(\s+[ap]m?)?)))\s*$/i.test(str)) {
            // The string can be a time string only, in which case we should return today at that time.
            str = new Date().toDateString() + " " + str;
        }
        var dt = new Date(Date.parse(str));
        if (isNaN(+dt))
            throw new FormatException(0, "");
        return dt;
    }
    static convertToNumber(meth, v, minValue, maxValue, trunc, provider, throwOnNaN) {
        if (v[meth]) {
            return v[meth](provider);
        }
        let numberVal = 0;
        if (typeof v === 'string' || v instanceof String) {
            numberVal = parseFloat(v);
            if (throwOnNaN === true && isNaN(numberVal)) {
                throw new FormatException(0, "The string cannot be converted to a number");
            }
        }
        else {
            numberVal = +v;
        }
        if (numberVal < minValue) {
            numberVal = minValue;
        }
        if (numberVal > maxValue) {
            numberVal = maxValue;
        }
        if (trunc) {
            numberVal = truncate(numberVal);
        }
        return numberVal;
    }
    static toByte(v, provider) {
        return ConvertUtil.convertToNumber("toByte", v, 0, 255, true, provider, true);
    }
    static toDecimal(v, provider) {
        return ConvertUtil.convertToNumber("toDecimal", v, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY, false, provider, true);
    }
    static toDouble(v, provider) {
        return ConvertUtil.convertToNumber("toDouble", v, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY, false, provider);
    }
    static toInt16(v, provider) {
        return ConvertUtil.convertToNumber("toInt16", v, -32768, 32767, true, provider, true);
    }
    static toInt32(v, provider) {
        return ConvertUtil.convertToNumber("toInt32", v, -2147483648, 2147483647, true, provider, true);
    }
    static toInt64(v, provider) {
        return ConvertUtil.convertToNumber("toInt64", v, -9223372036854775808, 9223372036854775807, true, provider, true);
    }
    static toSByte(v, provider) {
        return ConvertUtil.convertToNumber("toSByte", v, -128, 127, true, provider, true);
    }
    static toUInt16(v, provider) {
        return ConvertUtil.convertToNumber("toUInt16", v, 0, 65535, true, provider, true);
    }
    static toUInt32(v, provider) {
        return ConvertUtil.convertToNumber("toUInt32", v, 0, 4294967295, true, provider, true);
    }
    static toUInt64(v, provider) {
        return ConvertUtil.convertToNumber("toUInt64", v, 0, 18446744073709551615, true, provider, true);
    }
    static toSingle(v, provider) {
        return ConvertUtil.convertToNumber("toSingle", v, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY, false, provider);
    }
}
//# sourceMappingURL=convertUtil.js.map