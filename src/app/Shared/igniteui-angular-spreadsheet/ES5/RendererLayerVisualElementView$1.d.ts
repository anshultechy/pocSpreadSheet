import { ElementLayerViewSingle } from "./ElementLayerViewSingle";
import { IRendererElementLayerView$2 } from "./IRendererElementLayerView$2";
import { ISpreadsheetGraphics } from "./ISpreadsheetGraphics";
import { ILayerRenderer } from "./ILayerRenderer";
import { RendererVisualElement$1 } from "./RendererVisualElement$1";
import { Size } from "../../igniteui-angular-core/ES5/Size";
import { Type } from "../../igniteui-angular-core/ES5/type";
import { IgSize } from "../../igniteui-angular-core/ES5/IgSize";
/**
 * @hidden
 */
export declare class RendererLayerVisualElementView$1<TViewModel> extends ElementLayerViewSingle implements IRendererElementLayerView$2<TViewModel, ISpreadsheetGraphics>, ILayerRenderer {
    static $t: Type;
    protected $tViewModel: Type;
    private c;
    constructor($tViewModel: Type, a: RendererVisualElement$1<ISpreadsheetGraphics>);
    arrange(finalSize: IgSize): void;
    _arrange$i(a: Size): void;
    createRenderer(): ILayerRenderer;
    invalidateArrange(): void;
    invalidateLayout(): void;
    invalidateMeasure(): void;
    invalidateRender(): void;
    measure(availableSize: IgSize): void;
    _measure$i(a: Size): void;
    onUnloaded(): void;
    releaseRenderer(a: ILayerRenderer): void;
}
