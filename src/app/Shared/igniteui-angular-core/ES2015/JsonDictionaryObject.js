/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { JsonDictionaryItem } from "./JsonDictionaryItem";
import { Dictionary$2 } from "./Dictionary$2";
import { List$1 } from "./List$1";
import { String_$type, fromEnum, markType } from "./type";
/**
 * @hidden
 */
export class JsonDictionaryObject extends JsonDictionaryItem {
    constructor() {
        super();
        this.d = new Dictionary$2(String_$type, JsonDictionaryItem.$, 0);
    }
    e(a, b) {
        this.d.item(a, b);
    }
    g(a) {
        this.d.removeItem(a);
    }
    f() {
        this.d.clear();
    }
    item(a, b) {
        if (arguments.length === 2) {
            this.d.item(a, b);
            return b;
        }
        else {
            return this.d.item(a);
        }
    }
    c(a) {
        return this.d.containsKey(a);
    }
    a() {
        let a = new List$1(String_$type, 0);
        for (let b of fromEnum(this.d.keys)) {
            a.add(b);
        }
        return a.toArray();
    }
}
JsonDictionaryObject.$t = markType(JsonDictionaryObject, 'JsonDictionaryObject', JsonDictionaryItem.$);
//# sourceMappingURL=JsonDictionaryObject.js.map