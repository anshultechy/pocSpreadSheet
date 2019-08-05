/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, markType } from "../../igniteui-angular-core/ES2015/type";
/**
 * An object that contains a DataValue and DisplayText for lists (such as ComboBoxes) in the UI.
 */
export class ComboBoxListItem extends Base {
    constructor(dataValue, displayText) {
        super();
        this._a = null;
        this._e = null;
        this._c = null;
        this._a = dataValue;
        this._e = displayText;
    }
    /**
     * The data value of the item.
     */
    get dataValue() {
        return this._a;
    }
    /**
     * The data value of the item.
     */
    set dataValue(a) {
        if (a == this._a) {
            return;
        }
        if (a != null) {
            if (Base.equalsStatic(a, this._a)) {
                return;
            }
        }
        this._a = a;
    }
    /**
     * The text to display for the item.
     */
    get displayText() {
        return this._e;
    }
    /**
     * The text to display for the item.
     */
    set displayText(a) {
        if (a == this._e) {
            return;
        }
        this._e = a;
    }
    /**
     * an object that stores extra data related to the item.
     */
    get tag() {
        return this._c;
    }
    /**
     * an object that stores extra data related to the item.
     */
    set tag(a) {
        if (a == this._c) {
            return;
        }
        this._c = a;
    }
    /**
     * Returns a string that represents the current object.
     * @return A string that represents the current object.
     */
    toString() {
        return this.displayText;
    }
}
ComboBoxListItem.$t = markType(ComboBoxListItem, 'ComboBoxListItem');
//# sourceMappingURL=ComboBoxListItem.js.map
