/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, HostBinding, Inject, Input, HostListener } from '@angular/core';
import { IgxDropDownItemComponent } from '../drop-down/drop-down-item.component';
import { IGX_DROPDOWN_BASE, Navigate } from '../drop-down/drop-down.common';
import { IgxComboAPIService } from './combo.api';
import { IgxSelectionAPIService } from '../core/selection';
/**
 * @hidden
 */
var IgxComboItemComponent = /** @class */ (function (_super) {
    tslib_1.__extends(IgxComboItemComponent, _super);
    function IgxComboItemComponent(comboAPI, dropDown, elementRef, selection) {
        var _this = _super.call(this, dropDown, elementRef, null, selection) || this;
        _this.comboAPI = comboAPI;
        _this.dropDown = dropDown;
        _this.elementRef = elementRef;
        _this.selection = selection;
        /**
         * Gets the height of a list item
         * @hidden
         */
        _this.itemHeight = '';
        return _this;
    }
    Object.defineProperty(IgxComboItemComponent.prototype, "itemID", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            return this.comboAPI.isRemote ? JSON.stringify(this.value) : this.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxComboItemComponent.prototype, "comboID", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            return this.comboAPI.comboID;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxComboItemComponent.prototype, "disableTransitions", {
        /**
         * @hidden
         * @internal
         */
        get: /**
         * @hidden
         * \@internal
         * @return {?}
         */
        function () {
            return this.comboAPI.disableTransitions;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxComboItemComponent.prototype, "selected", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            return this.comboAPI.is_item_selected(this.itemID);
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this.isHeader) {
                return;
            }
            this._selected = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} direction
     * @return {?}
     */
    IgxComboItemComponent.prototype.isVisible = /**
     * @hidden
     * @param {?} direction
     * @return {?}
     */
    function (direction) {
        /** @type {?} */
        var rect = this.element.nativeElement.getBoundingClientRect();
        /** @type {?} */
        var parentDiv = this.element.nativeElement.parentElement.parentElement.getBoundingClientRect();
        if (direction === Navigate.Down) {
            return rect.y + rect.height <= parentDiv.y + parentDiv.height;
        }
        return rect.y >= parentDiv.y;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    IgxComboItemComponent.prototype.clicked = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.comboAPI.disableTransitions = false;
        if (this.disabled || this.isHeader) {
            /** @type {?} */
            var focusedItem = this.dropDown.items.find(function (item) { return item.focused; });
            if (this.dropDown.allowItemsFocus && focusedItem) {
                focusedItem.element.nativeElement.focus({ preventScroll: true });
            }
            return;
        }
        this.dropDown.navigateItem(this.index);
        this.comboAPI.set_selected_item(this.itemID, event);
    };
    /**
     * @hidden
     * @internal
     * The event that is prevented is the click on the checkbox label element.
     * That is the only visible element that a user can interact with.
     * The click propagates to the host and the preventDefault is to stop it from
     * switching focus to the input it's base on.
     * The toggle happens in an internal handler in the drop-down on the next task queue cycle.
     */
    /**
     * @hidden
     * \@internal
     * The event that is prevented is the click on the checkbox label element.
     * That is the only visible element that a user can interact with.
     * The click propagates to the host and the preventDefault is to stop it from
     * switching focus to the input it's base on.
     * The toggle happens in an internal handler in the drop-down on the next task queue cycle.
     * @param {?} event
     * @return {?}
     */
    IgxComboItemComponent.prototype.disableCheck = /**
     * @hidden
     * \@internal
     * The event that is prevented is the click on the checkbox label element.
     * That is the only visible element that a user can interact with.
     * The click propagates to the host and the preventDefault is to stop it from
     * switching focus to the input it's base on.
     * The toggle happens in an internal handler in the drop-down on the next task queue cycle.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
    };
    /**
     * @return {?}
     */
    IgxComboItemComponent.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
    };
    IgxComboItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'igx-combo-item',
                    template: "<ng-container *ngIf=\"!isHeader\">\n    <igx-checkbox [checked]=\"selected\" disableRipple=\"true\" [disableTransitions]=\"disableTransitions\" [tabindex]=\"-1\" (click)=\"disableCheck($event)\" class=\"igx-combo__checkbox\"></igx-checkbox>\n</ng-container>\n<ng-content></ng-content>"
                }] }
    ];
    /** @nocollapse */
    IgxComboItemComponent.ctorParameters = function () { return [
        { type: IgxComboAPIService },
        { type: undefined, decorators: [{ type: Inject, args: [IGX_DROPDOWN_BASE,] }] },
        { type: ElementRef },
        { type: IgxSelectionAPIService, decorators: [{ type: Inject, args: [IgxSelectionAPIService,] }] }
    ]; };
    IgxComboItemComponent.propDecorators = {
        itemHeight: [{ type: Input }, { type: HostBinding, args: ['style.height.px',] }],
        clicked: [{ type: HostListener, args: ['click', ['$event'],] }]
    };
    return IgxComboItemComponent;
}(IgxDropDownItemComponent));
export { IgxComboItemComponent };
if (false) {
    /**
     * Gets the height of a list item
     * @hidden
     * @type {?}
     */
    IgxComboItemComponent.prototype.itemHeight;
    /**
     * @type {?}
     * @protected
     */
    IgxComboItemComponent.prototype.comboAPI;
    /**
     * @type {?}
     * @protected
     */
    IgxComboItemComponent.prototype.dropDown;
    /**
     * @type {?}
     * @protected
     */
    IgxComboItemComponent.prototype.elementRef;
    /**
     * @type {?}
     * @protected
     */
    IgxComboItemComponent.prototype.selection;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tYm8taXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pZ25pdGV1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2NvbWJvL2NvbWJvLWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNILFNBQVMsRUFDVCxVQUFVLEVBQ1YsV0FBVyxFQUNYLE1BQU0sRUFDTixLQUFLLEVBR0wsWUFBWSxFQUNmLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxpQkFBaUIsRUFBaUIsUUFBUSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDM0YsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7O0FBRzNEO0lBSTJDLGlEQUF3QjtJQWdDL0QsK0JBQ2MsUUFBNEIsRUFDRCxRQUF1QixFQUNsRCxVQUFzQixFQUNVLFNBQWlDO1FBSi9FLFlBTUksa0JBQU0sUUFBUSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsU0FBUyxDQUFDLFNBQy9DO1FBTmEsY0FBUSxHQUFSLFFBQVEsQ0FBb0I7UUFDRCxjQUFRLEdBQVIsUUFBUSxDQUFlO1FBQ2xELGdCQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ1UsZUFBUyxHQUFULFNBQVMsQ0FBd0I7Ozs7O1FBNUJ4RSxnQkFBVSxHQUFHLEVBQUUsQ0FBQzs7SUErQnZCLENBQUM7SUExQkQsc0JBQVcseUNBQU07UUFIakI7O1dBRUc7Ozs7O1FBQ0g7WUFDSSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUM1RSxDQUFD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QiwyQ0FFdUI7Ozs7O0lBeUJuQix5Q0FBc0M7Ozs7O0lBQ3RDLHlDQUE0RDs7Ozs7SUFDNUQsMkNBQWdDOzs7OztJQUNoQywwQ0FBMkUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIENvbXBvbmVudCxcbiAgICBFbGVtZW50UmVmLFxuICAgIEhvc3RCaW5kaW5nLFxuICAgIEluamVjdCxcbiAgICBJbnB1dCxcbiAgICBEb0NoZWNrLFxuICAgIEhvc3QsXG4gICAgSG9zdExpc3RlbmVyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSWd4RHJvcERvd25JdGVtQ29tcG9uZW50IH0gZnJvbSAnLi4vZHJvcC1kb3duL2Ryb3AtZG93bi1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJR1hfRFJPUERPV05fQkFTRSwgSURyb3BEb3duQmFzZSwgTmF2aWdhdGUgfSBmcm9tICcuLi9kcm9wLWRvd24vZHJvcC1kb3duLmNvbW1vbic7XG5pbXBvcnQgeyBJZ3hDb21ib0FQSVNlcnZpY2UgfSBmcm9tICcuL2NvbWJvLmFwaSc7XG5pbXBvcnQgeyBJZ3hTZWxlY3Rpb25BUElTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZS9zZWxlY3Rpb24nO1xuXG4vKiogQGhpZGRlbiAqL1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdpZ3gtY29tYm8taXRlbScsXG4gICAgdGVtcGxhdGVVcmw6ICdjb21iby1pdGVtLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBJZ3hDb21ib0l0ZW1Db21wb25lbnQgZXh0ZW5kcyBJZ3hEcm9wRG93bkl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBEb0NoZWNrIHtcblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGhlaWdodCBvZiBhIGxpc3QgaXRlbVxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIEBIb3N0QmluZGluZygnc3R5bGUuaGVpZ2h0LnB4JylcbiAgICBwdWJsaWMgaXRlbUhlaWdodCA9ICcnO1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgaXRlbUlEKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb21ib0FQSS5pc1JlbW90ZSA/IEpTT04uc3RyaW5naWZ5KHRoaXMudmFsdWUpIDogdGhpcy52YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIGdldCBjb21ib0lEKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb21ib0FQSS5jb21ib0lEO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IGRpc2FibGVUcmFuc2l0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tYm9BUEkuZGlzYWJsZVRyYW5zaXRpb25zO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgY29tYm9BUEk6IElneENvbWJvQVBJU2VydmljZSxcbiAgICAgICAgQEluamVjdChJR1hfRFJPUERPV05fQkFTRSkgcHJvdGVjdGVkIGRyb3BEb3duOiBJRHJvcERvd25CYXNlLFxuICAgICAgICBwcm90ZWN0ZWQgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICAgICAgQEluamVjdChJZ3hTZWxlY3Rpb25BUElTZXJ2aWNlKSBwcm90ZWN0ZWQgc2VsZWN0aW9uOiBJZ3hTZWxlY3Rpb25BUElTZXJ2aWNlXG4gICAgKSB7XG4gICAgICAgIHN1cGVyKGRyb3BEb3duLCBlbGVtZW50UmVmLCBudWxsLCBzZWxlY3Rpb24pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBnZXQgc2VsZWN0ZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbWJvQVBJLmlzX2l0ZW1fc2VsZWN0ZWQodGhpcy5pdGVtSUQpO1xuICAgIH1cblxuICAgIHNldCBzZWxlY3RlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgICAgICBpZiAodGhpcy5pc0hlYWRlcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3NlbGVjdGVkID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIGlzVmlzaWJsZShkaXJlY3Rpb246IE5hdmlnYXRlKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IHJlY3QgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgY29uc3QgcGFyZW50RGl2ID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSBOYXZpZ2F0ZS5Eb3duKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVjdC55ICsgcmVjdC5oZWlnaHQgPD0gcGFyZW50RGl2LnkgKyBwYXJlbnREaXYuaGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZWN0LnkgPj0gcGFyZW50RGl2Lnk7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuICAgIGNsaWNrZWQoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5jb21ib0FQSS5kaXNhYmxlVHJhbnNpdGlvbnMgPSBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5pc0hlYWRlcikge1xuICAgICAgICAgICAgY29uc3QgZm9jdXNlZEl0ZW0gPSB0aGlzLmRyb3BEb3duLml0ZW1zLmZpbmQoKGl0ZW0pID0+IGl0ZW0uZm9jdXNlZCk7XG4gICAgICAgICAgICBpZiAodGhpcy5kcm9wRG93bi5hbGxvd0l0ZW1zRm9jdXMgJiYgZm9jdXNlZEl0ZW0pIHtcbiAgICAgICAgICAgICAgICBmb2N1c2VkSXRlbS5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoeyBwcmV2ZW50U2Nyb2xsOiB0cnVlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZHJvcERvd24ubmF2aWdhdGVJdGVtKHRoaXMuaW5kZXgpO1xuICAgICAgICB0aGlzLmNvbWJvQVBJLnNldF9zZWxlY3RlZF9pdGVtKHRoaXMuaXRlbUlELCBldmVudCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqIFRoZSBldmVudCB0aGF0IGlzIHByZXZlbnRlZCBpcyB0aGUgY2xpY2sgb24gdGhlIGNoZWNrYm94IGxhYmVsIGVsZW1lbnQuXG4gICAgICogVGhhdCBpcyB0aGUgb25seSB2aXNpYmxlIGVsZW1lbnQgdGhhdCBhIHVzZXIgY2FuIGludGVyYWN0IHdpdGguXG4gICAgICogVGhlIGNsaWNrIHByb3BhZ2F0ZXMgdG8gdGhlIGhvc3QgYW5kIHRoZSBwcmV2ZW50RGVmYXVsdCBpcyB0byBzdG9wIGl0IGZyb21cbiAgICAgKiBzd2l0Y2hpbmcgZm9jdXMgdG8gdGhlIGlucHV0IGl0J3MgYmFzZSBvbi5cbiAgICAgKiBUaGUgdG9nZ2xlIGhhcHBlbnMgaW4gYW4gaW50ZXJuYWwgaGFuZGxlciBpbiB0aGUgZHJvcC1kb3duIG9uIHRoZSBuZXh0IHRhc2sgcXVldWUgY3ljbGUuXG4gICAgICovXG4gICAgZGlzYWJsZUNoZWNrKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgbmdEb0NoZWNrKCkge1xuICAgIH1cbn1cbiJdfQ==