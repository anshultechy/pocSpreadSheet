/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { InjectionToken, Input, Output, EventEmitter } from '@angular/core';
/** @enum {string} */
const DisplayDensity = {
    comfortable: 'comfortable',
    cosy: 'cosy',
    compact: 'compact',
};
export { DisplayDensity };
/**
 * Describes the object used to configure the DisplayDensity in Angular DI.
 * @record
 */
export function IDisplayDensityOptions() { }
if (false) {
    /** @type {?} */
    IDisplayDensityOptions.prototype.displayDensity;
}
/**
 * @record
 */
export function IDensityChangedEventArgs() { }
if (false) {
    /** @type {?} */
    IDensityChangedEventArgs.prototype.oldDensity;
    /** @type {?} */
    IDensityChangedEventArgs.prototype.newDensity;
}
/**
 * Defines the DisplayDensity DI token.
 * @type {?}
 */
export const DisplayDensityToken = new InjectionToken('DisplayDensity');
/**
 * Base class containing all logic required for implementing DisplayDensity.
 */
export class DisplayDensityBase {
    /**
     * @param {?} displayDensityOptions
     */
    constructor(displayDensityOptions) {
        this.displayDensityOptions = displayDensityOptions;
        this.onDensityChanged = new EventEmitter();
        this.oldDisplayDensityOptions = { displayDensity: DisplayDensity.comfortable };
        Object.assign(this.oldDisplayDensityOptions, displayDensityOptions);
    }
    /**
     * Returns the theme of the component.
     * The default theme is `comfortable`.
     * Available options are `comfortable`, `cosy`, `compact`.
     * ```typescript
     * let componentTheme = this.component.displayDensity;
     * ```
     * @return {?}
     */
    get displayDensity() {
        return this._displayDensity ||
            ((this.displayDensityOptions && this.displayDensityOptions.displayDensity) || DisplayDensity.comfortable);
    }
    /**
     * Sets the theme of the component.
     * @param {?} val
     * @return {?}
     */
    set displayDensity(val) {
        /** @type {?} */
        const currentDisplayDensity = this._displayDensity;
        this._displayDensity = (/** @type {?} */ (val));
        if (currentDisplayDensity !== this._displayDensity) {
            /** @type {?} */
            const densityChangedArgs = {
                oldDensity: currentDisplayDensity,
                newDensity: this._displayDensity
            };
            this.onDensityChanged.emit(densityChangedArgs);
        }
    }
    /**
     * @hidden
     * @return {?}
     */
    ngOnInit() {
        this.initialDensity = this._displayDensity;
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
        if (!this._displayDensity && this.displayDensityOptions &&
            this.oldDisplayDensityOptions.displayDensity !== this.displayDensityOptions.displayDensity) {
            /** @type {?} */
            const densityChangedArgs = {
                oldDensity: this.oldDisplayDensityOptions.displayDensity,
                newDensity: this.displayDensityOptions.displayDensity
            };
            this.onDensityChanged.emit(densityChangedArgs);
            this.oldDisplayDensityOptions = Object.assign(this.oldDisplayDensityOptions, this.displayDensityOptions);
        }
    }
    /**
     * Given a style class of a component/element returns the modified version of it based
     * on the current display density.
     * @protected
     * @param {?} baseStyleClass
     * @return {?}
     */
    getComponentDensityClass(baseStyleClass) {
        switch (this.displayDensity) {
            case DisplayDensity.cosy:
                return `${baseStyleClass}--${DisplayDensity.cosy}`;
            case DisplayDensity.compact:
                return `${baseStyleClass}--${DisplayDensity.compact}`;
            default:
                return baseStyleClass;
        }
    }
}
DisplayDensityBase.propDecorators = {
    displayDensity: [{ type: Input }],
    onDensityChanged: [{ type: Output }]
};
if (false) {
    /**
     * @type {?}
     * @protected
     */
    DisplayDensityBase.prototype._displayDensity;
    /**
     * @hidden
     * @type {?}
     */
    DisplayDensityBase.prototype.initialDensity;
    /** @type {?} */
    DisplayDensityBase.prototype.onDensityChanged;
    /**
     * @type {?}
     * @protected
     */
    DisplayDensityBase.prototype.oldDisplayDensityOptions;
    /**
     * @type {?}
     * @protected
     */
    DisplayDensityBase.prototype.displayDensityOptions;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzcGxheURlbnNpdHkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pZ25pdGV1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2NvcmUvZGlzcGxheURlbnNpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQW1CLE1BQU0sZUFBZSxDQUFDOzs7SUFPekYsYUFBYyxhQUFhO0lBQzNCLE1BQU8sTUFBTTtJQUNiLFNBQVUsU0FBUzs7Ozs7OztBQU12Qiw0Q0FFQzs7O0lBREcsZ0RBQStCOzs7OztBQUduQyw4Q0FHQzs7O0lBRkcsOENBQTJCOztJQUMzQiw4Q0FBMkI7Ozs7OztBQU0vQixNQUFNLE9BQU8sbUJBQW1CLEdBQUcsSUFBSSxjQUFjLENBQXlCLGdCQUFnQixDQUFDOzs7O0FBSy9GLE1BQU0sT0FBTyxrQkFBa0I7Ozs7SUE2QzNCLFlBQXNCLHFCQUE2QztRQUE3QywwQkFBcUIsR0FBckIscUJBQXFCLENBQXdCO1FBTDVELHFCQUFnQixHQUFHLElBQUksWUFBWSxFQUE0QixDQUFDO1FBRTdELDZCQUF3QixHQUEyQixFQUFFLGNBQWMsRUFBRSxjQUFjLENBQUMsV0FBVyxFQUFFLENBQUM7UUFJeEcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsd0JBQXdCLEVBQUUscUJBQXFCLENBQUMsQ0FBQztJQUN4RSxDQUFDOzs7Ozs7Ozs7O0lBL0JELElBQ1csY0FBYztRQUNyQixPQUFPLElBQUksQ0FBQyxlQUFlO1lBQ3ZCLENBQUMsQ0FBQyxJQUFJLENBQUMscUJBQXFCLElBQUksSUFBSSxDQUFDLHFCQUFxQixDQUFDLGNBQWMsQ0FBQyxJQUFJLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNsSCxDQUFDOzs7Ozs7SUFLRCxJQUFXLGNBQWMsQ0FBQyxHQUE0Qjs7Y0FDNUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLGVBQWU7UUFDbEQsSUFBSSxDQUFDLGVBQWUsR0FBRyxtQkFBQSxHQUFHLEVBQWtCLENBQUM7UUFFN0MsSUFBSSxxQkFBcUIsS0FBSyxJQUFJLENBQUMsZUFBZSxFQUFFOztrQkFDMUMsa0JBQWtCLEdBQTZCO2dCQUNqRCxVQUFVLEVBQUUscUJBQXFCO2dCQUNqQyxVQUFVLEVBQUUsSUFBSSxDQUFDLGVBQWU7YUFDbkM7WUFFRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7U0FDbEQ7SUFDTCxDQUFDOzs7OztJQWVNLFFBQVE7UUFDWCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDL0MsQ0FBQzs7OztJQUVNLFNBQVM7UUFDWixJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsSUFBSSxJQUFJLENBQUMscUJBQXFCO1lBQy9DLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxjQUFjLEtBQUssSUFBSSxDQUFDLHFCQUFxQixDQUFDLGNBQWMsRUFBRTs7a0JBQzFGLGtCQUFrQixHQUE2QjtnQkFDakQsVUFBVSxFQUFFLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxjQUFjO2dCQUN4RCxVQUFVLEVBQUUsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGNBQWM7YUFDeEQ7WUFFRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDL0MsSUFBSSxDQUFDLHdCQUF3QixHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHdCQUF3QixFQUFFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1NBQzVHO0lBQ0wsQ0FBQzs7Ozs7Ozs7SUFNUyx3QkFBd0IsQ0FBQyxjQUFzQjtRQUNyRCxRQUFRLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDekIsS0FBSyxjQUFjLENBQUMsSUFBSTtnQkFDcEIsT0FBTyxHQUFHLGNBQWMsS0FBSyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDdkQsS0FBSyxjQUFjLENBQUMsT0FBTztnQkFDdkIsT0FBTyxHQUFHLGNBQWMsS0FBSyxjQUFjLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDMUQ7Z0JBQ0ksT0FBTyxjQUFjLENBQUM7U0FDN0I7SUFDTCxDQUFDOzs7NkJBbEVBLEtBQUs7K0JBdUJMLE1BQU07Ozs7Ozs7SUF0Q1AsNkNBQTBDOzs7OztJQUsxQyw0Q0FBc0M7O0lBaUN0Qyw4Q0FDdUU7Ozs7O0lBRXZFLHNEQUE0Rzs7Ozs7SUFHaEcsbURBQXVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4sIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgRG9DaGVjaywgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cblxuLyoqXG4gKiBEZWZpbmVzIHRoZSBwb3NpYmxlIHZhbHVlcyBvZiB0aGUgY29tcG9uZW50cycgZGlzcGxheSBkZW5zaXR5LlxuICovXG5leHBvcnQgZW51bSBEaXNwbGF5RGVuc2l0eSB7XG4gICAgY29tZm9ydGFibGUgPSAnY29tZm9ydGFibGUnLFxuICAgIGNvc3kgPSAnY29zeScsXG4gICAgY29tcGFjdCA9ICdjb21wYWN0J1xufVxuXG4vKipcbiAqIERlc2NyaWJlcyB0aGUgb2JqZWN0IHVzZWQgdG8gY29uZmlndXJlIHRoZSBEaXNwbGF5RGVuc2l0eSBpbiBBbmd1bGFyIERJLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIElEaXNwbGF5RGVuc2l0eU9wdGlvbnMge1xuICAgIGRpc3BsYXlEZW5zaXR5OiBEaXNwbGF5RGVuc2l0eTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJRGVuc2l0eUNoYW5nZWRFdmVudEFyZ3Mge1xuICAgIG9sZERlbnNpdHk6IERpc3BsYXlEZW5zaXR5O1xuICAgIG5ld0RlbnNpdHk6IERpc3BsYXlEZW5zaXR5O1xufVxuXG4vKipcbiAqIERlZmluZXMgdGhlIERpc3BsYXlEZW5zaXR5IERJIHRva2VuLlxuICovXG5leHBvcnQgY29uc3QgRGlzcGxheURlbnNpdHlUb2tlbiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxJRGlzcGxheURlbnNpdHlPcHRpb25zPignRGlzcGxheURlbnNpdHknKTtcblxuLyoqXG4gKiBCYXNlIGNsYXNzIGNvbnRhaW5pbmcgYWxsIGxvZ2ljIHJlcXVpcmVkIGZvciBpbXBsZW1lbnRpbmcgRGlzcGxheURlbnNpdHkuXG4gKi9cbmV4cG9ydCBjbGFzcyBEaXNwbGF5RGVuc2l0eUJhc2UgaW1wbGVtZW50cyBEb0NoZWNrLCBPbkluaXQge1xuICAgIHByb3RlY3RlZCBfZGlzcGxheURlbnNpdHk6IERpc3BsYXlEZW5zaXR5O1xuXG4gICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgaW5pdGlhbERlbnNpdHk6IERpc3BsYXlEZW5zaXR5O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgdGhlbWUgb2YgdGhlIGNvbXBvbmVudC5cbiAgICAgKiBUaGUgZGVmYXVsdCB0aGVtZSBpcyBgY29tZm9ydGFibGVgLlxuICAgICAqIEF2YWlsYWJsZSBvcHRpb25zIGFyZSBgY29tZm9ydGFibGVgLCBgY29zeWAsIGBjb21wYWN0YC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGNvbXBvbmVudFRoZW1lID0gdGhpcy5jb21wb25lbnQuZGlzcGxheURlbnNpdHk7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IGRpc3BsYXlEZW5zaXR5KCk6IERpc3BsYXlEZW5zaXR5IHwgc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Rpc3BsYXlEZW5zaXR5IHx8XG4gICAgICAgICAgICAoKHRoaXMuZGlzcGxheURlbnNpdHlPcHRpb25zICYmIHRoaXMuZGlzcGxheURlbnNpdHlPcHRpb25zLmRpc3BsYXlEZW5zaXR5KSB8fCBEaXNwbGF5RGVuc2l0eS5jb21mb3J0YWJsZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgdGhlbWUgb2YgdGhlIGNvbXBvbmVudC5cbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0IGRpc3BsYXlEZW5zaXR5KHZhbDogRGlzcGxheURlbnNpdHkgfCBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgY3VycmVudERpc3BsYXlEZW5zaXR5ID0gdGhpcy5fZGlzcGxheURlbnNpdHk7XG4gICAgICAgIHRoaXMuX2Rpc3BsYXlEZW5zaXR5ID0gdmFsIGFzIERpc3BsYXlEZW5zaXR5O1xuXG4gICAgICAgIGlmIChjdXJyZW50RGlzcGxheURlbnNpdHkgIT09IHRoaXMuX2Rpc3BsYXlEZW5zaXR5KSB7XG4gICAgICAgICAgICBjb25zdCBkZW5zaXR5Q2hhbmdlZEFyZ3M6IElEZW5zaXR5Q2hhbmdlZEV2ZW50QXJncyA9IHtcbiAgICAgICAgICAgICAgICBvbGREZW5zaXR5OiBjdXJyZW50RGlzcGxheURlbnNpdHksXG4gICAgICAgICAgICAgICAgbmV3RGVuc2l0eTogdGhpcy5fZGlzcGxheURlbnNpdHlcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHRoaXMub25EZW5zaXR5Q2hhbmdlZC5lbWl0KGRlbnNpdHlDaGFuZ2VkQXJncyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgb25EZW5zaXR5Q2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8SURlbnNpdHlDaGFuZ2VkRXZlbnRBcmdzPigpO1xuXG4gICAgcHJvdGVjdGVkIG9sZERpc3BsYXlEZW5zaXR5T3B0aW9uczogSURpc3BsYXlEZW5zaXR5T3B0aW9ucyA9IHsgZGlzcGxheURlbnNpdHk6IERpc3BsYXlEZW5zaXR5LmNvbWZvcnRhYmxlIH07XG5cblxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBkaXNwbGF5RGVuc2l0eU9wdGlvbnM6IElEaXNwbGF5RGVuc2l0eU9wdGlvbnMpIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLm9sZERpc3BsYXlEZW5zaXR5T3B0aW9ucywgZGlzcGxheURlbnNpdHlPcHRpb25zKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmluaXRpYWxEZW5zaXR5ID0gdGhpcy5fZGlzcGxheURlbnNpdHk7XG4gICAgfVxuXG4gICAgcHVibGljIG5nRG9DaGVjaygpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9kaXNwbGF5RGVuc2l0eSAmJiB0aGlzLmRpc3BsYXlEZW5zaXR5T3B0aW9ucyAmJlxuICAgICAgICAgICAgICAgIHRoaXMub2xkRGlzcGxheURlbnNpdHlPcHRpb25zLmRpc3BsYXlEZW5zaXR5ICE9PSB0aGlzLmRpc3BsYXlEZW5zaXR5T3B0aW9ucy5kaXNwbGF5RGVuc2l0eSkge1xuICAgICAgICAgICAgY29uc3QgZGVuc2l0eUNoYW5nZWRBcmdzOiBJRGVuc2l0eUNoYW5nZWRFdmVudEFyZ3MgPSB7XG4gICAgICAgICAgICAgICAgb2xkRGVuc2l0eTogdGhpcy5vbGREaXNwbGF5RGVuc2l0eU9wdGlvbnMuZGlzcGxheURlbnNpdHksXG4gICAgICAgICAgICAgICAgbmV3RGVuc2l0eTogdGhpcy5kaXNwbGF5RGVuc2l0eU9wdGlvbnMuZGlzcGxheURlbnNpdHlcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHRoaXMub25EZW5zaXR5Q2hhbmdlZC5lbWl0KGRlbnNpdHlDaGFuZ2VkQXJncyk7XG4gICAgICAgICAgICB0aGlzLm9sZERpc3BsYXlEZW5zaXR5T3B0aW9ucyA9IE9iamVjdC5hc3NpZ24odGhpcy5vbGREaXNwbGF5RGVuc2l0eU9wdGlvbnMsIHRoaXMuZGlzcGxheURlbnNpdHlPcHRpb25zKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdpdmVuIGEgc3R5bGUgY2xhc3Mgb2YgYSBjb21wb25lbnQvZWxlbWVudCByZXR1cm5zIHRoZSBtb2RpZmllZCB2ZXJzaW9uIG9mIGl0IGJhc2VkXG4gICAgICogb24gdGhlIGN1cnJlbnQgZGlzcGxheSBkZW5zaXR5LlxuICAgICAqL1xuICAgIHByb3RlY3RlZCBnZXRDb21wb25lbnREZW5zaXR5Q2xhc3MoYmFzZVN0eWxlQ2xhc3M6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIHN3aXRjaCAodGhpcy5kaXNwbGF5RGVuc2l0eSkge1xuICAgICAgICAgICAgY2FzZSBEaXNwbGF5RGVuc2l0eS5jb3N5OlxuICAgICAgICAgICAgICAgIHJldHVybiBgJHtiYXNlU3R5bGVDbGFzc30tLSR7RGlzcGxheURlbnNpdHkuY29zeX1gO1xuICAgICAgICAgICAgY2FzZSBEaXNwbGF5RGVuc2l0eS5jb21wYWN0OlxuICAgICAgICAgICAgICAgIHJldHVybiBgJHtiYXNlU3R5bGVDbGFzc30tLSR7RGlzcGxheURlbnNpdHkuY29tcGFjdH1gO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gYmFzZVN0eWxlQ2xhc3M7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=