import { GradientStop } from "./GradientStop";
import { Base, Type } from "./type";
import { Color } from "./Color";
/**
 * @hidden
 */
export declare class Brush extends Base {
    static $t: Type;
    isGradient: boolean;
    isRadialGradient: boolean;
    isImageFill: boolean;
    _fill: string;
    fill: string;
    private f;
    private k;
    color: Color;
    i(): string;
    equals(a: any): boolean;
    getHashCode(): number;
    static create(val_: any): Brush;
}
/**
 * @hidden
 */
export declare class LinearGradientBrush extends Brush {
    static $t: Type;
    constructor();
    useCustomDirection: boolean;
    startX: number;
    startY: number;
    endX: number;
    endY: number;
    isAbsolute: boolean;
    gradientStops: GradientStop[];
    clone(): LinearGradientBrush;
    equals(a: any): boolean;
    getHashCode(): number;
    i(): string;
}
/**
 * @hidden
 */
export declare class CssGradientUtil extends Base {
    static $t: Type;
    static touch(): void;
    static isGradient(a: string): boolean;
    static brushFromGradientString(a: string): Brush;
    private static f;
    private static c;
    private static d;
    private static e;
    private static a;
}
