/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, typeCast, Array_$type, markType } from "./type";
import { List$1 } from "./List$1";
import { HashSet$1 } from "./HashSet$1";
import { DescriptionTreeNode } from "./DescriptionTreeNode";
import { Description } from "./Description";
/**
 * @hidden
 */
export class DescriptionTreeBuilder extends Base {
    static b(item_) {
        let propertyKey_ = null;
        let ret_ = new List$1(String_$type, 0);
        let seen_ = new HashSet$1(String_$type, 0);
        let exclusions_ = {};
        let seen = new Set();
        let comp = item_;
        while (comp = (comp.prototype || Object.getPrototypeOf(comp))) {
            if (comp == Base.prototype) {
                break;
            }
            let props = Object.getOwnPropertyNames(comp.constructor.prototype);
            for (let i = 0; i < props.length; i++) {
                if (!seen.has(props[i])) {
                    seen.add(props[i]);
                    ret_.add(props[i]);
                }
            }
        }
        ;
        return ret_;
    }
    static createTree(a, description_) {
        let b = new DescriptionTreeNode();
        if (description_ == null) {
            return null;
        }
        let c = DescriptionTreeBuilder.b(description_);
        for (let d = 0; d < c.count; d++) {
            let key_ = c._inner[d];
            if (key_.toLowerCase() != "type" && !description_.a(DescriptionTreeBuilder.c(key_))) {
                continue;
            }
            let e = description_[key_];
            if (typeCast(Description.$, e) !== null) {
                let f = DescriptionTreeBuilder.createTree(a, e);
                e = f;
            }
            if (typeCast(Array_$type, e) !== null) {
                let g = e;
                let h = new Array(g.length);
                for (let i = 0; i < h.length; i++) {
                    let j = g[i];
                    if (typeCast(Description.$, j) !== null) {
                        let k = DescriptionTreeBuilder.createTree(a, j);
                        h[i] = k;
                    }
                    else {
                        h[i] = j;
                    }
                }
                e = h;
            }
            if (key_.toLowerCase() == "type") {
                b.h = e;
            }
            b.i(DescriptionTreeBuilder.c(key_), e);
        }
        if (b.b("type")) {
            let l = b.a("type").b;
            let m = b.e();
            for (let n = 0; n < m.count; n++) {
                let o = m._inner[n];
                o.a = a.b(l, o.c);
            }
        }
        return b;
    }
    static c(key_) {
        if (key_ == null) {
            return null;
        }
        return key_.substr(0, 1).toUpperCase() + key_.substr(1);
    }
}
DescriptionTreeBuilder.$t = markType(DescriptionTreeBuilder, 'DescriptionTreeBuilder');
//# sourceMappingURL=DescriptionTreeBuilder.js.map