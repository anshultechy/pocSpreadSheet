/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, IEnumerable$1_$type, IList$1_$type, IComparable_$type, fromEnum, toEnum, typeCast, typeCastObjTo$t, fromEn, Type, getBoxIfEnum, Number_$type, markType, getEnumerator } from "./type";
import { SortedList$1 } from "./SortedList$1";
import { List$1 } from "./List$1";
import { ArgumentNullException } from "./ArgumentNullException";
import { Dictionary$2 } from "./Dictionary$2";
import { NotImplementedException } from "./NotImplementedException";
import { stringToString$1, stringCompareTo } from "./string";
import { CompareUtil } from "./compareUtil";
/**
 * @hidden
 */
export class Enumerable extends Base {
    static *_u($tSource, a, b) {
        for (let c of fromEnum(a)) {
            if (b(c)) {
                yield c;
            }
        }
    }
    static u($tSource, a, b) {
        return toEnum(() => Enumerable._u($tSource, a, b));
    }
    static *_v($tSource, a, b) {
        let c = 0;
        for (let d of fromEnum(a)) {
            if (b(d, c)) {
                yield d;
            }
            c++;
        }
    }
    static v($tSource, a, b) {
        return toEnum(() => Enumerable._v($tSource, a, b));
    }
    static *_o($tSource, $tResult, a, b) {
        for (let c of fromEnum(a)) {
            yield b(c);
        }
    }
    static o($tSource, $tResult, a, b) {
        return toEnum(() => Enumerable._o($tSource, $tResult, a, b));
    }
    static *_p($tSource, $tResult, a, b) {
        for (let c of fromEnum(a)) {
            for (let d of fromEnum(b(c))) {
                yield d;
            }
        }
    }
    static p($tSource, $tResult, a, b) {
        return toEnum(() => Enumerable._p($tSource, $tResult, a, b));
    }
    static *_l($tResult, a) {
        for (let b of fromEn(a)) {
            if (typeCast($tResult, b) !== null) {
                yield typeCastObjTo$t($tResult, b);
            }
        }
    }
    static l($tResult, a) {
        return toEnum(() => Enumerable._l($tResult, a));
    }
    static ah($tSource, a) {
        let b = typeCast(IList$1_$type.specialize($tSource), a);
        if (b != null) {
            return b.item(b.count - 1);
        }
        let c = Type.getDefaultValue($tSource);
        for (let d of fromEnum(a)) {
            c = d;
        }
        return c;
    }
    static ad($tSource, a) {
        for (let b of fromEnum(a)) {
            return b;
        }
        return Type.getDefaultValue($tSource);
    }
    static ae($tSource, a, b) {
        for (let c of fromEnum(a)) {
            if (b(c)) {
                return c;
            }
        }
        return Type.getDefaultValue($tSource);
    }
    static af($tSource, a) {
        for (let b of fromEnum(a)) {
            return b;
        }
        return Type.getDefaultValue($tSource);
    }
    static x($tSource, $tKey, a, b) {
        let c = new SortedList$1($tSource, a);
        c.aa((d, e) => {
            let f = d;
            let g = e;
            let h = b(f);
            let i = b(g);
            if (typeCast(IComparable_$type, h) !== null) {
                return CompareUtil.compareToObject((typeCast(IComparable_$type, h)), getBoxIfEnum($tKey, i));
            }
            else {
                return stringCompareTo(stringToString$1($tKey, h), stringToString$1($tKey, i));
            }
        });
        return c;
    }
    static y($tSource, $tKey, a, b) {
        let c = new SortedList$1($tSource, a);
        c.aa((d, e) => {
            let f = e;
            let g = d;
            let h = b(f);
            let i = b(g);
            if (typeCast(IComparable_$type, h) !== null) {
                return CompareUtil.compareToObject((typeCast(IComparable_$type, h)), getBoxIfEnum($tKey, i));
            }
            else {
                return stringCompareTo(stringToString$1($tKey, h), stringToString$1($tKey, i));
            }
        });
        return c;
    }
    static z($tSource, a) {
        let b = new List$1($tSource, 1, a);
        return b;
    }
    static *_m(a, b) {
        for (let c = a; c < b; c++) {
            yield c;
        }
    }
    static m(a, b) {
        return toEnum(() => Enumerable._m(a, b));
    }
    static *_i($tSource, a, b) {
        for (let c of fromEnum(a)) {
            yield c;
        }
        for (let d of fromEnum(b)) {
            yield d;
        }
    }
    static i($tSource, a, b) {
        return toEnum(() => Enumerable._i($tSource, a, b));
    }
    static ak(a) {
        let b = true;
        let c = 0;
        for (let d of fromEnum(a)) {
            if (b) {
                b = false;
                c = d;
            }
            else {
                c = Math.max(c, d);
            }
        }
        return c;
    }
    static al($tSource, a, b) {
        return Enumerable.ak(Enumerable.o($tSource, Number_$type, a, b));
    }
    static am(a) {
        let b = true;
        let c = 0;
        for (let d of fromEnum(a)) {
            if (b) {
                b = false;
                c = d;
            }
            else {
                c = Math.min(c, d);
            }
        }
        return c;
    }
    static an($tSource, a, b) {
        return Enumerable.ak(Enumerable.o($tSource, Number_$type, a, b));
    }
    static aj($tSource, a) {
        let b = 0;
        for (let c of fromEnum(a)) {
            b++;
        }
        return b;
    }
    static *_n($tSource, a) {
        let b = new List$1($tSource, 1, a);
        for (let c = b.count - 1; c >= 0; c--) {
            yield b._inner[c];
        }
    }
    static n($tSource, a) {
        return toEnum(() => Enumerable._n($tSource, a));
    }
    static h($tResult, a) {
        if (a == null) {
            throw new ArgumentNullException(0, "source");
        }
        let b = typeCast(IEnumerable$1_$type.specialize($tResult), a);
        if (b != null) {
            return b;
        }
        let c = new List$1($tResult, 0);
        for (let d of fromEn(a)) {
            if (typeCast($tResult, d) !== null) {
                c.add(typeCastObjTo$t($tResult, d));
            }
            else {
                c.add(Type.getDefaultValue($tResult));
            }
        }
        return c;
    }
    static *_s($tSource, a, b) {
        for (let c of fromEnum(a)) {
            if (b > 0) {
                b--;
                yield c;
            }
            else {
                return undefined;
            }
        }
    }
    static s($tSource, a, b) {
        return toEnum(() => Enumerable._s($tSource, a, b));
    }
    static *_r($tSource, a, b) {
        for (let c of fromEnum(a)) {
            if (b <= 0) {
                yield c;
            }
            else {
                b--;
            }
        }
    }
    static r($tSource, a, b) {
        return toEnum(() => Enumerable._r($tSource, a, b));
    }
    static c($tSource, a) {
        for (let b of fromEnum(a)) {
            return true;
        }
        return false;
    }
    static e($tSource, a, value_) {
        for (let item_ of fromEnum(a)) {
            if (item_ === value_) {
                return true;
            }
            ;
        }
        return false;
    }
    static t($tSource, a, b) {
        return null;
    }
    static a($tSource, a) {
        let b = typeCast(List$1.$.specialize($tSource), a);
        if (b != null) {
            return b.toArray();
        }
        b = new List$1($tSource, 1, a);
        return b.asArray();
    }
    static ac($tSource, a, b) {
        let c = typeCast(IList$1_$type.specialize($tSource), a);
        if (c != null) {
            return c.item(b);
        }
        return Enumerable.ad($tSource, Enumerable.r($tSource, a, b));
    }
    static aa(a) {
        let b = 0;
        for (let c of fromEnum(a)) {
            b += c;
        }
        return b;
    }
    static ab($tSource, a, b) {
        return Enumerable.aa(Enumerable.o($tSource, Number_$type, a, b));
    }
    static f($tSource, a, b) {
        if (a == null) {
            throw new ArgumentNullException(0, "first");
        }
        if (b == null) {
            throw new ArgumentNullException(0, "second");
        }
        let c = getEnumerator(a);
        let d = getEnumerator(b);
        {
            while (c.moveNext()) {
                if (!d.moveNext() || !Base.equalsStatic(getBoxIfEnum($tSource, c.current), getBoxIfEnum($tSource, d.current))) {
                    return false;
                }
            }
            return (d.moveNext() == false);
        }
    }
    static *_k($tSource) {
        return undefined;
    }
    static k($tSource) {
        return toEnum(() => Enumerable._k($tSource));
    }
    static *_q($tSource, $tCollection, $tResult, a, b, c) {
        for (let d of fromEnum(a)) {
            for (let e of fromEnum(b(d))) {
                yield c(d, e);
            }
        }
    }
    static q($tSource, $tCollection, $tResult, a, b, c) {
        return toEnum(() => Enumerable._q($tSource, $tCollection, $tResult, a, b, c));
    }
    static d($tSource, a, b) {
        for (let c of fromEnum(a)) {
            if (b(c)) {
                return true;
            }
        }
        return false;
    }
    static ag($tSource, a, b) {
        for (let c of fromEnum(a)) {
            if (b(c)) {
                return c;
            }
        }
        return Type.getDefaultValue($tSource);
    }
    static b($tSource, a, b) {
        for (let c of fromEnum(a)) {
            if (b(c) == false) {
                return false;
            }
        }
        return true;
    }
    static g($tSource, $tKey, a, b) {
        let c = new Dictionary$2($tKey, $tSource, 0);
        for (let d of fromEnum(a)) {
            c.item(b(d), d);
        }
        return c;
    }
    static ai($tSource, a) {
        throw new NotImplementedException(0);
    }
    static w($tFirst, $tSecond, $tResult, a, b, c) {
        throw new NotImplementedException(0);
    }
    static j($tSource, a) {
        throw new NotImplementedException(0);
    }
}
Enumerable.$t = markType(Enumerable, 'Enumerable');
//# sourceMappingURL=Enumerable.js.map