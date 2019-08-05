import { Base, IDisposable, Type } from "../../igniteui-angular-core/ES5/type";
import { ElementLayerInfo } from "./ElementLayerInfo";
import { Rect } from "../../igniteui-angular-core/ES5/Rect";
import { Size } from "../../igniteui-angular-core/ES5/Size";
/**
 * @hidden
 */
export declare abstract class ElementLayer extends Base implements IDisposable {
    static $t: Type;
    private readonly _a;
    private readonly _c;
    constructor(a: ElementLayerInfo, b: IElementLayerView);
    readonly _b: ElementLayerInfo;
    readonly _d: IElementLayerView;
    abstract _g(a: Size): Rect;
    _e(): void;
    _f(): void;
    abstract _h(a: Size): Size;
    dispose(): void;
}
/**
 * @hidden
 */
export interface IElementLayerView {
    invalidateArrange(): void;
    invalidateMeasure(): void;
    attach(a: ElementLayer): void;
    detach(a: ElementLayer): void;
}
/**
 * @hidden
 */
export declare let IElementLayerView_$type: Type;
