import { VisualElement } from "./VisualElement";
import { InputProxy } from "./InputProxy";
import { Type } from "../../igniteui-angular-core/ES2015/type";
/**
 * @hidden
 */
export declare abstract class AdjustableVisualElement extends VisualElement {
    static $t: Type;
    private cf;
    private cn;
    private co;
    constructor(a: VisualElement, b: string);
    protected get_x(): boolean;
    b4(): void;
    ad(a: InputProxy): boolean;
    ag(a: InputProxy): boolean;
    ah(a: InputProxy): boolean;
    protected readonly ch: boolean;
    protected ci(a: boolean): void;
    protected cg(): boolean;
    protected cm(): void;
    protected cj(): void;
    protected abstract ck(a: number, b: number): void;
    protected abstract cl(a: number, b: number): void;
}
