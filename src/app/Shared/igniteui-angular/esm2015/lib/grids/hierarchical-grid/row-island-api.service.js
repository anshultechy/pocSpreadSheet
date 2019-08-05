/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Subject } from 'rxjs';
export class IgxRowIslandAPIService {
    constructor() {
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
    register(rowIsland) {
        this.state.set(rowIsland.id, rowIsland);
        this.destroyMap.set(rowIsland.id, new Subject());
    }
    /**
     * @param {?} rowIsland
     * @return {?}
     */
    unsubscribe(rowIsland) {
        this.state.delete(rowIsland.id);
    }
    /**
     * @param {?} id
     * @return {?}
     */
    get(id) {
        return this.state.get(id);
    }
    /**
     * @param {?} id
     * @return {?}
     */
    unset(id) {
        this.state.delete(id);
        this.destroyMap.delete(id);
    }
    /**
     * @param {?} oldId
     * @param {?} newId
     * @return {?}
     */
    reset(oldId, newId) {
        /** @type {?} */
        const destroy = this.destroyMap.get(oldId);
        /** @type {?} */
        const rowIsland = this.get(oldId);
        this.unset(oldId);
        if (rowIsland) {
            this.state.set(newId, rowIsland);
        }
        if (destroy) {
            this.destroyMap.set(newId, destroy);
        }
    }
    /**
     * @param {?} rowIsland
     * @return {?}
     */
    registerChildRowIsland(rowIsland) {
        this.childRowIslands.set(rowIsland.key, rowIsland);
        this.destroyMap.set(rowIsland.key, new Subject());
    }
    /**
     * @param {?} rowIsland
     * @return {?}
     */
    unsetChildRowIsland(rowIsland) {
        this.childRowIslands.delete(rowIsland.key);
        this.destroyMap.delete(rowIsland.key);
    }
    /**
     * @param {?} rowIslandKey
     * @return {?}
     */
    getChildRowIsland(rowIslandKey) {
        return this.childRowIslands.get(rowIslandKey);
    }
    /**
     * @param {?} parentRowID
     * @param {?} grid
     * @return {?}
     */
    registerChildGrid(parentRowID, grid) {
        this.childGrids.set(parentRowID, grid);
    }
    /**
     * @param {?=} inDepth
     * @return {?}
     */
    getChildGrids(inDepth) {
        /** @type {?} */
        let allChildren = [];
        this.childGrids.forEach((grid) => {
            allChildren.push(grid);
        });
        if (inDepth) {
            this.childRowIslands.forEach((layout) => {
                allChildren = allChildren.concat(layout.rowIslandAPI.getChildGrids(inDepth));
            });
        }
        return allChildren;
    }
    /**
     * @param {?} rowID
     * @return {?}
     */
    getChildGridByID(rowID) {
        return this.childGrids.get(rowID);
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93LWlzbGFuZC1hcGkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvZ3JpZHMvaGllcmFyY2hpY2FsLWdyaWQvcm93LWlzbGFuZC1hcGkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUvQixNQUFNLE9BQU8sc0JBQXNCO0lBQW5DO1FBQ1csV0FBTSxHQUFpQixJQUFJLE9BQU8sRUFBTyxDQUFDO1FBQ3ZDLFVBQUssR0FBdUMsSUFBSSxHQUFHLEVBQWlDLENBQUM7UUFDckYsZUFBVSxHQUFrQyxJQUFJLEdBQUcsRUFBNEIsQ0FBQztRQUVoRixvQkFBZSxHQUF1QyxJQUFJLEdBQUcsRUFBaUMsQ0FBQztRQUMvRixlQUFVLEdBQTRDLElBQUksR0FBRyxFQUFxQyxDQUFDO0lBc0VqSCxDQUFDOzs7OztJQXBFVSxRQUFRLENBQUMsU0FBZ0M7UUFDNUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsRUFBRSxFQUFFLElBQUksT0FBTyxFQUFXLENBQUMsQ0FBQztJQUM5RCxDQUFDOzs7OztJQUVNLFdBQVcsQ0FBQyxTQUFnQztRQUMvQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7Ozs7SUFFTSxHQUFHLENBQUMsRUFBVTtRQUNqQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzlCLENBQUM7Ozs7O0lBRU0sS0FBSyxDQUFDLEVBQVU7UUFDbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7Ozs7O0lBRU0sS0FBSyxDQUFDLEtBQWEsRUFBRSxLQUFhOztjQUMvQixPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDOztjQUNwQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7UUFFakMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVsQixJQUFJLFNBQVMsRUFBRTtZQUNYLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQztTQUNwQztRQUVELElBQUksT0FBTyxFQUFFO1lBQ1QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQ3ZDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCxzQkFBc0IsQ0FBQyxTQUFnQztRQUNuRCxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxPQUFPLEVBQVcsQ0FBQyxDQUFDO0lBQy9ELENBQUM7Ozs7O0lBRUQsbUJBQW1CLENBQUMsU0FBZ0M7UUFDaEQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMxQyxDQUFDOzs7OztJQUVELGlCQUFpQixDQUFDLFlBQW9CO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7Ozs7O0lBRUQsaUJBQWlCLENBQUMsV0FBMEIsRUFBRSxJQUFrQztRQUM1RSxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7Ozs7SUFFRCxhQUFhLENBQUMsT0FBaUI7O1lBQ3ZCLFdBQVcsR0FBRyxFQUFFO1FBQ3BCLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDN0IsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQztRQUNILElBQUksT0FBTyxFQUFFO1lBQ1QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtnQkFDcEMsV0FBVyxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNqRixDQUFDLENBQUMsQ0FBQztTQUNOO1FBRUQsT0FBTyxXQUFXLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxLQUFLO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdEMsQ0FBQztDQUNKOzs7SUEzRUcsd0NBQWlEOzs7OztJQUNqRCx1Q0FBK0Y7Ozs7O0lBQy9GLDRDQUEwRjs7Ozs7SUFFMUYsaURBQXlHOzs7OztJQUN6Ryw0Q0FBNkciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJZ3hIaWVyYXJjaGljYWxHcmlkQ29tcG9uZW50IH0gZnJvbSAnLi9oaWVyYXJjaGljYWwtZ3JpZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSWd4Um93SXNsYW5kQ29tcG9uZW50IH0gZnJvbSAnLi9yb3ctaXNsYW5kLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBjbGFzcyBJZ3hSb3dJc2xhbmRBUElTZXJ2aWNlIHtcbiAgICBwdWJsaWMgY2hhbmdlOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdDxhbnk+KCk7XG4gICAgcHJvdGVjdGVkIHN0YXRlOiBNYXA8c3RyaW5nLCBJZ3hSb3dJc2xhbmRDb21wb25lbnQ+ID0gbmV3IE1hcDxzdHJpbmcsIElneFJvd0lzbGFuZENvbXBvbmVudD4oKTtcbiAgICBwcm90ZWN0ZWQgZGVzdHJveU1hcDogTWFwPHN0cmluZywgU3ViamVjdDxib29sZWFuPj4gPSBuZXcgTWFwPHN0cmluZywgU3ViamVjdDxib29sZWFuPj4oKTtcblxuICAgIHByb3RlY3RlZCBjaGlsZFJvd0lzbGFuZHM6IE1hcDxzdHJpbmcsIElneFJvd0lzbGFuZENvbXBvbmVudD4gPSBuZXcgTWFwPHN0cmluZywgSWd4Um93SXNsYW5kQ29tcG9uZW50PigpO1xuICAgIHByb3RlY3RlZCBjaGlsZEdyaWRzOiAgTWFwPGFueSwgSWd4SGllcmFyY2hpY2FsR3JpZENvbXBvbmVudD4gPSBuZXcgTWFwPGFueSwgSWd4SGllcmFyY2hpY2FsR3JpZENvbXBvbmVudD4oKTtcblxuICAgIHB1YmxpYyByZWdpc3Rlcihyb3dJc2xhbmQ6IElneFJvd0lzbGFuZENvbXBvbmVudCkge1xuICAgICAgICB0aGlzLnN0YXRlLnNldChyb3dJc2xhbmQuaWQsIHJvd0lzbGFuZCk7XG4gICAgICAgIHRoaXMuZGVzdHJveU1hcC5zZXQocm93SXNsYW5kLmlkLCBuZXcgU3ViamVjdDxib29sZWFuPigpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdW5zdWJzY3JpYmUocm93SXNsYW5kOiBJZ3hSb3dJc2xhbmRDb21wb25lbnQpIHtcbiAgICAgICAgdGhpcy5zdGF0ZS5kZWxldGUocm93SXNsYW5kLmlkKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0KGlkOiBzdHJpbmcpOiBJZ3hSb3dJc2xhbmRDb21wb25lbnQge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5nZXQoaWQpO1xuICAgIH1cblxuICAgIHB1YmxpYyB1bnNldChpZDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuc3RhdGUuZGVsZXRlKGlkKTtcbiAgICAgICAgdGhpcy5kZXN0cm95TWFwLmRlbGV0ZShpZCk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlc2V0KG9sZElkOiBzdHJpbmcsIG5ld0lkOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgZGVzdHJveSA9IHRoaXMuZGVzdHJveU1hcC5nZXQob2xkSWQpO1xuICAgICAgICBjb25zdCByb3dJc2xhbmQgPSB0aGlzLmdldChvbGRJZCk7XG5cbiAgICAgICAgdGhpcy51bnNldChvbGRJZCk7XG5cbiAgICAgICAgaWYgKHJvd0lzbGFuZCkge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZXQobmV3SWQsIHJvd0lzbGFuZCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGVzdHJveSkge1xuICAgICAgICAgICAgdGhpcy5kZXN0cm95TWFwLnNldChuZXdJZCwgZGVzdHJveSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZWdpc3RlckNoaWxkUm93SXNsYW5kKHJvd0lzbGFuZDogSWd4Um93SXNsYW5kQ29tcG9uZW50KSB7XG4gICAgICAgIHRoaXMuY2hpbGRSb3dJc2xhbmRzLnNldChyb3dJc2xhbmQua2V5LCByb3dJc2xhbmQpO1xuICAgICAgICB0aGlzLmRlc3Ryb3lNYXAuc2V0KHJvd0lzbGFuZC5rZXksIG5ldyBTdWJqZWN0PGJvb2xlYW4+KCkpO1xuICAgIH1cblxuICAgIHVuc2V0Q2hpbGRSb3dJc2xhbmQocm93SXNsYW5kOiBJZ3hSb3dJc2xhbmRDb21wb25lbnQpIHtcbiAgICAgICAgdGhpcy5jaGlsZFJvd0lzbGFuZHMuZGVsZXRlKHJvd0lzbGFuZC5rZXkpO1xuICAgICAgICB0aGlzLmRlc3Ryb3lNYXAuZGVsZXRlKHJvd0lzbGFuZC5rZXkpO1xuICAgIH1cblxuICAgIGdldENoaWxkUm93SXNsYW5kKHJvd0lzbGFuZEtleTogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoaWxkUm93SXNsYW5kcy5nZXQocm93SXNsYW5kS2V5KTtcbiAgICB9XG5cbiAgICByZWdpc3RlckNoaWxkR3JpZChwYXJlbnRSb3dJRDogc3RyaW5nfG9iamVjdCwgZ3JpZDogSWd4SGllcmFyY2hpY2FsR3JpZENvbXBvbmVudCkge1xuICAgICAgICB0aGlzLmNoaWxkR3JpZHMuc2V0KHBhcmVudFJvd0lELCBncmlkKTtcbiAgICB9XG5cbiAgICBnZXRDaGlsZEdyaWRzKGluRGVwdGg/OiBib29sZWFuKSB7XG4gICAgICAgIGxldCBhbGxDaGlsZHJlbiA9IFtdO1xuICAgICAgICB0aGlzLmNoaWxkR3JpZHMuZm9yRWFjaCgoZ3JpZCkgPT4ge1xuICAgICAgICAgICAgYWxsQ2hpbGRyZW4ucHVzaChncmlkKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChpbkRlcHRoKSB7XG4gICAgICAgICAgICB0aGlzLmNoaWxkUm93SXNsYW5kcy5mb3JFYWNoKChsYXlvdXQpID0+IHtcbiAgICAgICAgICAgICAgICBhbGxDaGlsZHJlbiA9IGFsbENoaWxkcmVuLmNvbmNhdChsYXlvdXQucm93SXNsYW5kQVBJLmdldENoaWxkR3JpZHMoaW5EZXB0aCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYWxsQ2hpbGRyZW47XG4gICAgfVxuXG4gICAgZ2V0Q2hpbGRHcmlkQnlJRChyb3dJRCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGlsZEdyaWRzLmdldChyb3dJRCk7XG4gICAgfVxufVxuIl19