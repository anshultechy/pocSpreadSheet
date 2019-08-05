import { Base, Type } from "../../igniteui-angular-core/ES5/type";
import { IPlatformScrollBarAdapter } from "./IPlatformScrollBarAdapter";
import { JsScrollBar } from "./JsScrollBar";
/**
 * @hidden
 */
export declare class JsScrollBarAdapter extends Base implements IPlatformScrollBarAdapter {
    static $t: Type;
    readonly a: JsScrollBar;
    private c;
    constructor(a: JsScrollBar);
    private readonly b;
    d(): void;
    getValue(): number;
    initialize(a: number, b: number, c: number, d: number, e: number, f: number): void;
    setMinimum(a: number): void;
    setMaximum(a: number): void;
    setViewportSize(a: number): void;
    setValue(a: number): void;
    setLargeChange(a: number): void;
    setSmallChange(a: number): void;
    setIsEnabled(a: boolean): void;
    setIsVisible(a: boolean): void;
    setOnValueChangeCallback(a: (arg1: number) => void): void;
    private e;
}
