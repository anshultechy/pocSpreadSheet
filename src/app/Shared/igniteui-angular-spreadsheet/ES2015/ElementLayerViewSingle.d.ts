import { ElementLayerView } from "./ElementLayerView";
import { ElementLayer } from "./ElementLayer";
import { Type } from "../../igniteui-angular-core/ES2015/type";
/**
 * @hidden
 */
export declare abstract class ElementLayerViewSingle extends ElementLayerView {
    static $t: Type;
    private a;
    constructor();
    attach(a: ElementLayer): void;
    detach(a: ElementLayer): void;
    readonly b: ElementLayer;
}
