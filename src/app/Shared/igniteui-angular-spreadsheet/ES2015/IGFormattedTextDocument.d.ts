import { IGFormattedTextElement } from "./IGFormattedTextElement";
import { List$1 } from "../../igniteui-angular-core/ES2015/List$1";
import { IGFormattedTextParagraph } from "./IGFormattedTextParagraph";
import { StringBuilder } from "../../igniteui-angular-core/ES2015/StringBuilder";
import { IGFormattedTextSettings } from "./IGFormattedTextSettings";
import { Type } from "../../igniteui-angular-core/ES2015/type";
import { IGFormattedTextRun } from "./IGFormattedTextRun";
/**
 * @hidden
 */
export declare class IGFormattedTextDocument extends IGFormattedTextElement {
    static $t: Type;
    readonly h: List$1<IGFormattedTextParagraph>;
    readonly i: StringBuilder;
    constructor();
    c(): boolean;
    g(): IGFormattedTextSettings;
    private n;
    l(a: (arg1: IGFormattedTextSettings) => void): void;
    private static m;
    j(a: number, b: number, c: (arg1: IGFormattedTextRun) => void): void;
    private static k;
    o(): void;
    p(): void;
    private static q;
    r(a: number, b: number): void;
}
