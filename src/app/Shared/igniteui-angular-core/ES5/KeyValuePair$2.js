/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { ValueType, markStruct } from "./type";
/**
 * @hidden
 */
var KeyValuePair$2 = /** @class */ (function (_super) {
    tslib_1.__extends(KeyValuePair$2, _super);
    function KeyValuePair$2($tKey, $tValue, a) {
        var _rest = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            _rest[_i - 3] = arguments[_i];
        }
        var _this = _super.call(this) || this;
        _this.$tKey = null;
        _this.$tValue = null;
        _this.a = null;
        _this.c = null;
        _this.$tKey = $tKey;
        _this.$tValue = $tValue;
        _this.$type = _this.$type.specialize(_this.$tKey, _this.$tValue);
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0: break;
            case 1:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    _this.a = c;
                    _this.c = d;
                }
                break;
        }
        return _this;
    }
    Object.defineProperty(KeyValuePair$2.prototype, "key", {
        get: function () {
            return this.a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KeyValuePair$2.prototype, "value", {
        get: function () {
            return this.c;
        },
        enumerable: true,
        configurable: true
    });
    KeyValuePair$2.$t = markStruct(KeyValuePair$2, 'KeyValuePair$2');
    return KeyValuePair$2;
}(ValueType));
export { KeyValuePair$2 };
//# sourceMappingURL=KeyValuePair$2.js.map