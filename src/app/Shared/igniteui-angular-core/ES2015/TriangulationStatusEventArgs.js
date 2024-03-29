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
export class TriangulationStatusEventArgs extends EventArgs {
    constructor(a) {
        super();
        this._currentStatus = 0;
        this.currentStatus = a;
    }
    get currentStatus() {
        return this._currentStatus;
    }
    set currentStatus(a) {
        this._currentStatus = a;
    }
}
TriangulationStatusEventArgs.$t = markType(TriangulationStatusEventArgs, 'TriangulationStatusEventArgs', EventArgs.$);
//# sourceMappingURL=TriangulationStatusEventArgs.js.map