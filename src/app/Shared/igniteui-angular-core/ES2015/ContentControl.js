/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Control } from "./Control";
import { markType } from "./type";
/**
 * @hidden
 */
export class ContentControl extends Control {
    constructor() {
        super(...arguments);
        this._content = null;
        this.ah = null;
    }
    get content() {
        return this._content;
    }
    set content(a) {
        this._content = a;
    }
}
ContentControl.$t = markType(ContentControl, 'ContentControl', Control.$);
//# sourceMappingURL=ContentControl.js.map