/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, Number_$type, markType } from "../../igniteui-angular-core/ES5/type";
import { CoreUtilities } from "./CoreUtilities";
import { List$1 } from "../../igniteui-angular-core/ES5/List$1";
/**
 * @hidden
 */
var CommandMap = /** @class */ (function (_super) {
    tslib_1.__extends(CommandMap, _super);
    function CommandMap(a, b) {
        var _this = _super.call(this) || this;
        _this.a = null;
        _this.d = null;
        CoreUtilities.z(a, "commands");
        _this.a = a;
        if (null != b) {
            var _loop_1 = function (d) {
                var c = a[d];
                var e;
                if (((function () { var f = b.tryGetValue(c.f, e); e = f.p1; return f.ret; })())) {
                    c.a = e;
                }
            };
            for (var d = 0; d < a.length; d++) {
                _loop_1(d);
            }
            _this.d = b;
        }
        return _this;
    }
    CommandMap.prototype.c = function (a, b) {
        var c = this.b(a);
        return c == null || b.h(c.a, c.b);
    };
    CommandMap.prototype.e = function (a, b, c) {
        var d = new List$1(Number_$type, 0);
        for (var e = 0; e < this.a.length; e++) {
            var f = this.a[e];
            if (f.d(a, b) && f.e(c)) {
                d.add(f.f);
            }
        }
        return d;
    };
    CommandMap.prototype.b = function (a) {
        var b;
        var c = this.d.tryGetValue(a, b);
        b = c.p1;
        return b;
    };
    CommandMap.$t = markType(CommandMap, 'CommandMap');
    return CommandMap;
}(Base));
export { CommandMap };
//# sourceMappingURL=CommandMap.js.map
