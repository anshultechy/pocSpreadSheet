import { TextMetricsProviderBase, Workbook, WorksheetCellFormatData } from "../../igniteui-angular-excel/ES2015/excel.core";
import { Size } from "../../igniteui-angular-core/ES2015/Size";
import { Nullable$1, Type } from "../../igniteui-angular-core/ES2015/type";
/**
 * @hidden
 */
export declare class SpreadsheetRenderCache_MeasureTextMetricsProvider extends TextMetricsProviderBase {
    static $t: Type;
    readonly _h: TextMetricsProviderBase;
    constructor(a: TextMetricsProviderBase, b: Workbook);
    _d(a: WorksheetCellFormatData): number;
    _g(a: WorksheetCellFormatData, b: string, c?: Nullable$1<Size>, d?: boolean, e?: boolean): Size;
    _e(a: WorksheetCellFormatData): number;
    protected get__b(): boolean;
    toString(): string;
    dispose(): void;
}
