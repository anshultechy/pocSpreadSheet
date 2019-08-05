/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Type, Base, markType } from "./type";
import { stringEmpty } from "./string";
/**
 * @hidden
 */
export let ICredentials_$type = new Type(null, 'ICredentials');
/**
 * @hidden
 */
export class NetworkCredential extends Base {
    constructor(a, ..._rest) {
        super();
        this.c = null;
        this.b = null;
        this.a = null;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    let e = [c, d, stringEmpty()];
                    {
                        let g = e[0];
                        let h = e[1];
                        let i = e[2];
                        this.c = g;
                        this.b = h;
                        this.a = i;
                    }
                }
                break;
            case 1:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    let e = _rest[2];
                    this.c = c;
                    this.b = d;
                    this.a = e;
                }
                break;
        }
    }
    getCredential(a, b) {
        return this;
    }
}
NetworkCredential.$t = markType(NetworkCredential, 'NetworkCredential', Base.$, [ICredentials_$type]);
//# sourceMappingURL=ICredentials_combined.js.map