/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { LazyReadOnlyNotifyCollection$1 } from "./LazyReadOnlyNotifyCollection$1";
import { IntRange } from "./IntRange";
import { Base, typeCast, runOn, delegateCombine, markType } from "../../igniteui-angular-core/ES2015/type";
import { INotifyCollectionChanged_$type } from "../../igniteui-angular-core/ES2015/INotifyCollectionChanged";
import { CoreUtilities } from "./CoreUtilities";
import { List$1 } from "../../igniteui-angular-core/ES2015/List$1";
/**
 * @hidden
 */
export class AdapterIntRangeSet$1 extends LazyReadOnlyNotifyCollection$1 {
    constructor($tSource, a, b, c, d) {
        super(IntRange.$);
        this.$tSource = null;
        this._p = null;
        this._s = null;
        this._r = null;
        this._q = null;
        this.$tSource = $tSource;
        this.$type = this.$type.specialize(this.$tSource);
        CoreUtilities.z(a, "source");
        CoreUtilities.z(b, "getRange");
        let e = typeCast(INotifyCollectionChanged_$type, a);
        if (e != null) {
            e.collectionChanged = delegateCombine(e.collectionChanged, runOn(this, this._u));
        }
        this._p = a;
        this._s = b;
        this._r = c;
        if (d == null) {
            this._q = (f, g) => Base.compareSimple(g, f) <= 0;
        }
        else {
            this._q = d;
        }
    }
    _o(a) {
        a.clear();
        let b = this._p.count;
        if (b == 1) {
            let c = this._p.item(0);
            if (this._r == null || this._r(c)) {
                a.add(this._s(c));
            }
        }
        else if (b > 1) {
            let d = new List$1(IntRange.$, 2, b);
            for (let e = 0; e < b; e++) {
                let f = this._p.item(e);
                if (this._r == null || this._r(f)) {
                    d.add(this._s(f));
                }
            }
            b = d.count;
            if (b > 0) {
                let g = (h, i) => {
                    let j = Base.compareSimple(h._i, i._i);
                    if (j == 0) {
                        j = Base.compareSimple(h._h, i._h);
                    }
                    return j;
                };
                d.z(IntRange._g);
                let h = d._inner[0]._i;
                let i = d._inner[0]._h;
                for (let j = 1; j < b; j++) {
                    if (!this._q(i, d._inner[j]._i)) {
                        a.add(new IntRange(1, h, i));
                        h = d._inner[j]._i;
                        i = d._inner[j]._h;
                    }
                    else if (Base.compareSimple(i, d._inner[j]._h) < 0) {
                        i = d._inner[j]._h;
                    }
                }
                a.add(new IntRange(1, h, i));
            }
        }
    }
    _t() {
        this._h();
    }
    _u(a, b) {
        this._h();
    }
}
AdapterIntRangeSet$1.$t = markType(AdapterIntRangeSet$1, 'AdapterIntRangeSet$1', LazyReadOnlyNotifyCollection$1.$.specialize(IntRange.$));
//# sourceMappingURL=AdapterIntRangeSet$1.js.map
