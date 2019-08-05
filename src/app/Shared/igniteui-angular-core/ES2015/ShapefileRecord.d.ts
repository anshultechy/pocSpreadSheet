import { DependencyObject } from "./DependencyObject";
import { INotifyPropertyChanged, PropertyChangedEventArgs, Point, Type } from "./type";
import { ShapeType } from "./ShapeType";
import { List$1 } from "./List$1";
import { Dictionary$2 } from "./Dictionary$2";
/**
 * @hidden
 */
export declare class ShapefileRecord extends DependencyObject implements INotifyPropertyChanged {
    static $t: Type;
    constructor();
    private _shapeType;
    shapeType: ShapeType;
    private _fieldsNames;
    fieldsNames: List$1<string>;
    private _fieldsTypes;
    fieldsTypes: List$1<string>;
    fields: Dictionary$2<string, any>;
    points: List$1<List$1<Point>>;
    private p;
    propertyChanged: (sender: any, e: PropertyChangedEventArgs) => void;
    private _fieldValues;
    fieldValues: any;
}
