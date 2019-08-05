/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, Nullable$1, runOn, delegateRemove, Number_$type, delegateCombine, markType } from "../../igniteui-angular-core/ES2015/type";
import { IPlatformScrollBarAdapter_$type } from "./IPlatformScrollBarAdapter";
import { stringIsNullOrEmpty } from "../../igniteui-angular-core/ES2015/string";
/**
 * @hidden
 */
export class JsScrollBarAdapter extends Base {
    constructor(a) {
        super();
        this.a = null;
        this.c = null;
        this.a = a;
    }
    get b() {
        return this.a.a.ck;
    }
    d() {
        this.a.c();
    }
    getValue() {
        return this.b._ac;
    }
    initialize(a, b, c, d, e, f) {
        let g = this.b;
        if (this.c != null) {
            g.propertyChanged = delegateRemove(g.propertyChanged, runOn(this, this.e));
        }
        g._ab = a;
        g._ae = f;
        g._ah = Nullable$1.toNullable(Number_$type, e);
        g._aj(c, b + e, d);
        if (this.c != null) {
            g.propertyChanged = delegateCombine(g.propertyChanged, runOn(this, this.e));
        }
    }
    setMinimum(a) {
        this.b._ab = a;
    }
    setMaximum(a) {
        let b = this.b;
        b._aj(b._af, a + b._z, b._ac);
    }
    setViewportSize(a) {
        let b = this.b;
        b._aj(a, b._t, b._ac);
    }
    setValue(a) {
        this.b._aq(a);
    }
    setLargeChange(a) {
        this.b._ah = Nullable$1.toNullable(Number_$type, a);
    }
    setSmallChange(a) {
        this.b._ae = a;
    }
    setIsEnabled(a) {
        this.a.b = a;
    }
    setIsVisible(a) {
        this.a.a.ac = a;
    }
    setOnValueChangeCallback(a) {
        if (this.c != null) {
            let b = this.b;
            b.propertyChanged = delegateRemove(b.propertyChanged, runOn(this, this.e));
        }
        this.c = a;
        if (this.c != null) {
            let c = this.b;
            c.propertyChanged = delegateCombine(c.propertyChanged, runOn(this, this.e));
        }
    }
    e(a, b) {
        if (stringIsNullOrEmpty(b.propertyName) || b.propertyName == "Offset") {
            if (this.c != null) {
                this.c(this.b._ac);
            }
        }
    }
}
JsScrollBarAdapter.$t = markType(JsScrollBarAdapter, 'JsScrollBarAdapter', Base.$, [IPlatformScrollBarAdapter_$type]);
//# sourceMappingURL=JsScrollBarAdapter.js.map