import { Base, IEnumerable, IEnumerator, IDictionary, Type } from "./type";
import { IXmlNamespaceResolver } from "./IXmlNamespaceResolver";
import { XmlNameTable } from "./XmlNameTable";
import { XmlNamespaceScope } from "./XmlNamespaceScope";
/**
 * @hidden
 */
export declare class XmlNamespaceManager extends Base implements IXmlNamespaceResolver, IEnumerable {
    static $t: Type;
    private a;
    private k;
    private b;
    private l;
    private m;
    private j;
    private ab;
    private z;
    private aa;
    private af;
    f: boolean;
    constructor(a: XmlNameTable);
    protected get_n(): string;
    readonly n: string;
    readonly ag: XmlNameTable;
    x(a: string, b: string): void;
    private y;
    private static o;
    getEnumeratorObject(): IEnumerator;
    getNamespacesInScope(a: XmlNamespaceScope): IDictionary;
    i(a: XmlNamespaceScope): IDictionary;
    d(a: string): boolean;
    private e;
    lookupNamespace(a: string): string;
    lookupNamespace1(a: string, b: boolean): string;
    lookupPrefix(a: string): string;
    private c;
    lookupPrefix1(a: string, b: boolean): string;
    s(a: string, b: boolean): string;
    private r;
    private g;
    h(): boolean;
    ac(): void;
    ad(a: string, b: string): void;
    private ae;
}
