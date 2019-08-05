/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { cloneValue } from '../../core/utils';
/** @enum {number} */
const HorizontalAlignment = {
    Left: -1,
    Center: -0.5,
    Right: 0,
};
export { HorizontalAlignment };
HorizontalAlignment[HorizontalAlignment.Left] = 'Left';
HorizontalAlignment[HorizontalAlignment.Center] = 'Center';
HorizontalAlignment[HorizontalAlignment.Right] = 'Right';
/** @enum {number} */
const VerticalAlignment = {
    Top: -1,
    Middle: -0.5,
    Bottom: 0,
};
export { VerticalAlignment };
VerticalAlignment[VerticalAlignment.Top] = 'Top';
VerticalAlignment[VerticalAlignment.Middle] = 'Middle';
VerticalAlignment[VerticalAlignment.Bottom] = 'Bottom';
export class Point {
    /**
     * @param {?} x
     * @param {?} y
     */
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
if (false) {
    /** @type {?} */
    Point.prototype.x;
    /** @type {?} */
    Point.prototype.y;
}
/**
 * @record
 */
export function PositionSettings() { }
if (false) {
    /**
     * Attaching target for the component to show
     * @type {?|undefined}
     */
    PositionSettings.prototype.target;
    /**
     * Direction in which the component should show
     * @type {?|undefined}
     */
    PositionSettings.prototype.horizontalDirection;
    /**
     * Direction in which the component should show
     * @type {?|undefined}
     */
    PositionSettings.prototype.verticalDirection;
    /**
     * Target's starting point
     * @type {?|undefined}
     */
    PositionSettings.prototype.horizontalStartPoint;
    /**
     * Target's starting point
     * @type {?|undefined}
     */
    PositionSettings.prototype.verticalStartPoint;
    /**
     * Animation applied while overlay opens
     * @type {?|undefined}
     */
    PositionSettings.prototype.openAnimation;
    /**
     * Animation applied while overlay closes
     * @type {?|undefined}
     */
    PositionSettings.prototype.closeAnimation;
    /**
     * The size up to which element may shrink when shown in elastic position strategy
     * @type {?|undefined}
     */
    PositionSettings.prototype.minSize;
}
/**
 * @record
 */
export function OverlaySettings() { }
if (false) {
    /**
     * Position strategy to use with this settings
     * @type {?|undefined}
     */
    OverlaySettings.prototype.positionStrategy;
    /**
     * Scroll strategy to use with this settings
     * @type {?|undefined}
     */
    OverlaySettings.prototype.scrollStrategy;
    /**
     * Set if the overlay should be in modal mode
     * @type {?|undefined}
     */
    OverlaySettings.prototype.modal;
    /**
     * Set if the overlay should closed on outside click
     * @type {?|undefined}
     */
    OverlaySettings.prototype.closeOnOutsideClick;
    /**
     * Set the outlet container to attach the overlay to
     * @type {?|undefined}
     */
    OverlaySettings.prototype.outlet;
    /**
     * @hidden \@internal
     * Exclude the position strategy target for outside clicks
     * @type {?|undefined}
     */
    OverlaySettings.prototype.excludePositionTarget;
}
/**
 * @record
 */
export function OverlayEventArgs() { }
if (false) {
    /**
     * Id of the overlay generated with `attach()` method
     * @type {?}
     */
    OverlayEventArgs.prototype.id;
    /**
     * Available when `Type<T>` is provided to the `attach()` method and allows access to the created Component instance
     * @type {?|undefined}
     */
    OverlayEventArgs.prototype.componentRef;
}
/**
 * @record
 */
export function OverlayCancelableEventArgs() { }
/**
 * @record
 */
export function OverlayClosingEventArgs() { }
/**
 * @record
 */
export function OverlayAnimationEventArgs() { }
if (false) {
    /**
     * Id of the overlay generated with `attach()` method
     * @type {?}
     */
    OverlayAnimationEventArgs.prototype.id;
    /**
     * Animation player that will play the animation
     * @type {?}
     */
    OverlayAnimationEventArgs.prototype.animationPlayer;
    /**
     * Type of animation to be played. It should be either 'open' or 'close'
     * @type {?}
     */
    OverlayAnimationEventArgs.prototype.animationType;
}
/**
 * @record
 */
export function Size() { }
if (false) {
    /**
     * Gets or sets the horizontal component of Size
     * @type {?}
     */
    Size.prototype.width;
    /**
     * Gets or sets the vertical component of Size
     * @type {?}
     */
    Size.prototype.height;
}
/**
 * @hidden
 * @record
 */
export function OverlayInfo() { }
if (false) {
    /** @type {?|undefined} */
    OverlayInfo.prototype.id;
    /** @type {?|undefined} */
    OverlayInfo.prototype.elementRef;
    /** @type {?|undefined} */
    OverlayInfo.prototype.componentRef;
    /** @type {?|undefined} */
    OverlayInfo.prototype.settings;
    /** @type {?|undefined} */
    OverlayInfo.prototype.initialSize;
    /** @type {?|undefined} */
    OverlayInfo.prototype.hook;
    /** @type {?|undefined} */
    OverlayInfo.prototype.openAnimationPlayer;
    /** @type {?|undefined} */
    OverlayInfo.prototype.closeAnimationPlayer;
    /** @type {?|undefined} */
    OverlayInfo.prototype.openAnimationInnerPlayer;
    /** @type {?|undefined} */
    OverlayInfo.prototype.closeAnimationInnerPlayer;
    /** @type {?} */
    OverlayInfo.prototype.ngZone;
}
/**
 * @hidden
 */
export class Util {
    /**
     * @hidden
     * Calculates the rectangle of target for provided overlay settings. Defaults to 0,0,0,0,0,0 rectangle
     * if no target is provided
     * @param {?} settings Overlay settings for which to calculate target rectangle
     * @return {?}
     */
    static getTargetRect(settings) {
        /** @type {?} */
        let targetRect = {
            bottom: 0,
            height: 0,
            left: 0,
            right: 0,
            top: 0,
            width: 0
        };
        if (settings.target instanceof HTMLElement) {
            targetRect = ((/** @type {?} */ (settings.target))).getBoundingClientRect();
        }
        else if (settings.target instanceof Point) {
            /** @type {?} */
            const targetPoint = (/** @type {?} */ (settings.target));
            targetRect = {
                bottom: targetPoint.y,
                height: 0,
                left: targetPoint.x,
                right: targetPoint.x,
                top: targetPoint.y,
                width: 0
            };
        }
        return targetRect;
    }
    /**
     * @hidden \@internal
     * @param {?} document
     * @return {?}
     */
    static getViewportRect(document) {
        /** @type {?} */
        const width = document.documentElement.clientWidth;
        /** @type {?} */
        const height = document.documentElement.clientHeight;
        /** @type {?} */
        const scrollPosition = Util.getViewportScrollPosition(document);
        return {
            top: scrollPosition.y,
            left: scrollPosition.x,
            right: scrollPosition.x + width,
            bottom: scrollPosition.y + height,
            width: width,
            height: height,
        };
    }
    /**
     * @hidden \@internal
     * @param {?} document
     * @return {?}
     */
    static getViewportScrollPosition(document) {
        /** @type {?} */
        const documentElement = document.documentElement;
        /** @type {?} */
        const documentRect = documentElement.getBoundingClientRect();
        /** @type {?} */
        const horizontalScrollPosition = -documentRect.left || document.body.scrollLeft || window.scrollX || documentElement.scrollLeft || 0;
        /** @type {?} */
        const verticalScrollPosition = -documentRect.top || document.body.scrollTop || window.scrollY || documentElement.scrollTop || 0;
        return new Point(horizontalScrollPosition, verticalScrollPosition);
    }
    /**
     * @hidden \@internal
     * @param {?} object
     * @return {?}
     */
    static cloneInstance(object) {
        /** @type {?} */
        const clonedObj = Object.assign(Object.create(Object.getPrototypeOf(object)), object);
        clonedObj.settings = cloneValue(clonedObj.settings);
        return clonedObj;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbGl0aWVzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9vdmVybGF5L3V0aWxpdGllcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBTUEsT0FBTyxFQUFtRCxVQUFVLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7O0lBRzNGLFFBQVM7SUFDVCxZQUFhO0lBQ2IsUUFBUzs7Ozs7Ozs7SUFJVCxPQUFRO0lBQ1IsWUFBYTtJQUNiLFNBQVU7Ozs7OztBQUdkLE1BQU0sT0FBTyxLQUFLOzs7OztJQUNkLFlBQW1CLENBQVMsRUFBUyxDQUFTO1FBQTNCLE1BQUMsR0FBRCxDQUFDLENBQVE7UUFBUyxNQUFDLEdBQUQsQ0FBQyxDQUFRO0lBQUksQ0FBQztDQUN0RDs7O0lBRGUsa0JBQWdCOztJQUFFLGtCQUFnQjs7Ozs7QUFHbEQsc0NBaUJDOzs7Ozs7SUFmRyxrQ0FBNkI7Ozs7O0lBRTdCLCtDQUEwQzs7Ozs7SUFFMUMsNkNBQXNDOzs7OztJQUV0QyxnREFBMkM7Ozs7O0lBRTNDLDhDQUF1Qzs7Ozs7SUFFdkMseUNBQTJDOzs7OztJQUUzQywwQ0FBNEM7Ozs7O0lBRTVDLG1DQUFlOzs7OztBQUduQixxQ0FnQkM7Ozs7OztJQWRHLDJDQUFxQzs7Ozs7SUFFckMseUNBQWlDOzs7OztJQUVqQyxnQ0FBZ0I7Ozs7O0lBRWhCLDhDQUE4Qjs7Ozs7SUFFOUIsaUNBQWdEOzs7Ozs7SUFLaEQsZ0RBQWdDOzs7OztBQUdwQyxzQ0FLQzs7Ozs7O0lBSEcsOEJBQVc7Ozs7O0lBRVgsd0NBQWdDOzs7OztBQUdwQyxnREFDQzs7OztBQUVELDZDQUNDOzs7O0FBRUQsK0NBT0M7Ozs7OztJQUxHLHVDQUFXOzs7OztJQUVYLG9EQUFpQzs7Ozs7SUFFakMsa0RBQWdDOzs7OztBQUdwQywwQkFNQzs7Ozs7O0lBSkcscUJBQWM7Ozs7O0lBR2Qsc0JBQWU7Ozs7OztBQUluQixpQ0FZQzs7O0lBWEcseUJBQVk7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QUM7SUFDckIsQ0FBQztDQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVBvc2l0aW9uU3RyYXRlZ3kgfSBmcm9tICcuL3Bvc2l0aW9uL0lQb3NpdGlvblN0cmF0ZWd5JztcblxuaW1wb3J0IHsgSVNjcm9sbFN0cmF0ZWd5IH0gZnJvbSAnLi9zY3JvbGwnO1xuaW1wb3J0IHsgQW5pbWF0aW9uUmVmZXJlbmNlTWV0YWRhdGEsIEFuaW1hdGlvblBsYXllciB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgQ29tcG9uZW50UmVmLCBFbGVtZW50UmVmLCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElneE92ZXJsYXlPdXRsZXREaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL3RvZ2dsZS90b2dnbGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IENhbmNlbGFibGVFdmVudEFyZ3MsIENhbmNlbGFibGVCcm93c2VyRXZlbnRBcmdzLCBjbG9uZVZhbHVlIH0gZnJvbSAnLi4vLi4vY29yZS91dGlscyc7XG5cbmV4cG9ydCBlbnVtIEhvcml6b250YWxBbGlnbm1lbnQge1xuICAgIExlZnQgPSAtMSxcbiAgICBDZW50ZXIgPSAtMC41LFxuICAgIFJpZ2h0ID0gMFxufVxuXG5leHBvcnQgZW51bSBWZXJ0aWNhbEFsaWdubWVudCB7XG4gICAgVG9wID0gLTEsXG4gICAgTWlkZGxlID0gLTAuNSxcbiAgICBCb3R0b20gPSAwXG59XG5cbmV4cG9ydCBjbGFzcyBQb2ludCB7XG4gICAgY29uc3RydWN0b3IocHVibGljIHg6IG51bWJlciwgcHVibGljIHk6IG51bWJlcikgeyB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUG9zaXRpb25TZXR0aW5ncyB7XG4gICAgLyoqIEF0dGFjaGluZyB0YXJnZXQgZm9yIHRoZSBjb21wb25lbnQgdG8gc2hvdyAqL1xuICAgIHRhcmdldD86IFBvaW50IHwgSFRNTEVsZW1lbnQ7XG4gICAgLyoqIERpcmVjdGlvbiBpbiB3aGljaCB0aGUgY29tcG9uZW50IHNob3VsZCBzaG93ICovXG4gICAgaG9yaXpvbnRhbERpcmVjdGlvbj86IEhvcml6b250YWxBbGlnbm1lbnQ7XG4gICAgLyoqIERpcmVjdGlvbiBpbiB3aGljaCB0aGUgY29tcG9uZW50IHNob3VsZCBzaG93ICovXG4gICAgdmVydGljYWxEaXJlY3Rpb24/OiBWZXJ0aWNhbEFsaWdubWVudDtcbiAgICAvKiogVGFyZ2V0J3Mgc3RhcnRpbmcgcG9pbnQgKi9cbiAgICBob3Jpem9udGFsU3RhcnRQb2ludD86IEhvcml6b250YWxBbGlnbm1lbnQ7XG4gICAgLyoqIFRhcmdldCdzIHN0YXJ0aW5nIHBvaW50ICovXG4gICAgdmVydGljYWxTdGFydFBvaW50PzogVmVydGljYWxBbGlnbm1lbnQ7XG4gICAgLyoqIEFuaW1hdGlvbiBhcHBsaWVkIHdoaWxlIG92ZXJsYXkgb3BlbnMgKi9cbiAgICBvcGVuQW5pbWF0aW9uPzogQW5pbWF0aW9uUmVmZXJlbmNlTWV0YWRhdGE7XG4gICAgLyoqIEFuaW1hdGlvbiBhcHBsaWVkIHdoaWxlIG92ZXJsYXkgY2xvc2VzICovXG4gICAgY2xvc2VBbmltYXRpb24/OiBBbmltYXRpb25SZWZlcmVuY2VNZXRhZGF0YTtcbiAgICAvKiogVGhlIHNpemUgdXAgdG8gd2hpY2ggZWxlbWVudCBtYXkgc2hyaW5rIHdoZW4gc2hvd24gaW4gZWxhc3RpYyBwb3NpdGlvbiBzdHJhdGVneSAqL1xuICAgIG1pblNpemU/OiBTaXplO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE92ZXJsYXlTZXR0aW5ncyB7XG4gICAgLyoqIFBvc2l0aW9uIHN0cmF0ZWd5IHRvIHVzZSB3aXRoIHRoaXMgc2V0dGluZ3MgKi9cbiAgICBwb3NpdGlvblN0cmF0ZWd5PzogSVBvc2l0aW9uU3RyYXRlZ3k7XG4gICAgLyoqIFNjcm9sbCBzdHJhdGVneSB0byB1c2Ugd2l0aCB0aGlzIHNldHRpbmdzICovXG4gICAgc2Nyb2xsU3RyYXRlZ3k/OiBJU2Nyb2xsU3RyYXRlZ3k7XG4gICAgLyoqIFNldCBpZiB0aGUgb3ZlcmxheSBzaG91bGQgYmUgaW4gbW9kYWwgbW9kZSAqL1xuICAgIG1vZGFsPzogYm9vbGVhbjtcbiAgICAvKiogU2V0IGlmIHRoZSBvdmVybGF5IHNob3VsZCBjbG9zZWQgb24gb3V0c2lkZSBjbGljayAqL1xuICAgIGNsb3NlT25PdXRzaWRlQ2xpY2s/OiBib29sZWFuO1xuICAgIC8qKiBTZXQgdGhlIG91dGxldCBjb250YWluZXIgdG8gYXR0YWNoIHRoZSBvdmVybGF5IHRvICovXG4gICAgb3V0bGV0PzogSWd4T3ZlcmxheU91dGxldERpcmVjdGl2ZSB8IEVsZW1lbnRSZWY7XG4gICAgLyoqXG4gICAgICogQGhpZGRlbiBAaW50ZXJuYWxcbiAgICAgKiBFeGNsdWRlIHRoZSBwb3NpdGlvbiBzdHJhdGVneSB0YXJnZXQgZm9yIG91dHNpZGUgY2xpY2tzXG4gICAgICovXG4gICAgZXhjbHVkZVBvc2l0aW9uVGFyZ2V0PzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBPdmVybGF5RXZlbnRBcmdzIHtcbiAgICAvKiogSWQgb2YgdGhlIG92ZXJsYXkgZ2VuZXJhdGVkIHdpdGggYGF0dGFjaCgpYCBtZXRob2QgKi9cbiAgICBpZDogc3RyaW5nO1xuICAgIC8qKiBBdmFpbGFibGUgd2hlbiBgVHlwZTxUPmAgaXMgcHJvdmlkZWQgdG8gdGhlIGBhdHRhY2goKWAgbWV0aG9kIGFuZCBhbGxvd3MgYWNjZXNzIHRvIHRoZSBjcmVhdGVkIENvbXBvbmVudCBpbnN0YW5jZSAqL1xuICAgIGNvbXBvbmVudFJlZj86IENvbXBvbmVudFJlZjx7fT47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgT3ZlcmxheUNhbmNlbGFibGVFdmVudEFyZ3MgZXh0ZW5kcyBPdmVybGF5RXZlbnRBcmdzLCBDYW5jZWxhYmxlRXZlbnRBcmdzIHtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBPdmVybGF5Q2xvc2luZ0V2ZW50QXJncyBleHRlbmRzIE92ZXJsYXlFdmVudEFyZ3MsIENhbmNlbGFibGVCcm93c2VyRXZlbnRBcmdzIHtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBPdmVybGF5QW5pbWF0aW9uRXZlbnRBcmdzIHtcbiAgICAvKiogSWQgb2YgdGhlIG92ZXJsYXkgZ2VuZXJhdGVkIHdpdGggYGF0dGFjaCgpYCBtZXRob2QgKi9cbiAgICBpZDogc3RyaW5nO1xuICAgIC8qKiBBbmltYXRpb24gcGxheWVyIHRoYXQgd2lsbCBwbGF5IHRoZSBhbmltYXRpb24gKi9cbiAgICBhbmltYXRpb25QbGF5ZXI6IEFuaW1hdGlvblBsYXllcjtcbiAgICAvKiogVHlwZSBvZiBhbmltYXRpb24gdG8gYmUgcGxheWVkLiBJdCBzaG91bGQgYmUgZWl0aGVyICdvcGVuJyBvciAnY2xvc2UnICovXG4gICAgYW5pbWF0aW9uVHlwZTogJ29wZW4nIHwgJ2Nsb3NlJztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTaXplIHtcbiAgICAvKiogR2V0cyBvciBzZXRzIHRoZSBob3Jpem9udGFsIGNvbXBvbmVudCBvZiBTaXplICovXG4gICAgd2lkdGg6IG51bWJlcjtcblxuICAgIC8qKiBHZXRzIG9yIHNldHMgdGhlIHZlcnRpY2FsIGNvbXBvbmVudCBvZiBTaXplICovXG4gICAgaGVpZ2h0OiBudW1iZXI7XG59XG5cbi8qKiBAaGlkZGVuICovXG5leHBvcnQgaW50ZXJmYWNlIE92ZXJsYXlJbmZvIHtcbiAgICBpZD86IHN0cmluZztcbiAgICBlbGVtZW50UmVmPzogRWxlbWVudFJlZjtcbiAgICBjb21wb25lbnRSZWY/OiBDb21wb25lbnRSZWY8e30+O1xuICAgIHNldHRpbmdzPzogT3ZlcmxheVNldHRpbmdzO1xuICAgIGluaXRpYWxTaXplPzogU2l6ZTtcbiAgICBob29rPzogSFRNTEVsZW1lbnQ7XG4gICAgb3BlbkFuaW1hdGlvblBsYXllcj86IEFuaW1hdGlvblBsYXllcjtcbiAgICBjbG9zZUFuaW1hdGlvblBsYXllcj86IEFuaW1hdGlvblBsYXllcjtcbiAgICBvcGVuQW5pbWF0aW9uSW5uZXJQbGF5ZXI/OiBhbnk7XG4gICAgY2xvc2VBbmltYXRpb25Jbm5lclBsYXllcj86IGFueTtcbiAgICBuZ1pvbmU6IE5nWm9uZTtcbn1cblxuLyoqIEBoaWRkZW4gKi9cbmV4cG9ydCBjbGFzcyBVdGlsIHtcbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogQ2FsY3VsYXRlcyB0aGUgcmVjdGFuZ2xlIG9mIHRhcmdldCBmb3IgcHJvdmlkZWQgb3ZlcmxheSBzZXR0aW5ncy4gRGVmYXVsdHMgdG8gMCwwLDAsMCwwLDAgcmVjdGFuZ2xlXG4gICAgICogaWYgbm8gdGFyZ2V0IGlzIHByb3ZpZGVkXG4gICAgICogQHBhcmFtIHNldHRpbmdzIE92ZXJsYXkgc2V0dGluZ3MgZm9yIHdoaWNoIHRvIGNhbGN1bGF0ZSB0YXJnZXQgcmVjdGFuZ2xlXG4gICAgICovXG4gICAgc3RhdGljIGdldFRhcmdldFJlY3Qoc2V0dGluZ3M6IFBvc2l0aW9uU2V0dGluZ3MpOiBDbGllbnRSZWN0IHtcbiAgICAgICAgbGV0IHRhcmdldFJlY3Q6IENsaWVudFJlY3QgPSB7XG4gICAgICAgICAgICBib3R0b206IDAsXG4gICAgICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICB3aWR0aDogMFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChzZXR0aW5ncy50YXJnZXQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICAgICAgdGFyZ2V0UmVjdCA9IChzZXR0aW5ncy50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICB9IGVsc2UgaWYgKHNldHRpbmdzLnRhcmdldCBpbnN0YW5jZW9mIFBvaW50KSB7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXRQb2ludCA9IHNldHRpbmdzLnRhcmdldCBhcyBQb2ludDtcbiAgICAgICAgICAgIHRhcmdldFJlY3QgPSB7XG4gICAgICAgICAgICAgICAgYm90dG9tOiB0YXJnZXRQb2ludC55LFxuICAgICAgICAgICAgICAgIGhlaWdodDogMCxcbiAgICAgICAgICAgICAgICBsZWZ0OiB0YXJnZXRQb2ludC54LFxuICAgICAgICAgICAgICAgIHJpZ2h0OiB0YXJnZXRQb2ludC54LFxuICAgICAgICAgICAgICAgIHRvcDogdGFyZ2V0UG9pbnQueSxcbiAgICAgICAgICAgICAgICB3aWR0aDogMFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0YXJnZXRSZWN0O1xuICAgIH1cblxuICAgIC8qKiBAaGlkZGVuIEBpbnRlcm5hbCAqL1xuICAgIHN0YXRpYyBnZXRWaWV3cG9ydFJlY3QoZG9jdW1lbnQ6IERvY3VtZW50KTogQ2xpZW50UmVjdCB7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoO1xuICAgICAgICBjb25zdCBoZWlnaHQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICAgICAgICBjb25zdCBzY3JvbGxQb3NpdGlvbiA9IFV0aWwuZ2V0Vmlld3BvcnRTY3JvbGxQb3NpdGlvbihkb2N1bWVudCk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRvcDogc2Nyb2xsUG9zaXRpb24ueSxcbiAgICAgICAgICAgIGxlZnQ6IHNjcm9sbFBvc2l0aW9uLngsXG4gICAgICAgICAgICByaWdodDogc2Nyb2xsUG9zaXRpb24ueCArIHdpZHRoLFxuICAgICAgICAgICAgYm90dG9tOiBzY3JvbGxQb3NpdGlvbi55ICsgaGVpZ2h0LFxuICAgICAgICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqIEBoaWRkZW4gQGludGVybmFsICovXG4gICAgc3RhdGljIGdldFZpZXdwb3J0U2Nyb2xsUG9zaXRpb24oZG9jdW1lbnQ6IERvY3VtZW50KTogUG9pbnQge1xuICAgICAgICBjb25zdCBkb2N1bWVudEVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IGRvY3VtZW50UmVjdCA9IGRvY3VtZW50RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgICBjb25zdCBob3Jpem9udGFsU2Nyb2xsUG9zaXRpb24gPVxuICAgICAgICAgICAgLWRvY3VtZW50UmVjdC5sZWZ0IHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdCB8fCB3aW5kb3cuc2Nyb2xsWCB8fCBkb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdCB8fCAwO1xuICAgICAgICBjb25zdCB2ZXJ0aWNhbFNjcm9sbFBvc2l0aW9uID0gLWRvY3VtZW50UmVjdC50b3AgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgfHwgd2luZG93LnNjcm9sbFkgfHwgZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCB8fCAwO1xuXG4gICAgICAgIHJldHVybiBuZXcgUG9pbnQoaG9yaXpvbnRhbFNjcm9sbFBvc2l0aW9uLCB2ZXJ0aWNhbFNjcm9sbFBvc2l0aW9uKTtcbiAgICB9XG5cbiAgICAvKiogQGhpZGRlbiBAaW50ZXJuYWwqL1xuICAgIHN0YXRpYyBjbG9uZUluc3RhbmNlKG9iamVjdCkge1xuICAgICAgICBjb25zdCBjbG9uZWRPYmogPSBPYmplY3QuYXNzaWduKE9iamVjdC5jcmVhdGUoT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iamVjdCkpLCBvYmplY3QpO1xuICAgICAgICBjbG9uZWRPYmouc2V0dGluZ3MgPSBjbG9uZVZhbHVlKGNsb25lZE9iai5zZXR0aW5ncyk7XG4gICAgICAgIHJldHVybiBjbG9uZWRPYmo7XG4gICAgfVxufVxuIl19