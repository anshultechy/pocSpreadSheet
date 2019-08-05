import { Base, Type, IEnumerable$1 } from "../../igniteui-angular-core/ES2015/type";
import { ComboBoxListItem } from "./ComboBoxListItem";
/**
 * @hidden
 */
export declare class SpreadsheetDialogUtilities extends Base {
    static $t: Type;
    static c(a: string, b: string, c: string, d: HTMLInputElement): {
        ret: HTMLElement;
        p3: HTMLInputElement;
    };
    static d(a: string, b: string, c: string, d: string, e: HTMLInputElement): {
        ret: HTMLElement;
        p4: HTMLInputElement;
    };
    static l(a: HTMLElement): void;
    static a(): HTMLButtonElement;
    static b(a: string): HTMLButtonElement;
    static k(a: string, b: string, c: string, d?: string): string;
    static j(a: number, b: number, c: number, d: number, e?: string): string;
    static e(a: HTMLElement, b: string): HTMLElement;
    static f(): number;
    static g(): number;
    static h(a: HTMLSelectElement): any;
    static i(a: HTMLSelectElement, b: Type): any;
    static m(a: HTMLElement, b: HTMLElement, c: number): void;
    static n(a: HTMLSelectElement, b: IEnumerable$1<ComboBoxListItem>): void;
    static o(a: HTMLSelectElement, b: IEnumerable$1<ComboBoxListItem>, c: (arg1: ComboBoxListItem) => HTMLCanvasElement): void;
}
