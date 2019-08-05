import { ISupportPropertyChangeNotifications } from "./ISupportPropertyChangeNotifications";
import { Type } from "../../igniteui-angular-core/ES2015/type";
import { SpreadsheetResourceId } from "./SpreadsheetResourceId";
/**
 * @hidden
 */
export interface ISpreadsheetResourceProvider extends ISupportPropertyChangeNotifications {
    item(a: SpreadsheetResourceId): any;
    readonly resourceVersion: number;
}
/**
 * @hidden
 */
export declare let ISpreadsheetResourceProvider_$type: Type;
