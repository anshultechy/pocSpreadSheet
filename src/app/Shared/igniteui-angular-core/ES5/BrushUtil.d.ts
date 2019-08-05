import { Base, Type } from "./type";
import { Brush } from "./Brush";
import { InterpolationMode } from "./InterpolationMode";
import { DomWrapper, DomRenderer } from "./dom";
import { BrushCollection } from "./BrushCollection";
/**
 * @hidden
 */
export declare class BrushUtil extends Base {
    static $t: Type;
    static h(a: Brush, b: number): Brush;
    static g(a: Brush, b: number, c: Brush, d: InterpolationMode): Brush;
    private static k;
    private static j;
    private static i;
    private static c;
    private static b;
    static a(a: string, b: DomWrapper): Brush[];
    static d(palleteName_: string, container_: DomRenderer, a: BrushCollection, b: BrushCollection, c?: string[]): {
        p2: BrushCollection;
        p3: BrushCollection;
    };
    static e(a: string, b: string, c: string, container_: DomRenderer, d: BrushCollection, e: BrushCollection, f?: string[]): {
        p4: BrushCollection;
        p5: BrushCollection;
    };
    static f(a: string, b: string, c: string, container_: DomRenderer, d: string): Brush;
}
