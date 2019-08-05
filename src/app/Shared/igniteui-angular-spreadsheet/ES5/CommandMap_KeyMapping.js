/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "../../igniteui-angular-core/ES5/type";
import { LongValue } from "./LongValue";
/**
 * @hidden
 */
var CommandMap_KeyMapping = /** @class */ (function (_super) {
    tslib_1.__extends(CommandMap_KeyMapping, _super);
    function CommandMap_KeyMapping(a, b, c, d, e, f) {
        var _this = _super.call(this) || this;
        _this.f = 0;
        _this.a = null;
        _this.b = new LongValue();
        _this.c = new LongValue();
        _this.g = 0;
        _this.i = 0;
        _this.h = 0;
        _this.f = a;
        _this.b = b;
        _this.c = c;
        _this.g = d;
        _this.i = e;
        _this.h = f;
        return _this;
    }
    CommandMap_KeyMapping.prototype.d = function (a, b) {
        return this.g == a && this.i == (this.i & b) && 0 == (this.h & b);
    };
    CommandMap_KeyMapping.prototype.e = function (a) {
        return a.h(this.b, this.c) && (null == this.a || a.h(this.a.a, this.a.b));
    };
    CommandMap_KeyMapping.$t = markType(CommandMap_KeyMapping, 'CommandMap_KeyMapping');
    return CommandMap_KeyMapping;
}(Base));
export { CommandMap_KeyMapping };
//# sourceMappingURL=CommandMap_KeyMapping.js.map
