/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, markType } from "./type";
import { stringStartsWith, stringEndsWith, stringContains, stringReplace } from "./string";
/**
 * @hidden
 */
export class Matcher extends Base {
    constructor(a) {
        super();
        this.c = null;
        let patt_ = Matcher.d(a);
        this.c = (new RegExp(patt_));
    }
    b(a) {
        return this.c.test(a);
    }
    static a(a) {
        return Matcher.d(a) != null;
    }
    static d(a) {
        if (a == null) {
            return null;
        }
        if (stringStartsWith(a, "/") && stringEndsWith(a, "/")) {
            return a.substr(1, a.length - 2);
        }
        if (stringStartsWith(a, "Regex(") && stringEndsWith(a, ")")) {
            return a.substr(6, a.length - 7);
        }
        if (stringStartsWith(a, "RegExp(") && stringEndsWith(a, ")")) {
            return a.substr(7, a.length - 8);
        }
        if (stringContains(a, "*") || stringContains(a, "#") || stringContains(a, "?")) {
            a = stringReplace(a, ".", "\\.");
            a = stringReplace(a, "*", ".*");
            a = stringReplace(a, "#", "\\d+");
            a = stringReplace(a, "?", ".+");
            a = stringReplace(a, "[", "\\[");
            a = stringReplace(a, "]", "\\]");
            return "^" + a + "$";
        }
        return null;
    }
}
Matcher.$t = markType(Matcher, 'Matcher');
//# sourceMappingURL=Matcher.js.map