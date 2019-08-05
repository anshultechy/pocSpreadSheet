/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, markType } from "./type";
import { stringContains, stringStartsWith } from "./string";
/**
 * @hidden
 */
export class FastReflectionHelper extends Base {
    constructor(a, b) {
        super();
        this.c = false;
        this._propertyName = null;
        this.a = null;
        this.b = false;
        this.d = false;
        this._index = -1;
        this.k = null;
        this._useTraditionalReflection = false;
        this.useTraditionalReflection = a;
        this.n(b);
    }
    static needsHelper(a) {
        if (a == null) {
            return false;
        }
        if (a != "." && a != null && stringContains(a, ".") || stringContains(a, "[")) {
            return true;
        }
        return false;
    }
    get propertyName() {
        return this._propertyName;
    }
    set propertyName(a) {
        if (a != this.k) {
            this.n(a);
        }
    }
    n(a) {
        this.k = a;
        this._propertyName = a;
        this.c = false;
        if (this._propertyName == ".") {
            this.c = true;
            return;
        }
        if (this._propertyName == null) {
            return;
        }
        let b = false;
        if (stringStartsWith(a, "[")) {
            b = true;
        }
        while (stringStartsWith(a, ".")) {
            a = a.substr(1);
        }
        while (stringStartsWith(a, "[")) {
            a = a.substr(1);
        }
        let c = a.indexOf("[");
        let d = a.indexOf(".");
        let e = -1;
        if (c < 0) {
            e = d;
        }
        else if (d < 0) {
            e = c;
        }
        else {
            e = Math.min(d, c);
        }
        if (e > 0) {
            if (a.charAt(e) == '[' || !b) {
                let f = a.substr(e, a.length - e);
                this.a = new FastReflectionHelper(this.useTraditionalReflection, f);
                this.n(a.substr(0, e));
                return;
            }
        }
        let g = a.indexOf("]");
        if (g > 0) {
            let h = a.substr(g + 1, a.length - g - 1);
            if (h.length > 0) {
                this.a = new FastReflectionHelper(this.useTraditionalReflection, h);
            }
            a = a.substr(0, g);
            if (this.f(a)) {
                this.b = true;
                this._index = parseInt(a);
            }
            else {
                this.d = true;
            }
        }
        else {
            this.b = false;
            this.d = false;
        }
        this._propertyName = a;
    }
    f(a) {
        if (a == null) {
            return false;
        }
        let b = a.trim();
        if (b.length == 0) {
            return false;
        }
        for (let c = 0; c < b.length; c++) {
            let d = b.charAt(c);
            let e = d.charCodeAt(0);
            if (48 <= e && e <= 57) {
                continue;
            }
            return false;
        }
        return true;
    }
    get useTraditionalReflection() {
        return this._useTraditionalReflection;
    }
    set useTraditionalReflection(a) {
        this._useTraditionalReflection = a;
    }
    getPropertyValue(a) {
        let from_ = a;
        if (this.c) {
            return from_;
        }
        let b = null;
        if (this.b) {
            b = from_[this._index];
        }
        else {
            b = from_[this._propertyName];
        }
        if (this.a != null) {
            return this.a.getPropertyValue(b);
        }
        return b;
    }
    get invalid() {
        return false;
    }
}
FastReflectionHelper.$t = markType(FastReflectionHelper, 'FastReflectionHelper');
//# sourceMappingURL=FastReflectionHelper.js.map