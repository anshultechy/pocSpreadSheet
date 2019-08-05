import { Base, Type } from "../../igniteui-angular-core/ES2015/type";
import { IVisualElementVisitor } from "./IVisualElementVisitor";
import { VisualElement } from "./VisualElement";
import { DomRenderer } from "../../igniteui-angular-core/ES2015/dom";
import { ToolTipVisualElement } from "./ToolTipVisualElement";
import { ComboBoxVisualElement } from "./ComboBoxVisualElement";
import { LineVisualElement } from "./LineVisualElement";
import { TextBoxVisualElement } from "./TextBoxVisualElement";
import { ToggleButtonVisualElement } from "./ToggleButtonVisualElement";
/**
 * @hidden
 */
export declare class VisualElementDomBuilder extends Base implements IVisualElementVisitor {
    static $t: Type;
    static readonly c: boolean;
    static readonly a: boolean;
    static readonly b: boolean;
    static readonly l: string;
    protected get_n(): string;
    protected readonly n: string;
    protected get_m(): string;
    protected readonly m: string;
    protected get_o(): string;
    protected readonly o: string;
    static p(a: VisualElement, b?: string): void;
    static q(a: VisualElement, b: string, c: string, d: boolean, e: boolean): void;
    static d(a: DomRenderer, b: string, c: string, d: boolean, e: boolean): DomRenderer;
    protected r(a: VisualElement): void;
    protected g(a: VisualElement): string;
    protected h(a: VisualElement): string;
    protected s(a: ComboBoxVisualElement): void;
    protected t(a: LineVisualElement): void;
    protected u(a: TextBoxVisualElement): void;
    protected v(a: ToggleButtonVisualElement): void;
    protected w(a: ToolTipVisualElement): void;
    protected x(a: VisualElement): void;
    private y;
    protected z(a: VisualElement): void;
    visitElement(a: VisualElement): boolean;
    protected static aa(a: VisualElement, b: string, c: string): void;
}
