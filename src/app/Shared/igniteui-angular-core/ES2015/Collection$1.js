/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { List$1 } from "./List$1";
import { markType } from "./type";
/**
 * @hidden
 */
export class Collection$1 extends List$1 {
    constructor($t) {
        super($t, 0);
        this.$t = null;
        this.$t = $t;
        this.$type = this.$type.specialize(this.$t);
    }
    get ac() {
        return this;
    }
}
Collection$1.$t = markType(Collection$1, 'Collection$1', List$1.$.specialize(0));
//# sourceMappingURL=Collection$1.js.map