/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, markType } from "../../igniteui-angular-core/ES2015/type";
import { ISupportPositioning_$type } from "./ISupportPositioning";
import { stringEmpty } from "../../igniteui-angular-core/ES2015/string";
/**
 * @hidden
 */
export class PositionOrderHelper_EmptySortPosition$1 extends Base {
    constructor($tChild) {
        super();
        this.$tChild = null;
        this.$tChild = $tChild;
        this.$type = this.$type.specialize(this.$tChild);
    }
    get after() {
        return null;
    }
    get before() {
        return null;
    }
    get key() {
        return stringEmpty();
    }
}
PositionOrderHelper_EmptySortPosition$1.$t = markType(PositionOrderHelper_EmptySortPosition$1, 'PositionOrderHelper_EmptySortPosition$1', Base.$, [ISupportPositioning_$type]);
//# sourceMappingURL=PositionOrderHelper_EmptySortPosition$1.js.map