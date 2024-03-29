/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, markType } from "./type";
import { stringEmpty } from "./string";
/**
 * @hidden
 */
export class DVSR extends Base {
    constructor(a) {
        super();
        this.a = null;
        this.a = a;
    }
    get container() {
        return this.a;
    }
    set container(a) {
        this.a = a;
    }
    getString(resourceName_) {
        let a = stringEmpty();
        resourceName_ = resourceName_.charAt(0).toLowerCase() + resourceName_.substr(1);
        a = this.a.getResourceString(resourceName_);
        return a;
    }
}
DVSR.$t = markType(DVSR, 'DVSR');
//# sourceMappingURL=DVSR.js.map