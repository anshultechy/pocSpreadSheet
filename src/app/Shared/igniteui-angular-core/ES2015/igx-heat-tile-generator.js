import { HeatTileGenerator as HeatTileGenerator_internal } from "./HeatTileGenerator";
import { colorToString, stringToColor, ensureBool } from "./componentUtil";
export class HeatTileGenerator {
    createImplementation() {
        return new HeatTileGenerator_internal();
    }
    /**
     * @hidden
     */
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
    get scaleColors() {
        if (this.i.scaleColors == null) {
            return null;
        }
        let c = [];
        for (let i = 0; i < this.i.scaleColors.length; i++) {
            c.push(colorToString(this.i.scaleColors[i]));
        }
        return c;
    }
    set scaleColors(v) {
        if (v == null) {
            this.i.scaleColors = null;
            return;
        }
        let c = [];
        for (let i = 0; i < v.length; i++) {
            c.push(stringToColor(v[i]));
        }
        this.i.scaleColors = c;
    }
    get yValues() {
        return this.i.k;
    }
    set yValues(v) {
        this.i.k = v;
    }
    get xValues() {
        return this.i.j;
    }
    set xValues(v) {
        this.i.j = v;
    }
    get values() {
        return this.i.i;
    }
    set values(v) {
        this.i.i = v;
    }
    get minimumColor() {
        return colorToString(this.i.by);
    }
    set minimumColor(v) {
        this.i.by = stringToColor(v);
    }
    get maximumColor() {
        return colorToString(this.i.bx);
    }
    set maximumColor(v) {
        this.i.bx = stringToColor(v);
    }
    get scaleColorOffsets() {
        return this.i.g;
    }
    set scaleColorOffsets(v) {
        this.i.g = v;
    }
    get blurRadius() {
        return this.i.ap;
    }
    set blurRadius(v) {
        this.i.ap = +v;
    }
    get maxBlurRadius() {
        return this.i.ar;
    }
    set maxBlurRadius(v) {
        this.i.ar = +v;
    }
    get useBlurRadiusAdjustedForZoom() {
        return this.i.u;
    }
    set useBlurRadiusAdjustedForZoom(v) {
        this.i.u = ensureBool(v);
    }
    get useGlobalMinMax() {
        return this.i.v;
    }
    set useGlobalMinMax(v) {
        this.i.v = ensureBool(v);
    }
    get useGlobalMinMaxAdjustedForZoom() {
        return this.i.w;
    }
    set useGlobalMinMaxAdjustedForZoom(v) {
        this.i.w = ensureBool(v);
    }
    get minimumValue() {
        return this.i.at;
    }
    set minimumValue(v) {
        this.i.at = +v;
    }
    get maximumValue() {
        return this.i.as;
    }
    set maximumValue(v) {
        this.i.as = +v;
    }
    get logarithmBase() {
        return this.i.aq;
    }
    set logarithmBase(v) {
        this.i.aq = +v;
    }
    get useLogarithmicScale() {
        return this.i.x;
    }
    set useLogarithmicScale(v) {
        this.i.x = ensureBool(v);
    }
    get useWebWorkers() {
        return this.i.y;
    }
    set useWebWorkers(v) {
        this.i.y = ensureBool(v);
    }
    get webWorkerScriptPath() {
        return this.i.bi;
    }
    set webWorkerScriptPath(v) {
        this.i.bi = v;
    }
    get webWorkerInstance() {
        return this.i.az;
    }
    set webWorkerInstance(v) {
        this.i.az = v;
    }
    destroy() {
        this.i.bo();
    }
    getTile(z, x, y, onCreated, onCreating, zoomChanging, existingImage) {
        this.i.getTile(z, x, y, onCreated, onCreating, zoomChanging, existingImage);
    }
    cancelTile(z, x, y) {
        this.i.cancelTile(z, x, y);
    }
}
//# sourceMappingURL=igx-heat-tile-generator.js.map