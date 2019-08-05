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
var ObjectDisposedException = /** @class */ (function (_super) {
    tslib_1.__extends(ObjectDisposedException, _super);
    function ObjectDisposedException(a) {
        var _rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            _rest[_i - 1] = arguments[_i];
        }
        var _this = this;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    var c = _rest[0];
                    _this = _super.call(this, 0) || this;
                }
                break;
            case 1:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    _this = _super.call(this, 0) || this;
                }
                break;
        }
        return _this;
    }
    ObjectDisposedException.$t = markType(ObjectDisposedException, 'ObjectDisposedException', BaseError.$);
    return ObjectDisposedException;
}(BaseError));
export { ObjectDisposedException };
//# sourceMappingURL=ObjectDisposedException.js.map