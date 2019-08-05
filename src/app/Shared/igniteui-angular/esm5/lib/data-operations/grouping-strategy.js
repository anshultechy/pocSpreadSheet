/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { IgxSorting } from './sorting-strategy';
var IgxGrouping = /** @class */ (function (_super) {
    tslib_1.__extends(IgxGrouping, _super);
    function IgxGrouping() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} data
     * @param {?} state
     * @param {?=} grid
     * @param {?=} groupsRecords
     * @param {?=} fullResult
     * @return {?}
     */
    IgxGrouping.prototype.groupBy = /**
     * @param {?} data
     * @param {?} state
     * @param {?=} grid
     * @param {?=} groupsRecords
     * @param {?=} fullResult
     * @return {?}
     */
    function (data, state, grid, groupsRecords, fullResult) {
        if (fullResult === void 0) { fullResult = { data: [], metadata: [] }; }
        /** @type {?} */
        var metadata = [];
        /** @type {?} */
        var grouping = this.groupDataRecursive(data, state, 0, null, metadata, grid, groupsRecords, fullResult);
        return {
            data: grouping,
            metadata: metadata
        };
    };
    return IgxGrouping;
}(IgxSorting));
export { IgxGrouping };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvdXBpbmctc3RyYXRlZ3kuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pZ25pdGV1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2RhdGEtb3BlcmF0aW9ucy9ncm91cGluZy1zdHJhdGVneS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUloRDtJQUFpQyx1Q0FBVTtJQUEzQzs7SUFVQSxDQUFDOzs7Ozs7Ozs7SUFUVSw2QkFBTzs7Ozs7Ozs7SUFBZCxVQUFlLElBQVcsRUFBRSxLQUFxQixFQUFFLElBQVUsRUFDekQsYUFBcUIsRUFBRSxVQUF1RDtRQUF2RCwyQkFBQSxFQUFBLGVBQStCLElBQUksRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRTs7WUFDeEUsUUFBUSxHQUFxQixFQUFFOztZQUMvQixRQUFRLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxVQUFVLENBQUM7UUFDekcsT0FBTztZQUNILElBQUksRUFBRSxRQUFRO1lBQ2QsUUFBUSxFQUFFLFFBQVE7U0FDckIsQ0FBQztJQUNOLENBQUM7SUFDTCxrQkFBQztBQUFELENBQUMsQUFWRCxDQUFpQyxVQUFVLEdBVTFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUdyb3VwQnlSZWNvcmQgfSBmcm9tICcuL2dyb3VwYnktcmVjb3JkLmludGVyZmFjZSc7XG5pbXBvcnQgeyBJU29ydGluZ0V4cHJlc3Npb24gfSBmcm9tICcuL3NvcnRpbmctZXhwcmVzc2lvbi5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSWd4U29ydGluZyB9IGZyb20gJy4vc29ydGluZy1zdHJhdGVneSc7XG5pbXBvcnQgeyBJR3JvdXBpbmdTdGF0ZSB9IGZyb20gJy4vZ3JvdXBieS1zdGF0ZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSUdyb3VwQnlSZXN1bHQgfSBmcm9tICcuL2dyb3VwaW5nLXJlc3VsdC5pbnRlcmZhY2UnO1xuXG5leHBvcnQgY2xhc3MgSWd4R3JvdXBpbmcgZXh0ZW5kcyBJZ3hTb3J0aW5nIHtcbiAgICBwdWJsaWMgZ3JvdXBCeShkYXRhOiBhbnlbXSwgc3RhdGU6IElHcm91cGluZ1N0YXRlLCBncmlkPzogYW55LFxuICAgICAgICBncm91cHNSZWNvcmRzPzogYW55W10sIGZ1bGxSZXN1bHQ6IElHcm91cEJ5UmVzdWx0ID0geyBkYXRhOiBbXSwgbWV0YWRhdGE6IFtdIH0pOiBJR3JvdXBCeVJlc3VsdCB7XG4gICAgICAgIGNvbnN0IG1ldGFkYXRhOiBJR3JvdXBCeVJlY29yZFtdID0gW107XG4gICAgICAgIGNvbnN0IGdyb3VwaW5nID0gdGhpcy5ncm91cERhdGFSZWN1cnNpdmUoZGF0YSwgc3RhdGUsIDAsIG51bGwsIG1ldGFkYXRhLCBncmlkLCBncm91cHNSZWNvcmRzLCBmdWxsUmVzdWx0KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRhdGE6IGdyb3VwaW5nLFxuICAgICAgICAgICAgbWV0YWRhdGE6IG1ldGFkYXRhXG4gICAgICAgIH07XG4gICAgfVxufVxuXG4iXX0=