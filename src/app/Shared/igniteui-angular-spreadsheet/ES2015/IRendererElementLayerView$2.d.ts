import { IElementLayerView } from "./IElementLayerView";
import { ILayerRenderer } from "./ILayerRenderer";
import { Type } from "../../igniteui-angular-core/ES2015/type";
/**
 * @hidden
 */
export interface IRendererElementLayerView$2<TViewModel, TGraphics> extends IElementLayerView {
    createRenderer(): ILayerRenderer;
    releaseRenderer(a: ILayerRenderer): void;
}
/**
 * @hidden
 */
export declare let IRendererElementLayerView$2_$type: Type;
