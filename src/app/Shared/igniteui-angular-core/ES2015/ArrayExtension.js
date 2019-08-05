/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, getBoxIfEnum, Type, markType } from "./type";
import { Random } from "./Random";
import { intDivide } from "./number";
import { CompareUtil } from "./compareUtil";
/**
 * @hidden
 */
export class ArrayExtension extends Base {
    static shuffle$1($t, a) {
        if (a != null) {
            let b = new Random(0);
            for (let c = a.count - 1; c > 0; --c) {
                let d = b.next1(c);
                let e = a.item(c);
                a.item(c, a.item(d));
                a.item(d, e);
            }
        }
    }
    static insertionIndex$1($t, a, b) {
        let c = -1;
        let d = 0;
        let e = a.count;
        while (c == -1) {
            if (e <= d) {
                c = d;
            }
            else {
                let f = intDivide((d + e), 2);
                switch (Math.sign(CompareUtil.compareToObject(b, getBoxIfEnum($t, a.item(f))))) {
                    case -1:
                        e = f;
                        break;
                    case 0:
                        c = f;
                        break;
                    case 1:
                        d = f + 1;
                        break;
                }
            }
        }
        return c;
    }
    static insertionIndex$11($t, a, b, c) {
        let d = -1;
        let e = 0;
        let f = a.count;
        while (d == -1) {
            if (f <= e) {
                d = e;
            }
            else {
                let g = intDivide((e + f), 2);
                switch (Math.sign(b(c, a.item(g)))) {
                    case -1:
                        f = g;
                        break;
                    case 0:
                        d = g;
                        break;
                    case 1:
                        e = g + 1;
                        break;
                }
            }
        }
        return d;
    }
    static binarySearch$11($t, a, b) {
        let c = 0;
        let d = a.count - 1;
        while (c <= d) {
            let e = (c + ((d - c) >> 1));
            let f = b(a.item(e));
            if (f < 0) {
                d = e - 1;
            }
            else if (f > 0) {
                c = e + 1;
            }
            else {
                return e;
            }
        }
        return ~c;
    }
    static binarySearch$1($t, a, b) {
        let c = 0;
        let d = a.count - 1;
        while (c <= d) {
            let e = (c + ((d - c) >> 1));
            let f = b(a.item(e));
            if (f < 0) {
                d = e - 1;
            }
            else if (f > 0) {
                c = e + 1;
            }
            else {
                return e;
            }
        }
        return ~c;
    }
    static getModulus$1($t, a, b) {
        if (a == null) {
            return Type.getDefaultValue($t);
        }
        if (a.count == 0) {
            return Type.getDefaultValue($t);
        }
        return a.item(b % a.count);
    }
}
ArrayExtension.$t = markType(ArrayExtension, 'ArrayExtension');
//# sourceMappingURL=ArrayExtension.js.map