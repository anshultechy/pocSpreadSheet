/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, markType } from "../../igniteui-angular-core/ES2015/type";
import { CoreUtilities } from "./CoreUtilities";
import { Environment } from "../../igniteui-angular-core/ES2015/Environment";
import { nullableNotEquals } from "../../igniteui-angular-core/ES2015/nullable";
import { stringCreateFromChar, stringIsNullOrEmpty } from "../../igniteui-angular-core/ES2015/string";
import { indexOfAny } from "../../igniteui-angular-core/ES2015/stringExtended";
/**
 * @hidden
 */
export class PlainTextWriter extends Base {
    constructor(a, b, c) {
        super();
        this.d = false;
        this.f = '\0';
        this.j = null;
        this.i = null;
        this.e = '\0';
        this.h = null;
        this.a = null;
        this.g = 0;
        this.b = false;
        this.c = false;
        CoreUtilities.y(a);
        this.d = nullableNotEquals(b, null);
        this.f = this.d ? b.value : '\0';
        this.e = c;
        this.h = a;
        this.a = ['\r', '\n', c];
        this.b = Environment.newLine == "\n";
        this.j = stringCreateFromChar(this.f, 1);
        this.i = stringCreateFromChar(this.f, 2);
    }
    l(a) {
        if (this.c) {
            this.k(false);
        }
        for (let b = 0; b < a; b++) {
            this.h.o(this.e);
        }
        this.g += a + 1;
    }
    m(a) {
        if (this.c) {
            this.k(false);
        }
        if (++this.g > 1) {
            this.h.o(this.e);
        }
        let b;
        let c = -1;
        if (b = this.d && stringIsNullOrEmpty(a) == false && (c = indexOfAny(a, this.a)) >= 0) {
            this.h.o(this.f);
        }
        if (b && c >= 0 && (a.charAt(c) == this.f || (c = a.indexOf(this.f, c)) >= 0)) {
            let d = 0;
            do {
                for (let e = d; e <= c; e++) {
                    this.h.o(a.charAt(e));
                }
                this.h.o(this.f);
                c++;
                d = c;
            } while ((c = a.indexOf(this.f, c)) >= 0);
            for (let f = d; f < a.length; f++) {
                this.h.o(a.charAt(f));
            }
        }
        else {
            this.h.v(a);
        }
        if (b) {
            this.h.o(this.f);
        }
    }
    k(a = true) {
        if (this.g > 0) {
            if (this.b && a) {
                this.c = true;
            }
            else {
                this.c = false;
                this.h.v(Environment.newLine);
                this.g = 0;
            }
        }
    }
}
PlainTextWriter.$t = markType(PlainTextWriter, 'PlainTextWriter');
//# sourceMappingURL=PlainTextWriter.js.map