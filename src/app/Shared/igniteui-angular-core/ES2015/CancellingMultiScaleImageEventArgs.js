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
export class CancellingMultiScaleImageEventArgs extends EventArgs {
    constructor() {
        super(...arguments);
        this._uri = null;
        this._image = null;
    }
    get uri() {
        return this._uri;
    }
    set uri(a) {
        this._uri = a;
    }
    get image() {
        return this._image;
    }
    set image(a) {
        this._image = a;
    }
}
CancellingMultiScaleImageEventArgs.$t = markType(CancellingMultiScaleImageEventArgs, 'CancellingMultiScaleImageEventArgs', EventArgs.$);
//# sourceMappingURL=CancellingMultiScaleImageEventArgs.js.map