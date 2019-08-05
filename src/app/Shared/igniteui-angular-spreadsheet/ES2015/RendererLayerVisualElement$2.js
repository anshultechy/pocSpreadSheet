/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { RendererVisualElement$1 } from "./RendererVisualElement$1";
import { List$1 } from "../../igniteui-angular-core/ES2015/List$1";
import { RendererElementLayer$2 } from "./RendererElementLayer$2";
import { fromEnum, markType } from "../../igniteui-angular-core/ES2015/type";
/**
 * @hidden
 */
export class RendererLayerVisualElement$2 extends RendererVisualElement$1 {
    constructor($tViewModel, $tGraphics, a, b) {
        super($tGraphics, a, b);
        this.$tViewModel = null;
        this.$tGraphics = null;
        this.cq = null;
        this.$tViewModel = $tViewModel;
        this.$tGraphics = $tGraphics;
        this.$type = this.$type.specialize(this.$tViewModel, this.$tGraphics);
        this.cq = new List$1(RendererElementLayer$2.$.specialize(this.$tViewModel, this.$tGraphics), 0);
    }
    cf(a) {
        for (let b = 0, c = this.cq.count; b < c; b++) {
            this.cq._inner[b]._g(a);
        }
    }
    bz() {
        let a = new List$1(RendererElementLayer$2.$.specialize(this.$tViewModel, this.$tGraphics), 1, this.cq);
        for (let b of fromEnum(a)) {
            b.dispose();
            b._d.detach(b);
        }
        super.bz();
    }
    cg(a) {
        for (let b = 0, c = this.cq.count; b < c; b++) {
            this.cq._inner[b]._h(a);
        }
    }
    cr(a) {
        this.cq.add(a);
        this.t = true;
        this.ck();
    }
    cp() {
        return this.cq;
    }
    cm(a, b, c, d) {
        for (let e = 0, f = this.cq.count; e < f; e++) {
            this.cq._inner[e]._q(a, b, c, d);
        }
    }
    cs(a) {
        this.cq.remove(a);
        this.ck();
    }
}
RendererLayerVisualElement$2.$t = markType(RendererLayerVisualElement$2, 'RendererLayerVisualElement$2', RendererVisualElement$1.$.specialize(1));
//# sourceMappingURL=RendererLayerVisualElement$2.js.map