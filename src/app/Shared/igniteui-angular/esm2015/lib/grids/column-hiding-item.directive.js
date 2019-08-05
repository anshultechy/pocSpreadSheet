/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class IgxColumnHidingItemDirective extends ColumnChooserItemBase {
    constructor() {
        super('hidden');
    }
    /**
     * @return {?}
     */
    get disabled() {
        return this.column.disableHiding;
    }
}
IgxColumnHidingItemDirective.decorators = [
    { type: Directive, args: [{
                selector: '[igxColumnHidingItem]'
            },] }
];
/** @nocollapse */
IgxColumnHidingItemDirective.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLWhpZGluZy1pdGVtLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvZ3JpZHMvY29sdW1uLWhpZGluZy1pdGVtLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7OztBQUVuRSx1REFHQzs7O0lBRkcsbURBQVk7O0lBQ1oscURBQWtCOzs7OztBQU90QixNQUFNLE9BQU8sNEJBQTZCLFNBQVEscUJBQXFCO0lBRW5FO1FBQ0ksS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFFRCxJQUFJLFFBQVE7UUFDUixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDO0lBQ3JDLENBQUM7OztZQVhKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsdUJBQXVCO2FBQ3BDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbHVtbkNob29zZXJJdGVtQmFzZSB9IGZyb20gJy4vY29sdW1uLWNob29zZXItaXRlbS1iYXNlJztcblxuZXhwb3J0IGludGVyZmFjZSBJQ29sdW1uVmlzaWJpbGl0eUNoYW5nZWRFdmVudEFyZ3Mge1xuICAgIGNvbHVtbjogYW55O1xuICAgIG5ld1ZhbHVlOiBib29sZWFuO1xufVxuXG4vKiogQGhpZGRlbiAqL1xuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbaWd4Q29sdW1uSGlkaW5nSXRlbV0nXG59KVxuZXhwb3J0IGNsYXNzIElneENvbHVtbkhpZGluZ0l0ZW1EaXJlY3RpdmUgZXh0ZW5kcyBDb2x1bW5DaG9vc2VySXRlbUJhc2Uge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCdoaWRkZW4nKTtcbiAgICB9XG5cbiAgICBnZXQgZGlzYWJsZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbHVtbi5kaXNhYmxlSGlkaW5nO1xuICAgIH1cbn1cbiJdfQ==