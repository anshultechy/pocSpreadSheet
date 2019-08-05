/**
 * Event arguments for GetTileImageUri event
*/
var GetTileImageUriArgs = /** @class */ (function () {
    function GetTileImageUriArgs() {
    }
    Object.defineProperty(GetTileImageUriArgs.prototype, "i", {
        /**
         * @hidden
         */
        get: function () {
            return this._implementation;
        },
        enumerable: true,
        configurable: true
    });
    GetTileImageUriArgs.prototype.onImplementationCreated = function () {
    };
    GetTileImageUriArgs.prototype._provideImplementation = function (i) {
        this._implementation = i;
        this._implementation.externalObject = this;
        this.onImplementationCreated();
    };
    Object.defineProperty(GetTileImageUriArgs.prototype, "tileLevel", {
        /**
         * Gets or sets the tile level.
        */
        get: function () {
            return this.i.tileLevel;
        },
        set: function (v) {
            this.i.tileLevel = +v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GetTileImageUriArgs.prototype, "tilePositionX", {
        /**
         * Gets or sets the tile's X position
        */
        get: function () {
            return this.i.tilePositionX;
        },
        set: function (v) {
            this.i.tilePositionX = +v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GetTileImageUriArgs.prototype, "tilePositionY", {
        /**
         * Gets or sets the tile's Y position
        */
        get: function () {
            return this.i.tilePositionY;
        },
        set: function (v) {
            this.i.tilePositionY = +v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GetTileImageUriArgs.prototype, "tileImageUri", {
        /**
         * Gets or sets the tile's image URI
        */
        get: function () {
            return this.i.tileImageUri;
        },
        set: function (v) {
            this.i.tileImageUri = v;
        },
        enumerable: true,
        configurable: true
    });
    return GetTileImageUriArgs;
}());
export { GetTileImageUriArgs };
//# sourceMappingURL=igx-get-tile-image-uri-args.js.map