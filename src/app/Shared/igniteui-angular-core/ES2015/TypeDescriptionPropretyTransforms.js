/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, Delegate_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { stringReplace } from "./string";
/**
 * @hidden
 */
export class TypeDescriptionPropretyTransforms extends Base {
    constructor() {
        super();
        this.a = new Dictionary$2(String_$type, Delegate_$type, 0);
        this.a.item("VisibilityToBooleanTransform", (a, b) => {
            if (a.toString().toLowerCase() == "visible") {
                return true;
            }
            return false;
        });
        this.a.item("FontFamilyTransform", (a, b) => {
            let c = this.e(b);
            let d = this.d(b);
            let e = this.f(b);
            let f = a;
            if (f == null) {
                f = "Verdana";
            }
            return c + " " + e + " " + d + " " + f;
        });
        this.a.item("FontStyleTransform", (a, b) => {
            let c = this.c(b);
            let d = this.d(b);
            let e = this.f(b);
            let f = a;
            if (f == null) {
                f = "normal";
            }
            return f + " " + e + " " + d + " " + c;
        });
        this.a.item("FontSizeTransform", (a, b) => {
            let c = this.c(b);
            let d = this.e(b);
            let e = this.f(b);
            let f = a != null ? a.toString() + "px" : null;
            if (f == null) {
                f = "14px";
            }
            return d + " " + e + " " + f + " " + c;
        });
        this.a.item("FontWeightTransform", (a, b) => {
            let c = this.c(b);
            let d = this.d(b);
            let e = this.e(b);
            let f = a;
            if (f == null) {
                f = "normal";
            }
            f = f.toLowerCase();
            return e + " " + f + " " + d + " " + c;
        });
    }
    c(a) {
        let b = stringReplace(stringReplace(stringReplace(a.i, "Style", "Family"), "Weight", "Family"), "Size", "Family");
        let c = "Verdana";
        if (a.b.b(b)) {
            c = a.b.a(b).b;
            if (c == null) {
                c = "Verdana";
            }
        }
        return c;
    }
    e(a) {
        let b = stringReplace(stringReplace(stringReplace(a.i, "Family", "Style"), "Weight", "Style"), "Size", "Style");
        let c = "normal";
        if (a.b.b(b)) {
            c = a.b.a(b).b;
            if (c == null) {
                c = "normal";
            }
        }
        return c;
    }
    d(a) {
        let b = stringReplace(stringReplace(stringReplace(a.i, "Family", "Size"), "Weight", "Size"), "Style", "Size");
        let c = "14px";
        if (a.b.b(b)) {
            c = a.b.a(b).b;
            if (c == null) {
                c = "14px";
            }
            else {
                c = c.toString() + "px";
            }
        }
        return c;
    }
    f(a) {
        let b = stringReplace(stringReplace(stringReplace(a.i, "Family", "Weight"), "Size", "Weight"), "Style", "Weight");
        let c = "normal";
        if (a.b.b(b)) {
            c = a.b.a(b).b;
            if (c == null) {
                c = "normal";
            }
            c = c.toLowerCase();
        }
        return c;
    }
    b(a, b, c) {
        let d = c.c;
        if (d == null) {
            return b;
        }
        let e = d.h(a);
        if (e != null && this.a.containsKey(e)) {
            let f = this.a.item(e);
            return f(b, c);
        }
        return b;
    }
}
TypeDescriptionPropretyTransforms.$t = markType(TypeDescriptionPropretyTransforms, 'TypeDescriptionPropretyTransforms');
//# sourceMappingURL=TypeDescriptionPropretyTransforms.js.map