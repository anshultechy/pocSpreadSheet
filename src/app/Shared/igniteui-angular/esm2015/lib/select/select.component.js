/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { IgxInputDirective, IgxInputState } from './../directives/input/input.directive';
import { Component, ContentChildren, forwardRef, QueryList, ViewChild, Input, ContentChild, HostBinding, Directive, TemplateRef, ElementRef, ChangeDetectorRef, Optional, Injector, Inject } from '@angular/core';
import { NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';
import { IgxInputGroupComponent } from '../input-group/input-group.component';
import { IgxDropDownComponent } from './../drop-down/drop-down.component';
import { IgxSelectItemComponent } from './select-item.component';
import { SelectPositioningStrategy } from './select-positioning-strategy';
import { AbsoluteScrollStrategy } from '../services/index';
import { IGX_DROPDOWN_BASE } from '../drop-down/drop-down.common';
import { IgxLabelDirective } from '../directives/label/label.directive';
import { IgxSelectionAPIService } from '../core/selection';
import { DisplayDensityToken } from '../core/density';
/**
 * @hidden \@internal
 */
export class IgxSelectToggleIconDirective {
}
IgxSelectToggleIconDirective.decorators = [
    { type: Directive, args: [{
                selector: '[igxSelectToggleIcon]'
            },] }
];
/** @type {?} */
const noop = () => { };
const ɵ0 = noop;
/**
 * **Ignite UI for Angular Select** -
 * [Documentation](https://www.infragistics.com/products/ignite-ui-angular/angular/components/select.html)
 *
 * The `igxSelect` provides an input with dropdown list allowing selection of a single item.
 *
 * Example:
 * ```html
 * <igx-select #select1 [placeholder]="'Pick One'">
 *   <label igxLabel>Select Label</label>
 *   <igx-select-item *ngFor="let item of items" [value]="item.field">
 *     {{ item.field }}
 *   </igx-select-item>
 * </igx-select>
 * ```
 */
export class IgxSelectComponent extends IgxDropDownComponent {
    /**
     * @param {?} elementRef
     * @param {?} cdr
     * @param {?} selection
     * @param {?} _displayDensityOptions
     * @param {?} _injector
     */
    constructor(elementRef, cdr, selection, _displayDensityOptions, _injector) {
        super(elementRef, cdr, selection, _displayDensityOptions);
        this.elementRef = elementRef;
        this.cdr = cdr;
        this.selection = selection;
        this._displayDensityOptions = _displayDensityOptions;
        this._injector = _injector;
        this.ngControl = null;
        /**
         * @hidden \@internal do not use the drop-down container class
         */
        this.cssClass = false;
        /**
         * @hidden \@internal
         */
        this.allowItemsFocus = false;
        /**
         * An \@Input property that disables the `IgxSelectComponent`.
         * ```html
         * <igx-select [disabled]="'true'"></igx-select>
         * ```
         */
        this.disabled = false;
        /**
         * @hidden \@internal
         */
        this.maxHeight = '256px';
        /**
         * An \@Input property that sets how the select will be styled.
         * The allowed values are `line`, `box` and `border`. The default is `line`.
         * ```html
         * <igx-select [type]="'box'"></igx-select>
         * ```
         */
        this.type = 'line';
        /**
         * An \@Input property that sets what display density to be used for the input group.
         * The allowed values are `compact`, `cosy` and `comfortable`. The default is `comfortable`.
         * ```html
         * <igx-select [displayDensity]="'compact'"></igx-select>
         * ```
         */
        this.displayDensity = 'comfortable';
        /**
         * The custom template, if any, that should be used when rendering the select TOGGLE(open/close) button
         *
         * ```typescript
         * // Set in typescript
         * const myCustomTemplate: TemplateRef<any> = myComponent.customTemplate;
         * myComponent.select.toggleIconTemplate = myCustomTemplate;
         * ```
         * ```html
         * <!-- Set in markup -->
         *  <igx-select #select>
         *      ...
         *      <ng-template igxSelectToggleIcon let-collapsed>
         *          <igx-icon>{{ collapsed ? 'remove_circle' : 'remove_circle_outline'}}</igx-icon>
         *      </ng-template>
         *  </igx-select>
         * ```
         */
        this.toggleIconTemplate = null;
        /**
         * @hidden \@internal
         */
        this._onChangeCallback = noop;
        /**
         * @hidden \@internal
         */
        this.writeValue = (value) => {
            this.value = value;
        };
    }
    /**
     * An \@Input property that gets/sets the component value.
     *
     * ```typescript
     * // get
     * let selectValue = this.select.value;
     * ```
     *
     * ```typescript
     * // set
     * this.select.value = 'London';
     * ```
     * ```html
     * <igx-select [value]="value"></igx-select>
     * ```
     * @return {?}
     */
    get value() {
        return this._value;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set value(v) {
        if (this._value === v) {
            return;
        }
        this._value = v;
        this.setSelection(this.items.find(x => x.value === this.value));
        this.cdr.detectChanges();
    }
    /**
     * @hidden \@internal
     * @return {?}
     */
    get selectionValue() {
        /** @type {?} */
        const selectedItem = this.selectedItem;
        return selectedItem ? selectedItem.itemText : '';
    }
    /**
     * @hidden \@internal
     * @return {?}
     */
    get selectedItem() {
        return this.selection.first_item(this.id);
    }
    /**
     * @hidden \@internal
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this._onChangeCallback = fn;
    }
    /**
     * @hidden \@internal
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) { }
    /**
     * @hidden \@internal
     * @return {?}
     */
    getEditElement() {
        return this.input.nativeElement;
    }
    /**
     * @hidden \@internal
     * @param {?} newSelection
     * @param {?=} event
     * @return {?}
     */
    selectItem(newSelection, event) {
        /** @type {?} */
        const oldSelection = this.selectedItem;
        if (event) {
            this.toggleDirective.close();
        }
        if (newSelection === null || newSelection === oldSelection || newSelection.disabled || newSelection.isHeader) {
            return;
        }
        /** @type {?} */
        const args = { oldSelection, newSelection, cancel: false };
        this.onSelection.emit(args);
        if (args.cancel) {
            return;
        }
        this.setSelection(newSelection);
        this._value = newSelection.value;
        this.cdr.detectChanges();
        this._onChangeCallback(this.value);
    }
    /**
     * @hidden \@internal
     * @return {?}
     */
    getFirstItemElement() {
        return this.children.first.element.nativeElement;
    }
    /**
     * Opens the select
     *
     * ```typescript
     * this.select.open();
     * ```
     * @param {?=} overlaySettings
     * @return {?}
     */
    open(overlaySettings) {
        if (this.disabled || this.items.length === 0) {
            return;
        }
        if (!this.selectedItem) {
            this.navigateFirst();
        }
        super.open(Object.assign({}, this._overlayDefaults, this.overlaySettings, overlaySettings));
    }
    /**
     * @hidden \@internal
     * @return {?}
     */
    ngAfterContentInit() {
        this._overlayDefaults = {
            modal: false,
            closeOnOutsideClick: false,
            positionStrategy: new SelectPositioningStrategy(this, { target: this.inputGroup.element.nativeElement }),
            scrollStrategy: new AbsoluteScrollStrategy(),
            excludePositionTarget: true
        };
        this.children.changes.subscribe(() => {
            this.setSelection(this.items.find(x => x.value === this.value));
            this.cdr.detectChanges();
        });
        Promise.resolve().then(() => this.children.notifyOnChanges());
    }
    /**
     * @hidden \@internal
     * @param {?} event
     * @return {?}
     */
    onToggleOpening(event) {
        this.onOpening.emit(event);
        if (event.cancel) {
            return;
        }
        this.scrollToItem(this.selectedItem);
    }
    /**
     * @protected
     * @param {?} direction
     * @param {?=} currentIndex
     * @return {?}
     */
    navigate(direction, currentIndex) {
        if (this.collapsed && this.selectedItem) {
            this.navigateItem(this.selectedItem.itemIndex);
        }
        super.navigate(direction, currentIndex);
    }
    /**
     * @protected
     * @return {?}
     */
    manageRequiredAsterisk() {
        if (this.ngControl && this.ngControl.control.validator) {
            // Run the validation with empty object to check if required is enabled.
            /** @type {?} */
            const error = this.ngControl.control.validator((/** @type {?} */ ({})));
            this.inputGroup.isRequired = error && error.required;
            this.cdr.markForCheck();
        }
    }
    /**
     * @private
     * @param {?} item
     * @return {?}
     */
    setSelection(item) {
        if (item && item.value !== undefined && item.value !== null) {
            this.selection.set(this.id, new Set([item]));
        }
        else {
            this.selection.clear(this.id);
        }
    }
    /**
     * @hidden \@internal
     * @return {?}
     */
    onBlur() {
        if (this.ngControl && !this.ngControl.valid) {
            this.input.valid = IgxInputState.INVALID;
        }
        else {
            this.input.valid = IgxInputState.INITIAL;
        }
        if (!this.collapsed) {
            this.toggleDirective.close();
        }
    }
    /**
     * @protected
     * @return {?}
     */
    onStatusChanged() {
        if ((this.ngControl.control.touched || this.ngControl.control.dirty) &&
            (this.ngControl.control.validator || this.ngControl.control.asyncValidator)) {
            if (this.inputGroup.isFocused) {
                this.input.valid = this.ngControl.valid ? IgxInputState.VALID : IgxInputState.INVALID;
            }
            else {
                this.input.valid = this.ngControl.valid ? IgxInputState.INITIAL : IgxInputState.INVALID;
            }
        }
        this.manageRequiredAsterisk();
    }
    /**
     * @hidden \@internal
     * @return {?}
     */
    ngOnInit() {
        this.ngControl = this._injector.get(NgControl, null);
    }
    /**
     * @hidden \@internal
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.ngControl) {
            this._statusChanges$ = this.ngControl.statusChanges.subscribe(this.onStatusChanged.bind(this));
            this.manageRequiredAsterisk();
        }
        this.cdr.detectChanges();
    }
    /**
     * @hidden \@internal
     * @return {?}
     */
    ngOnDestroy() {
        this.selection.clear(this.id);
        if (this._statusChanges$) {
            this._statusChanges$.unsubscribe();
        }
    }
}
IgxSelectComponent.decorators = [
    { type: Component, args: [{
                selector: 'igx-select',
                template: "<igx-input-group #inputGroup class=\"input-group\" [disabled]=\"disabled\" (click)=\"toggle()\" [type]=\"type\" [displayDensity]=\"displayDensity\">\n    <ng-container ngProjectAs=\"[igxLabel]\">\n        <ng-content select=\"[igxLabel]\"></ng-content>\n    </ng-container>\n    <ng-container ngProjectAs=\"igx-prefix\">\n        <ng-content select=\"igx-prefix,[igxPrefix]\"></ng-content>\n    </ng-container>\n        <input #input class=\"input\" type=\"text\" igxInput [igxSelectItemNavigation]=\"this\"\n            readonly=\"true\"\n            [attr.placeholder]=\"this.placeholder\"\n            [value]=\"this.selectionValue\"\n            role=\"combobox\"\n            aria-haspopup=\"listbox\"\n            [attr.aria-labelledby]=\"this.label ? this.label.id : ''\"\n            [attr.aria-expanded]=\"!this.collapsed\"\n            [attr.aria-owns]=\"this.listId\"\n            [attr.aria-activedescendant]=\"!this.collapsed ? this.focusedItem?.id : null\"\n            (blur)=\"onBlur()\"\n            />\n        <ng-container ngProjectAs=\"igx-suffix\">\n                <ng-content select=\"igx-suffix,[igxSuffix]\"></ng-content>\n            </ng-container>\n        <igx-suffix>\n            <ng-container *ngIf=\"toggleIconTemplate\">\n                <ng-container *ngTemplateOutlet=\"toggleIconTemplate; context: {$implicit: this.collapsed}\"></ng-container>\n                </ng-container>\n            <igx-icon *ngIf=\"!toggleIconTemplate\" fontSet=\"material\">{{ collapsed ? 'arrow_drop_down' : 'arrow_drop_up'}}</igx-icon>\n        </igx-suffix>\n    </igx-input-group>\n    <div class=\"igx-drop-down__list--select\" igxToggle [style.maxHeight]=\"maxHeight\"\n        (onOpening)=\"onToggleOpening($event)\" (onOpened)=\"onToggleOpened()\"\n        (onClosing)=\"onToggleClosing($event)\" (onClosed)=\"onToggleClosed()\"\n        [attr.id]=\"this.listId\" role=\"listbox\">\n        <ng-content select=\"igx-select-item, igx-select-item-group\">\n        </ng-content>\n    </div>\n",
                providers: [
                    { provide: NG_VALUE_ACCESSOR, useExisting: IgxSelectComponent, multi: true },
                    { provide: IGX_DROPDOWN_BASE, useExisting: IgxSelectComponent }
                ],
                styles: [`
        :host {
            display: block;
        }
    `]
            }] }
];
/** @nocollapse */
IgxSelectComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: IgxSelectionAPIService },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DisplayDensityToken,] }] },
    { type: Injector }
];
IgxSelectComponent.propDecorators = {
    inputGroup: [{ type: ViewChild, args: ['inputGroup', { read: IgxInputGroupComponent, static: true },] }],
    input: [{ type: ViewChild, args: ['input', { read: IgxInputDirective, static: true },] }],
    children: [{ type: ContentChildren, args: [forwardRef(() => IgxSelectItemComponent), { descendants: true },] }],
    label: [{ type: ContentChild, args: [forwardRef(() => IgxLabelDirective), { static: true },] }],
    value: [{ type: Input }],
    placeholder: [{ type: Input }],
    disabled: [{ type: Input }],
    overlaySettings: [{ type: Input }],
    maxHeight: [{ type: HostBinding, args: ['style.maxHeight',] }],
    type: [{ type: Input }],
    displayDensity: [{ type: Input }],
    toggleIconTemplate: [{ type: ContentChild, args: [IgxSelectToggleIconDirective, { read: TemplateRef, static: true },] }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    IgxSelectComponent.prototype.ngControl;
    /**
     * @type {?}
     * @private
     */
    IgxSelectComponent.prototype._statusChanges$;
    /**
     * @type {?}
     * @private
     */
    IgxSelectComponent.prototype._overlayDefaults;
    /**
     * @type {?}
     * @private
     */
    IgxSelectComponent.prototype._value;
    /**
     * @hidden \@internal do not use the drop-down container class
     * @type {?}
     */
    IgxSelectComponent.prototype.cssClass;
    /**
     * @hidden \@internal
     * @type {?}
     */
    IgxSelectComponent.prototype.inputGroup;
    /**
     * @hidden \@internal
     * @type {?}
     */
    IgxSelectComponent.prototype.input;
    /**
     * @hidden \@internal
     * @type {?}
     */
    IgxSelectComponent.prototype.children;
    /**
     * @hidden \@internal
     * @type {?}
     */
    IgxSelectComponent.prototype.label;
    /**
     * @hidden \@internal
     * @type {?}
     */
    IgxSelectComponent.prototype.allowItemsFocus;
    /**
     * @hidden \@internal
     * @type {?}
     */
    IgxSelectComponent.prototype.height;
    /**
     * An \@Input property that sets input placeholder.
     *
     * @type {?}
     */
    IgxSelectComponent.prototype.placeholder;
    /**
     * An \@Input property that disables the `IgxSelectComponent`.
     * ```html
     * <igx-select [disabled]="'true'"></igx-select>
     * ```
     * @type {?}
     */
    IgxSelectComponent.prototype.disabled;
    /**
     * An \@Input property that sets custom OverlaySettings `IgxSelectComponent`.
     * ```html
     * <igx-select [overlaySettings] = "customOverlaySettings"></igx-select>
     * ```
     * @type {?}
     */
    IgxSelectComponent.prototype.overlaySettings;
    /**
     * @hidden \@internal
     * @type {?}
     */
    IgxSelectComponent.prototype.maxHeight;
    /**
     * @hidden \@internal
     * @type {?}
     */
    IgxSelectComponent.prototype.width;
    /**
     * An \@Input property that sets how the select will be styled.
     * The allowed values are `line`, `box` and `border`. The default is `line`.
     * ```html
     * <igx-select [type]="'box'"></igx-select>
     * ```
     * @type {?}
     */
    IgxSelectComponent.prototype.type;
    /**
     * An \@Input property that sets what display density to be used for the input group.
     * The allowed values are `compact`, `cosy` and `comfortable`. The default is `comfortable`.
     * ```html
     * <igx-select [displayDensity]="'compact'"></igx-select>
     * ```
     * @type {?}
     */
    IgxSelectComponent.prototype.displayDensity;
    /**
     * The custom template, if any, that should be used when rendering the select TOGGLE(open/close) button
     *
     * ```typescript
     * // Set in typescript
     * const myCustomTemplate: TemplateRef<any> = myComponent.customTemplate;
     * myComponent.select.toggleIconTemplate = myCustomTemplate;
     * ```
     * ```html
     * <!-- Set in markup -->
     *  <igx-select #select>
     *      ...
     *      <ng-template igxSelectToggleIcon let-collapsed>
     *          <igx-icon>{{ collapsed ? 'remove_circle' : 'remove_circle_outline'}}</igx-icon>
     *      </ng-template>
     *  </igx-select>
     * ```
     * @type {?}
     */
    IgxSelectComponent.prototype.toggleIconTemplate;
    /**
     * @hidden \@internal
     * @type {?}
     * @private
     */
    IgxSelectComponent.prototype._onChangeCallback;
    /**
     * @hidden \@internal
     * @type {?}
     */
    IgxSelectComponent.prototype.writeValue;
    /**
     * @type {?}
     * @protected
     */
    IgxSelectComponent.prototype.elementRef;
    /**
     * @type {?}
     * @protected
     */
    IgxSelectComponent.prototype.cdr;
    /**
     * @type {?}
     * @protected
     */
    IgxSelectComponent.prototype.selection;
    /**
     * @type {?}
     * @protected
     */
    IgxSelectComponent.prototype._displayDensityOptions;
    /**
     * @type {?}
     * @private
     */
    IgxSelectComponent.prototype._injector;
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvc2VsZWN0L3NlbGVjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxhQUFhLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUN6RixPQUFPLEVBQ0gsU0FBUyxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUMvRCxXQUFXLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUM5RixRQUFRLEVBQW9DLE1BQU0sRUFFckQsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxTQUFTLEVBQW1CLE1BQU0sZ0JBQWdCLENBQUM7QUFJckcsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFOUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDMUUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDakUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFMUUsT0FBTyxFQUFtQixzQkFBc0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzVFLE9BQU8sRUFBRSxpQkFBaUIsRUFBaUMsTUFBTSwrQkFBK0IsQ0FBQztBQUVqRyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUd4RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsbUJBQW1CLEVBQTBCLE1BQU0saUJBQWlCLENBQUM7Ozs7QUFNOUUsTUFBTSxPQUFPLDRCQUE0Qjs7O1lBSHhDLFNBQVMsU0FB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QUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7Ozs7Ozs7SUE1SC9FLHVDQUFvQzs7Ozs7SUFDcEMsNkNBQXNDOzs7OztJQUN0Qyw4Q0FBMEM7Ozs7O0lBQzFDLG9DQUFvQjs7Ozs7SUFHcEIsc0NBQXdCOzs7OztJQUd4Qix3Q0FBbUg7Ozs7O0lBR25ILG1DQUErRjs7Ozs7SUFHL0Ysc0NBQ21EOzs7OztJQUduRCxtQ0FBOEY7Ozs7O0lBRzlGLDZDQUErQjs7Ozs7SUFHL0Isb0NBQXNCOzs7Ozs7SUFrQ3RCLHlDQUE0Qjs7Ozs7Ozs7SUFTNUIsc0NBQWlDOzs7Ozs7OztJQVFqQyw2Q0FDaUM7Ozs7O0lBR2pDLHVDQUMyQjs7Ozs7SUFHM0IsbUNBQXFCOzs7Ozs7Ozs7SUFTckIsa0NBQ3FCOzs7Ozs7Ozs7SUFTckIsNENBQ3NDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQW9CdEMsZ0RBQ21EOzs7Ozs7SUF3Qm5ELCtDQUFtRDs7Ozs7SUFHbkQsd0NBRUM7Ozs7O0lBZkcsd0NBQWdDOzs7OztJQUNoQyxpQ0FBZ0M7Ozs7O0lBQ2hDLHVDQUEyQzs7Ozs7SUFFM0Msb0RBQWlHOzs7OztJQUNqRyx1Q0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJZ3hJbnB1dERpcmVjdGl2ZSwgSWd4SW5wdXRTdGF0ZSB9IGZyb20gJy4vLi4vZGlyZWN0aXZlcy9pbnB1dC9pbnB1dC5kaXJlY3RpdmUnO1xuaW1wb3J0IHtcbiAgICBDb21wb25lbnQsIENvbnRlbnRDaGlsZHJlbiwgZm9yd2FyZFJlZiwgUXVlcnlMaXN0LCBWaWV3Q2hpbGQsIElucHV0LCBDb250ZW50Q2hpbGQsXG4gICAgQWZ0ZXJDb250ZW50SW5pdCwgSG9zdEJpbmRpbmcsIERpcmVjdGl2ZSwgVGVtcGxhdGVSZWYsIEVsZW1lbnRSZWYsIENoYW5nZURldGVjdG9yUmVmLCBPcHRpb25hbCxcbiAgICBJbmplY3RvciwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIEluamVjdFxuXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SLCBOZ0NvbnRyb2wsIEFic3RyYWN0Q29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBJZ3hEcm9wRG93bkl0ZW1CYXNlIH0gZnJvbSAnLi4vZHJvcC1kb3duL2luZGV4JztcbmltcG9ydCB7IElneElucHV0R3JvdXBDb21wb25lbnQgfSBmcm9tICcuLi9pbnB1dC1ncm91cC9pbnB1dC1ncm91cC5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBJZ3hEcm9wRG93bkNvbXBvbmVudCB9IGZyb20gJy4vLi4vZHJvcC1kb3duL2Ryb3AtZG93bi5jb21wb25lbnQnO1xuaW1wb3J0IHsgSWd4U2VsZWN0SXRlbUNvbXBvbmVudCB9IGZyb20gJy4vc2VsZWN0LWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IFNlbGVjdFBvc2l0aW9uaW5nU3RyYXRlZ3kgfSBmcm9tICcuL3NlbGVjdC1wb3NpdGlvbmluZy1zdHJhdGVneSc7XG5cbmltcG9ydCB7IE92ZXJsYXlTZXR0aW5ncywgQWJzb2x1dGVTY3JvbGxTdHJhdGVneSB9IGZyb20gJy4uL3NlcnZpY2VzL2luZGV4JztcbmltcG9ydCB7IElHWF9EUk9QRE9XTl9CQVNFLCBJU2VsZWN0aW9uRXZlbnRBcmdzLCBOYXZpZ2F0ZSB9IGZyb20gJy4uL2Ryb3AtZG93bi9kcm9wLWRvd24uY29tbW9uJztcbmltcG9ydCB7IENhbmNlbGFibGVFdmVudEFyZ3MgfSBmcm9tICcuLi9jb3JlL3V0aWxzJztcbmltcG9ydCB7IElneExhYmVsRGlyZWN0aXZlIH0gZnJvbSAnLi4vZGlyZWN0aXZlcy9sYWJlbC9sYWJlbC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgSWd4U2VsZWN0QmFzZSB9IGZyb20gJy4vc2VsZWN0LmNvbW1vbic7XG5pbXBvcnQgeyBFZGl0b3JQcm92aWRlciB9IGZyb20gJy4uL2NvcmUvZWRpdC1wcm92aWRlcic7XG5pbXBvcnQgeyBJZ3hTZWxlY3Rpb25BUElTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZS9zZWxlY3Rpb24nO1xuaW1wb3J0IHsgRGlzcGxheURlbnNpdHlUb2tlbiwgSURpc3BsYXlEZW5zaXR5T3B0aW9ucyB9IGZyb20gJy4uL2NvcmUvZGVuc2l0eSc7XG5cbi8qKiBAaGlkZGVuIEBpbnRlcm5hbCAqL1xuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbaWd4U2VsZWN0VG9nZ2xlSWNvbl0nXG59KVxuZXhwb3J0IGNsYXNzIElneFNlbGVjdFRvZ2dsZUljb25EaXJlY3RpdmUge1xufVxuXG5jb25zdCBub29wID0gKCkgPT4geyB9O1xuXG4vKipcbiAqICoqSWduaXRlIFVJIGZvciBBbmd1bGFyIFNlbGVjdCoqIC1cbiAqIFtEb2N1bWVudGF0aW9uXShodHRwczovL3d3dy5pbmZyYWdpc3RpY3MuY29tL3Byb2R1Y3RzL2lnbml0ZS11aS1hbmd1bGFyL2FuZ3VsYXIvY29tcG9uZW50cy9zZWxlY3QuaHRtbClcbiAqXG4gKiBUaGUgYGlneFNlbGVjdGAgcHJvdmlkZXMgYW4gaW5wdXQgd2l0aCBkcm9wZG93biBsaXN0IGFsbG93aW5nIHNlbGVjdGlvbiBvZiBhIHNpbmdsZSBpdGVtLlxuICpcbiAqIEV4YW1wbGU6XG4gKiBgYGBodG1sXG4gKiA8aWd4LXNlbGVjdCAjc2VsZWN0MSBbcGxhY2Vob2xkZXJdPVwiJ1BpY2sgT25lJ1wiPlxuICogICA8bGFiZWwgaWd4TGFiZWw+U2VsZWN0IExhYmVsPC9sYWJlbD5cbiAqICAgPGlneC1zZWxlY3QtaXRlbSAqbmdGb3I9XCJsZXQgaXRlbSBvZiBpdGVtc1wiIFt2YWx1ZV09XCJpdGVtLmZpZWxkXCI+XG4gKiAgICAge3sgaXRlbS5maWVsZCB9fVxuICogICA8L2lneC1zZWxlY3QtaXRlbT5cbiAqIDwvaWd4LXNlbGVjdD5cbiAqIGBgYFxuICovXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2lneC1zZWxlY3QnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9zZWxlY3QuY29tcG9uZW50Lmh0bWwnLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7IHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLCB1c2VFeGlzdGluZzogSWd4U2VsZWN0Q29tcG9uZW50LCBtdWx0aTogdHJ1ZSB9LFxuICAgICAgICB7IHByb3ZpZGU6IElHWF9EUk9QRE9XTl9CQVNFLCB1c2VFeGlzdGluZzogSWd4U2VsZWN0Q29tcG9uZW50IH1dLFxuICAgIHN0eWxlczogW2BcbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICBgXVxufSlcbmV4cG9ydCBjbGFzcyBJZ3hTZWxlY3RDb21wb25lbnQgZXh0ZW5kcyBJZ3hEcm9wRG93bkNvbXBvbmVudCBpbXBsZW1lbnRzIElneFNlbGVjdEJhc2UsIENvbnRyb2xWYWx1ZUFjY2Vzc29yLFxuICAgIEFmdGVyQ29udGVudEluaXQsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBFZGl0b3JQcm92aWRlciB7XG5cbiAgICBwcml2YXRlIG5nQ29udHJvbDogTmdDb250cm9sID0gbnVsbDtcbiAgICBwcml2YXRlIF9zdGF0dXNDaGFuZ2VzJDogU3Vic2NyaXB0aW9uO1xuICAgIHByaXZhdGUgX292ZXJsYXlEZWZhdWx0czogT3ZlcmxheVNldHRpbmdzO1xuICAgIHByaXZhdGUgX3ZhbHVlOiBhbnk7XG5cbiAgICAvKiogQGhpZGRlbiBAaW50ZXJuYWwgZG8gbm90IHVzZSB0aGUgZHJvcC1kb3duIGNvbnRhaW5lciBjbGFzcyAqL1xuICAgIHB1YmxpYyBjc3NDbGFzcyA9IGZhbHNlO1xuXG4gICAgLyoqIEBoaWRkZW4gQGludGVybmFsICovXG4gICAgQFZpZXdDaGlsZCgnaW5wdXRHcm91cCcsIHsgcmVhZDogSWd4SW5wdXRHcm91cENvbXBvbmVudCwgc3RhdGljOiB0cnVlIH0pIHB1YmxpYyBpbnB1dEdyb3VwOiBJZ3hJbnB1dEdyb3VwQ29tcG9uZW50O1xuXG4gICAgLyoqIEBoaWRkZW4gQGludGVybmFsICovXG4gICAgQFZpZXdDaGlsZCgnaW5wdXQnLCB7IHJlYWQ6IElneElucHV0RGlyZWN0aXZlLCBzdGF0aWM6IHRydWUgfSkgcHVibGljIGlucHV0OiBJZ3hJbnB1dERpcmVjdGl2ZTtcblxuICAgIC8qKiBAaGlkZGVuIEBpbnRlcm5hbCAqL1xuICAgIEBDb250ZW50Q2hpbGRyZW4oZm9yd2FyZFJlZigoKSA9PiBJZ3hTZWxlY3RJdGVtQ29tcG9uZW50KSwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KVxuICAgIHB1YmxpYyBjaGlsZHJlbjogUXVlcnlMaXN0PElneFNlbGVjdEl0ZW1Db21wb25lbnQ+O1xuXG4gICAgLyoqIEBoaWRkZW4gQGludGVybmFsICovXG4gICAgQENvbnRlbnRDaGlsZChmb3J3YXJkUmVmKCgpID0+IElneExhYmVsRGlyZWN0aXZlKSwgeyBzdGF0aWM6IHRydWUgfSkgbGFiZWw6IElneExhYmVsRGlyZWN0aXZlO1xuXG4gICAgLyoqIEBoaWRkZW4gQGludGVybmFsICovXG4gICAgcHVibGljIGFsbG93SXRlbXNGb2N1cyA9IGZhbHNlO1xuXG4gICAgLyoqIEBoaWRkZW4gQGludGVybmFsICovXG4gICAgcHVibGljIGhlaWdodDogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQW4gQElucHV0IHByb3BlcnR5IHRoYXQgZ2V0cy9zZXRzIHRoZSBjb21wb25lbnQgdmFsdWUuXG4gICAgICpcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogLy8gZ2V0XG4gICAgICogbGV0IHNlbGVjdFZhbHVlID0gdGhpcy5zZWxlY3QudmFsdWU7XG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogLy8gc2V0XG4gICAgICogdGhpcy5zZWxlY3QudmFsdWUgPSAnTG9uZG9uJztcbiAgICAgKiBgYGBcbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1zZWxlY3QgW3ZhbHVlXT1cInZhbHVlXCI+PC9pZ3gtc2VsZWN0PlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCB2YWx1ZSgpOiBhbnkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgdmFsdWUodjogYW55KSB7XG4gICAgICAgIGlmICh0aGlzLl92YWx1ZSA9PT0gdikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gdjtcbiAgICAgICAgdGhpcy5zZXRTZWxlY3Rpb24odGhpcy5pdGVtcy5maW5kKHggPT4geC52YWx1ZSA9PT0gdGhpcy52YWx1ZSkpO1xuICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFuIEBJbnB1dCBwcm9wZXJ0eSB0aGF0IHNldHMgaW5wdXQgcGxhY2Vob2xkZXIuXG4gICAgICpcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgcGxhY2Vob2xkZXI7XG5cblxuICAgIC8qKlxuICAgICAqIEFuIEBJbnB1dCBwcm9wZXJ0eSB0aGF0IGRpc2FibGVzIHRoZSBgSWd4U2VsZWN0Q29tcG9uZW50YC5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1zZWxlY3QgW2Rpc2FibGVkXT1cIid0cnVlJ1wiPjwvaWd4LXNlbGVjdD5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwdWJsaWMgZGlzYWJsZWQgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIEFuIEBJbnB1dCBwcm9wZXJ0eSB0aGF0IHNldHMgY3VzdG9tIE92ZXJsYXlTZXR0aW5ncyBgSWd4U2VsZWN0Q29tcG9uZW50YC5cbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlneC1zZWxlY3QgW292ZXJsYXlTZXR0aW5nc10gPSBcImN1c3RvbU92ZXJsYXlTZXR0aW5nc1wiPjwvaWd4LXNlbGVjdD5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIG92ZXJsYXlTZXR0aW5nczogT3ZlcmxheVNldHRpbmdzO1xuXG4gICAgLyoqIEBoaWRkZW4gQGludGVybmFsICovXG4gICAgQEhvc3RCaW5kaW5nKCdzdHlsZS5tYXhIZWlnaHQnKVxuICAgIHB1YmxpYyBtYXhIZWlnaHQgPSAnMjU2cHgnO1xuXG4gICAgLyoqIEBoaWRkZW4gQGludGVybmFsICovXG4gICAgcHVibGljIHdpZHRoOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBBbiBASW5wdXQgcHJvcGVydHkgdGhhdCBzZXRzIGhvdyB0aGUgc2VsZWN0IHdpbGwgYmUgc3R5bGVkLlxuICAgICAqIFRoZSBhbGxvd2VkIHZhbHVlcyBhcmUgYGxpbmVgLCBgYm94YCBhbmQgYGJvcmRlcmAuIFRoZSBkZWZhdWx0IGlzIGBsaW5lYC5cbiAgICAgKiBgYGBodG1sXG4gICAgICo8aWd4LXNlbGVjdCBbdHlwZV09XCInYm94J1wiPjwvaWd4LXNlbGVjdD5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyB0eXBlID0gJ2xpbmUnO1xuXG4gICAgLyoqXG4gICAgICogQW4gQElucHV0IHByb3BlcnR5IHRoYXQgc2V0cyB3aGF0IGRpc3BsYXkgZGVuc2l0eSB0byBiZSB1c2VkIGZvciB0aGUgaW5wdXQgZ3JvdXAuXG4gICAgICogVGhlIGFsbG93ZWQgdmFsdWVzIGFyZSBgY29tcGFjdGAsIGBjb3N5YCBhbmQgYGNvbWZvcnRhYmxlYC4gVGhlIGRlZmF1bHQgaXMgYGNvbWZvcnRhYmxlYC5cbiAgICAgKiBgYGBodG1sXG4gICAgICo8aWd4LXNlbGVjdCBbZGlzcGxheURlbnNpdHldPVwiJ2NvbXBhY3QnXCI+PC9pZ3gtc2VsZWN0PlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGRpc3BsYXlEZW5zaXR5ID0gJ2NvbWZvcnRhYmxlJztcblxuICAgIC8qKlxuICAgICAqIFRoZSBjdXN0b20gdGVtcGxhdGUsIGlmIGFueSwgdGhhdCBzaG91bGQgYmUgdXNlZCB3aGVuIHJlbmRlcmluZyB0aGUgc2VsZWN0IFRPR0dMRShvcGVuL2Nsb3NlKSBidXR0b25cbiAgICAgKlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiAvLyBTZXQgaW4gdHlwZXNjcmlwdFxuICAgICAqIGNvbnN0IG15Q3VzdG9tVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4gPSBteUNvbXBvbmVudC5jdXN0b21UZW1wbGF0ZTtcbiAgICAgKiBteUNvbXBvbmVudC5zZWxlY3QudG9nZ2xlSWNvblRlbXBsYXRlID0gbXlDdXN0b21UZW1wbGF0ZTtcbiAgICAgKiBgYGBcbiAgICAgKiBgYGBodG1sXG4gICAgICogPCEtLSBTZXQgaW4gbWFya3VwIC0tPlxuICAgICAqICA8aWd4LXNlbGVjdCAjc2VsZWN0PlxuICAgICAqICAgICAgLi4uXG4gICAgICogICAgICA8bmctdGVtcGxhdGUgaWd4U2VsZWN0VG9nZ2xlSWNvbiBsZXQtY29sbGFwc2VkPlxuICAgICAqICAgICAgICAgIDxpZ3gtaWNvbj57eyBjb2xsYXBzZWQgPyAncmVtb3ZlX2NpcmNsZScgOiAncmVtb3ZlX2NpcmNsZV9vdXRsaW5lJ319PC9pZ3gtaWNvbj5cbiAgICAgKiAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICogIDwvaWd4LXNlbGVjdD5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBAQ29udGVudENoaWxkKElneFNlbGVjdFRvZ2dsZUljb25EaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuICAgIHB1YmxpYyB0b2dnbGVJY29uVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4gPSBudWxsO1xuXG4gICAgLyoqIEBoaWRkZW4gQGludGVybmFsICovXG4gICAgcHVibGljIGdldCBzZWxlY3Rpb25WYWx1ZSgpIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRJdGVtID0gdGhpcy5zZWxlY3RlZEl0ZW07XG4gICAgICAgIHJldHVybiBzZWxlY3RlZEl0ZW0gPyBzZWxlY3RlZEl0ZW0uaXRlbVRleHQgOiAnJztcbiAgICB9XG5cbiAgICAvKiogQGhpZGRlbiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgZ2V0IHNlbGVjdGVkSXRlbSgpOiBJZ3hTZWxlY3RJdGVtQ29tcG9uZW50IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0aW9uLmZpcnN0X2l0ZW0odGhpcy5pZCk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgICAgICBwcm90ZWN0ZWQgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICAgICAgcHJvdGVjdGVkIHNlbGVjdGlvbjogSWd4U2VsZWN0aW9uQVBJU2VydmljZSxcblxuICAgICAgICBAT3B0aW9uYWwoKSBASW5qZWN0KERpc3BsYXlEZW5zaXR5VG9rZW4pIHByb3RlY3RlZCBfZGlzcGxheURlbnNpdHlPcHRpb25zOiBJRGlzcGxheURlbnNpdHlPcHRpb25zLFxuICAgICAgICBwcml2YXRlIF9pbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgICAgICAgc3VwZXIoZWxlbWVudFJlZiwgY2RyLCBzZWxlY3Rpb24sIF9kaXNwbGF5RGVuc2l0eU9wdGlvbnMpO1xuICAgIH1cblxuICAgIC8qKiBAaGlkZGVuIEBpbnRlcm5hbCAqL1xuICAgIHByaXZhdGUgX29uQ2hhbmdlQ2FsbGJhY2s6IChfOiBhbnkpID0+IHZvaWQgPSBub29wO1xuXG4gICAgLyoqIEBoaWRkZW4gQGludGVybmFsICovXG4gICAgcHVibGljIHdyaXRlVmFsdWUgPSAodmFsdWU6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqIEBoaWRkZW4gQGludGVybmFsICovXG4gICAgcHVibGljIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLl9vbkNoYW5nZUNhbGxiYWNrID0gZm47XG4gICAgfVxuXG4gICAgLyoqIEBoaWRkZW4gQGludGVybmFsICovXG4gICAgcHVibGljIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHsgfVxuXG4gICAgLyoqIEBoaWRkZW4gQGludGVybmFsICovXG4gICAgcHVibGljIGdldEVkaXRFbGVtZW50KCk6IEhUTUxFbGVtZW50IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudDtcbiAgICB9XG5cbiAgICAvKiogQGhpZGRlbiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgc2VsZWN0SXRlbShuZXdTZWxlY3Rpb246IElneERyb3BEb3duSXRlbUJhc2UsIGV2ZW50Pykge1xuICAgICAgICBjb25zdCBvbGRTZWxlY3Rpb24gPSB0aGlzLnNlbGVjdGVkSXRlbTtcblxuICAgICAgICBpZiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlRGlyZWN0aXZlLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5ld1NlbGVjdGlvbiA9PT0gbnVsbCB8fCBuZXdTZWxlY3Rpb24gPT09IG9sZFNlbGVjdGlvbiB8fCBuZXdTZWxlY3Rpb24uZGlzYWJsZWQgfHwgbmV3U2VsZWN0aW9uLmlzSGVhZGVyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhcmdzOiBJU2VsZWN0aW9uRXZlbnRBcmdzID0geyBvbGRTZWxlY3Rpb24sIG5ld1NlbGVjdGlvbiwgY2FuY2VsOiBmYWxzZSB9O1xuICAgICAgICB0aGlzLm9uU2VsZWN0aW9uLmVtaXQoYXJncyk7XG5cbiAgICAgICAgaWYgKGFyZ3MuY2FuY2VsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFNlbGVjdGlvbihuZXdTZWxlY3Rpb24pO1xuICAgICAgICB0aGlzLl92YWx1ZSA9IG5ld1NlbGVjdGlvbi52YWx1ZTtcbiAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICB0aGlzLl9vbkNoYW5nZUNhbGxiYWNrKHRoaXMudmFsdWUpO1xuICAgIH1cblxuICAgIC8qKiBAaGlkZGVuIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBnZXRGaXJzdEl0ZW1FbGVtZW50KCk6IEhUTUxFbGVtZW50IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hpbGRyZW4uZmlyc3QuZWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE9wZW5zIHRoZSBzZWxlY3RcbiAgICAgKlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiB0aGlzLnNlbGVjdC5vcGVuKCk7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgcHVibGljIG9wZW4ob3ZlcmxheVNldHRpbmdzPzogT3ZlcmxheVNldHRpbmdzKSB7XG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkIHx8IHRoaXMuaXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLnNlbGVjdGVkSXRlbSkge1xuICAgICAgICAgICAgdGhpcy5uYXZpZ2F0ZUZpcnN0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBzdXBlci5vcGVuKE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX292ZXJsYXlEZWZhdWx0cywgdGhpcy5vdmVybGF5U2V0dGluZ3MsIG92ZXJsYXlTZXR0aW5ncykpO1xuICAgIH1cblxuICAgIC8qKiBAaGlkZGVuIEBpbnRlcm5hbCAqL1xuICAgIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICAgICAgdGhpcy5fb3ZlcmxheURlZmF1bHRzID0ge1xuICAgICAgICAgICAgbW9kYWw6IGZhbHNlLFxuICAgICAgICAgICAgY2xvc2VPbk91dHNpZGVDbGljazogZmFsc2UsXG4gICAgICAgICAgICBwb3NpdGlvblN0cmF0ZWd5OiBuZXcgU2VsZWN0UG9zaXRpb25pbmdTdHJhdGVneSh0aGlzLCB7IHRhcmdldDogdGhpcy5pbnB1dEdyb3VwLmVsZW1lbnQubmF0aXZlRWxlbWVudCB9KSxcbiAgICAgICAgICAgIHNjcm9sbFN0cmF0ZWd5OiBuZXcgQWJzb2x1dGVTY3JvbGxTdHJhdGVneSgpLFxuICAgICAgICAgICAgZXhjbHVkZVBvc2l0aW9uVGFyZ2V0OiB0cnVlXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY2hpbGRyZW4uY2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTZWxlY3Rpb24odGhpcy5pdGVtcy5maW5kKHggPT4geC52YWx1ZSA9PT0gdGhpcy52YWx1ZSkpO1xuICAgICAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICB9KTtcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB0aGlzLmNoaWxkcmVuLm5vdGlmeU9uQ2hhbmdlcygpKTtcbiAgICB9XG5cbiAgICAvKiogQGhpZGRlbiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgb25Ub2dnbGVPcGVuaW5nKGV2ZW50OiBDYW5jZWxhYmxlRXZlbnRBcmdzKSB7XG4gICAgICAgIHRoaXMub25PcGVuaW5nLmVtaXQoZXZlbnQpO1xuICAgICAgICBpZiAoZXZlbnQuY2FuY2VsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zY3JvbGxUb0l0ZW0odGhpcy5zZWxlY3RlZEl0ZW0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBuYXZpZ2F0ZShkaXJlY3Rpb246IE5hdmlnYXRlLCBjdXJyZW50SW5kZXg/OiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuY29sbGFwc2VkICYmIHRoaXMuc2VsZWN0ZWRJdGVtKSB7XG4gICAgICAgICAgICB0aGlzLm5hdmlnYXRlSXRlbSh0aGlzLnNlbGVjdGVkSXRlbS5pdGVtSW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIHN1cGVyLm5hdmlnYXRlKGRpcmVjdGlvbiwgY3VycmVudEluZGV4KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgbWFuYWdlUmVxdWlyZWRBc3RlcmlzaygpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmdDb250cm9sICYmIHRoaXMubmdDb250cm9sLmNvbnRyb2wudmFsaWRhdG9yKSB7XG4gICAgICAgICAgICAvLyBSdW4gdGhlIHZhbGlkYXRpb24gd2l0aCBlbXB0eSBvYmplY3QgdG8gY2hlY2sgaWYgcmVxdWlyZWQgaXMgZW5hYmxlZC5cbiAgICAgICAgICAgIGNvbnN0IGVycm9yID0gdGhpcy5uZ0NvbnRyb2wuY29udHJvbC52YWxpZGF0b3Ioe30gYXMgQWJzdHJhY3RDb250cm9sKTtcbiAgICAgICAgICAgIHRoaXMuaW5wdXRHcm91cC5pc1JlcXVpcmVkID0gZXJyb3IgJiYgZXJyb3IucmVxdWlyZWQ7XG4gICAgICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIHNldFNlbGVjdGlvbihpdGVtOiBJZ3hEcm9wRG93bkl0ZW1CYXNlKSB7XG4gICAgICAgIGlmIChpdGVtICYmIGl0ZW0udmFsdWUgIT09IHVuZGVmaW5lZCAmJiBpdGVtLnZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGlvbi5zZXQodGhpcy5pZCwgbmV3IFNldChbaXRlbV0pKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uLmNsZWFyKHRoaXMuaWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqIEBoaWRkZW4gQGludGVybmFsICovXG4gICAgcHVibGljIG9uQmx1cigpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubmdDb250cm9sICYmICF0aGlzLm5nQ29udHJvbC52YWxpZCkge1xuICAgICAgICAgICAgIHRoaXMuaW5wdXQudmFsaWQgPSBJZ3hJbnB1dFN0YXRlLklOVkFMSUQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmlucHV0LnZhbGlkID0gSWd4SW5wdXRTdGF0ZS5JTklUSUFMO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5jb2xsYXBzZWQpIHtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlRGlyZWN0aXZlLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25TdGF0dXNDaGFuZ2VkKCkge1xuICAgICAgICBpZiAoKHRoaXMubmdDb250cm9sLmNvbnRyb2wudG91Y2hlZCB8fCB0aGlzLm5nQ29udHJvbC5jb250cm9sLmRpcnR5KSAmJlxuICAgICAgICAgICAgKHRoaXMubmdDb250cm9sLmNvbnRyb2wudmFsaWRhdG9yIHx8IHRoaXMubmdDb250cm9sLmNvbnRyb2wuYXN5bmNWYWxpZGF0b3IpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pbnB1dEdyb3VwLmlzRm9jdXNlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5wdXQudmFsaWQgPSB0aGlzLm5nQ29udHJvbC52YWxpZCA/IElneElucHV0U3RhdGUuVkFMSUQgOiBJZ3hJbnB1dFN0YXRlLklOVkFMSUQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5wdXQudmFsaWQgPSB0aGlzLm5nQ29udHJvbC52YWxpZCA/IElneElucHV0U3RhdGUuSU5JVElBTCA6IElneElucHV0U3RhdGUuSU5WQUxJRDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1hbmFnZVJlcXVpcmVkQXN0ZXJpc2soKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQGhpZGRlbiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMubmdDb250cm9sID0gdGhpcy5faW5qZWN0b3IuZ2V0KE5nQ29udHJvbCwgbnVsbCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlbiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICBpZiAodGhpcy5uZ0NvbnRyb2wpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXR1c0NoYW5nZXMkID0gdGhpcy5uZ0NvbnRyb2wuc3RhdHVzQ2hhbmdlcy5zdWJzY3JpYmUodGhpcy5vblN0YXR1c0NoYW5nZWQuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICB0aGlzLm1hbmFnZVJlcXVpcmVkQXN0ZXJpc2soKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlbiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uLmNsZWFyKHRoaXMuaWQpO1xuICAgICAgICBpZiAodGhpcy5fc3RhdHVzQ2hhbmdlcyQpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXR1c0NoYW5nZXMkLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbiJdfQ==