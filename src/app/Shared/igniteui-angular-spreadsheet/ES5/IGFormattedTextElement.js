/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, fromEnum, markType } from "../../igniteui-angular-core/ES5/type";
import { IGFormattedTextSettings } from "./IGFormattedTextSettings";
/**
 * @hidden
 */
var IGFormattedTextElement = /** @class */ (function (_super) {
    tslib_1.__extends(IGFormattedTextElement, _super);
    function IGFormattedTextElement() {
        var _this = _super.call(this) || this;
        _this.a = new IGFormattedTextSettings();
        _this.f = 0;
        _this.e = 0;
        return _this;
    }
    IGFormattedTextElement.prototype.b = function (a) {
        return this.f <= a && a < this.f + this.e;
    };
    IGFormattedTextElement.prototype.c = function () {
        return this.a._f();
    };
    IGFormattedTextElement.d = function ($t, a) {
        var e_1, _a;
        try {
            for (var _b = tslib_1.__values(fromEnum(a)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var b = _c.value;
                if (b.c()) {
                    return true;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return false;
    };
    IGFormattedTextElement.$t = markType(IGFormattedTextElement, 'IGFormattedTextElement');
    return IGFormattedTextElement;
}(Base));
export { IGFormattedTextElement };
//# sourceMappingURL=IGFormattedTextElement.js.map
