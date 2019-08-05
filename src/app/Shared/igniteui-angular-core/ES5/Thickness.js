/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "./type";
/**
 * @hidden
 */
var Thickness = /** @class */ (function (_super) {
    tslib_1.__extends(Thickness, _super);
    function Thickness(a) {
        var _rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            _rest[_i - 1] = arguments[_i];
        }
        var _this = _super.call(this) || this;
        _this.b = 0;
        _this.c = 0;
        _this.d = 0;
        _this.e = 0;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    var c = _rest[0];
                    _this.b = _this.c = _this.d = _this.e = c;
                }
                break;
            case 1:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    var e = _rest[2];
                    var f = _rest[3];
                    _this.c = c;
                    _this.e = d;
                    _this.d = e;
                    _this.b = f;
                }
                break;
        }
        return _this;
    }
    Thickness.prototype.a = function (a) {
        return this.b == a.b && this.e == a.e && this.c == a.c && this.d == a.d;
    };
    Thickness.prototype.toString = function () {
        var a = this.c.toString() + "," + this.e.toString() + "," + this.d.toString() + "," + this.b.toString();
        return a;
    };
    Thickness.$t = markType(Thickness, 'Thickness');
    return Thickness;
}(Base));
export { Thickness };
//# sourceMappingURL=Thickness.js.map