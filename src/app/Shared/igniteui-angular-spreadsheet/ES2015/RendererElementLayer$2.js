/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { ElementLayer$1 } from "./ElementLayer$1";
import { Rect } from "../../igniteui-angular-core/ES2015/Rect";
import { Size } from "../../igniteui-angular-core/ES2015/Size";
import { markType } from "../../igniteui-angular-core/ES2015/type";
/**
 * @hidden
 */
export class RendererElementLayer$2 extends ElementLayer$1 {
    constructor($tViewModel, $tGraphics, a, b, c) {
        super($tViewModel, a, b, c);
        this.$tViewModel = null;
        this.$tGraphics = null;
        this._k = null;
        this.$tViewModel = $tViewModel;
        this.$tGraphics = $tGraphics;
        this.$type = this.$type.specialize(this.$tViewModel, this.$tGraphics);
    }
    _g(a) {
        let b = new Rect(0, 0, 0, a.width, a.height);
        this._k._arrange$i(a);
        return b;
    }
    dispose() {
        if (this._k != null) {
            this._d.releaseRenderer(this._k);
            this._k.onUnloaded();
        }
        this._p();
    }
    _h(a) {
        if (this._k == null) {
            this._k = this._d.createRenderer();
        }
        this._k._measure$i(a);
        return new Size(0);
    }
    get _l() {
        return this._k;
    }
    _r(a) {
        return a;
    }
    _p() {
    }
    _o() {
        if (this._k != null) {
            this._k.invalidateRender();
        }
    }
    _n() {
        if (this._k != null) {
            this._k.invalidateLayout();
        }
    }
}
RendererElementLayer$2.$t = markType(RendererElementLayer$2, 'RendererElementLayer$2', ElementLayer$1.$.specialize(0));
//# sourceMappingURL=RendererElementLayer$2.js.map