import { EventEmitter, ElementRef, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { NgModel, FormControlName } from '@angular/forms';
import { Subject } from 'rxjs';
import { CancelableEventArgs } from '../../core/utils';
import { IScrollStrategy, IPositionStrategy } from '../../services/index';
import { IgxDropDownComponent, IgxDropDownItemNavigationDirective } from '../../drop-down/index';
import { IgxInputGroupComponent } from '../../input-group/index';
import { IgxOverlayOutletDirective } from '../toggle/toggle.directive';
/**
 * Interface that encapsulates onItemSelection event arguments - new value and cancel selection.
 * @export
 */
export interface AutocompleteItemSelectionEventArgs extends CancelableEventArgs {
    /**
     * New value selected from the drop down
     */
    value: string;
}
export interface AutocompleteOverlaySettings {
    /** Position strategy to use with this settings */
    positionStrategy?: IPositionStrategy;
    /** Scroll strategy to use with this settings */
    scrollStrategy?: IScrollStrategy;
    /** Set the outlet container to attach the overlay to */
    outlet?: IgxOverlayOutletDirective | ElementRef;
}
/**
 * **Ignite UI for Angular Autocomplete** -
 * [Documentation](https://www.infragistics.com/products/ignite-ui-angular/angular/components/autocomplete.html)
 *
 * The igxAutocomplete directive provides a way to enhance a text input
 * by showing a drop down of suggested options, provided by the developer.
 *
 * Example:
 * ```html
 * <input type="text" [igxAutocomplete]="townsPanel" />
 * <igx-drop-down #townsPanel>
 *     <igx-drop-down-item *ngFor="let town of towns | startsWith:townSelected" [value]="town">
 *         {{town}}
 *     </igx-drop-down-item>
 * </igx-drop-down>
 * ```
 */
export declare class IgxAutocompleteDirective extends IgxDropDownItemNavigationDirective implements OnDestroy {
    protected ngModel: NgModel;
    protected formControl: FormControlName;
    protected group: IgxInputGroupComponent;
    protected elementRef: ElementRef;
    protected cdr: ChangeDetectorRef;
    constructor(ngModel: NgModel, formControl: FormControlName, group: IgxInputGroupComponent, elementRef: ElementRef, cdr: ChangeDetectorRef);
    private defaultSettings;
    protected id: string;
    protected dropDownOpened$: Subject<boolean>;
    protected readonly model: FormControlName | NgModel;
    /** @hidden @internal */
    readonly nativeElement: HTMLInputElement;
    /** @hidden @internal */
    readonly parentElement: HTMLElement;
    private readonly settings;
    /**
     * Sets the target of the autocomplete directive
     *
     * ```html
     * <!-- Set -->
     * <input [igxAutocomplete]="dropdown" />
     * ...
     * <igx-drop-down #dropdown>
     * ...
     * </igx-drop-down>
     * ```
     */
    target: IgxDropDownComponent;
    /**
     * Enables/disables autocomplete component
     *
     * ```typescript
     * // get
     * let disabled = this.autocomplete.disabled;
     * ```
     * ```html
     * <!--set-->
     * <input type="text" [igxAutocomplete]="townsPanel" [igxAutocompleteDisabled]="disabled"/>
     * ```
     * ```typescript
     * // set
     * public disabled = true;
     * ```
     */
    disabled: boolean;
    /**
     * Provide overlay settings for the autocomplete drop down
     *
     * ```typescript
     * // get
     * let settings = this.autocomplete.autocompleteSettings;
     * ```
     * ```html
     * <!--set-->
     * <input type="text" [igxAutocomplete]="townsPanel" [igxAutocompleteSettings]="settings"/>
     * ```
     * ```typescript
     * // set
     * this.settings = {
     *  positionStrategy: new ConnectedPositioningStrategy({
     *      closeAnimation: null,
     *      openAnimation: null
     *  })
     * };
     * ```
     */
    autocompleteSettings: AutocompleteOverlaySettings;
    /**
     * Emitted after item from the drop down is selected
     *
     * ```html
     * <input igxInput [igxAutocomplete]="townsPanel" (onItemSelected)='itemSelected($event)' />
     * ```
     */
    onItemSelected: EventEmitter<AutocompleteItemSelectionEventArgs>;
    /** @hidden @internal */
    autofill: string;
    /** @hidden  @internal */
    role: string;
    /** @hidden  @internal */
    readonly ariaExpanded: boolean;
    /** @hidden  @internal */
    readonly hasPopUp: string;
    /** @hidden  @internal */
    readonly ariaOwns: string;
    /** @hidden  @internal */
    readonly ariaActiveDescendant: string;
    /** @hidden  @internal */
    readonly ariaAutocomplete: string;
    /** @hidden  @internal */
    onInput(): void;
    /** @hidden  @internal */
    onArrowDown(event: Event): void;
    /** @hidden  @internal */
    onTab(): void;
    /** @hidden  @internal */
    handleKeyDown(event: any): void;
    /** @hidden  @internal */
    onArrowDownKeyDown(): void;
    /** @hidden  @internal */
    onArrowUpKeyDown(): void;
    /** @hidden  @internal */
    onEndKeyDown(): void;
    /** @hidden  @internal */
    onHomeKeyDown(): void;
    /**
     * Closes autocomplete drop down
     */
    close(): void;
    /**
     * Opens autocomplete drop down
     */
    open(): void;
    private readonly collapsed;
    private select;
    private highlightFirstItem;
    /** @hidden */
    ngOnDestroy(): void;
}
/** @hidden */
export declare class IgxAutocompleteModule {
}
