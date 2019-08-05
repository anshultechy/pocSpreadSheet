/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { JsonDictionaryItem } from "./JsonDictionaryItem";
import { Dictionary$2 } from "./Dictionary$2";
import { List$1 } from "./List$1";
import { String_$type, fromEnum, markType } from "./type";
/**
 * @hidden
 */
var JsonDictionaryObject = /** @class */ (function (_super) {
    tslib_1.__extends(JsonDictionaryObject, _super);
    function JsonDictionaryObject() {
        var _this = _super.call(this) || this;
        _this.d = new Dictionary$2(String_$type, JsonDictionaryItem.$, 0);
        return _this;
    }
    JsonDictionaryObject.prototype.e = function (a, b) {
        this.d.item(a, b);
    };
    JsonDictionaryObject.prototype.g = function (a) {
        this.d.removeItem(a);
    };
    JsonDictionaryObject.prototype.f = function () {
        this.d.clear();
    };
    JsonDictionaryObject.prototype.item = function (a, b) {
        if (arguments.length === 2) {
            this.d.item(a, b);
            return b;
        }
        else {
            return this.d.item(a);
        }
    };
    JsonDictionaryObject.prototype.c = function (a) {
        return this.d.containsKey(a);
    };
    JsonDictionaryObject.prototype.a = function () {
        var e_1, _a;
        var a = new List$1(String_$type, 0);
        try {
            for (var _b = tslib_1.__values(fromEnum(this.d.keys)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var b = _c.value;
                a.add(b);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return a.toArray();
    };
    JsonDictionaryObject.$t = markType(JsonDictionaryObject, 'JsonDictionaryObject', JsonDictionaryItem.$);
    return JsonDictionaryObject;
}(JsonDictionaryItem));
export { JsonDictionaryObject };
//# sourceMappingURL=JsonDictionaryObject.js.map