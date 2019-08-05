/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Subject } from 'rxjs';
var IgxRowIslandAPIService = /** @class */ (function () {
    function IgxRowIslandAPIService() {
        this.change = new Subject();
        this.state = new Map();
        this.destroyMap = new Map();
        this.childRowIslands = new Map();
        this.childGrids = new Map();
    }
    /**
     * @param {?} rowIsland
     * @return {?}
     */
    IgxRowIslandAPIService.prototype.register = /**
     * @param {?} rowIsland
     * @return {?}
     */
    function (rowIsland) {
        this.state.set(rowIsland.id, rowIsland);
        this.destroyMap.set(rowIsland.id, new Subject());
    };
    /**
     * @param {?} rowIsland
     * @return {?}
     */
    IgxRowIslandAPIService.prototype.unsubscribe = /**
     * @param {?} rowIsland
     * @return {?}
     */
    function (rowIsland) {
        this.state.delete(rowIsland.id);
    };
    /**
     * @param {?} id
     * @return {?}
     */
    IgxRowIslandAPIService.prototype.get = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return this.state.get(id);
    };
    /**
     * @param {?} id
     * @return {?}
     */
    IgxRowIslandAPIService.prototype.unset = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        this.state.delete(id);
        this.destroyMap.delete(id);
    };
    /**
     * @param {?} oldId
     * @param {?} newId
     * @return {?}
     */
    IgxRowIslandAPIService.prototype.reset = /**
     * @param {?} oldId
     * @param {?} newId
     * @return {?}
     */
    function (oldId, newId) {
        /** @type {?} */
        var destroy = this.destroyMap.get(oldId);
        /** @type {?} */
        var rowIsland = this.get(oldId);
        this.unset(oldId);
        if (rowIsland) {
            this.state.set(newId, rowIsland);
        }
        if (destroy) {
            this.destroyMap.set(newId, destroy);
        }
    };
    /**
     * @param {?} rowIsland
     * @return {?}
     */
    IgxRowIslandAPIService.prototype.registerChildRowIsland = /**
     * @param {?} rowIsland
     * @return {?}
     */
    function (rowIsland) {
        this.childRowIslands.set(rowIsland.key, rowIsland);
        this.destroyMap.set(rowIsland.key, new Subject());
    };
    /**
     * @param {?} rowIsland
     * @return {?}
     */
    IgxRowIslandAPIService.prototype.unsetChildRowIsland = /**
     * @param {?} rowIsland
     * @return {?}
     */
    function (rowIsland) {
        this.childRowIslands.delete(rowIsland.key);
        this.destroyMap.delete(rowIsland.key);
    };
    /**
     * @param {?} rowIslandKey
     * @return {?}
     */
    IgxRowIslandAPIService.prototype.getChildRowIsland = /**
     * @param {?} rowIslandKey
     * @return {?}
     */
    function (rowIslandKey) {
        return this.childRowIslands.get(rowIslandKey);
    };
    /**
     * @param {?} parentRowID
     * @param {?} grid
     * @return {?}
     */
    IgxRowIslandAPIService.prototype.registerChildGrid = /**
     * @param {?} parentRowID
     * @param {?} grid
     * @return {?}
     */
    function (parentRowID, grid) {
        this.childGrids.set(parentRowID, grid);
    };
    /**
     * @param {?=} inDepth
     * @return {?}
     */
    IgxRowIslandAPIService.prototype.getChildGrids = /**
     * @param {?=} inDepth
     * @return {?}
     */
    function (inDepth) {
        /** @type {?} */
        var allChildren = [];
        this.childGrids.forEach(function (grid) {
            allChildren.push(grid);
        });
        if (inDepth) {
            this.childRowIslands.forEach(function (layout) {
                allChildren = allChildren.concat(layout.rowIslandAPI.getChildGrids(inDepth));
            });
        }
        return allChildren;
    };
    /**
     * @param {?} rowID
     * @return {?}
     */
    IgxRowIslandAPIService.prototype.getChildGridByID = /**
     * @param {?} rowID
     * @return {?}
     */
    function (rowID) {
        return this.childGrids.get(rowID);
    };
    return IgxRowIslandAPIService;
}());
export { IgxRowIslandAPIService };
if (false) {
    /** @type {?} */
    IgxRowIslandAPIService.prototype.change;
    /**
     * @type {?}
     * @protected
     */
    IgxRowIslandAPIService.prototype.state;
    /**
     * @type {?}
     * @protected
     */
    IgxRowIslandAPIService.prototype.destroyMap;
    /**
     * @type {?}
     * @protected
     */
    IgxRowIslandAPIService.prototype.childRowIslands;
    /**
     * @type {?}
     * @protected
     */
    IgxRowIslandAPIService.prototype.childGrids;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93LWlzbGFuZC1hcGkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvZ3JpZHMvaGllcmFyY2hpY2FsLWdyaWQvcm93LWlzbGFuZC1hcGkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUvQjtJQUFBO1FBQ1csV0FBTSxHQUFpQixJQUFJLE9BQU8sRUFBTyxDQUFDO1FBQ3ZDLFVBQUssR0FBdUMsSUFBSSxHQUFHLEVBQWlDLENBQUM7UUFDckYsZUFBVSxHQUFrQyxJQUFJLEdBQUcsRUFBNEIsQ0FBQztRQUVoRixvQkFBZSxHQUF1QyxJQUFJLEdBQUcsRUFBaUMsQ0FBQztRQUMvRixlQUFVLEdBQTRDLElBQUksR0FBRyxFQUFxQyxDQUFDO0lBc0VqSCxDQUFDOzs7OztJQXBFVSx5Q0FBUTs7OztJQUFmLFVBQWdCLFNBQWdDO1FBQzVDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRSxJQUFJLE9BQU8sRUFBVyxDQUFDLENBQUM7SUFDOUQsQ0FBQzs7Ozs7SUFFTSw0Q0FBVzs7OztJQUFsQixVQUFtQixTQUFnQztRQUMvQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7Ozs7SUFFTSxvQ0FBRzs7OztJQUFWLFVBQVcsRUFBVTtRQUNqQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzlCLENBQUM7Ozs7O0lBRU0sc0NBQUs7Ozs7SUFBWixVQUFhLEVBQVU7UUFDbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7Ozs7O0lBRU0sc0NBQUs7Ozs7O0lBQVosVUFBYSxLQUFhLEVBQUUsS0FBYTs7WUFDL0IsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQzs7WUFDcEMsU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO1FBRWpDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFbEIsSUFBSSxTQUFTLEVBQUU7WUFDWCxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUM7U0FDcEM7UUFFRCxJQUFJLE9BQU8sRUFBRTtZQUNULElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztTQUN2QztJQUNMLENBQUM7Ozs7O0lBRUQsdURBQXNCOzs7O0lBQXRCLFVBQXVCLFNBQWdDO1FBQ25ELElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxJQUFJLE9BQU8sRUFBVyxDQUFDLENBQUM7SUFDL0QsQ0FBQzs7Ozs7SUFFRCxvREFBbUI7Ozs7SUFBbkIsVUFBb0IsU0FBZ0M7UUFDaEQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMxQyxDQUFDOzs7OztJQUVELGtEQUFpQjs7OztJQUFqQixVQUFrQixZQUFvQjtRQUNsQyxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2xELENBQUM7Ozs7OztJQUVELGtEQUFpQjs7Ozs7SUFBakIsVUFBa0IsV0FBMEIsRUFBRSxJQUFrQztRQUM1RSxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7Ozs7SUFFRCw4Q0FBYTs7OztJQUFiLFVBQWMsT0FBaUI7O1lBQ3ZCLFdBQVcsR0FBRyxFQUFFO1FBQ3BCLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSTtZQUN6QixXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxPQUFPLEVBQUU7WUFDVCxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxVQUFDLE1BQU07Z0JBQ2hDLFdBQVcsR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDakYsQ0FBQyxDQUFDLENBQUM7U0FDTjtRQUVELE9BQU8sV0FBVyxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBRUQsaURBQWdCOzs7O0lBQWhCLFVBQWlCLEtBQUs7UUFDbEIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBQ0wsNkJBQUM7QUFBRCxDQUFDLEFBNUVELElBNEVDOzs7O0lBM0VHLHdDQUFpRDs7Ozs7SUFDakQsdUNBQStGOzs7OztJQUMvRiw0Q0FBMEY7Ozs7O0lBRTFGLGlEQUF5Rzs7Ozs7SUFDekcsNENBQTZHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSWd4SGllcmFyY2hpY2FsR3JpZENvbXBvbmVudCB9IGZyb20gJy4vaGllcmFyY2hpY2FsLWdyaWQuY29tcG9uZW50JztcbmltcG9ydCB7IElneFJvd0lzbGFuZENvbXBvbmVudCB9IGZyb20gJy4vcm93LWlzbGFuZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgY2xhc3MgSWd4Um93SXNsYW5kQVBJU2VydmljZSB7XG4gICAgcHVibGljIGNoYW5nZTogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3Q8YW55PigpO1xuICAgIHByb3RlY3RlZCBzdGF0ZTogTWFwPHN0cmluZywgSWd4Um93SXNsYW5kQ29tcG9uZW50PiA9IG5ldyBNYXA8c3RyaW5nLCBJZ3hSb3dJc2xhbmRDb21wb25lbnQ+KCk7XG4gICAgcHJvdGVjdGVkIGRlc3Ryb3lNYXA6IE1hcDxzdHJpbmcsIFN1YmplY3Q8Ym9vbGVhbj4+ID0gbmV3IE1hcDxzdHJpbmcsIFN1YmplY3Q8Ym9vbGVhbj4+KCk7XG5cbiAgICBwcm90ZWN0ZWQgY2hpbGRSb3dJc2xhbmRzOiBNYXA8c3RyaW5nLCBJZ3hSb3dJc2xhbmRDb21wb25lbnQ+ID0gbmV3IE1hcDxzdHJpbmcsIElneFJvd0lzbGFuZENvbXBvbmVudD4oKTtcbiAgICBwcm90ZWN0ZWQgY2hpbGRHcmlkczogIE1hcDxhbnksIElneEhpZXJhcmNoaWNhbEdyaWRDb21wb25lbnQ+ID0gbmV3IE1hcDxhbnksIElneEhpZXJhcmNoaWNhbEdyaWRDb21wb25lbnQ+KCk7XG5cbiAgICBwdWJsaWMgcmVnaXN0ZXIocm93SXNsYW5kOiBJZ3hSb3dJc2xhbmRDb21wb25lbnQpIHtcbiAgICAgICAgdGhpcy5zdGF0ZS5zZXQocm93SXNsYW5kLmlkLCByb3dJc2xhbmQpO1xuICAgICAgICB0aGlzLmRlc3Ryb3lNYXAuc2V0KHJvd0lzbGFuZC5pZCwgbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKSk7XG4gICAgfVxuXG4gICAgcHVibGljIHVuc3Vic2NyaWJlKHJvd0lzbGFuZDogSWd4Um93SXNsYW5kQ29tcG9uZW50KSB7XG4gICAgICAgIHRoaXMuc3RhdGUuZGVsZXRlKHJvd0lzbGFuZC5pZCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldChpZDogc3RyaW5nKTogSWd4Um93SXNsYW5kQ29tcG9uZW50IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuZ2V0KGlkKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdW5zZXQoaWQ6IHN0cmluZykge1xuICAgICAgICB0aGlzLnN0YXRlLmRlbGV0ZShpZCk7XG4gICAgICAgIHRoaXMuZGVzdHJveU1hcC5kZWxldGUoaWQpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZXNldChvbGRJZDogc3RyaW5nLCBuZXdJZDogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGRlc3Ryb3kgPSB0aGlzLmRlc3Ryb3lNYXAuZ2V0KG9sZElkKTtcbiAgICAgICAgY29uc3Qgcm93SXNsYW5kID0gdGhpcy5nZXQob2xkSWQpO1xuXG4gICAgICAgIHRoaXMudW5zZXQob2xkSWQpO1xuXG4gICAgICAgIGlmIChyb3dJc2xhbmQpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuc2V0KG5ld0lkLCByb3dJc2xhbmQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRlc3Ryb3kpIHtcbiAgICAgICAgICAgIHRoaXMuZGVzdHJveU1hcC5zZXQobmV3SWQsIGRlc3Ryb3kpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJDaGlsZFJvd0lzbGFuZChyb3dJc2xhbmQ6IElneFJvd0lzbGFuZENvbXBvbmVudCkge1xuICAgICAgICB0aGlzLmNoaWxkUm93SXNsYW5kcy5zZXQocm93SXNsYW5kLmtleSwgcm93SXNsYW5kKTtcbiAgICAgICAgdGhpcy5kZXN0cm95TWFwLnNldChyb3dJc2xhbmQua2V5LCBuZXcgU3ViamVjdDxib29sZWFuPigpKTtcbiAgICB9XG5cbiAgICB1bnNldENoaWxkUm93SXNsYW5kKHJvd0lzbGFuZDogSWd4Um93SXNsYW5kQ29tcG9uZW50KSB7XG4gICAgICAgIHRoaXMuY2hpbGRSb3dJc2xhbmRzLmRlbGV0ZShyb3dJc2xhbmQua2V5KTtcbiAgICAgICAgdGhpcy5kZXN0cm95TWFwLmRlbGV0ZShyb3dJc2xhbmQua2V5KTtcbiAgICB9XG5cbiAgICBnZXRDaGlsZFJvd0lzbGFuZChyb3dJc2xhbmRLZXk6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGlsZFJvd0lzbGFuZHMuZ2V0KHJvd0lzbGFuZEtleSk7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJDaGlsZEdyaWQocGFyZW50Um93SUQ6IHN0cmluZ3xvYmplY3QsIGdyaWQ6IElneEhpZXJhcmNoaWNhbEdyaWRDb21wb25lbnQpIHtcbiAgICAgICAgdGhpcy5jaGlsZEdyaWRzLnNldChwYXJlbnRSb3dJRCwgZ3JpZCk7XG4gICAgfVxuXG4gICAgZ2V0Q2hpbGRHcmlkcyhpbkRlcHRoPzogYm9vbGVhbikge1xuICAgICAgICBsZXQgYWxsQ2hpbGRyZW4gPSBbXTtcbiAgICAgICAgdGhpcy5jaGlsZEdyaWRzLmZvckVhY2goKGdyaWQpID0+IHtcbiAgICAgICAgICAgIGFsbENoaWxkcmVuLnB1c2goZ3JpZCk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoaW5EZXB0aCkge1xuICAgICAgICAgICAgdGhpcy5jaGlsZFJvd0lzbGFuZHMuZm9yRWFjaCgobGF5b3V0KSA9PiB7XG4gICAgICAgICAgICAgICAgYWxsQ2hpbGRyZW4gPSBhbGxDaGlsZHJlbi5jb25jYXQobGF5b3V0LnJvd0lzbGFuZEFQSS5nZXRDaGlsZEdyaWRzKGluRGVwdGgpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFsbENoaWxkcmVuO1xuICAgIH1cblxuICAgIGdldENoaWxkR3JpZEJ5SUQocm93SUQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hpbGRHcmlkcy5nZXQocm93SUQpO1xuICAgIH1cbn1cbiJdfQ==