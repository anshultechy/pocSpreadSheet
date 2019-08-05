import { Base, Type, Stream } from "./type";
import { DTDObjectModel } from "./DTDObjectModel";
import { Encoding } from "./Encoding";
import { XmlNamespaceManager } from "./XmlNamespaceManager";
import { XmlNameTable } from "./XmlNameTable";
import { XmlSpace } from "./XmlSpace";
import { TextReader } from "./TextReader";
import { XmlReader } from "./XmlReader";
import { XmlNodeType } from "./xml";
import { ReadState } from "./ReadState";
import { WhitespaceHandling } from "./WhitespaceHandling";
import { XmlResolver } from "./XmlResolver";
import { StringBuilder } from "./StringBuilder";
/**
 * @hidden
 */
export declare class XmlParserContext extends Base {
    static $t: Type;
    constructor(a: number, b: XmlNameTable, c: XmlNamespaceManager, d: string, e: XmlSpace);
    constructor(a: number, b: XmlNameTable, c: XmlNamespaceManager, d: string, e: XmlSpace, f: Encoding);
    constructor(a: number, b: XmlNameTable, c: XmlNamespaceManager, d: string, e: string, f: string, g: string, h: string, i: string, j: XmlSpace);
    constructor(a: number, b: XmlNameTable, c: XmlNamespaceManager, d: string, e: string, f: string, g: string, h: string, i: string, j: XmlSpace, k: Encoding);
    constructor(a: number, b: XmlNameTable, c: XmlNamespaceManager, d: DTDObjectModel, e: string, f: string, g: XmlSpace, h: Encoding);
    constructor(a: number, ..._rest: any[]);
    private c;
    private e;
    private o;
    private g;
    private u;
    private w;
    private i;
    private k;
    private m;
    private y;
    private a;
    private b;
    private s;
    d: string;
    f: string;
    t: DTDObjectModel;
    p: Encoding;
    h: string;
    v: XmlNamespaceManager;
    x: XmlNameTable;
    j: string;
    l: string;
    n: string;
    z: XmlSpace;
    r(): void;
    q(): void;
}
/**
 * @hidden
 */
export declare class XmlTextReader extends XmlReader {
    static $t: Type;
    constructor(a: number);
    constructor(a: number, b: Stream);
    constructor(a: number, b: string);
    constructor(a: number, b: TextReader);
    constructor(a: number, b: XmlNameTable);
    constructor(a: number, b: Stream, c: XmlNameTable);
    constructor(a: number, b: string, c: Stream);
    constructor(a: number, b: string, c: TextReader);
    constructor(a: number, b: string, c: XmlNameTable);
    constructor(a: number, b: TextReader, c: XmlNameTable);
    constructor(a: number, b: boolean, c: XmlResolver, d: string, e: XmlNodeType, f: XmlParserContext);
    constructor(a: number, b: Stream, c: XmlNodeType, d: XmlParserContext);
    constructor(a: number, b: string, c: TextReader, d: XmlNodeType);
    constructor(a: number, b: string, c: Stream, d: XmlNameTable);
    constructor(a: number, b: string, c: TextReader, d: XmlNameTable);
    constructor(a: number, b: string, c: XmlNodeType, d: XmlParserContext);
    constructor(a: number, b: string, c: TextReader, d: XmlNodeType, e: XmlParserContext);
    constructor(a: number, ..._rest: any[]);
    private cw;
    protected get_w(): number;
    readonly w: number;
    protected get_z(): string;
    readonly z: string;
    protected get_a(): boolean;
    protected get_b(): boolean;
    bf: boolean;
    bi: boolean;
    protected get_x(): number;
    readonly x: number;
    readonly c6: Encoding;
    protected get_d(): boolean;
    readonly d: boolean;
    protected get_f(): boolean;
    readonly f: boolean;
    protected get_h(): boolean;
    readonly h: boolean;
    protected get_i(): boolean;
    readonly i: boolean;
    item(a: number): string;
    item1(a: string): string;
    item2(a: string, b: string): string;
    readonly cf: number;
    readonly cg: number;
    protected get_ag(): string;
    readonly ag: string;
    protected get_ai(): string;
    readonly ai: string;
    bn: boolean;
    protected get_aj(): string;
    readonly aj: string;
    protected get_a5(): XmlNameTable;
    readonly a5: XmlNameTable;
    protected get_a7(): XmlNodeType;
    readonly a7: XmlNodeType;
    bp: boolean;
    protected get_ak(): string;
    readonly ak: string;
    bt: boolean;
    protected get_v(): string;
    readonly v: string;
    protected get_a3(): ReadState;
    readonly a3: ReadState;
    protected get_ar(): string;
    readonly ar: string;
    ed: WhitespaceHandling;
    protected get_as(): string;
    readonly as: string;
    em: XmlResolver;
    protected get_a8(): XmlSpace;
    readonly a8: XmlSpace;
    au(): void;
    aa(a: number): string;
    ab(a: string): string;
    private cd;
    ac(a: string, b: string): string;
    cx(): TextReader;
    ah(a: string): string;
    c1(a: string, b: boolean): string;
    aw(a: number): void;
    o(a: string): boolean;
    p(a: string, b: string): boolean;
    q(): boolean;
    r(): boolean;
    s(): boolean;
    t(): boolean;
    u(): boolean;
    cn(a: number[], b: number, c: number): number;
    co(a: number[], b: number, c: number): number;
    cr(a: string[], b: number, c: number): number;
    d2(): void;
    a1(): void;
    readonly el: XmlResolver;
    private es;
    private er;
    private ep;
    private eq;
    private a9;
    ba: XmlTextReader_XmlTokenInfo[];
    private b6;
    private b7;
    private b3;
    private ej;
    private eg;
    ef: XmlNamespaceManager;
    private eb;
    private bk;
    private ca;
    private cb;
    private bj;
    private bq;
    private bb;
    private cc;
    private be;
    private bl;
    private bz;
    private c0;
    c7: StringBuilder;
    private cy;
    private bc;
    private ck;
    private cl;
    private b5;
    private br;
    private ce;
    private b4;
    private b8;
    private b9;
    private b2;
    private ei;
    private eh;
    private ch;
    private bu;
    private bm;
    private ec;
    private ek;
    private bo;
    private bg;
    private bs;
    private bh;
    private d9;
    private ea;
    private bd;
    private ee;
    private initXmlTextReader;
    private dd;
    private dn;
    private d4;
    private d5;
    private de;
    private cm;
    private ci;
    private cp;
    private c9;
    private bw;
    private bv;
    private d3;
    private d0;
    private dq;
    private dx;
    private dc;
    private db;
    private da;
    cz(): string;
    private df;
    private d1;
    private cu;
    private cq;
    private ct;
    private dr;
    private c8;
    private dk;
    private dl;
    private ds;
    private dz;
    private d7;
    private b1;
    private dp;
    d6(): void;
    private dv;
    private du;
    private dt;
    private dw;
    d8(a: string, b: string, c: string, d: string): DTDObjectModel;
    private eo;
    private readonly en;
    private cv;
    private dj;
    private dy;
    private c5;
    private c4;
    private c2;
    private c3;
    private dg;
    private dh;
    private di;
    private b0;
    private by;
    private cs;
    private bx;
}
/**
 * @hidden
 */
export declare class XmlTextReader_XmlTokenInfo extends Base {
    static $t: Type;
    constructor(a: XmlTextReader);
    private l;
    protected o: XmlTextReader;
    h: string;
    g: string;
    j: string;
    i: string;
    a: boolean;
    b: string;
    c: number;
    d: number;
    f: number;
    e: number;
    n: XmlNodeType;
    protected get_k(): string;
    protected set_k(a: string): void;
    k: string;
    m(): void;
}
/**
 * @hidden
 */
export declare class XmlTextReader_XmlAttributeTokenInfo extends XmlTextReader_XmlTokenInfo {
    static $t: Type;
    constructor(a: XmlTextReader);
    q: number;
    p: number;
    private r;
    private s;
    protected get_k(): string;
    protected set_k(a: string): void;
    m(): void;
    u(): void;
    t(): void;
}