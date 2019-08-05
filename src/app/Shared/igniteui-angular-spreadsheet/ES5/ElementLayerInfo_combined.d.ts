import { Base, IEnumerable$1, IEqualityComparer$1, Type } from "../../igniteui-angular-core/ES5/type";
import { ISupportPositioning } from "./ISupportPositioning";
/**
 * @hidden
 */
export declare class ElementLayerInfo extends Base {
    static $t: Type;
    readonly f: string;
    private b;
    private a;
    static readonly e: IEqualityComparer$1<string>;
    constructor(a: number, b: string, c: IEnumerable$1<string>, d: IEnumerable$1<string>);
    constructor(a: number, b: string, c: IEnumerable$1<string>, d: IEnumerable$1<string>, e: IEnumerable$1<string>, f: IEnumerable$1<string>);
    constructor(a: number, ..._rest: any[]);
    readonly g: string;
    readonly c: ElementLayerInfo_ElementOrderInfo;
    readonly d: ElementLayerInfo_ElementOrderInfo;
}
/**
 * @hidden
 */
export declare class ElementLayerInfo_ElementOrderInfo extends Base implements ISupportPositioning {
    static $t: Type;
    readonly a: ElementLayerInfo;
    private c;
    private b;
    constructor(a: ElementLayerInfo, b: IEnumerable$1<string>, c: IEnumerable$1<string>);
    readonly after: IEnumerable$1<string>;
    readonly before: IEnumerable$1<string>;
    readonly key: string;
}
