import { Type } from "../../igniteui-angular-core/ES5/type";
/**
 * @hidden
 */
export interface IPlatformScrollBarAdapter {
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
}
/**
 * @hidden
 */
export declare let IPlatformScrollBarAdapter_$type: Type;
