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
export class MouseEventArgs extends EventArgs {
    constructor() {
        super(...arguments);
        this._position = null;
        this._originalSource = null;
    }
    get position() {
        return this._position;
    }
    set position(a) {
        this._position = a;
    }
    get originalSource() {
        return this._originalSource;
    }
    set originalSource(a) {
        this._originalSource = a;
    }
    getPosition(a) {
        return this.position;
    }
}
MouseEventArgs.$t = markType(MouseEventArgs, 'MouseEventArgs', EventArgs.$);
//# sourceMappingURL=MouseEventArgs.js.map