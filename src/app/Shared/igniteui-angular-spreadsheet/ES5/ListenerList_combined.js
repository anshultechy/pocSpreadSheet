/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { List$1 } from "../../igniteui-angular-core/ES5/List$1";
import { Base, IEnumerable$1_$type, typeCast, markType, IEnumerator$1_$type } from "../../igniteui-angular-core/ES5/type";
import { WeakReference } from "../../igniteui-angular-core/ES5/WeakReference";
import { CoreUtilities } from "./CoreUtilities";
/**
 * @hidden
 */
var ListenerList = /** @class */ (function (_super) {
    tslib_1.__extends(ListenerList, _super);
    function ListenerList(a) {
        var _this = _super.call(this, Base.$, 2, a) || this;
        _this.ad = 0;
        return _this;
    }
    ListenerList.af = function (a) {
        var b = typeCast(WeakReference.$, a);
        if (null == b) {
            b = new WeakReference(a);
        }
        return b;
    };
    ListenerList.ag = function (a) {
        var b = typeCast(WeakReference.$, a);
        if (null != b) {
            return CoreUtilities.p(b);
        }
        return a;
    };
    ListenerList.add2 = function (a, b, c) {
        CoreUtilities.y(b);
        var d = c ? ListenerList.af(b) : b;
        if (null == a) {
            return d;
        }
        else {
            var e = typeCast(ListenerList.$, a);
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
    };
    ListenerList.remove2 = function (a, b) {
        var c = typeCast(ListenerList.$, a);
        if (null != c) {
            for (var d = c.count - 1; d >= 0; d--) {
                if (b == ListenerList.ag(c._inner[d])) {
                    if (0 != c.ad) {
                        var e = new ListenerList(c.count);
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
    };
    ListenerList.ac = function (a) {
        var b = typeCast(ListenerList.$, a);
        if (null != b) {
            return new ListenerList_Enumerable(b);
        }
        else if (null != a) {
            return [a];
        }
        else {
            return new Array(0);
        }
    };
    ListenerList.ai = function (a, b, c) {
        c = null;
        b = null;
        var d = typeCast(ListenerList.$, a);
        if (null != d) {
            b = new ListenerList_Enumerable(d);
        }
        else {
            var e = ListenerList.ag(a);
            if (null != e) {
                c = e;
            }
        }
        return {
            p1: b,
            p2: c
        };
    };
    ListenerList.aj = function ($tItem, $tProperty, a, b, c, d) {
        var e = typeCast(ListenerList.$, a);
        if (null != e) {
            e.ad++;
            try {
                for (var f = 0, g = e.count; f < g; f++) {
                    var h = ListenerList.ag(e._inner[f]);
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
            var i = ListenerList.ag(a);
            if (null != i) {
                i.onPropertyValueChanged(b, c, d);
            }
        }
    };
    ListenerList.ak = function ($tItem, a, b) {
        var c = typeCast(ListenerList.$, a);
        if (null != c) {
            c.ad++;
            try {
                for (var d = 0, e = c.count; d < e; d++) {
                    var f = ListenerList.ag(c._inner[d]);
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
            var g = ListenerList.ag(a);
            if (null != g) {
                g.onValueChanged(b);
            }
        }
    };
    ListenerList.$t = markType(ListenerList, 'ListenerList', List$1.$.specialize(Base.$));
    return ListenerList;
}(List$1));
export { ListenerList };
/**
 * @hidden
 */
var ListenerList_Enumerable = /** @class */ (function (_super) {
    tslib_1.__extends(ListenerList_Enumerable, _super);
    function ListenerList_Enumerable(a) {
        var _this = _super.call(this) || this;
        _this.a = null;
        _this.a = a;
        return _this;
    }
    ListenerList_Enumerable.prototype.getEnumerator = function () {
        return new ListenerList_Enumerable_Enumerator(this.a);
    };
    ListenerList_Enumerable.prototype.getEnumeratorObject = function () {
        return this.getEnumerator();
    };
    ListenerList_Enumerable.$t = markType(ListenerList_Enumerable, 'ListenerList_Enumerable', Base.$, [IEnumerable$1_$type.specialize(Base.$)]);
    return ListenerList_Enumerable;
}(Base));
export { ListenerList_Enumerable };
/**
 * @hidden
 */
var ListenerList_Enumerable_Enumerator = /** @class */ (function (_super) {
    tslib_1.__extends(ListenerList_Enumerable_Enumerator, _super);
    function ListenerList_Enumerable_Enumerator(a) {
        var _this = _super.call(this) || this;
        _this.a = null;
        _this.b = 0;
        _this.c = null;
        _this.a = a;
        _this.reset();
        return _this;
    }
    Object.defineProperty(ListenerList_Enumerable_Enumerator.prototype, "current", {
        get: function () {
            return this.c;
        },
        enumerable: true,
        configurable: true
    });
    ListenerList_Enumerable_Enumerator.prototype.dispose = function () {
    };
    Object.defineProperty(ListenerList_Enumerable_Enumerator.prototype, "currentObject", {
        get: function () {
            return this.current;
        },
        enumerable: true,
        configurable: true
    });
    ListenerList_Enumerable_Enumerator.prototype.moveNext = function () {
        this.c = null;
        while (null == this.c && ++this.b < this.a.count) {
            this.c = ListenerList.ag(this.a.item(this.b));
        }
        return null != this.c;
    };
    ListenerList_Enumerable_Enumerator.prototype.reset = function () {
        this.b = -1;
        this.c = null;
    };
    ListenerList_Enumerable_Enumerator.$t = markType(ListenerList_Enumerable_Enumerator, 'ListenerList_Enumerable_Enumerator', Base.$, [IEnumerator$1_$type.specialize(Base.$)]);
    return ListenerList_Enumerable_Enumerator;
}(Base));
export { ListenerList_Enumerable_Enumerator };
//# sourceMappingURL=ListenerList_combined.js.map
