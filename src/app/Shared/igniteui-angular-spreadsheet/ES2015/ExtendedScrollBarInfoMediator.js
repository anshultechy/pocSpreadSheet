/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { ScrollBarInfoMediator } from "./ScrollBarInfoMediator";
import { runOn, markType } from "../../igniteui-angular-core/ES2015/type";
import { ExtendedScrollArrowHelper } from "./ExtendedScrollArrowHelper";
/**
 * @hidden
 */
export class ExtendedScrollBarInfoMediator extends ScrollBarInfoMediator {
    constructor(a) {
        super(a);
        this.r = null;
        this.r = new ExtendedScrollArrowHelper(runOn(a, a._ao));
        this.r.d = a;
    }
    k() {
        super.k();
        this.r.d = null;
        this.r.b = null;
    }
    m(a, b) {
        if (this.r.d != null) {
            this.r.b = b;
        }
    }
}
ExtendedScrollBarInfoMediator.$t = markType(ExtendedScrollBarInfoMediator, 'ExtendedScrollBarInfoMediator', ScrollBarInfoMediator.$);
//# sourceMappingURL=ExtendedScrollBarInfoMediator.js.map