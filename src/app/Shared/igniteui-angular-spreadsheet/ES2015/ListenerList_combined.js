/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { List$1 } from "../../igniteui-angular-core/ES2015/List$1";
import { Base, IEnumerable$1_$type, typeCast, markType, IEnumerator$1_$type } from "../../igniteui-angular-core/ES2015/type";
import { WeakReference } from "../../igniteui-angular-core/ES2015/WeakReference";
import { CoreUtilities } from "./CoreUtilities";
/**
 * @hidden
 */
export class ListenerList extends List$1 {
    constructor(a) {
        super(Base.$, 2, a);
        this.ad = 0;
    }
    static af(a) {
        let b = typeCast(WeakReference.$, a);
        if (null == b) {
            b = new WeakReference(a);
        }
        return b;
    }
    static ag(a) {
        let b = typeCast(WeakReference.$, a);
        if (null != b) {
            return CoreUtilities.p(b);
        }
        return a;
    }
    static add2(a, b, c) {
        CoreUtilities.y(b);
        let d = c ? ListenerList.af(b) : b;
        if (null == a) {
            return d;
        }
        else {
            let e = typeCast(ListenerList.$, a);
            if (null != e) {
                e.add1(d);
            }
            else {
                e = new ListenerList(2);
                e.add1(a);
                e.add1(d);
            }
            return e;
        }
    }
    static remove2(a, b) {
        let c = typeCast(ListenerList.$, a);
        if (null != c) {
            for (let d = c.count - 1; d >= 0; d--) {
                if (b == ListenerList.ag(c._inner[d])) {
                    if (0 != c.ad) {
                        let e = new ListenerList(c.count);
                        e.o(c);
                        c = e;
                    }
                    c.removeAt(d);
                    break;
                }
            }
            return 1 == c.count ? c._inner[0] : c;
        }
        else if (ListenerList.ag(a) == b) {
            return null;
        }
        else {
            return a;
        }
    }
    static ac(a) {
        let b = typeCast(ListenerList.$, a);
        if (null != b) {
            return new ListenerList_Enumerable(b);
        }
        else if (null != a) {
            return [a];
        }
        else {
            return new Array(0);
        }
    }
    static ai(a, b, c) {
        c = null;
        b = null;
        let d = typeCast(ListenerList.$, a);
        if (null != d) {
            b = new ListenerList_Enumerable(d);
        }
        else {
            let e = ListenerList.ag(a);
            if (null != e) {
                c = e;
            }
        }
        return {
            p1: b,
            p2: c
        };
    }
    static aj($tItem, $tProperty, a, b, c, d) {
        let e = typeCast(ListenerList.$, a);
        if (null != e) {
            e.ad++;
            try {
                for (let f = 0, g = e.count; f < g; f++) {
                    let h = ListenerList.ag(e._inner[f]);
                    if (null != h) {
                        h.onPropertyValueChanged(b, c, d);
                    }
                }
            }
            finally {
                e.ad--;
            }
        }
        else if (null != a) {
            let i = ListenerList.ag(a);
            if (null != i) {
                i.onPropertyValueChanged(b, c, d);
            }
        }
    }
    static ak($tItem, a, b) {
        let c = typeCast(ListenerList.$, a);
        if (null != c) {
            c.ad++;
            try {
                for (let d = 0, e = c.count; d < e; d++) {
                    let f = ListenerList.ag(c._inner[d]);
                    if (null != f) {
                        f.onValueChanged(b);
                    }
                }
            }
            finally {
                c.ad--;
            }
        }
        else if (null != a) {
            let g = ListenerList.ag(a);
            if (null != g) {
                g.onValueChanged(b);
            }
        }
    }
}
ListenerList.$t = markType(ListenerList, 'ListenerList', List$1.$.specialize(Base.$));
/**
 * @hidden
 */
export class ListenerList_Enumerable extends Base {
    constructor(a) {
        super();
        this.a = null;
        this.a = a;
    }
    getEnumerator() {
        return new ListenerList_Enumerable_Enumerator(this.a);
    }
    getEnumeratorObject() {
        return this.getEnumerator();
    }
}
ListenerList_Enumerable.$t = markType(ListenerList_Enumerable, 'ListenerList_Enumerable', Base.$, [IEnumerable$1_$type.specialize(Base.$)]);
/**
 * @hidden
 */
export class ListenerList_Enumerable_Enumerator extends Base {
    constructor(a) {
        super();
        this.a = null;
        this.b = 0;
        this.c = null;
        this.a = a;
        this.reset();
    }
    get current() {
        return this.c;
    }
    dispose() {
    }
    get currentObject() {
        return this.current;
    }
    moveNext() {
        this.c = null;
        while (null == this.c && ++this.b < this.a.count) {
            this.c = ListenerList.ag(this.a.item(this.b));
        }
        return null != this.c;
    }
    reset() {
        this.b = -1;
        this.c = null;
    }
}
ListenerList_Enumerable_Enumerator.$t = markType(ListenerList_Enumerable_Enumerator, 'ListenerList_Enumerable_Enumerator', Base.$, [IEnumerator$1_$type.specialize(Base.$)]);
//# sourceMappingURL=ListenerList_combined.js.map