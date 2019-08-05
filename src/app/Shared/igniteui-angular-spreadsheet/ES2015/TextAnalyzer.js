/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, markType } from "../../igniteui-angular-core/ES2015/type";
import { StringBuilder } from "../../igniteui-angular-core/ES2015/StringBuilder";
import { stringIsNullOrEmpty, stringEmpty } from "../../igniteui-angular-core/ES2015/string";
/**
 * @hidden
 */
export class TextAnalyzer extends Base {
    constructor(a, b, c) {
        super();
        this.n = null;
        this.b = 0;
        this.c = 0;
        this.d = 0;
        this.k = null;
        this.m = null;
        this.l = null;
        this.n = a;
        this.b = b;
        this.d = Math.max(0, this.j - (b + c));
        this.c = c;
    }
    static a(a, b, c, d, e) {
        let f = a.length;
        let g = b + c <= f;
        if (g) {
            return new TextAnalyzer(a, b, f - c - b);
        }
        return new TextAnalyzer(a, d, e);
    }
    toString() {
        let a = new StringBuilder(0);
        a.l("'");
        a.l(this.n);
        a.l("' (");
        a.l(this.o);
        a.l(",");
        a.l(this.p);
        a.l(",");
        a.l(this.q);
        a.l(")");
        return a.toString();
    }
    get e() {
        return this.b;
    }
    get o() {
        if (this.k == null) {
            if (stringIsNullOrEmpty(this.n)) {
                this.k = stringEmpty();
            }
            else if (this.e == 0 || this.e > this.j) {
                this.k = stringEmpty();
            }
            else {
                this.k = this.n.substr(0, this.e);
            }
        }
        return this.k;
    }
    get p() {
        if (this.l == null) {
            if (stringIsNullOrEmpty(this.n)) {
                this.l = stringEmpty();
            }
            else if (this.f == 0 || this.e + this.f > this.j) {
                this.l = stringEmpty();
            }
            else {
                this.l = this.n.substr(this.e, this.f);
            }
        }
        return this.l;
    }
    get f() {
        return this.c;
    }
    get g() {
        return this.e;
    }
    get h() {
        return this.d;
    }
    get i() {
        return Math.max(-1, this.j - this.h);
    }
    get q() {
        if (this.m == null) {
            if (stringIsNullOrEmpty(this.n)) {
                this.m = stringEmpty();
            }
            else if (this.h == 0 || this.h > this.j) {
                this.m = stringEmpty();
            }
            else {
                this.m = this.n.substr(this.j - this.h, this.h);
            }
        }
        return this.m;
    }
    get j() {
        return this.n.length;
    }
}
TextAnalyzer.$t = markType(TextAnalyzer, 'TextAnalyzer');
//# sourceMappingURL=TextAnalyzer.js.map