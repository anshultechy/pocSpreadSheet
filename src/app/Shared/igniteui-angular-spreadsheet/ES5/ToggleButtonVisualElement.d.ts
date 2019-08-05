import { ButtonVisualElement } from "./ButtonVisualElement";
import { VisualElement } from "./VisualElement";
import { EventArgs, Type } from "../../igniteui-angular-core/ES5/type";
/**
 * @hidden
 */
export declare class ToggleButtonVisualElement extends ButtonVisualElement {
    static $t: Type;
    private cj;
    private ci;
    constructor(a: VisualElement, b: string);
    protected ch(): void;
    ck: boolean;
    cl: boolean;
    isCheckedChanged: (sender: any, e: EventArgs) => void;
}
