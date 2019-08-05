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
export class ShapeDataSource {
    constructor() {
        this._importCompleted = null;
        this._implementation = this.createImplementation();
        this._implementation.externalObject = this;
        this.onImplementationCreated();
    }
    createImplementation() {
        return new ShapefileConverter_internal();
    }
    get i() {
        return this._implementation;
    }
    onImplementationCreated() {
    }
    _provideImplementation(i) {
        this._implementation = i;
        this._implementation.externalObject = this;
        this.onImplementationCreated();
    }
    /**
     * Gets the string Uri path of the .dbf portion of the Shapefile
    */
    get databaseSource() {
        return this._databaseSource;
    }
    /**
     * Sets the string Uri path of the .dbf portion of the Shapefile
    */
    set databaseSource(v) {
        this._databaseSource = v;
    }
    /**
     * Gets the string Uri path of the .shp portion of the Shapefile
    */
    get shapefileSource() {
        return this._shapefileSource;
    }
    /**
     * Sets the string Uri path of the .shp portion of the Shapefile
    */
    set shapefileSource(v) {
        this._shapefileSource = v;
    }
    dataBind() {
        this.i.shapefileSource = null;
        this.i.databaseSource = null;
        if (this._shapefileSource && this._databaseSource) {
            this.i.shapefileSource = new Uri(0, this._shapefileSource);
            this.i.databaseSource = new Uri(0, this._databaseSource);
        }
    }
    /**
     * Occurs when the Shapefile has been imported from both the ShapefileSource and DatabaseSource Uris.
    */
    get importCompleted() {
        if (this._importCompleted == null) {
            this._importCompleted = new EventEmitter();
            this.i.importCompleted = delegateCombine(this.i.importCompleted, (o, e) => {
                if (this.beforeImportCompleted) {
                    this.beforeImportCompleted(this, e);
                }
                this._importCompleted.emit({
                    sender: this,
                    args: e
                });
            });
        }
        return this._importCompleted;
    }
    /**
    * Gets the point data.
    */
    getPointData() {
        let list = this.i.getPointData();
        let ret = [];
        for (var i = 0; i < list.count; i++) {
            var shapeRecord = list.item(i);
            if (!shapeRecord.externalObject) {
                let e = new ShapefileRecord();
                e._implementation = shapeRecord;
                shapeRecord.externalObject = e;
            }
            ret.push(shapeRecord.externalObject);
        }
        return ret;
    }
    /**
 * Gets the world bounding rectangle, as read from the header of the Shapefile.
*/
    get worldRect() {
        return fromRect(this.i.worldRect);
    }
    set worldRect(v) {
        this.i.worldRect = toRect(v);
    }
    /**
     * Gets the shape type, as read from the header of the Shapefile.
    */
    get shapeType() {
        return this.i.shapeType;
    }
    /**
     * Gets the header of the Shapefile.
    */
    get shapeHeader() {
        return this.i.shapeHeader;
    }
    set shapeHeader(v) {
        this.i.shapeHeader = v;
    }
}
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter),
    tslib_1.__metadata("design:paramtypes", [])
], ShapeDataSource.prototype, "importCompleted", null);
//# sourceMappingURL=igx-shape-data-source.js.map