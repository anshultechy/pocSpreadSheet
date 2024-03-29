/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, IEnumerable_$type, fromEnum, fromEn, Number_$type, typeCast, Date_$type, String_$type, markType, TypeRegistrar } from "./type";
import { IFastItemsSource_$type } from "./IFastItemsSource";
import { ColumnReference } from "./ColumnReference";
import { List$1 } from "./List$1";
import { Dictionary$2 } from "./Dictionary$2";
import { FastItemsSourceEventArgs } from "./FastItemsSourceEventArgs";
import { ArgumentException } from "./ArgumentException";
import { IFastItemColumn$1_$type } from "./IFastItemColumn$1";
import { Tuple$2 } from "./Tuple$2";
import { FastItemColumn } from "./FastItemColumn";
import { stringIsNullOrEmpty, stringStartsWith, stringEndsWith } from "./string";
/**
 * @hidden
 */
var FastItemsSource = /** @class */ (function (_super) {
    tslib_1.__extends(FastItemsSource, _super);
    function FastItemsSource() {
        var _this = _super.call(this) || this;
        _this.event = null;
        _this.a = new Dictionary$2(String_$type, ColumnReference.$, 0);
        _this.d = null;
        _this.c = new List$1(Base.$, 0);
        _this.b = null;
        return _this;
    }
    FastItemsSource.prototype.o = function (a, b, c) {
        if (this.event != null) {
            this.event(this, new FastItemsSourceEventArgs(0, a, b, c));
        }
    };
    FastItemsSource.prototype.p = function (a, b) {
        if (this.event != null) {
            this.event(this, new FastItemsSourceEventArgs(1, a, b));
        }
    };
    Object.defineProperty(FastItemsSource.prototype, "e", {
        get: function () {
            return this.d;
        },
        set: function (a) {
            var e_1, _a;
            if (this.d == a) {
                return;
            }
            this.m();
            this.d = a;
            this.c.clear();
            this.b = null;
            this.g();
            try {
                for (var _b = tslib_1.__values(fromEnum(this.a.values)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var b = _c.value;
                    b.a.reset();
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            this.o(1, 0, this.c.count);
        },
        enumerable: true,
        configurable: true
    });
    FastItemsSource.prototype.m = function () {
    };
    FastItemsSource.prototype.n = function (a, b, c) {
        var d = a;
        switch (c.action) {
            case 0:
                d.h(c.newStartingIndex, c.newItems);
                break;
            case 1:
                d.j(c.oldStartingIndex, c.oldItems);
                break;
            case 2:
                d.k(c.newStartingIndex, c.oldItems, c.newItems);
                break;
            case 4:
                d.l();
                break;
        }
    };
    FastItemsSource.prototype.g = function () {
        this.c.t(this.c.count, this.d);
    };
    FastItemsSource.prototype.h = function (a, b) {
        var e_2, _a;
        if (this.b != null) {
            for (var c = 0; c < b.count; ++c) {
                this.b.addItem(b.item(c), a + c);
            }
            for (var d = a; d < this.c.count; ++d) {
                this.b.item(this.c._inner[d], d + b.count);
            }
        }
        this.c.t(a, b);
        try {
            for (var _b = tslib_1.__values(fromEnum(this.a.values)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var e = _c.value;
                e.a.insertRange(a, b.count);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        this.o(1, a, b.count);
    };
    FastItemsSource.prototype.j = function (a, b) {
        var e_3, _a, e_4, _b;
        this.c.v(a, b.count);
        if (this.b != null) {
            try {
                for (var _c = tslib_1.__values(fromEn(b)), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var c = _d.value;
                    this.b.removeItem(c);
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                }
                finally { if (e_3) throw e_3.error; }
            }
            for (var d = a; d < this.c.count; ++d) {
                this.b.item(this.c._inner[d], d);
            }
        }
        try {
            for (var _e = tslib_1.__values(fromEnum(this.a.values)), _f = _e.next(); !_f.done; _f = _e.next()) {
                var e = _f.value;
                e.a.removeRange(a, b.count);
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
            }
            finally { if (e_4) throw e_4.error; }
        }
        this.o(0, a, b.count);
    };
    FastItemsSource.prototype.k = function (a, b, c) {
        var e_5, _a, e_6, _b;
        for (var d = 0; d < c.count; ++d) {
            this.c._inner[a + d] = c.item(d);
        }
        if (this.b != null) {
            try {
                for (var _c = tslib_1.__values(fromEn(b)), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var e = _d.value;
                    this.b.removeItem(e);
                }
            }
            catch (e_5_1) { e_5 = { error: e_5_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                }
                finally { if (e_5) throw e_5.error; }
            }
            for (var f = 0; f < c.count; ++f) {
                this.b.addItem(c.item(f), a + f);
            }
        }
        try {
            for (var _e = tslib_1.__values(fromEnum(this.a.values)), _f = _e.next(); !_f.done; _f = _e.next()) {
                var g = _f.value;
                g.a.replaceRange(a, c.count);
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
            }
            finally { if (e_6) throw e_6.error; }
        }
        this.o(2, a, b.count);
    };
    FastItemsSource.prototype.l = function () {
        var e_7, _a;
        this.c.clear();
        this.b = null;
        this.c.t(0, this.d);
        try {
            for (var _b = tslib_1.__values(fromEnum(this.a.values)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var a = _c.value;
                a.a.reset();
            }
        }
        catch (e_7_1) { e_7 = { error: e_7_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_7) throw e_7.error; }
        }
        this.o(4, 0, this.c.count);
    };
    FastItemsSource.prototype.i = function (a, b) {
        var _this = this;
        var e_8, _a, e_9, _b;
        var c = null;
        var d = this.indexOf(a);
        if (d == -1) {
            throw new ArgumentException(1, "item");
        }
        if (stringIsNullOrEmpty(b)) {
            try {
                for (var _c = tslib_1.__values(fromEnum(this.a)), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var e = _d.value;
                    e.value.a.replaceRange(d, 1);
                    this.p(d, e.value.a.propertyName);
                }
            }
            catch (e_8_1) { e_8 = { error: e_8_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                }
                finally { if (e_8) throw e_8.error; }
            }
        }
        else if (b == "Item[]") {
            try {
                for (var _e = tslib_1.__values(fromEnum(this.a)), _f = _e.next(); !_f.done; _f = _e.next()) {
                    var f = _f.value;
                    if (f.key != null && stringStartsWith(f.key, "[") && stringEndsWith(f.key, "]")) {
                        f.value.a.replaceRange(d, 1);
                        this.p(d, f.value.a.propertyName);
                    }
                }
            }
            catch (e_9_1) { e_9 = { error: e_9_1 }; }
            finally {
                try {
                    if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                }
                finally { if (e_9) throw e_9.error; }
            }
        }
        else {
            if (((function () { var g = _this.a.tryGetValue(b, c); c = g.p1; return g.ret; })())) {
                c.a.replaceRange(d, 1);
            }
            if (((function () { var g = _this.a.tryGetValue(b + "_object", c); c = g.p1; return g.ret; })())) {
                c.a.replaceRange(d, 1);
            }
            this.p(d, b);
        }
    };
    Object.defineProperty(FastItemsSource.prototype, "count", {
        get: function () {
            return this.c.count;
        },
        enumerable: true,
        configurable: true
    });
    FastItemsSource.prototype.item = function (a) {
        return this.c._inner[a];
    };
    FastItemsSource.prototype.getEnumeratorObject = function () {
        return this.c.getEnumerator();
    };
    FastItemsSource.prototype.indexOf = function (a) {
        var _this = this;
        var b;
        if (this.b == null && this.c.count > 0) {
            this.b = new Dictionary$2(Base.$, Number_$type, 0);
            var contents_ = this.c;
            var index_ = this.b;
            for (var j_ = 0; j_ < this.c.count; j_++) {
                var c = contents_._inner[j_];
                if (!this.b.containsKey(c)) {
                    this.b.addItem(c, j_);
                }
            }
        }
        if (this.b != null && ((function () { var d = _this.b.tryGetValue(a, b); b = d.p1; return d.ret; })())) {
            return b;
        }
        else {
            return -1;
        }
    };
    FastItemsSource.prototype.registerColumnDateTime = function (a, b, c) {
        var _this = this;
        var d = null;
        if (a != null) {
            var e_10 = null;
            if (!((function () { var f = _this.a.tryGetValue(a, e_10); e_10 = f.p1; return f.ret; })())) {
                var f = FastItemsSource.f(a).c;
                e_10 = new ColumnReference(TypeRegistrar.create("FastItemDateTimeColumn", this, f, b, c));
                this.a.addItem(a, e_10);
            }
            e_10.b = e_10.b + 1;
            d = typeCast(IFastItemColumn$1_$type.specialize(Date_$type), e_10.a);
        }
        return d;
    };
    FastItemsSource.prototype.registerColumnObject = function (a, b, c) {
        var _this = this;
        var d = null;
        var e = a + "_object";
        if (a != null) {
            var f_1 = null;
            if (!((function () { var g = _this.a.tryGetValue(e, f_1); f_1 = g.p1; return g.ret; })())) {
                var g = FastItemsSource.f(a).c;
                f_1 = new ColumnReference(TypeRegistrar.create("FastItemObjectColumn", this, g, b, c));
                this.a.addItem(e, f_1);
            }
            f_1.b = f_1.b + 1;
            d = typeCast(IFastItemColumn$1_$type.specialize(Base.$), f_1.a);
        }
        return d;
    };
    FastItemsSource.prototype.registerColumnInt = function (a, b, c) {
        var _this = this;
        var d = null;
        if (a == null) {
            a = "";
        }
        var e = null;
        if (!((function () { var f = _this.a.tryGetValue(a, e); e = f.p1; return f.ret; })())) {
            var f = FastItemsSource.f(a).c;
            e = new ColumnReference(TypeRegistrar.create("FastItemIntColumn", this, f, b, c));
            this.a.addItem(a, e);
        }
        e.b = e.b + 1;
        d = typeCast(IFastItemColumn$1_$type.specialize(Number_$type), e.a);
        return d;
    };
    FastItemsSource.prototype.registerColumn = function (a, b, c) {
        var _this = this;
        var d = null;
        if (a == null) {
            a = "";
        }
        var e = null;
        if (!((function () { var f = _this.a.tryGetValue(a, e); e = f.p1; return f.ret; })())) {
            var f = FastItemsSource.f(a).c;
            e = new ColumnReference(new FastItemColumn(this, f, b, c));
            this.a.addItem(a, e);
        }
        e.b = e.b + 1;
        d = typeCast(IFastItemColumn$1_$type.specialize(Number_$type), e.a);
        return d;
    };
    FastItemsSource.prototype.deregisterColumn = function (a) {
        var _this = this;
        var b = a != null ? a.propertyName : null;
        var c = b;
        if (typeCast(IFastItemColumn$1_$type.specialize(Base.$), a) !== null) {
            c += "_object";
        }
        if (b != null) {
            var d_1 = null;
            if (((function () { var e = _this.a.tryGetValue(b, d_1); d_1 = e.p1; return e.ret; })())) {
                d_1.b = d_1.b - 1;
                if (d_1.b == 0) {
                    this.a.removeItem(c);
                }
            }
        }
    };
    FastItemsSource.prototype.asArray = function () {
        return this.c.asArray();
    };
    FastItemsSource.prototype.handleCollectionChanged = function (a) {
        switch (a.action) {
            case 0:
                this.h(a.newStartingIndex, a.newItems);
                break;
            case 1:
                this.j(a.oldStartingIndex, a.oldItems);
                break;
            case 2:
                this.k(a.newStartingIndex, a.oldItems, a.newItems);
                break;
            case 4:
                this.l();
                break;
        }
    };
    FastItemsSource.f = function (a) {
        var b = a.split('!');
        if (b.length == 2) {
            return new Tuple$2(String_$type, String_$type, b[0], b[1]);
        }
        else {
            return new Tuple$2(String_$type, String_$type, a, null);
        }
    };
    FastItemsSource.prototype.getItem = function (a) {
        return this.item(a);
    };
    FastItemsSource.$t = markType(FastItemsSource, 'FastItemsSource', Base.$, [IEnumerable_$type, IFastItemsSource_$type]);
    return FastItemsSource;
}(Base));
export { FastItemsSource };
//# sourceMappingURL=FastItemsSource.js.map