/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { PropertyChangedEventArgs, markType } from "../../igniteui-angular-core/ES2015/type";
/**
 * @hidden
 */
export class ItemPropertyChangedEventArgs extends PropertyChangedEventArgs {
    constructor(a, b) {
        super(b);
        this._b = null;
        this._b = a;
    }
    get _item() {
        return this._b;
    }
}
ItemPropertyChangedEventArgs.$t = markType(ItemPropertyChangedEventArgs, 'ItemPropertyChangedEventArgs', PropertyChangedEventArgs.$);
//# sourceMappingURL=ItemPropertyChangedEventArgs.js.map