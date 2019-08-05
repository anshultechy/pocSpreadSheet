/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @hidden
 * @abstract
 */
var /**
 * @hidden
 * @abstract
 */
IgxTabsBase = /** @class */ (function () {
    function IgxTabsBase() {
    }
    /**
     * @param {?} element
     * @param {?} scrollRight
     * @return {?}
     */
    IgxTabsBase.prototype.scrollElement = /**
     * @param {?} element
     * @param {?} scrollRight
     * @return {?}
     */
    function (element, scrollRight) { };
    return IgxTabsBase;
}());
/**
 * @hidden
 * @abstract
 */
export { IgxTabsBase };
if (false) {
    /** @type {?} */
    IgxTabsBase.prototype.selectedIndicator;
    /** @type {?} */
    IgxTabsBase.prototype.tabs;
    /** @type {?} */
    IgxTabsBase.prototype.groups;
    /** @type {?} */
    IgxTabsBase.prototype.offset;
    /** @type {?} */
    IgxTabsBase.prototype.selectedIndex;
    /** @type {?} */
    IgxTabsBase.prototype.viewPort;
    /** @type {?} */
    IgxTabsBase.prototype.contentsContainer;
    /** @type {?} */
    IgxTabsBase.prototype.tabsContainer;
    /** @type {?} */
    IgxTabsBase.prototype.itemsContainer;
    /** @type {?} */
    IgxTabsBase.prototype.headerContainer;
    /** @type {?} */
    IgxTabsBase.prototype.onTabItemSelected;
    /** @type {?} */
    IgxTabsBase.prototype.hasContentTabs;
}
/**
 * @hidden
 * @record
 */
export function IgxTabItemBase() { }
if (false) {
    /** @type {?} */
    IgxTabItemBase.prototype.nativeTabItem;
    /**
     * @param {?=} focusDelay
     * @return {?}
     */
    IgxTabItemBase.prototype.select = function (focusDelay) { };
}
/**
 * @hidden
 * @record
 */
export function IgxTabsGroupBase() { }
if (false) {
    /**
     * @param {?=} focusDelay
     * @return {?}
     */
    IgxTabsGroupBase.prototype.select = function (focusDelay) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5jb21tb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pZ25pdGV1aS1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL3RhYnMvdGFicy5jb21tb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFHQTs7Ozs7SUFBQTtJQWNBLENBQUM7Ozs7OztJQURHLG1DQUFhOzs7OztJQUFiLFVBQWMsT0FBWSxFQUFFLFdBQW9CLElBQUcsQ0FBQztJQUN4RCxrQkFBQztBQUFELENBQUMsQUFkRCxJQWNDOzs7Ozs7OztJQWJHLHdDQUFtQzs7SUFDbkMsMkJBQWdDOztJQUNoQyw2QkFBb0M7O0lBQ3BDLDZCQUFlOztJQUNmLG9DQUFzQjs7SUFDdEIsK0JBQXFCOztJQUNyQix3Q0FBOEI7O0lBQzlCLG9DQUEwQjs7SUFDMUIscUNBQTJCOztJQUMzQixzQ0FBNEI7O0lBQzVCLHdDQUFvQzs7SUFDcEMscUNBQXdCOzs7Ozs7QUFLNUIsb0NBR0M7OztJQUZHLHVDQUEwQjs7Ozs7SUFDMUIsNERBQTRCOzs7Ozs7QUFJaEMsc0NBRUM7Ozs7OztJQURHLDhEQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYsIFF1ZXJ5TGlzdCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKiBAaGlkZGVuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgSWd4VGFic0Jhc2Uge1xuICAgIHNlbGVjdGVkSW5kaWNhdG9yOiBFbGVtZW50UmVmPGFueT47XG4gICAgdGFiczogUXVlcnlMaXN0PElneFRhYkl0ZW1CYXNlPjtcbiAgICBncm91cHM6IFF1ZXJ5TGlzdDxJZ3hUYWJzR3JvdXBCYXNlPjtcbiAgICBvZmZzZXQ6IG51bWJlcjtcbiAgICBzZWxlY3RlZEluZGV4OiBudW1iZXI7XG4gICAgdmlld1BvcnQ6IEVsZW1lbnRSZWY7XG4gICAgY29udGVudHNDb250YWluZXI6IEVsZW1lbnRSZWY7XG4gICAgdGFic0NvbnRhaW5lcjogRWxlbWVudFJlZjtcbiAgICBpdGVtc0NvbnRhaW5lcjogRWxlbWVudFJlZjtcbiAgICBoZWFkZXJDb250YWluZXI6IEVsZW1lbnRSZWY7XG4gICAgb25UYWJJdGVtU2VsZWN0ZWQ6IEV2ZW50RW1pdHRlcjx7fT47IC8vIFRPRE86IERlZmluZSBldmVudCBhcmcgaW50ZXJmYWNlIVxuICAgIGhhc0NvbnRlbnRUYWJzOiBib29sZWFuO1xuICAgIHNjcm9sbEVsZW1lbnQoZWxlbWVudDogYW55LCBzY3JvbGxSaWdodDogYm9vbGVhbikge31cbn1cblxuLyoqIEBoaWRkZW4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSWd4VGFiSXRlbUJhc2Uge1xuICAgIG5hdGl2ZVRhYkl0ZW06IEVsZW1lbnRSZWY7XG4gICAgc2VsZWN0KGZvY3VzRGVsYXk/OiBudW1iZXIpO1xufVxuXG4vKiogQGhpZGRlbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJZ3hUYWJzR3JvdXBCYXNlIHtcbiAgICBzZWxlY3QoZm9jdXNEZWxheT86IG51bWJlcik7XG59XG4iXX0=