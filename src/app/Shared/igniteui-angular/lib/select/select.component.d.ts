import { IgxInputDirective } from './../directives/input/input.directive';
import { QueryList, AfterContentInit, TemplateRef, ElementRef, ChangeDetectorRef, Injector, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { IgxDropDownItemBase } from '../drop-down/index';
import { IgxInputGroupComponent } from '../input-group/input-group.component';
import { IgxDropDownComponent } from './../drop-down/drop-down.component';
import { IgxSelectItemComponent } from './select-item.component';
import { OverlaySettings } from '../services/index';
import { Navigate } from '../drop-down/drop-down.common';
import { CancelableEventArgs } from '../core/utils';
import { IgxLabelDirective } from '../directives/label/label.directive';
import { IgxSelectBase } from './select.common';
import { EditorProvider } from '../core/edit-provider';
import { IgxSelectionAPIService } from '../core/selection';
import { IDisplayDensityOptions } from '../core/density';
/** @hidden @internal */
export declare class IgxSelectToggleIconDirective {
}
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
export declare class IgxSelectComponent extends IgxDropDownComponent implements IgxSelectBase, ControlValueAccessor, AfterContentInit, OnInit, AfterViewInit, OnDestroy, EditorProvider {
    protected elementRef: ElementRef;
    protected cdr: ChangeDetectorRef;
    protected selection: IgxSelectionAPIService;
    protected _displayDensityOptions: IDisplayDensityOptions;
    private _injector;
    private ngControl;
    private _statusChanges$;
    private _overlayDefaults;
    private _value;
    /** @hidden @internal do not use the drop-down container class */
    cssClass: boolean;
    /** @hidden @internal */
    inputGroup: IgxInputGroupComponent;
    /** @hidden @internal */
    input: IgxInputDirective;
    /** @hidden @internal */
    children: QueryList<IgxSelectItemComponent>;
    /** @hidden @internal */
    label: IgxLabelDirective;
    /** @hidden @internal */
    allowItemsFocus: boolean;
    /** @hidden @internal */
    height: string;
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
    value: any;
    /**
     * An @Input property that sets input placeholder.
     *
     */
    placeholder: any;
    /**
     * An @Input property that disables the `IgxSelectComponent`.
     * ```html
     * <igx-select [disabled]="'true'"></igx-select>
     * ```
     */
    disabled: boolean;
    /**
     * An @Input property that sets custom OverlaySettings `IgxSelectComponent`.
     * ```html
     * <igx-select [overlaySettings] = "customOverlaySettings"></igx-select>
     * ```
     */
    overlaySettings: OverlaySettings;
    /** @hidden @internal */
    maxHeight: string;
    /** @hidden @internal */
    width: string;
    /**
     * An @Input property that sets how the select will be styled.
     * The allowed values are `line`, `box` and `border`. The default is `line`.
     * ```html
     *<igx-select [type]="'box'"></igx-select>
     * ```
     */
    type: string;
    /**
     * An @Input property that sets what display density to be used for the input group.
     * The allowed values are `compact`, `cosy` and `comfortable`. The default is `comfortable`.
     * ```html
     *<igx-select [displayDensity]="'compact'"></igx-select>
     * ```
     */
    displayDensity: string;
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
    toggleIconTemplate: TemplateRef<any>;
    /** @hidden @internal */
    readonly selectionValue: any;
    /** @hidden @internal */
    readonly selectedItem: IgxSelectItemComponent;
    constructor(elementRef: ElementRef, cdr: ChangeDetectorRef, selection: IgxSelectionAPIService, _displayDensityOptions: IDisplayDensityOptions, _injector: Injector);
    /** @hidden @internal */
    private _onChangeCallback;
    /** @hidden @internal */
    writeValue: (value: any) => void;
    /** @hidden @internal */
    registerOnChange(fn: any): void;
    /** @hidden @internal */
    registerOnTouched(fn: any): void;
    /** @hidden @internal */
    getEditElement(): HTMLElement;
    /** @hidden @internal */
    selectItem(newSelection: IgxDropDownItemBase, event?: any): void;
    /** @hidden @internal */
    getFirstItemElement(): HTMLElement;
    /**
     * Opens the select
     *
     * ```typescript
     * this.select.open();
     * ```
     */
    open(overlaySettings?: OverlaySettings): void;
    /** @hidden @internal */
    ngAfterContentInit(): void;
    /** @hidden @internal */
    onToggleOpening(event: CancelableEventArgs): void;
    protected navigate(direction: Navigate, currentIndex?: number): void;
    protected manageRequiredAsterisk(): void;
    private setSelection;
    /** @hidden @internal */
    onBlur(): void;
    protected onStatusChanged(): void;
    /**
     * @hidden @internal
     */
    ngOnInit(): void;
    /**
     * @hidden @internal
     */
    ngAfterViewInit(): void;
    /**
     * @hidden @internal
     */
    ngOnDestroy(): void;
}
