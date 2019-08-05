/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, Nullable$1, markType } from "./type";
import { Color } from "./Color";
/**
 * @hidden
 */
export class GradientStop extends Base {
    constructor() {
        super();
        this.offset = 0;
        this._fill = null;
        this.d = null;
        this.g = new Color();
        this.offset = 0;
    }
    clone() {
        let a = new GradientStop();
        a.offset = this.offset;
        a._fill = this._fill;
        return a;
    }
    get fill() {
        return this._fill;
    }
    set fill(a) {
        this._fill = a;
    }
    get color() {
        if (this._fill == this.d) {
            return this.g;
        }
        let a = new Color();
        if (this._fill != null) {
            a.colorString = this._fill;
            this.g = a;
            this.d = this._fill;
        }
        return a;
    }
    set color(a) {
        this.g = a;
        this.d = this.g.colorString;
        this._fill = this.d;
    }
    equals(a) {
        if (a == null) {
            return false;
        }
        let b = a;
        return this.offset == b.offset && this.color.equals(b.color) && Base.equalsStatic(this._fill, b._fill);
    }
    getHashCode() {
        let a = (this.offset);
        if (Color.e(Nullable$1.toNullable(Color.$, this.g), Nullable$1.toNullable(Color.$, null))) {
            a ^= this.g.getHashCode();
        }
        return a;
    }
}
GradientStop.$t = markType(GradientStop, 'GradientStop');
//# sourceMappingURL=GradientStop.js.map