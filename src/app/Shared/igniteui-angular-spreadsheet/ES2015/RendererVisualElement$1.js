/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { LayerVisualElement } from "./LayerVisualElement";
import { Rect } from "../../igniteui-angular-core/ES2015/Rect";
import { markType } from "../../igniteui-angular-core/ES2015/type";
/**
 * @hidden
 */
export class RendererVisualElement$1 extends LayerVisualElement {
    constructor($tGraphics, a, b) {
        super(a, b);
        this.$tGraphics = null;
        this.cn = null;
        this.ci = null;
        this.$tGraphics = $tGraphics;
        this.$type = this.$type.specialize(this.$tGraphics);
        this.cn = new Rect(4);
    }
    b5() {
        this.ck();
        this.t = true;
        super.b5();
    }
    an(a, b, c, d) {
        let e = this.a3;
        let f = this.av;
        let g = super.an(a, b, c, d);
        if (g && (e != this.a3 || f != this.av)) {
            this.ck();
        }
        return g;
    }
    get ch() {
        return this.cn.width > 0 || this.cn.height > 0;
    }
    get co() {
        return this.cn;
    }
    ck() {
        if (this.cn.x != this.ax || this.cn.y != this.a2 || this.cn.width != this.a3 || this.cn.height != this.av) {
            this.cn.x = this.ax;
            this.cn.y = this.a2;
            this.cn.width = this.a3;
            this.cn.height = this.av;
            this.b1();
        }
    }
    cl(a, b, c) {
        this.cm(a, b, this.cn, c);
        this.cn.width = 0;
        this.cn.height = 0;
    }
}
RendererVisualElement$1.$t = markType(RendererVisualElement$1, 'RendererVisualElement$1', LayerVisualElement.$);
//# sourceMappingURL=RendererVisualElement$1.js.map