import { SelectedItemsChangedEventArgsDescription } from "./SelectedItemsChangedEventArgsDescription";
import { Type } from "./type";
/**
 * @hidden
 */
export declare class SelectedItemsChangingEventArgsDescription extends SelectedItemsChangedEventArgsDescription {
    static $t: Type;
    protected get_type(): string;
    constructor();
    private k;
    cancel: boolean;
}