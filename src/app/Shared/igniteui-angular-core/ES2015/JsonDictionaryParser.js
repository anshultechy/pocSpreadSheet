/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, typeCast, Array_$type, Boolean_$type, markType } from "./type";
import { List$1 } from "./List$1";
import { JsonDictionaryObject } from "./JsonDictionaryObject";
import { JsonDictionaryArray } from "./JsonDictionaryArray";
import { JsonDictionaryValue } from "./JsonDictionaryValue";
/**
 * @hidden
 */
export class JsonDictionaryParser extends Base {
    parse(json_) {
        let a = JSON.parse(json_);
        return JsonDictionaryParser.b(a);
    }
    static d(item_) {
        let propertyKey_ = null;
        let ret_ = new List$1(String_$type, 0);
        let exclusions_ = {};
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
    }
    static b(obj_) {
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
        let a = new JsonDictionaryObject();
        let b = JsonDictionaryParser.d(obj_);
        for (let c = 0; c < b.count; c++) {
            let key_ = b._inner[c];
            let d = obj_[key_];
            d = JsonDictionaryParser.a(d);
            a.item(key_, d);
        }
        return a;
    }
    static a(a) {
        if (typeCast(Array_$type, a) !== null) {
            let b = a;
            let c = new Array(b.length);
            for (let d = 0; d < b.length; d++) {
                c[d] = JsonDictionaryParser.a(b[d]);
            }
            return ((() => {
                let $ret = new JsonDictionaryArray();
                $ret.items = c;
                return $ret;
            })());
        }
        else if (typeof a === 'number') {
            return ((() => {
                let $ret = new JsonDictionaryValue();
                $ret.value = a;
                $ret.a = 0;
                return $ret;
            })());
        }
        else if (typeof a === 'string') {
            return ((() => {
                let $ret = new JsonDictionaryValue();
                $ret.value = a;
                $ret.a = 2;
                return $ret;
            })());
        }
        else if (typeCast(Boolean_$type, a) !== null) {
            return ((() => {
                let $ret = new JsonDictionaryValue();
                $ret.value = a;
                $ret.a = 1;
                return $ret;
            })());
        }
        else if (a == null) {
            return ((() => {
                let $ret = new JsonDictionaryValue();
                $ret.value = a;
                $ret.a = 3;
                return $ret;
            })());
        }
        else {
            return JsonDictionaryParser.b(a);
        }
    }
}
JsonDictionaryParser.$t = markType(JsonDictionaryParser, 'JsonDictionaryParser');
//# sourceMappingURL=JsonDictionaryParser.js.map