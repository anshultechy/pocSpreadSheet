import { Base, Type } from "../../igniteui-angular-core/ES2015/type";
import { ScrollBarVisualElement } from "./ScrollBarVisualElement";
import { VisualElement } from "./VisualElement";
import { ScrollInfoOrientation } from "./ScrollInfoOrientation";
/**
 * @hidden
 */
export declare class JsScrollBar extends Base {
    static $t: Type;
    readonly a: ScrollBarVisualElement;
    constructor(a: ScrollInfoOrientation, b: VisualElement);
    b: boolean;
    c(): void;
}
