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
export class RemovedShiftedRowInfo extends Base {
    constructor() {
        super(...arguments);
        this.a = 0;
        this._item = null;
    }
    get item() {
        return this._item;
    }
    set item(a) {
        this._item = a;
    }
}
RemovedShiftedRowInfo.$t = markType(RemovedShiftedRowInfo, 'RemovedShiftedRowInfo');
//# sourceMappingURL=RemovedShiftedRowInfo.js.map