/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ScrollStrategy } from './scroll-strategy';
/**
 * Prevents scrolling while the overlay content is shown.
 */
export class BlockScrollStrategy extends ScrollStrategy {
    /**
     * @param {?=} scrollContainer
     */
    constructor(scrollContainer) {
        super(scrollContainer);
        this._initialized = false;
        this.onScroll = (ev) => {
            ev.preventDefault();
            if (!this._sourceElement || this._sourceElement !== ev.target) {
                this._sourceElement = (/** @type {?} */ (ev.target));
                this._initialScrollTop = this._sourceElement.scrollTop;
                this._initialScrollLeft = this._sourceElement.scrollLeft;
            }
            this._sourceElement.scrollTop = this._initialScrollTop;
            this._sourceElement.scrollLeft = this._initialScrollLeft;
        };
    }
    /**
     * \@inheritdoc
     * @param {?} document
     * @param {?} overlayService
     * @param {?} id
     * @return {?}
     */
    initialize(document, overlayService, id) {
        if (this._initialized) {
            return;
        }
        this._document = document;
        this._initialized = true;
    }
    /**
     * \@inheritdoc
     * @return {?}
     */
    attach() {
        this._document.addEventListener('scroll', this.onScroll, true);
        this._document.addEventListener('wheel', this.onWheel, true);
    }
    /**
     * \@inheritdoc
     * @return {?}
     */
    detach() {
        this._document.removeEventListener('scroll', this.onScroll, true);
        this._document.removeEventListener('wheel', this.onWheel, true);
        this._sourceElement = null;
        this._initialScrollTop = 0;
        this._initialScrollLeft = 0;
        this._initialized = false;
    }
    /**
     * @private
     * @param {?} ev
     * @return {?}
     */
    onWheel(ev) {
        ev.stopImmediatePropagation();
        ev.preventDefault();
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvY2stc2Nyb2xsLXN0cmF0ZWd5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9vdmVybGF5L3Njcm9sbC9ibG9jay1zY3JvbGwtc3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7OztBQUtuRCxNQUFNLE9BQU8sbUJBQW9CLFNBQVEsY0FBYzs7OztJQU9uRCxZQUFZLGVBQTZCO1FBQ3JDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQztRQVBuQixpQkFBWSxHQUFHLEtBQUssQ0FBQztRQW9DckIsYUFBUSxHQUFHLENBQUMsRUFBUyxFQUFFLEVBQUU7WUFDN0IsRUFBRSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxjQUFjLEtBQUssRUFBRSxDQUFDLE1BQU0sRUFBRTtnQkFDM0QsSUFBSSxDQUFDLGNBQWMsR0FBRyxtQkFBQSxFQUFFLENBQUMsTUFBTSxFQUFXLENBQUM7Z0JBQzNDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQztnQkFDdkQsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDO2FBQzVEO1lBRUQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDO1lBQ3ZELElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztRQUM3RCxDQUFDLENBQUE7SUF0Q0QsQ0FBQzs7Ozs7Ozs7SUFHTSxVQUFVLENBQUMsUUFBa0IsRUFBRSxjQUFpQyxFQUFFLEVBQVU7UUFDL0UsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ25CLE9BQU87U0FDVjtRQUVELElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1FBQzFCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO0lBQzdCLENBQUM7Ozs7O0lBR00sTUFBTTtRQUNULElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNqRSxDQUFDOzs7OztJQUdNLE1BQU07UUFDVCxJQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2xFLElBQUksQ0FBQyxTQUFTLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7UUFDM0IsSUFBSSxDQUFDLGlCQUFpQixHQUFHLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsa0JBQWtCLEdBQUcsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO0lBQzlCLENBQUM7Ozs7OztJQWNPLE9BQU8sQ0FBQyxFQUFjO1FBQzFCLEVBQUUsQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1FBQzlCLEVBQUUsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN4QixDQUFDO0NBQ0o7Ozs7OztJQXBERywyQ0FBNkI7Ozs7O0lBQzdCLHdDQUE0Qjs7Ozs7SUFDNUIsZ0RBQWtDOzs7OztJQUNsQyxpREFBbUM7Ozs7O0lBQ25DLDZDQUFnQzs7Ozs7SUFnQ2hDLHVDQVVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSWd4T3ZlcmxheVNlcnZpY2UgfSBmcm9tICcuLi9vdmVybGF5JztcbmltcG9ydCB7IFNjcm9sbFN0cmF0ZWd5IH0gZnJvbSAnLi9zY3JvbGwtc3RyYXRlZ3knO1xuXG4vKipcbiAqIFByZXZlbnRzIHNjcm9sbGluZyB3aGlsZSB0aGUgb3ZlcmxheSBjb250ZW50IGlzIHNob3duLlxuICovXG5leHBvcnQgY2xhc3MgQmxvY2tTY3JvbGxTdHJhdGVneSBleHRlbmRzIFNjcm9sbFN0cmF0ZWd5IHtcbiAgICBwcml2YXRlIF9pbml0aWFsaXplZCA9IGZhbHNlO1xuICAgIHByaXZhdGUgX2RvY3VtZW50OiBEb2N1bWVudDtcbiAgICBwcml2YXRlIF9pbml0aWFsU2Nyb2xsVG9wOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfaW5pdGlhbFNjcm9sbExlZnQ6IG51bWJlcjtcbiAgICBwcml2YXRlIF9zb3VyY2VFbGVtZW50OiBFbGVtZW50O1xuXG4gICAgY29uc3RydWN0b3Ioc2Nyb2xsQ29udGFpbmVyPzogSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgc3VwZXIoc2Nyb2xsQ29udGFpbmVyKTtcbiAgICB9XG5cbiAgICAvKiogQGluaGVyaXRkb2MgKi9cbiAgICBwdWJsaWMgaW5pdGlhbGl6ZShkb2N1bWVudDogRG9jdW1lbnQsIG92ZXJsYXlTZXJ2aWNlOiBJZ3hPdmVybGF5U2VydmljZSwgaWQ6IHN0cmluZykge1xuICAgICAgICBpZiAodGhpcy5faW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2RvY3VtZW50ID0gZG9jdW1lbnQ7XG4gICAgICAgIHRoaXMuX2luaXRpYWxpemVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKiogQGluaGVyaXRkb2MgKi9cbiAgICBwdWJsaWMgYXR0YWNoKCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLm9uU2Nyb2xsLCB0cnVlKTtcbiAgICAgICAgdGhpcy5fZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignd2hlZWwnLCB0aGlzLm9uV2hlZWwsIHRydWUpO1xuICAgIH1cblxuICAgIC8qKiBAaW5oZXJpdGRvYyAqL1xuICAgIHB1YmxpYyBkZXRhY2goKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2RvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMub25TY3JvbGwsIHRydWUpO1xuICAgICAgICB0aGlzLl9kb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd3aGVlbCcsIHRoaXMub25XaGVlbCwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuX3NvdXJjZUVsZW1lbnQgPSBudWxsO1xuICAgICAgICB0aGlzLl9pbml0aWFsU2Nyb2xsVG9wID0gMDtcbiAgICAgICAgdGhpcy5faW5pdGlhbFNjcm9sbExlZnQgPSAwO1xuICAgICAgICB0aGlzLl9pbml0aWFsaXplZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25TY3JvbGwgPSAoZXY6IEV2ZW50KSA9PiB7XG4gICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmICghdGhpcy5fc291cmNlRWxlbWVudCB8fCB0aGlzLl9zb3VyY2VFbGVtZW50ICE9PSBldi50YXJnZXQpIHtcbiAgICAgICAgICAgIHRoaXMuX3NvdXJjZUVsZW1lbnQgPSBldi50YXJnZXQgYXMgRWxlbWVudDtcbiAgICAgICAgICAgIHRoaXMuX2luaXRpYWxTY3JvbGxUb3AgPSB0aGlzLl9zb3VyY2VFbGVtZW50LnNjcm9sbFRvcDtcbiAgICAgICAgICAgIHRoaXMuX2luaXRpYWxTY3JvbGxMZWZ0ID0gdGhpcy5fc291cmNlRWxlbWVudC5zY3JvbGxMZWZ0O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fc291cmNlRWxlbWVudC5zY3JvbGxUb3AgPSB0aGlzLl9pbml0aWFsU2Nyb2xsVG9wO1xuICAgICAgICB0aGlzLl9zb3VyY2VFbGVtZW50LnNjcm9sbExlZnQgPSB0aGlzLl9pbml0aWFsU2Nyb2xsTGVmdDtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uV2hlZWwoZXY6IFdoZWVsRXZlbnQpIHtcbiAgICAgICAgZXYuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxufVxuIl19