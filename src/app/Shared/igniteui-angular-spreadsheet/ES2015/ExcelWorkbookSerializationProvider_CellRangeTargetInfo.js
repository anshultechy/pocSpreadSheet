/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, Delegate_$type, fromEnum, markType } from "../../igniteui-angular-core/ES2015/type";
import { MDList$1 } from "./MDList$1";
import { Dictionary$2 } from "../../igniteui-angular-core/ES2015/Dictionary$2";
import { HashSet$1 } from "../../igniteui-angular-core/ES2015/HashSet$1";
import { intDivide } from "../../igniteui-angular-core/ES2015/number";
/**
 * @hidden
 */
export class ExcelWorkbookSerializationProvider_CellRangeTargetInfo extends Base {
    constructor(a, b, c) {
        super();
        this.e = null;
        this.d = null;
        this.a = null;
        this.b = null;
        this.c = null;
        this.e = a;
        this.d = c;
        this.c = b;
        this.a = new Array(b.length);
        this.b = new Array(this.a.length);
    }
    i(a, b, c, d, e) {
        if (this.a[a] == null) {
            let f = intDivide(this.c[a]._af, this.d.l);
            let g = intDivide(this.c[a]._ad, this.d.k);
            this.a[a] = new MDList$1(Dictionary$2.$.specialize(String_$type, String_$type), g, f);
            this.b[a] = new MDList$1(Delegate_$type, g, f);
        }
        let h = this.a[a];
        let i = h.item(b, c);
        if (i == null) {
            h.item(b, c, i = new Dictionary$2(String_$type, String_$type, 0));
            this.b[a].item(b, c, (j) => {
                let k;
                return ((() => { let l = i.tryGetValue(j, k); k = l.p1; return l.ret; })()) ? k : null;
            });
        }
        i.item(d.name, e);
    }
    f() {
        let a = new HashSet$1(String_$type, 0);
        for (let b = 0; b < this.a.length; b++) {
            let c = this.a[b];
            if (c != null) {
                for (let d = 0; d < c.i; d++) {
                    if (c.d(d)) {
                        for (let e = 0; e < c.h; e++) {
                            let f = c.item(d, e);
                            if (f != null) {
                                for (let g of fromEnum(f)) {
                                    a.add_1(g.value);
                                }
                            }
                        }
                    }
                }
            }
        }
        return a;
    }
    h(a, b, c) {
        let d = this.b[a];
        return d != null ? d.item(b, c) : null;
    }
    g(a, b, c) {
        let d = this.a[a];
        let e = d != null ? d.item(b, c) : null;
        return e != null ? e.values : null;
    }
}
ExcelWorkbookSerializationProvider_CellRangeTargetInfo.$t = markType(ExcelWorkbookSerializationProvider_CellRangeTargetInfo, 'ExcelWorkbookSerializationProvider_CellRangeTargetInfo');
//# sourceMappingURL=ExcelWorkbookSerializationProvider_CellRangeTargetInfo.js.map
