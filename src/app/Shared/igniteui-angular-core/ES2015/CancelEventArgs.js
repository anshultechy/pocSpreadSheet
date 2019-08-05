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
export class CancelEventArgs extends EventArgs {
    constructor(a, ..._rest) {
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    super();
                    this._cancel = false;
                }
                break;
            case 1:
                {
                    let c = _rest[0];
                    super();
                    this._cancel = false;
                }
                break;
        }
    }
    get cancel() {
        return this._cancel;
    }
    set cancel(a) {
        this._cancel = a;
    }
}
CancelEventArgs.$t = markType(CancelEventArgs, 'CancelEventArgs', EventArgs.$);
//# sourceMappingURL=CancelEventArgs.js.map