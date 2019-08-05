import { Base, Type } from "../../igniteui-angular-core/ES2015/type";
import { DropDownItem } from "./DropDownItem";
import { DomWrapper, DomRenderer } from "../../igniteui-angular-core/ES2015/dom";
import { List$1 } from "../../igniteui-angular-core/ES2015/List$1";
import { DropDownPosition } from "./DropDownPosition";
import { Rect } from "../../igniteui-angular-core/ES2015/Rect";
/**
 * @hidden
 */
export declare class ContextMenu extends Base {
    static $t: Type;
    private readonly h;
    private b;
    private a;
    private readonly g;
    private m;
    private l;
    private readonly d;
    private n;
    constructor();
    k: (arg1: DropDownItem, arg2: DomWrapper) => boolean;
    readonly f: boolean;
    readonly i: List$1<DropDownItem>;
    o(): void;
    e(a: Node): boolean;
    private c;
    p(a: DomRenderer, b: DomWrapper, c: Rect, d: DropDownPosition): void;
    itemClick: (sender: any, e: DropDownItem) => void;
}
