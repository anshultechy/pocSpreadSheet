/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, typeCast, Array_$type, Boolean_$type, markType } from "./type";
import { List$1 } from "./List$1";
import { JsonDictionaryObject } from "./JsonDictionaryObject";
import { JsonDictionaryArray } from "./JsonDictionaryArray";
import { JsonDictionaryValue } from "./JsonDictionaryValue";
/**
 * @hidden
 */
var JsonDictionaryParser = /** @class */ (function (_super) {
    tslib_1.__extends(JsonDictionaryParser, _super);
    function JsonDictionaryParser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JsonDictionaryParser.prototype.parse = function (json_) {
        var a = JSON.parse(json_);
        return JsonDictionaryParser.b(a);
    };
    JsonDictionaryParser.d = function (item_) {
        var propertyKey_ = null;
        var ret_ = new List$1(String_$type, 0);
        var exclusions_ = {};
        for (propertyKey_ in item_) {
            if (!isNaN(propertyKey_)) {
                continue;
            }
            if (!exclusions_.hasOwnProperty(propertyKey_)) {
                ret_.add(propertyKey_);
            }
        }
        ;
        return ret_;
    };
    JsonDictionaryParser.b = function (obj_) {
        if (typeCast(Array_$type, obj_) !== null) {
            return JsonDictionaryParser.a(obj_);
        }
        if (typeof obj_ === 'number') {
            return JsonDictionaryParser.a(obj_);
        }
        if (typeof obj_ === 'string') {
            return JsonDictionaryParser.a(obj_);
        }
        if (typeCast(Boolean_$type, obj_) !== null) {
            return JsonDictionaryParser.a(obj_);
        }
        var a = new JsonDictionaryObject();
        var b = JsonDictionaryParser.d(obj_);
        for (var c = 0; c < b.count; c++) {
            var key_ = b._inner[c];
            var d = obj_[key_];
            d = JsonDictionaryParser.a(d);
            a.item(key_, d);
        }
        return a;
    };
    JsonDictionaryParser.a = function (a) {
        if (typeCast(Array_$type, a) !== null) {
            var b = a;
            var c_1 = new Array(b.length);
            for (var d = 0; d < b.length; d++) {
                c_1[d] = JsonDictionaryParser.a(b[d]);
            }
            return ((function () {
                var $ret = new JsonDictionaryArray();
                $ret.items = c_1;
                return $ret;
            })());
        }
        else if (typeof a === 'number') {
            return ((function () {
                var $ret = new JsonDictionaryValue();
                $ret.value = a;
                $ret.a = 0;
                return $ret;
            })());
        }
        else if (typeof a === 'string') {
            return ((function () {
                var $ret = new JsonDictionaryValue();
                $ret.value = a;
                $ret.a = 2;
                return $ret;
            })());
        }
        else if (typeCast(Boolean_$type, a) !== null) {
            return ((function () {
                var $ret = new JsonDictionaryValue();
                $ret.value = a;
                $ret.a = 1;
                return $ret;
            })());
        }
        else if (a == null) {
            return ((function () {
                var $ret = new JsonDictionaryValue();
                $ret.value = a;
                $ret.a = 3;
                return $ret;
            })());
        }
        else {
            return JsonDictionaryParser.b(a);
        }
    };
    JsonDictionaryParser.$t = markType(JsonDictionaryParser, 'JsonDictionaryParser');
    return JsonDictionaryParser;
}(Base));
export { JsonDictionaryParser };
//# sourceMappingURL=JsonDictionaryParser.js.map