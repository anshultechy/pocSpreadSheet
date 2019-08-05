/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, typeCast, Date_$type, markType, typeGetValue } from "./type";
import { CultureInfo } from "./culture";
import { NotImplementedException } from "./NotImplementedException";
import { truncate, isNaN_ } from "./number";
import { unwrapNullable } from "./nullable";
import { b64toUint8Array, uint8ArraytoB64 } from "./stringExtended";
import { ConvertUtil } from "./convertUtil";
import { dateMinValue, dateFromTicks } from "./date";
import { dateParse } from "./dateExtended";
import { parseNumber } from "./numberExtended";
/**
 * @hidden
 */
export class Convert extends Base {
    static toDouble5(a) {
        return a;
    }
    static toDouble1(a) {
        return a;
    }
    static toDouble(a) {
        return a;
    }
    static toDouble2(a) {
        return a;
    }
    static toDecimal(a) {
        return a;
    }
    static toDecimal3(a) {
        return a;
    }
    static toDecimal1(a) {
        return a;
    }
    static toInt32(a) {
        if (a >= 0) {
            let b = truncate(Math.floor(a));
            let c = a - b;
            let d = Math.ceil(a) - a;
            if (c > d || ((c == d) && (b & 1) > 0)) {
                b++;
            }
            return b;
        }
        else {
            let e = truncate(Math.ceil(a));
            let f = e - a;
            let g = a - Math.floor(a);
            if (f > g || ((f == g) && (e & 1) > 0)) {
                e--;
            }
            return e;
        }
    }
    static toInt322(a) {
        return parseInt(a);
    }
    static toDouble3(a) {
        return Convert.toDouble4(a, CultureInfo.currentCulture);
    }
    static toDouble4(a, b) {
        let c = (typeGetValue(unwrapNullable(a)));
        if (c == null) {
            return 0;
        }
        let d = (+c);
        if (isNaN_(d)) {
            return ConvertUtil.toDouble(c, b);
        }
        return d;
    }
    static toInt321(a) {
        let b = (typeGetValue(unwrapNullable(a)));
        if (b == null) {
            return 0;
        }
        let c = (+b);
        if (isNaN_(c)) {
            return ConvertUtil.toInt32(b, CultureInfo.currentCulture);
        }
        return c;
    }
    static toInt64(a) {
        let b = (typeGetValue(unwrapNullable(a)));
        if (b == null) {
            return 0;
        }
        let c = (+b);
        if (isNaN_(c)) {
            return ConvertUtil.toInt64(b, CultureInfo.currentCulture);
        }
        return c;
    }
    static toDecimal2(a) {
        let b = (typeGetValue(unwrapNullable(a)));
        if (b == null) {
            return 0;
        }
        let c = (+b);
        if (isNaN_(c)) {
            return ConvertUtil.toDecimal(b, CultureInfo.currentCulture);
        }
        return c;
    }
    static toByte(a) {
        return (a ? 1 : 0);
    }
    static toByte1(a) {
        let b = (typeGetValue(unwrapNullable(a)));
        if (b == null) {
            return 0;
        }
        let c = (+b);
        if (isNaN_(c)) {
            return ConvertUtil.toByte(b, CultureInfo.currentCulture);
        }
        return c;
    }
    static toBoolean(a) {
        let b = (typeGetValue(unwrapNullable(a)));
        if (b == null) {
            return false;
        }
        return (!!b);
    }
    static toDateTime(a) {
        let b = (typeGetValue(unwrapNullable(a)));
        if (b == null) {
            return dateMinValue();
        }
        if (typeCast(Date_$type, b) !== null) {
            return b;
        }
        let c = (+b);
        if (!isNaN_(c)) {
            return dateFromTicks(c);
        }
        return dateParse(b.toString());
    }
    static toChar(a) {
        return String.fromCharCode(a);
    }
    static toChar1(a) {
        return String.fromCharCode(a);
    }
    static toDouble6(a, b) {
        return parseNumber(a, b);
    }
    static toUInt16(a) {
        return (a ? 1 : 0);
    }
    static toBoolean1(a) {
        return a != 0;
    }
    static toUInt32(a) {
        return a;
    }
    static fromBase64String(a) {
        return (b64toUint8Array(a));
    }
    static toBase64String(a) {
        return (uint8ArraytoB64(a));
    }
    static toByte2(a, b) {
        throw new NotImplementedException(0);
    }
}
Convert.$t = markType(Convert, 'Convert');
//# sourceMappingURL=Convert.js.map