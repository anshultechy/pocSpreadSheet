import * as tslib_1 from "tslib";
import { delegateCombine } from './type';
import { ShapefileConverter as ShapefileConverter_internal } from "./ShapefileConverter";
import { fromRect, toRect } from "./componentUtil";
import { Uri } from './Uri';
import { EventEmitter, Output } from '@angular/core';
import { ShapefileRecord } from './igx-shapefile-record';
/**
 * Class used to convert Shapefiles into CLR objects.
*/
var ShapeDataSource = /** @class */ (function () {
    function ShapeDataSource() {
        this._importCompleted = null;
        this._implementation = this.createImplementation();
        this._implementation.externalObject = this;
        this.onImplementationCreated();
    }
    ShapeDataSource.prototype.createImplementation = function () {
        return new ShapefileConverter_internal();
    };
    Object.defineProperty(ShapeDataSource.prototype, "i", {
        get: function () {
            return this._implementation;
        },
        enumerable: true,
        configurable: true
    });
    ShapeDataSource.prototype.onImplementationCreated = function () {
    };
    ShapeDataSource.prototype._provideImplementation = function (i) {
        this._implementation = i;
        this._implementation.externalObject = this;
        this.onImplementationCreated();
    };
    Object.defineProperty(ShapeDataSource.prototype, "databaseSource", {
        /**
         * Gets the string Uri path of the .dbf portion of the Shapefile
        */
        get: function () {
            return this._databaseSource;
        },
        /**
         * Sets the string Uri path of the .dbf portion of the Shapefile
        */
        set: function (v) {
            this._databaseSource = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShapeDataSource.prototype, "shapefileSource", {
        /**
         * Gets the string Uri path of the .shp portion of the Shapefile
        */
        get: function () {
            return this._shapefileSource;
        },
        /**
         * Sets the string Uri path of the .shp portion of the Shapefile
        */
        set: function (v) {
            this._shapefileSource = v;
        },
        enumerable: true,
        configurable: true
    });
    ShapeDataSource.prototype.dataBind = function () {
        this.i.shapefileSource = null;
        this.i.databaseSource = null;
        if (this._shapefileSource && this._databaseSource) {
            this.i.shapefileSource = new Uri(0, this._shapefileSource);
            this.i.databaseSource = new Uri(0, this._databaseSource);
        }
    };
    Object.defineProperty(ShapeDataSource.prototype, "importCompleted", {
        /**
         * Occurs when the Shapefile has been imported from both the ShapefileSource and DatabaseSource Uris.
        */
        get: function () {
            var _this = this;
            if (this._importCompleted == null) {
                this._importCompleted = new EventEmitter();
                this.i.importCompleted = delegateCombine(this.i.importCompleted, function (o, e) {
                    if (_this.beforeImportCompleted) {
                        _this.beforeImportCompleted(_this, e);
                    }
                    _this._importCompleted.emit({
                        sender: _this,
                        args: e
                    });
                });
            }
            return this._importCompleted;
        },
        enumerable: true,
        configurable: true
    });
    /**
    * Gets the point data.
    */
    ShapeDataSource.prototype.getPointData = function () {
        var list = this.i.getPointData();
        var ret = [];
        for (var i = 0; i < list.count; i++) {
            var shapeRecord = list.item(i);
            if (!shapeRecord.externalObject) {
                var e = new ShapefileRecord();
                e._implementation = shapeRecord;
                shapeRecord.externalObject = e;
            }
            ret.push(shapeRecord.externalObject);
        }
        return ret;
    };
    Object.defineProperty(ShapeDataSource.prototype, "worldRect", {
        /**
     * Gets the world bounding rectangle, as read from the header of the Shapefile.
    */
        get: function () {
            return fromRect(this.i.worldRect);
        },
        set: function (v) {
            this.i.worldRect = toRect(v);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShapeDataSource.prototype, "shapeType", {
        /**
         * Gets the shape type, as read from the header of the Shapefile.
        */
        get: function () {
            return this.i.shapeType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShapeDataSource.prototype, "shapeHeader", {
        /**
         * Gets the header of the Shapefile.
        */
        get: function () {
            return this.i.shapeHeader;
        },
        set: function (v) {
            this.i.shapeHeader = v;
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter),
        tslib_1.__metadata("design:paramtypes", [])
    ], ShapeDataSource.prototype, "importCompleted", null);
    return ShapeDataSource;
}());
export { ShapeDataSource };
//# sourceMappingURL=igx-shape-data-source.js.map