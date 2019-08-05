import { DependencyObject } from "./DependencyObject";
import { INotifyPropertyChanged, PropertyChangedEventArgs, Type } from "./type";
import { Uri } from "./Uri";
import { DependencyProperty } from "./DependencyProperty";
import { TriangulationSource } from "./TriangulationSource";
import { AsyncCompletedEventArgs } from "./AsyncCompletedEventArgs";
import { List$1 } from "./List$1";
import { TriangulationSourcePointRecord } from "./TriangulationSourcePointRecord";
import { Triangle } from "./Triangle";
/**
 * @hidden
 */
export declare class ItfConverter extends DependencyObject implements INotifyPropertyChanged {
    static $t: Type;
    static readonly sourceProperty: DependencyProperty;
    source: Uri;
    private j;
    triangulationSource: TriangulationSource;
    private r;
    importCompleted: (sender: any, args: AsyncCompletedEventArgs) => void;
    private s;
    protected u(a: string, b: any, c: any): void;
    protected t(a: string, b: any, c: any): void;
    propertyChanged: (sender: any, e: PropertyChangedEventArgs) => void;
    getPointData(): List$1<TriangulationSourcePointRecord>;
    getTriangleData(): List$1<Triangle>;
}