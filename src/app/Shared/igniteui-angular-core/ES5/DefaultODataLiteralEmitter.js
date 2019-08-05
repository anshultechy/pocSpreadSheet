/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, typeCast, Boolean_$type, Date_$type, markType } from "./type";
import { ODataLiteralEmitter_$type } from "./ODataLiteralEmitter";
import { StringBuilder } from "./StringBuilder";
import { timeSpanTotalMilliseconds, timeSpanNegate, timeSpanDays, timeSpanHours, timeSpanMinutes, timeSpanSeconds, timeSpanMilliseconds } from "./timespan";
import { dateToStringFormat } from "./dateExtended";
/**
 * @hidden
 */
var DefaultODataLiteralEmitter = /** @class */ (function (_super) {
    tslib_1.__extends(DefaultODataLiteralEmitter, _super);
    function DefaultODataLiteralEmitter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DefaultODataLiteralEmitter.prototype.emitLiteral = function (a, b) {
        if (a == null) {
            return "null";
        }
        if (typeCast(Boolean_$type, a) !== null) {
            return a ? "true" : "false";
        }
        else if (typeCast(Date_$type, a) !== null) {
            return this.a(a);
        }
        else if (typeof a === 'string') {
            var c = a.toString();
            if (!b) {
                c = "'" + c + "'";
            }
            return c;
        }
        else {
            return a.toString();
        }
    };
    DefaultODataLiteralEmitter.prototype.b = function (a) {
        var b = false;
        if (timeSpanTotalMilliseconds(a) < 0) {
            b = true;
            a = timeSpanNegate(a);
        }
        var c = new StringBuilder(0);
        c.l("duration'");
        if (b) {
            c.l("-");
        }
        c.l("P");
        if (timeSpanDays(a) > 0) {
            c.l(timeSpanDays(a).toString());
            c.l("D");
        }
        c.l("T");
        if (timeSpanHours(a) > 0) {
            c.j(timeSpanHours(a));
            c.l("H");
        }
        if (timeSpanMinutes(a) > 0 || timeSpanHours(a) > 0) {
            c.j(timeSpanMinutes(a));
            c.l("M");
        }
        if (timeSpanSeconds(a) > 0 || timeSpanMilliseconds(a) > 0 || timeSpanHours(a) > 0 || timeSpanMinutes(a) > 0) {
            c.j(timeSpanSeconds(a));
            if (timeSpanMilliseconds(a) > 0) {
                c.l(".");
                c.l((timeSpanMilliseconds(a) / 1000).toString());
            }
            c.l("S");
        }
        c.l("'");
        return c.toString();
    };
    DefaultODataLiteralEmitter.prototype.a = function (a) {
        var b;
        if (a.getSeconds() == 0 && a.getMilliseconds() == 0) {
            b = dateToStringFormat(a, "yyyy-MM-ddTHH:mm");
        }
        else if (a.getMilliseconds() == 0) {
            b = dateToStringFormat(a, "yyyy-MM-ddTHH:mm:ss");
        }
        else {
            b = dateToStringFormat(a, "yyyy-MM-ddTHH:mm:ss.fffffff");
        }
        return "datetime'" + b + "'";
    };
    DefaultODataLiteralEmitter.$t = markType(DefaultODataLiteralEmitter, 'DefaultODataLiteralEmitter', Base.$, [ODataLiteralEmitter_$type]);
    return DefaultODataLiteralEmitter;
}(Base));
export { DefaultODataLiteralEmitter };
//# sourceMappingURL=DefaultODataLiteralEmitter.js.map