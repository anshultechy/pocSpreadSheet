/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive } from '@angular/core';
import { ColumnChooserItemBase } from './column-chooser-item-base';
/**
 * @record
 */
export function IColumnVisibilityChangedEventArgs() { }
if (false) {
    /** @type {?} */
    IColumnVisibilityChangedEventArgs.prototype.column;
    /** @type {?} */
    IColumnVisibilityChangedEventArgs.prototype.newValue;
}
/**
 * @hidden
 */
var IgxColumnHidingItemDirective = /** @class */ (function (_super) {
    tslib_1.__extends(IgxColumnHidingItemDirective, _super);
    function IgxColumnHidingItemDirective() {
        return _super.call(this, 'hidden') || this;
    }
    Object.defineProperty(IgxColumnHidingItemDirective.prototype, "disabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this.column.disableHiding;
        },
        enumerable: true,
        configurable: true
    });
    IgxColumnHidingItemDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[igxColumnHidingItem]'
                },] }
    ];
    /** @nocollapse */
    IgxColumnHidingItemDirective.ctorParameters = function () { return []; };
    return IgxColumnHidingItemDirective;
}(ColumnChooserItemBase));
export { IgxColumnHidingItemDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLWhpZGluZy1pdGVtLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvZ3JpZHMvY29sdW1uLWhpZGluZy1pdGVtLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7Ozs7QUFFbkUsdURBR0M7OztJQUZHLG1EQUFZOztJQUNaLHFEQUFrQjs7Ozs7QUFJdEI7SUFHa0Qsd0RBQXFCO0lBRW5FO2VBQ0ksa0JBQU0sUUFBUSxDQUFDO0lBQ25CLENBQUM7SUFFRCxzQkFBSSxrREFBUTs7OztRQUFaO1lBQ0ksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQztRQUNyQyxDQUFDOzs7T0FBQTs7Z0JBWEosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSx1QkFBdUI7aUJBQ3BDOzs7O0lBVUQsbUNBQUM7Q0FBQSxBQVpELENBR2tELHFCQUFxQixHQVN0RTtTQVRZLDRCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb2x1bW5DaG9vc2VySXRlbUJhc2UgfSBmcm9tICcuL2NvbHVtbi1jaG9vc2VyLWl0ZW0tYmFzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNvbHVtblZpc2liaWxpdHlDaGFuZ2VkRXZlbnRBcmdzIHtcbiAgICBjb2x1bW46IGFueTtcbiAgICBuZXdWYWx1ZTogYm9vbGVhbjtcbn1cblxuLyoqIEBoaWRkZW4gKi9cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW2lneENvbHVtbkhpZGluZ0l0ZW1dJ1xufSlcbmV4cG9ydCBjbGFzcyBJZ3hDb2x1bW5IaWRpbmdJdGVtRGlyZWN0aXZlIGV4dGVuZHMgQ29sdW1uQ2hvb3Nlckl0ZW1CYXNlIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcignaGlkZGVuJyk7XG4gICAgfVxuXG4gICAgZ2V0IGRpc2FibGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2x1bW4uZGlzYWJsZUhpZGluZztcbiAgICB9XG59XG4iXX0=