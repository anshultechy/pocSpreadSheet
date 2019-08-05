/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { MouseEventArgs } from "./MouseEventArgs";
import { markType } from "./type";
/**
 * @hidden
 */
export class MouseButtonEventArgs extends MouseEventArgs {
    constructor() {
        super(...arguments);
        this._handled = false;
    }
    get handled() {
        return this._handled;
    }
    set handled(a) {
        this._handled = a;
    }
}
MouseButtonEventArgs.$t = markType(MouseButtonEventArgs, 'MouseButtonEventArgs', MouseEventArgs.$);
//# sourceMappingURL=MouseButtonEventArgs.js.map