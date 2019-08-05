import { Base, IList$1, Type } from "../../igniteui-angular-core/ES5/type";
import { DomWrapper, NormalizedEvent, DomRenderer } from "../../igniteui-angular-core/ES5/dom";
import { DropDownItem } from "./DropDownItem";
import { Key } from "../../igniteui-angular-core/ES5/Key";
import { ModifierKeys } from "../../igniteui-angular-core/ES5/ModifierKeys";
/**
 * @hidden
 */
export declare class EditableComboBox extends Base {
    static $t: Type;
    private v;
    private t;
    private q;
    private h;
    private aa;
    private k;
    private o;
    private m;
    private n;
    private l;
    private a;
    private b;
    private c;
    private d;
    constructor();
    readonly p: DomWrapper;
    e: boolean;
    f: boolean;
    readonly g: IList$1<DropDownItem>;
    j: (arg1: Key, arg2: ModifierKeys, arg3: NormalizedEvent) => boolean;
    readonly s: number;
    z: string;
    readonly u: any;
    private static ab;
    private ac;
    private static as;
    private ad;
    private ae;
    private ag;
    private ah;
    private af;
    private ai;
    private aj;
    private r;
    ak(a: DomRenderer): void;
    al(): void;
    private am;
    private an;
    private ao;
    private ap;
    private aq;
    ar(): void;
    itemClick: (sender: any, e: DropDownItem) => void;
}
