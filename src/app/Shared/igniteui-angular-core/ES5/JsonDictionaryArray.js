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
var JsonDictionaryArray = /** @class */ (function (_super) {
    tslib_1.__extends(JsonDictionaryArray, _super);
    function JsonDictionaryArray() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._items = null;
        return _this;
    }
    Object.defineProperty(JsonDictionaryArray.prototype, "items", {
        get: function () {
            return this._items;
        },
        set: function (a) {
            this._items = a;
        },
        enumerable: true,
        configurable: true
    });
    JsonDictionaryArray.$t = markType(JsonDictionaryArray, 'JsonDictionaryArray', JsonDictionaryItem.$);
    return JsonDictionaryArray;
}(JsonDictionaryItem));
export { JsonDictionaryArray };
//# sourceMappingURL=JsonDictionaryArray.js.map