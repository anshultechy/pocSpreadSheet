import { Base, Type } from "../../igniteui-angular-core/ES2015/type";
import { IElementLayerView } from "./IElementLayerView";
import { ElementLayer } from "./ElementLayer";
/**
 * @hidden
 */
export declare abstract class ElementLayerView extends Base implements IElementLayerView {
    static $t: Type;
    constructor();
    abstract attach(a: ElementLayer): void;
    abstract detach(a: ElementLayer): void;
    abstract invalidateMeasure(): void;
    abstract invalidateArrange(): void;
}
