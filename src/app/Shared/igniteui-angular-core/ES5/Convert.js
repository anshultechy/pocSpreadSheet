/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
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
var Convert = /** @class */ (function (_super) {
    tslib_1.__extends(Convert, _super);
    function Convert() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Convert.toDouble5 = function (a) {
        return a;
    };
    Convert.toDouble1 = function (a) {
        return a;
    };
    Convert.toDouble = function (a) {
        return a;
    };
    Convert.toDouble2 = function (a) {
        return a;
    };
    Convert.toDecimal = function (a) {
        return a;
    };
    Convert.toDecimal3 = function (a) {
        return a;
    };
    Convert.toDecimal1 = function (a) {
        return a;
    };
    Convert.toInt32 = function (a) {
        if (a >= 0) {
            var b = truncate(Math.floor(a));
            var c = a - b;
            var d = Math.ceil(a) - a;
            if (c > d || ((c == d) && (b & 1) > 0)) {
                b++;
            }
            return b;
        }
        else {
            var e = truncate(Math.ceil(a));
            var f = e - a;
            var g = a - Math.floor(a);
            if (f > g || ((f == g) && (e & 1) > 0)) {
                e--;
            }
            return e;
        }
    };
    Convert.toInt322 = function (a) {
        return parseInt(a);
    };
    Convert.toDouble3 = function (a) {
        return Convert.toDouble4(a, CultureInfo.currentCulture);
    };
    Convert.toDouble4 = function (a, b) {
        var c = (typeGetValue(unwrapNullable(a)));
        if (c == null) {
            return 0;
        }
        var d = (+c);
        if (isNaN_(d)) {
            return ConvertUtil.toDouble(c, b);
        }
        return d;
    };
    Convert.toInt321 = function (a) {
        var b = (typeGetValue(unwrapNullable(a)));
        if (b == null) {
            return 0;
        }
        var c = (+b);
        if (isNaN_(c)) {
            return ConvertUtil.toInt32(b, CultureInfo.currentCulture);
        }
        return c;
    };
    Convert.toInt64 = function (a) {
        var b = (typeGetValue(unwrapNullable(a)));
        if (b == null) {
            return 0;
        }
        var c = (+b);
        if (isNaN_(c)) {
            return ConvertUtil.toInt64(b, CultureInfo.currentCulture);
        }
        return c;
    };
    Convert.toDecimal2 = function (a) {
        var b = (typeGetValue(unwrapNullable(a)));
        if (b == null) {
            return 0;
        }
        var c = (+b);
        if (isNaN_(c)) {
            return ConvertUtil.toDecimal(b, CultureInfo.currentCulture);
        }
        return c;
    };
    Convert.toByte = function (a) {
        return (a ? 1 : 0);
    };
    Convert.toByte1 = function (a) {
        var b = (typeGetValue(unwrapNullable(a)));
        if (b == null) {
            return 0;
        }
        var c = (+b);
        if (isNaN_(c)) {
            return ConvertUtil.toByte(b, CultureInfo.currentCulture);
        }
        return c;
    };
    Convert.toBoolean = function (a) {
        var b = (typeGetValue(unwrapNullable(a)));
        if (b == null) {
            return false;
        }
        return (!!b);
    };
    Convert.toDateTime = function (a) {
        var b = (typeGetValue(unwrapNullable(a)));
        if (b == null) {
            return dateMinValue();
        }
        if (typeCast(Date_$type, b) !== null) {
            return b;
        }
        var c = (+b);
        if (!isNaN_(c)) {
            return dateFromTicks(c);
        }
        return dateParse(b.toString());
    };
    Convert.toChar = function (a) {
        return String.fromCharCode(a);
    };
    Convert.toChar1 = function (a) {
        return String.fromCharCode(a);
    };
    Convert.toDouble6 = function (a, b) {
        return parseNumber(a, b);
    };
    Convert.toUInt16 = function (a) {
        return (a ? 1 : 0);
    };
    Convert.toBoolean1 = function (a) {
        return a != 0;
    };
    Convert.toUInt32 = function (a) {
        return a;
    };
    Convert.fromBase64String = function (a) {
        return (b64toUint8Array(a));
    };
    Convert.toBase64String = function (a) {
        return (uint8ArraytoB64(a));
    };
    Convert.toByte2 = function (a, b) {
        throw new NotImplementedException(0);
    };
    Convert.$t = markType(Convert, 'Convert');
    return Convert;
}(Base));
export { Convert };
//# sourceMappingURL=Convert.js.map