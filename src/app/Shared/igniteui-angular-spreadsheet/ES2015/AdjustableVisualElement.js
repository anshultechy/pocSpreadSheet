/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { VisualElement } from "./VisualElement";
import { Point_$type, markType } from "../../igniteui-angular-core/ES2015/type";
import { RootVisualElement } from "./RootVisualElement";
/**
 * @hidden
 */
export class AdjustableVisualElement extends VisualElement {
    constructor(a, b) {
        super(a, b);
        this.cf = false;
        this.cn = null;
        this.co = null;
    }
    get_x() {
        return true;
    }
    b4() {
        super.b4();
        this.ci(true);
    }
    ad(a) {
        if (!this.cf && a.a() == 1) {
            if (!this.cg()) {
                return false;
            }
            let b = a.h();
            if (a.d()) {
                this.cf = true;
                this.co = { $type: Point_$type, x: b.x, y: b.y };
                this.cn = { $type: Point_$type, x: b.x + this.ax, y: b.y + this.a2 };
                this.cm();
                return true;
            }
        }
        return super.ad(a);
    }
    ag(a) {
        if (this.cf) {
            let b = a.h();
            let c = b.x + this.ax - this.cn.x;
            let d = b.y + this.a2 - this.cn.y;
            if (c != 0 || d != 0) {
                this.cl(c, d);
            }
        }
        return super.ag(a);
    }
    ah(a) {
        if (this.cf) {
            let b = a.h();
            let c = b.x + this.ax - this.cn.x;
            let d = b.y + this.a2 - this.cn.y;
            this.ci(false);
            this.ck(c, d);
        }
        return super.ah(a);
    }
    get ch() {
        return this.cf;
    }
    ci(a) {
        if (this.cf) {
            this.cf = false;
            this.cn = this.co = null;
            let b = this.g(RootVisualElement.$);
            if (b != null) {
                b.dk(this);
            }
            if (a) {
                this.cj();
            }
        }
    }
    cg() {
        return true;
    }
    cm() {
    }
    cj() {
    }
}
AdjustableVisualElement.$t = markType(AdjustableVisualElement, 'AdjustableVisualElement', VisualElement.$);
//# sourceMappingURL=AdjustableVisualElement.js.map
