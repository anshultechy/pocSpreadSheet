/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { BaseError, markType } from "./type";
/**
 * @hidden
 */
export class FaultException extends BaseError {
    constructor(a, b, c) {
        super(0);
        this._action = null;
        this._code = null;
        this._reason = null;
        this.reason = a;
        this.code = b;
        this.action = c;
    }
    get action() {
        return this._action;
    }
    set action(a) {
        this._action = a;
    }
    get code() {
        return this._code;
    }
    set code(a) {
        this._code = a;
    }
    get reason() {
        return this._reason;
    }
    set reason(a) {
        this._reason = a;
    }
}
FaultException.$t = markType(FaultException, 'FaultException', BaseError.$);
//# sourceMappingURL=FaultException.js.map