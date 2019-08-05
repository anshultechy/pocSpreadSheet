import { Base, Type } from "../../igniteui-angular-core/ES2015/type";
import { WBitmap } from "../../igniteui-angular-excel/ES2015/excel.core";
import { ImageFormat } from "../../igniteui-angular-excel/ES2015/documents.core";
/**
 * @hidden
 */
export declare class SpreadsheetImageBackground extends Base {
    static $t: Type;
    private readonly d;
    private readonly a;
    constructor(a: WBitmap, b: ImageFormat);
    readonly e: WBitmap;
    readonly c: number;
    readonly b: number;
}
