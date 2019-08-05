/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { CellRegionMapBase } from "./CellRegionMapBase";
import { IntRange } from "./IntRange";
import { WorksheetRegionAddress } from "../../igniteui-angular-excel/ES2015/excel.core";
import { markType } from "../../igniteui-angular-core/ES2015/type";
/**
 * @hidden
 */
export class CellRegionMapSingle extends CellRegionMapBase {
    constructor(a) {
        super();
        this.p = new WorksheetRegionAddress();
        this.r = 0;
        this.q = 0;
        this.n = null;
        this.m = null;
        this.o = null;
        this.p = a;
        this.r = a._af;
        this.q = a._ad;
        this.n = [new IntRange(1, a._ac, a._ae)];
        this.m = [new IntRange(1, a._w, a._x)];
        this.o = [a];
    }
    f(a) {
        return this.p._h(a);
    }
    g(a) {
        return this.p._w + (a % this.r);
    }
    h(a) {
        return this.p._ac + (a % this.q);
    }
    e(a, b) {
        return this.p._i(a, b) ? this.p : WorksheetRegionAddress._b;
    }
    j(a) {
        return 0;
    }
    i(a) {
        return 0;
    }
    get_a() {
        return this.m;
    }
    get a() {
        return this.get_a();
    }
    get_c() {
        return this.n;
    }
    get c() {
        return this.get_c();
    }
    get_b() {
        return this.o;
    }
    get b() {
        return this.get_b();
    }
    get_l() {
        return this.r;
    }
    get l() {
        return this.get_l();
    }
    get_k() {
        return this.q;
    }
    get k() {
        return this.get_k();
    }
    d() {
        return this;
    }
}
CellRegionMapSingle.$t = markType(CellRegionMapSingle, 'CellRegionMapSingle', CellRegionMapBase.$);
//# sourceMappingURL=CellRegionMapSingle.js.map
