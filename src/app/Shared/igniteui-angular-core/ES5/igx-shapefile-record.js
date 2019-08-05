import { ShapefileRecord as ShapefileRecord_internal } from "./ShapefileRecord";
/**
 * Represents a record of data from a Shapefile (.shp and .dbf).
*/
var ShapefileRecord = /** @class */ (function () {
    function ShapefileRecord() {
        this._implementation = this.createImplementation();
        this._implementation.externalObject = this;
        this.onImplementationCreated();
    }
    ShapefileRecord.prototype.createImplementation = function () {
        return new ShapefileRecord_internal();
    };
    Object.defineProperty(ShapefileRecord.prototype, "i", {
        get: function () {
            return this._implementation;
        },
        enumerable: true,
        configurable: true
    });
    ShapefileRecord.prototype.onImplementationCreated = function () {
    };
    ShapefileRecord.prototype._provideImplementation = function (i) {
        this._implementation = i;
        this._implementation.externalObject = this;
        this.onImplementationCreated();
    };
    Object.defineProperty(ShapefileRecord.prototype, "shapeType", {
        /**
         * Gets the shape type, as read from the header of the Shapefile.
        */
        get: function () {
            return this.i.shapeType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShapefileRecord.prototype, "fieldsNames", {
        /**
         * Gets an array of field names and values for this record
        */
        get: function () {
            return this.i.fieldsNames._inner;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShapefileRecord.prototype, "fieldsTypes", {
        /**
         * Gets an arry of field types and values for this record
        */
        get: function () {
            return this.i.fieldsTypes._inner;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShapefileRecord.prototype, "points", {
        /**
         * Gets an array of arrays of points for this record
        */
        get: function () {
            var ret = [];
            var list = this.i.points;
            for (var i = 0; i < list.count; i++) {
                var innerlist = list.item(i);
                ret.push(list.item(i)._inner);
            }
            return ret;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShapefileRecord.prototype, "fieldValues", {
        get: function () {
            return this.i.fieldValues;
        },
        set: function (v) {
            this.i.fieldValues = v;
        },
        enumerable: true,
        configurable: true
    });
    return ShapefileRecord;
}());
export { ShapefileRecord };
//# sourceMappingURL=igx-shapefile-record.js.map