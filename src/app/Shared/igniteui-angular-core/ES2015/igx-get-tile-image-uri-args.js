/**
 * Event arguments for GetTileImageUri event
*/
export class GetTileImageUriArgs {
    /**
     * @hidden
     */
    get i() {
        return this._implementation;
    }
    onImplementationCreated() {
    }
    constructor() {
    }
    _provideImplementation(i) {
        this._implementation = i;
        this._implementation.externalObject = this;
        this.onImplementationCreated();
    }
    /**
     * Gets or sets the tile level.
    */
    get tileLevel() {
        return this.i.tileLevel;
    }
    set tileLevel(v) {
        this.i.tileLevel = +v;
    }
    /**
     * Gets or sets the tile's X position
    */
    get tilePositionX() {
        return this.i.tilePositionX;
    }
    set tilePositionX(v) {
        this.i.tilePositionX = +v;
    }
    /**
     * Gets or sets the tile's Y position
    */
    get tilePositionY() {
        return this.i.tilePositionY;
    }
    set tilePositionY(v) {
        this.i.tilePositionY = +v;
    }
    /**
     * Gets or sets the tile's image URI
    */
    get tileImageUri() {
        return this.i.tileImageUri;
    }
    set tileImageUri(v) {
        this.i.tileImageUri = v;
    }
}
//# sourceMappingURL=igx-get-tile-image-uri-args.js.map