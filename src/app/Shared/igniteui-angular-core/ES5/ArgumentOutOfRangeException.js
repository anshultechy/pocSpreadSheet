/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { ArgumentException } from "./ArgumentException";
import { markType } from "./type";
/**
 * @hidden
 */
var ArgumentOutOfRangeException = /** @class */ (function (_super) {
    tslib_1.__extends(ArgumentOutOfRangeException, _super);
    function ArgumentOutOfRangeException(a) {
        var _rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            _rest[_i - 1] = arguments[_i];
        }
        var _this = this;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    _this = _super.call(this, 0) || this;
                }
                break;
            case 1:
                {
                    var c = _rest[0];
                    _this = _super.call(this, 1, c + " is out of range.") || this;
                }
                break;
            case 2:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    _this = _super.call(this, 1, d) || this;
                }
                break;
            case 3:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    var e = _rest[2];
                    var f = [e, c];
                    {
                        var h = f[0];
                        var i = f[1];
                        _this = _super.call(this, 1, i) || this;
                    }
                }
                break;
            case 4:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    _this = _super.call(this, 3, c, d) || this;
                }
                break;
        }
        return _this;
    }
    ArgumentOutOfRangeException.$t = markType(ArgumentOutOfRangeException, 'ArgumentOutOfRangeException', ArgumentException.$);
    return ArgumentOutOfRangeException;
}(ArgumentException));
export { ArgumentOutOfRangeException };
//# sourceMappingURL=ArgumentOutOfRangeException.js.map