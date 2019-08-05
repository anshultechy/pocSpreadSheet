/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { ArgumentException } from "./ArgumentException";
import { markType } from "./type";
/**
 * @hidden
 */
export class ArgumentOutOfRangeException extends ArgumentException {
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
                    super(1, c + " is out of range.");
                }
                break;
            case 2:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    super(1, d);
                }
                break;
            case 3:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    let e = _rest[2];
                    let f = [e, c];
                    {
                        let h = f[0];
                        let i = f[1];
                        super(1, i);
                    }
                }
                break;
            case 4:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    super(3, c, d);
                }
                break;
        }
    }
}
ArgumentOutOfRangeException.$t = markType(ArgumentOutOfRangeException, 'ArgumentOutOfRangeException', ArgumentException.$);
//# sourceMappingURL=ArgumentOutOfRangeException.js.map