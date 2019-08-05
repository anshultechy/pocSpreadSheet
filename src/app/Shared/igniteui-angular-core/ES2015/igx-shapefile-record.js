import { ShapefileRecord as ShapefileRecord_internal } from "./ShapefileRecord";
/**
 * Represents a record of data from a Shapefile (.shp and .dbf).
*/
export class ShapefileRecord {
    createImplementation() {
        return new ShapefileRecord_internal();
    }
    get i() {
        return this._implementation;
    }
    onImplementationCreated() {
    }
    constructor() {
        this._implementation = this.createImplementation();
        this._implementation.externalObject = this;
        this.onImplementationCreated();
    }
    _provideImplementation(i) {
        this._implementation = i;
        this._implementation.externalObject = this;
        this.onImplementationCreated();
    }
    /**
     * Gets the shape type, as read from the header of the Shapefile.
    */
    get shapeType() {
        return this.i.shapeType;
    }
    /**
     * Gets an array of field names and values for this record
    */
    get fieldsNames() {
        return this.i.fieldsNames._inner;
    }
    /**
     * Gets an arry of field types and values for this record
    */
    get fieldsTypes() {
        return this.i.fieldsTypes._inner;
    }
    /**
     * Gets an array of arrays of points for this record
    */
    get points() {
        var ret = [];
        var list = this.i.points;
        for (var i = 0; i < list.count; i++) {
            var innerlist = list.item(i);
            ret.push(list.item(i)._inner);
        }
        return ret;
    }
    get fieldValues() {
        return this.i.fieldValues;
    }
    set fieldValues(v) {
        this.i.fieldValues = v;
    }
}
//# sourceMappingURL=igx-shapefile-record.js.map