import { Base, Type } from "../../igniteui-angular-core/ES2015/type";
import { SpreadsheetHeaderState } from "./SpreadsheetHeaderState";
/**
 * @hidden
 */
export declare abstract class SpreadsheetHeaderContentLayerBase_HeaderInfo$1<TVisual> extends Base {
    static $t: Type;
    protected $tVisual: Type;
    constructor($tVisual: Type);
    e: number;
    d: number;
    c: boolean;
    b: SpreadsheetHeaderState;
    a: TVisual;
    abstract g(): void;
    abstract f(a: number, b: number, c: number, d: number): void;
    abstract h(a: number, b: number): void;
}
