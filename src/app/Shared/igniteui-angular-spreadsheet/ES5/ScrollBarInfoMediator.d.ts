import { Base, Type } from "../../igniteui-angular-core/ES5/type";
import { IPlatformScrollBarAdapter } from "./IPlatformScrollBarAdapter";
import { ScrollInfo } from "./ScrollInfo";
/**
 * @hidden
 */
export declare class ScrollBarInfoMediator extends Base {
    static $t: Type;
    private c;
    private a;
    private i;
    private f;
    private e;
    constructor(a: ScrollInfo);
    readonly j: boolean;
    b: IPlatformScrollBarAdapter;
    g: () => void;
    h: () => void;
    readonly d: ScrollInfo;
    k(): void;
    private l;
    protected m(a: IPlatformScrollBarAdapter, b: IPlatformScrollBarAdapter): void;
    private n;
    private o;
    private p;
    private q;
}
