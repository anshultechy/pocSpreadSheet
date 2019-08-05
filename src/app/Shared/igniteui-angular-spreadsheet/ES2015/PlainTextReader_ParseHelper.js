/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, Array_$type, markType } from "../../igniteui-angular-core/ES2015/type";
import { StringBuilder } from "../../igniteui-angular-core/ES2015/StringBuilder";
import { List$1 } from "../../igniteui-angular-core/ES2015/List$1";
import { intDivide } from "../../igniteui-angular-core/ES2015/number";
import { stringEmpty } from "../../igniteui-angular-core/ES2015/string";
/**
 * @hidden
 */
export class PlainTextReader_ParseHelper extends Base {
    constructor(a, b) {
        super();
        this.g = null;
        this.j = 0;
        this.e = '\0';
        this.f = null;
        this.k = null;
        this.d = false;
        this.h = 0;
        this.b = 0;
        this.e = a;
        this.d = b;
        this.k = new StringBuilder(0);
        this.f = new List$1(String_$type, 0);
        this.g = new List$1(Array_$type, 0);
        this.b = 0;
    }
    get c() {
        return this.b;
    }
    get i() {
        return this.k.c;
    }
    l(a) {
        if (this.b == 0) {
            this.b = 2;
        }
        this.h = 0;
        this.k.h(a);
    }
    n(a = false) {
        if (this.b != 0 || (a == false && this.d == false)) {
            if (this.k.c == 0) {
                this.f.add(stringEmpty());
            }
            else {
                this.f.add(this.k.toString());
            }
        }
        if (a == false && this.k.c == 0) {
            this.h++;
        }
        this.k.v();
        this.b = 0;
    }
    o() {
        if (this.f.count > 0) {
            this.g.add(this.f.toArray());
            this.f.clear();
        }
        else if (this.b != 0 || this.h > 0) {
            this.g.add(PlainTextReader_ParseHelper.a);
        }
        this.h = 0;
    }
    m() {
        this.p();
        this.n(true);
        this.o();
    }
    p() {
        if (this.j > 0) {
            switch (this.b) {
                case 0:
                    if (this.j % 2 == 1) {
                        this.b = 1;
                    }
                    else {
                        this.j -= 2;
                        this.b = 2;
                    }
                    if (this.j > 1) {
                        this.k.i(this.e, intDivide(this.j, 2));
                    }
                    break;
                case 1:
                    if (this.j % 2 == 1) {
                        this.b = 2;
                    }
                    if (this.j > 1) {
                        this.k.i(this.e, intDivide(this.j, 2));
                    }
                    break;
                case 2:
                    this.k.i(this.e, this.j);
                    break;
            }
            this.j = 0;
        }
    }
}
PlainTextReader_ParseHelper.$t = markType(PlainTextReader_ParseHelper, 'PlainTextReader_ParseHelper');
PlainTextReader_ParseHelper.a = [stringEmpty()];
//# sourceMappingURL=PlainTextReader_ParseHelper.js.map