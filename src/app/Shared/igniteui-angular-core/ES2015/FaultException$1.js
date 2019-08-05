/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { FaultException } from "./FaultException";
import { markType } from "./type";
/**
 * @hidden
 */
export class FaultException$1 extends FaultException {
    constructor($tDetail, a, b, c, d) {
        super(b, c, d);
        this.$tDetail = null;
        this._detail = null;
        this.$tDetail = $tDetail;
        this.$type = this.$type.specialize(this.$tDetail);
        this.detail = a;
    }
    get detail() {
        return this._detail;
    }
    set detail(a) {
        this._detail = a;
    }
}
FaultException$1.$t = markType(FaultException$1, 'FaultException$1', FaultException.$);
//# sourceMappingURL=FaultException$1.js.map