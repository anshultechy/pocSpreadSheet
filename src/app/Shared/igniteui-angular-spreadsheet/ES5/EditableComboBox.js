/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, runOn, delegateCombine, delegateRemove, markType } from "../../igniteui-angular-core/ES5/type";
import { DropDownItem } from "./DropDownItem";
import { ObservableCollection$1 } from "../../igniteui-angular-core/ES5/ObservableCollection$1";
import { DropDown } from "./DropDown";
import { BaseDOMEventProxy } from "../../igniteui-angular-core/ES5/BaseDOMEventProxy";
import { stringIsNullOrEmpty } from "../../igniteui-angular-core/ES5/string";
import { CustomDOMEventProxy } from "./CustomDOMEventProxy";
import { Rect } from "../../igniteui-angular-core/ES5/Rect";
import { DropDownPosition } from "./DropDownPosition";
import { RelativePositionInfo } from "./RelativePositionInfo";
import { stringEquals1, startsWith1 } from "../../igniteui-angular-core/ES5/stringExtended";
/**
 * @hidden
 */
var EditableComboBox = /** @class */ (function (_super) {
    tslib_1.__extends(EditableComboBox, _super);
    function EditableComboBox() {
        var _this = _super.call(this) || this;
        _this.v = null;
        _this.t = null;
        _this.q = -1;
        _this.h = null;
        _this.aa = 0;
        _this.k = null;
        _this.o = null;
        _this.m = null;
        _this.n = null;
        _this.l = null;
        _this.a = null;
        _this.b = null;
        _this.c = false;
        _this.d = true;
        _this.j = null;
        _this.itemClick = null;
        _this.h = new ObservableCollection$1(DropDownItem.$, 0);
        var a = _this.h;
        a.collectionChanged = delegateCombine(a.collectionChanged, runOn(_this, _this.ah));
        return _this;
    }
    Object.defineProperty(EditableComboBox.prototype, "p", {
        get: function () {
            return this.o;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditableComboBox.prototype, "e", {
        get: function () {
            return this.c;
        },
        set: function (a) {
            if (a != this.c) {
                this.c = a;
                EditableComboBox.ab(this.l, "pressed", a);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditableComboBox.prototype, "f", {
        get: function () {
            return this.d;
        },
        set: function (a) {
            if (a != this.d) {
                this.d = a;
                if (this.b != null) {
                    this.b.ab = !a;
                }
                if (this.n != null) {
                    this.n.setProperty("disabled", !this.f);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditableComboBox.prototype, "g", {
        get: function () {
            return this.h;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditableComboBox.prototype, "s", {
        get: function () {
            return this.q;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditableComboBox.prototype, "z", {
        get: function () {
            return this.v;
        },
        set: function (a) {
            this.ao(a, true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditableComboBox.prototype, "u", {
        get: function () {
            return this.t;
        },
        enumerable: true,
        configurable: true
    });
    EditableComboBox.ab = function (a, b, c) {
        if (a != null) {
            if (c) {
                a.addClass(b);
            }
            else {
                a.removeClass(b);
            }
        }
    };
    EditableComboBox.prototype.ac = function (a, b) {
        a.addClass("comboboxitem");
        a.setText(b.p);
    };
    EditableComboBox.as = function (a) {
        var b = 0;
        if (a.altKey) {
            b |= 1;
        }
        if (a.shiftKey) {
            b |= 4;
        }
        if (a.ctrlKey) {
            b |= 2;
        }
        return b;
    };
    EditableComboBox.prototype.ad = function (a, b, c, d, e) {
        this.q = a;
        this.t = b;
        this.v = c;
        if (d && this.n != null) {
            this.n.setProperty("value", c);
            if (c != null && this.n.getNativeElement() == document.activeElement) {
                this.an(0, c.length);
            }
        }
        if (e && this.a != null) {
            var f = this.a;
            f.selectedItemChanged = delegateRemove(f.selectedItemChanged, runOn(this, this.ae));
            this.a.ai = a;
            var g = this.a;
            g.selectedItemChanged = delegateCombine(g.selectedItemChanged, runOn(this, this.ae));
        }
    };
    EditableComboBox.prototype.ae = function (a, b) {
        var c = b.d;
        this.ad(this.a.ai, c != null ? c.m : null, c != null ? c.p : null, true, false);
    };
    EditableComboBox.prototype.ag = function (a) {
        var b = BaseDOMEventProxy.cr(a);
        var c = EditableComboBox.as(a);
        if (this.j != null && this.j(b, c, a)) {
            return;
        }
        switch (b) {
            case 15:
            case 17:
                if (c == 1) {
                    this.aq();
                }
                else {
                    this.am(b == 17);
                }
                a.preventDefault();
                a.stopPropagation();
                break;
            default:
                if (this.a != null && this.a.f) {
                    var d = true;
                    if (b == 9) {
                        d = false;
                    }
                    if (d && this.a.l(b, c)) {
                        a.preventDefault();
                        a.stopPropagation();
                        return;
                    }
                }
                break;
        }
    };
    EditableComboBox.prototype.ah = function (a, b) {
        if (this.a != null) {
            this.a.as(this.k, this.h, runOn(this, this.ac));
        }
    };
    EditableComboBox.prototype.af = function (a) {
        EditableComboBox.ab(this.m, "focused", true);
    };
    EditableComboBox.prototype.ai = function (a) {
        if (this.a != null) {
            this.a.ao();
        }
        EditableComboBox.ab(this.m, "focused", false);
    };
    EditableComboBox.prototype.aj = function (a) {
        var b = (a.originalEvent.target);
        var c = (b.value);
        this.ao(c, false);
    };
    EditableComboBox.prototype.r = function (a) {
        for (var b = 0; b < this.h.count; b++) {
            var c = this.h._inner[b];
            if (stringEquals1(c.p, a, this.aa)) {
                return b;
            }
        }
        return -1;
    };
    EditableComboBox.prototype.ak = function (a) {
        var _this = this;
        if (this.o != null) {
            if (this.b != null) {
                this.b.ao();
                this.b = null;
            }
            if (this.a != null) {
                this.a.aq();
                this.a = null;
            }
            this.l.destroy();
            this.n.destroy();
            this.o.destroy();
            this.l = null;
            this.n = null;
            this.o = null;
            this.e = false;
        }
        this.k = a;
        if (a != null) {
            this.o = a.createElement("div");
            this.o.setRawStyleProperty("position", "relative");
            this.o.setRawStyleProperty("display", "inline-block");
            this.o.listen("focusin", runOn(this, this.af));
            this.o.listen("focusout", runOn(this, this.ai));
            this.m = a.createElement("div");
            this.m.addClass("comboboxeditarea");
            this.o.append(this.m);
            this.n = a.createElement("input");
            this.n.setAttribute("type", "text");
            this.n.setProperty("disabled", !this.f);
            this.n.setProperty("size", 1);
            this.n.listen("input", runOn(this, this.aj));
            this.n.listen("keydown", runOn(this, this.ag));
            this.m.append(this.n);
            this.l = a.createElement("div");
            this.l.addClass("comboboxdropdownbutton");
            var b = a.createElement("div");
            b.addClass("comboboxdropdownarrow");
            this.l.append(b);
            this.m.append(this.l);
            this.b = ((function () {
                var $ret = new CustomDOMEventProxy(_this.l, a, false);
                $ret._dz = function (c) { return true; };
                return $ret;
            })());
            this.b.bd = new Rect(0, 0, 0, this.l.outerWidth(), this.l.outerHeight());
            var c = this.b;
            c.onMouseDown = delegateCombine(c.onMouseDown, function (c) {
                if (_this.a != null && _this.a.f) {
                    _this.a.ao();
                }
                else {
                    _this.ap();
                }
            });
            var d = this.b;
            d.onMouseEnter = delegateCombine(d.onMouseEnter, function (d) { return _this.l.addClass("hottrack"); });
            var e = this.b;
            e.onMouseLeave = delegateCombine(e.onMouseLeave, function (e) { return _this.l.removeClass("hottrack"); });
            this.b.ab = !this.f;
            this.ar();
            a.append(this.o);
        }
    };
    EditableComboBox.prototype.al = function () {
        if (!stringIsNullOrEmpty(this.z)) {
            this.an(0, this.z.length);
        }
    };
    EditableComboBox.prototype.am = function (a) {
        if (this.a != null && this.a.f && this.q >= 0) {
            this.a.g(a);
        }
        else {
            var b = void 0;
            if (this.h.count == 0) {
                b = -1;
            }
            else if (this.q < 0) {
                b = a ? 0 : this.h.count - 1;
                var c = this.v;
                if (!stringIsNullOrEmpty(c)) {
                    for (var d = 0; d < this.h.count; d++) {
                        var e = this.h._inner[d];
                        if (!stringIsNullOrEmpty(e.p) && startsWith1(e.p, c, this.aa)) {
                            b = d;
                            break;
                        }
                    }
                }
            }
            else {
                b = (this.q + (a ? 1 : -1) + this.h.count) % this.h.count;
            }
            if (b >= 0 && b != this.q) {
                this.ad(b, this.h._inner[b].m, this.h._inner[b].p, true, true);
            }
        }
    };
    EditableComboBox.prototype.an = function (a, b) {
        if (this.n != null) {
            try {
                var c = this.n.getNativeElement();
                c.setSelectionRange(a, b);
            }
            catch (d) {
            }
        }
    };
    EditableComboBox.prototype.ao = function (a, b) {
        var c = a;
        var d = this.r(a);
        if (d >= 0) {
            c = this.h._inner[d].m;
            a = this.h._inner[d].p;
        }
        this.ad(d, c, a, b, true);
    };
    EditableComboBox.prototype.ap = function () {
        var _this = this;
        if (this.a == null) {
            this.a = new DropDown(this.k, this.o, this.h, null, null, runOn(this, this.ac));
            this.a.m = true;
            this.a.ac.addClass("comboboxdropdown");
            var a = this.a;
            a.selectedItemChanged = delegateCombine(a.selectedItemChanged, runOn(this, this.ae));
            var b = this.a;
            b.opened = delegateCombine(b.opened, function (b, c) { return _this.e = true; });
            var c = this.a;
            c.closed = delegateCombine(c.closed, function (c, d) { return _this.e = false; });
            var d = this.a;
            d.itemClicked = delegateCombine(d.itemClicked, function (d, e) {
                var f = _this.itemClick;
                if (f != null) {
                    f(_this, e);
                }
            });
        }
        this.a.ai = this.s;
        var e = new DropDownPosition();
        e.d = RelativePositionInfo.d;
        e.f = RelativePositionInfo.d;
        e.c = RelativePositionInfo.d;
        e.e = RelativePositionInfo.e;
        e.b = 1 | 4;
        e.a = 2 | 4;
        this.a.ac.setRawStyleProperty("min-width", this.m.outerWidth() + "px");
        this.a.a0(new Rect(0, 0, 0, this.m.outerWidth(), this.m.outerHeight()), e);
        if (this.n != null) {
            this.n.focus();
        }
    };
    EditableComboBox.prototype.aq = function () {
        if (this.a != null && this.a.f) {
            this.a.ao();
        }
        else {
            this.ap();
        }
    };
    EditableComboBox.prototype.ar = function () {
        if (this.b != null) {
            this.b.bd = new Rect(0, 0, 0, this.l.outerWidth(), this.l.outerHeight());
        }
    };
    EditableComboBox.$t = markType(EditableComboBox, 'EditableComboBox');
    return EditableComboBox;
}(Base));
export { EditableComboBox };
//# sourceMappingURL=EditableComboBox.js.map
