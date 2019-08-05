/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { ElementLayerViewSingle } from "./ElementLayerViewSingle";
import { IRendererElementLayerView$2_$type } from "./IRendererElementLayerView$2";
import { ISpreadsheetGraphics_$type } from "./ISpreadsheetGraphics";
import { ILayerRenderer_$type } from "./ILayerRenderer";
import { markType } from "../../igniteui-angular-core/ES2015/type";
import { sizeFromLiteral } from "../../igniteui-angular-core/ES2015/IgSize";
/**
 * @hidden
 */
export class RendererLayerVisualElementView$1 extends ElementLayerViewSingle {
    constructor($tViewModel, a) {
        super();
        this.$tViewModel = null;
        this.c = null;
        this.$tViewModel = $tViewModel;
        this.$type = this.$type.specialize(this.$tViewModel);
        this.c = a;
    }
    arrange(finalSize) {
        arguments[0] = sizeFromLiteral(arguments[0]);
        return this._arrange$i.apply(this, arguments);
    }
    _arrange$i(a) {
    }
    createRenderer() {
        return this;
    }
    invalidateArrange() {
        this.c.t = true;
    }
    invalidateLayout() {
        this.c.l = true;
    }
    invalidateMeasure() {
        this.c.t = true;
    }
    invalidateRender() {
        this.c.ck();
    }
    measure(availableSize) {
        arguments[0] = sizeFromLiteral(arguments[0]);
        return this._measure$i.apply(this, arguments);
    }
    _measure$i(a) {
    }
    onUnloaded() {
    }
    releaseRenderer(a) {
    }
}
RendererLayerVisualElementView$1.$t = markType(RendererLayerVisualElementView$1, 'RendererLayerVisualElementView$1', ElementLayerViewSingle.$, [IRendererElementLayerView$2_$type.specialize(0, ISpreadsheetGraphics_$type), ILayerRenderer_$type]);
//# sourceMappingURL=RendererLayerVisualElementView$1.js.map