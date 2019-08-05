/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var IgxSelectToggleIconDirective = /** @class */ (function () {
    function IgxSelectToggleIconDirective() {
    }
    IgxSelectToggleIconDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[igxSelectToggleIcon]'
                },] }
    ];
    return IgxSelectToggleIconDirective;
}());
export { IgxSelectToggleIconDirective };
/** @type {?} */
var noop = function () { };
var ɵ0 = noop;
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
var IgxSelectComponent = /** @class */ (function (_super) {
    tslib_1.__extends(IgxSelectComponent, _super);
    function IgxSelectComponent(elementRef, cdr, selection, _displayDensityOptions, _injector) {
        var _this = _super.call(this, elementRef, cdr, selection, _displayDensityOptions) || this;
        _this.elementRef = elementRef;
        _this.cdr = cdr;
        _this.selection = selection;
        _this._displayDensityOptions = _displayDensityOptions;
        _this._injector = _injector;
        _this.ngControl = null;
        /**
         * @hidden \@internal do not use the drop-down container class
         */
        _this.cssClass = false;
        /**
         * @hidden \@internal
         */
        _this.allowItemsFocus = false;
        /**
         * An \@Input property that disables the `IgxSelectComponent`.
         * ```html
         * <igx-select [disabled]="'true'"></igx-select>
         * ```
         */
        _this.disabled = false;
        /**
         * @hidden \@internal
         */
        _this.maxHeight = '256px';
        /**
         * An \@Input property that sets how the select will be styled.
         * The allowed values are `line`, `box` and `border`. The default is `line`.
         * ```html
         * <igx-select [type]="'box'"></igx-select>
         * ```
         */
        _this.type = 'line';
        /**
         * An \@Input property that sets what display density to be used for the input group.
         * The allowed values are `compact`, `cosy` and `comfortable`. The default is `comfortable`.
         * ```html
         * <igx-select [displayDensity]="'compact'"></igx-select>
         * ```
         */
        _this.displayDensity = 'comfortable';
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
        _this.toggleIconTemplate = null;
        /**
         * @hidden \@internal
         */
        _this._onChangeCallback = noop;
        /**
         * @hidden \@internal
         */
        _this.writeValue = function (value) {
            _this.value = value;
        };
        return _this;
    }
    Object.defineProperty(IgxSelectComponent.prototype, "value", {
        /**
         * An @Input property that gets/sets the component value.
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
         */
        get: /**
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
        function () {
            return this._value;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            var _this = this;
            if (this._value === v) {
                return;
            }
            this._value = v;
            this.setSelection(this.items.find(function (x) { return x.value === _this.value; }));
            this.cdr.detectChanges();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxSelectComponent.prototype, "selectionValue", {
        /** @hidden @internal */
        get: /**
         * @hidden \@internal
         * @return {?}
         */
        function () {
            /** @type {?} */
            var selectedItem = this.selectedItem;
            return selectedItem ? selectedItem.itemText : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxSelectComponent.prototype, "selectedItem", {
        /** @hidden @internal */
        get: /**
         * @hidden \@internal
         * @return {?}
         */
        function () {
            return this.selection.first_item(this.id);
        },
        enumerable: true,
        configurable: true
    });
    /** @hidden @internal */
    /**
     * @hidden \@internal
     * @param {?} fn
     * @return {?}
     */
    IgxSelectComponent.prototype.registerOnChange = /**
     * @hidden \@internal
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onChangeCallback = fn;
    };
    /** @hidden @internal */
    /**
     * @hidden \@internal
     * @param {?} fn
     * @return {?}
     */
    IgxSelectComponent.prototype.registerOnTouched = /**
     * @hidden \@internal
     * @param {?} fn
     * @return {?}
     */
    function (fn) { };
    /** @hidden @internal */
    /**
     * @hidden \@internal
     * @return {?}
     */
    IgxSelectComponent.prototype.getEditElement = /**
     * @hidden \@internal
     * @return {?}
     */
    function () {
        return this.input.nativeElement;
    };
    /** @hidden @internal */
    /**
     * @hidden \@internal
     * @param {?} newSelection
     * @param {?=} event
     * @return {?}
     */
    IgxSelectComponent.prototype.selectItem = /**
     * @hidden \@internal
     * @param {?} newSelection
     * @param {?=} event
     * @return {?}
     */
    function (newSelection, event) {
        /** @type {?} */
        var oldSelection = this.selectedItem;
        if (event) {
            this.toggleDirective.close();
        }
        if (newSelection === null || newSelection === oldSelection || newSelection.disabled || newSelection.isHeader) {
            return;
        }
        /** @type {?} */
        var args = { oldSelection: oldSelection, newSelection: newSelection, cancel: false };
        this.onSelection.emit(args);
        if (args.cancel) {
            return;
        }
        this.setSelection(newSelection);
        this._value = newSelection.value;
        this.cdr.detectChanges();
        this._onChangeCallback(this.value);
    };
    /** @hidden @internal */
    /**
     * @hidden \@internal
     * @return {?}
     */
    IgxSelectComponent.prototype.getFirstItemElement = /**
     * @hidden \@internal
     * @return {?}
     */
    function () {
        return this.children.first.element.nativeElement;
    };
    /**
     * Opens the select
     *
     * ```typescript
     * this.select.open();
     * ```
     */
    /**
     * Opens the select
     *
     * ```typescript
     * this.select.open();
     * ```
     * @param {?=} overlaySettings
     * @return {?}
     */
    IgxSelectComponent.prototype.open = /**
     * Opens the select
     *
     * ```typescript
     * this.select.open();
     * ```
     * @param {?=} overlaySettings
     * @return {?}
     */
    function (overlaySettings) {
        if (this.disabled || this.items.length === 0) {
            return;
        }
        if (!this.selectedItem) {
            this.navigateFirst();
        }
        _super.prototype.open.call(this, Object.assign({}, this._overlayDefaults, this.overlaySettings, overlaySettings));
    };
    /** @hidden @internal */
    /**
     * @hidden \@internal
     * @return {?}
     */
    IgxSelectComponent.prototype.ngAfterContentInit = /**
     * @hidden \@internal
     * @return {?}
     */
    function () {
        var _this = this;
        this._overlayDefaults = {
            modal: false,
            closeOnOutsideClick: false,
            positionStrategy: new SelectPositioningStrategy(this, { target: this.inputGroup.element.nativeElement }),
            scrollStrategy: new AbsoluteScrollStrategy(),
            excludePositionTarget: true
        };
        this.children.changes.subscribe(function () {
            _this.setSelection(_this.items.find(function (x) { return x.value === _this.value; }));
            _this.cdr.detectChanges();
        });
        Promise.resolve().then(function () { return _this.children.notifyOnChanges(); });
    };
    /** @hidden @internal */
    /**
     * @hidden \@internal
     * @param {?} event
     * @return {?}
     */
    IgxSelectComponent.prototype.onToggleOpening = /**
     * @hidden \@internal
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.onOpening.emit(event);
        if (event.cancel) {
            return;
        }
        this.scrollToItem(this.selectedItem);
    };
    /**
     * @protected
     * @param {?} direction
     * @param {?=} currentIndex
     * @return {?}
     */
    IgxSelectComponent.prototype.navigate = /**
     * @protected
     * @param {?} direction
     * @param {?=} currentIndex
     * @return {?}
     */
    function (direction, currentIndex) {
        if (this.collapsed && this.selectedItem) {
            this.navigateItem(this.selectedItem.itemIndex);
        }
        _super.prototype.navigate.call(this, direction, currentIndex);
    };
    /**
     * @protected
     * @return {?}
     */
    IgxSelectComponent.prototype.manageRequiredAsterisk = /**
     * @protected
     * @return {?}
     */
    function () {
        if (this.ngControl && this.ngControl.control.validator) {
            // Run the validation with empty object to check if required is enabled.
            /** @type {?} */
            var error = this.ngControl.control.validator((/** @type {?} */ ({})));
            this.inputGroup.isRequired = error && error.required;
            this.cdr.markForCheck();
        }
    };
    /**
     * @private
     * @param {?} item
     * @return {?}
     */
    IgxSelectComponent.prototype.setSelection = /**
     * @private
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (item && item.value !== undefined && item.value !== null) {
            this.selection.set(this.id, new Set([item]));
        }
        else {
            this.selection.clear(this.id);
        }
    };
    /** @hidden @internal */
    /**
     * @hidden \@internal
     * @return {?}
     */
    IgxSelectComponent.prototype.onBlur = /**
     * @hidden \@internal
     * @return {?}
     */
    function () {
        if (this.ngControl && !this.ngControl.valid) {
            this.input.valid = IgxInputState.INVALID;
        }
        else {
            this.input.valid = IgxInputState.INITIAL;
        }
        if (!this.collapsed) {
            this.toggleDirective.close();
        }
    };
    /**
     * @protected
     * @return {?}
     */
    IgxSelectComponent.prototype.onStatusChanged = /**
     * @protected
     * @return {?}
     */
    function () {
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
    };
    /**
     * @hidden @internal
     */
    /**
     * @hidden \@internal
     * @return {?}
     */
    IgxSelectComponent.prototype.ngOnInit = /**
     * @hidden \@internal
     * @return {?}
     */
    function () {
        this.ngControl = this._injector.get(NgControl, null);
    };
    /**
     * @hidden @internal
     */
    /**
     * @hidden \@internal
     * @return {?}
     */
    IgxSelectComponent.prototype.ngAfterViewInit = /**
     * @hidden \@internal
     * @return {?}
     */
    function () {
        if (this.ngControl) {
            this._statusChanges$ = this.ngControl.statusChanges.subscribe(this.onStatusChanged.bind(this));
            this.manageRequiredAsterisk();
        }
        this.cdr.detectChanges();
    };
    /**
     * @hidden @internal
     */
    /**
     * @hidden \@internal
     * @return {?}
     */
    IgxSelectComponent.prototype.ngOnDestroy = /**
     * @hidden \@internal
     * @return {?}
     */
    function () {
        this.selection.clear(this.id);
        if (this._statusChanges$) {
            this._statusChanges$.unsubscribe();
        }
    };
    IgxSelectComponent.decorators = [
        { type: Component, args: [{
                    selector: 'igx-select',
                    template: "<igx-input-group #inputGroup class=\"input-group\" [disabled]=\"disabled\" (click)=\"toggle()\" [type]=\"type\" [displayDensity]=\"displayDensity\">\n    <ng-container ngProjectAs=\"[igxLabel]\">\n        <ng-content select=\"[igxLabel]\"></ng-content>\n    </ng-container>\n    <ng-container ngProjectAs=\"igx-prefix\">\n        <ng-content select=\"igx-prefix,[igxPrefix]\"></ng-content>\n    </ng-container>\n        <input #input class=\"input\" type=\"text\" igxInput [igxSelectItemNavigation]=\"this\"\n            readonly=\"true\"\n            [attr.placeholder]=\"this.placeholder\"\n            [value]=\"this.selectionValue\"\n            role=\"combobox\"\n            aria-haspopup=\"listbox\"\n            [attr.aria-labelledby]=\"this.label ? this.label.id : ''\"\n            [attr.aria-expanded]=\"!this.collapsed\"\n            [attr.aria-owns]=\"this.listId\"\n            [attr.aria-activedescendant]=\"!this.collapsed ? this.focusedItem?.id : null\"\n            (blur)=\"onBlur()\"\n            />\n        <ng-container ngProjectAs=\"igx-suffix\">\n                <ng-content select=\"igx-suffix,[igxSuffix]\"></ng-content>\n            </ng-container>\n        <igx-suffix>\n            <ng-container *ngIf=\"toggleIconTemplate\">\n                <ng-container *ngTemplateOutlet=\"toggleIconTemplate; context: {$implicit: this.collapsed}\"></ng-container>\n                </ng-container>\n            <igx-icon *ngIf=\"!toggleIconTemplate\" fontSet=\"material\">{{ collapsed ? 'arrow_drop_down' : 'arrow_drop_up'}}</igx-icon>\n        </igx-suffix>\n    </igx-input-group>\n    <div class=\"igx-drop-down__list--select\" igxToggle [style.maxHeight]=\"maxHeight\"\n        (onOpening)=\"onToggleOpening($event)\" (onOpened)=\"onToggleOpened()\"\n        (onClosing)=\"onToggleClosing($event)\" (onClosed)=\"onToggleClosed()\"\n        [attr.id]=\"this.listId\" role=\"listbox\">\n        <ng-content select=\"igx-select-item, igx-select-item-group\">\n        </ng-content>\n    </div>\n",
                    providers: [
                        { provide: NG_VALUE_ACCESSOR, useExisting: IgxSelectComponent, multi: true },
                        { provide: IGX_DROPDOWN_BASE, useExisting: IgxSelectComponent }
                    ],
                    styles: ["\n        :host {\n            display: block;\n        }\n    "]
                }] }
    ];
    /** @nocollapse */
    IgxSelectComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: IgxSelectionAPIService },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DisplayDensityToken,] }] },
        { type: Injector }
    ]; };
    IgxSelectComponent.propDecorators = {
        inputGroup: [{ type: ViewChild, args: ['inputGroup', { read: IgxInputGroupComponent, static: true },] }],
        input: [{ type: ViewChild, args: ['input', { read: IgxInputDirective, static: true },] }],
        children: [{ type: ContentChildren, args: [forwardRef(function () { return IgxSelectItemComponent; }), { descendants: true },] }],
        label: [{ type: ContentChild, args: [forwardRef(function () { return IgxLabelDirective; }), { static: true },] }],
        value: [{ type: Input }],
        placeholder: [{ type: Input }],
        disabled: [{ type: Input }],
        overlaySettings: [{ type: Input }],
        maxHeight: [{ type: HostBinding, args: ['style.maxHeight',] }],
        type: [{ type: Input }],
        displayDensity: [{ type: Input }],
        toggleIconTemplate: [{ type: ContentChild, args: [IgxSelectToggleIconDirective, { read: TemplateRef, static: true },] }]
    };
    return IgxSelectComponent;
}(IgxDropDownComponent));
export { IgxSelectComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvc2VsZWN0L3NlbGVjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsYUFBYSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDekYsT0FBTyxFQUNILFNBQVMsRUFBRSxlQUFlLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFDL0QsV0FBVyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFDOUYsUUFBUSxFQUFvQyxNQUFNLEVBRXJELE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsU0FBUyxFQUFtQixNQUFNLGdCQUFnQixDQUFDO0FBSXJHLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRTlFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRTFFLE9BQU8sRUFBbUIsc0JBQXNCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUM1RSxPQUFPLEVBQUUsaUJBQWlCLEVBQWlDLE1BQU0sK0JBQStCLENBQUM7QUFFakcsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFHeEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDM0QsT0FBTyxFQUFFLG1CQUFtQixFQUEwQixNQUFNLGlCQUFpQixDQUFDOzs7O0FBRzlFO0lBQUE7SUFJQSxDQUFDOztnQkFKQSxTQUFTLFNBQUM7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Ozs7Ozs7Ozs7Ozs7Ozs7O0lBb0J0QyxnREFDbUQ7Ozs7OztJQXdCbkQsK0NBQW1EOzs7OztJQUduRCx3Q0FFQzs7Ozs7SUFmRyx3Q0FBZ0M7Ozs7O0lBQ2hDLGlDQUFnQzs7Ozs7SUFDaEMsdUNBQTJDOzs7OztJQUUzQyxvREFBaUc7Ozs7O0lBQ2pHLHVDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElneElucHV0RGlyZWN0aXZlLCBJZ3hJbnB1dFN0YXRlIH0gZnJvbSAnLi8uLi9kaXJlY3RpdmVzL2lucHV0L2lucHV0LmRpcmVjdGl2ZSc7XG5pbXBvcnQge1xuICAgIENvbXBvbmVudCwgQ29udGVudENoaWxkcmVuLCBmb3J3YXJkUmVmLCBRdWVyeUxpc3QsIFZpZXdDaGlsZCwgSW5wdXQsIENvbnRlbnRDaGlsZCxcbiAgICBBZnRlckNvbnRlbnRJbml0LCBIb3N0QmluZGluZywgRGlyZWN0aXZlLCBUZW1wbGF0ZVJlZiwgRWxlbWVudFJlZiwgQ2hhbmdlRGV0ZWN0b3JSZWYsIE9wdGlvbmFsLFxuICAgIEluamVjdG9yLCBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgSW5qZWN0XG5cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IsIE5nQ29udHJvbCwgQWJzdHJhY3RDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IElneERyb3BEb3duSXRlbUJhc2UgfSBmcm9tICcuLi9kcm9wLWRvd24vaW5kZXgnO1xuaW1wb3J0IHsgSWd4SW5wdXRHcm91cENvbXBvbmVudCB9IGZyb20gJy4uL2lucHV0LWdyb3VwL2lucHV0LWdyb3VwLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IElneERyb3BEb3duQ29tcG9uZW50IH0gZnJvbSAnLi8uLi9kcm9wLWRvd24vZHJvcC1kb3duLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJZ3hTZWxlY3RJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9zZWxlY3QtaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2VsZWN0UG9zaXRpb25pbmdTdHJhdGVneSB9IGZyb20gJy4vc2VsZWN0LXBvc2l0aW9uaW5nLXN0cmF0ZWd5JztcblxuaW1wb3J0IHsgT3ZlcmxheVNldHRpbmdzLCBBYnNvbHV0ZVNjcm9sbFN0cmF0ZWd5IH0gZnJvbSAnLi4vc2VydmljZXMvaW5kZXgnO1xuaW1wb3J0IHsgSUdYX0RST1BET1dOX0JBU0UsIElTZWxlY3Rpb25FdmVudEFyZ3MsIE5hdmlnYXRlIH0gZnJvbSAnLi4vZHJvcC1kb3duL2Ryb3AtZG93bi5jb21tb24nO1xuaW1wb3J0IHsgQ2FuY2VsYWJsZUV2ZW50QXJncyB9IGZyb20gJy4uL2NvcmUvdXRpbHMnO1xuaW1wb3J0IHsgSWd4TGFiZWxEaXJlY3RpdmUgfSBmcm9tICcuLi9kaXJlY3RpdmVzL2xhYmVsL2xhYmVsLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBJZ3hTZWxlY3RCYXNlIH0gZnJvbSAnLi9zZWxlY3QuY29tbW9uJztcbmltcG9ydCB7IEVkaXRvclByb3ZpZGVyIH0gZnJvbSAnLi4vY29yZS9lZGl0LXByb3ZpZGVyJztcbmltcG9ydCB7IElneFNlbGVjdGlvbkFQSVNlcnZpY2UgfSBmcm9tICcuLi9jb3JlL3NlbGVjdGlvbic7XG5pbXBvcnQgeyBEaXNwbGF5RGVuc2l0eVRva2VuLCBJRGlzcGxheURlbnNpdHlPcHRpb25zIH0gZnJvbSAnLi4vY29yZS9kZW5zaXR5JztcblxuLyoqIEBoaWRkZW4gQGludGVybmFsICovXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tpZ3hTZWxlY3RUb2dnbGVJY29uXSdcbn0pXG5leHBvcnQgY2xhc3MgSWd4U2VsZWN0VG9nZ2xlSWNvbkRpcmVjdGl2ZSB7XG59XG5cbmNvbnN0IG5vb3AgPSAoKSA9PiB7IH07XG5cbi8qKlxuICogKipJZ25pdGUgVUkgZm9yIEFuZ3VsYXIgU2VsZWN0KiogLVxuICogW0RvY3VtZW50YXRpb25dKGh0dHBzOi8vd3d3LmluZnJhZ2lzdGljcy5jb20vcHJvZHVjdHMvaWduaXRlLXVpLWFuZ3VsYXIvYW5ndWxhci9jb21wb25lbnRzL3NlbGVjdC5odG1sKVxuICpcbiAqIFRoZSBgaWd4U2VsZWN0YCBwcm92aWRlcyBhbiBpbnB1dCB3aXRoIGRyb3Bkb3duIGxpc3QgYWxsb3dpbmcgc2VsZWN0aW9uIG9mIGEgc2luZ2xlIGl0ZW0uXG4gKlxuICogRXhhbXBsZTpcbiAqIGBgYGh0bWxcbiAqIDxpZ3gtc2VsZWN0ICNzZWxlY3QxIFtwbGFjZWhvbGRlcl09XCInUGljayBPbmUnXCI+XG4gKiAgIDxsYWJlbCBpZ3hMYWJlbD5TZWxlY3QgTGFiZWw8L2xhYmVsPlxuICogICA8aWd4LXNlbGVjdC1pdGVtICpuZ0Zvcj1cImxldCBpdGVtIG9mIGl0ZW1zXCIgW3ZhbHVlXT1cIml0ZW0uZmllbGRcIj5cbiAqICAgICB7eyBpdGVtLmZpZWxkIH19XG4gKiAgIDwvaWd4LXNlbGVjdC1pdGVtPlxuICogPC9pZ3gtc2VsZWN0PlxuICogYGBgXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnaWd4LXNlbGVjdCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3NlbGVjdC5jb21wb25lbnQuaHRtbCcsXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHsgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsIHVzZUV4aXN0aW5nOiBJZ3hTZWxlY3RDb21wb25lbnQsIG11bHRpOiB0cnVlIH0sXG4gICAgICAgIHsgcHJvdmlkZTogSUdYX0RST1BET1dOX0JBU0UsIHVzZUV4aXN0aW5nOiBJZ3hTZWxlY3RDb21wb25lbnQgfV0sXG4gICAgc3R5bGVzOiBbYFxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgIGBdXG59KVxuZXhwb3J0IGNsYXNzIElneFNlbGVjdENvbXBvbmVudCBleHRlbmRzIElneERyb3BEb3duQ29tcG9uZW50IGltcGxlbWVudHMgSWd4U2VsZWN0QmFzZSwgQ29udHJvbFZhbHVlQWNjZXNzb3IsXG4gICAgQWZ0ZXJDb250ZW50SW5pdCwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIEVkaXRvclByb3ZpZGVyIHtcblxuICAgIHByaXZhdGUgbmdDb250cm9sOiBOZ0NvbnRyb2wgPSBudWxsO1xuICAgIHByaXZhdGUgX3N0YXR1c0NoYW5nZXMkOiBTdWJzY3JpcHRpb247XG4gICAgcHJpdmF0ZSBfb3ZlcmxheURlZmF1bHRzOiBPdmVybGF5U2V0dGluZ3M7XG4gICAgcHJpdmF0ZSBfdmFsdWU6IGFueTtcblxuICAgIC8qKiBAaGlkZGVuIEBpbnRlcm5hbCBkbyBub3QgdXNlIHRoZSBkcm9wLWRvd24gY29udGFpbmVyIGNsYXNzICovXG4gICAgcHVibGljIGNzc0NsYXNzID0gZmFsc2U7XG5cbiAgICAvKiogQGhpZGRlbiBAaW50ZXJuYWwgKi9cbiAgICBAVmlld0NoaWxkKCdpbnB1dEdyb3VwJywgeyByZWFkOiBJZ3hJbnB1dEdyb3VwQ29tcG9uZW50LCBzdGF0aWM6IHRydWUgfSkgcHVibGljIGlucHV0R3JvdXA6IElneElucHV0R3JvdXBDb21wb25lbnQ7XG5cbiAgICAvKiogQGhpZGRlbiBAaW50ZXJuYWwgKi9cbiAgICBAVmlld0NoaWxkKCdpbnB1dCcsIHsgcmVhZDogSWd4SW5wdXREaXJlY3RpdmUsIHN0YXRpYzogdHJ1ZSB9KSBwdWJsaWMgaW5wdXQ6IElneElucHV0RGlyZWN0aXZlO1xuXG4gICAgLyoqIEBoaWRkZW4gQGludGVybmFsICovXG4gICAgQENvbnRlbnRDaGlsZHJlbihmb3J3YXJkUmVmKCgpID0+IElneFNlbGVjdEl0ZW1Db21wb25lbnQpLCB7IGRlc2NlbmRhbnRzOiB0cnVlIH0pXG4gICAgcHVibGljIGNoaWxkcmVuOiBRdWVyeUxpc3Q8SWd4U2VsZWN0SXRlbUNvbXBvbmVudD47XG5cbiAgICAvKiogQGhpZGRlbiBAaW50ZXJuYWwgKi9cbiAgICBAQ29udGVudENoaWxkKGZvcndhcmRSZWYoKCkgPT4gSWd4TGFiZWxEaXJlY3RpdmUpLCB7IHN0YXRpYzogdHJ1ZSB9KSBsYWJlbDogSWd4TGFiZWxEaXJlY3RpdmU7XG5cbiAgICAvKiogQGhpZGRlbiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgYWxsb3dJdGVtc0ZvY3VzID0gZmFsc2U7XG5cbiAgICAvKiogQGhpZGRlbiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgaGVpZ2h0OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBBbiBASW5wdXQgcHJvcGVydHkgdGhhdCBnZXRzL3NldHMgdGhlIGNvbXBvbmVudCB2YWx1ZS5cbiAgICAgKlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiAvLyBnZXRcbiAgICAgKiBsZXQgc2VsZWN0VmFsdWUgPSB0aGlzLnNlbGVjdC52YWx1ZTtcbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiAvLyBzZXRcbiAgICAgKiB0aGlzLnNlbGVjdC52YWx1ZSA9ICdMb25kb24nO1xuICAgICAqIGBgYFxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LXNlbGVjdCBbdmFsdWVdPVwidmFsdWVcIj48L2lneC1zZWxlY3Q+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IHZhbHVlKCk6IGFueSB7XG4gICAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgICB9XG4gICAgcHVibGljIHNldCB2YWx1ZSh2OiBhbnkpIHtcbiAgICAgICAgaWYgKHRoaXMuX3ZhbHVlID09PSB2KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fdmFsdWUgPSB2O1xuICAgICAgICB0aGlzLnNldFNlbGVjdGlvbih0aGlzLml0ZW1zLmZpbmQoeCA9PiB4LnZhbHVlID09PSB0aGlzLnZhbHVlKSk7XG4gICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQW4gQElucHV0IHByb3BlcnR5IHRoYXQgc2V0cyBpbnB1dCBwbGFjZWhvbGRlci5cbiAgICAgKlxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBwbGFjZWhvbGRlcjtcblxuXG4gICAgLyoqXG4gICAgICogQW4gQElucHV0IHByb3BlcnR5IHRoYXQgZGlzYWJsZXMgdGhlIGBJZ3hTZWxlY3RDb21wb25lbnRgLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LXNlbGVjdCBbZGlzYWJsZWRdPVwiJ3RydWUnXCI+PC9pZ3gtc2VsZWN0PlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgpIHB1YmxpYyBkaXNhYmxlZCA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogQW4gQElucHV0IHByb3BlcnR5IHRoYXQgc2V0cyBjdXN0b20gT3ZlcmxheVNldHRpbmdzIGBJZ3hTZWxlY3RDb21wb25lbnRgLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LXNlbGVjdCBbb3ZlcmxheVNldHRpbmdzXSA9IFwiY3VzdG9tT3ZlcmxheVNldHRpbmdzXCI+PC9pZ3gtc2VsZWN0PlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgb3ZlcmxheVNldHRpbmdzOiBPdmVybGF5U2V0dGluZ3M7XG5cbiAgICAvKiogQGhpZGRlbiBAaW50ZXJuYWwgKi9cbiAgICBASG9zdEJpbmRpbmcoJ3N0eWxlLm1heEhlaWdodCcpXG4gICAgcHVibGljIG1heEhlaWdodCA9ICcyNTZweCc7XG5cbiAgICAvKiogQGhpZGRlbiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgd2lkdGg6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEFuIEBJbnB1dCBwcm9wZXJ0eSB0aGF0IHNldHMgaG93IHRoZSBzZWxlY3Qgd2lsbCBiZSBzdHlsZWQuXG4gICAgICogVGhlIGFsbG93ZWQgdmFsdWVzIGFyZSBgbGluZWAsIGBib3hgIGFuZCBgYm9yZGVyYC4gVGhlIGRlZmF1bHQgaXMgYGxpbmVgLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKjxpZ3gtc2VsZWN0IFt0eXBlXT1cIidib3gnXCI+PC9pZ3gtc2VsZWN0PlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHR5cGUgPSAnbGluZSc7XG5cbiAgICAvKipcbiAgICAgKiBBbiBASW5wdXQgcHJvcGVydHkgdGhhdCBzZXRzIHdoYXQgZGlzcGxheSBkZW5zaXR5IHRvIGJlIHVzZWQgZm9yIHRoZSBpbnB1dCBncm91cC5cbiAgICAgKiBUaGUgYWxsb3dlZCB2YWx1ZXMgYXJlIGBjb21wYWN0YCwgYGNvc3lgIGFuZCBgY29tZm9ydGFibGVgLiBUaGUgZGVmYXVsdCBpcyBgY29tZm9ydGFibGVgLlxuICAgICAqIGBgYGh0bWxcbiAgICAgKjxpZ3gtc2VsZWN0IFtkaXNwbGF5RGVuc2l0eV09XCInY29tcGFjdCdcIj48L2lneC1zZWxlY3Q+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZGlzcGxheURlbnNpdHkgPSAnY29tZm9ydGFibGUnO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGN1c3RvbSB0ZW1wbGF0ZSwgaWYgYW55LCB0aGF0IHNob3VsZCBiZSB1c2VkIHdoZW4gcmVuZGVyaW5nIHRoZSBzZWxlY3QgVE9HR0xFKG9wZW4vY2xvc2UpIGJ1dHRvblxuICAgICAqXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIC8vIFNldCBpbiB0eXBlc2NyaXB0XG4gICAgICogY29uc3QgbXlDdXN0b21UZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PiA9IG15Q29tcG9uZW50LmN1c3RvbVRlbXBsYXRlO1xuICAgICAqIG15Q29tcG9uZW50LnNlbGVjdC50b2dnbGVJY29uVGVtcGxhdGUgPSBteUN1c3RvbVRlbXBsYXRlO1xuICAgICAqIGBgYFxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8IS0tIFNldCBpbiBtYXJrdXAgLS0+XG4gICAgICogIDxpZ3gtc2VsZWN0ICNzZWxlY3Q+XG4gICAgICogICAgICAuLi5cbiAgICAgKiAgICAgIDxuZy10ZW1wbGF0ZSBpZ3hTZWxlY3RUb2dnbGVJY29uIGxldC1jb2xsYXBzZWQ+XG4gICAgICogICAgICAgICAgPGlneC1pY29uPnt7IGNvbGxhcHNlZCA/ICdyZW1vdmVfY2lyY2xlJyA6ICdyZW1vdmVfY2lyY2xlX291dGxpbmUnfX08L2lneC1pY29uPlxuICAgICAqICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgKiAgPC9pZ3gtc2VsZWN0PlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBDb250ZW50Q2hpbGQoSWd4U2VsZWN0VG9nZ2xlSWNvbkRpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pXG4gICAgcHVibGljIHRvZ2dsZUljb25UZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PiA9IG51bGw7XG5cbiAgICAvKiogQGhpZGRlbiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgZ2V0IHNlbGVjdGlvblZhbHVlKCkge1xuICAgICAgICBjb25zdCBzZWxlY3RlZEl0ZW0gPSB0aGlzLnNlbGVjdGVkSXRlbTtcbiAgICAgICAgcmV0dXJuIHNlbGVjdGVkSXRlbSA/IHNlbGVjdGVkSXRlbS5pdGVtVGV4dCA6ICcnO1xuICAgIH1cblxuICAgIC8qKiBAaGlkZGVuIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBnZXQgc2VsZWN0ZWRJdGVtKCk6IElneFNlbGVjdEl0ZW1Db21wb25lbnQge1xuICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3Rpb24uZmlyc3RfaXRlbSh0aGlzLmlkKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgIHByb3RlY3RlZCBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgICBwcm90ZWN0ZWQgc2VsZWN0aW9uOiBJZ3hTZWxlY3Rpb25BUElTZXJ2aWNlLFxuXG4gICAgICAgIEBPcHRpb25hbCgpIEBJbmplY3QoRGlzcGxheURlbnNpdHlUb2tlbikgcHJvdGVjdGVkIF9kaXNwbGF5RGVuc2l0eU9wdGlvbnM6IElEaXNwbGF5RGVuc2l0eU9wdGlvbnMsXG4gICAgICAgIHByaXZhdGUgX2luamVjdG9yOiBJbmplY3Rvcikge1xuICAgICAgICBzdXBlcihlbGVtZW50UmVmLCBjZHIsIHNlbGVjdGlvbiwgX2Rpc3BsYXlEZW5zaXR5T3B0aW9ucyk7XG4gICAgfVxuXG4gICAgLyoqIEBoaWRkZW4gQGludGVybmFsICovXG4gICAgcHJpdmF0ZSBfb25DaGFuZ2VDYWxsYmFjazogKF86IGFueSkgPT4gdm9pZCA9IG5vb3A7XG5cbiAgICAvKiogQGhpZGRlbiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgd3JpdGVWYWx1ZSA9ICh2YWx1ZTogYW55KSA9PiB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKiogQGhpZGRlbiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMuX29uQ2hhbmdlQ2FsbGJhY2sgPSBmbjtcbiAgICB9XG5cbiAgICAvKiogQGhpZGRlbiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQgeyB9XG5cbiAgICAvKiogQGhpZGRlbiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgZ2V0RWRpdEVsZW1lbnQoKTogSFRNTEVsZW1lbnQge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50O1xuICAgIH1cblxuICAgIC8qKiBAaGlkZGVuIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBzZWxlY3RJdGVtKG5ld1NlbGVjdGlvbjogSWd4RHJvcERvd25JdGVtQmFzZSwgZXZlbnQ/KSB7XG4gICAgICAgIGNvbnN0IG9sZFNlbGVjdGlvbiA9IHRoaXMuc2VsZWN0ZWRJdGVtO1xuXG4gICAgICAgIGlmIChldmVudCkge1xuICAgICAgICAgICAgdGhpcy50b2dnbGVEaXJlY3RpdmUuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobmV3U2VsZWN0aW9uID09PSBudWxsIHx8IG5ld1NlbGVjdGlvbiA9PT0gb2xkU2VsZWN0aW9uIHx8IG5ld1NlbGVjdGlvbi5kaXNhYmxlZCB8fCBuZXdTZWxlY3Rpb24uaXNIZWFkZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGFyZ3M6IElTZWxlY3Rpb25FdmVudEFyZ3MgPSB7IG9sZFNlbGVjdGlvbiwgbmV3U2VsZWN0aW9uLCBjYW5jZWw6IGZhbHNlIH07XG4gICAgICAgIHRoaXMub25TZWxlY3Rpb24uZW1pdChhcmdzKTtcblxuICAgICAgICBpZiAoYXJncy5jYW5jZWwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0U2VsZWN0aW9uKG5ld1NlbGVjdGlvbik7XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gbmV3U2VsZWN0aW9uLnZhbHVlO1xuICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgIHRoaXMuX29uQ2hhbmdlQ2FsbGJhY2sodGhpcy52YWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqIEBoaWRkZW4gQGludGVybmFsICovXG4gICAgcHVibGljIGdldEZpcnN0SXRlbUVsZW1lbnQoKTogSFRNTEVsZW1lbnQge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGlsZHJlbi5maXJzdC5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT3BlbnMgdGhlIHNlbGVjdFxuICAgICAqXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIHRoaXMuc2VsZWN0Lm9wZW4oKTtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBwdWJsaWMgb3BlbihvdmVybGF5U2V0dGluZ3M/OiBPdmVybGF5U2V0dGluZ3MpIHtcbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5pdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuc2VsZWN0ZWRJdGVtKSB7XG4gICAgICAgICAgICB0aGlzLm5hdmlnYXRlRmlyc3QoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN1cGVyLm9wZW4oT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fb3ZlcmxheURlZmF1bHRzLCB0aGlzLm92ZXJsYXlTZXR0aW5ncywgb3ZlcmxheVNldHRpbmdzKSk7XG4gICAgfVxuXG4gICAgLyoqIEBoaWRkZW4gQGludGVybmFsICovXG4gICAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgICAgICB0aGlzLl9vdmVybGF5RGVmYXVsdHMgPSB7XG4gICAgICAgICAgICBtb2RhbDogZmFsc2UsXG4gICAgICAgICAgICBjbG9zZU9uT3V0c2lkZUNsaWNrOiBmYWxzZSxcbiAgICAgICAgICAgIHBvc2l0aW9uU3RyYXRlZ3k6IG5ldyBTZWxlY3RQb3NpdGlvbmluZ1N0cmF0ZWd5KHRoaXMsIHsgdGFyZ2V0OiB0aGlzLmlucHV0R3JvdXAuZWxlbWVudC5uYXRpdmVFbGVtZW50IH0pLFxuICAgICAgICAgICAgc2Nyb2xsU3RyYXRlZ3k6IG5ldyBBYnNvbHV0ZVNjcm9sbFN0cmF0ZWd5KCksXG4gICAgICAgICAgICBleGNsdWRlUG9zaXRpb25UYXJnZXQ6IHRydWVcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5jaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFNlbGVjdGlvbih0aGlzLml0ZW1zLmZpbmQoeCA9PiB4LnZhbHVlID09PSB0aGlzLnZhbHVlKSk7XG4gICAgICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHRoaXMuY2hpbGRyZW4ubm90aWZ5T25DaGFuZ2VzKCkpO1xuICAgIH1cblxuICAgIC8qKiBAaGlkZGVuIEBpbnRlcm5hbCAqL1xuICAgIHB1YmxpYyBvblRvZ2dsZU9wZW5pbmcoZXZlbnQ6IENhbmNlbGFibGVFdmVudEFyZ3MpIHtcbiAgICAgICAgdGhpcy5vbk9wZW5pbmcuZW1pdChldmVudCk7XG4gICAgICAgIGlmIChldmVudC5jYW5jZWwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNjcm9sbFRvSXRlbSh0aGlzLnNlbGVjdGVkSXRlbSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG5hdmlnYXRlKGRpcmVjdGlvbjogTmF2aWdhdGUsIGN1cnJlbnRJbmRleD86IG51bWJlcikge1xuICAgICAgICBpZiAodGhpcy5jb2xsYXBzZWQgJiYgdGhpcy5zZWxlY3RlZEl0ZW0pIHtcbiAgICAgICAgICAgIHRoaXMubmF2aWdhdGVJdGVtKHRoaXMuc2VsZWN0ZWRJdGVtLml0ZW1JbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgc3VwZXIubmF2aWdhdGUoZGlyZWN0aW9uLCBjdXJyZW50SW5kZXgpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBtYW5hZ2VSZXF1aXJlZEFzdGVyaXNrKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uZ0NvbnRyb2wgJiYgdGhpcy5uZ0NvbnRyb2wuY29udHJvbC52YWxpZGF0b3IpIHtcbiAgICAgICAgICAgIC8vIFJ1biB0aGUgdmFsaWRhdGlvbiB3aXRoIGVtcHR5IG9iamVjdCB0byBjaGVjayBpZiByZXF1aXJlZCBpcyBlbmFibGVkLlxuICAgICAgICAgICAgY29uc3QgZXJyb3IgPSB0aGlzLm5nQ29udHJvbC5jb250cm9sLnZhbGlkYXRvcih7fSBhcyBBYnN0cmFjdENvbnRyb2wpO1xuICAgICAgICAgICAgdGhpcy5pbnB1dEdyb3VwLmlzUmVxdWlyZWQgPSBlcnJvciAmJiBlcnJvci5yZXF1aXJlZDtcbiAgICAgICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgc2V0U2VsZWN0aW9uKGl0ZW06IElneERyb3BEb3duSXRlbUJhc2UpIHtcbiAgICAgICAgaWYgKGl0ZW0gJiYgaXRlbS52YWx1ZSAhPT0gdW5kZWZpbmVkICYmIGl0ZW0udmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uLnNldCh0aGlzLmlkLCBuZXcgU2V0KFtpdGVtXSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24uY2xlYXIodGhpcy5pZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiogQGhpZGRlbiBAaW50ZXJuYWwgKi9cbiAgICBwdWJsaWMgb25CbHVyKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uZ0NvbnRyb2wgJiYgIXRoaXMubmdDb250cm9sLnZhbGlkKSB7XG4gICAgICAgICAgICAgdGhpcy5pbnB1dC52YWxpZCA9IElneElucHV0U3RhdGUuSU5WQUxJRDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaW5wdXQudmFsaWQgPSBJZ3hJbnB1dFN0YXRlLklOSVRJQUw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmNvbGxhcHNlZCkge1xuICAgICAgICAgICAgdGhpcy50b2dnbGVEaXJlY3RpdmUuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBvblN0YXR1c0NoYW5nZWQoKSB7XG4gICAgICAgIGlmICgodGhpcy5uZ0NvbnRyb2wuY29udHJvbC50b3VjaGVkIHx8IHRoaXMubmdDb250cm9sLmNvbnRyb2wuZGlydHkpICYmXG4gICAgICAgICAgICAodGhpcy5uZ0NvbnRyb2wuY29udHJvbC52YWxpZGF0b3IgfHwgdGhpcy5uZ0NvbnRyb2wuY29udHJvbC5hc3luY1ZhbGlkYXRvcikpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlucHV0R3JvdXAuaXNGb2N1c2VkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnB1dC52YWxpZCA9IHRoaXMubmdDb250cm9sLnZhbGlkID8gSWd4SW5wdXRTdGF0ZS5WQUxJRCA6IElneElucHV0U3RhdGUuSU5WQUxJRDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnB1dC52YWxpZCA9IHRoaXMubmdDb250cm9sLnZhbGlkID8gSWd4SW5wdXRTdGF0ZS5JTklUSUFMIDogSWd4SW5wdXRTdGF0ZS5JTlZBTElEO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMubWFuYWdlUmVxdWlyZWRBc3RlcmlzaygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5uZ0NvbnRyb2wgPSB0aGlzLl9pbmplY3Rvci5nZXQoTmdDb250cm9sLCBudWxsKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLm5nQ29udHJvbCkge1xuICAgICAgICAgICAgdGhpcy5fc3RhdHVzQ2hhbmdlcyQgPSB0aGlzLm5nQ29udHJvbC5zdGF0dXNDaGFuZ2VzLnN1YnNjcmliZSh0aGlzLm9uU3RhdHVzQ2hhbmdlZC5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIHRoaXMubWFuYWdlUmVxdWlyZWRBc3RlcmlzaygpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb24uY2xlYXIodGhpcy5pZCk7XG4gICAgICAgIGlmICh0aGlzLl9zdGF0dXNDaGFuZ2VzJCkge1xuICAgICAgICAgICAgdGhpcy5fc3RhdHVzQ2hhbmdlcyQudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuIl19