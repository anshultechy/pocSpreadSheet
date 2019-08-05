/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, IEnumerable$1_$type, ICollection_$type, IList$1_$type, INotifyPropertyChanged_$type, NotSupportedException, IEnumerator$1_$type, PropertyChangedEventArgs, Type, getBoxIfEnum, markType } from "../../igniteui-angular-core/ES5/type";
import { INotifyCollectionChanged_$type } from "../../igniteui-angular-core/ES5/INotifyCollectionChanged";
import { List$1 } from "../../igniteui-angular-core/ES5/List$1";
import { CoreUtilities } from "./CoreUtilities";
import { NotifyCollectionChangedEventArgs } from "../../igniteui-angular-core/ES5/NotifyCollectionChangedEventArgs";
import { InvalidOperationException } from "../../igniteui-angular-core/ES5/InvalidOperationException";
import { UndoUtils } from "./UndoUtils";
/**
 * @hidden
 */
var StackList$1 = /** @class */ (function (_super) {
    tslib_1.__extends(StackList$1, _super);
    function StackList$1($t, a) {
        var _this = _super.call(this) || this;
        _this.$t = null;
        _this.g = 0;
        _this.e = null;
        _this.h = 0;
        _this.collectionChanged = null;
        _this.propertyChanged = null;
        _this.$t = $t;
        _this.$type = _this.$type.specialize(_this.$t);
        _this.j = a;
        _this.e = new List$1(_this.$t, 0);
        return _this;
    }
    Object.defineProperty(StackList$1.prototype, "count", {
        get: function () {
            return this.e.count;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StackList$1.prototype, "j", {
        get: function () {
            return this.g;
        },
        set: function (a) {
            if (a != this.g) {
                CoreUtilities.x(a, "value");
                this.g = a > 0 ? a : 0x7FFFFFFF;
                if (null != this.e && this.e.count > this.g) {
                    this.e.v(0, this.e.count - this.g);
                    this.h++;
                    this.m();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    StackList$1.prototype.clear = function () {
        if (this.count == 0) {
            return;
        }
        this.e.clear();
        this.h++;
        this.m();
    };
    StackList$1.prototype.contains = function (a) {
        return this.e.indexOf(a) >= 0;
    };
    StackList$1.prototype.getEnumerator = function () {
        return new StackList_Enumerator$1(this.$t, this);
    };
    StackList$1.prototype.b = function (a) {
        return this.e._inner[this.e.count - ++a];
    };
    StackList$1.prototype.l = function (a, b, c) {
        var d = this.propertyChanged;
        if (null != d) {
            d(this, new PropertyChangedEventArgs("Count"));
            d(this, new PropertyChangedEventArgs("Item[]"));
        }
        var e = this.collectionChanged;
        if (null != e) {
            var f = new NotifyCollectionChangedEventArgs(1, c ? 0 : 1, getBoxIfEnum(this.$t, a), b);
            e(this, f);
        }
    };
    StackList$1.prototype.m = function () {
        var a = this.propertyChanged;
        if (null != a) {
            a(this, new PropertyChangedEventArgs("Count"));
            a(this, new PropertyChangedEventArgs("Item[]"));
        }
        var b = this.collectionChanged;
        if (null != b) {
            b(this, this.$type.getStaticFields(StackList$1.$).f);
        }
    };
    StackList$1.prototype.c = function () {
        if (this.count == 0) {
            throw new InvalidOperationException(0);
        }
        return this.e._inner[this.count - 1];
    };
    StackList$1.prototype.d = function () {
        var a = this.c();
        this.e.removeAt(this.count - 1);
        this.h++;
        this.l(a, 0, false);
        return a;
    };
    StackList$1.prototype.n = function (a) {
        this.h++;
        if (this.g > 0 && this.count == this.g) {
            var b = this.e._inner[0];
            this.e.removeAt(0);
            this.l(b, this.g - 1, false);
        }
        this.e.add(a);
        this.l(a, 0, true);
    };
    StackList$1.prototype.o = function (a) {
        CoreUtilities.z(a, "match");
        var b = this.h;
        for (var c = this.e.count - 1; c >= 0; c--) {
            var d = this.e._inner[c];
            if (a(d)) {
                this.e.removeAt(c);
                this.l(d, this.e.count - c, false);
                if (b != this.h) {
                    throw new InvalidOperationException(1, UndoUtils.a("LE_RemoveAllFailedVersion"));
                }
            }
        }
    };
    StackList$1.prototype.a = function () {
        return this.e.toArray();
    };
    StackList$1.prototype.indexOf = function (a) {
        var b = this.e.indexOf(a);
        if (b >= 0) {
            b = this.e.count - ++b;
        }
        return b;
    };
    StackList$1.prototype.insert = function (a, b) {
        throw new NotSupportedException(0);
    };
    StackList$1.prototype.removeAt = function (a) {
        throw new NotSupportedException(0);
    };
    StackList$1.prototype.item = function (a, b) {
        if (arguments.length === 2) {
            throw new NotSupportedException(0);
            return b;
        }
        else {
            return this.b(a);
        }
    };
    StackList$1.prototype.add = function (a) {
        this.n(a);
    };
    StackList$1.prototype.copyTo1 = function (a, b) {
        var c = this.e;
        for (var d = c.count - 1; d >= 0; d--) {
            a[b++] = c._inner[d];
        }
    };
    Object.defineProperty(StackList$1.prototype, "isReadOnly", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    StackList$1.prototype.remove = function (a) {
        throw new NotSupportedException(0);
    };
    StackList$1.prototype.copyTo = function (a, b) {
        this.e.copyTo(a, b);
    };
    Object.defineProperty(StackList$1.prototype, "isSynchronized", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StackList$1.prototype, "syncRoot", {
        get: function () {
            return this.e.syncRoot;
        },
        enumerable: true,
        configurable: true
    });
    StackList$1.prototype.getEnumeratorObject = function () {
        return this.getEnumerator();
    };
    StackList$1.$t = markType(StackList$1, 'StackList$1', Base.$, [IEnumerable$1_$type.specialize(0), ICollection_$type, INotifyCollectionChanged_$type, IList$1_$type.specialize(0), INotifyPropertyChanged_$type], function () {
        this.f = new NotifyCollectionChangedEventArgs(0, 4);
    });
    return StackList$1;
}(Base));
export { StackList$1 };
/**
 * @hidden
 */
var StackList_Enumerator$1 = /** @class */ (function (_super) {
    tslib_1.__extends(StackList_Enumerator$1, _super);
    function StackList_Enumerator$1($t, a) {
        var _this = _super.call(this) || this;
        _this.$t = null;
        _this.a = null;
        _this.d = 0;
        _this.c = 0;
        _this.b = null;
        _this.$t = $t;
        _this.$type = _this.$type.specialize(_this.$t);
        _this.a = a;
        _this.reset();
        return _this;
    }
    StackList_Enumerator$1.prototype.moveNext = function () {
        if (this.d != this.a.h) {
            throw new InvalidOperationException(1, UndoUtils.a("LE_EnumFailedVersion"));
        }
        if (this.c == -1) {
            return false;
        }
        if (this.c == -2) {
            this.c = this.a.count;
        }
        this.c--;
        if (this.c >= 0) {
            this.b = this.a.e._inner[this.c];
            return true;
        }
        this.b = Type.getDefaultValue(this.$t);
        return false;
    };
    Object.defineProperty(StackList_Enumerator$1.prototype, "current", {
        get: function () {
            if (this.c == -2) {
                throw new InvalidOperationException(1, UndoUtils.a("LE_EnumNotStarted"));
            }
            else if (this.c == -1) {
                throw new InvalidOperationException(1, UndoUtils.a("LE_EnumEnded"));
            }
            return this.b;
        },
        enumerable: true,
        configurable: true
    });
    StackList_Enumerator$1.prototype.reset = function () {
        this.d = this.a.h;
        this.c = -2;
        this.b = Type.getDefaultValue(this.$t);
    };
    StackList_Enumerator$1.prototype.dispose = function () {
        this.c = -1;
    };
    Object.defineProperty(StackList_Enumerator$1.prototype, "currentObject", {
        get: function () {
            return getBoxIfEnum(this.$t, this.current);
        },
        enumerable: true,
        configurable: true
    });
    StackList_Enumerator$1.$t = markType(StackList_Enumerator$1, 'StackList_Enumerator$1', Base.$, [IEnumerator$1_$type.specialize(0)]);
    return StackList_Enumerator$1;
}(Base));
export { StackList_Enumerator$1 };
//# sourceMappingURL=StackList$1_combined.js.map
