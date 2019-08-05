/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, INotifyPropertyChanged_$type, Nullable$1, PropertyChangedEventArgs, Number_$type, String_$type, markType } from "../../igniteui-angular-core/ES2015/type";
import { ISupportPropertyChangeNotifications_$type } from "./ISupportPropertyChangeNotifications";
import { PropertyChangeListenerList } from "./PropertyChangeListenerList";
import { CoreUtilities } from "./CoreUtilities";
import { List$1 } from "../../igniteui-angular-core/ES2015/List$1";
import { ArgumentOutOfRangeException } from "../../igniteui-angular-core/ES2015/ArgumentOutOfRangeException";
import { nullableNotEquals, nullableIsNull, nullableEquals } from "../../igniteui-angular-core/ES2015/nullable";
import { stringEmpty } from "../../igniteui-angular-core/ES2015/string";
/**
 * @hidden
 */
export class ScrollInfo extends Base {
    constructor() {
        super();
        this._f = false;
        this._k = null;
        this._c = null;
        this._d = true;
        this._e = false;
        this._l = 0;
        this._ag = Nullable$1.toNullable(Number_$type, null);
        this._m = 0;
        this._n = 0;
        this._o = 0;
        this._a = 1;
        this._p = 0;
        this._q = 1;
        this._r = 0;
        this.propertyChanged = null;
        this._c = new PropertyChangeListenerList();
    }
    get _g() {
        return this._d;
    }
    set _g(a) {
        if (a != this._d) {
            this._d = a;
            this._al("ComputedScrollBarIsEnabled");
        }
    }
    get _h() {
        return this._e;
    }
    set _h(a) {
        if (a != this._e) {
            this._e = a;
            this._al("ComputedScrollBarVisibility");
        }
    }
    get _t() {
        return this._l;
    }
    set _t(a) {
        if (a != this._l) {
            this._l = a;
            this._al("Extent");
        }
    }
    get__i() {
        return true;
    }
    get _i() {
        return this.get__i();
    }
    get _ah() {
        return this._ag;
    }
    set _ah(a) {
        if (nullableNotEquals(a, this._ag)) {
            this._ag = a;
            this._al("LargeChange");
            this._al("LargeChangeResolved");
        }
    }
    get _z() {
        return !nullableIsNull(this._ag) ? this._ag.value : this._af;
    }
    get _aa() {
        return this._m;
    }
    get _ab() {
        return this._n;
    }
    set _ab(a) {
        if (a != this._n) {
            this._n = a;
            this._al("Minimum");
            this._ai();
        }
    }
    get _ac() {
        return this._o;
    }
    set _ac(a) {
        if (a != this._o) {
            a = Math.max(Math.min(this._aa, a), this._ab);
            if (a != this._o) {
                this._o = a;
                this._al("Offset");
            }
        }
    }
    get _b() {
        return this._a;
    }
    set _b(a) {
        if (a != this._a) {
            this._a = a;
            this._al("ScrollBarVisibility");
            this._as();
        }
    }
    get _ad() {
        return this._p;
    }
    set _ad(a) {
        if (a != this._p) {
            this._p = a;
            this._al("ScrollableExtent");
            this._ai();
        }
    }
    get _ae() {
        return this._q;
    }
    set _ae(a) {
        if (a != this._q) {
            this._q = a;
            this._al("SmallChange");
        }
    }
    get _af() {
        return this._r;
    }
    set _af(a) {
        if (a != this._r) {
            this._r = a;
            this._al("Viewport");
            if (nullableEquals(this._ag, null)) {
                this._al("LargeChangeResolved");
            }
        }
    }
    _ai() {
        try {
            let a = (this._p + this._n);
            if (a != this._m) {
                this._m = a;
                this._al("Maximum");
            }
        }
        catch (b) {
            this._m = this._p + this._n;
        }
    }
    _s(a) {
        let b = this._ac + this._w(a);
        return Math.max(this._ab, Math.min(this._aa, b));
    }
    _u() {
        return ScrollInfo._v(this._o, this._n, this._l, this._r);
    }
    static _v(a, b, c, d) {
        if (CoreUtilities.e(c, d)) {
            return ((a - b) / (c - d)) * 100;
        }
        return -1;
    }
    _w(a) {
        let b = 0;
        switch (a) {
            case 1:
                {
                    b = -this._ae;
                    break;
                }
            case 4:
                {
                    b = this._ae;
                    break;
                }
            case 0:
                {
                    b = -this._z;
                    break;
                }
            case 3:
                {
                    b = this._z;
                    break;
                }
        }
        return b;
    }
    _x() {
        return ScrollInfo._y(this._l, this._r);
    }
    static _y(a, b) {
        if (CoreUtilities.h(b, a)) {
            return (b / a) * 100;
        }
        return 100;
    }
    _aj(a, b, c) {
        let d = this._j();
        try {
            this._t = Math.max(b, 0);
            this._af = Math.max(a, 0);
            this._ad = Math.max(this._t - this._af, 0);
            this._ac = Math.max(Math.min(this._aa, c), this._ab);
            this._g = CoreUtilities.h(this._af, this._t);
            this._as();
        }
        finally {
            if (d) {
                this._am();
            }
        }
    }
    _ak(a) {
        let b = this.propertyChanged;
        if (null != b) {
            b(this, new PropertyChangedEventArgs(a));
        }
        this._c.onPropertyValueChanged(this, a, null);
    }
    _al(a) {
        if (this._f) {
            if (this._k == null) {
                this._k = new List$1(String_$type, 0);
            }
            this._k.add(a);
            return;
        }
        this._ak(a);
    }
    _am() {
        this._f = false;
        let a = this._k;
        this._k = null;
        let b = a == null ? 0 : a.count;
        if (b == 1) {
            this._al(a._inner[0]);
        }
        else if (b > 1) {
            this._al(stringEmpty());
        }
    }
    _ap(a) {
        this._aq(this._o + a);
    }
    _an(a) {
        this._ao(a, this._ac);
    }
    _ao(a, b) {
        this._aq(b + this._w(a));
    }
    _aq(a) {
        this._ac = Math.max(this._ab, Math.min(this._aa, a));
    }
    _ar(a) {
        if (a < 0 || a > 100) {
            throw new ArgumentOutOfRangeException(0);
        }
        if (CoreUtilities.e(this._l, this._r)) {
            this._aq((this._l - this._r) * a / 100 + this._n);
        }
    }
    _j() {
        if (this._f) {
            return false;
        }
        this._f = true;
        return true;
    }
    _as() {
        let a = false;
        switch (this._a) {
            case 2:
            case 0: break;
            case 1:
                if (CoreUtilities.h(this._af, this._t)) {
                    a = true;
                }
                break;
            case 3:
                a = true;
                break;
        }
        this._h = a;
    }
    addListener(a, b) {
        this._c.b(a, b);
    }
    removeListener(a) {
        this._c.d(a);
    }
}
ScrollInfo.$t = markType(ScrollInfo, 'ScrollInfo', Base.$, [INotifyPropertyChanged_$type, ISupportPropertyChangeNotifications_$type]);
//# sourceMappingURL=ScrollInfo.js.map