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
export class ArgumentException extends BaseError {
    constructor(a, ..._rest) {
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    super(0);
                }
                break;
            case 1:
                {
                    let c = _rest[0];
                    super(1, c);
                }
                break;
            case 2:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    super(1, c);
                }
                break;
            case 3:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    super(2, c, d);
                }
                break;
        }
    }
}
ArgumentException.$t = markType(ArgumentException, 'ArgumentException', BaseError.$);
//# sourceMappingURL=ArgumentException.js.map