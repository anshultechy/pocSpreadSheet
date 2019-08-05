/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy, Input, ViewChild } from '@angular/core';
import { IgxColumnComponent } from '../../column.component';
import { IgxInputDirective } from '../../../directives/input/input.directive';
import { DisplayDensity } from '../../../core/density';
import { IgxForOfDirective } from '../../../directives/for-of/for_of.directive';
/**
 * @hidden
 */
var IgxExcelStyleSearchComponent = /** @class */ (function () {
    function IgxExcelStyleSearchComponent() {
    }
    /**
     * @return {?}
     */
    IgxExcelStyleSearchComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        requestAnimationFrame(function () {
            _this.virtDir.recalcUpdateSizes();
        });
    };
    /**
     * @return {?}
     */
    IgxExcelStyleSearchComponent.prototype.clearInput = /**
     * @return {?}
     */
    function () {
        this.searchValue = null;
    };
    /**
     * @param {?} eventArgs
     * @return {?}
     */
    IgxExcelStyleSearchComponent.prototype.onCheckboxChange = /**
     * @param {?} eventArgs
     * @return {?}
     */
    function (eventArgs) {
        var _this = this;
        /** @type {?} */
        var selectedIndex = this.data.indexOf(eventArgs.checkbox.value);
        if (selectedIndex === 0) {
            this.data.forEach(function (element) {
                element.isSelected = eventArgs.checked;
                _this.data[0].indeterminate = false;
            });
        }
        else {
            eventArgs.checkbox.value.isSelected = eventArgs.checked;
            if (!this.data.slice(1, this.data.length).find(function (el) { return el.isSelected === false; })) {
                this.data[0].indeterminate = false;
                this.data[0].isSelected = true;
            }
            else if (!this.data.slice(1, this.data.length).find(function (el) { return el.isSelected === true; })) {
                this.data[0].indeterminate = false;
                this.data[0].isSelected = false;
            }
            else {
                this.data[0].indeterminate = true;
            }
        }
        eventArgs.checkbox.nativeCheckbox.nativeElement.blur();
    };
    Object.defineProperty(IgxExcelStyleSearchComponent.prototype, "itemSize", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var itemSize = '40px';
            switch (this.displayDensity) {
                case DisplayDensity.cosy:
                    itemSize = '32px';
                    break;
                case DisplayDensity.compact:
                    itemSize = '24px';
                    break;
                default: break;
            }
            return itemSize;
        },
        enumerable: true,
        configurable: true
    });
    IgxExcelStyleSearchComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false,
                    selector: 'igx-excel-style-search',
                    template: "<igx-input-group\n            type=\"box\"\n            [displayDensity]=\"displayDensity\"\n            [supressInputAutofocus]=\"true\">\n    <igx-icon igxPrefix>search</igx-icon>\n    <input\n        #input\n        igxInput\n        tabindex=\"0\"\n        [(ngModel)]=\"searchValue\"\n        [placeholder]=\"column.grid.resourceStrings.igx_grid_excel_search_placeholder\"\n        autocomplete=\"off\"/>\n    <igx-icon\n        igxSuffix\n        *ngIf=\"searchValue || searchValue === 0\"\n        (click)=\"clearInput()\"\n        tabindex=\"0\">\n        clear\n    </igx-icon>\n</igx-input-group>\n\n        <igx-list [displayDensity]=\"displayDensity\" [style.height.px]=\"250\">\n            <div [style.overflow]=\"'hidden'\" [style.position]=\"'relative'\">\n                <igx-list-item\n                    *igxFor=\"let item of data | excelStyleSearchFilter: searchValue; scrollOrientation : 'vertical'; containerSize: '250px'; itemSize: itemSize\">\n                    <igx-checkbox\n                    [value]=\"item\"\n                    tabindex=\"-1\"\n                    [checked]=\"item.isSelected\"\n                    [disableRipple]=\"true\"\n                    [indeterminate]=\"item.indeterminate\"\n                    [disableTransitions]=\"true\"\n                    (change)=\"onCheckboxChange($event)\">\n                        {{ column.formatter && !item.isSpecial ? column.formatter(item.label) : column.dataType === 'number' ? (item.label | igxdecimal:\n                            column.grid.locale) : column.dataType === 'date' ? (item.label | igxdate: column.grid.locale) : item.label }}\n                    </igx-checkbox>\n                </igx-list-item>\n            </div>\n        </igx-list>\n"
                }] }
    ];
    /** @nocollapse */
    IgxExcelStyleSearchComponent.ctorParameters = function () { return []; };
    IgxExcelStyleSearchComponent.propDecorators = {
        data: [{ type: Input }],
        column: [{ type: Input }],
        searchInput: [{ type: ViewChild, args: ['input', { read: IgxInputDirective, static: true },] }],
        displayDensity: [{ type: Input }],
        virtDir: [{ type: ViewChild, args: [IgxForOfDirective, { static: true },] }]
    };
    return IgxExcelStyleSearchComponent;
}());
export { IgxExcelStyleSearchComponent };
if (false) {
    /** @type {?} */
    IgxExcelStyleSearchComponent.prototype.searchValue;
    /** @type {?} */
    IgxExcelStyleSearchComponent.prototype.data;
    /** @type {?} */
    IgxExcelStyleSearchComponent.prototype.column;
    /** @type {?} */
    IgxExcelStyleSearchComponent.prototype.searchInput;
    /** @type {?} */
    IgxExcelStyleSearchComponent.prototype.displayDensity;
    /**
     * @type {?}
     * @protected
     */
    IgxExcelStyleSearchComponent.prototype.virtDir;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZWwtc3R5bGUtc2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvZ3JpZHMvZmlsdGVyaW5nL2V4Y2VsLXN0eWxlL2V4Y2VsLXN0eWxlLXNlYXJjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFSCxTQUFTLEVBQ1QsdUJBQXVCLEVBQ3ZCLEtBQUssRUFDTCxTQUFTLEVBQ1osTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFHNUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDOUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDOzs7O0FBTWhGO0lBeUJJO0lBQWdCLENBQUM7Ozs7SUFFVixzREFBZTs7O0lBQXRCO1FBQUEsaUJBSUM7UUFIRyxxQkFBcUIsQ0FBQztZQUNsQixLQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDckMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDOzs7O0lBRU0saURBQVU7OztJQUFqQjtRQUNJLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO0lBQzVCLENBQUM7Ozs7O0lBRU0sdURBQWdCOzs7O0lBQXZCLFVBQXdCLFNBQW1DO1FBQTNELGlCQW9CQzs7WUFuQlMsYUFBYSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1FBQ2pFLElBQUksYUFBYSxLQUFLLENBQUMsRUFBRTtZQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFBLE9BQU87Z0JBQ3JCLE9BQU8sQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQztnQkFDdkMsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQ3ZDLENBQUMsQ0FBQyxDQUFDO1NBQ047YUFBTTtZQUNILFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDO1lBQ3hELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxFQUFFLElBQUksT0FBQSxFQUFFLENBQUMsVUFBVSxLQUFLLEtBQUssRUFBdkIsQ0FBdUIsQ0FBQyxFQUFFO2dCQUMzRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7Z0JBQ25DLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQzthQUNsQztpQkFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsRUFBRSxJQUFJLE9BQUEsRUFBRSxDQUFDLFVBQVUsS0FBSyxJQUFJLEVBQXRCLENBQXNCLENBQUMsRUFBRTtnQkFDakYsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO2dCQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7YUFDbkM7aUJBQU07Z0JBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO2FBQ3JDO1NBQ0o7UUFDRCxTQUFTLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDM0QsQ0FBQztJQUVELHNCQUFXLGtEQUFROzs7O1FBQW5COztnQkFDUSxRQUFRLEdBQUcsTUFBTTtZQUNyQixRQUFRLElBQUksQ0FBQyxjQUFjLEVBQUU7Z0JBQ3pCLEtBQUssY0FBYyxDQUFDLElBQUk7b0JBQUUsUUFBUSxHQUFHLE1BQU0sQ0FBQztvQkFBQyxNQUFNO2dCQUNuRCxLQUFLLGNBQWMsQ0FBQyxPQUFPO29CQUFFLFFBQVEsR0FBRyxNQUFNLENBQUM7b0JBQUMsTUFBTTtnQkFDdEQsT0FBTyxDQUFDLENBQUMsTUFBTTthQUNsQjtZQUNELE9BQU8sUUFBUSxDQUFDO1FBQ3BCLENBQUM7OztPQUFBOztnQkFuRUosU0FBUyxTQUFDO29CQUNQLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixRQUFRLEVBQUUsd0JBQXdCO29CQUNsQyxxdURBQWtEO2lCQUNyRDs7Ozs7dUJBS0ksS0FBSzt5QkFHTCxLQUFLOzhCQUdMLFNBQVMsU0FBQyxPQUFPLEVBQUUsRUFBRSxJQUFJLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtpQ0FHNUQsS0FBSzswQkFHTCxTQUFTLFNBQUMsaUJBQWlCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOztJQThDbEQsbUNBQUM7Q0FBQSxBQXBFRCxJQW9FQztTQTlEWSw0QkFBNEI7OztJQUVyQyxtREFBd0I7O0lBRXhCLDRDQUM4Qjs7SUFFOUIsOENBQ2tDOztJQUVsQyxtREFDc0M7O0lBRXRDLHNEQUNzQzs7Ozs7SUFFdEMsK0NBQzBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBBZnRlclZpZXdJbml0LFxuICAgIENvbXBvbmVudCxcbiAgICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgICBJbnB1dCxcbiAgICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJZ3hDb2x1bW5Db21wb25lbnQgfSBmcm9tICcuLi8uLi9jb2x1bW4uY29tcG9uZW50JztcbmltcG9ydCB7IElneEZpbHRlck9wdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9kaXJlY3RpdmVzL2ZpbHRlci9maWx0ZXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IElDaGFuZ2VDaGVja2JveEV2ZW50QXJncyB9IGZyb20gJy4uLy4uLy4uL2NoZWNrYm94L2NoZWNrYm94LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJZ3hJbnB1dERpcmVjdGl2ZSB9IGZyb20gJy4uLy4uLy4uL2RpcmVjdGl2ZXMvaW5wdXQvaW5wdXQuZGlyZWN0aXZlJztcbmltcG9ydCB7IERpc3BsYXlEZW5zaXR5IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9kZW5zaXR5JztcbmltcG9ydCB7IElneEZvck9mRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vLi4vZGlyZWN0aXZlcy9mb3Itb2YvZm9yX29mLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBGaWx0ZXJMaXN0SXRlbSB9IGZyb20gJy4vZ3JpZC5leGNlbC1zdHlsZS1maWx0ZXJpbmcuY29tcG9uZW50JztcblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICAgIHNlbGVjdG9yOiAnaWd4LWV4Y2VsLXN0eWxlLXNlYXJjaCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2V4Y2VsLXN0eWxlLXNlYXJjaC5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgSWd4RXhjZWxTdHlsZVNlYXJjaENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuXG4gICAgcHVibGljIHNlYXJjaFZhbHVlOiBhbnk7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBkYXRhOiBGaWx0ZXJMaXN0SXRlbVtdO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgY29sdW1uOiBJZ3hDb2x1bW5Db21wb25lbnQ7XG5cbiAgICBAVmlld0NoaWxkKCdpbnB1dCcsIHsgcmVhZDogSWd4SW5wdXREaXJlY3RpdmUsIHN0YXRpYzogdHJ1ZSB9KVxuICAgIHB1YmxpYyBzZWFyY2hJbnB1dDogSWd4SW5wdXREaXJlY3RpdmU7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBkaXNwbGF5RGVuc2l0eTogRGlzcGxheURlbnNpdHk7XG5cbiAgICBAVmlld0NoaWxkKElneEZvck9mRGlyZWN0aXZlLCB7IHN0YXRpYzogdHJ1ZSB9KVxuICAgIHByb3RlY3RlZCB2aXJ0RGlyOiBJZ3hGb3JPZkRpcmVjdGl2ZTxhbnk+O1xuXG4gICAgY29uc3RydWN0b3IoKSB7IH1cblxuICAgIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnZpcnREaXIucmVjYWxjVXBkYXRlU2l6ZXMoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGNsZWFySW5wdXQoKSB7XG4gICAgICAgIHRoaXMuc2VhcmNoVmFsdWUgPSBudWxsO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkNoZWNrYm94Q2hhbmdlKGV2ZW50QXJnczogSUNoYW5nZUNoZWNrYm94RXZlbnRBcmdzKSB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkSW5kZXggPSB0aGlzLmRhdGEuaW5kZXhPZihldmVudEFyZ3MuY2hlY2tib3gudmFsdWUpO1xuICAgICAgICBpZiAoc2VsZWN0ZWRJbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5kYXRhLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5pc1NlbGVjdGVkID0gZXZlbnRBcmdzLmNoZWNrZWQ7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhWzBdLmluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXZlbnRBcmdzLmNoZWNrYm94LnZhbHVlLmlzU2VsZWN0ZWQgPSBldmVudEFyZ3MuY2hlY2tlZDtcbiAgICAgICAgICAgIGlmICghdGhpcy5kYXRhLnNsaWNlKDEsIHRoaXMuZGF0YS5sZW5ndGgpLmZpbmQoZWwgPT4gZWwuaXNTZWxlY3RlZCA9PT0gZmFsc2UpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhWzBdLmluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFbMF0uaXNTZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLmRhdGEuc2xpY2UoMSwgdGhpcy5kYXRhLmxlbmd0aCkuZmluZChlbCA9PiBlbC5pc1NlbGVjdGVkID09PSB0cnVlKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0YVswXS5pbmRldGVybWluYXRlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhWzBdLmlzU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhWzBdLmluZGV0ZXJtaW5hdGUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGV2ZW50QXJncy5jaGVja2JveC5uYXRpdmVDaGVja2JveC5uYXRpdmVFbGVtZW50LmJsdXIoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGl0ZW1TaXplKCkge1xuICAgICAgICBsZXQgaXRlbVNpemUgPSAnNDBweCc7XG4gICAgICAgIHN3aXRjaCAodGhpcy5kaXNwbGF5RGVuc2l0eSkge1xuICAgICAgICAgICAgY2FzZSBEaXNwbGF5RGVuc2l0eS5jb3N5OiBpdGVtU2l6ZSA9ICczMnB4JzsgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIERpc3BsYXlEZW5zaXR5LmNvbXBhY3Q6IGl0ZW1TaXplID0gJzI0cHgnOyBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6IGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpdGVtU2l6ZTtcbiAgICB9XG59XG4iXX0=