/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Type, Base, markType, Nullable$1, callStaticConstructors, String_$type, EnumUtil, runOn, delegateCombine, fromEnum, getBoxIfEnum, typeCast, Boolean_$type, getInstanceType } from "../../igniteui-angular-core/ES2015/type";
import { StackList$1 } from "./StackList$1";
import { CoreUtilities } from "./CoreUtilities";
import { PropertyChangeNotifier } from "./PropertyChangeNotifier";
import { UndoUtils } from "./UndoUtils";
import { InvalidOperationException } from "../../igniteui-angular-core/ES2015/InvalidOperationException";
import { stringEmpty, stringIsNullOrEmpty } from "../../igniteui-angular-core/ES2015/string";
import { List$1 } from "../../igniteui-angular-core/ES2015/List$1";
import { UndoManager_BoolProperties_$type } from "./UndoManager_BoolProperties";
import { ReadOnlyNotifyCollection$1 } from "./ReadOnlyNotifyCollection$1";
import { Stack$1 } from "../../igniteui-angular-core/ES2015/Stack$1";
import { ArgumentOutOfRangeException } from "../../igniteui-angular-core/ES2015/ArgumentOutOfRangeException";
import { ArgumentException } from "../../igniteui-angular-core/ES2015/ArgumentException";
import { nullableNotEquals, nullableEquals } from "../../igniteui-angular-core/ES2015/nullable";
import { truncate, logBase } from "../../igniteui-angular-core/ES2015/number";
import { dateMinValue, dateNow } from "../../igniteui-angular-core/ES2015/date";
import { timeSpanTicks } from "../../igniteui-angular-core/ES2015/timespan";
import { ReadOnlyCollection$1 } from "../../igniteui-angular-core/ES2015/ReadOnlyCollection$1";
import { stringFormat } from "../../igniteui-angular-core/ES2015/stringExtended";
/**
 * @hidden
 */
export let IUndoTransactionOwner_$type = new Type(null, 'IUndoTransactionOwner');
/**
 * @hidden
 */
export class UndoExecuteContext extends Base {
    constructor(a, b) {
        super();
        this.e = null;
        this.b = 0;
        this.a = new StackList$1(UndoUnit.$, 0);
        CoreUtilities.z(a, "undoManager");
        this.e = a;
        this.b = b;
    }
    get d() {
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
    }
    get c() {
        return this.b;
    }
    get i() {
        return this.a.count;
    }
    get f() {
        return this.e;
    }
    g(a) {
        if (a < 0 || a > this.i) {
            return null;
        }
        return this.a.b(a);
    }
    h(a) {
        CoreUtilities.z(a, "unit");
        this.a.n(a);
        try {
            return a.b(this);
        }
        finally {
            this.a.d();
        }
    }
}
UndoExecuteContext.$t = markType(UndoExecuteContext, 'UndoExecuteContext');
/**
 * @hidden
 */
export class UndoHistoryItem extends PropertyChangeNotifier {
    constructor(a, b, c) {
        super();
        this.f = null;
        this.b = 0;
        this.d = null;
        this.j = null;
        this.i = null;
        CoreUtilities.z(a, "unit");
        CoreUtilities.z(c, "undoManager");
        this.f = a;
        this.b = b;
        this.d = c;
    }
    get c() {
        return this.b;
    }
    get k() {
        if (null == this.i) {
            this.i = (((a) => a != null ? a : stringEmpty())(this.f.e(this.b, true)));
        }
        return this.i;
    }
    get l() {
        if (null == this.j) {
            this.j = (((a) => a != null ? a : stringEmpty())(this.f.e(this.b, false)));
        }
        return this.j;
    }
    get e() {
        return this.d;
    }
    get g() {
        return this.f;
    }
    m() {
        this.n(true);
    }
    h() {
        let a = this.c == 1 ? this.d.am : this.d.an;
        return a.indexOf(this) >= 0;
    }
    n(a) {
        let b = this.b == 1;
        let c = b ? this.d.am : this.d.an;
        let d = c.indexOf(this);
        if (d >= 0) {
            this.d.a5(d + 1, !b);
        }
        else if (a) {
            throw new InvalidOperationException(1, UndoUtils.a("LE_HistoryItemNotInCurrentHistory"));
        }
    }
    o() {
        if (this.j != null) {
            this.j = null;
            this.a("ShortDescription");
        }
        if (this.i != null) {
            this.i = null;
            this.a("LongDescription");
        }
    }
}
UndoHistoryItem.$t = markType(UndoHistoryItem, 'UndoHistoryItem', PropertyChangeNotifier.$);
/**
 * @hidden
 */
export class UndoManager extends PropertyChangeNotifier {
    constructor() {
        super();
        this.aq = 0;
        this.d = null;
        this.c = null;
        this.al = null;
        this.ak = null;
        this.at = (0);
        this.ap = dateMinValue();
        this.ao = null;
        this.k = 32;
        this.n = null;
        this.m = null;
        this.g = null;
        this.f = null;
        this.e = null;
        this.d = new StackList$1(UndoHistoryItem.$, 0);
        this.c = new StackList$1(UndoHistoryItem.$, 0);
        this.al = new ReadOnlyNotifyCollection$1(UndoHistoryItem.$, this.d);
        this.ak = new ReadOnlyNotifyCollection$1(UndoHistoryItem.$, this.c);
        let a = this.d;
        a.collectionChanged = delegateCombine(a.collectionChanged, runOn(this, this.a3));
        let b = this.c;
        b.collectionChanged = delegateCombine(b.collectionChanged, runOn(this, this.a3));
    }
    static staticInit() {
        let a = new List$1(String_$type, 0);
        for (let b of EnumUtil.getValues(UndoManager_BoolProperties_$type)) {
            a.add(EnumUtil.getName(UndoManager_BoolProperties_$type, (EnumUtil.getEnumValue(UndoManager_BoolProperties_$type, b))));
        }
        UndoManager.b = a.toArray();
    }
    get x() {
        return this.ab(32);
    }
    set x(a) {
        this.ai(32, a);
    }
    get z() {
        return this.ab(2);
    }
    set z(a) {
        this.ai(2, a);
    }
    get aa() {
        return this.ab(1);
    }
    set aa(a) {
        this.ai(1, a);
    }
    get h() {
        return this.e;
    }
    set h(a) {
        if (a != this.e) {
            this.e = a;
            this.a("CurrentHistoryItem");
        }
    }
    get p() {
        if (this.m == null) {
            if (this.n != null) {
                this.m = UndoTransaction.l(this.n);
            }
        }
        return this.m;
    }
    get ad() {
        return this.ab(4);
    }
    get af() {
        return this.ab(128);
    }
    set af(a) {
        this.ai(128, a, true);
    }
    get ag() {
        return this.ab(8);
    }
    get ah() {
        return this.aq > 0;
    }
    get au() {
        return this.at;
    }
    set au(a) {
        CoreUtilities.x(timeSpanTicks(a), "value");
        if (this.at != a) {
            this.at = a;
            this.a("MergeTimeout");
        }
    }
    get am() {
        return this.ak;
    }
    get q() {
        return this.n;
    }
    set q(a) {
        if (a != this.n) {
            this.n = a;
            this.a("RootTransaction");
        }
    }
    get i() {
        return this.f;
    }
    set i(a) {
        if (this.f != a) {
            this.f = a;
            this.a("TopRedoHistoryItem");
        }
    }
    get j() {
        return this.g;
    }
    set j(a) {
        if (this.g != a) {
            this.g = a;
            this.a("TopUndoHistoryItem");
        }
    }
    get ar() {
        return this.d.j;
    }
    set ar(a) {
        if (a != this.ar) {
            this.d.j = this.c.j = a;
            this.a("UndoLimit");
        }
    }
    get an() {
        return this.al;
    }
    get y() {
        return this.x && !this.aj;
    }
    get ac() {
        return this.ab(64);
    }
    set ac(a) {
        this.ai(64, a, false);
    }
    get ae() {
        return this.ab(256);
    }
    set ae(a) {
        this.ai(256, a, false);
    }
    get aj() {
        return this.ab(16);
    }
    set aj(a) {
        if (this.ai(16, a, false) && a) {
            this.ax();
        }
    }
    av(a) {
        CoreUtilities.z(a, "unit");
        this.v(a);
    }
    t(a, b, c, d, e = null) {
        if (this.ah) {
            return null;
        }
        CoreUtilities.z(c, "undoMethod");
        CoreUtilities.z(d, "redoMethod");
        let f = UndoManager.w(a, b, c, d, e);
        return this.v(f);
    }
    u(a, b, c, d, e = null) {
        if (this.ah) {
            return null;
        }
        CoreUtilities.z(c, "undoMethod");
        CoreUtilities.z(d, "redoMethod");
        return this.t(a, b, (f) => c(), (f) => d(), e);
    }
    s(a, b, c, d, e = null) {
        if (this.ah) {
            return null;
        }
        CoreUtilities.z(c, "undoMethod");
        CoreUtilities.z(d, "redoMethod");
        return this.t(a, b, (f) => {
            c();
            return true;
        }, (f) => {
            d();
            return true;
        }, e);
    }
    ay() {
        this.bg();
        this.ax();
        this.d.clear();
        this.c.clear();
    }
    a0(a, b, c) {
        CoreUtilities.z(c, "action");
        let d = false;
        let e = this.r(a, b);
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
    }
    az(a, b) {
        CoreUtilities.z(b, "action");
        CoreUtilities.z(a, "transaction");
        let c = false;
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
    }
    a1(a) {
        CoreUtilities.z(a, "action");
        UndoManager.a2(a, this.an);
        UndoManager.a2(a, this.am);
        if (null != this.ao) {
            UndoManager.a2(a, this.ao);
        }
        let b = this.n;
        if (null != b) {
            a(b);
            b.f(a);
        }
    }
    static a2(a, b) {
        for (let c of fromEnum(b)) {
            let d = c.g;
            a(d);
            d.f(a);
        }
    }
    a6() {
        this.aj = true;
    }
    a7(a = 1) {
        this.a5(a, false);
    }
    a8(a, b = true) {
        CoreUtilities.z(a, "match");
        this.bg();
        let c = null;
        c = (d) => {
            if (a(d)) {
                return true;
            }
            return d.c(c);
        };
        let d = (e) => c(e.g);
        let e = this.ae;
        this.ae = true;
        try {
            if (b && this.n != null) {
                c(this.n);
            }
            let f = this.d.count == 0 ? null : this.d.c();
            this.d.o(d);
            if (f != null && (this.d.count == 0 || this.d.c() != f)) {
                this.ax();
            }
            let g = this.ao;
            if (g != null) {
                let h = g.a();
                let i = 0;
                for (let j = h.length - 1; j >= 0; j--) {
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
                        for (let k = h.length - 1; k >= 0; k--) {
                            let l = h[k];
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
    }
    bb() {
        this.aq--;
        if (this.aq == 0) {
            this.a("IsSuspended");
        }
    }
    r(a, b) {
        if (this.ah) {
            throw new InvalidOperationException(1, UndoUtils.a("LE_NewTransactionWhileSuspended"));
        }
        let c = this.o(a, b);
        if (c == null) {
            throw new InvalidOperationException(1, UndoUtils.a("LE_FactoryNullTransaction"));
        }
        this.bd(c);
        return c;
    }
    bd(a) {
        CoreUtilities.z(a, "group");
        if (nullableNotEquals(a.u, null)) {
            throw new InvalidOperationException(1, UndoUtils.a("LE_TransactionAlreadyOpened"));
        }
        let b = this.p;
        if (b != null) {
            b.aa(a);
        }
        let c = b == null ? this : b;
        a.ae(c);
    }
    be() {
        this.aq++;
        if (this.aq == 1) {
            this.a("IsSuspended");
        }
    }
    bf(a = 1) {
        this.a5(a, true);
    }
    static w(a, b, c, d, e) {
        let f = (g) => {
            let h = g.d == 1 ? d : c;
            if (null == h || !h(g)) {
                return false;
            }
            g.f.av(g.g(0));
            return true;
        };
        return new CustomUndoUnit(a, b, f, e);
    }
    o(a, b) {
        return new UndoTransaction(a, b);
    }
    static as($tProperty, a, b, c, d, e, f) {
        let g = null;
        if (!stringIsNullOrEmpty(d)) {
            let h = f ? "PropertyChangeDescriptionDetailed" : "PropertyChangeDescription";
            let i = e == 1 ? c : b;
            let j = e == 1 ? b : c;
            g = UndoUtils.b(h, d, a, getBoxIfEnum($tProperty, i), getBoxIfEnum($tProperty, j));
        }
        return g;
    }
    a4(a) {
        this.m = null;
        this.a("CurrentTransaction");
    }
    a5(a, b) {
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
        let c = b ? 8 : 4;
        let d = b ? 0 : 1;
        try {
            this.ai(c, true);
            this.ax();
            let e = b ? this.d : this.c;
            let f = new UndoExecuteContext(this, d);
            if (e.count > 0) {
                this.aj = true;
            }
            for (let g = 0, h = Math.min(a, e.count); g < h; g++) {
                let i = e.d();
                this.h = i;
                f.h(i.g);
            }
        }
        finally {
            this.h = null;
            this.ai(c, false);
        }
    }
    bc(a) {
        let b = this.af;
        try {
            this.af = true;
            let c = new UndoExecuteContext(this, 2);
            c.h(a);
        }
        finally {
            this.af = b;
        }
    }
    bh(a) {
        if (this.ah) {
            throw new InvalidOperationException(1, UndoUtils.a("LE_EndTransactionWhileSuspended"));
        }
    }
    v(a, b = false) {
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
        let c = typeCast(UndoTransaction.$, a);
        if (c != null) {
            if (nullableNotEquals(c.u, false)) {
                throw new ArgumentException(1, UndoUtils.a("LE_AddOpenTransaction"));
            }
            if (!b) {
                throw new ArgumentException(1, UndoUtils.a("LE_AddTransactionDirect"));
            }
        }
        if (this.n != null) {
            let d = this.p;
            let e = this.ad || this.ag;
            if (!e) {
                let f = this.l(d, a);
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
                let g = true;
                let h = this.ad;
                if (!h && this.d.count > 0) {
                    let i = this.d.c();
                    let j = this.l(i.g, a);
                    if (j != 0) {
                        this.a9();
                        g = false;
                        if (j == 1) {
                            i.o();
                        }
                        else {
                            let k = this.d.d();
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
                    let l = new UndoHistoryItem(a, 0, this);
                    this.d.n(l);
                    if (!h) {
                        this.a9();
                    }
                }
            }
        }
        return a;
    }
    aw() {
        this.ao = new Stack$1(UndoHistoryItem.$);
        for (let a of fromEnum(this.c)) {
            this.ao.h(a);
        }
    }
    ax() {
        this.ao = null;
    }
    ab(a) {
        return (this.k & a) == a;
    }
    l(a, b) {
        let c = 0;
        if (this.y) {
            let d = this.at == (0);
            if (!d) {
                let e = dateNow();
                d = (+e - +(this.ap)) <= this.at;
            }
            if (d) {
                try {
                    this.ac = true;
                    let f = new UndoMergeContext(this, b);
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
    }
    a3(a, b) {
        this.aa = this.d.count > 0;
        this.z = this.c.count > 0;
        this.j = this.aa ? this.d.c() : null;
        this.i = this.z ? this.c.c() : null;
    }
    a9() {
        this.ap = dateNow();
    }
    ba() {
        if (this.ao == null) {
            return;
        }
        let a = this.ao;
        this.ax();
        for (let b of fromEnum(a)) {
            this.c.n(b);
        }
    }
    ai(a, b, c = true) {
        if (b == this.ab(a)) {
            return false;
        }
        this.k ^= a;
        if (c) {
            this.a(UndoManager.b[truncate(logBase(a, 2))]);
        }
        return true;
    }
    bg() {
        if (this.ac) {
            throw new InvalidOperationException(1, UndoUtils.a("LE_ChangeHistoryInMerge"));
        }
        if (this.ae) {
            throw new InvalidOperationException(1, UndoUtils.a("LE_ChangeHistoryInRemoveAll"));
        }
    }
    get undoManager() {
        return this;
    }
    onChildOpened(a) {
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
    }
    onChildClosed(a, b) {
        CoreUtilities.z(a, "child");
        if (a != this.n) {
            throw new ArgumentException(1, UndoUtils.b("LE_ClosingOtherTransaction", a, this.n));
        }
        this.q = null;
        if (b == 0 && a.p()) {
            this.v(a, true);
        }
    }
}
UndoManager.$t = markType(UndoManager, 'UndoManager', PropertyChangeNotifier.$, [IUndoTransactionOwner_$type]);
UndoManager.b = null;
/**
 * @hidden
 */
export class UndoMergeContext extends Base {
    constructor(a, b) {
        super();
        this.c = null;
        this.a = null;
        CoreUtilities.z(a, "undoManager");
        CoreUtilities.z(b, "unitBeingAdded");
        this.a = a;
        this.c = b;
    }
    get b() {
        return this.a;
    }
    get d() {
        return this.c;
    }
}
UndoMergeContext.$t = markType(UndoMergeContext, 'UndoMergeContext');
/**
 * @hidden
 */
export class UndoUnit extends Base {
    f(a) {
    }
    a(a) {
        return 0;
    }
    c(a) {
        return false;
    }
}
UndoUnit.$t = markType(UndoUnit, 'UndoUnit');
/**
 * @hidden
 */
export class CustomUndoUnit extends UndoUnit {
    constructor(a, b, c, d) {
        super();
        this.h = null;
        this.i = null;
        this.j = null;
        this.g = null;
        CoreUtilities.z(c, "executeMethod");
        this.g = c;
        this.i = a;
        this.j = b;
        this.h = d;
    }
    b(a) {
        return this.g(a);
    }
    e(a, b) {
        return b ? this.j : this.i;
    }
    get_d() {
        return this.h;
    }
    get d() {
        return this.get_d();
    }
}
CustomUndoUnit.$t = markType(CustomUndoUnit, 'CustomUndoUnit', UndoUnit.$);
/**
 * @hidden
 */
export class UndoTransaction extends UndoUnit {
    constructor(a, b) {
        super();
        this.i = null;
        this.s = null;
        this.g = null;
        this.t = Nullable$1.toNullable(Boolean_$type, null);
        this.j = null;
        this.v = null;
        this.w = null;
        this.v = a;
        this.w = b;
        this.i = new StackList$1(UndoUnit.$, 0);
        this.s = new ReadOnlyCollection$1(UndoUnit.$, 1, this.i);
    }
    b(a) {
        if (this.j != null) {
            throw new InvalidOperationException(1, UndoUtils.b("LE_CannotExecuteOpenTransaction", this.j));
        }
        let b = false;
        let c = this.o(a);
        try {
            for (let d of fromEnum(this.i)) {
                if (a.h(d)) {
                    b = true;
                }
            }
        }
        finally {
            if (c != null && !c.q) {
                c.ad();
            }
        }
        return b;
    }
    f(a) {
        super.f(a);
        for (let b of fromEnum(this.s)) {
            a(b);
            b.f(a);
        }
    }
    e(a, b) {
        let c = b ? this.w : this.v;
        if (c == null) {
            if (this.i.count > 0) {
                for (let d of fromEnum(this.i)) {
                    c = this.i.c().e(a, b);
                    if (c != null) {
                        break;
                    }
                }
            }
            if (c == null) {
                c = UndoUtils.a("FallbackTransactionDescription");
            }
        }
        return c;
    }
    a(a) {
        let b = 0;
        if (nullableEquals(this.t, true) && this.i.count > 0) {
            let c = this.i.c();
            b = c.a(a);
            if (b == 2) {
                this.i.d();
                b = 1;
            }
        }
        return b;
    }
    c(a) {
        this.i.o(a);
        return this.i.count == 0;
    }
    get_d() {
        return null;
    }
    get d() {
        return this.get_d();
    }
    get q() {
        return nullableEquals(this.t, false);
    }
    get m() {
        return this.j;
    }
    get n() {
        return typeCast(UndoTransaction.$, this.g);
    }
    get r() {
        return this.s;
    }
    get u() {
        return this.t;
    }
    get h() {
        return this.g;
    }
    get x() {
        return stringFormat("{1}: {0} items", this.s.count, getInstanceType(this).typeName);
    }
    get y() {
        return this.v;
    }
    get z() {
        return this.w;
    }
    ac(a) {
        this.ag();
        let b = this.g.undoManager;
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
    }
    o(a) {
        switch (a.c) {
            case 2: return null;
            case 0:
            case 1:
                let b = this.k(a);
                if (b != null) {
                    a.f.bd(b);
                }
                return b;
            default: return null;
        }
    }
    ag() {
        if (nullableEquals(this.t, null)) {
            throw new InvalidOperationException(1, UndoUtils.a("LE_TransactionNotStarted"));
        }
        if (nullableEquals(this.t, false)) {
            throw new InvalidOperationException(1, UndoUtils.a("LE_TransactionClosed"));
        }
    }
    aa(a) {
        CoreUtilities.z(a, "unit");
        this.ag();
        if (this.j != null) {
            throw new InvalidOperationException(1, UndoUtils.b("LE_AddUnitWhileOpenTransaction", this.j));
        }
        this.i.n(a);
    }
    ab() {
        this.ac(2);
    }
    p() {
        for (let a of fromEnum(this.i)) {
            let b = typeCast(UndoTransaction.$, a);
            if (null != b) {
                if (b.p()) {
                    return true;
                }
            }
            else {
                return true;
            }
        }
        return false;
    }
    static l(a) {
        CoreUtilities.z(a, "group");
        if (nullableNotEquals(a.u, true)) {
            throw new ArgumentException(1, UndoUtils.b("LE_TransactionNotOpened", a));
        }
        while (a.m != null) {
            a = a.m;
        }
        return a;
    }
    ae(a) {
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
    }
    ad() {
        this.ac(0);
    }
    af() {
        this.ac(1);
    }
    k(a) {
        return a.f.o(this.v, this.w);
    }
    get undoManager() {
        return this.g.undoManager;
    }
    onChildOpened(a) {
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
    }
    onChildClosed(a, b) {
        CoreUtilities.z(a, "child");
        this.ag();
        if (a != this.j) {
            throw new ArgumentException(1, UndoUtils.b("LE_ClosingOtherTransaction", a, this.j));
        }
        this.j = null;
        if (b != 0 || !a.p()) {
            this.i.d();
        }
    }
}
UndoTransaction.$t = markType(UndoTransaction, 'UndoTransaction', UndoUnit.$, [IUndoTransactionOwner_$type]);
callStaticConstructors();
//# sourceMappingURL=IUndoTransactionOwner_combined.js.map