import { Base, Type } from "../../igniteui-angular-core/ES5/type";
/**
 * Base class for an object that represents the visual data for the spreadsheet.
 */
export declare abstract class SpreadsheetVisualDataBase extends Base {
    static $t: Type;
    /**
     * Returns a string representation of the associated object
     */
    abstract serialize(): string;
}
