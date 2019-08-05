/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { EventArgs, markType } from "./type";
/**
 * @hidden
 */
export class DoubleValueChangedEventArgs extends EventArgs {
    constructor(a, b) {
        super();
        this._oldValue = 0;
        this._newValue = 0;
        this.oldValue = a;
        this.newValue = b;
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
DoubleValueChangedEventArgs.$t = markType(DoubleValueChangedEventArgs, 'DoubleValueChangedEventArgs', EventArgs.$);
//# sourceMappingURL=DoubleValueChangedEventArgs.js.map