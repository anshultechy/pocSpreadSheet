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
export class IgxExcelStyleSearchComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        requestAnimationFrame(() => {
            this.virtDir.recalcUpdateSizes();
        });
    }
    /**
     * @return {?}
     */
    clearInput() {
        this.searchValue = null;
    }
    /**
     * @param {?} eventArgs
     * @return {?}
     */
    onCheckboxChange(eventArgs) {
        /** @type {?} */
        const selectedIndex = this.data.indexOf(eventArgs.checkbox.value);
        if (selectedIndex === 0) {
            this.data.forEach(element => {
                element.isSelected = eventArgs.checked;
                this.data[0].indeterminate = false;
            });
        }
        else {
            eventArgs.checkbox.value.isSelected = eventArgs.checked;
            if (!this.data.slice(1, this.data.length).find(el => el.isSelected === false)) {
                this.data[0].indeterminate = false;
                this.data[0].isSelected = true;
            }
            else if (!this.data.slice(1, this.data.length).find(el => el.isSelected === true)) {
                this.data[0].indeterminate = false;
                this.data[0].isSelected = false;
            }
            else {
                this.data[0].indeterminate = true;
            }
        }
        eventArgs.checkbox.nativeCheckbox.nativeElement.blur();
    }
    /**
     * @return {?}
     */
    get itemSize() {
        /** @type {?} */
        let itemSize = '40px';
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
    }
}
IgxExcelStyleSearchComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                selector: 'igx-excel-style-search',
                template: "<igx-input-group\n            type=\"box\"\n            [displayDensity]=\"displayDensity\"\n            [supressInputAutofocus]=\"true\">\n    <igx-icon igxPrefix>search</igx-icon>\n    <input\n        #input\n        igxInput\n        tabindex=\"0\"\n        [(ngModel)]=\"searchValue\"\n        [placeholder]=\"column.grid.resourceStrings.igx_grid_excel_search_placeholder\"\n        autocomplete=\"off\"/>\n    <igx-icon\n        igxSuffix\n        *ngIf=\"searchValue || searchValue === 0\"\n        (click)=\"clearInput()\"\n        tabindex=\"0\">\n        clear\n    </igx-icon>\n</igx-input-group>\n\n        <igx-list [displayDensity]=\"displayDensity\" [style.height.px]=\"250\">\n            <div [style.overflow]=\"'hidden'\" [style.position]=\"'relative'\">\n                <igx-list-item\n                    *igxFor=\"let item of data | excelStyleSearchFilter: searchValue; scrollOrientation : 'vertical'; containerSize: '250px'; itemSize: itemSize\">\n                    <igx-checkbox\n                    [value]=\"item\"\n                    tabindex=\"-1\"\n                    [checked]=\"item.isSelected\"\n                    [disableRipple]=\"true\"\n                    [indeterminate]=\"item.indeterminate\"\n                    [disableTransitions]=\"true\"\n                    (change)=\"onCheckboxChange($event)\">\n                        {{ column.formatter && !item.isSpecial ? column.formatter(item.label) : column.dataType === 'number' ? (item.label | igxdecimal:\n                            column.grid.locale) : column.dataType === 'date' ? (item.label | igxdate: column.grid.locale) : item.label }}\n                    </igx-checkbox>\n                </igx-list-item>\n            </div>\n        </igx-list>\n"
            }] }
];
/** @nocollapse */
IgxExcelStyleSearchComponent.ctorParameters = () => [];
IgxExcelStyleSearchComponent.propDecorators = {
    data: [{ type: Input }],
    column: [{ type: Input }],
    searchInput: [{ type: ViewChild, args: ['input', { read: IgxInputDirective, static: true },] }],
    displayDensity: [{ type: Input }],
    virtDir: [{ type: ViewChild, args: [IgxForOfDirective, { static: true },] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZWwtc3R5bGUtc2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvZ3JpZHMvZmlsdGVyaW5nL2V4Y2VsLXN0eWxlL2V4Y2VsLXN0eWxlLXNlYXJjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFSCxTQUFTLEVBQ1QsdUJBQXVCLEVBQ3ZCLEtBQUssRUFDTCxTQUFTLEVBQ1osTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFHNUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDOUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDOzs7O0FBWWhGLE1BQU0sT0FBTyw0QkFBNEI7SUFtQnJDLGdCQUFnQixDQUFDOzs7O0lBRVYsZUFBZTtRQUNsQixxQkFBcUIsQ0FBQyxHQUFHLEVBQUU7WUFDdkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3JDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQzs7OztJQUVNLFVBQVU7UUFDYixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztJQUM1QixDQUFDOzs7OztJQUVNLGdCQUFnQixDQUFDLFNBQW1DOztjQUNqRCxhQUFhLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7UUFDakUsSUFBSSxhQUFhLEtBQUssQ0FBQyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUN4QixPQUFPLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUM7Z0JBQ3ZDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUN2QyxDQUFDLENBQUMsQ0FBQztTQUNOO2FBQU07WUFDSCxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQztZQUN4RCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFVBQVUsS0FBSyxLQUFLLENBQUMsRUFBRTtnQkFDM0UsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO2dCQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7YUFDbEM7aUJBQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEtBQUssSUFBSSxDQUFDLEVBQUU7Z0JBQ2pGLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztnQkFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO2FBQ25DO2lCQUFNO2dCQUNILElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQzthQUNyQztTQUNKO1FBQ0QsU0FBUyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzNELENBQUM7Ozs7SUFFRCxJQUFXLFFBQVE7O1lBQ1gsUUFBUSxHQUFHLE1BQU07UUFDckIsUUFBUSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3pCLEtBQUssY0FBYyxDQUFDLElBQUk7Z0JBQUUsUUFBUSxHQUFHLE1BQU0sQ0FBQztnQkFBQyxNQUFNO1lBQ25ELEtBQUssY0FBYyxDQUFDLE9BQU87Z0JBQUUsUUFBUSxHQUFHLE1BQU0sQ0FBQztnQkFBQyxNQUFNO1lBQ3RELE9BQU8sQ0FBQyxDQUFDLE1BQU07U0FDbEI7UUFDRCxPQUFPLFFBQVEsQ0FBQztJQUNwQixDQUFDOzs7WUFuRUosU0FBUyxTQUFDO2dCQUNQLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyxxdURBQWtEO2FBQ3JEOzs7OzttQkFLSSxLQUFLO3FCQUdMLEtBQUs7MEJBR0wsU0FBUyxTQUFDLE9BQU8sRUFBRSxFQUFFLElBQUksRUFBRSxpQkFBaUIsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOzZCQUc1RCxLQUFLO3NCQUdMLFNBQVMsU0FBQyxpQkFBaUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7Ozs7SUFkOUMsbURBQXdCOztJQUV4Qiw0Q0FDOEI7O0lBRTlCLDhDQUNrQzs7SUFFbEMsbURBQ3NDOztJQUV0QyxzREFDc0M7Ozs7O0lBRXRDLCtDQUMwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgQWZ0ZXJWaWV3SW5pdCxcbiAgICBDb21wb25lbnQsXG4gICAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gICAgSW5wdXQsXG4gICAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSWd4Q29sdW1uQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29sdW1uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJZ3hGaWx0ZXJPcHRpb25zIH0gZnJvbSAnLi4vLi4vLi4vZGlyZWN0aXZlcy9maWx0ZXIvZmlsdGVyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBJQ2hhbmdlQ2hlY2tib3hFdmVudEFyZ3MgfSBmcm9tICcuLi8uLi8uLi9jaGVja2JveC9jaGVja2JveC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSWd4SW5wdXREaXJlY3RpdmUgfSBmcm9tICcuLi8uLi8uLi9kaXJlY3RpdmVzL2lucHV0L2lucHV0LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBEaXNwbGF5RGVuc2l0eSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZGVuc2l0eSc7XG5pbXBvcnQgeyBJZ3hGb3JPZkRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uLy4uL2RpcmVjdGl2ZXMvZm9yLW9mL2Zvcl9vZi5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRmlsdGVyTGlzdEl0ZW0gfSBmcm9tICcuL2dyaWQuZXhjZWwtc3R5bGUtZmlsdGVyaW5nLmNvbXBvbmVudCc7XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5AQ29tcG9uZW50KHtcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgICBzZWxlY3RvcjogJ2lneC1leGNlbC1zdHlsZS1zZWFyY2gnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9leGNlbC1zdHlsZS1zZWFyY2guY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIElneEV4Y2VsU3R5bGVTZWFyY2hDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcblxuICAgIHB1YmxpYyBzZWFyY2hWYWx1ZTogYW55O1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZGF0YTogRmlsdGVyTGlzdEl0ZW1bXTtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGNvbHVtbjogSWd4Q29sdW1uQ29tcG9uZW50O1xuXG4gICAgQFZpZXdDaGlsZCgnaW5wdXQnLCB7IHJlYWQ6IElneElucHV0RGlyZWN0aXZlLCBzdGF0aWM6IHRydWUgfSlcbiAgICBwdWJsaWMgc2VhcmNoSW5wdXQ6IElneElucHV0RGlyZWN0aXZlO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZGlzcGxheURlbnNpdHk6IERpc3BsYXlEZW5zaXR5O1xuXG4gICAgQFZpZXdDaGlsZChJZ3hGb3JPZkRpcmVjdGl2ZSwgeyBzdGF0aWM6IHRydWUgfSlcbiAgICBwcm90ZWN0ZWQgdmlydERpcjogSWd4Rm9yT2ZEaXJlY3RpdmU8YW55PjtcblxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy52aXJ0RGlyLnJlY2FsY1VwZGF0ZVNpemVzKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbGVhcklucHV0KCkge1xuICAgICAgICB0aGlzLnNlYXJjaFZhbHVlID0gbnVsbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25DaGVja2JveENoYW5nZShldmVudEFyZ3M6IElDaGFuZ2VDaGVja2JveEV2ZW50QXJncykge1xuICAgICAgICBjb25zdCBzZWxlY3RlZEluZGV4ID0gdGhpcy5kYXRhLmluZGV4T2YoZXZlbnRBcmdzLmNoZWNrYm94LnZhbHVlKTtcbiAgICAgICAgaWYgKHNlbGVjdGVkSW5kZXggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuaXNTZWxlY3RlZCA9IGV2ZW50QXJncy5jaGVja2VkO1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0YVswXS5pbmRldGVybWluYXRlID0gZmFsc2U7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGV2ZW50QXJncy5jaGVja2JveC52YWx1ZS5pc1NlbGVjdGVkID0gZXZlbnRBcmdzLmNoZWNrZWQ7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZGF0YS5zbGljZSgxLCB0aGlzLmRhdGEubGVuZ3RoKS5maW5kKGVsID0+IGVsLmlzU2VsZWN0ZWQgPT09IGZhbHNlKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0YVswXS5pbmRldGVybWluYXRlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhWzBdLmlzU2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIGlmICghdGhpcy5kYXRhLnNsaWNlKDEsIHRoaXMuZGF0YS5sZW5ndGgpLmZpbmQoZWwgPT4gZWwuaXNTZWxlY3RlZCA9PT0gdHJ1ZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFbMF0uaW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0YVswXS5pc1NlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0YVswXS5pbmRldGVybWluYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBldmVudEFyZ3MuY2hlY2tib3gubmF0aXZlQ2hlY2tib3gubmF0aXZlRWxlbWVudC5ibHVyKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBpdGVtU2l6ZSgpIHtcbiAgICAgICAgbGV0IGl0ZW1TaXplID0gJzQwcHgnO1xuICAgICAgICBzd2l0Y2ggKHRoaXMuZGlzcGxheURlbnNpdHkpIHtcbiAgICAgICAgICAgIGNhc2UgRGlzcGxheURlbnNpdHkuY29zeTogaXRlbVNpemUgPSAnMzJweCc7IGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBEaXNwbGF5RGVuc2l0eS5jb21wYWN0OiBpdGVtU2l6ZSA9ICcyNHB4JzsgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OiBicmVhaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaXRlbVNpemU7XG4gICAgfVxufVxuIl19