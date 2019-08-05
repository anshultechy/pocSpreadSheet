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
export class ScrollerScrollingEventArgs extends EventArgs {
    constructor() {
        super(...arguments);
        this._deltaX = 0;
        this._deltaY = 0;
    }
    get deltaX() {
        return this._deltaX;
    }
    set deltaX(a) {
        this._deltaX = a;
    }
    get deltaY() {
        return this._deltaY;
    }
    set deltaY(a) {
        this._deltaY = a;
    }
}
ScrollerScrollingEventArgs.$t = markType(ScrollerScrollingEventArgs, 'ScrollerScrollingEventArgs', EventArgs.$);
//# sourceMappingURL=ScrollerScrollingEventArgs.js.map