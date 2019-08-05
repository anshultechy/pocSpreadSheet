/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, IList$1_$type, IList_$type, ICollection$1_$type, ICollection_$type, Type, Nullable, NotSupportedException, typeCast, fromEnum, fromEn, typeCastObjTo$t, markType, EnumUtil, getBoxIfEnum, getEnumeratorObject, INotifyPropertyChanged_$type, runOn, delegateCombine } from "../../igniteui-angular-core/ES2015/type";
import { EqualityComparer$1 } from "../../igniteui-angular-core/ES2015/EqualityComparer$1";
import { Comparer$1 } from "../../igniteui-angular-core/ES2015/Comparer$1";
import { List$1 } from "../../igniteui-angular-core/ES2015/List$1";
import { SR } from "./SR";
import { ArgumentException } from "../../igniteui-angular-core/ES2015/ArgumentException";
import { ArgumentNullException } from "../../igniteui-angular-core/ES2015/ArgumentNullException";
import { intDivide } from "../../igniteui-angular-core/ES2015/number";
import { TypedEnumerable$1 } from "./TypedEnumerable$1";
import { TypedEnumerable_Enumerator$1 } from "./TypedEnumerable_Enumerator$1";
import { INotifyCollectionChanged_$type } from "../../igniteui-angular-core/ES2015/INotifyCollectionChanged";
/**
 * @hidden
 */
export class CoreUtilities extends Base {
    static j($t, a) {
        return new CoreUtilities_ObservableTypedList$1($t, a);
    }
    static c(a, b) {
        if (a == b) {
            return true;
        }
        return Math.abs(a - b) < 1E-10;
    }
    static h(a, b) {
        return a < b && !CoreUtilities.c(a, b);
    }
    static e(a, b) {
        return a > b && !CoreUtilities.c(a, b);
    }
    static i(a, b) {
        return a <= b || CoreUtilities.c(a, b);
    }
    static f(a, b) {
        return a >= b || CoreUtilities.c(a, b);
    }
    static d($t, a, b, c = null) {
        if (a == b) {
            return true;
        }
        if (a == null || b == null) {
            return false;
        }
        if (a.count != b.count) {
            return false;
        }
        if (c == null) {
            c = EqualityComparer$1.defaultEqualityComparerValue($t);
        }
        for (let d = 0, e = a.count; d < e; d++) {
            if (!c.equalsC(a.item(d), b.item(d))) {
                return false;
            }
        }
        return true;
    }
    static m($t, a, b, c, d) {
        if (c == null) {
            c = Comparer$1.defaultComparerValue($t);
        }
        let e = 0, f = a.count - 1;
        let g = 0;
        let h = !d ? null : EqualityComparer$1.defaultEqualityComparerValue($t);
        while (e <= f) {
            g = intDivide((e + f), 2);
            let i = a.item(g);
            if (null != h && h.equalsC(b, i)) {
                if (g > e) {
                    i = a.item(--g);
                }
                else if (g < f) {
                    i = a.item(++g);
                }
                else {
                    return g;
                }
            }
            let j = c.compare(i, b);
            if (j > 0) {
                f = g - 1;
            }
            else if (j < 0) {
                e = g + 1;
            }
            else {
                return g;
            }
        }
        if (null != h && e < a.count - 1 && h.equalsC(b, a.item(e))) {
            return e;
        }
        return ~e;
    }
    static n($tItem, $tComparison, a, b, c) {
        let d = 0, e = a.count - 1;
        let f = 0;
        while (d <= e) {
            f = intDivide((d + e), 2);
            let g = a.item(f);
            let h = b(g, c);
            if (h > 0) {
                e = f - 1;
            }
            else if (h < 0) {
                d = f + 1;
            }
            else {
                return f;
            }
        }
        return ~d;
    }
    static l(a, b, c) {
        if (a < b) {
            return b;
        }
        else if (a > c) {
            return c;
        }
        return a;
    }
    static s($t, a, b, c) {
        let d = typeCast(ICollection$1_$type.specialize($t), a);
        if (null != d) {
            d.copyTo(b, c);
        }
        else {
            for (let e of fromEnum(a)) {
                b[c++] = e;
            }
        }
    }
    static r(a, b, c) {
        for (let d of fromEn(a)) {
            b[c++] = d;
        }
    }
    static a($t, a) {
        if (null != a) {
            for (let b of fromEnum(a)) {
                return b;
            }
        }
        return Type.getDefaultValue($t);
    }
    static b($t, a, b) {
        if (null != a) {
            if (b) {
                let c = typeCast(IList$1_$type.specialize($t), a);
                if (null != c) {
                    return c.count > 0 ? c.item(0) : Type.getDefaultValue($t);
                }
                let d = typeCast(IList_$type, a);
                if (null != d) {
                    return d.count > 0 ? typeCastObjTo$t($t, d.item(0)) : Type.getDefaultValue($t);
                }
            }
            for (let e of fromEn(a)) {
                return e;
            }
        }
        return Type.getDefaultValue($t);
    }
    static k($t) {
        let a = $t;
        let b = EnumUtil.getNames(a);
        let c = new List$1($t, 0);
        for (let e = 0; e < b.length; e++) {
            let d = b[e];
            c.add(typeCastObjTo$t($t, EnumUtil.parse(a, d, false)));
        }
        return c;
    }
    static q(a) {
        if (a == null) {
            return null;
        }
        let b = Nullable.getUnderlyingType(a);
        if (b != null) {
            a = b;
        }
        return a;
    }
    static p(a) {
        if (null != a) {
            try {
                return a.c;
            }
            catch (b) {
            }
        }
        return null;
    }
    static g(a) {
        if (null != a) {
            if (typeCast(ICollection_$type, a) !== null) {
                return a.count > 0;
            }
            if (null != a) {
                for (let b of fromEn(a)) {
                    return true;
                }
            }
        }
        return false;
    }
    static t() {
        throw new NotSupportedException(1, "Collection is read-only.");
    }
    static v($t, a, b) {
        let c = CoreUtilities.o($t, a, b);
        a.v(c, a.count - c);
    }
    static u($t, a, b) {
        let c = CoreUtilities.o($t, a, b);
        for (let d = a.count - 1; d >= c; d--) {
            a.removeAt(d);
        }
    }
    static o($t, a, b) {
        let c = 0;
        let d = a.count;
        let e = EqualityComparer$1.defaultEqualityComparerValue($t);
        for (let f = 0; f < d; f++) {
            if (e.equalsC(a.item(f), b)) {
                c++;
            }
            else if (0 != c) {
                a.item(f - c, a.item(f));
            }
        }
        return d - c;
    }
    static w(a) {
        if (a < 0) {
            throw new ArgumentException(1, SR.a("LE_ValueCannotBeNegative"));
        }
    }
    static x(a, b) {
        if (a < 0) {
            throw new ArgumentException(2, b, SR.a("LE_ValueCannotBeNegative"));
        }
    }
    static y(a) {
        if (null == a) {
            throw new ArgumentNullException(1);
        }
    }
    static z(a, b) {
        if (null == a) {
            throw new ArgumentNullException(0, b);
        }
    }
}
CoreUtilities.$t = markType(CoreUtilities, 'CoreUtilities');
/**
 * @hidden
 */
export class CoreUtilities_TypedList$1 extends Base {
    constructor($t, a) {
        super();
        this.$t = null;
        this.a = null;
        this.$t = $t;
        this.$type = this.$type.specialize(this.$t);
        CoreUtilities.y(a);
        this.a = a;
    }
    get b() {
        return this.a;
    }
    indexOf(a) {
        return this.a.indexOf(getBoxIfEnum(this.$t, a));
    }
    insert(a, b) {
        this.a.insert(a, getBoxIfEnum(this.$t, b));
    }
    removeAt(a) {
        this.a.removeAt(a);
    }
    item(a, b) {
        if (arguments.length === 2) {
            this.a.item(a, getBoxIfEnum(this.$t, b));
            return b;
        }
        else {
            return typeCastObjTo$t(this.$t, this.a.item(a));
        }
    }
    add(a) {
        this.a.add(getBoxIfEnum(this.$t, a));
    }
    clear() {
        this.a.clear();
    }
    contains(a) {
        return this.a.contains(getBoxIfEnum(this.$t, a));
    }
    copyTo(a, b) {
        CoreUtilities.s(this.$t, new TypedEnumerable$1(this.$t, this.a), a, b);
    }
    get count() {
        return this.a.count;
    }
    get isReadOnly() {
        return this.a.isReadOnly;
    }
    remove(a) {
        let b = this.a.indexOf(getBoxIfEnum(this.$t, a));
        if (b >= 0) {
            this.a.removeAt(b);
        }
        return b >= 0;
    }
    getEnumerator() {
        return new TypedEnumerable_Enumerator$1(this.$t, getEnumeratorObject(this.a));
    }
    getEnumeratorObject() {
        return getEnumeratorObject(this.a);
    }
}
CoreUtilities_TypedList$1.$t = markType(CoreUtilities_TypedList$1, 'CoreUtilities_TypedList$1', Base.$, [IList$1_$type.specialize(0)]);
/**
 * @hidden
 */
export class CoreUtilities_ObservableTypedList$1 extends CoreUtilities_TypedList$1 {
    constructor($t, a) {
        super($t, a);
        this.$t = null;
        this.propertyChanged = null;
        this.collectionChanged = null;
        this.$t = $t;
        this.$type = this.$type.specialize(this.$t);
        let b = typeCast(INotifyCollectionChanged_$type, a);
        if (b != null) {
            b.collectionChanged = delegateCombine(b.collectionChanged, runOn(this, this.c));
        }
        let c = typeCast(INotifyPropertyChanged_$type, a);
        if (c != null) {
            c.propertyChanged = delegateCombine(c.propertyChanged, runOn(this, this.d));
        }
    }
    d(a, b) {
        let c = this.propertyChanged;
        if (null != c) {
            c(this, b);
        }
    }
    c(a, b) {
        let c = this.collectionChanged;
        if (null != c) {
            c(this, b);
        }
    }
}
CoreUtilities_ObservableTypedList$1.$t = markType(CoreUtilities_ObservableTypedList$1, 'CoreUtilities_ObservableTypedList$1', CoreUtilities_TypedList$1.$.specialize(0), [INotifyCollectionChanged_$type, INotifyPropertyChanged_$type]);
//# sourceMappingURL=CoreUtilities_combined.js.map
