/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { ValueType, markStruct } from "./type";
/**
 * @hidden
 */
export class KeyValuePair$2 extends ValueType {
    constructor($tKey, $tValue, a, ..._rest) {
        super();
        this.$tKey = null;
        this.$tValue = null;
        this.a = null;
        this.c = null;
        this.$tKey = $tKey;
        this.$tValue = $tValue;
        this.$type = this.$type.specialize(this.$tKey, this.$tValue);
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0: break;
            case 1:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    this.a = c;
                    this.c = d;
                }
                break;
        }
    }
    get key() {
        return this.a;
    }
    get value() {
        return this.c;
    }
}
KeyValuePair$2.$t = markStruct(KeyValuePair$2, 'KeyValuePair$2');
//# sourceMappingURL=KeyValuePair$2.js.map