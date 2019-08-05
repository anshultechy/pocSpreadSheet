/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { DependencyObject } from "./DependencyObject";
import { INotifyPropertyChanged_$type, PropertyChangedEventArgs, String_$type, markType } from "./type";
import { List$1 } from "./List$1";
/**
 * @hidden
 */
export class ShapefileRecord extends DependencyObject {
    constructor() {
        super();
        this._shapeType = 0;
        this._fieldsNames = null;
        this._fieldsTypes = null;
        this.fields = null;
        this.points = null;
        this.propertyChanged = null;
        this._fieldValues = null;
        this.fieldsNames = new List$1(String_$type, 0);
        this.fieldsTypes = new List$1(String_$type, 0);
    }
    get shapeType() {
        return this._shapeType;
    }
    set shapeType(a) {
        this._shapeType = a;
    }
    get fieldsNames() {
        return this._fieldsNames;
    }
    set fieldsNames(a) {
        this._fieldsNames = a;
    }
    get fieldsTypes() {
        return this._fieldsTypes;
    }
    set fieldsTypes(a) {
        this._fieldsTypes = a;
    }
    p(a) {
        if (this.propertyChanged != null) {
            this.propertyChanged(this, new PropertyChangedEventArgs(a));
        }
    }
    get fieldValues() {
        return this._fieldValues;
    }
    set fieldValues(a) {
        this._fieldValues = a;
    }
}
ShapefileRecord.$t = markType(ShapefileRecord, 'ShapefileRecord', DependencyObject.$, [INotifyPropertyChanged_$type]);
//# sourceMappingURL=ShapefileRecord.js.map