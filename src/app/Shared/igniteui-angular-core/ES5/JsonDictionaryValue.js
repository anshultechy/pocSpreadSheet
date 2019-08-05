/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { JsonDictionaryItem } from "./JsonDictionaryItem";
import { markType } from "./type";
/**
 * @hidden
 */
var JsonDictionaryValue = /** @class */ (function (_super) {
    tslib_1.__extends(JsonDictionaryValue, _super);
    function JsonDictionaryValue() {
        var _this = _super.call(this) || this;
        _this._value = null;
        _this.a = 0;
        return _this;
    }
    Object.defineProperty(JsonDictionaryValue.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (a) {
            this._value = a;
        },
        enumerable: true,
        configurable: true
    });
    JsonDictionaryValue.$t = markType(JsonDictionaryValue, 'JsonDictionaryValue', JsonDictionaryItem.$);
    return JsonDictionaryValue;
}(JsonDictionaryItem));
export { JsonDictionaryValue };
//# sourceMappingURL=JsonDictionaryValue.js.map