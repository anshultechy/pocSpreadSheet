import { DependencyObjectNotifier } from "./DependencyObjectNotifier";
import { IList$1, IEnumerator$1, IEnumerator, Type } from "./type";
import { ShapefileRecord } from "./ShapefileRecord";
import { INotifyCollectionChanged } from "./INotifyCollectionChanged";
import { Rect } from "./Rect";
import { ShapeType } from "./ShapeType";
import { Header } from "./Header";
import { Uri } from "./Uri";
import { DependencyProperty } from "./DependencyProperty";
import { List$1 } from "./List$1";
import { NotifyCollectionChangedEventArgs } from "./NotifyCollectionChangedEventArgs";
import { AsyncCompletedEventArgs } from "./AsyncCompletedEventArgs";
/**
 * @hidden
 */
export declare class ShapefileConverter extends DependencyObjectNotifier implements IList$1<ShapefileRecord>, INotifyCollectionChanged {
    static $t: Type;
    constructor();
    worldRect: Rect;
    private ab;
    readonly shapeType: ShapeType;
    private _shapeHeader;
    shapeHeader: Header;
    static readonly shapefileSourceProperty: DependencyProperty;
    shapefileSource: Uri;
    static readonly databaseSourceProperty: DependencyProperty;
    databaseSource: Uri;
    private y;
    importCompleted: (sender: any, args: AsyncCompletedEventArgs) => void;
    private w;
    private v;
    private x;
    private n;
    private records;
    collectionChanged: (sender: any, e: NotifyCollectionChangedEventArgs) => void;
    indexOf(a: ShapefileRecord): number;
    insert(a: number, b: ShapefileRecord): void;
    removeAt(a: number): void;
    item(a: number, b?: ShapefileRecord): ShapefileRecord;
    add(a: ShapefileRecord): void;
    clear(): void;
    contains(a: ShapefileRecord): boolean;
    copyTo(a: ShapefileRecord[], b: number): void;
    readonly count: number;
    readonly isReadOnly: boolean;
    remove(a: ShapefileRecord): boolean;
    getEnumerator(): IEnumerator$1<ShapefileRecord>;
    getEnumeratorObject(): IEnumerator;
    getPointData(): List$1<ShapefileRecord>;
}
