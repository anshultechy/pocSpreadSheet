import { delegateCombine, delegateRemove } from './type';
import { ItfConverter as ItfConverter_internal } from "./ItfConverter";
import { Uri } from './Uri';
/**
 * Class for converting Itf files into enumerable triangulations.
*/
var TriangulationDataSource = /** @class */ (function () {
    function TriangulationDataSource() {
        this._zoneRunner = null;
        this._importCompleted = null;
        this._importCompleted_wrapped = null;
        this._implementation = this.createImplementation();
        this._implementation.externalObject = this;
        this.onImplementationCreated();
    }
    TriangulationDataSource.prototype.createImplementation = function () {
        return new ItfConverter_internal();
    };
    Object.defineProperty(TriangulationDataSource.prototype, "i", {
        get: function () {
            return this._implementation;
        },
        enumerable: true,
        configurable: true
    });
    TriangulationDataSource.prototype.onImplementationCreated = function () {
    };
    TriangulationDataSource.prototype._provideImplementation = function (i) {
        this._implementation = i;
        this._implementation.externalObject = this;
        this.onImplementationCreated();
    };
    TriangulationDataSource.prototype._runInZone = function (act) {
        if (this._zoneRunner != null) {
            this._zoneRunner(act);
        }
        else {
            act();
        }
    };
    Object.defineProperty(TriangulationDataSource.prototype, "source", {
        /**
         * Gets the string path specifying the location of the Itf file.
        */
        get: function () {
            if (this.i.source == null)
                return null;
            return this.i.source.value;
        },
        /**
         * Sets the string path specifying the location of the Itf file.
        */
        set: function (v) {
            if (v == null) {
                this.i.source = null;
            }
            else {
                this.i.source = new Uri(0, v);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TriangulationDataSource.prototype, "importCompleted", {
        /**
         * Event raised when the import operation has completed
        */
        get: function () {
            return this._importCompleted;
        },
        set: function (ev) {
            var _this = this;
            if (this._importCompleted_wrapped !== null) {
                this.i.importCompleted = delegateRemove(this.i.importCompleted, this._importCompleted_wrapped);
                this._importCompleted_wrapped = null;
                this._importCompleted = null;
            }
            this._importCompleted = ev;
            this._importCompleted_wrapped = function (o, e) {
                if (_this.beforeImportCompleted) {
                    _this.beforeImportCompleted(_this, e);
                }
                if (_this._importCompleted) {
                    _this._importCompleted(_this, e);
                }
            };
            this.i.importCompleted = delegateCombine(this.i.importCompleted, this._importCompleted_wrapped);
        },
        enumerable: true,
        configurable: true
    });
    /**
    * Gets the point data.
    */
    TriangulationDataSource.prototype.getPointData = function () {
        var iv = this.i.getPointData();
        return (iv);
    };
    /**
    * Gets the triangle data.
    */
    TriangulationDataSource.prototype.getTriangleData = function () {
        var iv = this.i.getTriangleData();
        return (iv);
    };
    return TriangulationDataSource;
}());
export { TriangulationDataSource };
//# sourceMappingURL=igx-triangulation-data-source.js.map