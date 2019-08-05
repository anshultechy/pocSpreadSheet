/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { ElementLayerViewSingle } from "./ElementLayerViewSingle";
import { IRendererElementLayerView$2_$type } from "./IRendererElementLayerView$2";
import { ISpreadsheetGraphics_$type } from "./ISpreadsheetGraphics";
import { ILayerRenderer_$type } from "./ILayerRenderer";
import { markType } from "../../igniteui-angular-core/ES5/type";
import { sizeFromLiteral } from "../../igniteui-angular-core/ES5/IgSize";
/**
 * @hidden
 */
var RendererLayerVisualElementView$1 = /** @class */ (function (_super) {
    tslib_1.__extends(RendererLayerVisualElementView$1, _super);
    function RendererLayerVisualElementView$1($tViewModel, a) {
        var _this = _super.call(this) || this;
        _this.$tViewModel = null;
        _this.c = null;
        _this.$tViewModel = $tViewModel;
        _this.$type = _this.$type.specialize(_this.$tViewModel);
        _this.c = a;
        return _this;
    }
    RendererLayerVisualElementView$1.prototype.arrange = function (finalSize) {
        arguments[0] = sizeFromLiteral(arguments[0]);
        return this._arrange$i.apply(this, arguments);
    };
    RendererLayerVisualElementView$1.prototype._arrange$i = function (a) {
    };
    RendererLayerVisualElementView$1.prototype.createRenderer = function () {
        return this;
    };
    RendererLayerVisualElementView$1.prototype.invalidateArrange = function () {
        this.c.t = true;
    };
    RendererLayerVisualElementView$1.prototype.invalidateLayout = function () {
        this.c.l = true;
    };
    RendererLayerVisualElementView$1.prototype.invalidateMeasure = function () {
        this.c.t = true;
    };
    RendererLayerVisualElementView$1.prototype.invalidateRender = function () {
        this.c.ck();
    };
    RendererLayerVisualElementView$1.prototype.measure = function (availableSize) {
        arguments[0] = sizeFromLiteral(arguments[0]);
        return this._measure$i.apply(this, arguments);
    };
    RendererLayerVisualElementView$1.prototype._measure$i = function (a) {
    };
    RendererLayerVisualElementView$1.prototype.onUnloaded = function () {
    };
    RendererLayerVisualElementView$1.prototype.releaseRenderer = function (a) {
    };
    RendererLayerVisualElementView$1.$t = markType(RendererLayerVisualElementView$1, 'RendererLayerVisualElementView$1', ElementLayerViewSingle.$, [IRendererElementLayerView$2_$type.specialize(0, ISpreadsheetGraphics_$type), ILayerRenderer_$type]);
    return RendererLayerVisualElementView$1;
}(ElementLayerViewSingle));
export { RendererLayerVisualElementView$1 };
//# sourceMappingURL=RendererLayerVisualElementView$1.js.map
