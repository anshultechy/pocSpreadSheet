/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, runOn, markType } from "../../igniteui-angular-core/ES5/type";
/**
 * @hidden
 */
var TimedOperation = /** @class */ (function (_super) {
    tslib_1.__extends(TimedOperation, _super);
    function TimedOperation(a, b) {
        var _this = _super.call(this) || this;
        _this.b = 0;
        _this.a = null;
        _this.a = a;
        _this.b = window.setTimeout(runOn(_this, _this.d), b);
        return _this;
    }
    TimedOperation.prototype.c = function () {
        if (this.a != null) {
            window.clearTimeout(this.b);
        }
        this.a = null;
    };
    TimedOperation.prototype.d = function () {
        if (this.a != null) {
            var a = this.a;
            this.a = null;
            a();
        }
    };
    TimedOperation.$t = markType(TimedOperation, 'TimedOperation');
    return TimedOperation;
}(Base));
export { TimedOperation };
//# sourceMappingURL=TimedOperation.js.map
