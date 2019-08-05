/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Type, Base, markType, Nullable$1, callStaticConstructors, String_$type, EnumUtil, runOn, delegateCombine, fromEnum, getBoxIfEnum, typeCast, Boolean_$type, getInstanceType } from "../../igniteui-angular-core/ES5/type";
import { StackList$1 } from "./StackList$1";
import { CoreUtilities } from "./CoreUtilities";
import { PropertyChangeNotifier } from "./PropertyChangeNotifier";
import { UndoUtils } from "./UndoUtils";
import { InvalidOperationException } from "../../igniteui-angular-core/ES5/InvalidOperationException";
import { stringEmpty, stringIsNullOrEmpty } from "../../igniteui-angular-core/ES5/string";
import { List$1 } from "../../igniteui-angular-core/ES5/List$1";
import { UndoManager_BoolProperties_$type } from "./UndoManager_BoolProperties";
import { ReadOnlyNotifyCollection$1 } from "./ReadOnlyNotifyCollection$1";
import { Stack$1 } from "../../igniteui-angular-core/ES5/Stack$1";
import { ArgumentOutOfRangeException } from "../../igniteui-angular-core/ES5/ArgumentOutOfRangeException";
import { ArgumentException } from "../../igniteui-angular-core/ES5/ArgumentException";
import { nullableNotEquals, nullableEquals } from "../../igniteui-angular-core/ES5/nullable";
import { truncate, logBase } from "../../igniteui-angular-core/ES5/number";
import { dateMinValue, dateNow } from "../../igniteui-angular-core/ES5/date";
import { timeSpanTicks } from "../../igniteui-angular-core/ES5/timespan";
import { ReadOnlyCollection$1 } from "../../igniteui-angular-core/ES5/ReadOnlyCollection$1";
import { stringFormat } from "../../igniteui-angular-core/ES5/stringExtended";
/**
 * @hidden
 */
export var IUndoTransactionOwner_$type = new Type(null, 'IUndoTransactionOwner');
/**
 * @hidden
 */
var UndoExecuteContext = /** @class */ (function (_super) {
    tslib_1.__extends(UndoExecuteContext, _super);
    function UndoExecuteContext(a, b) {
        var _this = _super.call(this) || this;
        _this.e = null;
        _this.b = 0;
        _this.a = new StackList$1(UndoUnit.$, 0);
        CoreUtilities.z(a, "undoManager");
        _this.e = a;
        _this.b = b;
        return _this;
    }
    Object.defineProperty(UndoExecuteContext.prototype, "d", {
        get: function () {
            switch (this.b) {
                case 0:
                    {
                        return 0;
                    }
                case 1:
                    {
                        return 1;
                    }
                case 2:
                    {
                        if (this.e.ag) {
                            return 1;
                        }
                        return 0;
                    }
                default:
                    {
                        return 0;
                    }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UndoExecuteContext.prototype, "c", {
        get: function () {
            return this.b;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UndoExecuteContext.prototype, "i", {
        get: function () {
            return this.a.count;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UndoExecuteContext.prototype, "f", {
        get: function () {
            return this.e;
        },
        enumerable: true,
        configurable: true
    });
    UndoExecuteContext.prototype.g = function (a) {
        if (a < 0 || a > this.i) {
            return null;
        }
        return this.a.b(a);
    };
    UndoExecuteContext.prototype.h = function (a) {
        CoreUtilities.z(a, "unit");
        this.a.n(a);
        try {
            return a.b(this);
        }
        finally {
            this.a.d();
        }
    };
    UndoExecuteContext.$t = markType(UndoExecuteContext, 'UndoExecuteContext');
    return UndoExecuteContext;
}(Base));
export { UndoExecuteContext };
/**
 * @hidden
 */
var UndoHistoryItem = /** @class */ (function (_super) {
    tslib_1.__extends(UndoHistoryItem, _super);
    function UndoHistoryItem(a, b, c) {
        var _this = _super.call(this) || this;
        _this.f = null;
        _this.b = 0;
        _this.d = null;
        _this.j = null;
        _this.i = null;
        CoreUtilities.z(a, "unit");
        CoreUtilities.z(c, "undoManager");
        _this.f = a;
        _this.b = b;
        _this.d = c;
        return _this;
    }
    Object.defineProperty(UndoHistoryItem.prototype, "c", {
        get: function () {
            return this.b;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UndoHistoryItem.prototype, "k", {
        get: function () {
            if (null == this.i) {
                this.i = ((function (a) { return a != null ? a : stringEmpty(); })(this.f.e(this.b, true)));
            }
            return this.i;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UndoHistoryItem.prototype, "l", {
        get: function () {
            if (null == this.j) {
                this.j = ((function (a) { return a != null ? a : stringEmpty(); })(this.f.e(this.b, false)));
            }
            return this.j;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UndoHistoryItem.prototype, "e", {
        get: function () {
            return this.d;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UndoHistoryItem.prototype, "g", {
        get: function () {
            return this.f;
        },
        enumerable: true,
        configurable: true
    });
    UndoHistoryItem.prototype.m = function () {
        this.n(true);
    };
    UndoHistoryItem.prototype.h = function () {
        var a = this.c == 1 ? this.d.am : this.d.an;
        return a.indexOf(this) >= 0;
    };
    UndoHistoryItem.prototype.n = function (a) {
        var b = this.b == 1;
        var c = b ? this.d.am : this.d.an;
        var d = c.indexOf(this);
        if (d >= 0) {
            this.d.a5(d + 1, !b);
        }
        else if (a) {
            throw new InvalidOperationException(1, UndoUtils.a("LE_HistoryItemNotInCurrentHistory"));
        }
    };
    UndoHistoryItem.prototype.o = function () {
        if (this.j != null) {
            this.j = null;
            this.a("ShortDescription");
        }
        if (this.i != null) {
            this.i = null;
            this.a("LongDescription");
        }
    };
    UndoHistoryItem.$t = markType(UndoHistoryItem, 'UndoHistoryItem', PropertyChangeNotifier.$);
    return UndoHistoryItem;
}(PropertyChangeNotifier));
export { UndoHistoryItem };
/**
 * @hidden
 */
var UndoManager = /** @class */ (function (_super) {
    tslib_1.__extends(UndoManager, _super);
    function UndoManager() {
        var _this = _super.call(this) || this;
        _this.aq = 0;
        _this.d = null;
        _this.c = null;
        _this.al = null;
        _this.ak = null;
        _this.at = (0);
        _this.ap = dateMinValue();
        _this.ao = null;
        _this.k = 32;
        _this.n = null;
        _this.m = null;
        _this.g = null;
        _this.f = null;
        _this.e = null;
        _this.d = new StackList$1(UndoHistoryItem.$, 0);
        _this.c = new StackList$1(UndoHistoryItem.$, 0);
        _this.al = new ReadOnlyNotifyCollection$1(UndoHistoryItem.$, _this.d);
        _this.ak = new ReadOnlyNotifyCollection$1(UndoHistoryItem.$, _this.c);
        var a = _this.d;
        a.collectionChanged = delegateCombine(a.collectionChanged, runOn(_this, _this.a3));
        var b = _this.c;
        b.collectionChanged = delegateCombine(b.collectionChanged, runOn(_this, _this.a3));
        return _this;
    }
    UndoManager.staticInit = function () {
        var e_1, _a;
        var a = new List$1(String_$type, 0);
        try {
            for (var _b = tslib_1.__values(EnumUtil.getValues(UndoManager_BoolProperties_$type)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var b = _c.value;
                a.add(EnumUtil.getName(UndoManager_BoolProperties_$type, (EnumUtil.getEnumValue(UndoManager_BoolProperties_$type, b))));
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        UndoManager.b = a.toArray();
    };
    Object.defineProperty(UndoManager.prototype, "x", {
        get: function () {
            return this.ab(32);
        },
        set: function (a) {
            this.ai(32, a);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UndoManager.prototype, "z", {
        get: function () {
            return this.ab(2);
        },
        set: function (a) {
            this.ai(2, a);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UndoManager.prototype, "aa", {
        get: function () {
            return this.ab(1);
        },
        set: function (a) {
            this.ai(1, a);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UndoManager.prototype, "h", {
        get: function () {
            return this.e;
        },
        set: function (a) {
            if (a != this.e) {
                this.e = a;
                this.a("CurrentHistoryItem");
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UndoManager.prototype, "p", {
        get: function () {
            if (this.m == null) {
                if (this.n != null) {
                    this.m = UndoTransaction.l(this.n);
                }
            }
            return this.m;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UndoManager.prototype, "ad", {
        get: function () {
            return this.ab(4);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UndoManager.prototype, "af", {
        get: function () {
            return this.ab(128);
        },
        set: function (a) {
            this.ai(128, a, true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UndoManager.prototype, "ag", {
        get: function () {
            return this.ab(8);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UndoManager.prototype, "ah", {
        get: function () {
            return this.aq > 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UndoManager.prototype, "au", {
        get: function () {
            return this.at;
        },
        set: function (a) {
            CoreUtilities.x(timeSpanTicks(a), "value");
            if (this.at != a) {
                this.at = a;
                this.a("MergeTimeout");
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UndoManager.prototype, "am", {
        get: function () {
            return this.ak;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UndoManager.prototype, "q", {
        get: function () {
            return this.n;
        },
        set: function (a) {
            if (a != this.n) {
                this.n = a;
                this.a("RootTransaction");
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UndoManager.prototype, "i", {
        get: function () {
            return this.f;
        },
        set: function (a) {
            if (this.f != a) {
                this.f = a;
                this.a("TopRedoHistoryItem");
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UndoManager.prototype, "j", {
        get: function () {
            return this.g;
        },
        set: function (a) {
            if (this.g != a) {
                this.g = a;
                this.a("TopUndoHistoryItem");
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UndoManager.prototype, "ar", {
        get: function () {
            return this.d.j;
        },
        set: function (a) {
            if (a != this.ar) {
                this.d.j = this.c.j = a;
                this.a("UndoLimit");
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UndoManager.prototype, "an", {
        get: function () {
            return this.al;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UndoManager.prototype, "y", {
        get: function () {
            return this.x && !this.aj;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UndoManager.prototype, "ac", {
        get: function () {
            return this.ab(64);
        },
        set: function (a) {
            this.ai(64, a, false);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UndoManager.prototype, "ae", {
        get: function () {
            return this.ab(256);
        },
        set: function (a) {
            this.ai(256, a, false);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UndoManager.prototype, "aj", {
        get: function () {
            return this.ab(16);
        },
        set: function (a) {
            if (this.ai(16, a, false) && a) {
                this.ax();
            }
        },
        enumerable: true,
        configurable: true
    });
    UndoManager.prototype.av = function (a) {
        CoreUtilities.z(a, "unit");
        this.v(a);
    };
    UndoManager.prototype.t = function (a, b, c, d, e) {
        if (e === void 0) { e = null; }
        if (this.ah) {
            return null;
        }
        CoreUtilities.z(c, "undoMethod");
        CoreUtilities.z(d, "redoMethod");
        var f = UndoManager.w(a, b, c, d, e);
        return this.v(f);
    };
    UndoManager.prototype.u = function (a, b, c, d, e) {
        if (e === void 0) { e = null; }
        if (this.ah) {
            return null;
        }
        CoreUtilities.z(c, "undoMethod");
        CoreUtilities.z(d, "redoMethod");
        return this.t(a, b, function (f) { return c(); }, function (f) { return d(); }, e);
    };
    UndoManager.prototype.s = function (a, b, c, d, e) {
        if (e === void 0) { e = null; }
        if (this.ah) {
            return null;
        }
        CoreUtilities.z(c, "undoMethod");
        CoreUtilities.z(d, "redoMethod");
        return this.t(a, b, function (f) {
            c();
            return true;
        }, function (f) {
            d();
            return true;
        }, e);
    };
    UndoManager.prototype.ay = function () {
        this.bg();
        this.ax();
        this.d.clear();
        this.c.clear();
    };
    UndoManager.prototype.a0 = function (a, b, c) {
        CoreUtilities.z(c, "action");
        var d = false;
        var e = this.r(a, b);
        try {
            c();
            d = true;
            e.ad();
        }
        finally {
            if (!d && !e.q) {
                e.af();
            }
        }
    };
    UndoManager.prototype.az = function (a, b) {
        CoreUtilities.z(b, "action");
        CoreUtilities.z(a, "transaction");
        var c = false;
        this.bd(a);
        try {
            b();
            c = true;
            a.ad();
        }
        finally {
            if (!c && !a.q) {
                a.af();
            }
        }
    };
    UndoManager.prototype.a1 = function (a) {
        CoreUtilities.z(a, "action");
        UndoManager.a2(a, this.an);
        UndoManager.a2(a, this.am);
        if (null != this.ao) {
            UndoManager.a2(a, this.ao);
        }
        var b = this.n;
        if (null != b) {
            a(b);
            b.f(a);
        }
    };
    UndoManager.a2 = function (a, b) {
        var e_2, _a;
        try {
            for (var _b = tslib_1.__values(fromEnum(b)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var c = _c.value;
                var d = c.g;
                a(d);
                d.f(a);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    UndoManager.prototype.a6 = function () {
        this.aj = true;
    };
    UndoManager.prototype.a7 = function (a) {
        if (a === void 0) { a = 1; }
        this.a5(a, false);
    };
    UndoManager.prototype.a8 = function (a, b) {
        if (b === void 0) { b = true; }
        CoreUtilities.z(a, "match");
        this.bg();
        var c = null;
        c = function (d) {
            if (a(d)) {
                return true;
            }
            return d.c(c);
        };
        var d = function (e) { return c(e.g); };
        var e = this.ae;
        this.ae = true;
        try {
            if (b && this.n != null) {
                c(this.n);
            }
            var f = this.d.count == 0 ? null : this.d.c();
            this.d.o(d);
            if (f != null && (this.d.count == 0 || this.d.c() != f)) {
                this.ax();
            }
            var g = this.ao;
            if (g != null) {
                var h = g.a();
                var i = 0;
                for (var j = h.length - 1; j >= 0; j--) {
                    if (c(h[j].g)) {
                        h[j] = null;
                        i++;
                    }
                }
                if (this.ao == g) {
                    if (i == h.length) {
                        this.ax();
                    }
                    else if (i > 0) {
                        g = new Stack$1(UndoHistoryItem.$);
                        for (var k = h.length - 1; k >= 0; k--) {
                            var l = h[k];
                            if (l != null) {
                                g.h(l);
                            }
                        }
                        this.ao = g;
                    }
                }
            }
            this.c.o(d);
        }
        finally {
            this.ae = e;
        }
    };
    UndoManager.prototype.bb = function () {
        this.aq--;
        if (this.aq == 0) {
            this.a("IsSuspended");
        }
    };
    UndoManager.prototype.r = function (a, b) {
        if (this.ah) {
            throw new InvalidOperationException(1, UndoUtils.a("LE_NewTransactionWhileSuspended"));
        }
        var c = this.o(a, b);
        if (c == null) {
            throw new InvalidOperationException(1, UndoUtils.a("LE_FactoryNullTransaction"));
        }
        this.bd(c);
        return c;
    };
    UndoManager.prototype.bd = function (a) {
        CoreUtilities.z(a, "group");
        if (nullableNotEquals(a.u, null)) {
            throw new InvalidOperationException(1, UndoUtils.a("LE_TransactionAlreadyOpened"));
        }
        var b = this.p;
        if (b != null) {
            b.aa(a);
        }
        var c = b == null ? this : b;
        a.ae(c);
    };
    UndoManager.prototype.be = function () {
        this.aq++;
        if (this.aq == 1) {
            this.a("IsSuspended");
        }
    };
    UndoManager.prototype.bf = function (a) {
        if (a === void 0) { a = 1; }
        this.a5(a, true);
    };
    UndoManager.w = function (a, b, c, d, e) {
        var f = function (g) {
            var h = g.d == 1 ? d : c;
            if (null == h || !h(g)) {
                return false;
            }
            g.f.av(g.g(0));
            return true;
        };
        return new CustomUndoUnit(a, b, f, e);
    };
    UndoManager.prototype.o = function (a, b) {
        return new UndoTransaction(a, b);
    };
    UndoManager.as = function ($tProperty, a, b, c, d, e, f) {
        var g = null;
        if (!stringIsNullOrEmpty(d)) {
            var h = f ? "PropertyChangeDescriptionDetailed" : "PropertyChangeDescription";
            var i = e == 1 ? c : b;
            var j = e == 1 ? b : c;
            g = UndoUtils.b(h, d, a, getBoxIfEnum($tProperty, i), getBoxIfEnum($tProperty, j));
        }
        return g;
    };
    UndoManager.prototype.a4 = function (a) {
        this.m = null;
        this.a("CurrentTransaction");
    };
    UndoManager.prototype.a5 = function (a, b) {
        if (a <= 0) {
            throw new ArgumentOutOfRangeException(2, "count", UndoUtils.b("LE_ArgumentIsNegative", "count", a));
        }
        if (this.ad || this.ag) {
            throw new InvalidOperationException(1, UndoUtils.a("LE_UndoRedoInUndoRedo"));
        }
        if (this.af) {
            throw new InvalidOperationException(1, UndoUtils.a("LE_UndoRedoInRollback"));
        }
        if (this.ah) {
            throw new InvalidOperationException(1, UndoUtils.a("LE_UndoRedoWhileSuspended"));
        }
        if (this.n != null) {
            throw new InvalidOperationException(1, UndoUtils.a("LE_UndoRedoInTransaction"));
        }
        this.bg();
        if (!this.ab(b ? 1 : 2)) {
            return;
        }
        var c = b ? 8 : 4;
        var d = b ? 0 : 1;
        try {
            this.ai(c, true);
            this.ax();
            var e = b ? this.d : this.c;
            var f = new UndoExecuteContext(this, d);
            if (e.count > 0) {
                this.aj = true;
            }
            for (var g = 0, h = Math.min(a, e.count); g < h; g++) {
                var i = e.d();
                this.h = i;
                f.h(i.g);
            }
        }
        finally {
            this.h = null;
            this.ai(c, false);
        }
    };
    UndoManager.prototype.bc = function (a) {
        var b = this.af;
        try {
            this.af = true;
            var c = new UndoExecuteContext(this, 2);
            c.h(a);
        }
        finally {
            this.af = b;
        }
    };
    UndoManager.prototype.bh = function (a) {
        if (this.ah) {
            throw new InvalidOperationException(1, UndoUtils.a("LE_EndTransactionWhileSuspended"));
        }
    };
    UndoManager.prototype.v = function (a, b) {
        if (b === void 0) { b = false; }
        if (a == null) {
            return null;
        }
        if (this.af) {
            return null;
        }
        if (this.ah) {
            return null;
        }
        this.bg();
        var c = typeCast(UndoTransaction.$, a);
        if (c != null) {
            if (nullableNotEquals(c.u, false)) {
                throw new ArgumentException(1, UndoUtils.a("LE_AddOpenTransaction"));
            }
            if (!b) {
                throw new ArgumentException(1, UndoUtils.a("LE_AddTransactionDirect"));
            }
        }
        if (this.n != null) {
            var d = this.p;
            var e = this.ad || this.ag;
            if (!e) {
                var f = this.l(d, a);
                if (f != 0) {
                    if (f == 2) {
                        d.ab();
                    }
                    return null;
                }
                this.aj = false;
            }
            d.aa(a);
            if (!e) {
                this.a9();
            }
        }
        else {
            if (this.ag) {
                this.ax();
                this.c.n(new UndoHistoryItem(a, 1, this));
            }
            else {
                var g = true;
                var h = this.ad;
                if (!h && this.d.count > 0) {
                    var i = this.d.c();
                    var j = this.l(i.g, a);
                    if (j != 0) {
                        this.a9();
                        g = false;
                        if (j == 1) {
                            i.o();
                        }
                        else {
                            var k = this.d.d();
                            this.ba();
                            this.a6();
                        }
                    }
                }
                this.ax();
                if (g) {
                    if (!h) {
                        this.aw();
                        this.c.clear();
                        this.aj = false;
                    }
                    var l = new UndoHistoryItem(a, 0, this);
                    this.d.n(l);
                    if (!h) {
                        this.a9();
                    }
                }
            }
        }
        return a;
    };
    UndoManager.prototype.aw = function () {
        var e_3, _a;
        this.ao = new Stack$1(UndoHistoryItem.$);
        try {
            for (var _b = tslib_1.__values(fromEnum(this.c)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var a = _c.value;
                this.ao.h(a);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
    };
    UndoManager.prototype.ax = function () {
        this.ao = null;
    };
    UndoManager.prototype.ab = function (a) {
        return (this.k & a) == a;
    };
    UndoManager.prototype.l = function (a, b) {
        var c = 0;
        if (this.y) {
            var d = this.at == (0);
            if (!d) {
                var e = dateNow();
                d = (+e - +(this.ap)) <= this.at;
            }
            if (d) {
                try {
                    this.ac = true;
                    var f = new UndoMergeContext(this, b);
                    c = a.a(f);
                }
                finally {
                    this.ac = false;
                }
                if (c != 0) {
                    this.a9();
                }
            }
        }
        return c;
    };
    UndoManager.prototype.a3 = function (a, b) {
        this.aa = this.d.count > 0;
        this.z = this.c.count > 0;
        this.j = this.aa ? this.d.c() : null;
        this.i = this.z ? this.c.c() : null;
    };
    UndoManager.prototype.a9 = function () {
        this.ap = dateNow();
    };
    UndoManager.prototype.ba = function () {
        var e_4, _a;
        if (this.ao == null) {
            return;
        }
        var a = this.ao;
        this.ax();
        try {
            for (var _b = tslib_1.__values(fromEnum(a)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var b = _c.value;
                this.c.n(b);
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_4) throw e_4.error; }
        }
    };
    UndoManager.prototype.ai = function (a, b, c) {
        if (c === void 0) { c = true; }
        if (b == this.ab(a)) {
            return false;
        }
        this.k ^= a;
        if (c) {
            this.a(UndoManager.b[truncate(logBase(a, 2))]);
        }
        return true;
    };
    UndoManager.prototype.bg = function () {
        if (this.ac) {
            throw new InvalidOperationException(1, UndoUtils.a("LE_ChangeHistoryInMerge"));
        }
        if (this.ae) {
            throw new InvalidOperationException(1, UndoUtils.a("LE_ChangeHistoryInRemoveAll"));
        }
    };
    Object.defineProperty(UndoManager.prototype, "undoManager", {
        get: function () {
            return this;
        },
        enumerable: true,
        configurable: true
    });
    UndoManager.prototype.onChildOpened = function (a) {
        CoreUtilities.z(a, "child");
        if (this.n != null) {
            throw new InvalidOperationException(1, UndoUtils.a("LE_HasOpenTransaction"));
        }
        if (nullableNotEquals(a.u, true)) {
            throw new ArgumentException(1, UndoUtils.b("LE_TransactionNotOpened", a));
        }
        if (a.h != this) {
            throw new ArgumentException(1, UndoUtils.a("LE_InvalidTransactionOwner"));
        }
        this.q = a;
        return true;
    };
    UndoManager.prototype.onChildClosed = function (a, b) {
        CoreUtilities.z(a, "child");
        if (a != this.n) {
            throw new ArgumentException(1, UndoUtils.b("LE_ClosingOtherTransaction", a, this.n));
        }
        this.q = null;
        if (b == 0 && a.p()) {
            this.v(a, true);
        }
    };
    UndoManager.$t = markType(UndoManager, 'UndoManager', PropertyChangeNotifier.$, [IUndoTransactionOwner_$type]);
    UndoManager.b = null;
    return UndoManager;
}(PropertyChangeNotifier));
export { UndoManager };
/**
 * @hidden
 */
var UndoMergeContext = /** @class */ (function (_super) {
    tslib_1.__extends(UndoMergeContext, _super);
    function UndoMergeContext(a, b) {
        var _this = _super.call(this) || this;
        _this.c = null;
        _this.a = null;
        CoreUtilities.z(a, "undoManager");
        CoreUtilities.z(b, "unitBeingAdded");
        _this.a = a;
        _this.c = b;
        return _this;
    }
    Object.defineProperty(UndoMergeContext.prototype, "b", {
        get: function () {
            return this.a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UndoMergeContext.prototype, "d", {
        get: function () {
            return this.c;
        },
        enumerable: true,
        configurable: true
    });
    UndoMergeContext.$t = markType(UndoMergeContext, 'UndoMergeContext');
    return UndoMergeContext;
}(Base));
export { UndoMergeContext };
/**
 * @hidden
 */
var UndoUnit = /** @class */ (function (_super) {
    tslib_1.__extends(UndoUnit, _super);
    function UndoUnit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UndoUnit.prototype.f = function (a) {
    };
    UndoUnit.prototype.a = function (a) {
        return 0;
    };
    UndoUnit.prototype.c = function (a) {
        return false;
    };
    UndoUnit.$t = markType(UndoUnit, 'UndoUnit');
    return UndoUnit;
}(Base));
export { UndoUnit };
/**
 * @hidden
 */
var CustomUndoUnit = /** @class */ (function (_super) {
    tslib_1.__extends(CustomUndoUnit, _super);
    function CustomUndoUnit(a, b, c, d) {
        var _this = _super.call(this) || this;
        _this.h = null;
        _this.i = null;
        _this.j = null;
        _this.g = null;
        CoreUtilities.z(c, "executeMethod");
        _this.g = c;
        _this.i = a;
        _this.j = b;
        _this.h = d;
        return _this;
    }
    CustomUndoUnit.prototype.b = function (a) {
        return this.g(a);
    };
    CustomUndoUnit.prototype.e = function (a, b) {
        return b ? this.j : this.i;
    };
    CustomUndoUnit.prototype.get_d = function () {
        return this.h;
    };
    Object.defineProperty(CustomUndoUnit.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    CustomUndoUnit.$t = markType(CustomUndoUnit, 'CustomUndoUnit', UndoUnit.$);
    return CustomUndoUnit;
}(UndoUnit));
export { CustomUndoUnit };
/**
 * @hidden
 */
var UndoTransaction = /** @class */ (function (_super) {
    tslib_1.__extends(UndoTransaction, _super);
    function UndoTransaction(a, b) {
        var _this = _super.call(this) || this;
        _this.i = null;
        _this.s = null;
        _this.g = null;
        _this.t = Nullable$1.toNullable(Boolean_$type, null);
        _this.j = null;
        _this.v = null;
        _this.w = null;
        _this.v = a;
        _this.w = b;
        _this.i = new StackList$1(UndoUnit.$, 0);
        _this.s = new ReadOnlyCollection$1(UndoUnit.$, 1, _this.i);
        return _this;
    }
    UndoTransaction.prototype.b = function (a) {
        var e_5, _a;
        if (this.j != null) {
            throw new InvalidOperationException(1, UndoUtils.b("LE_CannotExecuteOpenTransaction", this.j));
        }
        var b = false;
        var c = this.o(a);
        try {
            try {
                for (var _b = tslib_1.__values(fromEnum(this.i)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var d = _c.value;
                    if (a.h(d)) {
                        b = true;
                    }
                }
            }
            catch (e_5_1) { e_5 = { error: e_5_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_5) throw e_5.error; }
            }
        }
        finally {
            if (c != null && !c.q) {
                c.ad();
            }
        }
        return b;
    };
    UndoTransaction.prototype.f = function (a) {
        var e_6, _a;
        _super.prototype.f.call(this, a);
        try {
            for (var _b = tslib_1.__values(fromEnum(this.s)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var b = _c.value;
                a(b);
                b.f(a);
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_6) throw e_6.error; }
        }
    };
    UndoTransaction.prototype.e = function (a, b) {
        var e_7, _a;
        var c = b ? this.w : this.v;
        if (c == null) {
            if (this.i.count > 0) {
                try {
                    for (var _b = tslib_1.__values(fromEnum(this.i)), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var d = _c.value;
                        c = this.i.c().e(a, b);
                        if (c != null) {
                            break;
                        }
                    }
                }
                catch (e_7_1) { e_7 = { error: e_7_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_7) throw e_7.error; }
                }
            }
            if (c == null) {
                c = UndoUtils.a("FallbackTransactionDescription");
            }
        }
        return c;
    };
    UndoTransaction.prototype.a = function (a) {
        var b = 0;
        if (nullableEquals(this.t, true) && this.i.count > 0) {
            var c = this.i.c();
            b = c.a(a);
            if (b == 2) {
                this.i.d();
                b = 1;
            }
        }
        return b;
    };
    UndoTransaction.prototype.c = function (a) {
        this.i.o(a);
        return this.i.count == 0;
    };
    UndoTransaction.prototype.get_d = function () {
        return null;
    };
    Object.defineProperty(UndoTransaction.prototype, "d", {
        get: function () {
            return this.get_d();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UndoTransaction.prototype, "q", {
        get: function () {
            return nullableEquals(this.t, false);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UndoTransaction.prototype, "m", {
        get: function () {
            return this.j;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UndoTransaction.prototype, "n", {
        get: function () {
            return typeCast(UndoTransaction.$, this.g);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UndoTransaction.prototype, "r", {
        get: function () {
            return this.s;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UndoTransaction.prototype, "u", {
        get: function () {
            return this.t;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UndoTransaction.prototype, "h", {
        get: function () {
            return this.g;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UndoTransaction.prototype, "x", {
        get: function () {
            return stringFormat("{1}: {0} items", this.s.count, getInstanceType(this).typeName);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UndoTransaction.prototype, "y", {
        get: function () {
            return this.v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UndoTransaction.prototype, "z", {
        get: function () {
            return this.w;
        },
        enumerable: true,
        configurable: true
    });
    UndoTransaction.prototype.ac = function (a) {
        this.ag();
        var b = this.g.undoManager;
        b.bh(this);
        if (this.j != null) {
            this.j.ac(a);
        }
        this.t = Nullable$1.toNullable(Boolean_$type, false);
        if (a == 1) {
            b.bc(this);
        }
        this.g.onChildClosed(this, a);
        b.a4(this);
    };
    UndoTransaction.prototype.o = function (a) {
        switch (a.c) {
            case 2: return null;
            case 0:
            case 1:
                var b = this.k(a);
                if (b != null) {
                    a.f.bd(b);
                }
                return b;
            default: return null;
        }
    };
    UndoTransaction.prototype.ag = function () {
        if (nullableEquals(this.t, null)) {
            throw new InvalidOperationException(1, UndoUtils.a("LE_TransactionNotStarted"));
        }
        if (nullableEquals(this.t, false)) {
            throw new InvalidOperationException(1, UndoUtils.a("LE_TransactionClosed"));
        }
    };
    UndoTransaction.prototype.aa = function (a) {
        CoreUtilities.z(a, "unit");
        this.ag();
        if (this.j != null) {
            throw new InvalidOperationException(1, UndoUtils.b("LE_AddUnitWhileOpenTransaction", this.j));
        }
        this.i.n(a);
    };
    UndoTransaction.prototype.ab = function () {
        this.ac(2);
    };
    UndoTransaction.prototype.p = function () {
        var e_8, _a;
        try {
            for (var _b = tslib_1.__values(fromEnum(this.i)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var a = _c.value;
                var b = typeCast(UndoTransaction.$, a);
                if (null != b) {
                    if (b.p()) {
                        return true;
                    }
                }
                else {
                    return true;
                }
            }
        }
        catch (e_8_1) { e_8 = { error: e_8_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_8) throw e_8.error; }
        }
        return false;
    };
    UndoTransaction.l = function (a) {
        CoreUtilities.z(a, "group");
        if (nullableNotEquals(a.u, true)) {
            throw new ArgumentException(1, UndoUtils.b("LE_TransactionNotOpened", a));
        }
        while (a.m != null) {
            a = a.m;
        }
        return a;
    };
    UndoTransaction.prototype.ae = function (a) {
        CoreUtilities.z(a, "parent");
        if (nullableNotEquals(this.t, null)) {
            throw new InvalidOperationException(1, UndoUtils.a("LE_TransactionAlreadyOpened"));
        }
        this.g = a;
        this.t = Nullable$1.toNullable(Boolean_$type, true);
        if (!a.onChildOpened(this)) {
            this.t = Nullable$1.toNullable(Boolean_$type, null);
            this.g = null;
        }
        else {
            a.undoManager.a4(this);
        }
    };
    UndoTransaction.prototype.ad = function () {
        this.ac(0);
    };
    UndoTransaction.prototype.af = function () {
        this.ac(1);
    };
    UndoTransaction.prototype.k = function (a) {
        return a.f.o(this.v, this.w);
    };
    Object.defineProperty(UndoTransaction.prototype, "undoManager", {
        get: function () {
            return this.g.undoManager;
        },
        enumerable: true,
        configurable: true
    });
    UndoTransaction.prototype.onChildOpened = function (a) {
        CoreUtilities.z(a, "child");
        this.ag();
        if (this.j != null) {
            throw new InvalidOperationException(1, UndoUtils.a("LE_HasOpenTransaction"));
        }
        if (!this.i.contains(a)) {
            throw new ArgumentException(1, UndoUtils.b("LE_ChildTransactionNotInUnits", a));
        }
        if (nullableNotEquals(a.u, true)) {
            throw new ArgumentException(1, UndoUtils.b("LE_TransactionNotOpened", a));
        }
        if (a.h != this) {
            throw new ArgumentException(1, UndoUtils.a("LE_InvalidTransactionOwner"));
        }
        this.j = a;
        return true;
    };
    UndoTransaction.prototype.onChildClosed = function (a, b) {
        CoreUtilities.z(a, "child");
        this.ag();
        if (a != this.j) {
            throw new ArgumentException(1, UndoUtils.b("LE_ClosingOtherTransaction", a, this.j));
        }
        this.j = null;
        if (b != 0 || !a.p()) {
            this.i.d();
        }
    };
    UndoTransaction.$t = markType(UndoTransaction, 'UndoTransaction', UndoUnit.$, [IUndoTransactionOwner_$type]);
    return UndoTransaction;
}(UndoUnit));
export { UndoTransaction };
callStaticConstructors();
//# sourceMappingURL=IUndoTransactionOwner_combined.js.map
