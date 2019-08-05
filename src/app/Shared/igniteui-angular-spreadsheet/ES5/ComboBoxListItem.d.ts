import { Base, Type } from "../../igniteui-angular-core/ES5/type";
/**
 * An object that contains a DataValue and DisplayText for lists (such as ComboBoxes) in the UI.
 */
export declare class ComboBoxListItem extends Base {
    static $t: Type;
    private _a;
    private _e;
    private _c;
    constructor(dataValue: any, displayText: string);
    /**
     * The data value of the item.
     */
    /**
    * The data value of the item.
    */
    dataValue: any;
    /**
     * The text to display for the item.
     */
    /**
    * The text to display for the item.
    */
    displayText: string;
    /**
     * an object that stores extra data related to the item.
     */
    /**
    * an object that stores extra data related to the item.
    */
    tag: any;
    /**
     * Returns a string that represents the current object.
     * @return A string that represents the current object.
     */
    toString(): string;
}
