/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { cloneValue } from '../../core/utils';
/** @enum {number} */
var HorizontalAlignment = {
    Left: -1,
    Center: -0.5,
    Right: 0,
};
export { HorizontalAlignment };
HorizontalAlignment[HorizontalAlignment.Left] = 'Left';
HorizontalAlignment[HorizontalAlignment.Center] = 'Center';
HorizontalAlignment[HorizontalAlignment.Right] = 'Right';
/** @enum {number} */
var VerticalAlignment = {
    Top: -1,
    Middle: -0.5,
    Bottom: 0,
};
export { VerticalAlignment };
VerticalAlignment[VerticalAlignment.Top] = 'Top';
VerticalAlignment[VerticalAlignment.Middle] = 'Middle';
VerticalAlignment[VerticalAlignment.Bottom] = 'Bottom';
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    return Point;
}());
export { Point };
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
var /**
 * @hidden
 */
Util = /** @class */ (function () {
    function Util() {
    }
    /**
     * @hidden
     * Calculates the rectangle of target for provided overlay settings. Defaults to 0,0,0,0,0,0 rectangle
     * if no target is provided
     * @param settings Overlay settings for which to calculate target rectangle
     */
    /**
     * @hidden
     * Calculates the rectangle of target for provided overlay settings. Defaults to 0,0,0,0,0,0 rectangle
     * if no target is provided
     * @param {?} settings Overlay settings for which to calculate target rectangle
     * @return {?}
     */
    Util.getTargetRect = /**
     * @hidden
     * Calculates the rectangle of target for provided overlay settings. Defaults to 0,0,0,0,0,0 rectangle
     * if no target is provided
     * @param {?} settings Overlay settings for which to calculate target rectangle
     * @return {?}
     */
    function (settings) {
        /** @type {?} */
        var targetRect = {
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
            var targetPoint = (/** @type {?} */ (settings.target));
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
    };
    /** @hidden @internal */
    /**
     * @hidden \@internal
     * @param {?} document
     * @return {?}
     */
    Util.getViewportRect = /**
     * @hidden \@internal
     * @param {?} document
     * @return {?}
     */
    function (document) {
        /** @type {?} */
        var width = document.documentElement.clientWidth;
        /** @type {?} */
        var height = document.documentElement.clientHeight;
        /** @type {?} */
        var scrollPosition = Util.getViewportScrollPosition(document);
        return {
            top: scrollPosition.y,
            left: scrollPosition.x,
            right: scrollPosition.x + width,
            bottom: scrollPosition.y + height,
            width: width,
            height: height,
        };
    };
    /** @hidden @internal */
    /**
     * @hidden \@internal
     * @param {?} document
     * @return {?}
     */
    Util.getViewportScrollPosition = /**
     * @hidden \@internal
     * @param {?} document
     * @return {?}
     */
    function (document) {
        /** @type {?} */
        var documentElement = document.documentElement;
        /** @type {?} */
        var documentRect = documentElement.getBoundingClientRect();
        /** @type {?} */
        var horizontalScrollPosition = -documentRect.left || document.body.scrollLeft || window.scrollX || documentElement.scrollLeft || 0;
        /** @type {?} */
        var verticalScrollPosition = -documentRect.top || document.body.scrollTop || window.scrollY || documentElement.scrollTop || 0;
        return new Point(horizontalScrollPosition, verticalScrollPosition);
    };
    /** @hidden @internal*/
    /**
     * @hidden \@internal
     * @param {?} object
     * @return {?}
     */
    Util.cloneInstance = /**
     * @hidden \@internal
     * @param {?} object
     * @return {?}
     */
    function (object) {
        /** @type {?} */
        var clonedObj = Object.assign(Object.create(Object.getPrototypeOf(object)), object);
        clonedObj.settings = cloneValue(clonedObj.settings);
        return clonedObj;
    };
    return Util;
}());
/**
 * @hidden
 */
export { Util };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbGl0aWVzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9vdmVybGF5L3V0aWxpdGllcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBTUEsT0FBTyxFQUFtRCxVQUFVLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7O0lBRzNGLFFBQVM7SUFDVCxZQUFhO0lBQ2IsUUFBUzs7Ozs7Ozs7SUFJVCxPQUFRO0lBQ1IsWUFBYTtJQUNiLFNBQVU7Ozs7OztBQUdkO0lBQ0ksZUFBbUIsQ0FBUyxFQUFTLENBQVM7UUFBM0IsTUFBQyxHQUFELENBQUMsQ0FBUTtRQUFTLE1BQUMsR0FBRCxDQUFDLENBQVE7SUFBSSxDQUFDO0lBQ3ZELFlBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQzs7OztJQURlLGtCQUFnQjs7SUFBRSxrQkFBZ0I7Ozs7O0FBR2xELHNDQWlCQzs7Ozs7O0lBZkcsa0NBQTZCOzs7OztJQUU3QiwrQ0FBMEM7Ozs7O0lBRTFDLDZDQUFzQzs7Ozs7SUFFdEMsZ0RBQTJDOzs7OztJQUUzQyw4Q0FBdUM7Ozs7O0lBRXZDLHlDQUEyQzs7Ozs7SUFFM0MsMENBQTRDOzs7OztJQUU1QyxtQ0FBZTs7Ozs7QUFHbkIscUNBZ0JDOzs7Ozs7SUFkRywyQ0FBcUM7Ozs7O0lBRXJDLHlDQUFpQzs7Ozs7SUFFakMsZ0NBQWdCOzs7OztJQUVoQiw4Q0FBOEI7Ozs7O0lBRTlCLGlDQUFnRDs7Ozs7O0lBS2hELGdEQUFnQzs7Ozs7QUFHcEMsc0NBS0M7Ozs7OztJQUhHLDhCQUFXOzs7OztJQUVYLHdDQUFnQzs7Ozs7QUFHcEMsZ0RBQ0M7Ozs7QUFFRCw2Q0FDQzs7OztBQUVELCtDQU9DOzs7Ozs7SUFMRyx1Q0FBVzs7Ozs7SUFFWCxvREFBaUM7Ozs7O0lBRWpDLGtEQUFnQzs7Ozs7QUFHcEMsMEJBTUM7Ozs7OztJQUpHLHFCQUFjOzs7OztJQUdkLHNCQUFlOzs7Ozs7QUFJbkIsaUNBWUM7OztJQVhH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LFNBQVMsQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNwRCxPQUFPLFNBQVMsQ0FBQztJQUNyQixDQUFDO0lBQ0wsV0FBQztBQUFELENBQUMsQUFwRUQsSUFvRUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJUG9zaXRpb25TdHJhdGVneSB9IGZyb20gJy4vcG9zaXRpb24vSVBvc2l0aW9uU3RyYXRlZ3knO1xuXG5pbXBvcnQgeyBJU2Nyb2xsU3RyYXRlZ3kgfSBmcm9tICcuL3Njcm9sbCc7XG5pbXBvcnQgeyBBbmltYXRpb25SZWZlcmVuY2VNZXRhZGF0YSwgQW5pbWF0aW9uUGxheWVyIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBDb21wb25lbnRSZWYsIEVsZW1lbnRSZWYsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSWd4T3ZlcmxheU91dGxldERpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvdG9nZ2xlL3RvZ2dsZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ2FuY2VsYWJsZUV2ZW50QXJncywgQ2FuY2VsYWJsZUJyb3dzZXJFdmVudEFyZ3MsIGNsb25lVmFsdWUgfSBmcm9tICcuLi8uLi9jb3JlL3V0aWxzJztcblxuZXhwb3J0IGVudW0gSG9yaXpvbnRhbEFsaWdubWVudCB7XG4gICAgTGVmdCA9IC0xLFxuICAgIENlbnRlciA9IC0wLjUsXG4gICAgUmlnaHQgPSAwXG59XG5cbmV4cG9ydCBlbnVtIFZlcnRpY2FsQWxpZ25tZW50IHtcbiAgICBUb3AgPSAtMSxcbiAgICBNaWRkbGUgPSAtMC41LFxuICAgIEJvdHRvbSA9IDBcbn1cblxuZXhwb3J0IGNsYXNzIFBvaW50IHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgeDogbnVtYmVyLCBwdWJsaWMgeTogbnVtYmVyKSB7IH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBQb3NpdGlvblNldHRpbmdzIHtcbiAgICAvKiogQXR0YWNoaW5nIHRhcmdldCBmb3IgdGhlIGNvbXBvbmVudCB0byBzaG93ICovXG4gICAgdGFyZ2V0PzogUG9pbnQgfCBIVE1MRWxlbWVudDtcbiAgICAvKiogRGlyZWN0aW9uIGluIHdoaWNoIHRoZSBjb21wb25lbnQgc2hvdWxkIHNob3cgKi9cbiAgICBob3Jpem9udGFsRGlyZWN0aW9uPzogSG9yaXpvbnRhbEFsaWdubWVudDtcbiAgICAvKiogRGlyZWN0aW9uIGluIHdoaWNoIHRoZSBjb21wb25lbnQgc2hvdWxkIHNob3cgKi9cbiAgICB2ZXJ0aWNhbERpcmVjdGlvbj86IFZlcnRpY2FsQWxpZ25tZW50O1xuICAgIC8qKiBUYXJnZXQncyBzdGFydGluZyBwb2ludCAqL1xuICAgIGhvcml6b250YWxTdGFydFBvaW50PzogSG9yaXpvbnRhbEFsaWdubWVudDtcbiAgICAvKiogVGFyZ2V0J3Mgc3RhcnRpbmcgcG9pbnQgKi9cbiAgICB2ZXJ0aWNhbFN0YXJ0UG9pbnQ/OiBWZXJ0aWNhbEFsaWdubWVudDtcbiAgICAvKiogQW5pbWF0aW9uIGFwcGxpZWQgd2hpbGUgb3ZlcmxheSBvcGVucyAqL1xuICAgIG9wZW5BbmltYXRpb24/OiBBbmltYXRpb25SZWZlcmVuY2VNZXRhZGF0YTtcbiAgICAvKiogQW5pbWF0aW9uIGFwcGxpZWQgd2hpbGUgb3ZlcmxheSBjbG9zZXMgKi9cbiAgICBjbG9zZUFuaW1hdGlvbj86IEFuaW1hdGlvblJlZmVyZW5jZU1ldGFkYXRhO1xuICAgIC8qKiBUaGUgc2l6ZSB1cCB0byB3aGljaCBlbGVtZW50IG1heSBzaHJpbmsgd2hlbiBzaG93biBpbiBlbGFzdGljIHBvc2l0aW9uIHN0cmF0ZWd5ICovXG4gICAgbWluU2l6ZT86IFNpemU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgT3ZlcmxheVNldHRpbmdzIHtcbiAgICAvKiogUG9zaXRpb24gc3RyYXRlZ3kgdG8gdXNlIHdpdGggdGhpcyBzZXR0aW5ncyAqL1xuICAgIHBvc2l0aW9uU3RyYXRlZ3k/OiBJUG9zaXRpb25TdHJhdGVneTtcbiAgICAvKiogU2Nyb2xsIHN0cmF0ZWd5IHRvIHVzZSB3aXRoIHRoaXMgc2V0dGluZ3MgKi9cbiAgICBzY3JvbGxTdHJhdGVneT86IElTY3JvbGxTdHJhdGVneTtcbiAgICAvKiogU2V0IGlmIHRoZSBvdmVybGF5IHNob3VsZCBiZSBpbiBtb2RhbCBtb2RlICovXG4gICAgbW9kYWw/OiBib29sZWFuO1xuICAgIC8qKiBTZXQgaWYgdGhlIG92ZXJsYXkgc2hvdWxkIGNsb3NlZCBvbiBvdXRzaWRlIGNsaWNrICovXG4gICAgY2xvc2VPbk91dHNpZGVDbGljaz86IGJvb2xlYW47XG4gICAgLyoqIFNldCB0aGUgb3V0bGV0IGNvbnRhaW5lciB0byBhdHRhY2ggdGhlIG92ZXJsYXkgdG8gKi9cbiAgICBvdXRsZXQ/OiBJZ3hPdmVybGF5T3V0bGV0RGlyZWN0aXZlIHwgRWxlbWVudFJlZjtcbiAgICAvKipcbiAgICAgKiBAaGlkZGVuIEBpbnRlcm5hbFxuICAgICAqIEV4Y2x1ZGUgdGhlIHBvc2l0aW9uIHN0cmF0ZWd5IHRhcmdldCBmb3Igb3V0c2lkZSBjbGlja3NcbiAgICAgKi9cbiAgICBleGNsdWRlUG9zaXRpb25UYXJnZXQ/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE92ZXJsYXlFdmVudEFyZ3Mge1xuICAgIC8qKiBJZCBvZiB0aGUgb3ZlcmxheSBnZW5lcmF0ZWQgd2l0aCBgYXR0YWNoKClgIG1ldGhvZCAqL1xuICAgIGlkOiBzdHJpbmc7XG4gICAgLyoqIEF2YWlsYWJsZSB3aGVuIGBUeXBlPFQ+YCBpcyBwcm92aWRlZCB0byB0aGUgYGF0dGFjaCgpYCBtZXRob2QgYW5kIGFsbG93cyBhY2Nlc3MgdG8gdGhlIGNyZWF0ZWQgQ29tcG9uZW50IGluc3RhbmNlICovXG4gICAgY29tcG9uZW50UmVmPzogQ29tcG9uZW50UmVmPHt9Pjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBPdmVybGF5Q2FuY2VsYWJsZUV2ZW50QXJncyBleHRlbmRzIE92ZXJsYXlFdmVudEFyZ3MsIENhbmNlbGFibGVFdmVudEFyZ3Mge1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE92ZXJsYXlDbG9zaW5nRXZlbnRBcmdzIGV4dGVuZHMgT3ZlcmxheUV2ZW50QXJncywgQ2FuY2VsYWJsZUJyb3dzZXJFdmVudEFyZ3Mge1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE92ZXJsYXlBbmltYXRpb25FdmVudEFyZ3Mge1xuICAgIC8qKiBJZCBvZiB0aGUgb3ZlcmxheSBnZW5lcmF0ZWQgd2l0aCBgYXR0YWNoKClgIG1ldGhvZCAqL1xuICAgIGlkOiBzdHJpbmc7XG4gICAgLyoqIEFuaW1hdGlvbiBwbGF5ZXIgdGhhdCB3aWxsIHBsYXkgdGhlIGFuaW1hdGlvbiAqL1xuICAgIGFuaW1hdGlvblBsYXllcjogQW5pbWF0aW9uUGxheWVyO1xuICAgIC8qKiBUeXBlIG9mIGFuaW1hdGlvbiB0byBiZSBwbGF5ZWQuIEl0IHNob3VsZCBiZSBlaXRoZXIgJ29wZW4nIG9yICdjbG9zZScgKi9cbiAgICBhbmltYXRpb25UeXBlOiAnb3BlbicgfCAnY2xvc2UnO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNpemUge1xuICAgIC8qKiBHZXRzIG9yIHNldHMgdGhlIGhvcml6b250YWwgY29tcG9uZW50IG9mIFNpemUgKi9cbiAgICB3aWR0aDogbnVtYmVyO1xuXG4gICAgLyoqIEdldHMgb3Igc2V0cyB0aGUgdmVydGljYWwgY29tcG9uZW50IG9mIFNpemUgKi9cbiAgICBoZWlnaHQ6IG51bWJlcjtcbn1cblxuLyoqIEBoaWRkZW4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgT3ZlcmxheUluZm8ge1xuICAgIGlkPzogc3RyaW5nO1xuICAgIGVsZW1lbnRSZWY/OiBFbGVtZW50UmVmO1xuICAgIGNvbXBvbmVudFJlZj86IENvbXBvbmVudFJlZjx7fT47XG4gICAgc2V0dGluZ3M/OiBPdmVybGF5U2V0dGluZ3M7XG4gICAgaW5pdGlhbFNpemU/OiBTaXplO1xuICAgIGhvb2s/OiBIVE1MRWxlbWVudDtcbiAgICBvcGVuQW5pbWF0aW9uUGxheWVyPzogQW5pbWF0aW9uUGxheWVyO1xuICAgIGNsb3NlQW5pbWF0aW9uUGxheWVyPzogQW5pbWF0aW9uUGxheWVyO1xuICAgIG9wZW5BbmltYXRpb25Jbm5lclBsYXllcj86IGFueTtcbiAgICBjbG9zZUFuaW1hdGlvbklubmVyUGxheWVyPzogYW55O1xuICAgIG5nWm9uZTogTmdab25lO1xufVxuXG4vKiogQGhpZGRlbiAqL1xuZXhwb3J0IGNsYXNzIFV0aWwge1xuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKiBDYWxjdWxhdGVzIHRoZSByZWN0YW5nbGUgb2YgdGFyZ2V0IGZvciBwcm92aWRlZCBvdmVybGF5IHNldHRpbmdzLiBEZWZhdWx0cyB0byAwLDAsMCwwLDAsMCByZWN0YW5nbGVcbiAgICAgKiBpZiBubyB0YXJnZXQgaXMgcHJvdmlkZWRcbiAgICAgKiBAcGFyYW0gc2V0dGluZ3MgT3ZlcmxheSBzZXR0aW5ncyBmb3Igd2hpY2ggdG8gY2FsY3VsYXRlIHRhcmdldCByZWN0YW5nbGVcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0VGFyZ2V0UmVjdChzZXR0aW5nczogUG9zaXRpb25TZXR0aW5ncyk6IENsaWVudFJlY3Qge1xuICAgICAgICBsZXQgdGFyZ2V0UmVjdDogQ2xpZW50UmVjdCA9IHtcbiAgICAgICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgICAgIGhlaWdodDogMCxcbiAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICByaWdodDogMCxcbiAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgIHdpZHRoOiAwXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHNldHRpbmdzLnRhcmdldCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgICAgICB0YXJnZXRSZWN0ID0gKHNldHRpbmdzLnRhcmdldCBhcyBIVE1MRWxlbWVudCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIH0gZWxzZSBpZiAoc2V0dGluZ3MudGFyZ2V0IGluc3RhbmNlb2YgUG9pbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldFBvaW50ID0gc2V0dGluZ3MudGFyZ2V0IGFzIFBvaW50O1xuICAgICAgICAgICAgdGFyZ2V0UmVjdCA9IHtcbiAgICAgICAgICAgICAgICBib3R0b206IHRhcmdldFBvaW50LnksXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICAgICAgICAgIGxlZnQ6IHRhcmdldFBvaW50LngsXG4gICAgICAgICAgICAgICAgcmlnaHQ6IHRhcmdldFBvaW50LngsXG4gICAgICAgICAgICAgICAgdG9wOiB0YXJnZXRQb2ludC55LFxuICAgICAgICAgICAgICAgIHdpZHRoOiAwXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRhcmdldFJlY3Q7XG4gICAgfVxuXG4gICAgLyoqIEBoaWRkZW4gQGludGVybmFsICovXG4gICAgc3RhdGljIGdldFZpZXdwb3J0UmVjdChkb2N1bWVudDogRG9jdW1lbnQpOiBDbGllbnRSZWN0IHtcbiAgICAgICAgY29uc3Qgd2lkdGggPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGg7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQ7XG4gICAgICAgIGNvbnN0IHNjcm9sbFBvc2l0aW9uID0gVXRpbC5nZXRWaWV3cG9ydFNjcm9sbFBvc2l0aW9uKGRvY3VtZW50KTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdG9wOiBzY3JvbGxQb3NpdGlvbi55LFxuICAgICAgICAgICAgbGVmdDogc2Nyb2xsUG9zaXRpb24ueCxcbiAgICAgICAgICAgIHJpZ2h0OiBzY3JvbGxQb3NpdGlvbi54ICsgd2lkdGgsXG4gICAgICAgICAgICBib3R0b206IHNjcm9sbFBvc2l0aW9uLnkgKyBoZWlnaHQsXG4gICAgICAgICAgICB3aWR0aDogd2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKiogQGhpZGRlbiBAaW50ZXJuYWwgKi9cbiAgICBzdGF0aWMgZ2V0Vmlld3BvcnRTY3JvbGxQb3NpdGlvbihkb2N1bWVudDogRG9jdW1lbnQpOiBQb2ludCB7XG4gICAgICAgIGNvbnN0IGRvY3VtZW50RWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgY29uc3QgZG9jdW1lbnRSZWN0ID0gZG9jdW1lbnRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICAgIGNvbnN0IGhvcml6b250YWxTY3JvbGxQb3NpdGlvbiA9XG4gICAgICAgICAgICAtZG9jdW1lbnRSZWN0LmxlZnQgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0IHx8IHdpbmRvdy5zY3JvbGxYIHx8IGRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0IHx8IDA7XG4gICAgICAgIGNvbnN0IHZlcnRpY2FsU2Nyb2xsUG9zaXRpb24gPSAtZG9jdW1lbnRSZWN0LnRvcCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCB8fCB3aW5kb3cuc2Nyb2xsWSB8fCBkb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIHx8IDA7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQb2ludChob3Jpem9udGFsU2Nyb2xsUG9zaXRpb24sIHZlcnRpY2FsU2Nyb2xsUG9zaXRpb24pO1xuICAgIH1cblxuICAgIC8qKiBAaGlkZGVuIEBpbnRlcm5hbCovXG4gICAgc3RhdGljIGNsb25lSW5zdGFuY2Uob2JqZWN0KSB7XG4gICAgICAgIGNvbnN0IGNsb25lZE9iaiA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmNyZWF0ZShPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqZWN0KSksIG9iamVjdCk7XG4gICAgICAgIGNsb25lZE9iai5zZXR0aW5ncyA9IGNsb25lVmFsdWUoY2xvbmVkT2JqLnNldHRpbmdzKTtcbiAgICAgICAgcmV0dXJuIGNsb25lZE9iajtcbiAgICB9XG59XG4iXX0=