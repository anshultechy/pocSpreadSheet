/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, INotifyPropertyChanged_$type, PropertyChangedEventArgs, runOn, markType } from "./type";
import { dateNow } from "./date";
/**
 * @hidden
 */
export class DoubleAnimator extends Base {
    constructor(a, b, c) {
        super();
        this.k = 0;
        this.p = 0;
        this.a = null;
        this.i = 0;
        this.j = 0;
        this._requestAnimationFrame = null;
        this.d = false;
        this.h = new Date();
        this.q = 0;
        this.propertyChanged = null;
        this.i = a;
        this.j = b;
        this.p = c;
        this.s();
    }
    get_g() {
        return this.o == 0;
    }
    get g() {
        return this.get_g();
    }
    u(a) {
        if (a == null) {
            this.s();
        }
        else if (a.supportsAnimation()) {
            this.requestAnimationFrame = a.getRequestAnimationFrame();
        }
    }
    t() {
        this.y(true);
    }
    get o() {
        return this.k;
    }
    set o(a) {
        this.k = a;
        if (this.propertyChanged != null) {
            this.propertyChanged(this, new PropertyChangedEventArgs("TransitionProgress"));
        }
    }
    get r() {
        return this.p;
    }
    set r(a) {
        this.p = a;
    }
    get b() {
        return this.a;
    }
    set b(a) {
        this.a = a;
    }
    get l() {
        return this.i;
    }
    set l(a) {
        this.i = a;
    }
    get n() {
        return this.j;
    }
    set n(a) {
        this.j = a;
    }
    s() {
        this.requestAnimationFrame = (window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (callback) {
                window.setTimeout(callback, 1000 / 60);
            });
    }
    get requestAnimationFrame() {
        return this._requestAnimationFrame;
    }
    set requestAnimationFrame(a) {
        this._requestAnimationFrame = a;
    }
    get e() {
        return this.d;
    }
    set e(a) {
        this.d = a;
    }
    v() {
        this.k = 0;
        this.q = 0;
        this.h = dateNow();
        if (!this.d) {
            this.d = true;
            this.requestAnimationFrame(runOn(this, this.x));
        }
    }
    w() {
        this.d = false;
        this.k = 0;
        this.q = 0;
    }
    x() {
        this.y(false);
    }
    y(a) {
        if (!this.d) {
            this.w();
            return;
        }
        let b = dateNow();
        let c = b.getTime() - this.h.getTime();
        if (c > this.p) {
            c = this.p;
        }
        if ((c - this.q < 16 && c != this.p) && !a) {
            this.requestAnimationFrame(runOn(this, this.x));
            return;
        }
        this.q = c;
        let d = (c / this.p);
        if (this.a != null) {
            d = this.a(d);
        }
        let e = this.i + ((this.j - this.i) * d);
        if (!a) {
            if (c == this.p) {
                this.w();
            }
            else {
                this.requestAnimationFrame(runOn(this, this.x));
            }
        }
        this.o = e;
    }
    m() {
        return this.d ? dateNow().getTime() - this.h.getTime() : 0;
    }
    f() {
        return this.d;
    }
}
DoubleAnimator.$t = markType(DoubleAnimator, 'DoubleAnimator', Base.$, [INotifyPropertyChanged_$type]);
//# sourceMappingURL=DoubleAnimator.js.map