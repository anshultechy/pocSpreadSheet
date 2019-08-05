import { IElementLayerContainer } from "./IElementLayerContainer";
import { ElementLayer$1 } from "./ElementLayer$1";
import { Type } from "../../igniteui-angular-core/ES5/type";
/**
 * @hidden
 */
export interface IElementLayerContainer$1<TViewModel> extends IElementLayerContainer {
    addChild(a: ElementLayer$1<TViewModel>): void;
    removeChild(a: ElementLayer$1<TViewModel>): void;
}
/**
 * @hidden
 */
export declare let IElementLayerContainer$1_$type: Type;
