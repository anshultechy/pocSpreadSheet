/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { JsonDictionaryItem } from "./JsonDictionaryItem";
import { markType } from "./type";
/**
 * @hidden
 */
export class JsonDictionaryArray extends JsonDictionaryItem {
    constructor() {
        super(...arguments);
        this._items = null;
    }
    get items() {
        return this._items;
    }
    set items(a) {
        this._items = a;
    }
}
JsonDictionaryArray.$t = markType(JsonDictionaryArray, 'JsonDictionaryArray', JsonDictionaryItem.$);
//# sourceMappingURL=JsonDictionaryArray.js.map