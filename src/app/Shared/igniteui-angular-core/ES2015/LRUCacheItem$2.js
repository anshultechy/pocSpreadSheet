/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, markType } from "./type";
/**
 * @hidden
 */
export class LRUCacheItem$2 extends Base {
    constructor($tKey, $tValue) {
        super();
        this.$tKey = null;
        this.$tValue = null;
        this.a = null;
        this.b = null;
        this.c = null;
        this.$tKey = $tKey;
        this.$tValue = $tValue;
        this.$type = this.$type.specialize(this.$tKey, this.$tValue);
    }
}
LRUCacheItem$2.$t = markType(LRUCacheItem$2, 'LRUCacheItem$2');
//# sourceMappingURL=LRUCacheItem$2.js.map