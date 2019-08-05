import { Base, Nullable$1, Type } from "../../igniteui-angular-core/ES5/type";
import { IPlatformScrollBarAdapter } from "./IPlatformScrollBarAdapter";
import { ScrollInfo } from "./ScrollInfo";
import { ScrollInfoAmount } from "./ScrollInfoAmount";
/**
 * @hidden
 */
export declare abstract class ExtendedScrollArrowHelperBase extends Base {
    static $t: Type;
    private a;
    protected readonly e: (arg1: ScrollInfoAmount, arg2: number) => void;
    private c;
    private f;
    constructor(a: (arg1: ScrollInfoAmount, arg2: number) => void);
    readonly g: boolean;
    b: IPlatformScrollBarAdapter;
    d: ScrollInfo;
    protected abstract h(a: IPlatformScrollBarAdapter, b: IPlatformScrollBarAdapter): void;
    protected i(): void;
    protected j(a?: Nullable$1<number>): void;
}
