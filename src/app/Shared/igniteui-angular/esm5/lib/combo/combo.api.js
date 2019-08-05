/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @hidden
 */
var /**
 * @hidden
 */
IgxComboAPIService = /** @class */ (function () {
    function IgxComboAPIService() {
        this.disableTransitions = false;
    }
    /**
     * @param {?} combo
     * @return {?}
     */
    IgxComboAPIService.prototype.register = /**
     * @param {?} combo
     * @return {?}
     */
    function (combo) {
        this.combo = combo;
    };
    /**
     * @return {?}
     */
    IgxComboAPIService.prototype.clear = /**
     * @return {?}
     */
    function () {
        this.combo = null;
    };
    Object.defineProperty(IgxComboAPIService.prototype, "item_focusable", {
        get: /**
         * @return {?}
         */
        function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxComboAPIService.prototype, "isRemote", {
        get: /**
         * @return {?}
         */
        function () {
            return this.combo.isRemote;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    IgxComboAPIService.prototype.add_custom_item = /**
     * @return {?}
     */
    function () {
        if (!this.combo) {
            return;
        }
        this.combo.addItemToCollection();
    };
    Object.defineProperty(IgxComboAPIService.prototype, "comboID", {
        get: /**
         * @return {?}
         */
        function () {
            return this.combo.id;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} itemID
     * @param {?=} event
     * @return {?}
     */
    IgxComboAPIService.prototype.set_selected_item = /**
     * @param {?} itemID
     * @param {?=} event
     * @return {?}
     */
    function (itemID, event) {
        /** @type {?} */
        var selected = this.combo.isItemSelected(itemID);
        if (itemID === null || itemID === undefined) {
            return;
        }
        if (!selected) {
            this.combo.selectItems([itemID], false, event);
        }
        else {
            this.combo.deselectItems([itemID], event);
        }
    };
    /**
     * @param {?} itemID
     * @return {?}
     */
    IgxComboAPIService.prototype.is_item_selected = /**
     * @param {?} itemID
     * @return {?}
     */
    function (itemID) {
        return this.combo.isItemSelected(itemID);
    };
    return IgxComboAPIService;
}());
/**
 * @hidden
 */
export { IgxComboAPIService };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    IgxComboAPIService.prototype.combo;
    /** @type {?} */
    IgxComboAPIService.prototype.disableTransitions;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tYm8uYXBpLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9jb21iby9jb21iby5hcGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUtBOzs7O0lBQUE7UUFHVyx1QkFBa0IsR0FBRyxLQUFLLENBQUM7SUE2Q3RDLENBQUM7Ozs7O0lBM0NVLHFDQUFROzs7O0lBQWYsVUFBZ0IsS0FBbUI7UUFDL0IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQzs7OztJQUdNLGtDQUFLOzs7SUFBWjtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0lBQ3RCLENBQUM7SUFHRCxzQkFBVyw4Q0FBYzs7OztRQUF6QjtZQUNJLE9BQU8sS0FBSyxDQUFDO1FBQ2pCLENBQUM7OztPQUFBO0lBQ0Qsc0JBQVcsd0NBQVE7Ozs7UUFBbkI7WUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO1FBQy9CLENBQUM7OztPQUFBOzs7O0lBRU0sNENBQWU7OztJQUF0QjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2IsT0FBTztTQUNWO1FBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQ3JDLENBQUM7SUFFRCxzQkFBVyx1Q0FBTzs7OztRQUFsQjtZQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7UUFDekIsQ0FBQzs7O09BQUE7Ozs7OztJQUVNLDhDQUFpQjs7Ozs7SUFBeEIsVUFBeUIsTUFBVyxFQUFFLEtBQWE7O1lBQ3pDLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUM7UUFDbEQsSUFBSSxNQUFNLEtBQUssSUFBSSxJQUFJLE1BQU0sS0FBSyxTQUFTLEVBQUU7WUFDekMsT0FBTztTQUNWO1FBQ0QsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNYLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ2xEO2FBQU07WUFDSCxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQzdDO0lBQ0wsQ0FBQzs7Ozs7SUFFTSw2Q0FBZ0I7Ozs7SUFBdkIsVUFBd0IsTUFBVztRQUMvQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFDTCx5QkFBQztBQUFELENBQUMsQUFoREQsSUFnREM7Ozs7Ozs7Ozs7SUEvQ0csbUNBQThCOztJQUU5QixnREFBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJZ3hDb21ib0Jhc2UgfSBmcm9tICcuL2NvbWJvLmNvbW1vbic7XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgSWd4Q29tYm9BUElTZXJ2aWNlIHtcbiAgICBwcm90ZWN0ZWQgY29tYm86IElneENvbWJvQmFzZTtcblxuICAgIHB1YmxpYyBkaXNhYmxlVHJhbnNpdGlvbnMgPSBmYWxzZTtcblxuICAgIHB1YmxpYyByZWdpc3Rlcihjb21ibzogSWd4Q29tYm9CYXNlKSB7XG4gICAgICAgIHRoaXMuY29tYm8gPSBjb21ibztcbiAgICB9XG5cblxuICAgIHB1YmxpYyBjbGVhcigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jb21ibyA9IG51bGw7XG4gICAgfVxuXG5cbiAgICBwdWJsaWMgZ2V0IGl0ZW1fZm9jdXNhYmxlKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgaXNSZW1vdGUoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbWJvLmlzUmVtb3RlO1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGRfY3VzdG9tX2l0ZW0oKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5jb21ibykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29tYm8uYWRkSXRlbVRvQ29sbGVjdGlvbigpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgY29tYm9JRCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5jb21iby5pZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0X3NlbGVjdGVkX2l0ZW0oaXRlbUlEOiBhbnksIGV2ZW50PzogRXZlbnQpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWQgPSB0aGlzLmNvbWJvLmlzSXRlbVNlbGVjdGVkKGl0ZW1JRCk7XG4gICAgICAgIGlmIChpdGVtSUQgPT09IG51bGwgfHwgaXRlbUlEID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXNlbGVjdGVkKSB7XG4gICAgICAgICAgICB0aGlzLmNvbWJvLnNlbGVjdEl0ZW1zKFtpdGVtSURdLCBmYWxzZSwgZXZlbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb21iby5kZXNlbGVjdEl0ZW1zKFtpdGVtSURdLCBldmVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgaXNfaXRlbV9zZWxlY3RlZChpdGVtSUQ6IGFueSk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb21iby5pc0l0ZW1TZWxlY3RlZChpdGVtSUQpO1xuICAgIH1cbn1cbiJdfQ==