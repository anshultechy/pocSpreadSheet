import { Base, EventArgs, Point, Type } from "../../igniteui-angular-core/ES5/type";
import { VisualElementConstraint } from "./VisualElementConstraint";
import { Rect } from "../../igniteui-angular-core/ES5/Rect";
import { InputProxy } from "./InputProxy";
import { IComparer$1 } from "../../igniteui-angular-core/ES5/IComparer$1";
import { DomRenderer } from "../../igniteui-angular-core/ES5/dom";
import { Dictionary$2 } from "../../igniteui-angular-core/ES5/Dictionary$2";
import { EventProxy } from "../../igniteui-angular-core/ES5/EventProxy";
import { InputContactChangeType } from "./InputContactChangeType";
import { VisualElementInputType } from "./VisualElementInputType";
import { ModifierKeys } from "../../igniteui-angular-core/ES5/ModifierKeys";
/**
 * @hidden
 */
export declare class VisualElement extends Base {
    static $t: Type;
    private bc;
    ax: number;
    a2: number;
    av: number;
    a3: number;
    h: VisualElementConstraint;
    private bv;
    a7: DomRenderer;
    ap: Dictionary$2<string, any>;
    _parent: VisualElement;
    private aq;
    a8: number;
    private ar;
    readonly bx: string;
    constructor(a: VisualElement, b: string);
    readonly a9: number;
    readonly i: boolean;
    bw: string;
    j: boolean;
    n: boolean;
    o: boolean;
    k: boolean;
    l: boolean;
    m: boolean;
    p: boolean;
    q: boolean;
    r: boolean;
    s: boolean;
    t: boolean;
    u: boolean;
    readonly v: boolean;
    w: boolean;
    protected get_x(): boolean;
    readonly x: boolean;
    y: boolean;
    ab: boolean;
    ac: boolean;
    protected get_ay(): number;
    readonly ay: number;
    protected get_az(): number;
    readonly az: number;
    readonly a0: number;
    readonly a1: number;
    readonly parent: VisualElement;
    readonly aw: number;
    readonly a4: number;
    bu: number;
    by(a: IVisualElementVisitor): void;
    at(a: number): number;
    au(a: number): number;
    bz(): void;
    g<T extends VisualElement>($t: Type): T;
    ce(): Rect;
    b(a: number): VisualElement;
    cd(a?: VisualElement): Point;
    c(a: string): VisualElement;
    d(): VisualElement;
    protected e(a: number, b: number, c: boolean): VisualElement;
    private as;
    b0(): void;
    private z;
    protected aa(a: number, b: number): boolean;
    protected b1(): void;
    b2(): void;
    protected b3(): void;
    b4(): void;
    ad(a: InputProxy): boolean;
    ae(a: InputProxy): boolean;
    af(a: InputProxy): boolean;
    ag(a: InputProxy): boolean;
    ah(a: InputProxy): boolean;
    ai(a: InputProxy, b: number): boolean;
    b5(): void;
    b6(): void;
    protected b7(a: number, b: number, c: number, d: number): void;
    b8(): void;
    private aj;
    private ak;
    private b9;
    am(a: Rect): boolean;
    al(a: number, b: number, c: number, d: number): boolean;
    protected an(a: number, b: number, c: number, d: number): boolean;
    ca(a: string, b: number, c: number, d?: string): void;
    cb(): void;
    private cc;
    ao(a: (arg1: VisualElement) => boolean): boolean;
    afterHasDescendantChanged: (sender: any, e: EventArgs) => void;
    disposed: (sender: any, e: EventArgs) => void;
}
/**
 * @hidden
 */
export interface IVisualElementVisitor {
    visitElement(a: VisualElement): boolean;
}
/**
 * @hidden
 */
export declare let IVisualElementVisitor_$type: Type;
/**
 * @hidden
 */
export declare class RootVisualElement extends VisualElement {
    static $t: Type;
    private cn;
    private ch;
    private cg;
    private static c5;
    private readonly c7;
    private c0;
    private c4;
    private dn;
    private dm;
    private cf;
    private ci;
    private c1;
    private c2;
    constructor(a: string);
    bz(): void;
    protected an(a: number, b: number, c: number, d: number): boolean;
    private c3;
    readonly cj: VisualElement;
    co: EventProxy;
    readonly cr: boolean;
    cs: boolean;
    private cp;
    cy: boolean;
    cq(a: VisualElement): boolean;
    private cl;
    private cm;
    private ck;
    private c6;
    protected c8(a: VisualElementInputType): void;
    c9(a: Point): void;
    protected da(a: EventProxy, b: EventProxy): void;
    protected ct(a: Point, b: number, c: number): boolean;
    db(): void;
    private cu;
    private dc;
    private df;
    private de;
    private dd;
    private dg;
    private dh;
    private cv;
    protected cw(a: Point): boolean;
    protected cx(a: Point, b: number): boolean;
    di(a: VisualElement, b: string, c: number, d: number, e: string): void;
    private dj;
    dk(a: VisualElement): void;
    private cz;
    dl(): void;
}
/**
 * @hidden
 */
export declare class ToolTipVisualElement extends VisualElement {
    static $t: Type;
    private ch;
    private cl;
    private ci;
    private cm;
    readonly cf: VisualElement;
    readonly cg: VisualElement;
    constructor(a: VisualElement, b: string);
    cq: string;
    cj: boolean;
    cr: string;
    ck: boolean;
}
/**
 * @hidden
 */
export declare class VisualElement_ZComparer extends Base implements IComparer$1<VisualElement> {
    static $t: Type;
    static readonly _a: IComparer$1<VisualElement>;
    compare(a: VisualElement, b: VisualElement): number;
}
/**
 * @hidden
 */
export declare class VisualElementInputProxy extends InputProxy {
    static $t: Type;
    private j;
    private i;
    private m;
    private k;
    private s;
    private o;
    private n;
    private p;
    static q: number;
    constructor(a: RootVisualElement, b: InputContactChangeType, c: EventProxy, d: number, e: number, f: VisualElement, g: number, h: boolean);
    f(): void;
    a(): InputContactChangeType;
    c(): boolean;
    e(): number;
    g(): ModifierKeys;
    h(): Point;
    b(): boolean;
    d(): boolean;
    readonly l: VisualElement;
    r(a: number, b: number, c: VisualElement): void;
}
