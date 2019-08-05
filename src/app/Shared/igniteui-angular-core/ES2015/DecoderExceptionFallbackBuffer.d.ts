import { DecoderFallbackBuffer } from "./DecoderFallbackBuffer";
import { Type } from "./type";
/**
 * @hidden
 */
export declare class DecoderExceptionFallbackBuffer extends DecoderFallbackBuffer {
    static $t: Type;
    constructor();
    protected get_d(): number;
    readonly d: number;
    a(a: number[], b: number): boolean;
    c(): string;
    b(): boolean;
}
