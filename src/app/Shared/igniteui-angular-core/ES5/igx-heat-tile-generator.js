import { HeatTileGenerator as HeatTileGenerator_internal } from "./HeatTileGenerator";
import { colorToString, stringToColor, ensureBool } from "./componentUtil";
var HeatTileGenerator = /** @class */ (function () {
    function HeatTileGenerator() {
        this._implementation = this.createImplementation();
        this._implementation.externalObject = this;
        this.onImplementationCreated();
    }
    HeatTileGenerator.prototype.createImplementation = function () {
        return new HeatTileGenerator_internal();
    };
    Object.defineProperty(HeatTileGenerator.prototype, "i", {
        /**
         * @hidden
         */
        get: function () {
            return this._implementation;
        },
        enumerable: true,
        configurable: true
    });
    HeatTileGenerator.prototype.onImplementationCreated = function () {
    };
    HeatTileGenerator.prototype._provideImplementation = function (i) {
        this._implementation = i;
        this._implementation.externalObject = this;
        this.onImplementationCreated();
    };
    Object.defineProperty(HeatTileGenerator.prototype, "scaleColors", {
        get: function () {
            if (this.i.scaleColors == null) {
                return null;
            }
            var c = [];
            for (var i = 0; i < this.i.scaleColors.length; i++) {
                c.push(colorToString(this.i.scaleColors[i]));
            }
            return c;
        },
        set: function (v) {
            if (v == null) {
                this.i.scaleColors = null;
                return;
            }
            var c = [];
            for (var i = 0; i < v.length; i++) {
                c.push(stringToColor(v[i]));
            }
            this.i.scaleColors = c;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeatTileGenerator.prototype, "yValues", {
        get: function () {
            return this.i.k;
        },
        set: function (v) {
            this.i.k = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeatTileGenerator.prototype, "xValues", {
        get: function () {
            return this.i.j;
        },
        set: function (v) {
            this.i.j = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeatTileGenerator.prototype, "values", {
        get: function () {
            return this.i.i;
        },
        set: function (v) {
            this.i.i = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeatTileGenerator.prototype, "minimumColor", {
        get: function () {
            return colorToString(this.i.by);
        },
        set: function (v) {
            this.i.by = stringToColor(v);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeatTileGenerator.prototype, "maximumColor", {
        get: function () {
            return colorToString(this.i.bx);
        },
        set: function (v) {
            this.i.bx = stringToColor(v);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeatTileGenerator.prototype, "scaleColorOffsets", {
        get: function () {
            return this.i.g;
        },
        set: function (v) {
            this.i.g = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeatTileGenerator.prototype, "blurRadius", {
        get: function () {
            return this.i.ap;
        },
        set: function (v) {
            this.i.ap = +v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeatTileGenerator.prototype, "maxBlurRadius", {
        get: function () {
            return this.i.ar;
        },
        set: function (v) {
            this.i.ar = +v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeatTileGenerator.prototype, "useBlurRadiusAdjustedForZoom", {
        get: function () {
            return this.i.u;
        },
        set: function (v) {
            this.i.u = ensureBool(v);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeatTileGenerator.prototype, "useGlobalMinMax", {
        get: function () {
            return this.i.v;
        },
        set: function (v) {
            this.i.v = ensureBool(v);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeatTileGenerator.prototype, "useGlobalMinMaxAdjustedForZoom", {
        get: function () {
            return this.i.w;
        },
        set: function (v) {
            this.i.w = ensureBool(v);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeatTileGenerator.prototype, "minimumValue", {
        get: function () {
            return this.i.at;
        },
        set: function (v) {
            this.i.at = +v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeatTileGenerator.prototype, "maximumValue", {
        get: function () {
            return this.i.as;
        },
        set: function (v) {
            this.i.as = +v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeatTileGenerator.prototype, "logarithmBase", {
        get: function () {
            return this.i.aq;
        },
        set: function (v) {
            this.i.aq = +v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeatTileGenerator.prototype, "useLogarithmicScale", {
        get: function () {
            return this.i.x;
        },
        set: function (v) {
            this.i.x = ensureBool(v);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeatTileGenerator.prototype, "useWebWorkers", {
        get: function () {
            return this.i.y;
        },
        set: function (v) {
            this.i.y = ensureBool(v);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeatTileGenerator.prototype, "webWorkerScriptPath", {
        get: function () {
            return this.i.bi;
        },
        set: function (v) {
            this.i.bi = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeatTileGenerator.prototype, "webWorkerInstance", {
        get: function () {
            return this.i.az;
        },
        set: function (v) {
            this.i.az = v;
        },
        enumerable: true,
        configurable: true
    });
    HeatTileGenerator.prototype.destroy = function () {
        this.i.bo();
    };
    HeatTileGenerator.prototype.getTile = function (z, x, y, onCreated, onCreating, zoomChanging, existingImage) {
        this.i.getTile(z, x, y, onCreated, onCreating, zoomChanging, existingImage);
    };
    HeatTileGenerator.prototype.cancelTile = function (z, x, y) {
        this.i.cancelTile(z, x, y);
    };
    return HeatTileGenerator;
}());
export { HeatTileGenerator };
//# sourceMappingURL=igx-heat-tile-generator.js.map