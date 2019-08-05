/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, fromEnum, String_$type, markType } from "../../igniteui-angular-core/ES2015/type";
import { IVisualElementVisitor_$type } from "./IVisualElementVisitor";
import { Dictionary$2 } from "../../igniteui-angular-core/ES2015/Dictionary$2";
import { stringIsNullOrEmpty } from "../../igniteui-angular-core/ES2015/string";
import { isNaN_ } from "../../igniteui-angular-core/ES2015/number";
/**
 * @hidden
 */
export class VisualElementDomBuilder extends Base {
    get_n() {
        return "ui-tooltip";
    }
    get n() {
        return this.get_n();
    }
    get_m() {
        return "ui-tooltip-body";
    }
    get m() {
        return this.get_m();
    }
    get_o() {
        return "ui-tooltip-title";
    }
    get o() {
        return this.get_o();
    }
    static p(a, b = null) {
        VisualElementDomBuilder.q(a, "div", b, true, true);
    }
    static q(a, b, c, d, e) {
        let f = a._parent.a7;
        a.a7 = VisualElementDomBuilder.d(f, b, c, d, e);
    }
    static d(a, b, c, d, e) {
        if (a == null) {
            return null;
        }
        let f = a.createElement(b);
        if (c != null) {
            f.addClass(c);
        }
        let g = a.getSubRenderer(f);
        if (d) {
            f.setRawStyleProperty("position", "absolute");
        }
        if (e) {
            f.setRawStyleProperty("overflow", "hidden");
        }
        a.append(f);
        return g;
    }
    r(a) {
        if (a.a7 == null) {
            switch (a.bx) {
                case "TextBox":
                    VisualElementDomBuilder.q(a, "textarea", this.h(a), true, false);
                    a.a7.rootWrapper.listen("input", (b) => {
                        let c = (b.originalEvent.target);
                        let d = (c.value);
                        a.co = d;
                        a.cp();
                    });
                    break;
                case "ComboBox":
                    {
                        VisualElementDomBuilder.q(a, "select", null, true, false);
                        a.a7.rootWrapper.listen("change", (b) => {
                            let c = (b.originalEvent.target);
                            let d = (c.selectedIndex);
                            a.co = d < 0 ? null : (c.options[d].text);
                            a.cq();
                        });
                    }
                    break;
                case "ToolTip":
                    VisualElementDomBuilder.p(a, this.n);
                    VisualElementDomBuilder.q(a.cg, "div", this.o, false, false);
                    VisualElementDomBuilder.q(a.cf, "div", this.m, false, false);
                    break;
                case "ScrollBar":
                case "ScrollBarFarButton":
                case "ScrollBarFarTrack":
                case "ScrollBarNearButton":
                case "ScrollBarNearTrack":
                case "ScrollBarThumb":
                    VisualElementDomBuilder.p(a, this.g(a));
                    break;
                default:
                case "Button":
                case "RepeatButton":
                case "ToggleButton":
                case "Line":
                    VisualElementDomBuilder.p(a);
                    break;
            }
        }
    }
    g(a) {
        return null;
    }
    h(a) {
        return null;
    }
    s(a) {
        if (a.ch) {
            a.ch = false;
            let b = a.a7.rootWrapper;
            this.y(a);
            if (a.ck != null) {
                a.ci = false;
                for (let c of fromEnum(a.ck)) {
                    let d = a.a7.createElement("option");
                    if (c == a.co) {
                        d.setAttribute("selected", "true");
                    }
                    d.setText(c);
                    d.listen("click", (e) => {
                        a.co = (e.target.text);
                        a.cq();
                    });
                    b.append(d);
                }
            }
        }
        if (a.ci) {
            a.ci = false;
            let e = a.a7.rootWrapper.getNativeElement();
            if (a.ck != null && a.ck.count > 0 && !stringIsNullOrEmpty(a.co)) {
                e.value = a.co;
            }
            else {
                e.selectedIndex = -1;
            }
        }
    }
    t(a) {
        if (a.cg) {
            a.a7.rootWrapper.setRawStyleProperty("background-color", a.ci);
        }
    }
    u(a) {
        if (a.ci) {
            a.ci = false;
            let b = stringIsNullOrEmpty(a.co) ? "" : a.co;
            let c = a.a7.rootWrapper;
            if (c.getProperty("value") != b) {
                c.setProperty(VisualElementDomBuilder.l, b);
            }
        }
        if (a.ch) {
            a.ch = false;
            a.a7.rootWrapper.setProperty("rows", a.cl);
        }
    }
    v(a) {
        if (a.ck) {
            a.ck = false;
            if (a.cl) {
                a.a7.rootWrapper.removeClass("Off");
            }
            else {
                a.a7.rootWrapper.addClass("Off");
            }
        }
    }
    w(a) {
        if (a.cj) {
            a.cj = false;
            a.cf.a7.rootWrapper.setText(a.cq != null ? a.cq : "");
        }
        if (a.ck) {
            a.ck = false;
            a.cg.a7.rootWrapper.setText(a.cr != null ? a.cr : "");
        }
    }
    x(a) {
        let b = a.a7.rootWrapper;
        if (!a.u) {
            b.addClass("ui-state-disabled");
        }
        else {
            b.removeClass("ui-state-disabled");
        }
    }
    y(a) {
        let b = a.a7.rootWrapper;
        for (let c = 0, d = b.getChildCount(); c < d; c++) {
            let e = b.getChildAt(c);
            e.unlistenAll();
        }
        b.removeChildren();
    }
    z(a) {
        a.a7.rootWrapper.unlistenAll();
        a.a7.rootWrapper.remove();
        a.ap = null;
        a.a7 = null;
    }
    visitElement(a) {
        if (a.ab) {
            if (a.a7 != null) {
                this.z(a);
            }
            a.b8();
            a.bz();
            return false;
        }
        else {
            if (a.a7 == null) {
                this.r(a);
                if (a.x && a.a7 != null) {
                    a.a7.rootWrapper.addClass("ui-state-default");
                }
                if (a.h != null && a.a7 != null) {
                    let b = a.a7.rootWrapper;
                    b.setRawStyleProperty("margin", "0px");
                    b.setRawStyleProperty("padding", "0px");
                }
            }
            if (a.a7 != null) {
                let c = a.a7.rootWrapper;
                if (a.q) {
                    a.q = false;
                    let d = a.ax;
                    let e = a.a2;
                    if (a._parent != null) {
                        let f = a._parent.h;
                        if (f != null) {
                            d -= f.a.b;
                            e -= f.a.c;
                        }
                    }
                    VisualElementDomBuilder.aa(a, "left", d + "px");
                    VisualElementDomBuilder.aa(a, "top", e + "px");
                    let g = isNaN_(a.a3) ? "auto" : a.a3 + "px";
                    let h = isNaN_(a.av) ? "auto" : a.av + "px";
                    VisualElementDomBuilder.aa(a, "width", g);
                    VisualElementDomBuilder.aa(a, "height", h);
                }
                if (a.r) {
                    a.r = false;
                    c.setRawStyleProperty("z-index", a.bu == 0 ? "auto" : a.bu);
                }
                if (a.k) {
                    a.k = false;
                    let i = a.bw != null ? a.bw : "";
                    c.setRawStyleProperty("cursor", i);
                }
                if (a.m) {
                    a.m = false;
                    this.x(a);
                }
                if (a.x) {
                    if (a.p) {
                        a.p = false;
                        if (a.y) {
                            c.addClass("ui-state-hover");
                        }
                        else {
                            c.removeClass("ui-state-hover");
                        }
                    }
                    if (a.n) {
                        a.n = false;
                        if (a.s) {
                            c.addClass("ui-state-active");
                        }
                        else {
                            c.removeClass("ui-state-active");
                        }
                    }
                }
                switch (a.bx) {
                    case "ToolTip":
                        this.w(a);
                        break;
                    case "TextBox":
                        this.u(a);
                        break;
                    case "ToggleButton":
                        this.v(a);
                        break;
                    case "ComboBox":
                        this.s(a);
                        break;
                    case "Line":
                        this.t(a);
                        break;
                }
                if (a.o) {
                    a.o = false;
                    if (a.ac) {
                        c.show();
                    }
                    else {
                        c.hide();
                    }
                }
            }
        }
        let j = a.l;
        a.l = false;
        a.j = false;
        return j;
    }
    static aa(a, b, c) {
        if (a != null && a.a7 != null) {
            if (a.ap == null) {
                a.ap = new Dictionary$2(String_$type, Base.$, 0);
            }
            if (a.ap.item(b) != c) {
                a.ap.item(b, c);
                a.a7.rootWrapper.setRawStyleProperty(b, c);
            }
        }
    }
}
VisualElementDomBuilder.$t = markType(VisualElementDomBuilder, 'VisualElementDomBuilder', Base.$, [IVisualElementVisitor_$type]);
VisualElementDomBuilder.c = (window && (window.navigator.userAgent.indexOf('MSIE') > -1 || !!window.navigator.userAgent.match(/trident/i)));
VisualElementDomBuilder.a = (window && window.navigator.userAgent.indexOf('Edge') > -1);
VisualElementDomBuilder.b = (window && window.mozInnerScreenX !== undefined);
VisualElementDomBuilder.l = VisualElementDomBuilder.c ? "textContent" : "value";
//# sourceMappingURL=VisualElementDomBuilder.js.map