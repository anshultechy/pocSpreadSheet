/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { InjectionToken, Input, Output, EventEmitter } from '@angular/core';
/** @enum {string} */
var DisplayDensity = {
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
export var DisplayDensityToken = new InjectionToken('DisplayDensity');
/**
 * Base class containing all logic required for implementing DisplayDensity.
 */
var DisplayDensityBase = /** @class */ (function () {
    function DisplayDensityBase(displayDensityOptions) {
        this.displayDensityOptions = displayDensityOptions;
        this.onDensityChanged = new EventEmitter();
        this.oldDisplayDensityOptions = { displayDensity: DisplayDensity.comfortable };
        Object.assign(this.oldDisplayDensityOptions, displayDensityOptions);
    }
    Object.defineProperty(DisplayDensityBase.prototype, "displayDensity", {
        /**
         * Returns the theme of the component.
         * The default theme is `comfortable`.
         * Available options are `comfortable`, `cosy`, `compact`.
         * ```typescript
         * let componentTheme = this.component.displayDensity;
         * ```
         */
        get: /**
         * Returns the theme of the component.
         * The default theme is `comfortable`.
         * Available options are `comfortable`, `cosy`, `compact`.
         * ```typescript
         * let componentTheme = this.component.displayDensity;
         * ```
         * @return {?}
         */
        function () {
            return this._displayDensity ||
                ((this.displayDensityOptions && this.displayDensityOptions.displayDensity) || DisplayDensity.comfortable);
        },
        /**
         * Sets the theme of the component.
         */
        set: /**
         * Sets the theme of the component.
         * @param {?} val
         * @return {?}
         */
        function (val) {
            /** @type {?} */
            var currentDisplayDensity = this._displayDensity;
            this._displayDensity = (/** @type {?} */ (val));
            if (currentDisplayDensity !== this._displayDensity) {
                /** @type {?} */
                var densityChangedArgs = {
                    oldDensity: currentDisplayDensity,
                    newDensity: this._displayDensity
                };
                this.onDensityChanged.emit(densityChangedArgs);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    DisplayDensityBase.prototype.ngOnInit = /**
     * @hidden
     * @return {?}
     */
    function () {
        this.initialDensity = this._displayDensity;
    };
    /**
     * @return {?}
     */
    DisplayDensityBase.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        if (!this._displayDensity && this.displayDensityOptions &&
            this.oldDisplayDensityOptions.displayDensity !== this.displayDensityOptions.displayDensity) {
            /** @type {?} */
            var densityChangedArgs = {
                oldDensity: this.oldDisplayDensityOptions.displayDensity,
                newDensity: this.displayDensityOptions.displayDensity
            };
            this.onDensityChanged.emit(densityChangedArgs);
            this.oldDisplayDensityOptions = Object.assign(this.oldDisplayDensityOptions, this.displayDensityOptions);
        }
    };
    /**
     * Given a style class of a component/element returns the modified version of it based
     * on the current display density.
     */
    /**
     * Given a style class of a component/element returns the modified version of it based
     * on the current display density.
     * @protected
     * @param {?} baseStyleClass
     * @return {?}
     */
    DisplayDensityBase.prototype.getComponentDensityClass = /**
     * Given a style class of a component/element returns the modified version of it based
     * on the current display density.
     * @protected
     * @param {?} baseStyleClass
     * @return {?}
     */
    function (baseStyleClass) {
        switch (this.displayDensity) {
            case DisplayDensity.cosy:
                return baseStyleClass + "--" + DisplayDensity.cosy;
            case DisplayDensity.compact:
                return baseStyleClass + "--" + DisplayDensity.compact;
            default:
                return baseStyleClass;
        }
    };
    DisplayDensityBase.propDecorators = {
        displayDensity: [{ type: Input }],
        onDensityChanged: [{ type: Output }]
    };
    return DisplayDensityBase;
}());
export { DisplayDensityBase };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzcGxheURlbnNpdHkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pZ25pdGV1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2NvcmUvZGlzcGxheURlbnNpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQW1CLE1BQU0sZUFBZSxDQUFDOzs7SUFPekYsYUFBYyxhQUFhO0lBQzNCLE1BQU8sTUFBTTtJQUNiLFNBQVUsU0FBUzs7Ozs7OztBQU12Qiw0Q0FFQzs7O0lBREcsZ0RBQStCOzs7OztBQUduQyw4Q0FHQzs7O0lBRkcsOENBQTJCOztJQUMzQiw4Q0FBMkI7Ozs7OztBQU0vQixNQUFNLEtBQU8sbUJBQW1CLEdBQUcsSUFBSSxjQUFjLENBQXlCLGdCQUFnQixDQUFDOzs7O0FBSy9GO0lBNkNJLDRCQUFzQixxQkFBNkM7UUFBN0MsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF3QjtRQUw1RCxxQkFBZ0IsR0FBRyxJQUFJLFlBQVksRUFBNEIsQ0FBQztRQUU3RCw2QkFBd0IsR0FBMkIsRUFBRSxjQUFjLEVBQUUsY0FBYyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBSXhHLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHdCQUF3QixFQUFFLHFCQUFxQixDQUFDLENBQUM7SUFDeEUsQ0FBQztJQS9CRCxzQkFDVyw4Q0FBYztRQVR6Qjs7Ozs7OztXQU9HOzs7Ozs7Ozs7O1FBQ0g7WUFFSSxPQUFPLElBQUksQ0FBQyxlQUFlO2dCQUN2QixDQUFDLENBQUMsSUFBSSxDQUFDLHFCQUFxQixJQUFJLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxjQUFjLENBQUMsSUFBSSxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDbEgsQ0FBQztRQUVEOztXQUVHOzs7Ozs7UUFDSCxVQUEwQixHQUE0Qjs7Z0JBQzVDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxlQUFlO1lBQ2xELElBQUksQ0FBQyxlQUFlLEdBQUcsbUJBQUEsR0FBRyxFQUFrQixDQUFDO1lBRTdDLElBQUkscUJBQXFCLEtBQUssSUFBSSxDQUFDLGVBQWUsRUFBRTs7b0JBQzFDLGtCQUFrQixHQUE2QjtvQkFDakQsVUFBVSxFQUFFLHFCQUFxQjtvQkFDakMsVUFBVSxFQUFFLElBQUksQ0FBQyxlQUFlO2lCQUNuQztnQkFFRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7YUFDbEQ7UUFDTCxDQUFDOzs7T0FqQkE7SUE2QkQ7O09BRUc7Ozs7O0lBQ0kscUNBQVE7Ozs7SUFBZjtRQUNJLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUMvQyxDQUFDOzs7O0lBRU0sc0NBQVM7OztJQUFoQjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxJQUFJLElBQUksQ0FBQyxxQkFBcUI7WUFDL0MsSUFBSSxDQUFDLHdCQUF3QixDQUFDLGNBQWMsS0FBSyxJQUFJLENBQUMscUJBQXFCLENBQUMsY0FBYyxFQUFFOztnQkFDMUYsa0JBQWtCLEdBQTZCO2dCQUNqRCxVQUFVLEVBQUUsSUFBSSxDQUFDLHdCQUF3QixDQUFDLGNBQWM7Z0JBQ3hELFVBQVUsRUFBRSxJQUFJLENBQUMscUJBQXFCLENBQUMsY0FBYzthQUN4RDtZQUVELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztZQUMvQyxJQUFJLENBQUMsd0JBQXdCLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsd0JBQXdCLEVBQUUsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7U0FDNUc7SUFDTCxDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7OztJQUNPLHFEQUF3Qjs7Ozs7OztJQUFsQyxVQUFtQyxjQUFzQjtRQUNyRCxRQUFRLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDekIsS0FBSyxjQUFjLENBQUMsSUFBSTtnQkFDcEIsT0FBVSxjQUFjLFVBQUssY0FBYyxDQUFDLElBQU0sQ0FBQztZQUN2RCxLQUFLLGNBQWMsQ0FBQyxPQUFPO2dCQUN2QixPQUFVLGNBQWMsVUFBSyxjQUFjLENBQUMsT0FBUyxDQUFDO1lBQzFEO2dCQUNJLE9BQU8sY0FBYyxDQUFDO1NBQzdCO0lBQ0wsQ0FBQzs7aUNBbEVBLEtBQUs7bUNBdUJMLE1BQU07O0lBNENYLHlCQUFDO0NBQUEsQUFuRkQsSUFtRkM7U0FuRlksa0JBQWtCOzs7Ozs7SUFDM0IsNkNBQTBDOzs7OztJQUsxQyw0Q0FBc0M7O0lBaUN0Qyw4Q0FDdUU7Ozs7O0lBRXZFLHNEQUE0Rzs7Ozs7SUFHaEcsbURBQXVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4sIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgRG9DaGVjaywgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cblxuLyoqXG4gKiBEZWZpbmVzIHRoZSBwb3NpYmxlIHZhbHVlcyBvZiB0aGUgY29tcG9uZW50cycgZGlzcGxheSBkZW5zaXR5LlxuICovXG5leHBvcnQgZW51bSBEaXNwbGF5RGVuc2l0eSB7XG4gICAgY29tZm9ydGFibGUgPSAnY29tZm9ydGFibGUnLFxuICAgIGNvc3kgPSAnY29zeScsXG4gICAgY29tcGFjdCA9ICdjb21wYWN0J1xufVxuXG4vKipcbiAqIERlc2NyaWJlcyB0aGUgb2JqZWN0IHVzZWQgdG8gY29uZmlndXJlIHRoZSBEaXNwbGF5RGVuc2l0eSBpbiBBbmd1bGFyIERJLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIElEaXNwbGF5RGVuc2l0eU9wdGlvbnMge1xuICAgIGRpc3BsYXlEZW5zaXR5OiBEaXNwbGF5RGVuc2l0eTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJRGVuc2l0eUNoYW5nZWRFdmVudEFyZ3Mge1xuICAgIG9sZERlbnNpdHk6IERpc3BsYXlEZW5zaXR5O1xuICAgIG5ld0RlbnNpdHk6IERpc3BsYXlEZW5zaXR5O1xufVxuXG4vKipcbiAqIERlZmluZXMgdGhlIERpc3BsYXlEZW5zaXR5IERJIHRva2VuLlxuICovXG5leHBvcnQgY29uc3QgRGlzcGxheURlbnNpdHlUb2tlbiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxJRGlzcGxheURlbnNpdHlPcHRpb25zPignRGlzcGxheURlbnNpdHknKTtcblxuLyoqXG4gKiBCYXNlIGNsYXNzIGNvbnRhaW5pbmcgYWxsIGxvZ2ljIHJlcXVpcmVkIGZvciBpbXBsZW1lbnRpbmcgRGlzcGxheURlbnNpdHkuXG4gKi9cbmV4cG9ydCBjbGFzcyBEaXNwbGF5RGVuc2l0eUJhc2UgaW1wbGVtZW50cyBEb0NoZWNrLCBPbkluaXQge1xuICAgIHByb3RlY3RlZCBfZGlzcGxheURlbnNpdHk6IERpc3BsYXlEZW5zaXR5O1xuXG4gICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgaW5pdGlhbERlbnNpdHk6IERpc3BsYXlEZW5zaXR5O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgdGhlbWUgb2YgdGhlIGNvbXBvbmVudC5cbiAgICAgKiBUaGUgZGVmYXVsdCB0aGVtZSBpcyBgY29tZm9ydGFibGVgLlxuICAgICAqIEF2YWlsYWJsZSBvcHRpb25zIGFyZSBgY29tZm9ydGFibGVgLCBgY29zeWAsIGBjb21wYWN0YC5cbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogbGV0IGNvbXBvbmVudFRoZW1lID0gdGhpcy5jb21wb25lbnQuZGlzcGxheURlbnNpdHk7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IGRpc3BsYXlEZW5zaXR5KCk6IERpc3BsYXlEZW5zaXR5IHwgc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Rpc3BsYXlEZW5zaXR5IHx8XG4gICAgICAgICAgICAoKHRoaXMuZGlzcGxheURlbnNpdHlPcHRpb25zICYmIHRoaXMuZGlzcGxheURlbnNpdHlPcHRpb25zLmRpc3BsYXlEZW5zaXR5KSB8fCBEaXNwbGF5RGVuc2l0eS5jb21mb3J0YWJsZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgdGhlbWUgb2YgdGhlIGNvbXBvbmVudC5cbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0IGRpc3BsYXlEZW5zaXR5KHZhbDogRGlzcGxheURlbnNpdHkgfCBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgY3VycmVudERpc3BsYXlEZW5zaXR5ID0gdGhpcy5fZGlzcGxheURlbnNpdHk7XG4gICAgICAgIHRoaXMuX2Rpc3BsYXlEZW5zaXR5ID0gdmFsIGFzIERpc3BsYXlEZW5zaXR5O1xuXG4gICAgICAgIGlmIChjdXJyZW50RGlzcGxheURlbnNpdHkgIT09IHRoaXMuX2Rpc3BsYXlEZW5zaXR5KSB7XG4gICAgICAgICAgICBjb25zdCBkZW5zaXR5Q2hhbmdlZEFyZ3M6IElEZW5zaXR5Q2hhbmdlZEV2ZW50QXJncyA9IHtcbiAgICAgICAgICAgICAgICBvbGREZW5zaXR5OiBjdXJyZW50RGlzcGxheURlbnNpdHksXG4gICAgICAgICAgICAgICAgbmV3RGVuc2l0eTogdGhpcy5fZGlzcGxheURlbnNpdHlcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHRoaXMub25EZW5zaXR5Q2hhbmdlZC5lbWl0KGRlbnNpdHlDaGFuZ2VkQXJncyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgb25EZW5zaXR5Q2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8SURlbnNpdHlDaGFuZ2VkRXZlbnRBcmdzPigpO1xuXG4gICAgcHJvdGVjdGVkIG9sZERpc3BsYXlEZW5zaXR5T3B0aW9uczogSURpc3BsYXlEZW5zaXR5T3B0aW9ucyA9IHsgZGlzcGxheURlbnNpdHk6IERpc3BsYXlEZW5zaXR5LmNvbWZvcnRhYmxlIH07XG5cblxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBkaXNwbGF5RGVuc2l0eU9wdGlvbnM6IElEaXNwbGF5RGVuc2l0eU9wdGlvbnMpIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLm9sZERpc3BsYXlEZW5zaXR5T3B0aW9ucywgZGlzcGxheURlbnNpdHlPcHRpb25zKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmluaXRpYWxEZW5zaXR5ID0gdGhpcy5fZGlzcGxheURlbnNpdHk7XG4gICAgfVxuXG4gICAgcHVibGljIG5nRG9DaGVjaygpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9kaXNwbGF5RGVuc2l0eSAmJiB0aGlzLmRpc3BsYXlEZW5zaXR5T3B0aW9ucyAmJlxuICAgICAgICAgICAgICAgIHRoaXMub2xkRGlzcGxheURlbnNpdHlPcHRpb25zLmRpc3BsYXlEZW5zaXR5ICE9PSB0aGlzLmRpc3BsYXlEZW5zaXR5T3B0aW9ucy5kaXNwbGF5RGVuc2l0eSkge1xuICAgICAgICAgICAgY29uc3QgZGVuc2l0eUNoYW5nZWRBcmdzOiBJRGVuc2l0eUNoYW5nZWRFdmVudEFyZ3MgPSB7XG4gICAgICAgICAgICAgICAgb2xkRGVuc2l0eTogdGhpcy5vbGREaXNwbGF5RGVuc2l0eU9wdGlvbnMuZGlzcGxheURlbnNpdHksXG4gICAgICAgICAgICAgICAgbmV3RGVuc2l0eTogdGhpcy5kaXNwbGF5RGVuc2l0eU9wdGlvbnMuZGlzcGxheURlbnNpdHlcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHRoaXMub25EZW5zaXR5Q2hhbmdlZC5lbWl0KGRlbnNpdHlDaGFuZ2VkQXJncyk7XG4gICAgICAgICAgICB0aGlzLm9sZERpc3BsYXlEZW5zaXR5T3B0aW9ucyA9IE9iamVjdC5hc3NpZ24odGhpcy5vbGREaXNwbGF5RGVuc2l0eU9wdGlvbnMsIHRoaXMuZGlzcGxheURlbnNpdHlPcHRpb25zKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdpdmVuIGEgc3R5bGUgY2xhc3Mgb2YgYSBjb21wb25lbnQvZWxlbWVudCByZXR1cm5zIHRoZSBtb2RpZmllZCB2ZXJzaW9uIG9mIGl0IGJhc2VkXG4gICAgICogb24gdGhlIGN1cnJlbnQgZGlzcGxheSBkZW5zaXR5LlxuICAgICAqL1xuICAgIHByb3RlY3RlZCBnZXRDb21wb25lbnREZW5zaXR5Q2xhc3MoYmFzZVN0eWxlQ2xhc3M6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIHN3aXRjaCAodGhpcy5kaXNwbGF5RGVuc2l0eSkge1xuICAgICAgICAgICAgY2FzZSBEaXNwbGF5RGVuc2l0eS5jb3N5OlxuICAgICAgICAgICAgICAgIHJldHVybiBgJHtiYXNlU3R5bGVDbGFzc30tLSR7RGlzcGxheURlbnNpdHkuY29zeX1gO1xuICAgICAgICAgICAgY2FzZSBEaXNwbGF5RGVuc2l0eS5jb21wYWN0OlxuICAgICAgICAgICAgICAgIHJldHVybiBgJHtiYXNlU3R5bGVDbGFzc30tLSR7RGlzcGxheURlbnNpdHkuY29tcGFjdH1gO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gYmFzZVN0eWxlQ2xhc3M7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=