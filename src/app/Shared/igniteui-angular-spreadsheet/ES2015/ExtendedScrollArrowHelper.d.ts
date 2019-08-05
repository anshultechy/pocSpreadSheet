import { ExtendedScrollArrowHelperBase } from "./ExtendedScrollArrowHelperBase";
import { Type } from "../../igniteui-angular-core/ES2015/type";
import { ScrollInfoAmount } from "./ScrollInfoAmount";
import { IPlatformScrollBarAdapter } from "./IPlatformScrollBarAdapter";
/**
 * @hidden
 */
export declare class ExtendedScrollArrowHelper extends ExtendedScrollArrowHelperBase {
    static $t: Type;
    constructor(a: (arg1: ScrollInfoAmount, arg2: number) => void);
    private k;
    protected h(a: IPlatformScrollBarAdapter, b: IPlatformScrollBarAdapter): void;
}
