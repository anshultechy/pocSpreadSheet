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
export class IndexOutOfRangeException extends BaseError {
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
        }
    }
}
IndexOutOfRangeException.$t = markType(IndexOutOfRangeException, 'IndexOutOfRangeException', BaseError.$);
//# sourceMappingURL=IndexOutOfRangeException.js.map