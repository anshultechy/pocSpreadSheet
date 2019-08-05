import { VisualElement } from "./VisualElement";
import { EventArgs, Type } from "../../igniteui-angular-core/ES2015/type";
/**
 * @hidden
 */
export declare class TextBoxVisualElement extends VisualElement {
    static $t: Type;
    private cg;
    private cm;
    private cf;
    private ck;
    constructor(a: VisualElement, b: string);
    ch: boolean;
    cl: number;
    co: string;
    ci: boolean;
    cp(): void;
    textChanged: (sender: any, e: EventArgs) => void;
}
