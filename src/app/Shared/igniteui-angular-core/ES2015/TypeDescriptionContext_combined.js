/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, Type, String_$type, Delegate_$type, EnumUtil, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { TypeDescriptionMetadata } from "./TypeDescriptionMetadata";
import { TypeDescriptionWellKnownType_$type } from "./TypeDescriptionWellKnownType";
import { stringReplace } from "./string";
/**
 * @hidden
 */
export class TypeDescriptionContext extends Base {
    constructor(a, b) {
        super();
        this.e = new Dictionary$2(String_$type, Base.$, 0);
        this.d = new Dictionary$2(String_$type, Delegate_$type, 0);
        this.a = null;
        this.c = 0;
        this.a = a;
        this.c = b;
    }
    m(a, b) {
        this.e.item(a, b);
    }
    n(a, b) {
        this.d.item(a, b);
    }
    static l(key_) {
        if (key_ == null) {
            return null;
        }
        return key_.substr(0, 1).toUpperCase() + key_.substr(1);
    }
    static k(key_) {
        if (key_ == null) {
            return null;
        }
        return key_.substr(0, 1).toLowerCase() + key_.substr(1);
    }
    b(a, b) {
        if (this.e.containsKey(a + "@@" + b)) {
            return this.e.item(a + "@@" + b);
        }
        if (this.e.containsKey(a)) {
            let c = new TypeDescriptionMetadata();
            c.owningType = a;
            c.propertyName = b;
            let d = this.e.item(a);
            if (!d.containsKey(b)) {
                this.e.item(a + "@@" + b, null);
                return null;
            }
            let e = d.item(b);
            let f = "Unknown";
            let g = null;
            let h = null;
            let i = null;
            let j = e.split(')');
            if (j.length > 1) {
                let k = j[0];
                e = j[1];
                k = stringReplace(k, "(", "");
                let l = k.split(',');
                for (let n = 0; n < l.length; n++) {
                    let m = l[n];
                    let o = m.split(':');
                    let p = o[0];
                    let q = o[1];
                    let r = 3;
                    switch (p) {
                        case "web":
                            c.m(3, q);
                            c.m(2, q);
                            c.m(4, q);
                            c.m(1, q);
                            continue;
                        case "w":
                            r = 0;
                            break;
                        case "a":
                            r = 3;
                            break;
                        case "r":
                            r = 2;
                            break;
                        case "j":
                            r = 1;
                            break;
                        case "wc":
                            r = 4;
                            break;
                        case "xf":
                            r = 5;
                            break;
                        case "xa":
                            r = 6;
                            break;
                        case "xi":
                            r = 7;
                            break;
                        case "wf":
                            r = 8;
                            break;
                    }
                    c.m(r, q);
                }
            }
            let s = e.split(':');
            if (s.length >= 4) {
                i = s[3];
            }
            if (s.length >= 3) {
                g = s[2];
            }
            if (s.length >= 2) {
                h = s[1];
            }
            if (s.length >= 1) {
                f = s[0];
            }
            c.knownType = EnumUtil.getEnumValue(TypeDescriptionWellKnownType_$type, EnumUtil.parse(TypeDescriptionWellKnownType_$type, f, true));
            c.specificExternalType = h;
            c.specificType = g;
            c.collectionElementType = i;
            this.e.item(a + "@@" + b, c);
            return c;
        }
        return null;
    }
    i(a) {
        if (this.d.containsKey(a)) {
            return this.d.item(a)();
        }
        return null;
    }
    o(a, b, c) {
        if (TypeDescriptionMetadata.shouldCamelize(this.c)) {
            b = TypeDescriptionContext.k(b);
        }
        else {
            b = TypeDescriptionContext.l(b);
        }
        this.a.setPropertyValue(a, b, c, null);
    }
    h(a) {
        return this.a.createColorCollection(a);
    }
    g(a) {
        return this.a.createBrushCollection(a);
    }
    j(a, b) {
        return this.a.createObject(a, b, this);
    }
    f(a, b) {
        return this.a.coerceToEnum(a, this, b);
    }
}
TypeDescriptionContext.$t = markType(TypeDescriptionContext, 'TypeDescriptionContext');
/**
 * @hidden
 */
export let IComponentRendererAdapter_$type = new Type(null, 'IComponentRendererAdapter');
//# sourceMappingURL=TypeDescriptionContext_combined.js.map