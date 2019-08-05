/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ScrollStrategy } from './scroll-strategy';
/**
 * Prevents scrolling while the overlay content is shown.
 */
var /**
 * Prevents scrolling while the overlay content is shown.
 */
BlockScrollStrategy = /** @class */ (function (_super) {
    tslib_1.__extends(BlockScrollStrategy, _super);
    function BlockScrollStrategy(scrollContainer) {
        var _this = _super.call(this, scrollContainer) || this;
        _this._initialized = false;
        _this.onScroll = function (ev) {
            ev.preventDefault();
            if (!_this._sourceElement || _this._sourceElement !== ev.target) {
                _this._sourceElement = (/** @type {?} */ (ev.target));
                _this._initialScrollTop = _this._sourceElement.scrollTop;
                _this._initialScrollLeft = _this._sourceElement.scrollLeft;
            }
            _this._sourceElement.scrollTop = _this._initialScrollTop;
            _this._sourceElement.scrollLeft = _this._initialScrollLeft;
        };
        return _this;
    }
    /** @inheritdoc */
    /**
     * \@inheritdoc
     * @param {?} document
     * @param {?} overlayService
     * @param {?} id
     * @return {?}
     */
    BlockScrollStrategy.prototype.initialize = /**
     * \@inheritdoc
     * @param {?} document
     * @param {?} overlayService
     * @param {?} id
     * @return {?}
     */
    function (document, overlayService, id) {
        if (this._initialized) {
            return;
        }
        this._document = document;
        this._initialized = true;
    };
    /** @inheritdoc */
    /**
     * \@inheritdoc
     * @return {?}
     */
    BlockScrollStrategy.prototype.attach = /**
     * \@inheritdoc
     * @return {?}
     */
    function () {
        this._document.addEventListener('scroll', this.onScroll, true);
        this._document.addEventListener('wheel', this.onWheel, true);
    };
    /** @inheritdoc */
    /**
     * \@inheritdoc
     * @return {?}
     */
    BlockScrollStrategy.prototype.detach = /**
     * \@inheritdoc
     * @return {?}
     */
    function () {
        this._document.removeEventListener('scroll', this.onScroll, true);
        this._document.removeEventListener('wheel', this.onWheel, true);
        this._sourceElement = null;
        this._initialScrollTop = 0;
        this._initialScrollLeft = 0;
        this._initialized = false;
    };
    /**
     * @private
     * @param {?} ev
     * @return {?}
     */
    BlockScrollStrategy.prototype.onWheel = /**
     * @private
     * @param {?} ev
     * @return {?}
     */
    function (ev) {
        ev.stopImmediatePropagation();
        ev.preventDefault();
    };
    return BlockScrollStrategy;
}(ScrollStrategy));
/**
 * Prevents scrolling while the overlay content is shown.
 */
export { BlockScrollStrategy };
if (false) {
    /**
     * @type {?}
     * @private
     */
    BlockScrollStrategy.prototype._initialized;
    /**
     * @type {?}
     * @private
     */
    BlockScrollStrategy.prototype._document;
    /**
     * @type {?}
     * @private
     */
    BlockScrollStrategy.prototype._initialScrollTop;
    /**
     * @type {?}
     * @private
     */
    BlockScrollStrategy.prototype._initialScrollLeft;
    /**
     * @type {?}
     * @private
     */
    BlockScrollStrategy.prototype._sourceElement;
    /**
     * @type {?}
     * @private
     */
    BlockScrollStrategy.prototype.onScroll;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvY2stc2Nyb2xsLXN0cmF0ZWd5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9vdmVybGF5L3Njcm9sbC9ibG9jay1zY3JvbGwtc3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7QUFLbkQ7Ozs7SUFBeUMsK0NBQWM7SUFPbkQsNkJBQVksZUFBNkI7UUFBekMsWUFDSSxrQkFBTSxlQUFlLENBQUMsU0FDekI7UUFSTyxrQkFBWSxHQUFHLEtBQUssQ0FBQztRQW9DckIsY0FBUSxHQUFHLFVBQUMsRUFBUztZQUN6QixFQUFFLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDcEIsSUFBSSxDQUFDLEtBQUksQ0FBQyxjQUFjLElBQUksS0FBSSxDQUFDLGNBQWMsS0FBSyxFQUFFLENBQUMsTUFBTSxFQUFFO2dCQUMzRCxLQUFJLENBQUMsY0FBYyxHQUFHLG1CQUFBLEVBQUUsQ0FBQyxNQUFNLEVBQVcsQ0FBQztnQkFDM0MsS0FBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDO2dCQUN2RCxLQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUM7YUFDNUQ7WUFFRCxLQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsR0FBRyxLQUFJLENBQUMsaUJBQWlCLENBQUM7WUFDdkQsS0FBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLEdBQUcsS0FBSSxDQUFDLGtCQUFrQixDQUFDO1FBQzdELENBQUMsQ0FBQTs7SUF0Q0QsQ0FBQztJQUVELGtCQUFrQjs7Ozs7Ozs7SUFDWCx3Q0FBVTs7Ozs7OztJQUFqQixVQUFrQixRQUFrQixFQUFFLGNBQWlDLEVBQUUsRUFBVTtRQUMvRSxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDbkIsT0FBTztTQUNWO1FBRUQsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7UUFDMUIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7SUFDN0IsQ0FBQztJQUVELGtCQUFrQjs7Ozs7SUFDWCxvQ0FBTTs7OztJQUFiO1FBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFFRCxrQkFBa0I7Ozs7O0lBQ1gsb0NBQU07Ozs7SUFBYjtRQUNJLElBQUksQ0FBQyxTQUFTLENBQUMsbUJBQW1CLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbEUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztRQUMzQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7SUFDOUIsQ0FBQzs7Ozs7O0lBY08scUNBQU87Ozs7O0lBQWYsVUFBZ0IsRUFBYztRQUMxQixFQUFFLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztRQUM5QixFQUFFLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUNMLDBCQUFDO0FBQUQsQ0FBQyxBQXJERCxDQUF5QyxjQUFjLEdBcUR0RDs7Ozs7Ozs7OztJQXBERywyQ0FBNkI7Ozs7O0lBQzdCLHdDQUE0Qjs7Ozs7SUFDNUIsZ0RBQWtDOzs7OztJQUNsQyxpREFBbUM7Ozs7O0lBQ25DLDZDQUFnQzs7Ozs7SUFnQ2hDLHVDQVVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSWd4T3ZlcmxheVNlcnZpY2UgfSBmcm9tICcuLi9vdmVybGF5JztcbmltcG9ydCB7IFNjcm9sbFN0cmF0ZWd5IH0gZnJvbSAnLi9zY3JvbGwtc3RyYXRlZ3knO1xuXG4vKipcbiAqIFByZXZlbnRzIHNjcm9sbGluZyB3aGlsZSB0aGUgb3ZlcmxheSBjb250ZW50IGlzIHNob3duLlxuICovXG5leHBvcnQgY2xhc3MgQmxvY2tTY3JvbGxTdHJhdGVneSBleHRlbmRzIFNjcm9sbFN0cmF0ZWd5IHtcbiAgICBwcml2YXRlIF9pbml0aWFsaXplZCA9IGZhbHNlO1xuICAgIHByaXZhdGUgX2RvY3VtZW50OiBEb2N1bWVudDtcbiAgICBwcml2YXRlIF9pbml0aWFsU2Nyb2xsVG9wOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfaW5pdGlhbFNjcm9sbExlZnQ6IG51bWJlcjtcbiAgICBwcml2YXRlIF9zb3VyY2VFbGVtZW50OiBFbGVtZW50O1xuXG4gICAgY29uc3RydWN0b3Ioc2Nyb2xsQ29udGFpbmVyPzogSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgc3VwZXIoc2Nyb2xsQ29udGFpbmVyKTtcbiAgICB9XG5cbiAgICAvKiogQGluaGVyaXRkb2MgKi9cbiAgICBwdWJsaWMgaW5pdGlhbGl6ZShkb2N1bWVudDogRG9jdW1lbnQsIG92ZXJsYXlTZXJ2aWNlOiBJZ3hPdmVybGF5U2VydmljZSwgaWQ6IHN0cmluZykge1xuICAgICAgICBpZiAodGhpcy5faW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2RvY3VtZW50ID0gZG9jdW1lbnQ7XG4gICAgICAgIHRoaXMuX2luaXRpYWxpemVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKiogQGluaGVyaXRkb2MgKi9cbiAgICBwdWJsaWMgYXR0YWNoKCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLm9uU2Nyb2xsLCB0cnVlKTtcbiAgICAgICAgdGhpcy5fZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignd2hlZWwnLCB0aGlzLm9uV2hlZWwsIHRydWUpO1xuICAgIH1cblxuICAgIC8qKiBAaW5oZXJpdGRvYyAqL1xuICAgIHB1YmxpYyBkZXRhY2goKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2RvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMub25TY3JvbGwsIHRydWUpO1xuICAgICAgICB0aGlzLl9kb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd3aGVlbCcsIHRoaXMub25XaGVlbCwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuX3NvdXJjZUVsZW1lbnQgPSBudWxsO1xuICAgICAgICB0aGlzLl9pbml0aWFsU2Nyb2xsVG9wID0gMDtcbiAgICAgICAgdGhpcy5faW5pdGlhbFNjcm9sbExlZnQgPSAwO1xuICAgICAgICB0aGlzLl9pbml0aWFsaXplZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25TY3JvbGwgPSAoZXY6IEV2ZW50KSA9PiB7XG4gICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmICghdGhpcy5fc291cmNlRWxlbWVudCB8fCB0aGlzLl9zb3VyY2VFbGVtZW50ICE9PSBldi50YXJnZXQpIHtcbiAgICAgICAgICAgIHRoaXMuX3NvdXJjZUVsZW1lbnQgPSBldi50YXJnZXQgYXMgRWxlbWVudDtcbiAgICAgICAgICAgIHRoaXMuX2luaXRpYWxTY3JvbGxUb3AgPSB0aGlzLl9zb3VyY2VFbGVtZW50LnNjcm9sbFRvcDtcbiAgICAgICAgICAgIHRoaXMuX2luaXRpYWxTY3JvbGxMZWZ0ID0gdGhpcy5fc291cmNlRWxlbWVudC5zY3JvbGxMZWZ0O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fc291cmNlRWxlbWVudC5zY3JvbGxUb3AgPSB0aGlzLl9pbml0aWFsU2Nyb2xsVG9wO1xuICAgICAgICB0aGlzLl9zb3VyY2VFbGVtZW50LnNjcm9sbExlZnQgPSB0aGlzLl9pbml0aWFsU2Nyb2xsTGVmdDtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uV2hlZWwoZXY6IFdoZWVsRXZlbnQpIHtcbiAgICAgICAgZXYuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxufVxuIl19