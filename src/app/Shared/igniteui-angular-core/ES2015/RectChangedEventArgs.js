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
export class RectChangedEventArgs extends EventArgs {
    constructor(a, b) {
        super();
        this._oldRect = null;
        this._newRect = null;
        this.oldRect = a;
        this.newRect = b;
    }
    get oldRect() {
        return this._oldRect;
    }
    set oldRect(a) {
        this._oldRect = a;
    }
    get newRect() {
        return this._newRect;
    }
    set newRect(a) {
        this._newRect = a;
    }
}
RectChangedEventArgs.$t = markType(RectChangedEventArgs, 'RectChangedEventArgs', EventArgs.$);
//# sourceMappingURL=RectChangedEventArgs.js.map