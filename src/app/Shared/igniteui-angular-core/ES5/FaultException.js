/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { BaseError, markType } from "./type";
/**
 * @hidden
 */
var FaultException = /** @class */ (function (_super) {
    tslib_1.__extends(FaultException, _super);
    function FaultException(a, b, c) {
        var _this = _super.call(this, 0) || this;
        _this._action = null;
        _this._code = null;
        _this._reason = null;
        _this.reason = a;
        _this.code = b;
        _this.action = c;
        return _this;
    }
    Object.defineProperty(FaultException.prototype, "action", {
        get: function () {
            return this._action;
        },
        set: function (a) {
            this._action = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FaultException.prototype, "code", {
        get: function () {
            return this._code;
        },
        set: function (a) {
            this._code = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FaultException.prototype, "reason", {
        get: function () {
            return this._reason;
        },
        set: function (a) {
            this._reason = a;
        },
        enumerable: true,
        configurable: true
    });
    FaultException.$t = markType(FaultException, 'FaultException', BaseError.$);
    return FaultException;
}(BaseError));
export { FaultException };
//# sourceMappingURL=FaultException.js.map