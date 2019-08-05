/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Type, Base, markType } from "./type";
import { stringEmpty } from "./string";
/**
 * @hidden
 */
export var ICredentials_$type = new Type(null, 'ICredentials');
/**
 * @hidden
 */
var NetworkCredential = /** @class */ (function (_super) {
    tslib_1.__extends(NetworkCredential, _super);
    function NetworkCredential(a) {
        var _rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            _rest[_i - 1] = arguments[_i];
        }
        var _this = _super.call(this) || this;
        _this.c = null;
        _this.b = null;
        _this.a = null;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    var e = [c, d, stringEmpty()];
                    {
                        var g = e[0];
                        var h = e[1];
                        var i = e[2];
                        _this.c = g;
                        _this.b = h;
                        _this.a = i;
                    }
                }
                break;
            case 1:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    var e = _rest[2];
                    _this.c = c;
                    _this.b = d;
                    _this.a = e;
                }
                break;
        }
        return _this;
    }
    NetworkCredential.prototype.getCredential = function (a, b) {
        return this;
    };
    NetworkCredential.$t = markType(NetworkCredential, 'NetworkCredential', Base.$, [ICredentials_$type]);
    return NetworkCredential;
}(Base));
export { NetworkCredential };
//# sourceMappingURL=ICredentials_combined.js.map