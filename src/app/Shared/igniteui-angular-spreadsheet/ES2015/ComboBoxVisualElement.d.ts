import { VisualElement } from "./VisualElement";
import { IList$1, EventArgs, Type } from "../../igniteui-angular-core/ES2015/type";
/**
 * @hidden
 */
export declare class ComboBoxVisualElement extends VisualElement {
    static $t: Type;
    private cj;
    private cf;
    private cm;
    private cg;
    constructor(a: VisualElement, b: string);
    bz(): void;
    ck: IList$1<string>;
    ch: boolean;
    co: string;
    ci: boolean;
    private cp;
    cq(): void;
    valueChanged: (sender: any, e: EventArgs) => void;
}
