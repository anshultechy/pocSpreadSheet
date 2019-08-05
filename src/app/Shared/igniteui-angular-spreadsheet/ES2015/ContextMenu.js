/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, fromEnum, delegateCombine, markType } from "../../igniteui-angular-core/ES2015/type";
import { DropDownItem } from "./DropDownItem";
import { DropDown } from "./DropDown";
import { List$1 } from "../../igniteui-angular-core/ES2015/List$1";
import { DropDownPosition } from "./DropDownPosition";
import { Dictionary$2 } from "../../igniteui-angular-core/ES2015/Dictionary$2";
import { RelativePositionInfo } from "./RelativePositionInfo";
import { Rect } from "../../igniteui-angular-core/ES2015/Rect";
import { stringIsNullOrEmpty } from "../../igniteui-angular-core/ES2015/string";
/**
 * @hidden
 */
export class ContextMenu extends Base {
    constructor() {
        super();
        this.h = null;
        this.b = null;
        this.a = null;
        this.g = null;
        this.m = null;
        this.l = null;
        this.d = null;
        this.n = null;
        this.k = null;
        this.itemClick = null;
        this.h = new List$1(DropDownItem.$, 0);
        this.g = new Dictionary$2(DropDownItem.$, DropDown.$, 0);
        let a = new DropDownPosition();
        a.d = new RelativePositionInfo(2, -2, false);
        a.f = RelativePositionInfo.e;
        a.a = 1 | 4;
        a.b = 2 | 4;
        this.d = a;
    }
    get f() {
        return this.b != null && this.b.f;
    }
    get i() {
        return this.h;
    }
    o() {
        if (this.n != null) {
            let a = this.e(document.activeElement);
            let b = this.n;
            this.n = null;
            if (a && b != null && (b == document.body || document.body.contains(b)) && b.focus != null) {
                b.focus();
            }
        }
        for (let c of fromEnum(this.g)) {
            c.value.aq();
        }
        this.g.clear();
        if (this.b != null) {
            let d = this.b;
            this.b = null;
            d.aq();
        }
        this.a = null;
        if (this.m != null) {
            let e = this.m;
            this.m = null;
            e.remove();
        }
    }
    e(a) {
        return this.m != null && this.m.getNativeElement().contains(a);
    }
    c(a, b, c) {
        let d = new DropDown(this.l, this.m, a, b, c, (e, f) => {
            if (f.g) {
                e.addClass("menuitemseparator");
            }
            else {
                e.addClass("menuitem");
                e.setAttribute("tabIndex", 0);
                let g = this.l.createElement("div");
                g.addClass("menuitemimage");
                if (!stringIsNullOrEmpty(f.n)) {
                    g.addClass(f.n);
                }
                e.append(g);
                let h = this.l.createElement("div");
                h.addClass("menuitemcontent");
                if (this.k == null || !this.k(f, h)) {
                    h.setText(f.p);
                }
                e.append(h);
                let i = this.l.createElement("div");
                i.addClass("menuitemarrowarea");
                e.append(i);
            }
        });
        d.m = true;
        d.ac.addClass("menu");
        d.childRequested = delegateCombine(d.childRequested, (e, f) => {
            if (this.m == null) {
                return;
            }
            let g = e;
            let h = null;
            let i = g.ae(f);
            if (!((() => { let j = this.g.tryGetValue(f, h); h = j.p1; return j.ret; })())) {
                h = this.c(f.k, g, f);
                this.g.item(f, h);
            }
            let j = i.getNativeElement();
            let k = j.getBoundingClientRect();
            let l = this.m.getNativeElement();
            let m = l.getBoundingClientRect();
            let n = new Rect(0, (k.left - m.left), (k.top - m.top), (k.width), (k.height));
            let o = h.f;
            this.a = h;
            h.a0(n, this.d);
            if (!o) {
                h.ai = 0;
            }
            h.ac.focus();
        });
        d.closed = delegateCombine(d.closed, (e, f) => {
            let g = e;
            if (g == this.a) {
                this.a = this.a.a;
            }
            if (g.a == null || !g.ac.getNativeElement().contains(document.activeElement)) {
                this.o();
            }
            else {
                let h = g.a.c;
                let i = h != null ? g.a.ae(h) : g.a.ac;
                i.focus();
            }
        });
        d.selectedItemChanged = delegateCombine(d.selectedItemChanged, (e, f) => {
            let g = e;
            let h = f.c;
            let i = f.d;
            while (this.a != null && this.a != g) {
                let j = this.a;
                j.ao();
                if (j == this.a) {
                    this.a = j.a;
                }
            }
            let k = i != null ? g.ae(i) : g.ac;
            k.focus();
        });
        d.itemClicked = delegateCombine(d.itemClicked, (e, f) => {
            let g = this.itemClick;
            if (g != null) {
                g(this, f);
            }
        });
        this.m.append(d.ac);
        return d;
    }
    p(a, b, c, d) {
        let e = a.createElement("div");
        e.setRawStyleProperty("position", "relative");
        e.setRawStyleProperty("width", "0px");
        e.setRawStyleProperty("height", "0px");
        if (b.getChildCount() == 0) {
            b.append(e);
        }
        else {
            b.getChildAt(0).before(e);
        }
        e.listen("focusout", (f) => {
            let g = (f.originalEvent.relatedTarget);
            if (g == null || !this.m.getNativeElement().contains(g)) {
                this.o();
            }
        });
        this.m = e;
        this.l = a.getSubRenderer(this.m);
        this.b = this.c(this.i, null, null);
        this.a = this.b;
        this.n = document.activeElement;
        this.b.a0(c, d);
        this.b.ac.focus();
    }
}
ContextMenu.$t = markType(ContextMenu, 'ContextMenu');
//# sourceMappingURL=ContextMenu.js.map
