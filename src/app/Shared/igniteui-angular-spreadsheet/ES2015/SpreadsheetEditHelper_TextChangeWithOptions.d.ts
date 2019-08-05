import { Base, Type } from "../../igniteui-angular-core/ES2015/type";
import { IGFormattedTextSettings } from "./IGFormattedTextSettings";
import { IGFormattedTextDocument } from "./IGFormattedTextDocument";
import { WorksheetRow, FormattedString } from "../../igniteui-angular-excel/ES2015/excel.core";
/**
 * @hidden
 */
export declare class SpreadsheetEditHelper_TextChangeWithOptions extends Base {
    static $t: Type;
    readonly b: IGFormattedTextSettings;
    readonly a: IGFormattedTextDocument;
    readonly c: string;
    constructor(a: string, b: IGFormattedTextSettings, c: IGFormattedTextDocument);
    private d;
    e(a: WorksheetRow, b: number): void;
    f(a: FormattedString): void;
    private g;
}
