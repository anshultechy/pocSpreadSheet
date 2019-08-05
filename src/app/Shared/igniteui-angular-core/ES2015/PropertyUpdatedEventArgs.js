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
export class PropertyUpdatedEventArgs extends EventArgs {
    constructor(a, b, c) {
        super();
        this._propertyName = null;
        this._oldValue = null;
        this._newValue = null;
        this.propertyName = a;
        this.oldValue = b;
        this.newValue = c;
    }
    get propertyName() {
        return this._propertyName;
    }
    set propertyName(a) {
        this._propertyName = a;
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
PropertyUpdatedEventArgs.$t = markType(PropertyUpdatedEventArgs, 'PropertyUpdatedEventArgs', EventArgs.$);
//# sourceMappingURL=PropertyUpdatedEventArgs.js.map