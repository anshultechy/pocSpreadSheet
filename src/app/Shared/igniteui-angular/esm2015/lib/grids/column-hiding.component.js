/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, EventEmitter, Input, NgModule, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IgxCheckboxModule } from '../checkbox/checkbox.component';
import { IgxButtonModule } from '../directives/button/button.directive';
import { IgxColumnHidingItemDirective } from './column-hiding-item.directive';
import { IgxInputGroupModule } from '../input-group/input-group.component';
import { ColumnChooserBase } from './column-chooser-base';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
export class IgxColumnHidingComponent extends ColumnChooserBase {
    /**
     * @param {?} cdr
     */
    constructor(cdr) {
        super(cdr);
        this.cdr = cdr;
        /**
         * Sets/gets the text of the button that shows all columns if they are hidden.
         * ```typescript
         * let showAllButtonText =  this.columnHiding.showAllText;
         * ```
         *
         * ```html
         * <igx-column-hiding [showAllText] = "'Show Columns'"></igx-column-hiding>
         * ```
         * \@memberof IgxColumnHidingComponent
         */
        this.showAllText = 'Show All';
        /**
         * Sets/gets the text of the button that hides all columns if they are shown.
         * ```typescript
         * let hideAllButtonText =  this.columnHiding.hideAllText;
         * ```
         *
         * ```html
         * <igx-column-hiding [hideAllText] = "'Hide Columns'"></igx-column-hiding>
         * ```
         * \@memberof IgxColumnHidingComponent
         */
        this.hideAllText = 'Hide All';
        /**
         * An event that is emitted after the columns visibility is changed.
         * Provides references to the `column` and the `newValue` properties as event arguments.
         * ```html
         *  <igx-column-hiding (onColumnVisibilityChanged) = "onColumnVisibilityChanged($event)"></igx-column-hiding>
         * ```
         * \@memberof IgxColumnHidingComponent
         */
        this.onColumnVisibilityChanged = new EventEmitter();
        this.destroy$ = new Subject();
    }
    /**
     * Returns a boolean indicating whether the `HIDE ALL` button is disabled.
     * ```html
     * <igx-column-hiding #columnHidingUI
     *     [columns]="grid.columns" [title]="'Column Hiding'">
     * </igx-column-hiding>
     * ```
     * ```typescript
     * \@ViewChild("'columnHidingUI'")
     * public columnHiding: IgxColumnHidingComponent;
     * let isHideAlldisabled =  this.columnHiding.disableHideAll;
     * ```
     * \@memberof IgxColumnHidingComponent
     * @return {?}
     */
    get disableHideAll() {
        if (!this.columnItems || this.columnItems.length < 1 ||
            this.hiddenColumnsCount === this.columns.length) {
            return true;
        }
        else if (this.hidableColumns.length < 1 ||
            this.hidableColumns.length === this.hidableColumns.filter((col) => col.value).length) {
            return true;
        }
        else {
            return false;
        }
    }
    /**
     * Returns a boolean indicating whether the `SHOW ALL` button is disabled.
     * ```typescript
     * let isShowAlldisabled =  this.columnHiding.disableShowAll;
     * ```
     * \@memberof IgxColumnHidingComponent
     * @return {?}
     */
    get disableShowAll() {
        if (!this.columnItems || this.columnItems.length < 1 ||
            this.hiddenColumnsCount < 1 || this.hidableColumns.length < 1) {
            return true;
        }
        else if (this.hidableColumns.length === this.hidableColumns.filter((col) => !col.value).length) {
            return true;
        }
        else {
            return false;
        }
    }
    /**
     * Gets the count of the hidden columns.
     * ```typescript
     * let hiddenColumnsCount =  this.columnHiding.hiddenColumnsCount;
     * ```
     * \@memberof IgxColumnHidingComponent
     * @return {?}
     */
    get hiddenColumnsCount() {
        return (this.columns) ? this.columns.filter((col) => col.hidden).length : 0;
    }
    /**
     * @hidden
     * @return {?}
     */
    get hidableColumns() {
        return this.columnItems.filter((col) => !col.disabled);
    }
    /**
     * @hidden
     * @protected
     * @param {?} container
     * @param {?} column
     * @return {?}
     */
    createColumnItem(container, column) {
        if (column.grid.hasColumnLayouts && !column.columnLayout) {
            return null;
        }
        /** @type {?} */
        const item = new IgxColumnHidingItemDirective();
        item.container = container;
        item.column = column;
        item.valueChanged.pipe(takeUntil(this.destroy$)).subscribe((args) => {
            this.onVisibilityChanged({ column: item.column, newValue: args.newValue });
        });
        return item;
    }
    /**
     * Shows all columns in the grid.
     * ```typescript
     * this.columnHiding.showAllColumns();
     * ```
     * \@memberof IgxColumnHidingComponent
     * @return {?}
     */
    showAllColumns() {
        for (const col of this.hidableColumns) {
            col.value = false;
        }
    }
    /**
     * Hides all columns in the grid.
     * ```typescript
     * this.columnHiding.hideAllColumns();
     * ```
     * \@memberof IgxColumnHidingComponent
     * @return {?}
     */
    hideAllColumns() {
        for (const col of this.hidableColumns) {
            col.value = true;
        }
    }
    /**
     * @hidden
     * @param {?} args
     * @return {?}
     */
    onVisibilityChanged(args) {
        this.onColumnVisibilityChanged.emit(args);
    }
    /**
     * @hidden
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
}
IgxColumnHidingComponent.decorators = [
    { type: Component, args: [{
                preserveWhitespaces: false,
                selector: 'igx-column-hiding',
                template: "<div class=\"igx-column-hiding__header\">\n    <h4 class=\"igx-column-hiding__header-title\" *ngIf=\"title\">{{ title }}</h4>\n\n    <igx-input-group class=\"igx-column-hiding__header-input\" *ngIf=\"!disableFilter\">\n        <input igxInput\n            type=\"text\"\n            [(ngModel)]=\"filterCriteria\"\n            [placeholder]=\"filterColumnsPrompt\"\n            autocomplete=\"off\" />\n    </igx-input-group>\n</div>\n\n<div class=\"igx-column-hiding__columns\"\n    [style.max-height]=\"columnsAreaMaxHeight\">\n    <igx-checkbox\n        *ngFor=\"let columnItem of hidableColumns\"\n        class=\"igx-column-hiding__columns-item\"\n        (onColumnVisibilityChanged)=\"onVisibilityChanged($event)\"\n        (change)=\"columnItem.value = !columnItem.value\"\n        [checked]=\"columnItem.value\"\n        [disabled]=\"columnItem.disabled\"\n        [style.margin-left.px]=\"columnItem.calcIndent\">\n        {{ columnItem.name }}\n    </igx-checkbox>\n</div>\n\n<div class=\"igx-column-hiding__buttons\">\n    <button igxButton igxRipple (click)=\"showAllColumns()\" [disabled]=\"disableShowAll\">{{ showAllText }}</button>\n    <button igxButton igxRipple (click)=\"hideAllColumns()\" [disabled]=\"disableHideAll\">{{ hideAllText }}</button>\n</div>\n"
            }] }
];
/** @nocollapse */
IgxColumnHidingComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
IgxColumnHidingComponent.propDecorators = {
    disableHideAll: [{ type: Input }],
    disableShowAll: [{ type: Input }],
    showAllText: [{ type: Input }],
    hideAllText: [{ type: Input }],
    onColumnVisibilityChanged: [{ type: Output }]
};
if (false) {
    /**
     * Sets/gets the text of the button that shows all columns if they are hidden.
     * ```typescript
     * let showAllButtonText =  this.columnHiding.showAllText;
     * ```
     *
     * ```html
     * <igx-column-hiding [showAllText] = "'Show Columns'"></igx-column-hiding>
     * ```
     * \@memberof IgxColumnHidingComponent
     * @type {?}
     */
    IgxColumnHidingComponent.prototype.showAllText;
    /**
     * Sets/gets the text of the button that hides all columns if they are shown.
     * ```typescript
     * let hideAllButtonText =  this.columnHiding.hideAllText;
     * ```
     *
     * ```html
     * <igx-column-hiding [hideAllText] = "'Hide Columns'"></igx-column-hiding>
     * ```
     * \@memberof IgxColumnHidingComponent
     * @type {?}
     */
    IgxColumnHidingComponent.prototype.hideAllText;
    /**
     * An event that is emitted after the columns visibility is changed.
     * Provides references to the `column` and the `newValue` properties as event arguments.
     * ```html
     *  <igx-column-hiding (onColumnVisibilityChanged) = "onColumnVisibilityChanged($event)"></igx-column-hiding>
     * ```
     * \@memberof IgxColumnHidingComponent
     * @type {?}
     */
    IgxColumnHidingComponent.prototype.onColumnVisibilityChanged;
    /**
     * @type {?}
     * @private
     */
    IgxColumnHidingComponent.prototype.destroy$;
    /** @type {?} */
    IgxColumnHidingComponent.prototype.cdr;
}
/**
 * @hidden
 */
export class IgxColumnHidingModule {
}
IgxColumnHidingModule.decorators = [
    { type: NgModule, args: [{
                declarations: [IgxColumnHidingComponent, IgxColumnHidingItemDirective],
                exports: [IgxColumnHidingComponent],
                imports: [
                    IgxButtonModule,
                    IgxCheckboxModule,
                    IgxInputGroupModule,
                    CommonModule,
                    FormsModule,
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLWhpZGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pZ25pdGV1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2dyaWRzL2NvbHVtbi1oaWRpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUNILGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFDTCxRQUFRLEVBQ1IsTUFBTSxFQUVULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNuRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDeEUsT0FBTyxFQUFxQyw0QkFBNEIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ2pILE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBTy9CLE1BQU0sT0FBTyx3QkFBeUIsU0FBUSxpQkFBaUI7Ozs7SUE0RjNELFlBQW1CLEdBQXNCO1FBQ3JDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQURJLFFBQUcsR0FBSCxHQUFHLENBQW1COzs7Ozs7Ozs7Ozs7UUFuQ2xDLGdCQUFXLEdBQUcsVUFBVSxDQUFDOzs7Ozs7Ozs7Ozs7UUFhekIsZ0JBQVcsR0FBRyxVQUFVLENBQUM7Ozs7Ozs7OztRQVV6Qiw4QkFBeUIsR0FBRyxJQUFJLFlBQVksRUFBcUMsQ0FBQztRQXVCakYsYUFB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Ozs7Ozs7O0lBUU0sY0FBYztRQUNqQixLQUFLLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDbkMsR0FBRyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7U0FDcEI7SUFDTCxDQUFDOzs7Ozs7SUFJTSxtQkFBbUIsQ0FBQyxJQUF1QztRQUM5RCxJQUFJLENBQUMseUJBQXlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlDLENBQUM7Ozs7O0lBS00sV0FBVztRQUNkLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDN0IsQ0FBQzs7O1lBbktKLFNBQVMsU0FBQztnQkFDUCxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixRQUFRLEVBQUUsbUJBQW1CO2dCQUM3Qix3d0NBQTZDO2FBQ2hEOzs7O1lBckJHLGlCQUFpQjs7OzZCQXFDaEIsS0FBSzs2QkFtQkwsS0FBSzswQkFzQkwsS0FBSzswQkFhTCxLQUFLO3dDQVVMLE1BQU07Ozs7Ozs7Ozs7Ozs7OztJQXZCUCwrQ0FDZ0M7Ozs7Ozs7Ozs7Ozs7SUFZaEMsK0NBQ2dDOzs7Ozs7Ozs7O0lBU2hDLDZEQUN5Rjs7Ozs7SUF1QnpGLDRDQUEwQzs7SUFYOUIsdUNBQTZCOzs7OztBQW1GN0MsTUFBTSxPQUFPLHFCQUFxQjs7O1lBWGpDLFFBQVEsU0FBQztnQkFDTixZQUFZLEVBQUUsQ0FBQyx3QkFBd0IsRUFBRSw0QkFBNEIsQ0FBQztnQkFDdEUsT0FBTyxFQUFFLENBQUMsd0JBQXdCLENBQUM7Z0JBQ25DLE9BQU8sRUFBRTtvQkFDTCxlQUFlO29CQUNmLGlCQUFpQjtvQkFDakIsbUJBQW1CO29CQUNuQixZQUFZO29CQUNaLFdBQVc7aUJBQ2Q7YUFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICAgIENoYW5nZURldGVjdG9yUmVmLFxuICAgIENvbXBvbmVudCxcbiAgICBFdmVudEVtaXR0ZXIsXG4gICAgSW5wdXQsXG4gICAgTmdNb2R1bGUsXG4gICAgT3V0cHV0LFxuICAgIE9uRGVzdHJveVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgSWd4Q2hlY2tib3hNb2R1bGUgfSBmcm9tICcuLi9jaGVja2JveC9jaGVja2JveC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSWd4QnV0dG9uTW9kdWxlIH0gZnJvbSAnLi4vZGlyZWN0aXZlcy9idXR0b24vYnV0dG9uLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBJQ29sdW1uVmlzaWJpbGl0eUNoYW5nZWRFdmVudEFyZ3MsIElneENvbHVtbkhpZGluZ0l0ZW1EaXJlY3RpdmUgfSBmcm9tICcuL2NvbHVtbi1oaWRpbmctaXRlbS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgSWd4SW5wdXRHcm91cE1vZHVsZSB9IGZyb20gJy4uL2lucHV0LWdyb3VwL2lucHV0LWdyb3VwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb2x1bW5DaG9vc2VyQmFzZSB9IGZyb20gJy4vY29sdW1uLWNob29zZXItYmFzZSc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICAgIHNlbGVjdG9yOiAnaWd4LWNvbHVtbi1oaWRpbmcnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9jb2x1bW4taGlkaW5nLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBJZ3hDb2x1bW5IaWRpbmdDb21wb25lbnQgZXh0ZW5kcyBDb2x1bW5DaG9vc2VyQmFzZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIGJvb2xlYW4gaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBgSElERSBBTExgIGJ1dHRvbiBpcyBkaXNhYmxlZC5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1jb2x1bW4taGlkaW5nICNjb2x1bW5IaWRpbmdVSVxuICAgICAqICAgICBbY29sdW1uc109XCJncmlkLmNvbHVtbnNcIiBbdGl0bGVdPVwiJ0NvbHVtbiBIaWRpbmcnXCI+XG4gICAgICogPC9pZ3gtY29sdW1uLWhpZGluZz5cbiAgICAgKiBgYGBcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogQFZpZXdDaGlsZChcIidjb2x1bW5IaWRpbmdVSSdcIilcbiAgICAgKiBwdWJsaWMgY29sdW1uSGlkaW5nOiBJZ3hDb2x1bW5IaWRpbmdDb21wb25lbnQ7XG4gICAgICogbGV0IGlzSGlkZUFsbGRpc2FibGVkID0gIHRoaXMuY29sdW1uSGlkaW5nLmRpc2FibGVIaWRlQWxsO1xuICAgICAqIGBgYFxuICAgICAqQG1lbWJlcm9mIElneENvbHVtbkhpZGluZ0NvbXBvbmVudFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgZ2V0IGRpc2FibGVIaWRlQWxsKCk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAoIXRoaXMuY29sdW1uSXRlbXMgfHwgdGhpcy5jb2x1bW5JdGVtcy5sZW5ndGggPCAxIHx8XG4gICAgICAgICAgICB0aGlzLmhpZGRlbkNvbHVtbnNDb3VudCA9PT0gdGhpcy5jb2x1bW5zLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5oaWRhYmxlQ29sdW1ucy5sZW5ndGggPCAxIHx8XG4gICAgICAgICAgICB0aGlzLmhpZGFibGVDb2x1bW5zLmxlbmd0aCA9PT0gdGhpcy5oaWRhYmxlQ29sdW1ucy5maWx0ZXIoKGNvbCkgPT4gY29sLnZhbHVlKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBib29sZWFuIGluZGljYXRpbmcgd2hldGhlciB0aGUgYFNIT1cgQUxMYCBidXR0b24gaXMgZGlzYWJsZWQuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBpc1Nob3dBbGxkaXNhYmxlZCA9ICB0aGlzLmNvbHVtbkhpZGluZy5kaXNhYmxlU2hvd0FsbDtcbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4Q29sdW1uSGlkaW5nQ29tcG9uZW50XG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBnZXQgZGlzYWJsZVNob3dBbGwoKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICghdGhpcy5jb2x1bW5JdGVtcyB8fCB0aGlzLmNvbHVtbkl0ZW1zLmxlbmd0aCA8IDEgfHxcbiAgICAgICAgICAgIHRoaXMuaGlkZGVuQ29sdW1uc0NvdW50IDwgMSB8fCB0aGlzLmhpZGFibGVDb2x1bW5zLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaGlkYWJsZUNvbHVtbnMubGVuZ3RoID09PSB0aGlzLmhpZGFibGVDb2x1bW5zLmZpbHRlcigoY29sKSA9PiAhY29sLnZhbHVlKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMvZ2V0cyB0aGUgdGV4dCBvZiB0aGUgYnV0dG9uIHRoYXQgc2hvd3MgYWxsIGNvbHVtbnMgaWYgdGhleSBhcmUgaGlkZGVuLlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgc2hvd0FsbEJ1dHRvblRleHQgPSAgdGhpcy5jb2x1bW5IaWRpbmcuc2hvd0FsbFRleHQ7XG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1jb2x1bW4taGlkaW5nIFtzaG93QWxsVGV4dF0gPSBcIidTaG93IENvbHVtbnMnXCI+PC9pZ3gtY29sdW1uLWhpZGluZz5cbiAgICAgKiBgYGBcbiAgICAgKiBAbWVtYmVyb2YgSWd4Q29sdW1uSGlkaW5nQ29tcG9uZW50XG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2hvd0FsbFRleHQgPSAnU2hvdyBBbGwnO1xuICAgIC8qKlxuICAgICAqIFNldHMvZ2V0cyB0aGUgdGV4dCBvZiB0aGUgYnV0dG9uIHRoYXQgaGlkZXMgYWxsIGNvbHVtbnMgaWYgdGhleSBhcmUgc2hvd24uXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBoaWRlQWxsQnV0dG9uVGV4dCA9ICB0aGlzLmNvbHVtbkhpZGluZy5oaWRlQWxsVGV4dDtcbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWNvbHVtbi1oaWRpbmcgW2hpZGVBbGxUZXh0XSA9IFwiJ0hpZGUgQ29sdW1ucydcIj48L2lneC1jb2x1bW4taGlkaW5nPlxuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hDb2x1bW5IaWRpbmdDb21wb25lbnRcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBoaWRlQWxsVGV4dCA9ICdIaWRlIEFsbCc7XG4gICAgLyoqXG4gICAgICogQW4gZXZlbnQgdGhhdCBpcyBlbWl0dGVkIGFmdGVyIHRoZSBjb2x1bW5zIHZpc2liaWxpdHkgaXMgY2hhbmdlZC5cbiAgICAgKiBQcm92aWRlcyByZWZlcmVuY2VzIHRvIHRoZSBgY29sdW1uYCBhbmQgdGhlIGBuZXdWYWx1ZWAgcHJvcGVydGllcyBhcyBldmVudCBhcmd1bWVudHMuXG4gICAgICogYGBgaHRtbFxuICAgICAqICA8aWd4LWNvbHVtbi1oaWRpbmcgKG9uQ29sdW1uVmlzaWJpbGl0eUNoYW5nZWQpID0gXCJvbkNvbHVtblZpc2liaWxpdHlDaGFuZ2VkKCRldmVudClcIj48L2lneC1jb2x1bW4taGlkaW5nPlxuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hDb2x1bW5IaWRpbmdDb21wb25lbnRcbiAgICAgKi9cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgb25Db2x1bW5WaXNpYmlsaXR5Q2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8SUNvbHVtblZpc2liaWxpdHlDaGFuZ2VkRXZlbnRBcmdzPigpO1xuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGNvdW50IG9mIHRoZSBoaWRkZW4gY29sdW1ucy5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGhpZGRlbkNvbHVtbnNDb3VudCA9ICB0aGlzLmNvbHVtbkhpZGluZy5oaWRkZW5Db2x1bW5zQ291bnQ7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneENvbHVtbkhpZGluZ0NvbXBvbmVudFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgaGlkZGVuQ29sdW1uc0NvdW50KCkge1xuICAgICAgICByZXR1cm4gKHRoaXMuY29sdW1ucykgPyB0aGlzLmNvbHVtbnMuZmlsdGVyKChjb2wpID0+IGNvbC5oaWRkZW4pLmxlbmd0aCA6IDA7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocHVibGljIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICAgICAgc3VwZXIoY2RyKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKkBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IGhpZGFibGVDb2x1bW5zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2x1bW5JdGVtcy5maWx0ZXIoKGNvbCkgPT4gIWNvbC5kaXNhYmxlZCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG4gICAgLyoqXG4gICAgICpAaGlkZGVuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGNyZWF0ZUNvbHVtbkl0ZW0oY29udGFpbmVyOiBhbnksIGNvbHVtbjogYW55KSB7XG4gICAgICAgIGlmIChjb2x1bW4uZ3JpZC5oYXNDb2x1bW5MYXlvdXRzICYmICFjb2x1bW4uY29sdW1uTGF5b3V0KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpdGVtID0gbmV3IElneENvbHVtbkhpZGluZ0l0ZW1EaXJlY3RpdmUoKTtcbiAgICAgICAgaXRlbS5jb250YWluZXIgPSBjb250YWluZXI7XG4gICAgICAgIGl0ZW0uY29sdW1uID0gY29sdW1uO1xuXG4gICAgICAgIGl0ZW0udmFsdWVDaGFuZ2VkLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKGFyZ3MpID0+IHtcbiAgICAgICAgICAgIHRoaXMub25WaXNpYmlsaXR5Q2hhbmdlZCh7IGNvbHVtbjogaXRlbS5jb2x1bW4sIG5ld1ZhbHVlOiBhcmdzLm5ld1ZhbHVlIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gaXRlbTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2hvd3MgYWxsIGNvbHVtbnMgaW4gdGhlIGdyaWQuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIHRoaXMuY29sdW1uSGlkaW5nLnNob3dBbGxDb2x1bW5zKCk7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneENvbHVtbkhpZGluZ0NvbXBvbmVudFxuICAgICAqL1xuICAgIHB1YmxpYyBzaG93QWxsQ29sdW1ucygpIHtcbiAgICAgICAgZm9yIChjb25zdCBjb2wgb2YgdGhpcy5oaWRhYmxlQ29sdW1ucykge1xuICAgICAgICAgICAgY29sLnZhbHVlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogSGlkZXMgYWxsIGNvbHVtbnMgaW4gdGhlIGdyaWQuXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIHRoaXMuY29sdW1uSGlkaW5nLmhpZGVBbGxDb2x1bW5zKCk7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneENvbHVtbkhpZGluZ0NvbXBvbmVudFxuICAgICAqL1xuICAgIHB1YmxpYyBoaWRlQWxsQ29sdW1ucygpIHtcbiAgICAgICAgZm9yIChjb25zdCBjb2wgb2YgdGhpcy5oaWRhYmxlQ29sdW1ucykge1xuICAgICAgICAgICAgY29sLnZhbHVlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIG9uVmlzaWJpbGl0eUNoYW5nZWQoYXJnczogSUNvbHVtblZpc2liaWxpdHlDaGFuZ2VkRXZlbnRBcmdzKSB7XG4gICAgICAgIHRoaXMub25Db2x1bW5WaXNpYmlsaXR5Q2hhbmdlZC5lbWl0KGFyZ3MpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqQGhpZGRlblxuICAgICAqL1xuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kZXN0cm95JC5uZXh0KHRydWUpO1xuICAgICAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gICAgfVxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtJZ3hDb2x1bW5IaWRpbmdDb21wb25lbnQsIElneENvbHVtbkhpZGluZ0l0ZW1EaXJlY3RpdmVdLFxuICAgIGV4cG9ydHM6IFtJZ3hDb2x1bW5IaWRpbmdDb21wb25lbnRdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgSWd4QnV0dG9uTW9kdWxlLFxuICAgICAgICBJZ3hDaGVja2JveE1vZHVsZSxcbiAgICAgICAgSWd4SW5wdXRHcm91cE1vZHVsZSxcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICBGb3Jtc01vZHVsZSxcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIElneENvbHVtbkhpZGluZ01vZHVsZSB7XG59XG4iXX0=