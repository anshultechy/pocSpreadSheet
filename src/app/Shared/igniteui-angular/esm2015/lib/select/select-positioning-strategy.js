/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { VerticalAlignment, HorizontalAlignment, Point, Util } from '../services/overlay/utilities';
import { ConnectedPositioningStrategy } from '../services/overlay/position/connected-positioning-strategy';
import { fadeOut, fadeIn } from '../animations/main';
import { isIE } from '../core/utils';
/** @enum {number} */
const Direction = {
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
export class SelectPositioningStrategy extends ConnectedPositioningStrategy {
    /**
     * @param {?} select
     * @param {?=} settings
     */
    constructor(select, settings) {
        super();
        this.select = select;
        this._selectDefaultSettings = {
            target: null,
            horizontalDirection: HorizontalAlignment.Right,
            verticalDirection: VerticalAlignment.Bottom,
            horizontalStartPoint: HorizontalAlignment.Left,
            verticalStartPoint: VerticalAlignment.Top,
            openAnimation: fadeIn,
            closeAnimation: fadeOut
        };
        this.defaultWindowToListOffset = 5;
        this.viewPort = Util.getViewportRect(document);
        this.settings = Object.assign({}, this._selectDefaultSettings, settings);
    }
    /**
     * @private
     * @param {?} contentElement
     * @param {?} outBoundsAmount
     * @return {?}
     */
    positionAndScrollBottom(contentElement, outBoundsAmount) {
        contentElement.style.top = `${this.viewPort.bottom - this.listContainerBoundRect.height - this.defaultWindowToListOffset}px`;
        contentElement.firstElementChild.scrollTop -= outBoundsAmount - (this.defaultWindowToListOffset);
        this.deltaY = this.viewPort.bottom - this.listContainerBoundRect.height -
            this.defaultWindowToListOffset - ((/** @type {?} */ (this.select.input.nativeElement.getBoundingClientRect()))).top;
    }
    /**
     * @private
     * @param {?} contentElement
     * @param {?} CURRENT_POSITION_Y
     * @return {?}
     */
    positionNoScroll(contentElement, CURRENT_POSITION_Y) {
        contentElement.style.top = `${CURRENT_POSITION_Y - this.itemTextToInputTextDiff}px`;
        this.deltaY = CURRENT_POSITION_Y -
            ((/** @type {?} */ (this.select.input.nativeElement.getBoundingClientRect()))).top - this.itemTextToInputTextDiff;
    }
    /**
     * @private
     * @param {?} contentElement
     * @param {?} outBoundsAmount
     * @return {?}
     */
    positionAndScrollTop(contentElement, outBoundsAmount) {
        contentElement.style.top = `${this.viewPort.top + this.defaultWindowToListOffset}px`;
        contentElement.firstElementChild.scrollTop += outBoundsAmount + this.itemTextToInputTextDiff + this.defaultWindowToListOffset;
        this.deltaY = this.viewPort.top + this.defaultWindowToListOffset -
            ((/** @type {?} */ (this.select.input.nativeElement.getBoundingClientRect()))).top;
    }
    /**
     * @private
     * @param {?} contentElement
     * @param {?} itemHeight
     * @return {?}
     */
    getItemsOutOfView(contentElement, itemHeight) {
        if (contentElement.firstElementChild.scrollHeight <= contentElement.firstElementChild.clientHeight) {
            return {
                'currentScroll': 0,
                'remainingScroll': 0
            };
        }
        /** @type {?} */
        const currentScroll = contentElement.firstElementChild.scrollTop;
        /** @type {?} */
        const remainingScroll = this.select.items.length * itemHeight - currentScroll - this.listContainerBoundRect.height;
        return {
            'currentScroll': currentScroll,
            'remainingScroll': remainingScroll
        };
    }
    /**
     * @private
     * @param {?} elementContainer
     * @param {?} document
     * @return {?}
     */
    listOutOfBounds(elementContainer, document) {
        /** @type {?} */
        const container = {
            TOP: elementContainer.top,
            BOTTOM: elementContainer.bottom,
        };
        /** @type {?} */
        const viewPort = Util.getViewportRect(document);
        /** @type {?} */
        const documentElement = {
            TOP: viewPort.top,
            BOTTOM: viewPort.bottom
        };
        /** @type {?} */
        const returnVals = {
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
    }
    /**
     * @param {?} contentElement
     * @param {?} size
     * @param {?=} document
     * @param {?=} initialCall
     * @return {?}
     */
    position(contentElement, size, document, initialCall) {
        /** @type {?} */
        const inputElement = this.select.input.nativeElement;
        /** @type {?} */
        const inputRect = (/** @type {?} */ (inputElement.getBoundingClientRect()));
        this.listContainerBoundRect = (/** @type {?} */ (contentElement.getBoundingClientRect()));
        /** @type {?} */
        const LIST_HEIGHT = this.listContainerBoundRect.height;
        if (!initialCall) {
            this.deltaX = inputRect.left - this.itemTextPadding - this.itemTextIndent;
            /** @type {?} */
            const point = new Point(this.deltaX, inputRect.top + this.deltaY);
            this.settings.target = point;
            super.position(contentElement, size);
            return;
        }
        /** @type {?} */
        const START = {
            X: inputRect.left,
            Y: inputRect.top
        };
        /** @type {?} */
        let itemElement;
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
        const inputHeight = inputRect.height;
        /** @type {?} */
        const itemBoundRect = (/** @type {?} */ (itemElement.getBoundingClientRect()));
        /** @type {?} */
        const itemTopListOffset = itemBoundRect.top - this.listContainerBoundRect.top;
        /** @type {?} */
        const itemHeight = itemBoundRect.height;
        /** @type {?} */
        const inputFontSize = window.getComputedStyle(inputElement).fontSize;
        /** @type {?} */
        const numericInputFontSize = parseInt(inputFontSize.slice(0, inputFontSize.indexOf('p')), 10) || 0;
        /** @type {?} */
        const itemFontSize = window.getComputedStyle(itemElement).fontSize;
        /** @type {?} */
        const numericItemFontSize = parseInt(itemFontSize.slice(0, itemFontSize.indexOf('p')), 10) || 0;
        /** @type {?} */
        const inputTextToInputTop = (inputHeight - numericInputFontSize) / 2;
        /** @type {?} */
        const itemTextToItemTop = (itemHeight - numericItemFontSize) / 2;
        this.itemTextToInputTextDiff = itemTextToItemTop - inputTextToInputTop;
        /** @type {?} */
        let CURRENT_POSITION_Y = START.Y - itemTopListOffset;
        /** @type {?} */
        const CURRENT_BOTTOM_Y = CURRENT_POSITION_Y + this.listContainerBoundRect.height;
        /** @type {?} */
        const OUT_OF_BOUNDS = this.listOutOfBounds({ top: CURRENT_POSITION_Y, bottom: CURRENT_BOTTOM_Y }, document);
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
        const selectItemPaddingHorizontal = 24;
        /** @type {?} */
        const itemLeftPadding = window.getComputedStyle(itemElement).paddingLeft;
        /** @type {?} */
        const itemTextIndent = window.getComputedStyle(itemElement).textIndent;
        /** @type {?} */
        const numericLeftPadding = parseInt(itemLeftPadding.slice(0, itemLeftPadding.indexOf('p')), 10) || 0;
        /** @type {?} */
        const numericTextIndent = parseInt(itemTextIndent.slice(0, itemTextIndent.indexOf('r')), 10) || 0;
        this.itemTextPadding = numericLeftPadding;
        this.itemTextIndent = numericTextIndent;
        contentElement.style.left += `${START.X - numericLeftPadding - numericTextIndent}px`;
        contentElement.style.width = inputRect.width + 24 + selectItemPaddingHorizontal * 2 + 'px';
        this.deltaX = START.X - numericLeftPadding - numericTextIndent;
        /** @type {?} */
        const currentScroll = this.getItemsOutOfView(contentElement, itemHeight)['currentScroll'];
        /** @type {?} */
        const remainingScroll = this.getItemsOutOfView(contentElement, itemHeight)['remainingScroll'];
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
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LXBvc2l0aW9uaW5nLXN0cmF0ZWd5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zZWxlY3Qvc2VsZWN0LXBvc2l0aW9uaW5nLXN0cmF0ZWd5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsbUJBQW1CLEVBQTBCLEtBQUssRUFBRSxJQUFJLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM1SCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUUzRyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXJELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxlQUFlLENBQUM7OztJQUlqQyxPQUFRO0lBQ1IsU0FBVTtJQUNWLE9BQVE7Ozs7Ozs7O0FBSVosTUFBTSxPQUFPLHlCQUEwQixTQUFRLDRCQUE0Qjs7Ozs7SUFhdkUsWUFBbUIsTUFBMEIsRUFBRSxRQUEyQjtRQUN0RSxLQUFLLEVBQUUsQ0FBQztRQURPLFdBQU0sR0FBTixNQUFNLENBQW9CO1FBWHJDLDJCQUFzQixHQUFHO1lBQzdCLE1BQU0sRUFBRSxJQUFJO1lBQ1osbUJBQW1CLEVBQUUsbUJBQW1CLENBQUMsS0FBSztZQUM5QyxpQkFBaUIsRUFBRSxpQkFBaUIsQ0FBQyxNQUFNO1lBQzNDLG9CQUFvQixFQUFFLG1CQUFtQixDQUFDLElBQUk7WUFDOUMsa0JBQWtCLEVBQUUsaUJBQWlCLENBQUMsR0FBRztZQUN6QyxhQUFhLEVBQUUsTUFBTTtZQUNyQixjQUFjLEVBQUUsT0FBTztTQUMxQixDQUFDO1FBUU0sOEJBQXlCLEdBQUcsQ0FBQyxDQUFDO1FBQzlCLGFBQVEsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBSjlDLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxF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QUU7b0JBQzlCLElBQUksYUFBYSxDQUFDLFNBQVMsS0FBSyxTQUFTLENBQUMsR0FBRyxFQUFFO3dCQUMzQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7cUJBRTdEO29CQUNELElBQUksYUFBYSxDQUFDLFNBQVMsS0FBSyxTQUFTLENBQUMsTUFBTSxFQUFFO3dCQUM5QyxJQUFJLENBQUMsdUJBQXVCLENBQUMsY0FBYyxFQUFFLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztxQkFDdEU7aUJBQ0o7YUFDSjtZQUNELDhDQUE4QztZQUM5QyxJQUFJLGVBQWUsS0FBSyxDQUFDLElBQUksYUFBYSxLQUFLLENBQUMsRUFBRTtnQkFDOUMsSUFBSSxhQUFhLEVBQUU7b0JBQ2YsSUFBSSxhQUFhLENBQUMsU0FBUyxLQUFLLFNBQVMsQ0FBQyxNQUFNLEVBQUU7d0JBQzlDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxjQUFjLEVBQUUsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO3dCQUNuRSxPQUFPO3FCQUNWO2lCQUNKO2dCQUNELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQzthQUM3RDtTQUNKO0lBQ0wsQ0FBQztDQUNKOzs7Ozs7SUFyTkcsMkRBUUU7O0lBQ0YsNkNBQWtDOzs7OztJQU9sQyw4REFBc0M7Ozs7O0lBQ3RDLDZDQUFrRDs7Ozs7SUFDbEQsMkNBQXVCOzs7OztJQUN2QiwyQ0FBdUI7Ozs7O0lBQ3ZCLG9EQUFnQzs7Ozs7SUFDaEMsbURBQStCOzs7OztJQUMvQiwyREFBd0M7Ozs7O0lBQ3hDLDREQUF3Qzs7SUFaNUIsMkNBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmVydGljYWxBbGlnbm1lbnQsIEhvcml6b250YWxBbGlnbm1lbnQsIFBvc2l0aW9uU2V0dGluZ3MsIFNpemUsIFBvaW50LCBVdGlsIH0gZnJvbSAnLi4vc2VydmljZXMvb3ZlcmxheS91dGlsaXRpZXMnO1xuaW1wb3J0IHsgQ29ubmVjdGVkUG9zaXRpb25pbmdTdHJhdGVneSB9IGZyb20gJy4uL3NlcnZpY2VzL292ZXJsYXkvcG9zaXRpb24vY29ubmVjdGVkLXBvc2l0aW9uaW5nLXN0cmF0ZWd5JztcbmltcG9ydCB7IElQb3NpdGlvblN0cmF0ZWd5IH0gZnJvbSAnLi4vc2VydmljZXMvb3ZlcmxheS9wb3NpdGlvbic7XG5pbXBvcnQgeyBmYWRlT3V0LCBmYWRlSW4gfSBmcm9tICcuLi9hbmltYXRpb25zL21haW4nO1xuaW1wb3J0IHsgSWd4U2VsZWN0Q29tcG9uZW50IH0gZnJvbSAnLi9zZWxlY3QuY29tcG9uZW50JztcbmltcG9ydCB7IGlzSUUgfSBmcm9tICcuLi9jb3JlL3V0aWxzJztcblxuLyoqIEBoaWRkZW4gKi9cbmVudW0gRGlyZWN0aW9uIHtcbiAgICBUb3AgPSAtMSxcbiAgICBCb3R0b20gPSAxLFxuICAgIE5vbmUgPSAwXG59XG5cbi8qKiBAaGlkZGVuIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNsYXNzIFNlbGVjdFBvc2l0aW9uaW5nU3RyYXRlZ3kgZXh0ZW5kcyBDb25uZWN0ZWRQb3NpdGlvbmluZ1N0cmF0ZWd5IGltcGxlbWVudHMgSVBvc2l0aW9uU3RyYXRlZ3kge1xuXG4gICAgcHJpdmF0ZSBfc2VsZWN0RGVmYXVsdFNldHRpbmdzID0ge1xuICAgICAgICB0YXJnZXQ6IG51bGwsXG4gICAgICAgIGhvcml6b250YWxEaXJlY3Rpb246IEhvcml6b250YWxBbGlnbm1lbnQuUmlnaHQsXG4gICAgICAgIHZlcnRpY2FsRGlyZWN0aW9uOiBWZXJ0aWNhbEFsaWdubWVudC5Cb3R0b20sXG4gICAgICAgIGhvcml6b250YWxTdGFydFBvaW50OiBIb3Jpem9udGFsQWxpZ25tZW50LkxlZnQsXG4gICAgICAgIHZlcnRpY2FsU3RhcnRQb2ludDogVmVydGljYWxBbGlnbm1lbnQuVG9wLFxuICAgICAgICBvcGVuQW5pbWF0aW9uOiBmYWRlSW4sXG4gICAgICAgIGNsb3NlQW5pbWF0aW9uOiBmYWRlT3V0XG4gICAgfTtcbiAgICBwdWJsaWMgc2V0dGluZ3M6IFBvc2l0aW9uU2V0dGluZ3M7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgc2VsZWN0OiBJZ3hTZWxlY3RDb21wb25lbnQsIHNldHRpbmdzPzogUG9zaXRpb25TZXR0aW5ncykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fc2VsZWN0RGVmYXVsdFNldHRpbmdzLCBzZXR0aW5ncyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkZWZhdWx0V2luZG93VG9MaXN0T2Zmc2V0ID0gNTtcbiAgICBwcml2YXRlIHZpZXdQb3J0ID0gVXRpbC5nZXRWaWV3cG9ydFJlY3QoZG9jdW1lbnQpO1xuICAgIHByaXZhdGUgZGVsdGFZOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBkZWx0YVg6IG51bWJlcjtcbiAgICBwcml2YXRlIGl0ZW1UZXh0UGFkZGluZzogbnVtYmVyO1xuICAgIHByaXZhdGUgaXRlbVRleHRJbmRlbnQ6IG51bWJlcjtcbiAgICBwcml2YXRlIGxpc3RDb250YWluZXJCb3VuZFJlY3Q6IERPTVJlY3Q7XG4gICAgcHJpdmF0ZSBpdGVtVGV4dFRvSW5wdXRUZXh0RGlmZjogbnVtYmVyO1xuXG4gICAgcHJpdmF0ZSBwb3NpdGlvbkFuZFNjcm9sbEJvdHRvbShjb250ZW50RWxlbWVudDogSFRNTEVsZW1lbnQsIG91dEJvdW5kc0Ftb3VudDogbnVtYmVyKSB7XG4gICAgICAgIGNvbnRlbnRFbGVtZW50LnN0eWxlLnRvcCA9IGAke3RoaXMudmlld1BvcnQuYm90dG9tIC0gdGhpcy5saXN0Q29udGFpbmVyQm91bmRSZWN0LmhlaWdodCAtIHRoaXMuZGVmYXVsdFdpbmRvd1RvTGlzdE9mZnNldH1weGA7XG4gICAgICAgIGNvbnRlbnRFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkLnNjcm9sbFRvcCAtPSBvdXRCb3VuZHNBbW91bnQgLSAodGhpcy5kZWZhdWx0V2luZG93VG9MaXN0T2Zmc2V0KTtcbiAgICAgICAgdGhpcy5kZWx0YVkgPSB0aGlzLnZpZXdQb3J0LmJvdHRvbSAtIHRoaXMubGlzdENvbnRhaW5lckJvdW5kUmVjdC5oZWlnaHQgLVxuICAgICAgICAgICAgdGhpcy5kZWZhdWx0V2luZG93VG9MaXN0T2Zmc2V0IC0gKHRoaXMuc2VsZWN0LmlucHV0Lm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgYXMgRE9NUmVjdCkudG9wO1xuICAgIH1cblxuICAgIHByaXZhdGUgcG9zaXRpb25Ob1Njcm9sbChjb250ZW50RWxlbWVudDogSFRNTEVsZW1lbnQsIENVUlJFTlRfUE9TSVRJT05fWTogbnVtYmVyKSB7XG4gICAgICAgIGNvbnRlbnRFbGVtZW50LnN0eWxlLnRvcCA9IGAke0NVUlJFTlRfUE9TSVRJT05fWSAtIHRoaXMuaXRlbVRleHRUb0lucHV0VGV4dERpZmZ9cHhgO1xuICAgICAgICB0aGlzLmRlbHRhWSA9IENVUlJFTlRfUE9TSVRJT05fWSAtXG4gICAgICAgICAgICAodGhpcy5zZWxlY3QuaW5wdXQubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSBhcyBET01SZWN0KS50b3AgLSB0aGlzLml0ZW1UZXh0VG9JbnB1dFRleHREaWZmO1xuICAgIH1cblxuICAgIHByaXZhdGUgcG9zaXRpb25BbmRTY3JvbGxUb3AoY29udGVudEVsZW1lbnQ6IEhUTUxFbGVtZW50LCBvdXRCb3VuZHNBbW91bnQ6IG51bWJlcikge1xuICAgICAgICBjb250ZW50RWxlbWVudC5zdHlsZS50b3AgPSBgJHt0aGlzLnZpZXdQb3J0LnRvcCArIHRoaXMuZGVmYXVsdFdpbmRvd1RvTGlzdE9mZnNldH1weGA7XG4gICAgICAgIGNvbnRlbnRFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkLnNjcm9sbFRvcCArPSBvdXRCb3VuZHNBbW91bnQgKyB0aGlzLml0ZW1UZXh0VG9JbnB1dFRleHREaWZmICsgdGhpcy5kZWZhdWx0V2luZG93VG9MaXN0T2Zmc2V0O1xuICAgICAgICB0aGlzLmRlbHRhWSA9IHRoaXMudmlld1BvcnQudG9wICsgdGhpcy5kZWZhdWx0V2luZG93VG9MaXN0T2Zmc2V0IC1cbiAgICAgICAgICAgICh0aGlzLnNlbGVjdC5pbnB1dC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIGFzIERPTVJlY3QpLnRvcDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldEl0ZW1zT3V0T2ZWaWV3KGNvbnRlbnRFbGVtZW50OiBIVE1MRWxlbWVudCwgaXRlbUhlaWdodDogbnVtYmVyKToge1xuICAgICAgICAnY3VycmVudFNjcm9sbCc6IG51bWJlcixcbiAgICAgICAgJ3JlbWFpbmluZ1Njcm9sbCc6IG51bWJlclxuICAgIH0ge1xuICAgICAgICBpZiAoY29udGVudEVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQuc2Nyb2xsSGVpZ2h0IDw9IGNvbnRlbnRFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkLmNsaWVudEhlaWdodCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAnY3VycmVudFNjcm9sbCc6IDAsXG4gICAgICAgICAgICAgICAgJ3JlbWFpbmluZ1Njcm9sbCc6IDBcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY3VycmVudFNjcm9sbCA9IGNvbnRlbnRFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkLnNjcm9sbFRvcDtcbiAgICAgICAgY29uc3QgcmVtYWluaW5nU2Nyb2xsID0gdGhpcy5zZWxlY3QuaXRlbXMubGVuZ3RoICogaXRlbUhlaWdodCAtIGN1cnJlbnRTY3JvbGwgLSB0aGlzLmxpc3RDb250YWluZXJCb3VuZFJlY3QuaGVpZ2h0O1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgJ2N1cnJlbnRTY3JvbGwnOiBjdXJyZW50U2Nyb2xsLFxuICAgICAgICAgICAgJ3JlbWFpbmluZ1Njcm9sbCc6IHJlbWFpbmluZ1Njcm9sbFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHByaXZhdGUgbGlzdE91dE9mQm91bmRzKGVsZW1lbnRDb250YWluZXI6IHsgdG9wOiBudW1iZXIsIGJvdHRvbTogbnVtYmVyIH0sIGRvY3VtZW50OiBEb2N1bWVudCk6IHtcbiAgICAgICAgRGlyZWN0aW9uOiBEaXJlY3Rpb24sXG4gICAgICAgIEFtb3VudDogbnVtYmVyXG4gICAgfSB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHtcbiAgICAgICAgICAgIFRPUDogZWxlbWVudENvbnRhaW5lci50b3AsXG4gICAgICAgICAgICBCT1RUT006IGVsZW1lbnRDb250YWluZXIuYm90dG9tLFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCB2aWV3UG9ydCA9IFV0aWwuZ2V0Vmlld3BvcnRSZWN0KGRvY3VtZW50KTtcbiAgICAgICAgY29uc3QgZG9jdW1lbnRFbGVtZW50ID0ge1xuICAgICAgICAgICAgVE9QOiB2aWV3UG9ydC50b3AsXG4gICAgICAgICAgICBCT1RUT006IHZpZXdQb3J0LmJvdHRvbVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXR1cm5WYWxzID0ge1xuICAgICAgICAgICAgRGlyZWN0aW9uOiBEaXJlY3Rpb24uTm9uZSxcbiAgICAgICAgICAgIEFtb3VudDogMFxuICAgICAgICB9O1xuICAgICAgICBpZiAoZG9jdW1lbnRFbGVtZW50LlRPUCArIHRoaXMuZGVmYXVsdFdpbmRvd1RvTGlzdE9mZnNldCA+IGNvbnRhaW5lci5UT1ApIHtcbiAgICAgICAgICAgIHJldHVyblZhbHMuRGlyZWN0aW9uID0gRGlyZWN0aW9uLlRvcDtcbiAgICAgICAgICAgIHJldHVyblZhbHMuQW1vdW50ID0gZG9jdW1lbnRFbGVtZW50LlRPUCAtIGNvbnRhaW5lci5UT1A7XG4gICAgICAgIH0gZWxzZSBpZiAoZG9jdW1lbnRFbGVtZW50LkJPVFRPTSAtIHRoaXMuZGVmYXVsdFdpbmRvd1RvTGlzdE9mZnNldCA8IGNvbnRhaW5lci5CT1RUT00pIHtcbiAgICAgICAgICAgIHJldHVyblZhbHMuRGlyZWN0aW9uID0gRGlyZWN0aW9uLkJvdHRvbTtcbiAgICAgICAgICAgIHJldHVyblZhbHMuQW1vdW50ID0gY29udGFpbmVyLkJPVFRPTSAtIGRvY3VtZW50RWxlbWVudC5CT1RUT007XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmV0dXJuVmFscztcbiAgICB9XG5cbiAgICBwb3NpdGlvbihjb250ZW50RWxlbWVudDogSFRNTEVsZW1lbnQsIHNpemU6IFNpemUsIGRvY3VtZW50PzogRG9jdW1lbnQsIGluaXRpYWxDYWxsPzogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICBjb25zdCBpbnB1dEVsZW1lbnQgPSB0aGlzLnNlbGVjdC5pbnB1dC5uYXRpdmVFbGVtZW50O1xuICAgICAgICBjb25zdCBpbnB1dFJlY3QgPSBpbnB1dEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgYXMgRE9NUmVjdDtcbiAgICAgICAgdGhpcy5saXN0Q29udGFpbmVyQm91bmRSZWN0ID0gY29udGVudEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgYXMgRE9NUmVjdDtcbiAgICAgICAgY29uc3QgTElTVF9IRUlHSFQgPSB0aGlzLmxpc3RDb250YWluZXJCb3VuZFJlY3QuaGVpZ2h0O1xuICAgICAgICBpZiAoIWluaXRpYWxDYWxsKSB7XG4gICAgICAgICAgICB0aGlzLmRlbHRhWCA9IGlucHV0UmVjdC5sZWZ0IC0gdGhpcy5pdGVtVGV4dFBhZGRpbmcgLSB0aGlzLml0ZW1UZXh0SW5kZW50O1xuICAgICAgICAgICAgY29uc3QgcG9pbnQgPSBuZXcgUG9pbnQodGhpcy5kZWx0YVgsIGlucHV0UmVjdC50b3AgKyB0aGlzLmRlbHRhWSk7XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLnRhcmdldCA9IHBvaW50O1xuICAgICAgICAgICAgc3VwZXIucG9zaXRpb24oY29udGVudEVsZW1lbnQsIHNpemUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgU1RBUlQgPSB7XG4gICAgICAgICAgICBYOiBpbnB1dFJlY3QubGVmdCxcbiAgICAgICAgICAgIFk6IGlucHV0UmVjdC50b3BcbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgaXRlbUVsZW1lbnQ7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdC5zZWxlY3RlZEl0ZW0pIHtcbiAgICAgICAgICAgIGl0ZW1FbGVtZW50ID0gdGhpcy5zZWxlY3Quc2VsZWN0ZWRJdGVtLmVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgICAgICAgICAgIC8vIEQuUC4gRmViIDIyIDIwMTksICMzOTIxIEZvcmNlIGl0ZW0gc2Nyb2xsIGJlZm9yZSBtZWFzdXJpbmcgaW4gSUUxMSwgZHVlIHRvIGJhc2Ugc2Nyb2xsVG9JdGVtIGRlbGF5XG4gICAgICAgICAgICBpZiAoaXNJRSgpKSB7XG4gICAgICAgICAgICAgICAgY29udGVudEVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQuc2Nyb2xsVG9wID0gdGhpcy5zZWxlY3QuY2FsY3VsYXRlU2Nyb2xsUG9zaXRpb24odGhpcy5zZWxlY3Quc2VsZWN0ZWRJdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGl0ZW1FbGVtZW50ID0gdGhpcy5zZWxlY3QuZ2V0Rmlyc3RJdGVtRWxlbWVudCgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGlucHV0SGVpZ2h0ID0gaW5wdXRSZWN0LmhlaWdodDtcbiAgICAgICAgY29uc3QgaXRlbUJvdW5kUmVjdCA9IGl0ZW1FbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIGFzIERPTVJlY3Q7XG4gICAgICAgIGNvbnN0IGl0ZW1Ub3BMaXN0T2Zmc2V0ID0gaXRlbUJvdW5kUmVjdC50b3AgLSB0aGlzLmxpc3RDb250YWluZXJCb3VuZFJlY3QudG9wO1xuICAgICAgICBjb25zdCBpdGVtSGVpZ2h0ID0gaXRlbUJvdW5kUmVjdC5oZWlnaHQ7XG5cbiAgICAgICAgY29uc3QgaW5wdXRGb250U2l6ZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGlucHV0RWxlbWVudCkuZm9udFNpemU7XG4gICAgICAgIGNvbnN0IG51bWVyaWNJbnB1dEZvbnRTaXplID0gcGFyc2VJbnQoaW5wdXRGb250U2l6ZS5zbGljZSgwLCBpbnB1dEZvbnRTaXplLmluZGV4T2YoJ3AnKSksIDEwKSB8fCAwO1xuICAgICAgICBjb25zdCBpdGVtRm9udFNpemUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShpdGVtRWxlbWVudCkuZm9udFNpemU7XG4gICAgICAgIGNvbnN0IG51bWVyaWNJdGVtRm9udFNpemUgPSBwYXJzZUludChpdGVtRm9udFNpemUuc2xpY2UoMCwgaXRlbUZvbnRTaXplLmluZGV4T2YoJ3AnKSksIDEwKSB8fCAwO1xuICAgICAgICBjb25zdCBpbnB1dFRleHRUb0lucHV0VG9wID0gKGlucHV0SGVpZ2h0IC0gbnVtZXJpY0lucHV0Rm9udFNpemUpIC8gMjtcbiAgICAgICAgY29uc3QgaXRlbVRleHRUb0l0ZW1Ub3AgPSAoaXRlbUhlaWdodCAtIG51bWVyaWNJdGVtRm9udFNpemUpIC8gMjtcbiAgICAgICAgdGhpcy5pdGVtVGV4dFRvSW5wdXRUZXh0RGlmZiA9IGl0ZW1UZXh0VG9JdGVtVG9wIC0gaW5wdXRUZXh0VG9JbnB1dFRvcDtcblxuICAgICAgICBsZXQgQ1VSUkVOVF9QT1NJVElPTl9ZID0gU1RBUlQuWSAtIGl0ZW1Ub3BMaXN0T2Zmc2V0O1xuICAgICAgICBjb25zdCBDVVJSRU5UX0JPVFRPTV9ZID0gQ1VSUkVOVF9QT1NJVElPTl9ZICsgdGhpcy5saXN0Q29udGFpbmVyQm91bmRSZWN0LmhlaWdodDtcblxuICAgICAgICBjb25zdCBPVVRfT0ZfQk9VTkRTOiB7XG4gICAgICAgICAgICBEaXJlY3Rpb246IERpcmVjdGlvbixcbiAgICAgICAgICAgIEFtb3VudDogbnVtYmVyXG4gICAgICAgIH0gPSB0aGlzLmxpc3RPdXRPZkJvdW5kcyh7IHRvcDogQ1VSUkVOVF9QT1NJVElPTl9ZLCBib3R0b206IENVUlJFTlRfQk9UVE9NX1kgfSwgZG9jdW1lbnQpO1xuICAgICAgICBpZiAoT1VUX09GX0JPVU5EUykge1xuICAgICAgICAgICAgaWYgKE9VVF9PRl9CT1VORFMuRGlyZWN0aW9uID09PSBEaXJlY3Rpb24uVG9wKSB7XG4gICAgICAgICAgICAgICAgQ1VSUkVOVF9QT1NJVElPTl9ZID0gU1RBUlQuWTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgQ1VSUkVOVF9QT1NJVElPTl9ZID0gLTEgKiAoTElTVF9IRUlHSFQgLSAoaXRlbUhlaWdodCAtIChpdGVtSGVpZ2h0IC0gaW5wdXRIZWlnaHQpIC8gMikpO1xuICAgICAgICAgICAgICAgIENVUlJFTlRfUE9TSVRJT05fWSArPSBTVEFSVC5ZO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNlbGVjdEl0ZW1QYWRkaW5nSG9yaXpvbnRhbCA9IDI0O1xuICAgICAgICBjb25zdCBpdGVtTGVmdFBhZGRpbmcgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShpdGVtRWxlbWVudCkucGFkZGluZ0xlZnQ7XG4gICAgICAgIGNvbnN0IGl0ZW1UZXh0SW5kZW50ID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoaXRlbUVsZW1lbnQpLnRleHRJbmRlbnQ7XG4gICAgICAgIGNvbnN0IG51bWVyaWNMZWZ0UGFkZGluZyA9IHBhcnNlSW50KGl0ZW1MZWZ0UGFkZGluZy5zbGljZSgwLCBpdGVtTGVmdFBhZGRpbmcuaW5kZXhPZigncCcpKSwgMTApIHx8IDA7XG4gICAgICAgIGNvbnN0IG51bWVyaWNUZXh0SW5kZW50ID0gcGFyc2VJbnQoaXRlbVRleHRJbmRlbnQuc2xpY2UoMCwgaXRlbVRleHRJbmRlbnQuaW5kZXhPZigncicpKSwgMTApIHx8IDA7XG4gICAgICAgIHRoaXMuaXRlbVRleHRQYWRkaW5nID0gbnVtZXJpY0xlZnRQYWRkaW5nO1xuICAgICAgICB0aGlzLml0ZW1UZXh0SW5kZW50ID0gbnVtZXJpY1RleHRJbmRlbnQ7XG4gICAgICAgIGNvbnRlbnRFbGVtZW50LnN0eWxlLmxlZnQgKz0gYCR7U1RBUlQuWCAtIG51bWVyaWNMZWZ0UGFkZGluZyAtIG51bWVyaWNUZXh0SW5kZW50fXB4YDtcbiAgICAgICAgY29udGVudEVsZW1lbnQuc3R5bGUud2lkdGggPSBpbnB1dFJlY3Qud2lkdGggKyAyNCArIHNlbGVjdEl0ZW1QYWRkaW5nSG9yaXpvbnRhbCAqIDIgKyAncHgnO1xuICAgICAgICB0aGlzLmRlbHRhWCA9IFNUQVJULlggLSBudW1lcmljTGVmdFBhZGRpbmcgLSBudW1lcmljVGV4dEluZGVudDtcbiAgICAgICAgY29uc3QgY3VycmVudFNjcm9sbCA9IHRoaXMuZ2V0SXRlbXNPdXRPZlZpZXcoY29udGVudEVsZW1lbnQsIGl0ZW1IZWlnaHQpWydjdXJyZW50U2Nyb2xsJ107XG4gICAgICAgIGNvbnN0IHJlbWFpbmluZ1Njcm9sbCA9IHRoaXMuZ2V0SXRlbXNPdXRPZlZpZXcoY29udGVudEVsZW1lbnQsIGl0ZW1IZWlnaHQpWydyZW1haW5pbmdTY3JvbGwnXTtcblxuICAgICAgICAvLyAoNSBpdGVtcyBvciBsZXNzKSBubyBzY3JvbGwgYW5kIHJlc3BlY3RpdmVseSBubyByZW1haW5pbmcgc2Nyb2xsXG4gICAgICAgIGlmIChyZW1haW5pbmdTY3JvbGwgPT09IDAgJiYgY3VycmVudFNjcm9sbCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbk5vU2Nyb2xsKGNvbnRlbnRFbGVtZW50LCBDVVJSRU5UX1BPU0lUSU9OX1kpO1xuICAgICAgICB9XG4gICAgICAgIC8vIChtb3JlIHRoYW4gNSBpdGVtcykgdGhlcmUgaXMgc2Nyb2xsIE9SIHJlbWFpbmluZyBzY3JvbGxcbiAgICAgICAgaWYgKHJlbWFpbmluZ1Njcm9sbCAhPT0gMCB8fCBjdXJyZW50U2Nyb2xsICE9PSAwKSB7XG4gICAgICAgICAgICBpZiAocmVtYWluaW5nU2Nyb2xsICE9PSAwICYmICFPVVRfT0ZfQk9VTkRTKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbk5vU2Nyb2xsKGNvbnRlbnRFbGVtZW50LCBDVVJSRU5UX1BPU0lUSU9OX1kpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gKG1vcmUgdGhhbiA1IGl0ZW1zKSBhbmQgY29udGFpbmVyIGdldHRpbmcgb3V0IG9mIHRoZSB2aXNpYmxlIHBvcnRcbiAgICAgICAgICAgIGlmIChyZW1haW5pbmdTY3JvbGwgIT09IDAgJiYgT1VUX09GX0JPVU5EUykge1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoZXJlIGlzIGVub3VnaCByZW1haW5pbmcgc2Nyb2xsIHRvIHNjcm9sbCB0aGUgaXRlbVxuICAgICAgICAgICAgICAgIGlmIChyZW1haW5pbmdTY3JvbGwgPiBpdGVtSGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChPVVRfT0ZfQk9VTkRTLkRpcmVjdGlvbiA9PT0gRGlyZWN0aW9uLlRvcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbkFuZFNjcm9sbFRvcChjb250ZW50RWxlbWVudCwgT1VUX09GX0JPVU5EUy5BbW91bnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChPVVRfT0ZfQk9VTkRTLkRpcmVjdGlvbiA9PT0gRGlyZWN0aW9uLkJvdHRvbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gKG1vcmUgdGhhbiA1IGl0ZW1zKSBhbmQgbm8gY3VycmVudCBzY3JvbGxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50U2Nyb2xsID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbk5vU2Nyb2xsKGNvbnRlbnRFbGVtZW50LCBDVVJSRU5UX1BPU0lUSU9OX1kpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAobW9yZSB0aGFuIDUgaXRlbXMpIGFuZCBjdXJyZW50IHNjcm9sbFxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uQW5kU2Nyb2xsQm90dG9tKGNvbnRlbnRFbGVtZW50LCBPVVRfT0ZfQk9VTkRTLkFtb3VudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGlmIHRoZXJlIGlzIG5vIGVub3VnaCByZW1haW5pbmcgc2Nyb2xsIHRvIHNjcm9sbCB0aGUgaXRlbVxuICAgICAgICAgICAgICAgIGlmIChyZW1haW5pbmdTY3JvbGwgPCBpdGVtSGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChPVVRfT0ZfQk9VTkRTLkRpcmVjdGlvbiA9PT0gRGlyZWN0aW9uLlRvcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbk5vU2Nyb2xsKGNvbnRlbnRFbGVtZW50LCBDVVJSRU5UX1BPU0lUSU9OX1kpO1xuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKE9VVF9PRl9CT1VORFMuRGlyZWN0aW9uID09PSBEaXJlY3Rpb24uQm90dG9tKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uQW5kU2Nyb2xsQm90dG9tKGNvbnRlbnRFbGVtZW50LCBPVVRfT0ZfQk9VTkRTLkFtb3VudCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyAobW9yZSB0aGFuIDUgaXRlbXMpIGFuZCBubyByZW1haW5pbmcgc2Nyb2xsXG4gICAgICAgICAgICBpZiAocmVtYWluaW5nU2Nyb2xsID09PSAwICYmIGN1cnJlbnRTY3JvbGwgIT09IDApIHtcbiAgICAgICAgICAgICAgICBpZiAoT1VUX09GX0JPVU5EUykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoT1VUX09GX0JPVU5EUy5EaXJlY3Rpb24gPT09IERpcmVjdGlvbi5Cb3R0b20pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb25BbmRTY3JvbGxCb3R0b20oY29udGVudEVsZW1lbnQsIE9VVF9PRl9CT1VORFMuQW1vdW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uTm9TY3JvbGwoY29udGVudEVsZW1lbnQsIENVUlJFTlRfUE9TSVRJT05fWSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=