/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { DependencyObject } from "./DependencyObject";
import { INotifyPropertyChanged_$type, PropertyChangedEventArgs, String_$type, markType } from "./type";
import { List$1 } from "./List$1";
/**
 * @hidden
 */
var ShapefileRecord = /** @class */ (function (_super) {
    tslib_1.__extends(ShapefileRecord, _super);
    function ShapefileRecord() {
        var _this = _super.call(this) || this;
        _this._shapeType = 0;
        _this._fieldsNames = null;
        _this._fieldsTypes = null;
        _this.fields = null;
        _this.points = null;
        _this.propertyChanged = null;
        _this._fieldValues = null;
        _this.fieldsNames = new List$1(String_$type, 0);
        _this.fieldsTypes = new List$1(String_$type, 0);
        return _this;
    }
    Object.defineProperty(ShapefileRecord.prototype, "shapeType", {
        get: function () {
            return this._shapeType;
        },
        set: function (a) {
            this._shapeType = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShapefileRecord.prototype, "fieldsNames", {
        get: function () {
            return this._fieldsNames;
        },
        set: function (a) {
            this._fieldsNames = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShapefileRecord.prototype, "fieldsTypes", {
        get: function () {
            return this._fieldsTypes;
        },
        set: function (a) {
            this._fieldsTypes = a;
        },
        enumerable: true,
        configurable: true
    });
    ShapefileRecord.prototype.p = function (a) {
        if (this.propertyChanged != null) {
            this.propertyChanged(this, new PropertyChangedEventArgs(a));
        }
    };
    Object.defineProperty(ShapefileRecord.prototype, "fieldValues", {
        get: function () {
            return this._fieldValues;
        },
        set: function (a) {
            this._fieldValues = a;
        },
        enumerable: true,
        configurable: true
    });
    ShapefileRecord.$t = markType(ShapefileRecord, 'ShapefileRecord', DependencyObject.$, [INotifyPropertyChanged_$type]);
    return ShapefileRecord;
}(DependencyObject));
export { ShapefileRecord };
//# sourceMappingURL=ShapefileRecord.js.map