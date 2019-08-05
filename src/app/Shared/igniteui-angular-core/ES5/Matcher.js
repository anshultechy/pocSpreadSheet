/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "./type";
import { stringStartsWith, stringEndsWith, stringContains, stringReplace } from "./string";
/**
 * @hidden
 */
var Matcher = /** @class */ (function (_super) {
    tslib_1.__extends(Matcher, _super);
    function Matcher(a) {
        var _this = _super.call(this) || this;
        _this.c = null;
        var patt_ = Matcher.d(a);
        _this.c = (new RegExp(patt_));
        return _this;
    }
    Matcher.prototype.b = function (a) {
        return this.c.test(a);
    };
    Matcher.a = function (a) {
        return Matcher.d(a) != null;
    };
    Matcher.d = function (a) {
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
    };
    Matcher.$t = markType(Matcher, 'Matcher');
    return Matcher;
}(Base));
export { Matcher };
//# sourceMappingURL=Matcher.js.map