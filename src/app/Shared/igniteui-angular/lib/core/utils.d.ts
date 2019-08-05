/**
 *@hidden
 */
export declare function cloneArray(array: any[], deep?: boolean): any[];
/**
 * Doesn't clone leaf items
 * @hidden
 */
export declare function cloneHierarchicalArray(array: any[], childDataKey: any): any[];
/**
 * Deep clones all first level keys of Obj2 and merges them to Obj1
 * @param obj1 Object to merge into
 * @param obj2 Object to merge from
 * @returns Obj1 with merged cloned keys from Obj2
 * @hidden
 */
export declare function mergeObjects(obj1: {}, obj2: {}): any;
/**
 * Creates deep clone of provided value.
 * Supports primitive values, dates and objects.
 * If passed value is array returns shallow copy of the array.
 * @param value value to clone
 * @returns Deep copy of provided value
 *@hidden
 */
export declare function cloneValue(value: any): any;
/**
 * Checks if provided variable is Object
 * @param value Value to check
 * @returns true if provided variable is Object
 *@hidden
 */
export declare function isObject(value: any): boolean;
/**
 * Checks if provided variable is Date
 * @param value Value to check
 * @returns true if provided variable is Date
 *@hidden
 */
export declare function isDate(value: any): boolean;
/**
 * Checks if the two passed arguments are equal
 * Currently supports date objects
 * @param obj1
 * @param obj2
 * @returns: `boolean`
 * @hidden
 */
export declare function isEqual(obj1: any, obj2: any): boolean;
/**
 *@hidden
 */
export declare const enum KEYCODES {
    ENTER = 13,
    SPACE = 32,
    ESCAPE = 27,
    LEFT_ARROW = 37,
    UP_ARROW = 38,
    RIGHT_ARROW = 39,
    DOWN_ARROW = 40,
    F2 = 113,
    TAB = 9
}
/**
 *@hidden
 */
export declare const enum KEYS {
    ENTER = "Enter",
    SPACE = " ",
    SPACE_IE = "Spacebar",
    ESCAPE = "Escape",
    ESCAPE_IE = "Esc",
    LEFT_ARROW = "ArrowLeft",
    LEFT_ARROW_IE = "Left",
    UP_ARROW = "ArrowUp",
    UP_ARROW_IE = "Up",
    RIGHT_ARROW = "ArrowRight",
    RIGHT_ARROW_IE = "Right",
    DOWN_ARROW = "ArrowDown",
    DOWN_ARROW_IE = "Down",
    F2 = "F2",
    TAB = "Tab"
}
/**
 *@hidden
* Returns the actual size of the node content, using Range
* ```typescript
* let range = document.createRange();
* let column = this.grid.columnList.filter(c => c.field === 'ID')[0];
*
* let size = getNodeSizeViaRange(range, column.cells[0].nativeElement);
* ```
 */
export declare function getNodeSizeViaRange(range: Range, node: any): number;
/**
 *@hidden
* Returns the actual size of the node content, using Canvas
* ```typescript
* let ctx = document.createElement('canvas').getContext('2d');
* let column = this.grid.columnList.filter(c => c.field === 'ID')[0];
*
* let size = valToPxlsUsingCanvas(ctx, column.cells[0].nativeElement);
* ```
 */
export declare function getNodeSizeViaCanvas(canvas2dCtx: any, node: any): number;
/**
 *@hidden
 */
export declare function isIE(): boolean;
/**
 *@hidden
 */
export declare function isEdge(): boolean;
/**
 *@hidden
 */
export declare function isFirefox(): boolean;
/**
 * @hidden
 */
export declare function isLeftClick(event: PointerEvent): boolean;
/** @hidden */
export declare function isNavigationKey(key: string): boolean;
/**
 *@hidden
 */
export declare function flatten(arr: any[]): any[];
export interface CancelableEventArgs {
    /**
     * Provides the ability to cancel the event.
     */
    cancel: boolean;
}
export interface CancelableBrowserEventArgs extends CancelableEventArgs {
    /** Browser event */
    event?: Event;
}
export declare const NAVIGATION_KEYS: Set<string>;
export declare const ROW_EXPAND_KEYS: Set<string>;
export declare const ROW_COLLAPSE_KEYS: Set<string>;
export declare const SUPPORTED_KEYS: Set<string>;