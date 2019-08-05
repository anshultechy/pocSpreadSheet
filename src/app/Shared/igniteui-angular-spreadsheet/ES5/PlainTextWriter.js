/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "../../igniteui-angular-core/ES5/type";
import { CoreUtilities } from "./CoreUtilities";
import { Environment } from "../../igniteui-angular-core/ES5/Environment";
import { nullableNotEquals } from "../../igniteui-angular-core/ES5/nullable";
import { stringCreateFromChar, stringIsNullOrEmpty } from "../../igniteui-angular-core/ES5/string";
import { indexOfAny } from "../../igniteui-angular-core/ES5/stringExtended";
/**
 * @hidden
 */
var PlainTextWriter = /** @class */ (function (_super) {
    tslib_1.__extends(PlainTextWriter, _super);
    function PlainTextWriter(a, b, c) {
        var _this = _super.call(this) || this;
        _this.d = false;
        _this.f = '\0';
        _this.j = null;
        _this.i = null;
        _this.e = '\0';
        _this.h = null;
        _this.a = null;
        _this.g = 0;
        _this.b = false;
        _this.c = false;
        CoreUtilities.y(a);
        _this.d = nullableNotEquals(b, null);
        _this.f = _this.d ? b.value : '\0';
        _this.e = c;
        _this.h = a;
        _this.a = ['\r', '\n', c];
        _this.b = Environment.newLine == "\n";
        _this.j = stringCreateFromChar(_this.f, 1);
        _this.i = stringCreateFromChar(_this.f, 2);
        return _this;
    }
    PlainTextWriter.prototype.l = function (a) {
        if (this.c) {
            this.k(false);
        }
        for (var b = 0; b < a; b++) {
            this.h.o(this.e);
        }
        this.g += a + 1;
    };
    PlainTextWriter.prototype.m = function (a) {
        if (this.c) {
            this.k(false);
        }
        if (++this.g > 1) {
            this.h.o(this.e);
        }
        var b;
        var c = -1;
        if (b = this.d && stringIsNullOrEmpty(a) == false && (c = indexOfAny(a, this.a)) >= 0) {
            this.h.o(this.f);
        }
        if (b && c >= 0 && (a.charAt(c) == this.f || (c = a.indexOf(this.f, c)) >= 0)) {
            var d = 0;
            do {
                for (var e = d; e <= c; e++) {
                    this.h.o(a.charAt(e));
                }
                this.h.o(this.f);
                c++;
                d = c;
            } while ((c = a.indexOf(this.f, c)) >= 0);
            for (var f = d; f < a.length; f++) {
                this.h.o(a.charAt(f));
            }
        }
        else {
            this.h.v(a);
        }
        if (b) {
            this.h.o(this.f);
        }
    };
    PlainTextWriter.prototype.k = function (a) {
        if (a === void 0) { a = true; }
        if (this.g > 0) {
            if (this.b && a) {
                this.c = true;
            }
            else {
                this.c = false;
                this.h.v(Environment.newLine);
                this.g = 0;
            }
        }
    };
    PlainTextWriter.$t = markType(PlainTextWriter, 'PlainTextWriter');
    return PlainTextWriter;
}(Base));
export { PlainTextWriter };
//# sourceMappingURL=PlainTextWriter.js.map
