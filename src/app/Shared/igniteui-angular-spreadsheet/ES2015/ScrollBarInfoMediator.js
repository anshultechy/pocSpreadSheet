/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, runOn, delegateCombine, delegateRemove, markType } from "../../igniteui-angular-core/ES2015/type";
import { isInfinity } from "../../igniteui-angular-core/ES2015/number";
import { stringIsNullOrEmpty } from "../../igniteui-angular-core/ES2015/string";
/**
 * @hidden
 */
export class ScrollBarInfoMediator extends Base {
    constructor(a) {
        super();
        this.c = null;
        this.a = null;
        this.i = false;
        this.f = null;
        this.e = null;
        this.c = a;
        let b = this.c;
        b.propertyChanged = delegateCombine(b.propertyChanged, runOn(this, this.o));
    }
    get j() {
        return this.i;
    }
    get b() {
        return this.a;
    }
    set b(a) {
        if (a != this.a) {
            let b = this.a;
            this.a = a;
            if (b != null) {
                b.setOnValueChangeCallback(null);
            }
            if (this.a != null) {
                this.l();
                this.a.setOnValueChangeCallback(runOn(this, this.n));
            }
            this.m(b, a);
        }
    }
    get g() {
        return this.e;
    }
    set g(a) {
        this.e = a;
    }
    get h() {
        return this.f;
    }
    set h(a) {
        this.f = a;
    }
    get d() {
        return this.c;
    }
    k() {
        let a = this.c;
        a.propertyChanged = delegateRemove(a.propertyChanged, runOn(this, this.o));
        this.b = null;
    }
    l() {
        let a = this.a;
        if (a == null) {
            return;
        }
        if (this.i) {
            return;
        }
        try {
            this.i = true;
            a.initialize(this.c._ab, this.c._aa, isInfinity(this.c._af) ? this.c._aa : this.c._af, this.c._ac, this.c._z, this.c._ae);
            this.p();
            this.q();
        }
        finally {
            this.i = false;
        }
    }
    m(a, b) {
    }
    n(a) {
        if (this.a != null && !this.i) {
            this.c._ac = a;
        }
    }
    o(a, b) {
        if (this.a != null) {
            if (stringIsNullOrEmpty(b.propertyName)) {
                this.l();
            }
            else {
                switch (b.propertyName) {
                    case "Minimum":
                        this.a.setMinimum(this.c._ab);
                        break;
                    case "Maximum":
                    case "ScrollableExtent":
                        this.a.setMaximum(this.c._aa);
                        break;
                    case "Viewport":
                        this.a.setViewportSize(this.c._af);
                        break;
                    case "Offset":
                        this.a.setValue(this.c._ac);
                        break;
                    case "ComputedScrollBarIsEnabled":
                        this.p();
                        break;
                    case "ComputedScrollBarVisibility":
                        this.q();
                        break;
                    case "Extent":
                    case "LargeChange": break;
                    case "LargeChangeResolved":
                        this.a.setLargeChange(this.c._z);
                        break;
                    case "SmallChange":
                        this.a.setSmallChange(this.c._ae);
                        break;
                    case "IsRangeChangeSuspended":
                    case "ScrollBarVisibility": break;
                    default: break;
                }
            }
        }
    }
    p() {
        if (this.e != null) {
            this.e();
        }
        else if (this.a != null) {
            this.a.setIsEnabled(this.c._g);
        }
    }
    q() {
        if (this.f != null) {
            this.f();
        }
        else if (this.a != null) {
            this.a.setIsVisible(this.c._h);
        }
    }
}
ScrollBarInfoMediator.$t = markType(ScrollBarInfoMediator, 'ScrollBarInfoMediator');
//# sourceMappingURL=ScrollBarInfoMediator.js.map