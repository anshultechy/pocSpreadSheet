/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { VerticalAlignment, HorizontalAlignment, Point, Util } from '../services/overlay/utilities';
import { ConnectedPositioningStrategy } from '../services/overlay/position/connected-positioning-strategy';
import { fadeOut, fadeIn } from '../animations/main';
import { isIE } from '../core/utils';
/** @enum {number} */
var Direction = {
    Top: -1,
    Bottom: 1,
    None: 0,
};
Direction[Direction.Top] = 'Top';
Direction[Direction.Bottom] = 'Bottom';
Direction[Direction.None] = 'None';
/**
 * @hidden \@internal
 */
var /**
 * @hidden \@internal
 */
SelectPositioningStrategy = /** @class */ (function (_super) {
    tslib_1.__extends(SelectPositioningStrategy, _super);
    function SelectPositioningStrategy(select, settings) {
        var _this = _super.call(this) || this;
        _this.select = select;
        _this._selectDefaultSettings = {
            target: null,
            horizontalDirection: HorizontalAlignment.Right,
            verticalDirection: VerticalAlignment.Bottom,
            horizontalStartPoint: HorizontalAlignment.Left,
            verticalStartPoint: VerticalAlignment.Top,
            openAnimation: fadeIn,
            closeAnimation: fadeOut
        };
        _this.defaultWindowToListOffset = 5;
        _this.viewPort = Util.getViewportRect(document);
        _this.settings = Object.assign({}, _this._selectDefaultSettings, settings);
        return _this;
    }
    /**
     * @private
     * @param {?} contentElement
     * @param {?} outBoundsAmount
     * @return {?}
     */
    SelectPositioningStrategy.prototype.positionAndScrollBottom = /**
     * @private
     * @param {?} contentElement
     * @param {?} outBoundsAmount
     * @return {?}
     */
    function (contentElement, outBoundsAmount) {
        contentElement.style.top = this.viewPort.bottom - this.listContainerBoundRect.height - this.defaultWindowToListOffset + "px";
        contentElement.firstElementChild.scrollTop -= outBoundsAmount - (this.defaultWindowToListOffset);
        this.deltaY = this.viewPort.bottom - this.listContainerBoundRect.height -
            this.defaultWindowToListOffset - ((/** @type {?} */ (this.select.input.nativeElement.getBoundingClientRect()))).top;
    };
    /**
     * @private
     * @param {?} contentElement
     * @param {?} CURRENT_POSITION_Y
     * @return {?}
     */
    SelectPositioningStrategy.prototype.positionNoScroll = /**
     * @private
     * @param {?} contentElement
     * @param {?} CURRENT_POSITION_Y
     * @return {?}
     */
    function (contentElement, CURRENT_POSITION_Y) {
        contentElement.style.top = CURRENT_POSITION_Y - this.itemTextToInputTextDiff + "px";
        this.deltaY = CURRENT_POSITION_Y -
            ((/** @type {?} */ (this.select.input.nativeElement.getBoundingClientRect()))).top - this.itemTextToInputTextDiff;
    };
    /**
     * @private
     * @param {?} contentElement
     * @param {?} outBoundsAmount
     * @return {?}
     */
    SelectPositioningStrategy.prototype.positionAndScrollTop = /**
     * @private
     * @param {?} contentElement
     * @param {?} outBoundsAmount
     * @return {?}
     */
    function (contentElement, outBoundsAmount) {
        contentElement.style.top = this.viewPort.top + this.defaultWindowToListOffset + "px";
        contentElement.firstElementChild.scrollTop += outBoundsAmount + this.itemTextToInputTextDiff + this.defaultWindowToListOffset;
        this.deltaY = this.viewPort.top + this.defaultWindowToListOffset -
            ((/** @type {?} */ (this.select.input.nativeElement.getBoundingClientRect()))).top;
    };
    /**
     * @private
     * @param {?} contentElement
     * @param {?} itemHeight
     * @return {?}
     */
    SelectPositioningStrategy.prototype.getItemsOutOfView = /**
     * @private
     * @param {?} contentElement
     * @param {?} itemHeight
     * @return {?}
     */
    function (contentElement, itemHeight) {
        if (contentElement.firstElementChild.scrollHeight <= contentElement.firstElementChild.clientHeight) {
            return {
                'currentScroll': 0,
                'remainingScroll': 0
            };
        }
        /** @type {?} */
        var currentScroll = contentElement.firstElementChild.scrollTop;
        /** @type {?} */
        var remainingScroll = this.select.items.length * itemHeight - currentScroll - this.listContainerBoundRect.height;
        return {
            'currentScroll': currentScroll,
            'remainingScroll': remainingScroll
        };
    };
    /**
     * @private
     * @param {?} elementContainer
     * @param {?} document
     * @return {?}
     */
    SelectPositioningStrategy.prototype.listOutOfBounds = /**
     * @private
     * @param {?} elementContainer
     * @param {?} document
     * @return {?}
     */
    function (elementContainer, document) {
        /** @type {?} */
        var container = {
            TOP: elementContainer.top,
            BOTTOM: elementContainer.bottom,
        };
        /** @type {?} */
        var viewPort = Util.getViewportRect(document);
        /** @type {?} */
        var documentElement = {
            TOP: viewPort.top,
            BOTTOM: viewPort.bottom
        };
        /** @type {?} */
        var returnVals = {
            Direction: Direction.None,
            Amount: 0
        };
        if (documentElement.TOP + this.defaultWindowToListOffset > container.TOP) {
            returnVals.Direction = Direction.Top;
            returnVals.Amount = documentElement.TOP - container.TOP;
        }
        else if (documentElement.BOTTOM - this.defaultWindowToListOffset < container.BOTTOM) {
            returnVals.Direction = Direction.Bottom;
            returnVals.Amount = container.BOTTOM - documentElement.BOTTOM;
        }
        else {
            return null;
        }
        return returnVals;
    };
    /**
     * @param {?} contentElement
     * @param {?} size
     * @param {?=} document
     * @param {?=} initialCall
     * @return {?}
     */
    SelectPositioningStrategy.prototype.position = /**
     * @param {?} contentElement
     * @param {?} size
     * @param {?=} document
     * @param {?=} initialCall
     * @return {?}
     */
    function (contentElement, size, document, initialCall) {
        /** @type {?} */
        var inputElement = this.select.input.nativeElement;
        /** @type {?} */
        var inputRect = (/** @type {?} */ (inputElement.getBoundingClientRect()));
        this.listContainerBoundRect = (/** @type {?} */ (contentElement.getBoundingClientRect()));
        /** @type {?} */
        var LIST_HEIGHT = this.listContainerBoundRect.height;
        if (!initialCall) {
            this.deltaX = inputRect.left - this.itemTextPadding - this.itemTextIndent;
            /** @type {?} */
            var point = new Point(this.deltaX, inputRect.top + this.deltaY);
            this.settings.target = point;
            _super.prototype.position.call(this, contentElement, size);
            return;
        }
        /** @type {?} */
        var START = {
            X: inputRect.left,
            Y: inputRect.top
        };
        /** @type {?} */
        var itemElement;
        if (this.select.selectedItem) {
            itemElement = this.select.selectedItem.element.nativeElement;
            // D.P. Feb 22 2019, #3921 Force item scroll before measuring in IE11, due to base scrollToItem delay
            if (isIE()) {
                contentElement.firstElementChild.scrollTop = this.select.calculateScrollPosition(this.select.selectedItem);
            }
        }
        else {
            itemElement = this.select.getFirstItemElement();
        }
        /** @type {?} */
        var inputHeight = inputRect.height;
        /** @type {?} */
        var itemBoundRect = (/** @type {?} */ (itemElement.getBoundingClientRect()));
        /** @type {?} */
        var itemTopListOffset = itemBoundRect.top - this.listContainerBoundRect.top;
        /** @type {?} */
        var itemHeight = itemBoundRect.height;
        /** @type {?} */
        var inputFontSize = window.getComputedStyle(inputElement).fontSize;
        /** @type {?} */
        var numericInputFontSize = parseInt(inputFontSize.slice(0, inputFontSize.indexOf('p')), 10) || 0;
        /** @type {?} */
        var itemFontSize = window.getComputedStyle(itemElement).fontSize;
        /** @type {?} */
        var numericItemFontSize = parseInt(itemFontSize.slice(0, itemFontSize.indexOf('p')), 10) || 0;
        /** @type {?} */
        var inputTextToInputTop = (inputHeight - numericInputFontSize) / 2;
        /** @type {?} */
        var itemTextToItemTop = (itemHeight - numericItemFontSize) / 2;
        this.itemTextToInputTextDiff = itemTextToItemTop - inputTextToInputTop;
        /** @type {?} */
        var CURRENT_POSITION_Y = START.Y - itemTopListOffset;
        /** @type {?} */
        var CURRENT_BOTTOM_Y = CURRENT_POSITION_Y + this.listContainerBoundRect.height;
        /** @type {?} */
        var OUT_OF_BOUNDS = this.listOutOfBounds({ top: CURRENT_POSITION_Y, bottom: CURRENT_BOTTOM_Y }, document);
        if (OUT_OF_BOUNDS) {
            if (OUT_OF_BOUNDS.Direction === Direction.Top) {
                CURRENT_POSITION_Y = START.Y;
            }
            else {
                CURRENT_POSITION_Y = -1 * (LIST_HEIGHT - (itemHeight - (itemHeight - inputHeight) / 2));
                CURRENT_POSITION_Y += START.Y;
            }
        }
        /** @type {?} */
        var selectItemPaddingHorizontal = 24;
        /** @type {?} */
        var itemLeftPadding = window.getComputedStyle(itemElement).paddingLeft;
        /** @type {?} */
        var itemTextIndent = window.getComputedStyle(itemElement).textIndent;
        /** @type {?} */
        var numericLeftPadding = parseInt(itemLeftPadding.slice(0, itemLeftPadding.indexOf('p')), 10) || 0;
        /** @type {?} */
        var numericTextIndent = parseInt(itemTextIndent.slice(0, itemTextIndent.indexOf('r')), 10) || 0;
        this.itemTextPadding = numericLeftPadding;
        this.itemTextIndent = numericTextIndent;
        contentElement.style.left += START.X - numericLeftPadding - numericTextIndent + "px";
        contentElement.style.width = inputRect.width + 24 + selectItemPaddingHorizontal * 2 + 'px';
        this.deltaX = START.X - numericLeftPadding - numericTextIndent;
        /** @type {?} */
        var currentScroll = this.getItemsOutOfView(contentElement, itemHeight)['currentScroll'];
        /** @type {?} */
        var remainingScroll = this.getItemsOutOfView(contentElement, itemHeight)['remainingScroll'];
        // (5 items or less) no scroll and respectively no remaining scroll
        if (remainingScroll === 0 && currentScroll === 0) {
            this.positionNoScroll(contentElement, CURRENT_POSITION_Y);
        }
        // (more than 5 items) there is scroll OR remaining scroll
        if (remainingScroll !== 0 || currentScroll !== 0) {
            if (remainingScroll !== 0 && !OUT_OF_BOUNDS) {
                this.positionNoScroll(contentElement, CURRENT_POSITION_Y);
            }
            // (more than 5 items) and container getting out of the visible port
            if (remainingScroll !== 0 && OUT_OF_BOUNDS) {
                // if there is enough remaining scroll to scroll the item
                if (remainingScroll > itemHeight) {
                    if (OUT_OF_BOUNDS.Direction === Direction.Top) {
                        this.positionAndScrollTop(contentElement, OUT_OF_BOUNDS.Amount);
                        return;
                    }
                    if (OUT_OF_BOUNDS.Direction === Direction.Bottom) {
                        // (more than 5 items) and no current scroll
                        if (currentScroll === 0) {
                            this.positionNoScroll(contentElement, CURRENT_POSITION_Y);
                            return;
                            // (more than 5 items) and current scroll
                        }
                        else {
                            this.positionAndScrollBottom(contentElement, OUT_OF_BOUNDS.Amount);
                            return;
                        }
                    }
                }
                // if there is no enough remaining scroll to scroll the item
                if (remainingScroll < itemHeight) {
                    if (OUT_OF_BOUNDS.Direction === Direction.Top) {
                        this.positionNoScroll(contentElement, CURRENT_POSITION_Y);
                    }
                    if (OUT_OF_BOUNDS.Direction === Direction.Bottom) {
                        this.positionAndScrollBottom(contentElement, OUT_OF_BOUNDS.Amount);
                    }
                }
            }
            // (more than 5 items) and no remaining scroll
            if (remainingScroll === 0 && currentScroll !== 0) {
                if (OUT_OF_BOUNDS) {
                    if (OUT_OF_BOUNDS.Direction === Direction.Bottom) {
                        this.positionAndScrollBottom(contentElement, OUT_OF_BOUNDS.Amount);
                        return;
                    }
                }
                this.positionNoScroll(contentElement, CURRENT_POSITION_Y);
            }
        }
    };
    return SelectPositioningStrategy;
}(ConnectedPositioningStrategy));
/**
 * @hidden \@internal
 */
export { SelectPositioningStrategy };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SelectPositioningStrategy.prototype._selectDefaultSettings;
    /** @type {?} */
    SelectPositioningStrategy.prototype.settings;
    /**
     * @type {?}
     * @private
     */
    SelectPositioningStrategy.prototype.defaultWindowToListOffset;
    /**
     * @type {?}
     * @private
     */
    SelectPositioningStrategy.prototype.viewPort;
    /**
     * @type {?}
     * @private
     */
    SelectPositioningStrategy.prototype.deltaY;
    /**
     * @type {?}
     * @private
     */
    SelectPositioningStrategy.prototype.deltaX;
    /**
     * @type {?}
     * @private
     */
    SelectPositioningStrategy.prototype.itemTextPadding;
    /**
     * @type {?}
     * @private
     */
    SelectPositioningStrategy.prototype.itemTextIndent;
    /**
     * @type {?}
     * @private
     */
    SelectPositioningStrategy.prototype.listContainerBoundRect;
    /**
     * @type {?}
     * @private
     */
    SelectPositioningStrategy.prototype.itemTextToInputTextDiff;
    /** @type {?} */
    SelectPositioningStrategy.prototype.select;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LXBvc2l0aW9uaW5nLXN0cmF0ZWd5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zZWxlY3Qvc2VsZWN0LXBvc2l0aW9uaW5nLXN0cmF0ZWd5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLG1CQUFtQixFQUEwQixLQUFLLEVBQUUsSUFBSSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDNUgsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sNkRBQTZELENBQUM7QUFFM0csT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVyRCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7SUFJakMsT0FBUTtJQUNSLFNBQVU7SUFDVixPQUFROzs7Ozs7OztBQUlaOzs7O0lBQStDLHFEQUE0QjtJQWF2RSxtQ0FBbUIsTUFBMEIsRUFBRSxRQUEyQjtRQUExRSxZQUNJLGlCQUFPLFNBRVY7UUFIa0IsWUFBTSxHQUFOLE1BQU0sQ0FBb0I7UUFYckMsNEJBQXNCLEdBQUc7WUFDN0IsTUFBTSxFQUFFLElBQUk7WUFDWixtQkFBbUIsRUFBRSxtQkFBbUIsQ0FBQyxLQUFLO1lBQzlDLGlCQUFpQixFQUFFLGlCQUFpQixDQUFDLE1BQU07WUFDM0Msb0JBQW9CLEVBQUUsbUJBQW1CLENBQUMsSUFBSTtZQUM5QyxrQkFBa0IsRUFBRSxpQkFBaUIsQ0FBQyxHQUFHO1lBQ3pDLGFBQWEsRUFBRSxNQUFNO1lBQ3JCLGNBQWMsRUFBRSxPQUFPO1NBQzFCLENBQUM7UUFRTSwrQkFBeUIsR0FBRyxDQUFDLENBQUM7UUFDOUIsY0FBUSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUM7UUFKOUMsS0FBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxLQUFJ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LDREQUE0RDtnQkFDNUQsSUFBSSxlQUFlLEdBQUcsVUFBVSxFQUFFO29CQUM5QixJQUFJLGFBQWEsQ0FBQyxTQUFTLEtBQUssU0FBUyxDQUFDLEdBQUcsRUFBRTt3QkFDM0MsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO3FCQUU3RDtvQkFDRCxJQUFJLGFBQWEsQ0FBQyxTQUFTLEtBQUssU0FBUyxDQUFDLE1BQU0sRUFBRTt3QkFDOUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLGNBQWMsRUFBRSxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7cUJBQ3RFO2lCQUNKO2FBQ0o7WUFDRCw4Q0FBOEM7WUFDOUMsSUFBSSxlQUFlLEtBQUssQ0FBQyxJQUFJLGFBQWEsS0FBSyxDQUFDLEVBQUU7Z0JBQzlDLElBQUksYUFBYSxFQUFFO29CQUNmLElBQUksYUFBYSxDQUFDLFNBQVMsS0FBSyxTQUFTLENBQUMsTUFBTSxFQUFFO3dCQUM5QyxJQUFJLENBQUMsdUJBQXVCLENBQUMsY0FBYyxFQUFFLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQzt3QkFDbkUsT0FBTztxQkFDVjtpQkFDSjtnQkFDRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7YUFDN0Q7U0FDSjtJQUNMLENBQUM7SUFDTCxnQ0FBQztBQUFELENBQUMsQUF2TkQsQ0FBK0MsNEJBQTRCLEdBdU4xRTs7Ozs7Ozs7OztJQXJORywyREFRRTs7SUFDRiw2Q0FBa0M7Ozs7O0lBT2xDLDhEQUFzQzs7Ozs7SUFDdEMsNkNBQWtEOzs7OztJQUNsRCwyQ0FBdUI7Ozs7O0lBQ3ZCLDJDQUF1Qjs7Ozs7SUFDdkIsb0RBQWdDOzs7OztJQUNoQyxtREFBK0I7Ozs7O0lBQy9CLDJEQUF3Qzs7Ozs7SUFDeEMsNERBQXdDOztJQVo1QiwyQ0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWZXJ0aWNhbEFsaWdubWVudCwgSG9yaXpvbnRhbEFsaWdubWVudCwgUG9zaXRpb25TZXR0aW5ncywgU2l6ZSwgUG9pbnQsIFV0aWwgfSBmcm9tICcuLi9zZXJ2aWNlcy9vdmVybGF5L3V0aWxpdGllcyc7XG5pbXBvcnQgeyBDb25uZWN0ZWRQb3NpdGlvbmluZ1N0cmF0ZWd5IH0gZnJvbSAnLi4vc2VydmljZXMvb3ZlcmxheS9wb3NpdGlvbi9jb25uZWN0ZWQtcG9zaXRpb25pbmctc3RyYXRlZ3knO1xuaW1wb3J0IHsgSVBvc2l0aW9uU3RyYXRlZ3kgfSBmcm9tICcuLi9zZXJ2aWNlcy9vdmVybGF5L3Bvc2l0aW9uJztcbmltcG9ydCB7IGZhZGVPdXQsIGZhZGVJbiB9IGZyb20gJy4uL2FuaW1hdGlvbnMvbWFpbic7XG5pbXBvcnQgeyBJZ3hTZWxlY3RDb21wb25lbnQgfSBmcm9tICcuL3NlbGVjdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgaXNJRSB9IGZyb20gJy4uL2NvcmUvdXRpbHMnO1xuXG4vKiogQGhpZGRlbiAqL1xuZW51bSBEaXJlY3Rpb24ge1xuICAgIFRvcCA9IC0xLFxuICAgIEJvdHRvbSA9IDEsXG4gICAgTm9uZSA9IDBcbn1cblxuLyoqIEBoaWRkZW4gQGludGVybmFsICovXG5leHBvcnQgY2xhc3MgU2VsZWN0UG9zaXRpb25pbmdTdHJhdGVneSBleHRlbmRzIENvbm5lY3RlZFBvc2l0aW9uaW5nU3RyYXRlZ3kgaW1wbGVtZW50cyBJUG9zaXRpb25TdHJhdGVneSB7XG5cbiAgICBwcml2YXRlIF9zZWxlY3REZWZhdWx0U2V0dGluZ3MgPSB7XG4gICAgICAgIHRhcmdldDogbnVsbCxcbiAgICAgICAgaG9yaXpvbnRhbERpcmVjdGlvbjogSG9yaXpvbnRhbEFsaWdubWVudC5SaWdodCxcbiAgICAgICAgdmVydGljYWxEaXJlY3Rpb246IFZlcnRpY2FsQWxpZ25tZW50LkJvdHRvbSxcbiAgICAgICAgaG9yaXpvbnRhbFN0YXJ0UG9pbnQ6IEhvcml6b250YWxBbGlnbm1lbnQuTGVmdCxcbiAgICAgICAgdmVydGljYWxTdGFydFBvaW50OiBWZXJ0aWNhbEFsaWdubWVudC5Ub3AsXG4gICAgICAgIG9wZW5BbmltYXRpb246IGZhZGVJbixcbiAgICAgICAgY2xvc2VBbmltYXRpb246IGZhZGVPdXRcbiAgICB9O1xuICAgIHB1YmxpYyBzZXR0aW5nczogUG9zaXRpb25TZXR0aW5ncztcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBzZWxlY3Q6IElneFNlbGVjdENvbXBvbmVudCwgc2V0dGluZ3M/OiBQb3NpdGlvblNldHRpbmdzKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9zZWxlY3REZWZhdWx0U2V0dGluZ3MsIHNldHRpbmdzKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGRlZmF1bHRXaW5kb3dUb0xpc3RPZmZzZXQgPSA1O1xuICAgIHByaXZhdGUgdmlld1BvcnQgPSBVdGlsLmdldFZpZXdwb3J0UmVjdChkb2N1bWVudCk7XG4gICAgcHJpdmF0ZSBkZWx0YVk6IG51bWJlcjtcbiAgICBwcml2YXRlIGRlbHRhWDogbnVtYmVyO1xuICAgIHByaXZhdGUgaXRlbVRleHRQYWRkaW5nOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBpdGVtVGV4dEluZGVudDogbnVtYmVyO1xuICAgIHByaXZhdGUgbGlzdENvbnRhaW5lckJvdW5kUmVjdDogRE9NUmVjdDtcbiAgICBwcml2YXRlIGl0ZW1UZXh0VG9JbnB1dFRleHREaWZmOiBudW1iZXI7XG5cbiAgICBwcml2YXRlIHBvc2l0aW9uQW5kU2Nyb2xsQm90dG9tKGNvbnRlbnRFbGVtZW50OiBIVE1MRWxlbWVudCwgb3V0Qm91bmRzQW1vdW50OiBudW1iZXIpIHtcbiAgICAgICAgY29udGVudEVsZW1lbnQuc3R5bGUudG9wID0gYCR7dGhpcy52aWV3UG9ydC5ib3R0b20gLSB0aGlzLmxpc3RDb250YWluZXJCb3VuZFJlY3QuaGVpZ2h0IC0gdGhpcy5kZWZhdWx0V2luZG93VG9MaXN0T2Zmc2V0fXB4YDtcbiAgICAgICAgY29udGVudEVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQuc2Nyb2xsVG9wIC09IG91dEJvdW5kc0Ftb3VudCAtICh0aGlzLmRlZmF1bHRXaW5kb3dUb0xpc3RPZmZzZXQpO1xuICAgICAgICB0aGlzLmRlbHRhWSA9IHRoaXMudmlld1BvcnQuYm90dG9tIC0gdGhpcy5saXN0Q29udGFpbmVyQm91bmRSZWN0LmhlaWdodCAtXG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRXaW5kb3dUb0xpc3RPZmZzZXQgLSAodGhpcy5zZWxlY3QuaW5wdXQubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSBhcyBET01SZWN0KS50b3A7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBwb3NpdGlvbk5vU2Nyb2xsKGNvbnRlbnRFbGVtZW50OiBIVE1MRWxlbWVudCwgQ1VSUkVOVF9QT1NJVElPTl9ZOiBudW1iZXIpIHtcbiAgICAgICAgY29udGVudEVsZW1lbnQuc3R5bGUudG9wID0gYCR7Q1VSUkVOVF9QT1NJVElPTl9ZIC0gdGhpcy5pdGVtVGV4dFRvSW5wdXRUZXh0RGlmZn1weGA7XG4gICAgICAgIHRoaXMuZGVsdGFZID0gQ1VSUkVOVF9QT1NJVElPTl9ZIC1cbiAgICAgICAgICAgICh0aGlzLnNlbGVjdC5pbnB1dC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIGFzIERPTVJlY3QpLnRvcCAtIHRoaXMuaXRlbVRleHRUb0lucHV0VGV4dERpZmY7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBwb3NpdGlvbkFuZFNjcm9sbFRvcChjb250ZW50RWxlbWVudDogSFRNTEVsZW1lbnQsIG91dEJvdW5kc0Ftb3VudDogbnVtYmVyKSB7XG4gICAgICAgIGNvbnRlbnRFbGVtZW50LnN0eWxlLnRvcCA9IGAke3RoaXMudmlld1BvcnQudG9wICsgdGhpcy5kZWZhdWx0V2luZG93VG9MaXN0T2Zmc2V0fXB4YDtcbiAgICAgICAgY29udGVudEVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQuc2Nyb2xsVG9wICs9IG91dEJvdW5kc0Ftb3VudCArIHRoaXMuaXRlbVRleHRUb0lucHV0VGV4dERpZmYgKyB0aGlzLmRlZmF1bHRXaW5kb3dUb0xpc3RPZmZzZXQ7XG4gICAgICAgIHRoaXMuZGVsdGFZID0gdGhpcy52aWV3UG9ydC50b3AgKyB0aGlzLmRlZmF1bHRXaW5kb3dUb0xpc3RPZmZzZXQgLVxuICAgICAgICAgICAgKHRoaXMuc2VsZWN0LmlucHV0Lm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgYXMgRE9NUmVjdCkudG9wO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0SXRlbXNPdXRPZlZpZXcoY29udGVudEVsZW1lbnQ6IEhUTUxFbGVtZW50LCBpdGVtSGVpZ2h0OiBudW1iZXIpOiB7XG4gICAgICAgICdjdXJyZW50U2Nyb2xsJzogbnVtYmVyLFxuICAgICAgICAncmVtYWluaW5nU2Nyb2xsJzogbnVtYmVyXG4gICAgfSB7XG4gICAgICAgIGlmIChjb250ZW50RWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZC5zY3JvbGxIZWlnaHQgPD0gY29udGVudEVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQuY2xpZW50SGVpZ2h0KSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICdjdXJyZW50U2Nyb2xsJzogMCxcbiAgICAgICAgICAgICAgICAncmVtYWluaW5nU2Nyb2xsJzogMFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjdXJyZW50U2Nyb2xsID0gY29udGVudEVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQuc2Nyb2xsVG9wO1xuICAgICAgICBjb25zdCByZW1haW5pbmdTY3JvbGwgPSB0aGlzLnNlbGVjdC5pdGVtcy5sZW5ndGggKiBpdGVtSGVpZ2h0IC0gY3VycmVudFNjcm9sbCAtIHRoaXMubGlzdENvbnRhaW5lckJvdW5kUmVjdC5oZWlnaHQ7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAnY3VycmVudFNjcm9sbCc6IGN1cnJlbnRTY3JvbGwsXG4gICAgICAgICAgICAncmVtYWluaW5nU2Nyb2xsJzogcmVtYWluaW5nU2Nyb2xsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBsaXN0T3V0T2ZCb3VuZHMoZWxlbWVudENvbnRhaW5lcjogeyB0b3A6IG51bWJlciwgYm90dG9tOiBudW1iZXIgfSwgZG9jdW1lbnQ6IERvY3VtZW50KToge1xuICAgICAgICBEaXJlY3Rpb246IERpcmVjdGlvbixcbiAgICAgICAgQW1vdW50OiBudW1iZXJcbiAgICB9IHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0ge1xuICAgICAgICAgICAgVE9QOiBlbGVtZW50Q29udGFpbmVyLnRvcCxcbiAgICAgICAgICAgIEJPVFRPTTogZWxlbWVudENvbnRhaW5lci5ib3R0b20sXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHZpZXdQb3J0ID0gVXRpbC5nZXRWaWV3cG9ydFJlY3QoZG9jdW1lbnQpO1xuICAgICAgICBjb25zdCBkb2N1bWVudEVsZW1lbnQgPSB7XG4gICAgICAgICAgICBUT1A6IHZpZXdQb3J0LnRvcCxcbiAgICAgICAgICAgIEJPVFRPTTogdmlld1BvcnQuYm90dG9tXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJldHVyblZhbHMgPSB7XG4gICAgICAgICAgICBEaXJlY3Rpb246IERpcmVjdGlvbi5Ob25lLFxuICAgICAgICAgICAgQW1vdW50OiAwXG4gICAgICAgIH07XG4gICAgICAgIGlmIChkb2N1bWVudEVsZW1lbnQuVE9QICsgdGhpcy5kZWZhdWx0V2luZG93VG9MaXN0T2Zmc2V0ID4gY29udGFpbmVyLlRPUCkge1xuICAgICAgICAgICAgcmV0dXJuVmFscy5EaXJlY3Rpb24gPSBEaXJlY3Rpb24uVG9wO1xuICAgICAgICAgICAgcmV0dXJuVmFscy5BbW91bnQgPSBkb2N1bWVudEVsZW1lbnQuVE9QIC0gY29udGFpbmVyLlRPUDtcbiAgICAgICAgfSBlbHNlIGlmIChkb2N1bWVudEVsZW1lbnQuQk9UVE9NIC0gdGhpcy5kZWZhdWx0V2luZG93VG9MaXN0T2Zmc2V0IDwgY29udGFpbmVyLkJPVFRPTSkge1xuICAgICAgICAgICAgcmV0dXJuVmFscy5EaXJlY3Rpb24gPSBEaXJlY3Rpb24uQm90dG9tO1xuICAgICAgICAgICAgcmV0dXJuVmFscy5BbW91bnQgPSBjb250YWluZXIuQk9UVE9NIC0gZG9jdW1lbnRFbGVtZW50LkJPVFRPTTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXR1cm5WYWxzO1xuICAgIH1cblxuICAgIHBvc2l0aW9uKGNvbnRlbnRFbGVtZW50OiBIVE1MRWxlbWVudCwgc2l6ZTogU2l6ZSwgZG9jdW1lbnQ/OiBEb2N1bWVudCwgaW5pdGlhbENhbGw/OiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGlucHV0RWxlbWVudCA9IHRoaXMuc2VsZWN0LmlucHV0Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IGlucHV0UmVjdCA9IGlucHV0RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSBhcyBET01SZWN0O1xuICAgICAgICB0aGlzLmxpc3RDb250YWluZXJCb3VuZFJlY3QgPSBjb250ZW50RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSBhcyBET01SZWN0O1xuICAgICAgICBjb25zdCBMSVNUX0hFSUdIVCA9IHRoaXMubGlzdENvbnRhaW5lckJvdW5kUmVjdC5oZWlnaHQ7XG4gICAgICAgIGlmICghaW5pdGlhbENhbGwpIHtcbiAgICAgICAgICAgIHRoaXMuZGVsdGFYID0gaW5wdXRSZWN0LmxlZnQgLSB0aGlzLml0ZW1UZXh0UGFkZGluZyAtIHRoaXMuaXRlbVRleHRJbmRlbnQ7XG4gICAgICAgICAgICBjb25zdCBwb2ludCA9IG5ldyBQb2ludCh0aGlzLmRlbHRhWCwgaW5wdXRSZWN0LnRvcCArIHRoaXMuZGVsdGFZKTtcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MudGFyZ2V0ID0gcG9pbnQ7XG4gICAgICAgICAgICBzdXBlci5wb3NpdGlvbihjb250ZW50RWxlbWVudCwgc2l6ZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBTVEFSVCA9IHtcbiAgICAgICAgICAgIFg6IGlucHV0UmVjdC5sZWZ0LFxuICAgICAgICAgICAgWTogaW5wdXRSZWN0LnRvcFxuICAgICAgICB9O1xuXG4gICAgICAgIGxldCBpdGVtRWxlbWVudDtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0LnNlbGVjdGVkSXRlbSkge1xuICAgICAgICAgICAgaXRlbUVsZW1lbnQgPSB0aGlzLnNlbGVjdC5zZWxlY3RlZEl0ZW0uZWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICAgICAgICAgICAgLy8gRC5QLiBGZWIgMjIgMjAxOSwgIzM5MjEgRm9yY2UgaXRlbSBzY3JvbGwgYmVmb3JlIG1lYXN1cmluZyBpbiBJRTExLCBkdWUgdG8gYmFzZSBzY3JvbGxUb0l0ZW0gZGVsYXlcbiAgICAgICAgICAgIGlmIChpc0lFKCkpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50RWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZC5zY3JvbGxUb3AgPSB0aGlzLnNlbGVjdC5jYWxjdWxhdGVTY3JvbGxQb3NpdGlvbih0aGlzLnNlbGVjdC5zZWxlY3RlZEl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaXRlbUVsZW1lbnQgPSB0aGlzLnNlbGVjdC5nZXRGaXJzdEl0ZW1FbGVtZW50KCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaW5wdXRIZWlnaHQgPSBpbnB1dFJlY3QuaGVpZ2h0O1xuICAgICAgICBjb25zdCBpdGVtQm91bmRSZWN0ID0gaXRlbUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgYXMgRE9NUmVjdDtcbiAgICAgICAgY29uc3QgaXRlbVRvcExpc3RPZmZzZXQgPSBpdGVtQm91bmRSZWN0LnRvcCAtIHRoaXMubGlzdENvbnRhaW5lckJvdW5kUmVjdC50b3A7XG4gICAgICAgIGNvbnN0IGl0ZW1IZWlnaHQgPSBpdGVtQm91bmRSZWN0LmhlaWdodDtcblxuICAgICAgICBjb25zdCBpbnB1dEZvbnRTaXplID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoaW5wdXRFbGVtZW50KS5mb250U2l6ZTtcbiAgICAgICAgY29uc3QgbnVtZXJpY0lucHV0Rm9udFNpemUgPSBwYXJzZUludChpbnB1dEZvbnRTaXplLnNsaWNlKDAsIGlucHV0Rm9udFNpemUuaW5kZXhPZigncCcpKSwgMTApIHx8IDA7XG4gICAgICAgIGNvbnN0IGl0ZW1Gb250U2l6ZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGl0ZW1FbGVtZW50KS5mb250U2l6ZTtcbiAgICAgICAgY29uc3QgbnVtZXJpY0l0ZW1Gb250U2l6ZSA9IHBhcnNlSW50KGl0ZW1Gb250U2l6ZS5zbGljZSgwLCBpdGVtRm9udFNpemUuaW5kZXhPZigncCcpKSwgMTApIHx8IDA7XG4gICAgICAgIGNvbnN0IGlucHV0VGV4dFRvSW5wdXRUb3AgPSAoaW5wdXRIZWlnaHQgLSBudW1lcmljSW5wdXRGb250U2l6ZSkgLyAyO1xuICAgICAgICBjb25zdCBpdGVtVGV4dFRvSXRlbVRvcCA9IChpdGVtSGVpZ2h0IC0gbnVtZXJpY0l0ZW1Gb250U2l6ZSkgLyAyO1xuICAgICAgICB0aGlzLml0ZW1UZXh0VG9JbnB1dFRleHREaWZmID0gaXRlbVRleHRUb0l0ZW1Ub3AgLSBpbnB1dFRleHRUb0lucHV0VG9wO1xuXG4gICAgICAgIGxldCBDVVJSRU5UX1BPU0lUSU9OX1kgPSBTVEFSVC5ZIC0gaXRlbVRvcExpc3RPZmZzZXQ7XG4gICAgICAgIGNvbnN0IENVUlJFTlRfQk9UVE9NX1kgPSBDVVJSRU5UX1BPU0lUSU9OX1kgKyB0aGlzLmxpc3RDb250YWluZXJCb3VuZFJlY3QuaGVpZ2h0O1xuXG4gICAgICAgIGNvbnN0IE9VVF9PRl9CT1VORFM6IHtcbiAgICAgICAgICAgIERpcmVjdGlvbjogRGlyZWN0aW9uLFxuICAgICAgICAgICAgQW1vdW50OiBudW1iZXJcbiAgICAgICAgfSA9IHRoaXMubGlzdE91dE9mQm91bmRzKHsgdG9wOiBDVVJSRU5UX1BPU0lUSU9OX1ksIGJvdHRvbTogQ1VSUkVOVF9CT1RUT01fWSB9LCBkb2N1bWVudCk7XG4gICAgICAgIGlmIChPVVRfT0ZfQk9VTkRTKSB7XG4gICAgICAgICAgICBpZiAoT1VUX09GX0JPVU5EUy5EaXJlY3Rpb24gPT09IERpcmVjdGlvbi5Ub3ApIHtcbiAgICAgICAgICAgICAgICBDVVJSRU5UX1BPU0lUSU9OX1kgPSBTVEFSVC5ZO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBDVVJSRU5UX1BPU0lUSU9OX1kgPSAtMSAqIChMSVNUX0hFSUdIVCAtIChpdGVtSGVpZ2h0IC0gKGl0ZW1IZWlnaHQgLSBpbnB1dEhlaWdodCkgLyAyKSk7XG4gICAgICAgICAgICAgICAgQ1VSUkVOVF9QT1NJVElPTl9ZICs9IFNUQVJULlk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2VsZWN0SXRlbVBhZGRpbmdIb3Jpem9udGFsID0gMjQ7XG4gICAgICAgIGNvbnN0IGl0ZW1MZWZ0UGFkZGluZyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGl0ZW1FbGVtZW50KS5wYWRkaW5nTGVmdDtcbiAgICAgICAgY29uc3QgaXRlbVRleHRJbmRlbnQgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShpdGVtRWxlbWVudCkudGV4dEluZGVudDtcbiAgICAgICAgY29uc3QgbnVtZXJpY0xlZnRQYWRkaW5nID0gcGFyc2VJbnQoaXRlbUxlZnRQYWRkaW5nLnNsaWNlKDAsIGl0ZW1MZWZ0UGFkZGluZy5pbmRleE9mKCdwJykpLCAxMCkgfHwgMDtcbiAgICAgICAgY29uc3QgbnVtZXJpY1RleHRJbmRlbnQgPSBwYXJzZUludChpdGVtVGV4dEluZGVudC5zbGljZSgwLCBpdGVtVGV4dEluZGVudC5pbmRleE9mKCdyJykpLCAxMCkgfHwgMDtcbiAgICAgICAgdGhpcy5pdGVtVGV4dFBhZGRpbmcgPSBudW1lcmljTGVmdFBhZGRpbmc7XG4gICAgICAgIHRoaXMuaXRlbVRleHRJbmRlbnQgPSBudW1lcmljVGV4dEluZGVudDtcbiAgICAgICAgY29udGVudEVsZW1lbnQuc3R5bGUubGVmdCArPSBgJHtTVEFSVC5YIC0gbnVtZXJpY0xlZnRQYWRkaW5nIC0gbnVtZXJpY1RleHRJbmRlbnR9cHhgO1xuICAgICAgICBjb250ZW50RWxlbWVudC5zdHlsZS53aWR0aCA9IGlucHV0UmVjdC53aWR0aCArIDI0ICsgc2VsZWN0SXRlbVBhZGRpbmdIb3Jpem9udGFsICogMiArICdweCc7XG4gICAgICAgIHRoaXMuZGVsdGFYID0gU1RBUlQuWCAtIG51bWVyaWNMZWZ0UGFkZGluZyAtIG51bWVyaWNUZXh0SW5kZW50O1xuICAgICAgICBjb25zdCBjdXJyZW50U2Nyb2xsID0gdGhpcy5nZXRJdGVtc091dE9mVmlldyhjb250ZW50RWxlbWVudCwgaXRlbUhlaWdodClbJ2N1cnJlbnRTY3JvbGwnXTtcbiAgICAgICAgY29uc3QgcmVtYWluaW5nU2Nyb2xsID0gdGhpcy5nZXRJdGVtc091dE9mVmlldyhjb250ZW50RWxlbWVudCwgaXRlbUhlaWdodClbJ3JlbWFpbmluZ1Njcm9sbCddO1xuXG4gICAgICAgIC8vICg1IGl0ZW1zIG9yIGxlc3MpIG5vIHNjcm9sbCBhbmQgcmVzcGVjdGl2ZWx5IG5vIHJlbWFpbmluZyBzY3JvbGxcbiAgICAgICAgaWYgKHJlbWFpbmluZ1Njcm9sbCA9PT0gMCAmJiBjdXJyZW50U2Nyb2xsID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uTm9TY3JvbGwoY29udGVudEVsZW1lbnQsIENVUlJFTlRfUE9TSVRJT05fWSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gKG1vcmUgdGhhbiA1IGl0ZW1zKSB0aGVyZSBpcyBzY3JvbGwgT1IgcmVtYWluaW5nIHNjcm9sbFxuICAgICAgICBpZiAocmVtYWluaW5nU2Nyb2xsICE9PSAwIHx8IGN1cnJlbnRTY3JvbGwgIT09IDApIHtcbiAgICAgICAgICAgIGlmIChyZW1haW5pbmdTY3JvbGwgIT09IDAgJiYgIU9VVF9PRl9CT1VORFMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uTm9TY3JvbGwoY29udGVudEVsZW1lbnQsIENVUlJFTlRfUE9TSVRJT05fWSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyAobW9yZSB0aGFuIDUgaXRlbXMpIGFuZCBjb250YWluZXIgZ2V0dGluZyBvdXQgb2YgdGhlIHZpc2libGUgcG9ydFxuICAgICAgICAgICAgaWYgKHJlbWFpbmluZ1Njcm9sbCAhPT0gMCAmJiBPVVRfT0ZfQk9VTkRTKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlcmUgaXMgZW5vdWdoIHJlbWFpbmluZyBzY3JvbGwgdG8gc2Nyb2xsIHRoZSBpdGVtXG4gICAgICAgICAgICAgICAgaWYgKHJlbWFpbmluZ1Njcm9sbCA+IGl0ZW1IZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKE9VVF9PRl9CT1VORFMuRGlyZWN0aW9uID09PSBEaXJlY3Rpb24uVG9wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uQW5kU2Nyb2xsVG9wKGNvbnRlbnRFbGVtZW50LCBPVVRfT0ZfQk9VTkRTLkFtb3VudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKE9VVF9PRl9CT1VORFMuRGlyZWN0aW9uID09PSBEaXJlY3Rpb24uQm90dG9tKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAobW9yZSB0aGFuIDUgaXRlbXMpIGFuZCBubyBjdXJyZW50IHNjcm9sbFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRTY3JvbGwgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uTm9TY3JvbGwoY29udGVudEVsZW1lbnQsIENVUlJFTlRfUE9TSVRJT05fWSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIChtb3JlIHRoYW4gNSBpdGVtcykgYW5kIGN1cnJlbnQgc2Nyb2xsXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb25BbmRTY3JvbGxCb3R0b20oY29udGVudEVsZW1lbnQsIE9VVF9PRl9CT1VORFMuQW1vdW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlcmUgaXMgbm8gZW5vdWdoIHJlbWFpbmluZyBzY3JvbGwgdG8gc2Nyb2xsIHRoZSBpdGVtXG4gICAgICAgICAgICAgICAgaWYgKHJlbWFpbmluZ1Njcm9sbCA8IGl0ZW1IZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKE9VVF9PRl9CT1VORFMuRGlyZWN0aW9uID09PSBEaXJlY3Rpb24uVG9wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uTm9TY3JvbGwoY29udGVudEVsZW1lbnQsIENVUlJFTlRfUE9TSVRJT05fWSk7XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoT1VUX09GX0JPVU5EUy5EaXJlY3Rpb24gPT09IERpcmVjdGlvbi5Cb3R0b20pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb25BbmRTY3JvbGxCb3R0b20oY29udGVudEVsZW1lbnQsIE9VVF9PRl9CT1VORFMuQW1vdW50KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIChtb3JlIHRoYW4gNSBpdGVtcykgYW5kIG5vIHJlbWFpbmluZyBzY3JvbGxcbiAgICAgICAgICAgIGlmIChyZW1haW5pbmdTY3JvbGwgPT09IDAgJiYgY3VycmVudFNjcm9sbCAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGlmIChPVVRfT0ZfQk9VTkRTKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChPVVRfT0ZfQk9VTkRTLkRpcmVjdGlvbiA9PT0gRGlyZWN0aW9uLkJvdHRvbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbkFuZFNjcm9sbEJvdHRvbShjb250ZW50RWxlbWVudCwgT1VUX09GX0JPVU5EUy5BbW91bnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb25Ob1Njcm9sbChjb250ZW50RWxlbWVudCwgQ1VSUkVOVF9QT1NJVElPTl9ZKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==