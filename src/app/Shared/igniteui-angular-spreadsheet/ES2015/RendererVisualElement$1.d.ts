import { LayerVisualElement } from "./LayerVisualElement";
import { Rect } from "../../igniteui-angular-core/ES2015/Rect";
import { VisualElement } from "./VisualElement";
import { PixelConverter } from "./PixelConverter";
import { Point, Type } from "../../igniteui-angular-core/ES2015/type";
/**
 * @hidden
 */
export declare abstract class RendererVisualElement$1<TGraphics> extends LayerVisualElement {
    static $t: Type;
    protected $tGraphics: Type;
    private cn;
    ci: any;
    constructor($tGraphics: Type, a: VisualElement, b: string);
    b5(): void;
    protected an(a: number, b: number, c: number, d: number): boolean;
    readonly ch: boolean;
    readonly co: Rect;
    ck(): void;
    cl(a: TGraphics, b: PixelConverter, c: Point): void;
    protected abstract cm(a: TGraphics, b: PixelConverter, c: Rect, d: Point): void;
}
