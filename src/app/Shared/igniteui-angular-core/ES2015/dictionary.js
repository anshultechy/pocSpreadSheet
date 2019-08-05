/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { IteratorWrapper } from "./type";
export class DictionaryUtil {
    static dictionaryCreate(capacity) {
        return new Map();
    }
    static *en(map) {
        for (let item of map) {
            let [key, value] = item;
            yield { key: key, value: value };
        }
    }
    static dictionaryGetEnumerator(map) {
        return new IteratorWrapper(DictionaryUtil.en(map), () => DictionaryUtil.en(map));
    }
    static dictionaryGetKeys(map) {
        return new IteratorWrapper(map.keys(), () => map.keys());
    }
    static dictionaryGetValues(map) {
        return new IteratorWrapper(map.values(), () => map.values());
    }
    static dictionaryGetDictionary(obj) {
        let map = new Map();
        for (var p in obj) {
            map.set(p.toString(), obj[p]);
        }
        return map;
    }
}
//# sourceMappingURL=dictionary.js.map