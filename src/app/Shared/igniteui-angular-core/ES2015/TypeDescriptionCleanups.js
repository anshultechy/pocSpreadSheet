/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, Delegate_$type, markType, getInstanceType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { stringReplace } from "./string";
/**
 * @hidden
 */
export class TypeDescriptionCleanups extends Base {
    constructor() {
        super();
        this.a = new Dictionary$2(String_$type, Delegate_$type, 0);
        this.a.item("Series", (a) => {
            let s_ = a;
            if (s_.removeAxes)
                s_.removeAxes();
        });
    }
    b(a, b) {
        if (b == null) {
            return;
        }
        let c = "";
        let d;
        let obj_ = b;
        let impl_ = obj_.i;
        let e = (impl_);
        if (e) {
            d = getInstanceType(impl_);
        }
        else {
            impl_ = obj_._chart || obj_._map || obj_._gauge;
            e = (impl_);
            if (e) {
                d = getInstanceType(impl_);
            }
            else {
                return;
            }
        }
        while (d != null) {
            c = d.typeName;
            c = stringReplace(stringReplace(c, "Ultra", ""), "Xam", "");
            if (this.a.containsKey(c)) {
                this.a.item(c)(b);
            }
            d = d.baseType;
            if (d != null && (d.typeName == "Object" || d.typeName == "Base")) {
                return;
            }
        }
    }
}
TypeDescriptionCleanups.$t = markType(TypeDescriptionCleanups, 'TypeDescriptionCleanups');
//# sourceMappingURL=TypeDescriptionCleanups.js.map