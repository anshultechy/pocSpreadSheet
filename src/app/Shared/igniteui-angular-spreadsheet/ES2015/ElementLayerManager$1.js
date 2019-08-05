/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, fromEnum, markType } from "../../igniteui-angular-core/ES2015/type";
import { List$1 } from "../../igniteui-angular-core/ES2015/List$1";
import { ElementLayer$1 } from "./ElementLayer$1";
import { CoreUtilities } from "./CoreUtilities";
import { ElementLayerInfo } from "./ElementLayerInfo";
import { Dictionary$2 } from "../../igniteui-angular-core/ES2015/Dictionary$2";
import { ISupportPositioning_$type } from "./ISupportPositioning";
import { ElementLayerInfo_ElementOrderInfo } from "./ElementLayerInfo_ElementOrderInfo";
import { Enumerable } from "../../igniteui-angular-core/ES2015/Enumerable";
import { PositionSorter } from "./PositionSorter";
/**
 * @hidden
 */
export class ElementLayerManager$1 extends Base {
    constructor($tViewModel, a, b) {
        super();
        this.$tViewModel = null;
        this.b = null;
        this.g = null;
        this.e = null;
        this.c = null;
        this.f = null;
        this.$tViewModel = $tViewModel;
        this.$type = this.$type.specialize(this.$tViewModel);
        CoreUtilities.y(a);
        CoreUtilities.y(b);
        this.b = a;
        this.g = b;
        this.e = new Dictionary$2(String_$type, ElementLayer$1.$.specialize(this.$tViewModel), 2, ElementLayerInfo.e);
        this.f = new List$1(ElementLayer$1.$.specialize(this.$tViewModel), 0);
    }
    get d() {
        return this.c;
    }
    a(a) {
        CoreUtilities.z(a, "info");
        let b;
        if (!((() => { let c = this.e.tryGetValue(a.g, b); b = c.p1; return c.ret; })())) {
            return null;
        }
        return b;
    }
    k(a = null) {
        for (let b of fromEnum(this.f)) {
            if (a == null || a(b._b)) {
                b._f();
            }
        }
    }
    i(a) {
        this.h();
        this.c = a;
        this.j();
    }
    h() {
        let a = this.f.toArray();
        this.f.clear();
        this.e.clear();
        for (let c = 0; c < a.length; c++) {
            let b = a[c];
            this.c.removeChild(b);
            b.dispose();
            b._d.detach(b);
        }
    }
    j() {
        this.h();
        if (this.c == null) {
            return;
        }
        let a = this.g(this.b);
        let b = Enumerable.g(ElementLayer$1.$.specialize(this.$tViewModel), String_$type, a, (c) => c._b.g);
        let c = Enumerable.z(ISupportPositioning_$type, Enumerable.h(ISupportPositioning_$type, Enumerable.o(ElementLayer$1.$.specialize(this.$tViewModel), ElementLayerInfo_ElementOrderInfo.$, a, (d) => d._b.d)));
        for (let d of fromEnum(b)) {
            this.e.item(d.key, d.value);
        }
        let e;
        let f = PositionSorter.n(c, e);
        e = f.p1;
        for (let g = c.count - 1; g >= 0; g--) {
            let h = c._inner[g];
            let i = this.e.item(h.key);
            this.f.add(i);
            i._d.attach(i);
            this.c.addChild(i);
        }
    }
}
ElementLayerManager$1.$t = markType(ElementLayerManager$1, 'ElementLayerManager$1');
//# sourceMappingURL=ElementLayerManager$1.js.map
