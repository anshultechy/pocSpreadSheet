import { VisualElement } from "./VisualElement";
import { Size } from "../../igniteui-angular-core/ES5/Size";
import { Type } from "../../igniteui-angular-core/ES5/type";
/**
 * @hidden
 */
export declare abstract class LayerVisualElement extends VisualElement {
    static $t: Type;
    constructor(a: VisualElement, b: string);
    protected b7(a: number, b: number, c: number, d: number): void;
    protected abstract cf(a: Size): void;
    abstract cg(a: Size): void;
}
