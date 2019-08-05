/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { ElementLayer } from "./ElementLayer";
import { CoreUtilities } from "./CoreUtilities";
import { markType } from "../../igniteui-angular-core/ES2015/type";
/**
 * @hidden
 */
export class ElementLayer$1 extends ElementLayer {
    constructor($tViewModel, a, b, c) {
        super(c, b);
        this.$tViewModel = null;
        this._i = null;
        this.$tViewModel = $tViewModel;
        this.$type = this.$type.specialize(this.$tViewModel);
        CoreUtilities.y(a);
        this._i = a;
    }
    get _j() {
        return this._i;
    }
}
ElementLayer$1.$t = markType(ElementLayer$1, 'ElementLayer$1', ElementLayer.$);
//# sourceMappingURL=ElementLayer$1.js.map
