import { Base, Type } from "./type";
import { IExecutionContext } from "./IExecutionContext";
import { DomRenderer } from "./dom";
/**
 * @hidden
 */
export declare class DOMExecutionContext extends Base implements IExecutionContext {
    static $t: Type;
    constructor(a: DomRenderer);
    private c;
    private b;
    private _requestAnimationFrame;
    private requestAnimationFrame;
    execute(a: () => void): void;
    enqueueAction(a: () => void): void;
    enqueueAnimationAction(a: () => void): void;
    executeDelayed(a: () => void, b: number): void;
    getCurrentRelativeTime(): number;
}
