import { Type } from "./type";
/**
 * @hidden
 */
export interface IScrollerKeyboardListener {
    onUpArrow(a: boolean, b: boolean): boolean;
    onLeftArrow(a: boolean, b: boolean): boolean;
    onRightArrow(a: boolean, b: boolean): boolean;
    onDownArrow(a: boolean, b: boolean): boolean;
    onPageDown(a: boolean, b: boolean): boolean;
    onPageUp(a: boolean, b: boolean): boolean;
    onHome(a: boolean, b: boolean): boolean;
    onEnd(a: boolean, b: boolean): boolean;
    onTab(a: boolean, b: boolean): boolean;
    onWheel(): void;
}
/**
 * @hidden
 */
export declare let IScrollerKeyboardListener_$type: Type;
