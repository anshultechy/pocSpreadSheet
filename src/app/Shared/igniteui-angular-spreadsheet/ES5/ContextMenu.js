/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, fromEnum, delegateCombine, markType } from "../../igniteui-angular-core/ES5/type";
import { DropDownItem } from "./DropDownItem";
import { DropDown } from "./DropDown";
import { List$1 } from "../../igniteui-angular-core/ES5/List$1";
import { DropDownPosition } from "./DropDownPosition";
import { Dictionary$2 } from "../../igniteui-angular-core/ES5/Dictionary$2";
import { RelativePositionInfo } from "./RelativePositionInfo";
import { Rect } from "../../igniteui-angular-core/ES5/Rect";
import { stringIsNullOrEmpty } from "../../igniteui-angular-core/ES5/string";
/**
 * @hidden
 */
var ContextMenu = /** @class */ (function (_super) {
    tslib_1.__extends(ContextMenu, _super);
    function ContextMenu() {
        var _this = _super.call(this) || this;
        _this.h = null;
        _this.b = null;
        _this.a = null;
        _this.g = null;
        _this.m = null;
        _this.l = null;
        _this.d = null;
        _this.n = null;
        _this.k = null;
        _this.itemClick = null;
        _this.h = new List$1(DropDownItem.$, 0);
        _this.g = new Dictionary$2(DropDownItem.$, DropDown.$, 0);
        var a = new DropDownPosition();
        a.d = new RelativePositionInfo(2, -2, false);
        a.f = RelativePositionInfo.e;
        a.a = 1 | 4;
        a.b = 2 | 4;
        _this.d = a;
        return _this;
    }
    Object.defineProperty(ContextMenu.prototype, "f", {
        get: function () {
            return this.b != null && this.b.f;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContextMenu.prototype, "i", {
        get: function () {
            return this.h;
        },
        enumerable: true,
        configurable: true
    });
    ContextMenu.prototype.o = function () {
        var e_1, _a;
        if (this.n != null) {
            var a = this.e(document.activeElement);
            var b = this.n;
            this.n = null;
            if (a && b != null && (b == document.body || document.body.contains(b)) && b.focus != null) {
                b.focus();
            }
        }
        try {
            for (var _b = tslib_1.__values(fromEnum(this.g)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var c = _c.value;
                c.value.aq();
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.g.clear();
        if (this.b != null) {
            var d = this.b;
            this.b = null;
            d.aq();
        }
        this.a = null;
        if (this.m != null) {
            var e = this.m;
            this.m = null;
            e.remove();
        }
    };
    ContextMenu.prototype.e = function (a) {
        return this.m != null && this.m.getNativeElement().contains(a);
    };
    ContextMenu.prototype.c = function (a, b, c) {
        var _this = this;
        var d = new DropDown(this.l, this.m, a, b, c, function (e, f) {
            if (f.g) {
                e.addClass("menuitemseparator");
            }
            else {
                e.addClass("menuitem");
                e.setAttribute("tabIndex", 0);
                var g = _this.l.createElement("div");
                g.addClass("menuitemimage");
                if (!stringIsNullOrEmpty(f.n)) {
                    g.addClass(f.n);
                }
                e.append(g);
                var h = _this.l.createElement("div");
                h.addClass("menuitemcontent");
                if (_this.k == null || !_this.k(f, h)) {
                    h.setText(f.p);
                }
                e.append(h);
                var i = _this.l.createElement("div");
                i.addClass("menuitemarrowarea");
                e.append(i);
            }
        });
        d.m = true;
        d.ac.addClass("menu");
        d.childRequested = delegateCombine(d.childRequested, function (e, f) {
            if (_this.m == null) {
                return;
            }
            var g = e;
            var h = null;
            var i = g.ae(f);
            if (!((function () { var j = _this.g.tryGetValue(f, h); h = j.p1; return j.ret; })())) {
                h = _this.c(f.k, g, f);
                _this.g.item(f, h);
            }
            var j = i.getNativeElement();
            var k = j.getBoundingClientRect();
            var l = _this.m.getNativeElement();
            var m = l.getBoundingClientRect();
            var n = new Rect(0, (k.left - m.left), (k.top - m.top), (k.width), (k.height));
            var o = h.f;
            _this.a = h;
            h.a0(n, _this.d);
            if (!o) {
                h.ai = 0;
            }
            h.ac.focus();
        });
        d.closed = delegateCombine(d.closed, function (e, f) {
            var g = e;
            if (g == _this.a) {
                _this.a = _this.a.a;
            }
            if (g.a == null || !g.ac.getNativeElement().contains(document.activeElement)) {
                _this.o();
            }
            else {
                var h = g.a.c;
                var i = h != null ? g.a.ae(h) : g.a.ac;
                i.focus();
            }
        });
        d.selectedItemChanged = delegateCombine(d.selectedItemChanged, function (e, f) {
            var g = e;
            var h = f.c;
            var i = f.d;
            while (_this.a != null && _this.a != g) {
                var j = _this.a;
                j.ao();
                if (j == _this.a) {
                    _this.a = j.a;
                }
            }
            var k = i != null ? g.ae(i) : g.ac;
            k.focus();
        });
        d.itemClicked = delegateCombine(d.itemClicked, function (e, f) {
            var g = _this.itemClick;
            if (g != null) {
                g(_this, f);
            }
        });
        this.m.append(d.ac);
        return d;
    };
    ContextMenu.prototype.p = function (a, b, c, d) {
        var _this = this;
        var e = a.createElement("div");
        e.setRawStyleProperty("position", "relative");
        e.setRawStyleProperty("width", "0px");
        e.setRawStyleProperty("height", "0px");
        if (b.getChildCount() == 0) {
            b.append(e);
        }
        else {
            b.getChildAt(0).before(e);
        }
        e.listen("focusout", function (f) {
            var g = (f.originalEvent.relatedTarget);
            if (g == null || !_this.m.getNativeElement().contains(g)) {
                _this.o();
            }
        });
        this.m = e;
        this.l = a.getSubRenderer(this.m);
        this.b = this.c(this.i, null, null);
        this.a = this.b;
        this.n = document.activeElement;
        this.b.a0(c, d);
        this.b.ac.focus();
    };
    ContextMenu.$t = markType(ContextMenu, 'ContextMenu');
    return ContextMenu;
}(Base));
export { ContextMenu };
//# sourceMappingURL=ContextMenu.js.map
