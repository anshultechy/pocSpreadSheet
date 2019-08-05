import { VisualElement } from "./VisualElement";
import { ScrollInfoOrientation } from "./ScrollInfoOrientation";
import { ScrollInfo } from "./ScrollInfo";
import { Type } from "../../igniteui-angular-core/ES2015/type";
import { RepeatButtonVisualElement } from "./RepeatButtonVisualElement";
import { InputProxy } from "./InputProxy";
import { JsScrollEventArgs } from "./JsScrollEventArgs";
/**
 * @hidden
 */
export declare class ScrollBarVisualElement extends VisualElement {
    static $t: Type;
    readonly ck: ScrollInfo;
    readonly cl: ScrollInfoOrientation;
    readonly cn: boolean;
    readonly cg: RepeatButtonVisualElement;
    readonly cf: RepeatButtonVisualElement;
    readonly ci: RepeatButtonVisualElement;
    readonly ch: RepeatButtonVisualElement;
    readonly cj: VisualElement;
    private cm;
    private cs;
    private cr;
    private cu;
    private ct;
    constructor(a: ScrollInfoOrientation, b: VisualElement, c: string);
    bz(): void;
    protected b3(): void;
    protected b7(a: number, b: number, c: number, d: number): void;
    private cv;
    private c3;
    co(a: InputProxy): boolean;
    cp(a: InputProxy): boolean;
    cq(a: InputProxy): boolean;
    private c4;
    private c5;
    private c6;
    scroll: (sender: any, e: JsScrollEventArgs) => void;
}
/**
 * @hidden
 */
export declare class ScrollBarVisualElement_ScrollThumbVisualElement extends VisualElement {
    static $t: Type;
    constructor(a: ScrollBarVisualElement, b: string);
    private readonly cf;
    protected get_x(): boolean;
    ad(a: InputProxy): boolean;
    ag(a: InputProxy): boolean;
    ah(a: InputProxy): boolean;
}
