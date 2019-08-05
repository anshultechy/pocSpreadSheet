import { ScrollBarInfoMediator } from "./ScrollBarInfoMediator";
import { ExtendedRangeScrollInfo } from "./ExtendedRangeScrollInfo";
import { Type } from "../../igniteui-angular-core/ES2015/type";
import { IPlatformScrollBarAdapter } from "./IPlatformScrollBarAdapter";
/**
 * @hidden
 */
export declare class ExtendedScrollBarInfoMediator extends ScrollBarInfoMediator {
    static $t: Type;
    private r;
    constructor(a: ExtendedRangeScrollInfo);
    k(): void;
    protected m(a: IPlatformScrollBarAdapter, b: IPlatformScrollBarAdapter): void;
}
