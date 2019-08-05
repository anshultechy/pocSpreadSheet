import { RendererVisualElement$1 } from "./RendererVisualElement$1";
import { VisualElement } from "./VisualElement";
import { RendererElementLayer$2 } from "./RendererElementLayer$2";
import { Size } from "../../igniteui-angular-core/ES2015/Size";
import { IEnumerable$1, Point, Type } from "../../igniteui-angular-core/ES2015/type";
import { PixelConverter } from "./PixelConverter";
import { Rect } from "../../igniteui-angular-core/ES2015/Rect";
/**
 * @hidden
 */
export declare class RendererLayerVisualElement$2<TViewModel, TGraphics> extends RendererVisualElement$1<TGraphics> {
    static $t: Type;
    protected $tViewModel: Type;
    protected $tGraphics: Type;
    private readonly cq;
    constructor($tViewModel: Type, $tGraphics: Type, a: VisualElement, b: string);
    protected cf(a: Size): void;
    bz(): void;
    cg(a: Size): void;
    cr(a: RendererElementLayer$2<TViewModel, TGraphics>): void;
    cp(): IEnumerable$1<RendererElementLayer$2<TViewModel, TGraphics>>;
    protected cm(a: TGraphics, b: PixelConverter, c: Rect, d: Point): void;
    cs(a: RendererElementLayer$2<TViewModel, TGraphics>): void;
}
