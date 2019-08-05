/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var IgxForOfSyncService = /** @class */ (function () {
    function IgxForOfSyncService() {
        this._master = new Map();
    }
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} directive
     * @return {?}
     */
    IgxForOfSyncService.prototype.isMaster = /**
     * @hidden
     * @param {?} directive
     * @return {?}
     */
    function (directive) {
        return this._master.get(directive.igxForScrollOrientation) === directive;
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} directive
     * @param {?=} forced
     * @return {?}
     */
    IgxForOfSyncService.prototype.setMaster = /**
     * @hidden
     * @param {?} directive
     * @param {?=} forced
     * @return {?}
     */
    function (directive, forced) {
        if (forced === void 0) { forced = false; }
        /** @type {?} */
        var orientation = directive.igxForScrollOrientation;
        if (orientation && (forced || !this._master.has(orientation))) {
            this._master.set(orientation, directive);
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    IgxForOfSyncService.prototype.resetMaster = /**
     * @hidden
     * @return {?}
     */
    function () {
        this._master.clear();
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} dir
     * @return {?}
     */
    IgxForOfSyncService.prototype.sizesCache = /**
     * @hidden
     * @param {?} dir
     * @return {?}
     */
    function (dir) {
        return this._master.get(dir).sizesCache;
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} dir
     * @return {?}
     */
    IgxForOfSyncService.prototype.chunkSize = /**
     * @hidden
     * @param {?} dir
     * @return {?}
     */
    function (dir) {
        return this._master.get(dir).state.chunkSize;
    };
    IgxForOfSyncService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */ IgxForOfSyncService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function IgxForOfSyncService_Factory() { return new IgxForOfSyncService(); }, token: IgxForOfSyncService, providedIn: "root" });
    return IgxForOfSyncService;
}());
export { IgxForOfSyncService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    IgxForOfSyncService.prototype._master;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9yX29mLnN5bmMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9mb3Itb2YvZm9yX29mLnN5bmMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFHM0M7SUFBQTtRQUtZLFlBQU8sR0FBNEMsSUFBSSxHQUFHLEVBQXNDLENBQUM7S0F1QzVHO0lBckNHOztPQUVHOzs7Ozs7SUFDSSxzQ0FBUTs7Ozs7SUFBZixVQUFnQixTQUFxQztRQUNqRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQyxLQUFLLFNBQVMsQ0FBQztJQUM3RSxDQUFDO0lBRUQ7O09BRUc7Ozs7Ozs7SUFDSSx1Q0FBUzs7Ozs7O0lBQWhCLFVBQWlCLFNBQXFDLEVBQUUsTUFBYztRQUFkLHVCQUFBLEVBQUEsY0FBYzs7WUFDNUQsV0FBVyxHQUFHLFNBQVMsQ0FBQyx1QkFBdUI7UUFDckQsSUFBSSxXQUFXLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFO1lBQzNELElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUMsQ0FBQztTQUM1QztJQUNMLENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSSx5Q0FBVzs7OztJQUFsQjtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVEOztPQUVHOzs7Ozs7SUFDSSx3Q0FBVTs7Ozs7SUFBakIsVUFBa0IsR0FBVztRQUN6QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQztJQUM1QyxDQUFDO0lBRUQ7O09BRUc7Ozs7OztJQUNJLHVDQUFTOzs7OztJQUFoQixVQUFpQixHQUFXO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQztJQUNqRCxDQUFDOztnQkEzQ0osVUFBVSxTQUFDO29CQUNSLFVBQVUsRUFBRSxNQUFNO2lCQUNyQjs7OzhCQUxEO0NBK0NDLEFBNUNELElBNENDO1NBekNZLG1CQUFtQjs7Ozs7O0lBRTVCLHNDQUF5RyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElneEdyaWRGb3JPZkRpcmVjdGl2ZSB9IGZyb20gJy4vZm9yX29mLmRpcmVjdGl2ZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIElneEZvck9mU3luY1NlcnZpY2Uge1xuXG4gICAgcHJpdmF0ZSBfbWFzdGVyOiBNYXA8c3RyaW5nLCBJZ3hHcmlkRm9yT2ZEaXJlY3RpdmU8YW55Pj4gPSBuZXcgTWFwPHN0cmluZywgSWd4R3JpZEZvck9mRGlyZWN0aXZlPGFueT4+KCk7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIGlzTWFzdGVyKGRpcmVjdGl2ZTogSWd4R3JpZEZvck9mRGlyZWN0aXZlPGFueT4pOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hc3Rlci5nZXQoZGlyZWN0aXZlLmlneEZvclNjcm9sbE9yaWVudGF0aW9uKSA9PT0gZGlyZWN0aXZlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0TWFzdGVyKGRpcmVjdGl2ZTogSWd4R3JpZEZvck9mRGlyZWN0aXZlPGFueT4sIGZvcmNlZCA9IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IG9yaWVudGF0aW9uID0gZGlyZWN0aXZlLmlneEZvclNjcm9sbE9yaWVudGF0aW9uO1xuICAgICAgICBpZiAob3JpZW50YXRpb24gJiYgKGZvcmNlZCB8fCAhdGhpcy5fbWFzdGVyLmhhcyhvcmllbnRhdGlvbikpKSB7XG4gICAgICAgICAgICB0aGlzLl9tYXN0ZXIuc2V0KG9yaWVudGF0aW9uLCBkaXJlY3RpdmUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyByZXNldE1hc3RlcigpIHtcbiAgICAgICAgdGhpcy5fbWFzdGVyLmNsZWFyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBzaXplc0NhY2hlKGRpcjogc3RyaW5nKTogbnVtYmVyW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWFzdGVyLmdldChkaXIpLnNpemVzQ2FjaGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBjaHVua1NpemUoZGlyOiBzdHJpbmcpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWFzdGVyLmdldChkaXIpLnN0YXRlLmNodW5rU2l6ZTtcbiAgICB9XG59XG4iXX0=