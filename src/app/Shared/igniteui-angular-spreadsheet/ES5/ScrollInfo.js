/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, INotifyPropertyChanged_$type, Nullable$1, PropertyChangedEventArgs, Number_$type, String_$type, markType } from "../../igniteui-angular-core/ES5/type";
import { ISupportPropertyChangeNotifications_$type } from "./ISupportPropertyChangeNotifications";
import { PropertyChangeListenerList } from "./PropertyChangeListenerList";
import { CoreUtilities } from "./CoreUtilities";
import { List$1 } from "../../igniteui-angular-core/ES5/List$1";
import { ArgumentOutOfRangeException } from "../../igniteui-angular-core/ES5/ArgumentOutOfRangeException";
import { nullableNotEquals, nullableIsNull, nullableEquals } from "../../igniteui-angular-core/ES5/nullable";
import { stringEmpty } from "../../igniteui-angular-core/ES5/string";
/**
 * @hidden
 */
var ScrollInfo = /** @class */ (function (_super) {
    tslib_1.__extends(ScrollInfo, _super);
    function ScrollInfo() {
        var _this = _super.call(this) || this;
        _this._f = false;
        _this._k = null;
        _this._c = null;
        _this._d = true;
        _this._e = false;
        _this._l = 0;
        _this._ag = Nullable$1.toNullable(Number_$type, null);
        _this._m = 0;
        _this._n = 0;
        _this._o = 0;
        _this._a = 1;
        _this._p = 0;
        _this._q = 1;
        _this._r = 0;
        _this.propertyChanged = null;
        _this._c = new PropertyChangeListenerList();
        return _this;
    }
    Object.defineProperty(ScrollInfo.prototype, "_g", {
        get: function () {
            return this._d;
        },
        set: function (a) {
            if (a != this._d) {
                this._d = a;
                this._al("ComputedScrollBarIsEnabled");
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScrollInfo.prototype, "_h", {
        get: function () {
            return this._e;
        },
        set: function (a) {
            if (a != this._e) {
                this._e = a;
                this._al("ComputedScrollBarVisibility");
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScrollInfo.prototype, "_t", {
        get: function () {
            return this._l;
        },
        set: function (a) {
            if (a != this._l) {
                this._l = a;
                this._al("Extent");
            }
        },
        enumerable: true,
        configurable: true
    });
    ScrollInfo.prototype.get__i = function () {
        return true;
    };
    Object.defineProperty(ScrollInfo.prototype, "_i", {
        get: function () {
            return this.get__i();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScrollInfo.prototype, "_ah", {
        get: function () {
            return this._ag;
        },
        set: function (a) {
            if (nullableNotEquals(a, this._ag)) {
                this._ag = a;
                this._al("LargeChange");
                this._al("LargeChangeResolved");
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScrollInfo.prototype, "_z", {
        get: function () {
            return !nullableIsNull(this._ag) ? this._ag.value : this._af;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScrollInfo.prototype, "_aa", {
        get: function () {
            return this._m;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScrollInfo.prototype, "_ab", {
        get: function () {
            return this._n;
        },
        set: function (a) {
            if (a != this._n) {
                this._n = a;
                this._al("Minimum");
                this._ai();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScrollInfo.prototype, "_ac", {
        get: function () {
            return this._o;
        },
        set: function (a) {
            if (a != this._o) {
                a = Math.max(Math.min(this._aa, a), this._ab);
                if (a != this._o) {
                    this._o = a;
                    this._al("Offset");
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScrollInfo.prototype, "_b", {
        get: function () {
            return this._a;
        },
        set: function (a) {
            if (a != this._a) {
                this._a = a;
                this._al("ScrollBarVisibility");
                this._as();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScrollInfo.prototype, "_ad", {
        get: function () {
            return this._p;
        },
        set: function (a) {
            if (a != this._p) {
                this._p = a;
                this._al("ScrollableExtent");
                this._ai();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScrollInfo.prototype, "_ae", {
        get: function () {
            return this._q;
        },
        set: function (a) {
            if (a != this._q) {
                this._q = a;
                this._al("SmallChange");
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScrollInfo.prototype, "_af", {
        get: function () {
            return this._r;
        },
        set: function (a) {
            if (a != this._r) {
                this._r = a;
                this._al("Viewport");
                if (nullableEquals(this._ag, null)) {
                    this._al("LargeChangeResolved");
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    ScrollInfo.prototype._ai = function () {
        try {
            var a = (this._p + this._n);
            if (a != this._m) {
                this._m = a;
                this._al("Maximum");
            }
        }
        catch (b) {
            this._m = this._p + this._n;
        }
    };
    ScrollInfo.prototype._s = function (a) {
        var b = this._ac + this._w(a);
        return Math.max(this._ab, Math.min(this._aa, b));
    };
    ScrollInfo.prototype._u = function () {
        return ScrollInfo._v(this._o, this._n, this._l, this._r);
    };
    ScrollInfo._v = function (a, b, c, d) {
        if (CoreUtilities.e(c, d)) {
            return ((a - b) / (c - d)) * 100;
        }
        return -1;
    };
    ScrollInfo.prototype._w = function (a) {
        var b = 0;
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
    };
    ScrollInfo.prototype._x = function () {
        return ScrollInfo._y(this._l, this._r);
    };
    ScrollInfo._y = function (a, b) {
        if (CoreUtilities.h(b, a)) {
            return (b / a) * 100;
        }
        return 100;
    };
    ScrollInfo.prototype._aj = function (a, b, c) {
        var d = this._j();
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
    };
    ScrollInfo.prototype._ak = function (a) {
        var b = this.propertyChanged;
        if (null != b) {
            b(this, new PropertyChangedEventArgs(a));
        }
        this._c.onPropertyValueChanged(this, a, null);
    };
    ScrollInfo.prototype._al = function (a) {
        if (this._f) {
            if (this._k == null) {
                this._k = new List$1(String_$type, 0);
            }
            this._k.add(a);
            return;
        }
        this._ak(a);
    };
    ScrollInfo.prototype._am = function () {
        this._f = false;
        var a = this._k;
        this._k = null;
        var b = a == null ? 0 : a.count;
        if (b == 1) {
            this._al(a._inner[0]);
        }
        else if (b > 1) {
            this._al(stringEmpty());
        }
    };
    ScrollInfo.prototype._ap = function (a) {
        this._aq(this._o + a);
    };
    ScrollInfo.prototype._an = function (a) {
        this._ao(a, this._ac);
    };
    ScrollInfo.prototype._ao = function (a, b) {
        this._aq(b + this._w(a));
    };
    ScrollInfo.prototype._aq = function (a) {
        this._ac = Math.max(this._ab, Math.min(this._aa, a));
    };
    ScrollInfo.prototype._ar = function (a) {
        if (a < 0 || a > 100) {
            throw new ArgumentOutOfRangeException(0);
        }
        if (CoreUtilities.e(this._l, this._r)) {
            this._aq((this._l - this._r) * a / 100 + this._n);
        }
    };
    ScrollInfo.prototype._j = function () {
        if (this._f) {
            return false;
        }
        this._f = true;
        return true;
    };
    ScrollInfo.prototype._as = function () {
        var a = false;
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
    };
    ScrollInfo.prototype.addListener = function (a, b) {
        this._c.b(a, b);
    };
    ScrollInfo.prototype.removeListener = function (a) {
        this._c.d(a);
    };
    ScrollInfo.$t = markType(ScrollInfo, 'ScrollInfo', Base.$, [INotifyPropertyChanged_$type, ISupportPropertyChangeNotifications_$type]);
    return ScrollInfo;
}(Base));
export { ScrollInfo };
//# sourceMappingURL=ScrollInfo.js.map
