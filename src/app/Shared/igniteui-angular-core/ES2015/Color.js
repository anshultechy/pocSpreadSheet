/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { ValueType, typeCast, markStruct } from "./type";
import { ArgumentException } from "./ArgumentException";
import { truncate } from "./number";
import { stringToColor } from "./colorCore";
import { stringStartsWith } from "./string";
/**
 * @hidden
 */
export class Color extends ValueType {
    constructor() {
        super();
        this._a = 0;
        this._r = 0;
        this._g = 0;
        this._b = 0;
        this._colorString = null;
        this.a = false;
    }
    get l() {
        return this._a;
    }
    set l(a) {
        this._a = truncate(Math.round(a));
        this.a = true;
    }
    get o() {
        return this._r;
    }
    set o(a) {
        this._r = truncate(Math.round(a));
        this.a = true;
    }
    get n() {
        return this._g;
    }
    set n(a) {
        this._g = truncate(Math.round(a));
        this.a = true;
    }
    get m() {
        return this._b;
    }
    set m(a) {
        this._b = truncate(Math.round(a));
        this.a = true;
    }
    get colorString() {
        if (this.a || this._colorString == null) {
            this.a = false;
            this.s();
        }
        return this._colorString;
    }
    set colorString(a) {
        this._colorString = a;
        this.r();
    }
    static create(a) {
        if (typeCast(Color.$, a) !== null) {
            return a;
        }
        let b = new Color();
        if (typeof a === 'string') {
            b.colorString = a;
        }
        else if (a != null) {
            throw new ArgumentException(1, "Unknown color type");
        }
        return b;
    }
    s() {
        this._colorString = "rgba(" + this._r + "," + this._g + "," + this._b + "," + this._a / 255 + ")";
    }
    r() {
        if (this.colorString == null) {
            this.l = this.o = this.n = this.m = 0;
            return;
        }
        let obj_ = stringToColor(this._colorString);
        this._a = typeof obj_.a != 'undefined' ? Math.round(obj_.a) : 0;
        this._r = typeof obj_.r != 'undefined' ? Math.round(obj_.r) : 0;
        this._g = typeof obj_.g != 'undefined' ? Math.round(obj_.g) : 0;
        this._b = typeof obj_.b != 'undefined' ? Math.round(obj_.b) : 0;
        if (stringStartsWith(this._colorString, "#") && this._colorString.length == 9) {
            this.s();
        }
    }
    static u(a_, r_, g_, b_) {
        let a = new Color();
        a._a = (a_ | 0);
        a._r = (r_ | 0);
        a._g = (g_ | 0);
        a._b = (b_ | 0);
        a.a = true;
        return a;
    }
    equals(a) {
        if ((typeCast(Color.$, a) !== null) == false) {
            return false;
        }
        let b = a;
        return this._a == b._a && this._r == b._r && this._g == b._g && this._b == b._b;
    }
    getHashCode() {
        return (this._a << 24) | (this._r << 16) | (this._g << 8) | this._b;
    }
    static d(a, b) {
        return !(Color.b(a, b));
    }
    static e(a, b) {
        if (!a.hasValue) {
            return b.hasValue;
        }
        else if (!b.hasValue) {
            return true;
        }
        return Color.d(a.value, b.value);
    }
    static b(a, b) {
        return a._a == b._a && a._r == b._r && a._g == b._g && a._b == b._b;
    }
    static c(a, b) {
        if (!a.hasValue) {
            return !b.hasValue;
        }
        else if (!b.hasValue) {
            return false;
        }
        return Color.b(a.value, b.value);
    }
}
Color.$t = markStruct(Color, 'Color');
//# sourceMappingURL=Color.js.map