/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, markType } from "../../igniteui-angular-core/ES2015/type";
import { List$1 } from "../../igniteui-angular-core/ES2015/List$1";
/**
 * @hidden
 */
export class DropDownItem extends Base {
    constructor() {
        super();
        this.j = null;
        this.a = true;
        this.b = true;
        this.l = null;
        this.n = null;
        this.d = false;
        this.e = false;
        this.i = false;
        this.p = null;
        this.m = null;
    }
    get c() {
        return this.j != null && this.j.count > 0;
    }
    get f() {
        return this.a;
    }
    set f(a) {
        this.a = a;
    }
    get g() {
        return this.p == "-";
    }
    get h() {
        return this.b;
    }
    set h(a) {
        this.b = a;
    }
    get k() {
        if (this.j == null) {
            this.j = new List$1(DropDownItem.$, 0);
        }
        return this.j;
    }
}
DropDownItem.$t = markType(DropDownItem, 'DropDownItem');
//# sourceMappingURL=DropDownItem.js.map
