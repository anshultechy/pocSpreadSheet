/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { WorkbookSaveFilter, DefaultWorkbookSaveFilter, WorksheetRow } from "../../igniteui-angular-excel/ES2015/excel.core";
import { Enumerable } from "../../igniteui-angular-core/ES2015/Enumerable";
import { fromEnum, toEnum, markType } from "../../igniteui-angular-core/ES2015/type";
/**
 * @hidden
 */
export class IGExcelSerializationProvider_SelectionWorkbookSaveFilter extends WorkbookSaveFilter {
    constructor(a) {
        super();
        this.f = null;
        this.f = a;
    }
    d(a) {
        if (this.g(a)) {
            return DefaultWorkbookSaveFilter.f.d(a);
        }
        let b = 0;
        let e = this.f.a.c;
        for (let d = 0; d < e.length; d++) {
            let c = e[d];
            b += Enumerable.aj(WorksheetRow.$, a._rows$i._m(c._i, c._h));
        }
        return b;
    }
    e(a) {
        if (this.g(a)) {
            return DefaultWorkbookSaveFilter.f.e(a);
        }
        return this.f.a.k;
    }
    *_a(a) {
        for (let b of fromEnum(a._mergedCellsRegions$i)) {
            if (this.f.a.f(b._h)) {
                yield b;
            }
        }
    }
    a(a) {
        return toEnum(() => this._a(a));
    }
    b(a, b) {
        if (this.g(a)) {
            return DefaultWorkbookSaveFilter.f.b(a, b);
        }
        if (b) {
            return this.i(a);
        }
        return this.h(a);
    }
    c(a) {
        return this.f.l;
    }
    k(a) {
    }
    l(a) {
    }
    *_h(a) {
        let b = a._rows$i;
        let c = -1;
        let f = this.f.a.c;
        for (let e = 0; e < f.length; e++) {
            let d = f[e];
            let g = IGExcelSerializationProvider_SelectionWorkbookSaveFilter.j(d._i, c, b);
            for (let h of fromEnum(b._m(g, d._h))) {
                yield h;
            }
            c = d._h;
        }
    }
    h(a) {
        return toEnum(() => this._h(a));
    }
    *_i(a) {
        let b = a._rows$i;
        let c = -1;
        let f = this.f.a.c;
        for (let e = 0; e < f.length; e++) {
            let d = f[e];
            let g = IGExcelSerializationProvider_SelectionWorkbookSaveFilter.j(d._i, c, b);
            for (let h = g, i = d._h; h <= i; h++) {
                yield b.item(h);
            }
            c = d._h;
        }
    }
    i(a) {
        return toEnum(() => this._i(a));
    }
    static j(a, b, c) {
        let d = a;
        if (d > b + 1) {
            let e = c._aj(d);
            if (e != null) {
                for (let f of fromEnum(e._ch(void 0, void 0, true))) {
                    if (f.o && f.p) {
                        let g = e._ar(f.r);
                        if (g._s == 1) {
                            let h = g;
                            d = Math.min(d, h.cellRange.firstRow);
                        }
                    }
                }
            }
            if (d < b + 1) {
                d = b + 1;
            }
        }
        return d;
    }
    g(a) {
        return this.f.e;
    }
}
IGExcelSerializationProvider_SelectionWorkbookSaveFilter.$t = markType(IGExcelSerializationProvider_SelectionWorkbookSaveFilter, 'IGExcelSerializationProvider_SelectionWorkbookSaveFilter', WorkbookSaveFilter.$);
//# sourceMappingURL=IGExcelSerializationProvider_SelectionWorkbookSaveFilter.js.map
