/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "../../igniteui-angular-core/ES5/type";
import { PlainTextReader_ParseHelper } from "./PlainTextReader_ParseHelper";
import { CoreUtilities } from "./CoreUtilities";
import { nullableNotEquals } from "../../igniteui-angular-core/ES5/nullable";
import { arrayIndexOf1 } from "../../igniteui-angular-core/ES5/arrayExtended";
/**
 * @hidden
 */
var PlainTextReader = /** @class */ (function (_super) {
    tslib_1.__extends(PlainTextReader, _super);
    function PlainTextReader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PlainTextReader.a = function (a, b, c, d, e) {
        if (e === void 0) { e = 0; }
        CoreUtilities.y(a);
        CoreUtilities.y(d);
        var f = 0;
        var g = nullableNotEquals(c, null) && arrayIndexOf1(String_$type, d, c.value) < 0;
        var h = g ? c.value : '\0';
        var i = new PlainTextReader_ParseHelper(h, b);
        while ((f = a.b()) >= 0) {
            var j = String.fromCharCode(f);
            var k = g && j == h;
            if (k) {
                i.j++;
            }
            else {
                if (i.j > 0) {
                    i.p();
                }
                if (i.c == 1) {
                    i.l(j);
                }
                else {
                    var l = j == '\r';
                    if (l || j == '\n') {
                        if (l && a.a() == '\n'.charCodeAt(0)) {
                            a.b();
                        }
                        i.n();
                        i.o();
                    }
                    else if (arrayIndexOf1(String_$type, d, j) >= 0) {
                        i.n();
                    }
                    else {
                        i.l(j);
                    }
                }
            }
            if (e > 0 && i.i == e) {
                i.n();
                i.o();
            }
        }
        i.m();
        return i.g;
    };
    PlainTextReader.$t = markType(PlainTextReader, 'PlainTextReader');
    return PlainTextReader;
}(Base));
export { PlainTextReader };
//# sourceMappingURL=PlainTextReader.js.map
