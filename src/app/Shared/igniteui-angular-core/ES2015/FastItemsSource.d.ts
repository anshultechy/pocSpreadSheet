import { Base, IEnumerable, IEnumerator, Type } from "./type";
import { IFastItemsSource } from "./IFastItemsSource";
import { FastItemsSourceEventArgs } from "./FastItemsSourceEventArgs";
import { NotifyCollectionChangedEventArgs } from "./NotifyCollectionChangedEventArgs";
import { IFastItemColumn$1 } from "./IFastItemColumn$1";
import { Tuple$2 } from "./Tuple$2";
import { IFastItemColumnPropertyName } from "./IFastItemColumnPropertyName";
/**
 * @hidden
 */
export declare class FastItemsSource extends Base implements IEnumerable, IFastItemsSource {
    static $t: Type;
    constructor();
    event: (sender: any, e: FastItemsSourceEventArgs) => void;
    private o;
    private p;
    e: IEnumerable;
    m(): void;
    n(a: IFastItemsSource, b: any, c: NotifyCollectionChangedEventArgs): void;
    g(): void;
    private h;
    private j;
    private k;
    private l;
    private i;
    readonly count: number;
    item(a: number): any;
    getEnumeratorObject(): IEnumerator;
    indexOf(a: any): number;
    registerColumnDateTime(a: string, b: (arg1: any) => any, c: boolean): IFastItemColumn$1<Date>;
    registerColumnObject(a: string, b: (arg1: any) => any, c: boolean): IFastItemColumn$1<any>;
    registerColumnInt(a: string, b: (arg1: any) => any, c: boolean): IFastItemColumn$1<number>;
    registerColumn(a: string, b: (arg1: any) => any, c: boolean): IFastItemColumn$1<number>;
    deregisterColumn(a: IFastItemColumnPropertyName): void;
    private a;
    private d;
    private c;
    private b;
    asArray(): any[];
    handleCollectionChanged(a: NotifyCollectionChangedEventArgs): void;
    static f(a: string): Tuple$2<string, string>;
    getItem(a: number): any;
}