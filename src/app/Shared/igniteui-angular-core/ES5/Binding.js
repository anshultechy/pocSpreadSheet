/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "./type";
import { PropertyPath } from "./PropertyPath";
/**
 * @hidden
 */
var Binding = /** @class */ (function (_super) {
    tslib_1.__extends(Binding, _super);
    function Binding(a) {
        var _rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            _rest[_i - 1] = arguments[_i];
        }
        var _this = _super.call(this) || this;
        _this.c = null;
        _this.e = null;
        _this.a = false;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0: break;
            case 1:
                {
                    var c = _rest[0];
                    _this.e = new PropertyPath(c);
                }
                break;
        }
        return _this;
    }
    Object.defineProperty(Binding.prototype, "d", {
        get: function () {
            return this.c;
        },
        set: function (a) {
            this.c = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Binding.prototype, "f", {
        get: function () {
            return this.e;
        },
        set: function (a) {
            this.e = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Binding.prototype, "b", {
        get: function () {
            return this.a;
        },
        set: function (a) {
            this.a = a;
        },
        enumerable: true,
        configurable: true
    });
    Binding.$t = markType(Binding, 'Binding');
    return Binding;
}(Base));
export { Binding };
//# sourceMappingURL=Binding.js.map