import { Base, Type } from "../../igniteui-angular-core/ES5/type";
import { ReadOnlyCollection$1 } from "../../igniteui-angular-core/ES5/ReadOnlyCollection$1";
import { ScrollBarInfoMediator } from "./ScrollBarInfoMediator";
/**
 * @hidden
 */
export declare class ScrollBarVisibilityCoordinator extends Base {
    static $t: Type;
    private a;
    private c;
    private d;
    constructor();
    readonly e: ReadOnlyCollection$1<ScrollBarInfoMediator>;
    f(a: ScrollBarInfoMediator): void;
    b(a: ScrollBarInfoMediator): boolean;
    h(a: ScrollBarInfoMediator): void;
    j(): void;
    private i;
    private g;
}
