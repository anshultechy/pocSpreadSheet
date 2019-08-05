/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { List$1 } from "./List$1";
import { DescriptionPropertyValue } from "./DescriptionPropertyValue";
import { Dictionary$2 } from "./Dictionary$2";
/**
 * @hidden
 */
export class DescriptionTreeNode extends Base {
    constructor() {
        super();
        this.f = 0;
        this.d = new List$1(DescriptionPropertyValue.$, 0);
        this.c = new Dictionary$2(String_$type, DescriptionPropertyValue.$, 0);
        this.h = null;
        this.f = DescriptionTreeNode.g;
        DescriptionTreeNode.g++;
        if (DescriptionTreeNode.g >= 0x7FFFFFFFFFFFFFFF) {
            DescriptionTreeNode.g = 0;
        }
    }
    i(a, b) {
        let c = new DescriptionPropertyValue();
        c.c = a;
        c.b = b;
        this.c.addItem(a.toLowerCase(), c);
        this.d.add(c);
    }
    a(a) {
        return this.c.item(a.toLowerCase());
    }
    b(a) {
        return this.c.containsKey(a.toLowerCase());
    }
    k(a) {
        if (this.c.containsKey(a.toLowerCase())) {
            let b = this.c.item(a.toLowerCase());
            this.c.removeItem(a.toLowerCase());
            this.d.remove(b);
        }
    }
    j() {
        this.c.clear();
        this.d.clear();
    }
    e() {
        return this.d;
    }
}
DescriptionTreeNode.$t = markType(DescriptionTreeNode, 'DescriptionTreeNode');
DescriptionTreeNode.g = 0;
//# sourceMappingURL=DescriptionTreeNode.js.map