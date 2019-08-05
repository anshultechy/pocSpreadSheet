/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, markType } from "../../igniteui-angular-core/ES2015/type";
import { MDList$1 } from "./MDList$1";
import { SpreadsheetCellRenderInfo } from "./SpreadsheetCellRenderInfo";
/**
 * @hidden
 */
export class SpreadsheetCellRenderInfoArray extends Base {
    constructor(a, b) {
        super();
        this.a = null;
        this.h(a, b);
    }
    get e() {
        return this.a.h;
    }
    get f() {
        return this.a.i;
    }
    item(a, b) {
        return this.a.item(a, b) || SpreadsheetCellRenderInfoArray.b;
    }
    g(a, b, c, d) {
        if (this.a.item(a, b) == null && this.a.item(c, d) == null) {
            return;
        }
        let e = this.c(a, b);
        let f = this.c(c, d);
        f.f = e.f;
        f.g = e.g;
        f.a = e.a;
        f.c = e.c;
        f.l = e.l;
    }
    h(a, b) {
        if (this.a == null) {
            this.a = new MDList$1(SpreadsheetCellRenderInfo.$, a, b);
        }
        else {
            this.a.j(a, b);
        }
    }
    p(a, b, c, d) {
        if (c == 0 && this.a.item(a, b) == null) {
            return;
        }
        let e = this.c(a, b);
        e.e = c;
        e.n = d;
    }
    m(a, b, c, d) {
        if (c == 0 && this.a.item(a, b) == null) {
            return;
        }
        let e = this.c(a, b);
        e.d = c;
        e.m = d;
    }
    i(a, b, c) {
        if (c == null && this.a.item(a, b) == null) {
            return;
        }
        this.c(a, b).f = c;
    }
    k(a, b, c) {
        if (c == null && this.a.item(a, b) == null) {
            return;
        }
        this.c(a, b).g = c;
    }
    l(a, b, c, d, e) {
        if (c == 0 && this.a.item(a, b) == null) {
            return;
        }
        let f = this.c(a, b);
        f.a = c;
        f.c = d;
        f.l = e;
    }
    n(a, b, c) {
        if (c == 0 && this.a.item(a, b) == null) {
            return;
        }
        this.c(a, b).i = c;
    }
    o(a, b, c) {
        if (c == 0 && this.a.item(a, b) == null) {
            return;
        }
        this.c(a, b).j = c;
    }
    q(a, b, c) {
        if (c == 0 && this.a.item(a, b) == null) {
            return;
        }
        this.c(a, b).k = c;
    }
    j(a, b, c) {
        if (c == 0 && this.a.item(a, b) == null) {
            return;
        }
        this.c(a, b).h = c;
    }
    c(a, b) {
        let c = this.a.item(a, b);
        if (c == null) {
            this.a.item(a, b, c = SpreadsheetCellRenderInfo.b());
        }
        return c;
    }
}
SpreadsheetCellRenderInfoArray.$t = markType(SpreadsheetCellRenderInfoArray, 'SpreadsheetCellRenderInfoArray');
SpreadsheetCellRenderInfoArray.b = SpreadsheetCellRenderInfo.b();
//# sourceMappingURL=SpreadsheetCellRenderInfoArray.js.map