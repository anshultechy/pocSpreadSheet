/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, runOn, delegateCombine, delegateRemove, markType } from "../../igniteui-angular-core/ES2015/type";
import { DropDownItem } from "./DropDownItem";
import { ObservableCollection$1 } from "../../igniteui-angular-core/ES2015/ObservableCollection$1";
import { DropDown } from "./DropDown";
import { BaseDOMEventProxy } from "../../igniteui-angular-core/ES2015/BaseDOMEventProxy";
import { stringIsNullOrEmpty } from "../../igniteui-angular-core/ES2015/string";
import { CustomDOMEventProxy } from "./CustomDOMEventProxy";
import { Rect } from "../../igniteui-angular-core/ES2015/Rect";
import { DropDownPosition } from "./DropDownPosition";
import { RelativePositionInfo } from "./RelativePositionInfo";
import { stringEquals1, startsWith1 } from "../../igniteui-angular-core/ES2015/stringExtended";
/**
 * @hidden
 */
export class EditableComboBox extends Base {
    constructor() {
        super();
        this.v = null;
        this.t = null;
        this.q = -1;
        this.h = null;
        this.aa = 0;
        this.k = null;
        this.o = null;
        this.m = null;
        this.n = null;
        this.l = null;
        this.a = null;
        this.b = null;
        this.c = false;
        this.d = true;
        this.j = null;
        this.itemClick = null;
        this.h = new ObservableCollection$1(DropDownItem.$, 0);
        let a = this.h;
        a.collectionChanged = delegateCombine(a.collectionChanged, runOn(this, this.ah));
    }
    get p() {
        return this.o;
    }
    get e() {
        return this.c;
    }
    set e(a) {
        if (a != this.c) {
            this.c = a;
            EditableComboBox.ab(this.l, "pressed", a);
        }
    }
    get f() {
        return this.d;
    }
    set f(a) {
        if (a != this.d) {
            this.d = a;
            if (this.b != null) {
                this.b.ab = !a;
            }
            if (this.n != null) {
                this.n.setProperty("disabled", !this.f);
            }
        }
    }
    get g() {
        return this.h;
    }
    get s() {
        return this.q;
    }
    get z() {
        return this.v;
    }
    set z(a) {
        this.ao(a, true);
    }
    get u() {
        return this.t;
    }
    static ab(a, b, c) {
        if (a != null) {
            if (c) {
                a.addClass(b);
            }
            else {
                a.removeClass(b);
            }
        }
    }
    ac(a, b) {
        a.addClass("comboboxitem");
        a.setText(b.p);
    }
    static as(a) {
        let b = 0;
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
    }
    ad(a, b, c, d, e) {
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
            let f = this.a;
            f.selectedItemChanged = delegateRemove(f.selectedItemChanged, runOn(this, this.ae));
            this.a.ai = a;
            let g = this.a;
            g.selectedItemChanged = delegateCombine(g.selectedItemChanged, runOn(this, this.ae));
        }
    }
    ae(a, b) {
        let c = b.d;
        this.ad(this.a.ai, c != null ? c.m : null, c != null ? c.p : null, true, false);
    }
    ag(a) {
        let b = BaseDOMEventProxy.cr(a);
        let c = EditableComboBox.as(a);
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
                    let d = true;
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
    }
    ah(a, b) {
        if (this.a != null) {
            this.a.as(this.k, this.h, runOn(this, this.ac));
        }
    }
    af(a) {
        EditableComboBox.ab(this.m, "focused", true);
    }
    ai(a) {
        if (this.a != null) {
            this.a.ao();
        }
        EditableComboBox.ab(this.m, "focused", false);
    }
    aj(a) {
        let b = (a.originalEvent.target);
        let c = (b.value);
        this.ao(c, false);
    }
    r(a) {
        for (let b = 0; b < this.h.count; b++) {
            let c = this.h._inner[b];
            if (stringEquals1(c.p, a, this.aa)) {
                return b;
            }
        }
        return -1;
    }
    ak(a) {
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
            let b = a.createElement("div");
            b.addClass("comboboxdropdownarrow");
            this.l.append(b);
            this.m.append(this.l);
            this.b = ((() => {
                let $ret = new CustomDOMEventProxy(this.l, a, false);
                $ret._dz = (c) => true;
                return $ret;
            })());
            this.b.bd = new Rect(0, 0, 0, this.l.outerWidth(), this.l.outerHeight());
            let c = this.b;
            c.onMouseDown = delegateCombine(c.onMouseDown, (c) => {
                if (this.a != null && this.a.f) {
                    this.a.ao();
                }
                else {
                    this.ap();
                }
            });
            let d = this.b;
            d.onMouseEnter = delegateCombine(d.onMouseEnter, (d) => this.l.addClass("hottrack"));
            let e = this.b;
            e.onMouseLeave = delegateCombine(e.onMouseLeave, (e) => this.l.removeClass("hottrack"));
            this.b.ab = !this.f;
            this.ar();
            a.append(this.o);
        }
    }
    al() {
        if (!stringIsNullOrEmpty(this.z)) {
            this.an(0, this.z.length);
        }
    }
    am(a) {
        if (this.a != null && this.a.f && this.q >= 0) {
            this.a.g(a);
        }
        else {
            let b;
            if (this.h.count == 0) {
                b = -1;
            }
            else if (this.q < 0) {
                b = a ? 0 : this.h.count - 1;
                let c = this.v;
                if (!stringIsNullOrEmpty(c)) {
                    for (let d = 0; d < this.h.count; d++) {
                        let e = this.h._inner[d];
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
    }
    an(a, b) {
        if (this.n != null) {
            try {
                let c = this.n.getNativeElement();
                c.setSelectionRange(a, b);
            }
            catch (d) {
            }
        }
    }
    ao(a, b) {
        let c = a;
        let d = this.r(a);
        if (d >= 0) {
            c = this.h._inner[d].m;
            a = this.h._inner[d].p;
        }
        this.ad(d, c, a, b, true);
    }
    ap() {
        if (this.a == null) {
            this.a = new DropDown(this.k, this.o, this.h, null, null, runOn(this, this.ac));
            this.a.m = true;
            this.a.ac.addClass("comboboxdropdown");
            let a = this.a;
            a.selectedItemChanged = delegateCombine(a.selectedItemChanged, runOn(this, this.ae));
            let b = this.a;
            b.opened = delegateCombine(b.opened, (b, c) => this.e = true);
            let c = this.a;
            c.closed = delegateCombine(c.closed, (c, d) => this.e = false);
            let d = this.a;
            d.itemClicked = delegateCombine(d.itemClicked, (d, e) => {
                let f = this.itemClick;
                if (f != null) {
                    f(this, e);
                }
            });
        }
        this.a.ai = this.s;
        let e = new DropDownPosition();
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
    }
    aq() {
        if (this.a != null && this.a.f) {
            this.a.ao();
        }
        else {
            this.ap();
        }
    }
    ar() {
        if (this.b != null) {
            this.b.bd = new Rect(0, 0, 0, this.l.outerWidth(), this.l.outerHeight());
        }
    }
}
EditableComboBox.$t = markType(EditableComboBox, 'EditableComboBox');
//# sourceMappingURL=EditableComboBox.js.map
