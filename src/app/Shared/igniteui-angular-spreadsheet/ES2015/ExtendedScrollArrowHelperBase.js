/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, Nullable$1, typeCast, Number_$type, markType } from "../../igniteui-angular-core/ES2015/type";
import { ExtendedRangeScrollInfo } from "./ExtendedRangeScrollInfo";
import { CoreUtilities } from "./CoreUtilities";
/**
 * @hidden
 */
export class ExtendedScrollArrowHelperBase extends Base {
    constructor(a) {
        super();
        this.a = null;
        this.e = null;
        this.c = null;
        this.f = false;
        CoreUtilities.y(a);
        this.e = a;
    }
    get g() {
        return this.f;
    }
    get b() {
        return this.a;
    }
    set b(a) {
        if (a != this.a) {
            let b = this.a;
            this.a = a;
            this.h(b, this.a);
        }
    }
    get d() {
        return this.c;
    }
    set d(a) {
        if (a != this.c) {
            let b = this.c;
            this.c = a;
            if (this.g) {
                if (typeCast(ExtendedRangeScrollInfo.$, b) !== null) {
                    b._ay();
                }
                if (typeCast(ExtendedRangeScrollInfo.$, a) !== null) {
                    a._a0();
                }
            }
        }
    }
    i() {
        if (this.f) {
            this.f = false;
            if (typeCast(ExtendedRangeScrollInfo.$, this.c) !== null) {
                this.c._ay();
            }
        }
    }
    j(a = Nullable$1.toNullable(Number_$type, null)) {
        if (!this.f) {
            this.f = true;
            if (typeCast(ExtendedRangeScrollInfo.$, this.c) !== null) {
                this.c._a0(a);
            }
        }
    }
}
ExtendedScrollArrowHelperBase.$t = markType(ExtendedScrollArrowHelperBase, 'ExtendedScrollArrowHelperBase');
//# sourceMappingURL=ExtendedScrollArrowHelperBase.js.map