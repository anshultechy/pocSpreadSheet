/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Description } from "./Description";
import { markType } from "./type";
/**
 * @hidden
 */
export class GridSelectedKeysChangedEventArgsDescription extends Description {
    constructor() {
        super();
        this.f = null;
        this.g = null;
    }
    get_type() {
        return "GridSelectedKeysChangedEventArgs";
    }
    get type() {
        return this.get_type();
    }
    get addedKeys() {
        return this.f;
    }
    set addedKeys(a) {
        this.f = a;
        this.e("AddedKeys");
    }
    get removedKeys() {
        return this.g;
    }
    set removedKeys(a) {
        this.g = a;
        this.e("RemovedKeys");
    }
}
GridSelectedKeysChangedEventArgsDescription.$t = markType(GridSelectedKeysChangedEventArgsDescription, 'GridSelectedKeysChangedEventArgsDescription', Description.$);
//# sourceMappingURL=GridSelectedKeysChangedEventArgsDescription.js.map