/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, markType } from "./type";
import { DictionaryUtil } from "./dictionary";
import { UnsetValue } from "./UnsetValue";
/**
 * @hidden
 */
export class DependencyObject extends Base {
    constructor() {
        super();
        this.localValues = null;
        this.a = null;
        this.localValues = DictionaryUtil.dictionaryCreate();
        this.a = DictionaryUtil.dictionaryCreate();
    }
    c(a) {
        if (this.localValues.has(a.name)) {
            return this.localValues.get(a.name);
        }
        return a.l.b;
    }
    h(dp_, a) {
        if (dp_.b) {
            let oldValue_ = null;
            if (this.localValues.has(dp_._name)) {
                oldValue_ = this.localValues.get(dp_._name);
            }
            ;
            this.localValues.set(dp_._name, a);
            dp_.l.d(this, new DependencyPropertyChangedEventArgs(dp_, a, oldValue_));
        }
        else {
            this.localValues.set(dp_._name, a);
        }
    }
    f(a) {
        this.localValues.delete(a._name);
    }
    e(a) {
        if (this.localValues.has(a._name)) {
            return this.localValues.get(a.name);
        }
        return DependencyProperty.c;
    }
    g(a, b) {
        if (a == null) {
            return;
        }
        this.a.set(a.name, b);
    }
    getValueAlt(a) {
        return this.c(a);
    }
    setValueAlt(dp_, a) {
        this.h(dp_, a);
    }
}
DependencyObject.$t = markType(DependencyObject, 'DependencyObject');
/**
 * @hidden
 */
export class DependencyProperty extends Base {
    constructor(a, b, c) {
        super();
        this._name = null;
        this.f = null;
        this.k = null;
        this.a = false;
        this._name = a;
        this.f = b;
        this.k = c;
        if (this.k != null && this.k.d != null) {
            this.a = true;
        }
        else {
            this.a = false;
        }
    }
    get b() {
        return this.a;
    }
    get l() {
        return this.k;
    }
    get propertyType() {
        return this.f;
    }
    get name() {
        return this._name;
    }
    static i(a, b, c, d) {
        return DependencyPropertiesCollection.c.e(a, b, c, d);
    }
    static h(a, b) {
        if (b == null) {
            return null;
        }
        let c = DependencyPropertiesCollection.c.d(b.typeName + a);
        if (c != null) {
            return c;
        }
        return DependencyProperty.h(a, b.baseType);
    }
    static registerAlt(a, b, c, d) {
        return DependencyProperty.i(a, b, c, d);
    }
}
DependencyProperty.$t = markType(DependencyProperty, 'DependencyProperty');
DependencyProperty.c = new UnsetValue();
/**
 * @hidden
 */
export class DependencyPropertiesCollection extends Base {
    constructor() {
        super();
        this.a = null;
        if (this.a == null) {
            this.a = DictionaryUtil.dictionaryCreate();
        }
    }
    static get c() {
        if (DependencyPropertiesCollection.b == null) {
            DependencyPropertiesCollection.b = new DependencyPropertiesCollection();
        }
        return DependencyPropertiesCollection.b;
    }
    d(a) {
        return this.a.get(a);
    }
    e(a, b, c, d) {
        let e = new DependencyProperty(a, b, d);
        this.a.set(c.typeName + a, e);
        return e;
    }
}
DependencyPropertiesCollection.$t = markType(DependencyPropertiesCollection, 'DependencyPropertiesCollection');
DependencyPropertiesCollection.b = null;
/**
 * @hidden
 */
export class DependencyPropertyChangedEventArgs extends Base {
    constructor(a, b, c) {
        super();
        this.a = null;
        this.b = null;
        this.e = null;
        this.a = b;
        this.b = c;
        this.e = a;
    }
    get f() {
        return this.e;
    }
    set f(a) {
        this.e = a;
    }
    get newValue() {
        return this.a;
    }
    get oldValue() {
        return this.b;
    }
}
DependencyPropertyChangedEventArgs.$t = markType(DependencyPropertyChangedEventArgs, 'DependencyPropertyChangedEventArgs');
/**
 * @hidden
 */
export class PropertyMetadata extends Base {
    constructor(a, ..._rest) {
        super();
        this.a = null;
        this.c = null;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    let c = _rest[0];
                    this.b = c;
                    this.d = null;
                }
                break;
            case 1:
                {
                    let c = _rest[0];
                    this.b = null;
                    this.d = c;
                }
                break;
            case 2:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    this.b = c;
                    this.d = d;
                }
                break;
        }
    }
    get b() {
        return this.a;
    }
    set b(a) {
        this.a = a;
    }
    get d() {
        return this.c;
    }
    set d(a) {
        this.c = a;
    }
    static createWithCallback(a) {
        return new PropertyMetadata(1, a);
    }
    static createWithDefaultAndCallback(a, b) {
        return new PropertyMetadata(2, a, b);
    }
}
PropertyMetadata.$t = markType(PropertyMetadata, 'PropertyMetadata');
//# sourceMappingURL=DependencyObject_combined.js.map