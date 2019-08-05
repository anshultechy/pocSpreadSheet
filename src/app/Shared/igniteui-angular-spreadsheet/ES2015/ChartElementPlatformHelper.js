/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, typeCast, markType } from "../../igniteui-angular-core/ES2015/type";
import { List$1 } from "../../igniteui-angular-core/ES2015/List$1";
import { RendererContainer } from "../../igniteui-angular-spreadsheet/ES2015/RendererContainer";
import { SpreadsheetDialogUtilities } from "../../igniteui-angular-spreadsheet/ES2015/SpreadsheetDialogUtilities";
import { NumericAxisBase } from "../../igniteui-angular-charts/ES2015/NumericAxisBase";
import { Axis } from "../../igniteui-angular-charts/ES2015/Axis";
import { Enumerable } from "../../igniteui-angular-core/ES2015/Enumerable";
import { stringContains, stringEmpty } from "../../igniteui-angular-core/ES2015/string";
import { trimEnd } from "../../igniteui-angular-core/ES2015/stringExtended";
/**
 * @hidden
 */
export class ChartElementPlatformHelper extends Base {
    constructor(a, b) {
        super();
        this.a = null;
        this.l = null;
        this.b = null;
        this.a = a;
        this.l = new List$1(RendererContainer.$, 0);
        this.b = b;
    }
    c(a, b, c, d = false, e = 3, f = 3) {
        let g = this.m(a, b);
        if (null == g) {
            return false;
        }
        return true;
    }
    s(a, b, c, d = false, e = 0, f = 0, g = 1, h = 1, i = 3, j = 3, k = 0) {
        if (this.f(a)) {
            if (a.tagName.toLowerCase() != "div") {
                return;
            }
        }
        let l = this.m(b, a);
        if (null == l) {
            return;
        }
        let m = this.q(l);
        switch (i) {
            case 0:
                m += " justify-self: start;";
                break;
            case 2:
                m += " justify-self: end;";
                break;
            case 3:
                m += " justify-self: stretch;";
                break;
            case 1:
                m += " justify-self: center;";
                break;
        }
        switch (j) {
            case 0:
                m += " align-self: start;";
                break;
            case 2:
                m += " align-self: end;";
                break;
            case 3:
                m += " align-self: stretch;";
                break;
            case 1:
                m += " align-self: center;";
                break;
        }
        let n = SpreadsheetDialogUtilities.j(e + 1, g, f + 1, h, m + " display: block;");
        l.setAttribute("style", n);
    }
    d(a, b) {
        let c = typeCast(RendererContainer.$, b);
        if (null == c) {
            return false;
        }
        a.clearRefValues(c.container);
        return true;
    }
    t(a) {
        if (false == this.f(a)) {
            return;
        }
        if (a.tagName.toLowerCase() != "div") {
            return;
        }
        let b = a;
        for (let c = b.children.length; c > 0; c--) {
            b.removeChild(b.children.item(c - 1));
        }
    }
    u(a) {
    }
    n() {
        return null;
    }
    e(a) {
        let b = typeCast(RendererContainer.$, a);
        return b.isReady;
    }
    o(a) {
        let b = this.a.createRendererContainer();
        this.l.add(b);
        a = b.isReady;
        b.onReady = this.b;
        return {
            ret: b,
            p0: a
        };
    }
    p() {
        return document.createElement("div");
    }
    v(a, b, c, d) {
        this.g(a, b, c, ((e) => d(null, e)));
    }
    w(a, b, c, d) {
        this.g(a, b, c, ((e, f) => {
            let g = e.bd;
            if (null == g) {
                return;
            }
            let h = Enumerable.af(NumericAxisBase.$, Enumerable.l(NumericAxisBase.$, Enumerable.u(Axis.$, g.axes, (i) => stringContains(i.name, "Primary"))));
            let i = Enumerable.af(NumericAxisBase.$, Enumerable.l(NumericAxisBase.$, Enumerable.u(Axis.$, g.axes, (j) => stringContains(j.name, "Secondary"))));
            if (h != null && i != null && h.j1 != 0 && i.j1 != 0) {
                let j = h.j3;
                let k = h.j2;
                let l = h.j1;
                let m = l / (k - j);
                let n = i.j3;
                let o = i.j2;
                let p = i.j1;
                p = m * (o - n);
                let q = d(p, false);
                let r = (o - n) * q / p;
                o = n + r;
                i.kb = n;
                i.j7 = p;
                i.ka = o;
            }
        }));
    }
    g(a, b, c, d) {
        let e = typeCast(RendererContainer.$, b);
        if (null == e) {
            return false;
        }
        a.provideRefValue(e.container, c, d);
        return true;
    }
    h(a, b) {
        let c = null;
        if (this.f(b)) {
            c = b;
        }
        else {
            return false;
        }
        let d = null;
        if (this.f(a)) {
            d = a;
        }
        else if (typeCast(RendererContainer.$, a) !== null) {
            d = a.containerElement;
        }
        else {
        }
        if (null == d) {
            return false;
        }
        c.removeChild(d);
        return true;
    }
    i(a, b, c) {
        let d = typeCast(RendererContainer.$, b);
        if (null == d) {
            return false;
        }
        a.removeRefValue(d.container, c);
        return true;
    }
    x(a, b, c) {
        let d = typeCast(RendererContainer.$, c);
        if (null == d) {
            return;
        }
        a.render(b, d.container);
    }
    j(a, b, c, d, e) {
        return false;
    }
    k(a, b, c) {
        if (false == (this.f(a) && a.tagName.toLowerCase() == "div")) {
            return false;
        }
        let d = (e) => {
            let f = stringEmpty();
            for (let h = 0; h < e.length; h++) {
                let g = e[h];
                if (g.e) {
                    f += g.i.toString() + "px ";
                }
                else if (g.g) {
                    f += "minmax(0," + g.i.toString() + "fr) ";
                }
                else if (g.f) {
                    f += "auto ";
                }
            }
            return trimEnd(f);
        };
        let e = a;
        let f = SpreadsheetDialogUtilities.k(d(b), d(c), "0px", "height: 100%; box-sizing: border-box; ");
        e.setAttribute("style", f);
        return false;
    }
    m(a, b) {
        let c = null;
        if (this.f(b)) {
            c = b;
        }
        else if (typeCast(RendererContainer.$, b) !== null) {
            c = b.containerElement;
        }
        else {
            return null;
        }
        let d = null;
        if (this.f(a)) {
            d = a;
        }
        else if (typeCast(RendererContainer.$, a) !== null) {
            d = a.containerElement;
        }
        else {
        }
        if (null == d) {
            return null;
        }
        c.appendChild(d);
        return d;
    }
    q(a) {
        let b = a.getAttribute("style");
        if (null == b) {
            return stringEmpty();
        }
        return b;
    }
    f(a) {
        let b = a.toString().toLowerCase();
        return stringContains(b, "element") || stringContains(b, "html");
    }
}
ChartElementPlatformHelper.$t = markType(ChartElementPlatformHelper, 'ChartElementPlatformHelper');
//# sourceMappingURL=ChartElementPlatformHelper.js.map
