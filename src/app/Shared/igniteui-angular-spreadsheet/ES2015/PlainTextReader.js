/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "../../igniteui-angular-core/ES2015/type";
import { PlainTextReader_ParseHelper } from "./PlainTextReader_ParseHelper";
import { CoreUtilities } from "./CoreUtilities";
import { nullableNotEquals } from "../../igniteui-angular-core/ES2015/nullable";
import { arrayIndexOf1 } from "../../igniteui-angular-core/ES2015/arrayExtended";
/**
 * @hidden
 */
export class PlainTextReader extends Base {
    static a(a, b, c, d, e = 0) {
        CoreUtilities.y(a);
        CoreUtilities.y(d);
        let f = 0;
        let g = nullableNotEquals(c, null) && arrayIndexOf1(String_$type, d, c.value) < 0;
        let h = g ? c.value : '\0';
        let i = new PlainTextReader_ParseHelper(h, b);
        while ((f = a.b()) >= 0) {
            let j = String.fromCharCode(f);
            let k = g && j == h;
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
                    let l = j == '\r';
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
    }
}
PlainTextReader.$t = markType(PlainTextReader, 'PlainTextReader');
//# sourceMappingURL=PlainTextReader.js.map