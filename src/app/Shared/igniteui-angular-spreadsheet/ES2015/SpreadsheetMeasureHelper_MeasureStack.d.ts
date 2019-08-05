import { Base, Type } from "../../igniteui-angular-core/ES2015/type";
import { DomRenderer, DomWrapper } from "../../igniteui-angular-core/ES2015/dom";
import { Stack$1 } from "../../igniteui-angular-core/ES2015/Stack$1";
/**
 * @hidden
 */
export declare class SpreadsheetMeasureHelper_MeasureStack extends Base {
    static $t: Type;
    a: Stack$1<DomRenderer>;
    constructor(a: DomRenderer);
    readonly b: DomRenderer;
    e(a: string, b?: string): DomRenderer;
    f(): void;
    d(a: DomWrapper): DomRenderer;
    c(): DomRenderer;
}
