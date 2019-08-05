import { UndoTransactionCloseAction } from "./UndoTransactionCloseAction";
import { Type, Base, IList$1, Nullable$1 } from "../../igniteui-angular-core/ES5/type";
import { UndoHistoryItemType } from "./UndoHistoryItemType";
import { UndoExecuteReason } from "./UndoExecuteReason";
import { PropertyChangeNotifier } from "./PropertyChangeNotifier";
import { UndoMergeAction } from "./UndoMergeAction";
/**
 * @hidden
 */
export interface IUndoTransactionOwner {
    readonly undoManager: UndoManager;
    onChildOpened(a: UndoTransaction): boolean;
    onChildClosed(a: UndoTransaction, b: UndoTransactionCloseAction): void;
}
/**
 * @hidden
 */
export declare let IUndoTransactionOwner_$type: Type;
/**
 * @hidden
 */
export declare class UndoExecuteContext extends Base {
    static $t: Type;
    private e;
    private b;
    private a;
    constructor(a: UndoManager, b: UndoExecuteReason);
    readonly d: UndoHistoryItemType;
    readonly c: UndoExecuteReason;
    readonly i: number;
    readonly f: UndoManager;
    g(a: number): UndoUnit;
    h(a: UndoUnit): boolean;
}
/**
 * @hidden
 */
export declare class UndoHistoryItem extends PropertyChangeNotifier {
    static $t: Type;
    private f;
    private b;
    private d;
    private j;
    private i;
    constructor(a: UndoUnit, b: UndoHistoryItemType, c: UndoManager);
    readonly c: UndoHistoryItemType;
    readonly k: string;
    readonly l: string;
    readonly e: UndoManager;
    readonly g: UndoUnit;
    m(): void;
    h(): boolean;
    n(a: boolean): void;
    o(): void;
}
/**
 * @hidden
 */
export declare class UndoManager extends PropertyChangeNotifier implements IUndoTransactionOwner {
    static $t: Type;
    private aq;
    private d;
    private c;
    private al;
    private ak;
    private at;
    private ap;
    private ao;
    private k;
    private n;
    private m;
    private g;
    private f;
    private e;
    private static b;
    static staticInit(): void;
    constructor();
    x: boolean;
    z: boolean;
    aa: boolean;
    h: UndoHistoryItem;
    readonly p: UndoTransaction;
    readonly ad: boolean;
    af: boolean;
    readonly ag: boolean;
    readonly ah: boolean;
    au: number;
    readonly am: IList$1<UndoHistoryItem>;
    q: UndoTransaction;
    i: UndoHistoryItem;
    j: UndoHistoryItem;
    ar: number;
    readonly an: IList$1<UndoHistoryItem>;
    private readonly y;
    private ac;
    private ae;
    private aj;
    av(a: UndoUnit): void;
    t(a: string, b: string, c: (arg1: UndoExecuteContext) => boolean, d: (arg1: UndoExecuteContext) => boolean, e?: any): UndoUnit;
    u(a: string, b: string, c: () => boolean, d: () => boolean, e?: any): UndoUnit;
    s(a: string, b: string, c: () => void, d: () => void, e?: any): UndoUnit;
    ay(): void;
    a0(a: string, b: string, c: () => void): void;
    az(a: UndoTransaction, b: () => void): void;
    a1(a: (arg1: UndoUnit) => void): void;
    private static a2;
    a6(): void;
    a7(a?: number): void;
    a8(a: (arg1: UndoUnit) => boolean, b?: boolean): void;
    bb(): void;
    r(a: string, b: string): UndoTransaction;
    bd(a: UndoTransaction): void;
    be(): void;
    bf(a?: number): void;
    static w(a: string, b: string, c: (arg1: UndoExecuteContext) => boolean, d: (arg1: UndoExecuteContext) => boolean, e: any): UndoUnit;
    o(a: string, b: string): UndoTransaction;
    static as<TProperty>($tProperty: Type, a: any, b: TProperty, c: TProperty, d: string, e: UndoHistoryItemType, f: boolean): string;
    a4(a: UndoTransaction): void;
    a5(a: number, b: boolean): void;
    bc(a: UndoUnit): void;
    bh(a: UndoTransaction): void;
    private v;
    private aw;
    private ax;
    private ab;
    private l;
    private a3;
    private a9;
    private ba;
    private ai;
    private bg;
    readonly undoManager: UndoManager;
    onChildOpened(a: UndoTransaction): boolean;
    onChildClosed(a: UndoTransaction, b: UndoTransactionCloseAction): void;
}
/**
 * @hidden
 */
export declare class UndoMergeContext extends Base {
    static $t: Type;
    private c;
    private a;
    constructor(a: UndoManager, b: UndoUnit);
    readonly b: UndoManager;
    readonly d: UndoUnit;
}
/**
 * @hidden
 */
export declare abstract class UndoUnit extends Base {
    static $t: Type;
    abstract readonly d: any;
    abstract b(a: UndoExecuteContext): boolean;
    f(a: (arg1: UndoUnit) => void): void;
    abstract e(a: UndoHistoryItemType, b: boolean): string;
    a(a: UndoMergeContext): UndoMergeAction;
    c(a: (arg1: UndoUnit) => boolean): boolean;
}
/**
 * @hidden
 */
export declare class CustomUndoUnit extends UndoUnit {
    static $t: Type;
    private h;
    private i;
    private j;
    private g;
    constructor(a: string, b: string, c: (arg1: UndoExecuteContext) => boolean, d: any);
    b(a: UndoExecuteContext): boolean;
    e(a: UndoHistoryItemType, b: boolean): string;
    protected get_d(): any;
    readonly d: any;
}
/**
 * @hidden
 */
export declare class UndoTransaction extends UndoUnit implements IUndoTransactionOwner {
    static $t: Type;
    private i;
    private s;
    private g;
    private t;
    private j;
    private v;
    private w;
    constructor(a: string, b: string);
    b(a: UndoExecuteContext): boolean;
    f(a: (arg1: UndoUnit) => void): void;
    e(a: UndoHistoryItemType, b: boolean): string;
    a(a: UndoMergeContext): UndoMergeAction;
    c(a: (arg1: UndoUnit) => boolean): boolean;
    protected get_d(): any;
    readonly d: any;
    readonly q: boolean;
    readonly m: UndoTransaction;
    readonly n: UndoTransaction;
    readonly r: IList$1<UndoUnit>;
    readonly u: Nullable$1<boolean>;
    readonly h: IUndoTransactionOwner;
    private readonly x;
    protected readonly y: string;
    protected readonly z: string;
    private ac;
    private o;
    private ag;
    aa(a: UndoUnit): void;
    ab(): void;
    p(): boolean;
    static l(a: UndoTransaction): UndoTransaction;
    ae(a: IUndoTransactionOwner): void;
    ad(): void;
    af(): void;
    protected k(a: UndoExecuteContext): UndoTransaction;
    readonly undoManager: UndoManager;
    onChildOpened(a: UndoTransaction): boolean;
    onChildClosed(a: UndoTransaction, b: UndoTransactionCloseAction): void;
}
