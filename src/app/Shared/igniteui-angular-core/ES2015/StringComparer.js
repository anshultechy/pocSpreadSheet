/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, IEqualityComparer_$type, IEqualityComparer$1_$type, typeCast, String_$type, markType } from "./type";
import { IComparer_$type } from "./IComparer";
import { IComparer$1_$type } from "./IComparer$1";
import { CultureInfo } from "./culture";
import { stringCompare1 } from "./stringExtended";
/**
 * @hidden
 */
export class StringComparer extends Base {
    constructor(a, ..._rest) {
        super();
        this.h = 0;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0: break;
            case 1:
                {
                    let c = _rest[0];
                    this.h = c;
                }
                break;
        }
    }
    compareObject(a, b) {
        return stringCompare1(typeCast(String_$type, a), typeCast(String_$type, b), this.h);
    }
    compare(a, b) {
        return stringCompare1(a, b, this.h);
    }
    static a(a, b) {
        if (a.name == CultureInfo.invariantCulture.name) {
            return b ? StringComparer.e : StringComparer.d;
        }
        return b ? StringComparer.c : StringComparer.b;
    }
    equalsC(a, b) {
        return this.compare(a, b) == 0;
    }
    getHashCodeC(a) {
        if (a == null) {
            return 0;
        }
        switch (this.h) {
            case 0:
            case 2:
            case 4: return Base.getHashCodeStatic(a);
            case 1: return Base.getHashCodeStatic(a.toLowerCase());
            case 3:
            case 5: return Base.getHashCodeStatic(a.toLowerCase());
            default: return 0;
        }
    }
}
StringComparer.$t = markType(StringComparer, 'StringComparer', Base.$, [IComparer_$type, IEqualityComparer_$type, IComparer$1_$type.specialize(String_$type), IEqualityComparer$1_$type.specialize(String_$type)]);
StringComparer.b = new StringComparer(1, 0);
StringComparer.c = new StringComparer(1, 1);
StringComparer.d = new StringComparer(1, 2);
StringComparer.e = new StringComparer(1, 3);
StringComparer.f = new StringComparer(1, 4);
StringComparer.g = new StringComparer(1, 5);
//# sourceMappingURL=StringComparer.js.map