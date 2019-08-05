/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, fromEnum, markType, EnumUtil } from "../../igniteui-angular-core/ES2015/type";
import { StringBuilder } from "../../igniteui-angular-core/ES2015/StringBuilder";
import { IndexOutOfRangeException } from "../../igniteui-angular-core/ES2015/IndexOutOfRangeException";
import { stringSplit, stringCompare1 } from "../../igniteui-angular-core/ES2015/stringExtended";
import { stringIsNullOrEmpty } from "../../igniteui-angular-core/ES2015/string";
/**
 * @hidden
 */
export class SpreadsheetDialogUtilities extends Base {
    static c(a, b, c, d) {
        let e = document.createElement("label");
        d = document.createElement("input");
        d.type = "checkbox";
        d.id = a;
        e.appendChild(d);
        let f = document.createElement("text");
        f.innerText = b;
        d.accessKey = c;
        e.appendChild(f);
        return {
            ret: e,
            p3: d
        };
    }
    static d(a, b, c, d, e) {
        let f = document.createElement("label");
        e = document.createElement("input");
        e.name = b;
        e.type = "radio";
        e.id = a;
        f.appendChild(e);
        let g = document.createElement("text");
        g.innerText = c;
        e.accessKey = d;
        f.appendChild(g);
        return {
            ret: f,
            p4: e
        };
    }
    static l(a) {
        while (a.children.length > 0) {
            a.removeChild(a.children.item(0));
        }
    }
    static a() {
        return SpreadsheetDialogUtilities.b("button");
    }
    static b(a) {
        let b = document.createElement("button");
        b.type = a;
        return b;
    }
    static k(a, b, c, d = null) {
        let e = new StringBuilder(0);
        e.l("display: -ms-grid; ");
        let f = stringSplit(a, [" "], 1);
        let g = stringSplit(b, [" "], 1);
        e.l("-ms-grid-rows: ");
        for (let i = 0; i < f.length; i++) {
            let h = f[i];
            e.l(h);
            e.l(" ");
            e.l(c);
            e.l(" ");
        }
        e.l(";");
        e.l("-ms-grid-columns: ");
        for (let k = 0; k < g.length; k++) {
            let j = g[k];
            e.l(j);
            e.l(" ");
            e.l(c);
            e.l(" ");
        }
        e.l(";");
        e.l("display: grid; ");
        e.l("grid-template-rows: ");
        e.l(a);
        e.l("; ");
        e.l("grid-template-columns: ");
        e.l(b);
        e.l("; ");
        if (false == stringIsNullOrEmpty(c)) {
            e.l("grid-gap: ");
            e.l(c);
            e.l("; ");
        }
        if (false == stringIsNullOrEmpty(d)) {
            e.l(d);
        }
        return e.toString();
    }
    static j(a, b, c, d, e = null) {
        let f = new StringBuilder(0);
        f.l("grid-row: ");
        f.l(a.toString());
        if (b > 1) {
            f.l("/span ");
            f.l(b.toString());
        }
        f.l("; ");
        f.l("grid-column: ");
        f.l(c.toString());
        if (d > 1) {
            f.l("/span ");
            f.l(d.toString());
        }
        f.l("; ");
        let g = a + (a - 1);
        let h = (b * 2) - 1;
        let i = c + (c - 1);
        let j = (d * 2) - 1;
        f.l("-ms-grid-row: ");
        f.l(g.toString());
        f.l("; ");
        if (h > 1) {
            f.l("-ms-grid-row-span: ");
            f.l(h.toString());
            f.l("; ");
        }
        f.l("-ms-grid-column: ");
        f.l(i.toString());
        f.l("; ");
        if (j > 1) {
            f.l("-ms-grid-column-span: ");
            f.l(j.toString());
            f.l("; ");
        }
        if (false == stringIsNullOrEmpty(e)) {
            f.l(e);
        }
        return f.toString();
    }
    static e(a, b) {
        if (stringCompare1(a.id, b, 2) == 0) {
            return a;
        }
        let c = a.parentElement;
        if (null == c) {
            return null;
        }
        return SpreadsheetDialogUtilities.e(c, b);
    }
    static f() {
        let a = document.createElement("div");
        a.style.visibility = "hidden";
        a.style.height = "100px";
        a.setAttribute("MsOverflowStyle", "scrollbar");
        document.body.appendChild(a);
        let b = a.offsetHeight;
        a.style.overflow = "scroll";
        let c = document.createElement("div");
        c.style.height = "100%";
        a.appendChild(c);
        let d = c.offsetHeight;
        a.parentNode.removeChild(a);
        return b - d;
    }
    static g() {
        let a = document.createElement("div");
        a.style.visibility = "hidden";
        a.style.width = "100px";
        a.setAttribute("MsOverflowStyle", "scrollbar");
        document.body.appendChild(a);
        let b = a.offsetWidth;
        a.style.overflow = "scroll";
        let c = document.createElement("div");
        c.style.width = "100%";
        a.appendChild(c);
        let d = c.offsetWidth;
        a.parentNode.removeChild(a);
        return b - d;
    }
    static h(a) {
        let b = a.selectedIndex;
        let c = a.options.item(b);
        if (null == c) {
            return null;
        }
        let d = c.getAttribute("value");
        return d;
    }
    static i(a, b) {
        let c = a.selectedIndex;
        let d = a.options.item(c);
        if (null != d) {
            return EnumUtil.parse(b, d.value.toString(), true);
        }
        return null;
    }
    static m(a, b, c) {
        if (c == a.children.length) {
            a.appendChild(b);
        }
        else if (c >= 0) {
            let d = a.children.item(c);
            a.insertBefore(b, d);
        }
        else {
            throw new IndexOutOfRangeException(0);
        }
    }
    static n(a, b) {
        SpreadsheetDialogUtilities.o(a, b, null);
    }
    static o(a, b, c) {
        SpreadsheetDialogUtilities.l(a);
        let d = b;
        for (let e of fromEnum(d)) {
            let f = document.createElement("option");
            f.innerText = e.displayText;
            f.setAttribute("value", e.dataValue);
            if (null != c) {
                let g = c(e);
                if (null != g) {
                    f.insertBefore(g, f.firstChild);
                }
            }
            a.appendChild(f);
        }
    }
}
SpreadsheetDialogUtilities.$t = markType(SpreadsheetDialogUtilities, 'SpreadsheetDialogUtilities');
//# sourceMappingURL=SpreadsheetDialogUtilities.js.map