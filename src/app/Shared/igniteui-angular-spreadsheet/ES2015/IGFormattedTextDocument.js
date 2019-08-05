/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { IGFormattedTextElement } from "./IGFormattedTextElement";
import { List$1 } from "../../igniteui-angular-core/ES2015/List$1";
import { IGFormattedTextParagraph } from "./IGFormattedTextParagraph";
import { StringBuilder } from "../../igniteui-angular-core/ES2015/StringBuilder";
import { IGFormattedTextSettings } from "./IGFormattedTextSettings";
import { typeCast, fromEnum, markType } from "../../igniteui-angular-core/ES2015/type";
import { IGFormattedTextRun } from "./IGFormattedTextRun";
import { IGFormattedTextSpan } from "./IGFormattedTextSpan";
/**
 * @hidden
 */
export class IGFormattedTextDocument extends IGFormattedTextElement {
    constructor() {
        super();
        this.h = new List$1(IGFormattedTextParagraph.$, 0);
        this.i = new StringBuilder(0);
    }
    c() {
        return super.c() || IGFormattedTextElement.d(IGFormattedTextParagraph.$, this.h);
    }
    g() {
        let a = null;
        let b = this.n(a, this.h);
        a = b.p0;
        return a;
    }
    n(a, b) {
        for (let c of fromEnum(b)) {
            let d = typeCast(IGFormattedTextRun.$, c);
            if (d != null) {
                if (a == null) {
                    a = new IGFormattedTextSettings();
                    a._aa(d.a);
                }
                else {
                    a._w(d.a);
                }
            }
            else {
                let e = typeCast(IGFormattedTextSpan.$, c);
                if (e != null) {
                    let f = this.n(a, e.h);
                    a = f.p0;
                }
            }
        }
        return {
            p0: a
        };
    }
    l(a) {
        a(this.a);
        IGFormattedTextDocument.m(a, this.h);
    }
    static m(a, b) {
        for (let c of fromEnum(b)) {
            a(c.a);
            let d = typeCast(IGFormattedTextSpan.$, c);
            if (d != null) {
                IGFormattedTextDocument.m(a, d.h);
            }
        }
    }
    j(a, b, c) {
        IGFormattedTextDocument.k(a, b, c, this.h);
    }
    static k(a, b, c, d) {
        let e = false;
        let f = a + b - 1;
        for (let g of fromEnum(d)) {
            if (!e) {
                if (g.b(a)) {
                    e = true;
                }
            }
            if (e) {
                if (f < g.f) {
                    return;
                }
                let h = typeCast(IGFormattedTextRun.$, g);
                if (h != null) {
                    c(h);
                }
                else {
                    let i = typeCast(IGFormattedTextSpan.$, g);
                    if (i != null) {
                        IGFormattedTextDocument.k(a, b, c, i.h);
                    }
                }
            }
        }
    }
    o() {
        let a = this.i;
        let b = a.c;
        if (b > 0) {
            for (let c of fromEnum(this.h)) {
                c.i();
            }
            let d = this.h._inner[this.h.count - 1].g();
            if (d != null) {
                let e = typeCast(IGFormattedTextRun.$, d.h._inner[d.h.count - 1]);
                if (e.e > 0) {
                    let f = false;
                    if (a.item(e.f) == '\r') {
                        f = e.e == 1 || (e.e == 2 && a.item(e.f + 1) == '\n');
                    }
                    else if (a.item(e.f) == '\n') {
                        f = e.e == 1;
                    }
                    if (f) {
                        d.h.removeAt(d.h.count - 1);
                        a.y(b - e.e, e.e);
                    }
                    else {
                        let g = e.f + e.e - 1;
                        if (a.item(g) == '\r') {
                            e.e -= 1;
                        }
                        else if (a.item(g) == '\n' && e.e > 1 && a.item(g - 1) == '\r') {
                            e.e -= 2;
                        }
                    }
                }
            }
        }
    }
    p() {
        IGFormattedTextDocument.q(this.h, this.a);
    }
    static q(a, b) {
        for (let c of fromEnum(a)) {
            c.a._aa(b);
            if (typeCast(IGFormattedTextSpan.$, c) !== null) {
                IGFormattedTextDocument.q(c.h, c.a);
            }
        }
    }
    r(a, b) {
        let c = a + b - 1;
        for (let d of fromEnum(this.h)) {
            if (d.b(a) || d.b(c)) {
                d.j(a, c);
            }
        }
    }
}
IGFormattedTextDocument.$t = markType(IGFormattedTextDocument, 'IGFormattedTextDocument', IGFormattedTextElement.$);
//# sourceMappingURL=IGFormattedTextDocument.js.map