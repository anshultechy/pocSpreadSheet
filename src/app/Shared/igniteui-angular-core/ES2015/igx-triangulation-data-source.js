import { delegateCombine, delegateRemove } from './type';
import { ItfConverter as ItfConverter_internal } from "./ItfConverter";
import { Uri } from './Uri';
/**
 * Class for converting Itf files into enumerable triangulations.
*/
export class TriangulationDataSource {
    constructor() {
        this._zoneRunner = null;
        this._importCompleted = null;
        this._importCompleted_wrapped = null;
        this._implementation = this.createImplementation();
        this._implementation.externalObject = this;
        this.onImplementationCreated();
    }
    createImplementation() {
        return new ItfConverter_internal();
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
    _runInZone(act) {
        if (this._zoneRunner != null) {
            this._zoneRunner(act);
        }
        else {
            act();
        }
    }
    /**
     * Gets the string path specifying the location of the Itf file.
    */
    get source() {
        if (this.i.source == null)
            return null;
        return this.i.source.value;
    }
    /**
     * Sets the string path specifying the location of the Itf file.
    */
    set source(v) {
        if (v == null) {
            this.i.source = null;
        }
        else {
            this.i.source = new Uri(0, v);
        }
    }
    /**
     * Event raised when the import operation has completed
    */
    get importCompleted() {
        return this._importCompleted;
    }
    set importCompleted(ev) {
        if (this._importCompleted_wrapped !== null) {
            this.i.importCompleted = delegateRemove(this.i.importCompleted, this._importCompleted_wrapped);
            this._importCompleted_wrapped = null;
            this._importCompleted = null;
        }
        this._importCompleted = ev;
        this._importCompleted_wrapped = (o, e) => {
            if (this.beforeImportCompleted) {
                this.beforeImportCompleted(this, e);
            }
            if (this._importCompleted) {
                this._importCompleted(this, e);
            }
        };
        this.i.importCompleted = delegateCombine(this.i.importCompleted, this._importCompleted_wrapped);
    }
    /**
    * Gets the point data.
    */
    getPointData() {
        let iv = this.i.getPointData();
        return (iv);
    }
    /**
    * Gets the triangle data.
    */
    getTriangleData() {
        let iv = this.i.getTriangleData();
        return (iv);
    }
}
//# sourceMappingURL=igx-triangulation-data-source.js.map