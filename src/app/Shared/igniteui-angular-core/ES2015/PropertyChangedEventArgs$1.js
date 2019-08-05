/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { PropertyChangedEventArgs, markType } from "./type";
/**
 * @hidden
 */
export class PropertyChangedEventArgs$1 extends PropertyChangedEventArgs {
    constructor($t, a, b, c) {
        super(a);
        this.$t = null;
        this._oldValue = null;
        this._newValue = null;
        this.$t = $t;
        this.$type = this.$type.specialize(this.$t);
        this.oldValue = b;
        this.newValue = c;
    }
    get oldValue() {
        return this._oldValue;
    }
    set oldValue(a) {
        this._oldValue = a;
    }
    get newValue() {
        return this._newValue;
    }
    set newValue(a) {
        this._newValue = a;
    }
}
PropertyChangedEventArgs$1.$t = markType(PropertyChangedEventArgs$1, 'PropertyChangedEventArgs$1', PropertyChangedEventArgs.$);
//# sourceMappingURL=PropertyChangedEventArgs$1.js.map