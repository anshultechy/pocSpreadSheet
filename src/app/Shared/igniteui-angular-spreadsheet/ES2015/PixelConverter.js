/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, Nullable$1, Number_$type, markType } from "../../igniteui-angular-core/ES2015/type";
import { CoreUtilities } from "./CoreUtilities";
import { nullableNotEquals } from "../../igniteui-angular-core/ES2015/nullable";
/**
 * @hidden
 */
export class PixelConverter extends Base {
    constructor() {
        super(...arguments);
        this.b = 1;
        this.a = 0.5;
    }
    get d() {
        return this.b;
    }
    set d(a) {
        this.b = a;
        this.a = a / 2;
    }
    c(a, b = false) {
        let c = a % this.b;
        if (CoreUtilities.c(c, 0)) {
            return 0;
        }
        if (CoreUtilities.c(Math.abs(c), this.b)) {
            return 0;
        }
        if (false == b) {
            if (Math.abs(c) < this.a) {
                return -c;
            }
            return (Math.sign(c) * this.b) - c;
        }
        else {
            if (c < 0) {
                return -c;
            }
            return this.b - c;
        }
    }
    f(a, b = Nullable$1.toNullable(Number_$type, null)) {
        if (nullableNotEquals(b, null)) {
            return this.e(Math.max(a, b.value));
        }
        return this.e(a);
    }
    e(a) {
        return a + this.c(a);
    }
    h(a) {
        return a + this.c(a, true);
    }
    g(a) {
        return a + this.c(a, false);
    }
}
PixelConverter.$t = markType(PixelConverter, 'PixelConverter');
//# sourceMappingURL=PixelConverter.js.map