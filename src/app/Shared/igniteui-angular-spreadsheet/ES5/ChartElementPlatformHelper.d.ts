import { Base, Type } from "../../igniteui-angular-core/ES5/type";
import { Spreadsheet } from "./Spreadsheet";
import { DockingStyle } from "./DockingStyle";
import { HAlign } from "./HAlign";
import { VAlign } from "./VAlign";
import { AnchorStyle } from "./AnchorStyle";
import { ComponentRenderer } from "../../igniteui-angular-core/ES5/ComponentRenderer";
import { Description } from "../../igniteui-angular-core/ES5/Description";
import { RowColLength } from "./RowColLength";
/**
 * @hidden
 */
export declare class ChartElementPlatformHelper extends Base {
    static $t: Type;
    private a;
    private l;
    private b;
    constructor(a: Spreadsheet, b: () => void);
    c(a: any, b: any, c: DockingStyle, d?: boolean, e?: HAlign, f?: VAlign): boolean;
    s(a: any, b: any, c: DockingStyle, d?: boolean, e?: number, f?: number, g?: number, h?: number, i?: HAlign, j?: VAlign, k?: AnchorStyle): void;
    d(a: ComponentRenderer, b: any): boolean;
    t(a: any): void;
    u(a: string): void;
    n(): any;
    e(a: any): boolean;
    o(a: boolean): {
        ret: any;
        p0: boolean;
    };
    p(): any;
    v(a: ComponentRenderer, b: any, c: string, d: (arg1: any, arg2: any) => string): void;
    w(a: ComponentRenderer, b: any, c: string, d: (arg1: number, arg2: boolean) => number): void;
    g(a: ComponentRenderer, b: any, c: string, d: any): boolean;
    h(a: any, b: any): boolean;
    i(a: ComponentRenderer, b: any, c: string): boolean;
    x(a: ComponentRenderer, b: Description, c: any): void;
    j(a: any, b: number, c: number, d: number, e: number): boolean;
    k(a: any, b: RowColLength[], c: RowColLength[]): boolean;
    private m;
    q(a: HTMLElement): string;
    private f;
}
