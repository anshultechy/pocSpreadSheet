import { EventEmitter } from '@angular/core';
export interface IValueChangedEventArgs {
    oldValue: any;
    newValue: any;
}
/**
 *@hidden
 */
export declare abstract class ItemPropertyValueChanged {
    private _object;
    private _propName;
    object: any;
    value: any;
    valueChanged: EventEmitter<IValueChangedEventArgs>;
    constructor(propName: string);
    protected onValueChanged(value: any): void;
}
/** @hidden */
export declare class ColumnChooserItemBase extends ItemPropertyValueChanged {
    prop: string;
    column: any;
    indentation: number;
    container: any;
    constructor(prop: string);
    readonly name: any;
    readonly level: any;
    readonly calcIndent: number;
}
