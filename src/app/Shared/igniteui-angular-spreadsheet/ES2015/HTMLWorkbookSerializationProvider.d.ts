import { WorkbookSerializationProviderBase } from "./WorkbookSerializationProviderBase";
import { WorkbookDataObjectLoadContext } from "./WorkbookDataObjectLoadContext";
import { WorkbookDataObjectSaveContext } from "./WorkbookDataObjectSaveContext";
import { Type } from "../../igniteui-angular-core/ES2015/type";
/**
 * @hidden
 */
export declare class HTMLWorkbookSerializationProvider extends WorkbookSerializationProviderBase {
    static $t: Type;
    constructor();
    c(a: WorkbookDataObjectLoadContext): boolean;
    d(a: WorkbookDataObjectSaveContext): boolean;
}
