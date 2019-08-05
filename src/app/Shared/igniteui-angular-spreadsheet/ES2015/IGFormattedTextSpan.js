/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { IGFormattedTextElement } from "./IGFormattedTextElement";
import { List$1 } from "../../igniteui-angular-core/ES2015/List$1";
import { IGFormattedTextRun } from "./IGFormattedTextRun";
import { typeCast, markType } from "../../igniteui-angular-core/ES2015/type";
/**
 * @hidden
 */
export class IGFormattedTextSpan extends IGFormattedTextElement {
    constructor() {
        super(...arguments);
        this.h = new List$1(IGFormattedTextElement.$, 0);
    }
    c() {
        return super.c() || IGFormattedTextElement.d(IGFormattedTextElement.$, this.h);
    }
    g() {
        if (this.h.count == 0) {
            return this;
        }
        let a = typeCast(IGFormattedTextSpan.$, this.h._inner[this.h.count - 1]);
        if (a == null) {
            return this;
        }
        return a.g();
    }
    i() {
        for (let a = this.h.count - 1; a >= 0; a--) {
            let b = this.h._inner[a];
            let c = typeCast(IGFormattedTextSpan.$, b);
            if (c != null) {
                c.i();
                if (c.h.count == 0) {
                    this.h.removeAt(a);
                }
            }
        }
    }
    j(a, b) {
        for (let c = 0; c < this.h.count; c++) {
            let d = this.h._inner[c];
            if (d.b(a) || d.b(b)) {
                let e = typeCast(IGFormattedTextSpan.$, d);
                if (e != null) {
                    e.j(a, b);
                }
                else {
                    let f = typeCast(IGFormattedTextRun.$, d);
                    if (f != null) {
                        if (f.f < a) {
                            let g = f.e;
                            f.e = a - f.f;
                            let h = new IGFormattedTextRun();
                            h.f = a;
                            h.e = g - f.e;
                            h.a._aa(f.a);
                            f = h;
                            c++;
                            this.h.insert(c, f);
                        }
                        if (b < f.f + f.e - 1) {
                            let i = f.e;
                            f.e = b - f.f + 1;
                            let j = new IGFormattedTextRun();
                            j.f = b + 1;
                            j.e = i - f.e;
                            j.a._aa(f.a);
                            f = j;
                            c++;
                            this.h.insert(c, f);
                        }
                    }
                }
            }
        }
    }
}
IGFormattedTextSpan.$t = markType(IGFormattedTextSpan, 'IGFormattedTextSpan', IGFormattedTextElement.$);
//# sourceMappingURL=IGFormattedTextSpan.js.map