import { VisualElement } from "./VisualElement";
import { InputProxy } from "./InputProxy";
import { EventArgs, Type } from "../../igniteui-angular-core/ES5/type";
/**
 * @hidden
 */
export declare class ButtonVisualElement extends VisualElement {
    static $t: Type;
    constructor(a: VisualElement, b: string);
    protected get_x(): boolean;
    b2(): void;
    b4(): void;
    ad(a: InputProxy): boolean;
    ah(a: InputProxy): boolean;
    protected ch(): void;
    click: (sender: any, e: EventArgs) => void;
}
