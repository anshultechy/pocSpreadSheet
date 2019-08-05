/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "./type";
import { IExecutionContext_$type } from "./IExecutionContext";
import { dateNow } from "./date";
/**
 * @hidden
 */
var DOMExecutionContext = /** @class */ (function (_super) {
    tslib_1.__extends(DOMExecutionContext, _super);
    function DOMExecutionContext(a) {
        var _this = _super.call(this) || this;
        _this.c = 0;
        _this.b = null;
        _this._requestAnimationFrame = null;
        _this.b = a;
        _this.requestAnimationFrame = a.getRequestAnimationFrame();
        _this.c = dateNow().getTime();
        return _this;
    }
    Object.defineProperty(DOMExecutionContext.prototype, "requestAnimationFrame", {
        get: function () {
            return this._requestAnimationFrame;
        },
        set: function (a) {
            this._requestAnimationFrame = a;
        },
        enumerable: true,
        configurable: true
    });
    DOMExecutionContext.prototype.execute = function (a) {
        a();
    };
    DOMExecutionContext.prototype.enqueueAction = function (a) {
        this.b.setTimeout(a, 0);
    };
    DOMExecutionContext.prototype.enqueueAnimationAction = function (a) {
        this.requestAnimationFrame(a);
    };
    DOMExecutionContext.prototype.executeDelayed = function (a, b) {
        this.b.setTimeout(a, b);
    };
    DOMExecutionContext.prototype.getCurrentRelativeTime = function () {
        return dateNow().getTime() - this.c;
    };
    DOMExecutionContext.$t = markType(DOMExecutionContext, 'DOMExecutionContext', Base.$, [IExecutionContext_$type]);
    return DOMExecutionContext;
}(Base));
export { DOMExecutionContext };
//# sourceMappingURL=DOMExecutionContext.js.map