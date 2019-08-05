import { ElementLayer$1 } from "./ElementLayer$1";
import { ILayerRenderer } from "./ILayerRenderer";
import { RenderLayerType } from "./RenderLayerType";
import { IRendererElementLayerView$2 } from "./IRendererElementLayerView$2";
import { ElementLayerInfo } from "./ElementLayerInfo";
import { Rect } from "../../igniteui-angular-core/ES5/Rect";
import { Size } from "../../igniteui-angular-core/ES5/Size";
import { PixelConverter } from "./PixelConverter";
import { Point, Type } from "../../igniteui-angular-core/ES5/type";
/**
 * @hidden
 */
export declare abstract class RendererElementLayer$2<TViewModel, TGraphics> extends ElementLayer$1<TViewModel> {
    static $t: Type;
    protected $tViewModel: Type;
    protected $tGraphics: Type;
    private _k;
    constructor($tViewModel: Type, $tGraphics: Type, a: TViewModel, b: IRendererElementLayerView$2<TViewModel, TGraphics>, c: ElementLayerInfo);
    _g(a: Size): Rect;
    dispose(): void;
    _h(a: Size): Size;
    protected readonly _l: ILayerRenderer;
    abstract readonly _m: RenderLayerType;
    _r(a: Rect): Rect;
    protected _p(): void;
    abstract _q(a: TGraphics, b: PixelConverter, c: Rect, d: Point): void;
    protected _o(): void;
    protected _n(): void;
}
