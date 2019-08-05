/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, IEnumerable_$type, fromEnum, typeCast, Date_$type, Boolean_$type, Array_$type, String_$type, runOn, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { TypeDescriptionPropretyTransforms } from "./TypeDescriptionPropretyTransforms";
import { TypeDescriptionCleanups } from "./TypeDescriptionCleanups";
import { Dictionary$2 } from "./Dictionary$2";
import { Description } from "./Description";
import { DescriptionTreeNode } from "./DescriptionTreeNode";
import { ContainerState } from "./ContainerState";
import { Queue$1 } from "./Queue$1";
import { DescriptionTreeAction } from "./DescriptionTreeAction";
import { DescriptionRef } from "./DescriptionRef";
import { DescriptionSerializerBuilder } from "./DescriptionSerializerBuilder";
import { DescriptionSerializer } from "./DescriptionSerializer";
import { DataSourceLocalDataProvider } from "./DataSourceLocalDataProvider";
import { JsonDictionaryParser } from "./JsonDictionaryParser";
import { JsonDictionaryObject } from "./JsonDictionaryObject";
import { JsonDictionaryValue } from "./JsonDictionaryValue";
import { JsonDictionaryArray } from "./JsonDictionaryArray";
import { List$1 } from "./List$1";
import { DescriptionTreeBuilder } from "./DescriptionTreeBuilder";
import { DescriptionTreeReconciler } from "./DescriptionTreeReconciler";
import { NotImplementedException } from "./NotImplementedException";
import { ComponentRendererAdapter } from "./ComponentRendererAdapter";
import { stringIsNullOrEmpty, stringStartsWith } from "./string";
/**
 * @hidden
 */
var ComponentRenderer = /** @class */ (function (_super) {
    tslib_1.__extends(ComponentRenderer, _super);
    function ComponentRenderer() {
        var _this = _super.call(this) || this;
        _this.d = null;
        _this._context = null;
        _this.i = null;
        _this.f = null;
        _this.ag = new Dictionary$2(Base.$, Description.$, 0);
        _this.af = new Dictionary$2(Base.$, DescriptionTreeNode.$, 0);
        _this.aj = new Dictionary$2(Base.$, ContainerState.$, 0);
        _this.ah = new Dictionary$2(Base.$, Queue$1.$.specialize(Queue$1.$.specialize(DescriptionTreeAction.$)), 0);
        _this.ae = new Dictionary$2(Base.$, Boolean_$type, 0);
        _this.ai = new Dictionary$2(String_$type, DescriptionRef.$, 0);
        _this.ak = new Dictionary$2(String_$type, Base.$, 0);
        _this.al = new Dictionary$2(String_$type, Base.$, 0);
        var a = _this.e();
        _this.d = a;
        _this.context = new TypeDescriptionContext(a, ComponentRenderer.platform);
        _this.i = new TypeDescriptionPropretyTransforms();
        _this.f = new TypeDescriptionCleanups();
        return _this;
    }
    Object.defineProperty(ComponentRenderer.prototype, "context", {
        get: function () {
            return this._context;
        },
        set: function (a) {
            this._context = a;
        },
        enumerable: true,
        configurable: true
    });
    ComponentRenderer.prototype.e = function () {
        return (new ComponentRendererAdapter());
    };
    ComponentRenderer.prototype.toJson = function (a) {
        var e_1, _a, e_2, _b;
        var b = new DescriptionSerializerBuilder();
        var c = new DescriptionSerializer();
        b.f("{");
        b.i();
        b.f("\"descriptions\": {");
        b.i();
        var d = true;
        try {
            for (var _c = tslib_1.__values(fromEnum(this.af.keys)), _d = _c.next(); !_d.done; _d = _c.next()) {
                var e = _d.value;
                if (d) {
                    d = false;
                }
                else {
                    b.f(",");
                }
                var f = e;
                var g = this.af.item(e);
                var h = "root";
                h = a(f);
                if (stringIsNullOrEmpty(h)) {
                    h = "root";
                }
                b.e("\"" + h + "\"");
                b.e(": ");
                c.l(this.context, g, b);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_1) throw e_1.error; }
        }
        b.f("");
        b.h();
        b.e("}");
        if (this.al.count > 0) {
            b.e(",");
        }
        b.f("");
        if (this.al.count > 0) {
            d = true;
            b.f("refs: {");
            b.i();
            try {
                for (var _e = tslib_1.__values(fromEnum(this.al.keys)), _f = _e.next(); !_f.done; _f = _e.next()) {
                    var i = _f.value;
                    if (!this.k(i, this.al.item(i))) {
                        continue;
                    }
                    if (d) {
                        d = false;
                    }
                    else {
                        b.f(",");
                    }
                    this.b1(b, i, this.al.item(i));
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                }
                finally { if (e_2) throw e_2.error; }
            }
            b.f("");
            b.h();
            b.f("}");
        }
        b.h();
        b.f("}");
        return b.toString();
    };
    ComponentRenderer.prototype.b1 = function (a, b, c) {
        a.e("\"" + b + "\": ");
        this.b2(a, c);
    };
    ComponentRenderer.prototype.b2 = function (a, b) {
        if (this.r(b)) {
            if (typeof b === 'string') {
                a.e(b == null ? "null" : "\"" + b.toString() + "\"");
            }
            else if (typeof b === 'number') {
                a.e(b == null ? "null" : b.toString());
            }
            else if (typeof b === 'number') {
                a.e(b == null ? "null" : b.toString());
            }
            else if (typeof b === 'number') {
                a.e(b == null ? "null" : b.toString());
            }
            else if (typeof b === 'number') {
                a.e(b == null ? "null" : b.toString());
            }
            else if (typeof b === 'number') {
                a.e(b == null ? "null" : b.toString());
            }
            else if (typeof b === 'number') {
                a.e(b == null ? "null" : b.toString());
            }
            else if (typeof b === 'number') {
                a.e(b == null ? "null" : b.toString());
            }
            else if (typeCast(Date_$type, b) !== null) {
                var v_ = b;
                a.e("\"" + (v_.toJSON()) + "\"");
            }
            else if (typeCast(Boolean_$type, b) !== null) {
                a.e(b == null ? "null" : b.toString().toLowerCase());
            }
            else {
                a.e("null");
            }
        }
        else {
            if (b == null) {
                a.e("null");
                return;
            }
            if (this.p(b)) {
                a.f("[");
                a.i();
                var c = new DataSourceLocalDataProvider();
                c.dataSource = b;
                for (var d = 0; d < c.actualCount; d++) {
                    if (d > 0) {
                        a.f(",");
                    }
                    this.b0(a, c, d);
                }
                a.f("");
                a.h();
                a.e("]");
            }
            else {
                var e = [b];
                var f = new DataSourceLocalDataProvider();
                f.dataSource = e;
                this.b0(a, f, 0);
            }
        }
    };
    ComponentRenderer.prototype.r = function (a) {
        if (typeof a === 'string') {
            return true;
        }
        if (typeof a === 'number' || typeof a === 'number' || typeof a === 'number' || typeof a === 'number' || typeof a === 'number' || typeof a === 'number' || typeof a === 'number') {
            return true;
        }
        if (typeCast(Date_$type, a) !== null) {
            return true;
        }
        if (typeCast(Boolean_$type, a) !== null) {
            return true;
        }
        return false;
    };
    ComponentRenderer.prototype.p = function (a) {
        if (typeCast(Array_$type, a) !== null) {
            return true;
        }
        if (typeCast(IEnumerable_$type, a) !== null) {
            return true;
        }
        return false;
    };
    ComponentRenderer.prototype.b0 = function (a, b, c) {
        a.f("{");
        a.i();
        var d = b.actualSchema;
        for (var e = 0; e < d.propertyNames.length; e++) {
            if (e > 0) {
                a.f(",");
            }
            var f = d.propertyNames[e];
            if (stringStartsWith(f, "[")) {
                f = f.substr(1, f.length - 2);
            }
            a.e("\"" + f + "\"");
            a.e(": ");
            var g = b.getItemValue(b.getItemAtIndex(c), d.propertyNames[e]);
            switch (d.propertyTypes[e]) {
                case 0:
                    a.e(g == null ? "null" : "\"" + g.toString() + "\"");
                    break;
                case 2:
                    a.e(g == null ? "null" : "\"" + g.toString() + "\"");
                    break;
                case 10:
                case 6:
                case 5:
                case 1:
                case 3:
                case 4:
                case 7:
                    a.e(g == null ? "null" : g.toString());
                    break;
                case 8:
                    var v_ = g;
                    a.e("\"" + (v_.toJSON()) + "\"");
                    break;
                case 11:
                    this.b2(a, g);
                    break;
            }
        }
        a.h();
        a.f("}");
    };
    ComponentRenderer.prototype.k = function (a, b) {
        if (b == null) {
            return true;
        }
        var v_ = b;
        if ((typeof v_ === 'function')) {
            return false;
        }
        return true;
    };
    ComponentRenderer.prototype.loadJson = function (a, b) {
        var c = new JsonDictionaryParser();
        var d = c.parse(a);
        var e = new DescriptionSerializer();
        var f = null;
        if (typeCast(JsonDictionaryObject.$, d) !== null) {
            var g = d;
            if (g.c("descriptions")) {
                var h = g.item("descriptions");
                if (typeCast(JsonDictionaryObject.$, h) !== null) {
                    var i = h;
                    var j = i.a();
                    for (var k = 0; k < j.length; k++) {
                        var l = j[k];
                        var m = i.item(l);
                        var n = b(l);
                        if (n == null) {
                            continue;
                        }
                        f = n;
                        var o = false;
                        var p = e.d(this.context, m, o);
                        if (p.result == null) {
                            continue;
                        }
                        this.render(p.result, n);
                    }
                }
            }
            if (g.c("refs") && f != null) {
                var q = g.item("refs");
                if (typeCast(JsonDictionaryObject.$, q) !== null) {
                    var r = q;
                    var s = r.a();
                    for (var t = 0; t < s.length; t++) {
                        var u = s[t];
                        var v = r.item(u);
                        if (typeCast(JsonDictionaryValue.$, v) !== null) {
                            var w = v;
                            this.provideRefValue(f, u, w.value);
                        }
                        else if (typeCast(JsonDictionaryArray.$, v) !== null) {
                            var x = v;
                            var y = this.a(x);
                            this.provideRefValue(f, u, y);
                        }
                        else {
                            var z = this.a4(v);
                            this.provideRefValue(f, u, z);
                        }
                    }
                }
            }
        }
    };
    ComponentRenderer.prototype.a = function (a) {
        var b = new Array(a.items.length);
        for (var c = 0; c < a.items.length; c++) {
            var d = this.a4(a.items[c]);
            b[c] = d;
        }
        return b;
    };
    ComponentRenderer.prototype.a4 = function (a) {
        var b = {};
        var dict_ = b;
        var c = a.a();
        for (var d = 0; d < c.length; d++) {
            var key_ = c[d];
            if (typeCast(JsonDictionaryObject.$, a.item(key_)) !== null) {
                var val_ = this.a4(a.item(key_));
                dict_[key_] = val_;
            }
            else if (typeCast(JsonDictionaryArray.$, a.item(key_)) !== null) {
                var val_ = this.a(a.item(key_));
                dict_[key_] = val_;
            }
            else {
                var val_ = a.item(key_).value;
                dict_[key_] = val_;
            }
        }
        return dict_;
    };
    ComponentRenderer.prototype.render = function (a, b) {
        var _this = this;
        if (!this.aj.containsKey(b)) {
            this.aj.item(b, new ContainerState());
            this.aj.item(b).e = b;
        }
        this.ag.item(b, a);
        this.bn(b, function () { return _this.bw(b); });
    };
    ComponentRenderer.prototype.bn = function (a, b) {
        this.d.onUIThread(a, b);
    };
    ComponentRenderer.prototype.bw = function (a) {
        if (this.ag.containsKey(a)) {
            var b = this.ag.item(a);
            this.ag.removeItem(a);
            var c = DescriptionTreeBuilder.createTree(this.context, b);
            var d = null;
            if (this.af.containsKey(a)) {
                d = this.af.item(a);
            }
            var e = DescriptionTreeReconciler.b(d, c);
            this.af.item(a, c);
            this.bx(a, e);
        }
    };
    ComponentRenderer.prototype.provideRefValue = function (a, b, c) {
        var _this = this;
        this.bn(a, function () {
            if (!_this.aj.containsKey(a)) {
                _this.aj.addItem(a, ((function () {
                    var $ret = new ContainerState();
                    $ret.e = a;
                    return $ret;
                })()));
            }
            var d = _this.aj.item(a);
            _this.br(b, c, true);
        });
    };
    ComponentRenderer.prototype.removeRefValue = function (a, b) {
        var _this = this;
        this.bn(a, function () {
            if (!_this.aj.containsKey(a)) {
                _this.aj.addItem(a, ((function () {
                    var $ret = new ContainerState();
                    $ret.e = a;
                    return $ret;
                })()));
            }
            var c = _this.aj.item(a);
            _this.removeRefValueCore(b, true);
        });
    };
    ComponentRenderer.prototype.clearRefValues = function (a) {
        var _this = this;
        this.bn(a, function () {
            if (!_this.aj.containsKey(a)) {
                _this.aj.addItem(a, ((function () {
                    var $ret = new ContainerState();
                    $ret.e = a;
                    return $ret;
                })()));
            }
            var b = _this.aj.item(a);
            _this.clearUserRefValues();
        });
    };
    ComponentRenderer.prototype.bx = function (a, b) {
        var c = this.aj.item(a);
        this.bo(a, c, b);
    };
    ComponentRenderer.prototype.bz = function (a, b) {
        this.bl(a, b, true);
    };
    ComponentRenderer.prototype.b5 = function (a, b) {
        this.bl(a, b, false);
    };
    ComponentRenderer.prototype.bl = function (a, b, c) {
        if (!c) {
            if (this.ae.containsKey(a) && this.ae.item(a)) {
                return;
            }
        }
        this.ae.item(a, true);
        var d = true;
        while (d && this.ah.item(a).count > 0) {
            while (this.ah.item(a).count > 0 && this.ah.item(a).c().count < 1) {
                this.ah.item(a).b();
            }
            if (this.ah.item(a).count < 1) {
                break;
            }
            var e = this.ah.item(a).c();
            while (e.count > 0) {
                var f = e.b();
                d = this.s(a, b, f);
                if (!d) {
                    break;
                }
            }
        }
        if (d) {
            this.ae.item(a, false);
        }
    };
    ComponentRenderer.prototype.bo = function (a, b, c) {
        var d = new Queue$1(DescriptionTreeAction.$);
        for (var e = 0; e < c.count; e++) {
            d.g(c._inner[e]);
        }
        if (!this.ah.containsKey(a)) {
            this.ah.addItem(a, new Queue$1(Queue$1.$.specialize(DescriptionTreeAction.$)));
        }
        this.ah.item(a).g(d);
        this.b5(a, b);
    };
    ComponentRenderer.prototype.bp = function (a, b, c) {
        for (var d = 0; d < c.count; d++) {
            this.s(a, b, c._inner[d]);
        }
    };
    ComponentRenderer.prototype.s = function (a, b, c) {
        switch (c.a) {
            case 5: return this.t(a, b, c);
            case 2: return this.u(a, b, c);
            case 4: return this.v(a, b, c);
            case 3: return this.w(a, b, c);
            case 1: return this.x(a, b, c);
            case 0: return this.y(a, b, c);
        }
        return true;
    };
    ComponentRenderer.prototype.y = function (a, b, c) {
        var d = this.a9(a, b, c);
        this.ad(a, b, c, d);
        return true;
    };
    ComponentRenderer.prototype.ad = function (a, b, c, d) {
        var e = this.a6(c, a, b);
        e = this.i.b(ComponentRenderer.platform, e, c);
        if (c.c != null && c.c.knownType == 9) {
            this.ac(a, b, c.h(ComponentRenderer.platform), c.c, e, d);
        }
        else {
            this.b3(a, b, c.h(ComponentRenderer.platform), e, c.g, d);
        }
        return true;
    };
    ComponentRenderer.prototype.ac = function (a, b, c, d, e, f) {
        this.d.setOrUpdateCollectionOnTarget(a, c, d, this.context, f, e);
        return true;
    };
    ComponentRenderer.prototype.a6 = function (a, b, c) {
        if (a.c == null) {
            return a.f;
        }
        switch (a.c.knownType) {
            case 10: return this.ao(a, b, c);
            case 7: return this.ap(a);
            case 4: return this.aq(a);
            case 6: return this.ar(a);
            case 9: return this.ao(a, b, c);
            case 5: return this.as(a);
            case 16: return this.at(a);
            case 20: return this.ba(a, c);
            case 15: return null;
            case 3: return this.au(a);
            case 19: return this.bb(a, c);
            case 8: return this.aw(a, b, c);
            case 13: return null;
            case 18: return this.bc(a, c);
            case 1: return this.ax(a);
            case 11: return this.ay(a);
            case 14: return this.az(a);
            case 12: return this.a0(a);
            case 2: return this.a1(a);
            case 21: return this.a2(a);
            case 17: return this.a3(a);
            case 0: return null;
        }
        return null;
    };
    ComponentRenderer.prototype.a3 = function (a) {
        throw new NotImplementedException(0);
    };
    ComponentRenderer.prototype.a2 = function (a) {
        return a.f;
    };
    ComponentRenderer.prototype.a1 = function (a) {
        return a.f != null ? a.f.toString() : null;
    };
    ComponentRenderer.prototype.a0 = function (a) {
        var b = a.f;
        var width_ = b.width;
        var height_ = b.height;
        var c = { width: width_, height: height_ };
        return c;
    };
    ComponentRenderer.prototype.az = function (a) {
        var b = a.f;
        var top_ = b.top;
        var left_ = b.left;
        var width_ = b.width;
        var height_ = b.height;
        var c = { left: left_, top: top_, width: width_, height: height_ };
        return c;
    };
    ComponentRenderer.prototype.ay = function (a) {
        var b = a.f;
        var x_ = b.x;
        var y_ = b.y;
        var c = { x: x_, y: y_ };
        return c;
    };
    ComponentRenderer.prototype.ax = function (a) {
        return a.f;
    };
    ComponentRenderer.prototype.b = function (a) {
        if (this.ai.containsKey(a)) {
            var b = this.ai.item(a);
            return b;
        }
        var c = new DescriptionRef(a);
        this.ai.addItem(a, c);
        return c;
    };
    ComponentRenderer.prototype.bc = function (a, b) {
        return a.f == null ? null : this.b(a.f);
    };
    ComponentRenderer.prototype.aw = function (a, b, c) {
        var d = this.a5(a.c.specificType, a.f, b, c);
        return d;
    };
    ComponentRenderer.prototype.bb = function (a, b) {
        return a.f == null ? null : this.b(a.f);
    };
    ComponentRenderer.prototype.au = function (a) {
        return a.f;
    };
    ComponentRenderer.prototype.ba = function (a, b) {
        return a.f == null ? null : this.b(a.f);
    };
    ComponentRenderer.prototype.be = function (a) {
        return a;
    };
    ComponentRenderer.prototype.at = function (a) {
        var b = a.f;
        if (b == null) {
            return null;
        }
        var c = new Array(b.length);
        for (var d = 0; d < b.length; d++) {
            c[d] = this.be(b[d]);
        }
        return c;
    };
    ComponentRenderer.prototype.as = function (a) {
        return this.be(a.f);
    };
    ComponentRenderer.prototype.ar = function (a) {
        var b = a.f;
        if (b == null) {
            return null;
        }
        var c = new Array(b.length);
        for (var d = 0; d < b.length; d++) {
            c[d] = this.bd(b[d]);
        }
        return c;
    };
    ComponentRenderer.prototype.bd = function (a) {
        return a;
    };
    ComponentRenderer.prototype.aq = function (a) {
        return this.bd(a.f);
    };
    ComponentRenderer.prototype.ap = function (a) {
        return a.f;
    };
    ComponentRenderer.prototype.ao = function (a, b, c) {
        if (a.f == null) {
            return null;
        }
        var d = a.f;
        var e = new List$1(Base.$, 0);
        var f = a.c.specificType;
        if (a.c.knownType == 9) {
            f = a.c.collectionElementType;
        }
        for (var g = 0; g < d.length; g++) {
            var h = f;
            if (typeCast(DescriptionTreeNode.$, d[g]) !== null) {
                var i = d[g];
                if (i.b("Type")) {
                    h = i.a("Type").b;
                }
            }
            var j = this.a5(h, d[g], b, c);
            e.add1(j);
        }
        return e.toArray();
    };
    ComponentRenderer.prototype.b3 = function (a, b, c, d, e, f) {
        var _this = this;
        if (typeCast(DescriptionRef.$, d) !== null) {
            var g = d;
            var h = false;
            if (e != null && typeof e === 'string') {
                if (this.n(e)) {
                    var i = this.c(e);
                    if (Base.equalsStatic(i, d)) {
                        h = true;
                    }
                    else {
                        i.i(f, c);
                    }
                }
            }
            if (this.o(d)) {
                d = this.a8(d);
                this.b4(f, c, d, e);
            }
            var j = null;
            j = function (k, l) {
                var m = _this.a8(k);
                _this.b4(f, c, m, e);
            };
            if (!h) {
                g.f(f, c, j);
            }
            return;
        }
        this.b4(f, c, d, e);
    };
    ComponentRenderer.prototype.br = function (a, b, c) {
        var d = null;
        if (c) {
            if (this.al.containsKey(a)) {
                d = this.al.item(a);
            }
            this.al.item(a, b);
        }
        else {
            if (this.ak.containsKey(a)) {
                d = this.ak.item(a);
            }
            this.ak.item(a, b);
        }
        if (this.ai.containsKey(a)) {
            this.ai.item(a).e(d, b);
        }
    };
    ComponentRenderer.prototype.removeRefValueCore = function (a, b) {
        var c = null;
        if (b) {
            if (this.al.containsKey(a)) {
                c = this.al.item(a);
            }
            this.al.removeItem(a);
        }
        else {
            if (this.ak.containsKey(a)) {
                c = this.ak.item(a);
            }
            this.ak.removeItem(a);
        }
        if (this.ai.containsKey(a)) {
            this.ai.item(a).e(c, this.a8(this.ai.item(a)));
            if (this.ai.item(a).b <= 0) {
                this.ai.item(a).g();
                this.ai.removeItem(a);
            }
        }
    };
    ComponentRenderer.prototype.clearUserRefValues = function () {
        var e_3, _a, e_4, _b;
        var a = new List$1(String_$type, 0);
        try {
            for (var _c = tslib_1.__values(fromEnum(this.al.keys)), _d = _c.next(); !_d.done; _d = _c.next()) {
                var b = _d.value;
                a.add(b);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_3) throw e_3.error; }
        }
        try {
            for (var _e = tslib_1.__values(fromEnum(a)), _f = _e.next(); !_f.done; _f = _e.next()) {
                var c = _f.value;
                this.removeRefValueCore(c, true);
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
            }
            finally { if (e_4) throw e_4.error; }
        }
    };
    ComponentRenderer.prototype.o = function (a) {
        return this.al.containsKey(a.d) || this.ak.containsKey(a.d);
    };
    ComponentRenderer.prototype.a8 = function (a) {
        if (this.al.containsKey(a.d)) {
            return this.al.item(a.d);
        }
        if (this.ak.containsKey(a.d)) {
            return this.ak.item(a.d);
        }
        return null;
    };
    ComponentRenderer.prototype.n = function (a) {
        return this.ai.containsKey(a);
    };
    ComponentRenderer.prototype.c = function (a) {
        return this.ai.item(a);
    };
    ComponentRenderer.prototype.a9 = function (a, b, c) {
        return b.f(c.b.f);
    };
    ComponentRenderer.prototype.x = function (a, b, c) {
        var d = this.a9(a, b, c);
        this.ab(a, b, c, d);
        return true;
    };
    ComponentRenderer.prototype.ab = function (a, b, c, d) {
        this.d.resetPropertyOnTarget(a, c.h(ComponentRenderer.platform), c.c, d);
        return true;
    };
    ComponentRenderer.prototype.w = function (a, b, c) {
        if (c.b == null) {
            return this.aa(a, b, c);
        }
        else {
            var d = this.a9(a, b, c);
            this.by(a, b, c, d);
        }
        return true;
    };
    ComponentRenderer.prototype.by = function (a, b, c, d) {
        var e = c.h(ComponentRenderer.platform);
        var f = this.a5(c.c.collectionElementType, c.f, a, b);
        this.d.replaceItemInCollection(e, c.c, d, c.d, f);
        if (c.g != null && typeCast(DescriptionTreeNode.$, c.g) !== null) {
            var g = c.g.f;
            if (g >= 0) {
                var h = b.f(g);
                if (h != null) {
                    this.bk(a, h, b);
                }
            }
        }
    };
    ComponentRenderer.prototype.aa = function (a, b, c) {
        var _this = this;
        var d = this.d.getRootObject(a);
        if (d != null) {
            this.bk(a, d, b);
        }
        if (!(typeCast(DescriptionTreeNode.$, c.f) !== null)) {
            throw new NotImplementedException(0);
        }
        var e = c.f;
        var f = false;
        this.d.replaceRootItem(a, e.h, this.context, function (g) {
            var h = _this.d.getRootObject(a);
            b.g(e.f, h, e, runOn(_this, _this.br));
            var i = _this.am(e);
            _this.bp(a, b, i);
            f = true;
            if (g) {
                _this.bz(a, b);
            }
        });
        return f;
    };
    ComponentRenderer.prototype.bk = function (a, b, c) {
        var e_5, _a;
        var d = this.an(a, b, c);
        try {
            for (var _b = tslib_1.__values(fromEnum(this.ai.values)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var e = _c.value;
                e.h(b);
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_5) throw e_5.error; }
        }
        if (d != -1) {
            c.h(d, runOn(this, this.removeRefValueCore));
        }
        this.f.b(ComponentRenderer.platform, b);
    };
    ComponentRenderer.prototype.an = function (a, b, c) {
        return c.d(b);
    };
    ComponentRenderer.prototype.v = function (a, b, c) {
        if (c.b == null) {
            return this.z(a, b, c);
        }
        else {
            var d = this.a9(a, b, c);
            this.bs(a, b, c, d);
        }
        return true;
    };
    ComponentRenderer.prototype.bs = function (a, b, c, d) {
        var e = c.h(ComponentRenderer.platform);
        this.d.removeItemFromCollection(e, c.c, d, c.e);
        if (c.g != null && typeCast(DescriptionTreeNode.$, c.g) !== null) {
            var f = c.g.f;
            if (f >= 0) {
                var g = b.f(f);
                if (g != null) {
                    this.bk(a, g, b);
                }
            }
        }
    };
    ComponentRenderer.prototype.z = function (a, b, c) {
        var _this = this;
        var d = this.d.getRootObject(a);
        if (d != null) {
            this.bk(a, d, b);
        }
        var e = false;
        this.d.removeRootItem(a, this.context, function (f) {
            e = true;
            if (f) {
                _this.bz(a, b);
            }
        });
        return e;
    };
    ComponentRenderer.prototype.u = function (a, b, c) {
        if (c.b == null) {
            return this.j(a, b, c);
        }
        else {
            var d = this.a9(a, b, c);
            this.bg(a, b, c, d);
        }
        return true;
    };
    ComponentRenderer.prototype.j = function (a, b, c) {
        var _this = this;
        if (!(typeCast(DescriptionTreeNode.$, c.f) !== null)) {
            throw new NotImplementedException(0);
        }
        var d = c.f;
        var e = false;
        this.d.replaceRootItem(a, d.h, this.context, function (f) {
            var g = _this.d.getRootObject(a);
            b.g(d.f, g, d, runOn(_this, _this.br));
            var h = _this.am(d);
            _this.bp(a, b, h);
            e = true;
            if (f) {
                _this.bz(a, b);
            }
        });
        return e;
    };
    ComponentRenderer.prototype.bg = function (a, b, c, d) {
        var e = c.h(ComponentRenderer.platform);
        var f = c.c.collectionElementType;
        if (typeCast(DescriptionTreeNode.$, c.f) !== null) {
            var g = c.f;
            if (g.b("Type")) {
                f = g.a("Type").b;
            }
        }
        var h = this.a5(f, c.f, a, b);
        this.d.addItemToCollection(e, c.c, d, c.d, h);
    };
    ComponentRenderer.prototype.a5 = function (a, b, c, d) {
        if (this.q(a)) {
            return b;
        }
        var e = this.context.j(a, c);
        if (b == null) {
            return e;
        }
        if (typeCast(DescriptionTreeNode.$, b) !== null) {
            var f = b;
            d.g(f.f, e, f, runOn(this, this.br));
            var g = this.am(f);
            this.bp(c, d, g);
        }
        if (typeof b === 'string' && a.toLowerCase() != "string") {
            return this.av(a, b);
        }
        return e;
    };
    ComponentRenderer.prototype.q = function (a) {
        return a == "int" || a == "Int32" || a == "short" || a == "Int16" || a == "double" || a == "Double" || a == "float" || a == "Float" || a == "Single" || a == "single" || a == "DateTime" || a == "decimal" || a == "Decimal" || a == "long" || a == "Int64" || a == "byte" || a == "bool" || a == "string" || a == "String";
    };
    ComponentRenderer.prototype.av = function (a, b) {
        return this.context.f(a, b);
    };
    ComponentRenderer.prototype.am = function (a) {
        var b = a.e();
        var c = new List$1(DescriptionTreeAction.$, 0);
        for (var d = 0; d < b.count; d++) {
            var e = new DescriptionTreeAction();
            e.a = 0;
            e.i = b._inner[d].c;
            e.c = b._inner[d].a;
            e.b = a;
            e.f = b._inner[d].b;
            c.add(e);
        }
        return c;
    };
    ComponentRenderer.prototype.t = function (a, b, c) {
        if (c.b == null) {
            return this.m(a, b, c);
        }
        else {
            var d = this.a9(a, b, c);
            this.bh(a, b, c, d);
        }
        return true;
    };
    ComponentRenderer.prototype.bh = function (a, b, c, d) {
        var e = c.h(ComponentRenderer.platform);
        this.d.clearCollection(d, e, c.c);
        if (c.g != null && typeCast(Array_$type, c.g) !== null) {
            var f = c.g;
            for (var g = 0; g < f.length; g++) {
                var h = f[g];
                if (h != null && typeCast(DescriptionTreeNode.$, h) !== null) {
                    var i = h.f;
                    if (i >= 0) {
                        var j = b.f(i);
                        if (j != null) {
                            this.bk(a, j, b);
                        }
                    }
                }
            }
        }
    };
    ComponentRenderer.prototype.b4 = function (a, b, c, d) {
        this.d.setPropertyValue(a, b, c, d);
    };
    ComponentRenderer.prototype.a7 = function (a, b) {
        return this.d.getPropertyValue(a, b);
    };
    ComponentRenderer.prototype.m = function (a, b, c) {
        return this.l(a, b);
    };
    ComponentRenderer.prototype.l = function (a, b) {
        var _this = this;
        var c = this.d.getRootObject(a);
        if (c != null) {
            this.bk(a, c, b);
        }
        var d = false;
        this.d.clearContainer(a, this.context, function (e) {
            d = true;
            if (e) {
                _this.bz(a, b);
            }
        });
        return d;
    };
    ComponentRenderer.$t = markType(ComponentRenderer, 'ComponentRenderer');
    ComponentRenderer.platform = 3;
    return ComponentRenderer;
}(Base));
export { ComponentRenderer };
//# sourceMappingURL=ComponentRenderer.js.map