/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { IgxSorting } from './sorting-strategy';
export class IgxGrouping extends IgxSorting {
    /**
     * @param {?} data
     * @param {?} state
     * @param {?=} grid
     * @param {?=} groupsRecords
     * @param {?=} fullResult
     * @return {?}
     */
    groupBy(data, state, grid, groupsRecords, fullResult = { data: [], metadata: [] }) {
        /** @type {?} */
        const metadata = [];
        /** @type {?} */
        const grouping = this.groupDataRecursive(data, state, 0, null, metadata, grid, groupsRecords, fullResult);
        return {
            data: grouping,
            metadata: metadata
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvdXBpbmctc3RyYXRlZ3kuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pZ25pdGV1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2RhdGEtb3BlcmF0aW9ucy9ncm91cGluZy1zdHJhdGVneS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBSWhELE1BQU0sT0FBTyxXQUFZLFNBQVEsVUFBVTs7Ozs7Ozs7O0lBQ2hDLE9BQU8sQ0FBQyxJQUFXLEVBQUUsS0FBcUIsRUFBRSxJQUFVLEVBQ3pELGFBQXFCLEVBQUUsYUFBNkIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUU7O2NBQ3hFLFFBQVEsR0FBcUIsRUFBRTs7Y0FDL0IsUUFBUSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsVUFBVSxDQUFDO1FBQ3pHLE9BQU87WUFDSCxJQUFJLEVBQUUsUUFBUTtZQUNkLFFBQVEsRUFBRSxRQUFRO1NBQ3JCLENBQUM7SUFDTixDQUFDO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJR3JvdXBCeVJlY29yZCB9IGZyb20gJy4vZ3JvdXBieS1yZWNvcmQuaW50ZXJmYWNlJztcbmltcG9ydCB7IElTb3J0aW5nRXhwcmVzc2lvbiB9IGZyb20gJy4vc29ydGluZy1leHByZXNzaW9uLmludGVyZmFjZSc7XG5pbXBvcnQgeyBJZ3hTb3J0aW5nIH0gZnJvbSAnLi9zb3J0aW5nLXN0cmF0ZWd5JztcbmltcG9ydCB7IElHcm91cGluZ1N0YXRlIH0gZnJvbSAnLi9ncm91cGJ5LXN0YXRlLmludGVyZmFjZSc7XG5pbXBvcnQgeyBJR3JvdXBCeVJlc3VsdCB9IGZyb20gJy4vZ3JvdXBpbmctcmVzdWx0LmludGVyZmFjZSc7XG5cbmV4cG9ydCBjbGFzcyBJZ3hHcm91cGluZyBleHRlbmRzIElneFNvcnRpbmcge1xuICAgIHB1YmxpYyBncm91cEJ5KGRhdGE6IGFueVtdLCBzdGF0ZTogSUdyb3VwaW5nU3RhdGUsIGdyaWQ/OiBhbnksXG4gICAgICAgIGdyb3Vwc1JlY29yZHM/OiBhbnlbXSwgZnVsbFJlc3VsdDogSUdyb3VwQnlSZXN1bHQgPSB7IGRhdGE6IFtdLCBtZXRhZGF0YTogW10gfSk6IElHcm91cEJ5UmVzdWx0IHtcbiAgICAgICAgY29uc3QgbWV0YWRhdGE6IElHcm91cEJ5UmVjb3JkW10gPSBbXTtcbiAgICAgICAgY29uc3QgZ3JvdXBpbmcgPSB0aGlzLmdyb3VwRGF0YVJlY3Vyc2l2ZShkYXRhLCBzdGF0ZSwgMCwgbnVsbCwgbWV0YWRhdGEsIGdyaWQsIGdyb3Vwc1JlY29yZHMsIGZ1bGxSZXN1bHQpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGF0YTogZ3JvdXBpbmcsXG4gICAgICAgICAgICBtZXRhZGF0YTogbWV0YWRhdGFcbiAgICAgICAgfTtcbiAgICB9XG59XG5cbiJdfQ==