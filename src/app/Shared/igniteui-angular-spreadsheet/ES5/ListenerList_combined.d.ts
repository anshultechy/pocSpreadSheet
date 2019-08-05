import { List$1 } from "../../igniteui-angular-core/ES5/List$1";
import { Base, IEnumerable$1, Type, IList, IEnumerator$1, IEnumerator } from "../../igniteui-angular-core/ES5/type";
/**
 * @hidden
 */
export declare class ListenerList extends List$1<any> {
    static $t: Type;
    private ad;
    constructor(a: number);
    private static af;
    static ag(a: any): any;
    static add2(a: any, b: any, c: boolean): any;
    static remove2(a: any, b: any): any;
    static ac(a: any): IEnumerable$1<any>;
    static ai(a: any, b: IEnumerable$1<any>, c: any): {
        p1: IEnumerable$1<any>;
        p2: any;
    };
    static aj<TItem, TProperty>($tItem: Type, $tProperty: Type, a: any, b: TItem, c: TProperty, d: any): void;
    static ak<TItem>($tItem: Type, a: any, b: TItem): void;
}
/**
 * @hidden
 */
export declare class ListenerList_Enumerable extends Base implements IEnumerable$1<any> {
    static $t: Type;
    private a;
    constructor(a: IList);
    getEnumerator(): IEnumerator$1<any>;
    getEnumeratorObject(): IEnumerator;
}
/**
 * @hidden
 */
export declare class ListenerList_Enumerable_Enumerator extends Base implements IEnumerator$1<any> {
    static $t: Type;
    private a;
    private b;
    private c;
    constructor(a: IList);
    readonly current: any;
    dispose(): void;
    readonly currentObject: any;
    moveNext(): boolean;
    reset(): void;
}
