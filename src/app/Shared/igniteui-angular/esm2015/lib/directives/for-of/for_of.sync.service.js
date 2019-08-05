/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class IgxForOfSyncService {
    constructor() {
        this._master = new Map();
    }
    /**
     * @hidden
     * @param {?} directive
     * @return {?}
     */
    isMaster(directive) {
        return this._master.get(directive.igxForScrollOrientation) === directive;
    }
    /**
     * @hidden
     * @param {?} directive
     * @param {?=} forced
     * @return {?}
     */
    setMaster(directive, forced = false) {
        /** @type {?} */
        const orientation = directive.igxForScrollOrientation;
        if (orientation && (forced || !this._master.has(orientation))) {
            this._master.set(orientation, directive);
        }
    }
    /**
     * @hidden
     * @return {?}
     */
    resetMaster() {
        this._master.clear();
    }
    /**
     * @hidden
     * @param {?} dir
     * @return {?}
     */
    sizesCache(dir) {
        return this._master.get(dir).sizesCache;
    }
    /**
     * @hidden
     * @param {?} dir
     * @return {?}
     */
    chunkSize(dir) {
        return this._master.get(dir).state.chunkSize;
    }
}
IgxForOfSyncService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */ IgxForOfSyncService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function IgxForOfSyncService_Factory() { return new IgxForOfSyncService(); }, token: IgxForOfSyncService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    IgxForOfSyncService.prototype._master;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9yX29mLnN5bmMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9mb3Itb2YvZm9yX29mLnN5bmMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFNM0MsTUFBTSxPQUFPLG1CQUFtQjtJQUhoQztRQUtZLFlBQU8sR0FBNEMsSUFBSSxHQUFHLEVBQXNDLENBQUM7S0F1QzVHOzs7Ozs7SUFsQ1UsUUFBUSxDQUFDLFNBQXFDO1FBQ2pELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLHVCQUF1QixDQUFDLEtBQUssU0FBUyxDQUFDO0lBQzdFLENBQUM7Ozs7Ozs7SUFLTSxTQUFTLENBQUMsU0FBcUMsRUFBRSxNQUFNLEdBQUcsS0FBSzs7Y0FDNUQsV0FBVyxHQUFHLFNBQVMsQ0FBQyx1QkFBdUI7UUFDckQsSUFBSSxXQUFXLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFO1lBQzNELElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUMsQ0FBQztTQUM1QztJQUNMLENBQUM7Ozs7O0lBS00sV0FBVztRQUNkLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDekIsQ0FBQzs7Ozs7O0lBS00sVUFBVSxDQUFDLEdBQVc7UUFDekIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUM7SUFDNUMsQ0FBQzs7Ozs7O0lBS00sU0FBUyxDQUFDLEdBQVc7UUFDeEIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDO0lBQ2pELENBQUM7OztZQTNDSixVQUFVLFNBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDckI7Ozs7Ozs7O0lBR0csc0NBQXlHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSWd4R3JpZEZvck9mRGlyZWN0aXZlIH0gZnJvbSAnLi9mb3Jfb2YuZGlyZWN0aXZlJztcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgSWd4Rm9yT2ZTeW5jU2VydmljZSB7XG5cbiAgICBwcml2YXRlIF9tYXN0ZXI6IE1hcDxzdHJpbmcsIElneEdyaWRGb3JPZkRpcmVjdGl2ZTxhbnk+PiA9IG5ldyBNYXA8c3RyaW5nLCBJZ3hHcmlkRm9yT2ZEaXJlY3RpdmU8YW55Pj4oKTtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgaXNNYXN0ZXIoZGlyZWN0aXZlOiBJZ3hHcmlkRm9yT2ZEaXJlY3RpdmU8YW55Pik6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWFzdGVyLmdldChkaXJlY3RpdmUuaWd4Rm9yU2Nyb2xsT3JpZW50YXRpb24pID09PSBkaXJlY3RpdmU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBzZXRNYXN0ZXIoZGlyZWN0aXZlOiBJZ3hHcmlkRm9yT2ZEaXJlY3RpdmU8YW55PiwgZm9yY2VkID0gZmFsc2UpIHtcbiAgICAgICAgY29uc3Qgb3JpZW50YXRpb24gPSBkaXJlY3RpdmUuaWd4Rm9yU2Nyb2xsT3JpZW50YXRpb247XG4gICAgICAgIGlmIChvcmllbnRhdGlvbiAmJiAoZm9yY2VkIHx8ICF0aGlzLl9tYXN0ZXIuaGFzKG9yaWVudGF0aW9uKSkpIHtcbiAgICAgICAgICAgIHRoaXMuX21hc3Rlci5zZXQob3JpZW50YXRpb24sIGRpcmVjdGl2ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIHJlc2V0TWFzdGVyKCkge1xuICAgICAgICB0aGlzLl9tYXN0ZXIuY2xlYXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIHNpemVzQ2FjaGUoZGlyOiBzdHJpbmcpOiBudW1iZXJbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tYXN0ZXIuZ2V0KGRpcikuc2l6ZXNDYWNoZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIGNodW5rU2l6ZShkaXI6IHN0cmluZyk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tYXN0ZXIuZ2V0KGRpcikuc3RhdGUuY2h1bmtTaXplO1xuICAgIH1cbn1cbiJdfQ==