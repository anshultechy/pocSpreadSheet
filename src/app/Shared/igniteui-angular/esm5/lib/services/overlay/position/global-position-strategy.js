/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HorizontalAlignment, VerticalAlignment, Util } from './../utilities';
import { fadeIn, fadeOut } from '../../../animations/main';
/**
 * Positions the element based on the directions passed in trough PositionSettings.
 * These are Top/Middle/Bottom for verticalDirection and Left/Center/Right for horizontalDirection
 */
var /**
 * Positions the element based on the directions passed in trough PositionSettings.
 * These are Top/Middle/Bottom for verticalDirection and Left/Center/Right for horizontalDirection
 */
GlobalPositionStrategy = /** @class */ (function () {
    function GlobalPositionStrategy(settings) {
        this._defaultSettings = {
            horizontalDirection: HorizontalAlignment.Center,
            verticalDirection: VerticalAlignment.Middle,
            horizontalStartPoint: HorizontalAlignment.Center,
            verticalStartPoint: VerticalAlignment.Middle,
            openAnimation: fadeIn,
            closeAnimation: fadeOut,
            minSize: { width: 0, height: 0 }
        };
        this.settings = Object.assign({}, this._defaultSettings, settings);
    }
    /**
     * @param {?} contentElement
     * @param {?=} size
     * @param {?=} document
     * @param {?=} initialCall
     * @return {?}
     */
    GlobalPositionStrategy.prototype.position = /**
     * @param {?} contentElement
     * @param {?=} size
     * @param {?=} document
     * @param {?=} initialCall
     * @return {?}
     */
    function (contentElement, size, document, initialCall) {
        contentElement.classList.add('igx-overlay__content--relative');
        contentElement.parentElement.classList.add('igx-overlay__wrapper--flex');
        switch (this.settings.horizontalDirection) {
            case HorizontalAlignment.Left:
                contentElement.parentElement.style.justifyContent = 'flex-start';
                break;
            case HorizontalAlignment.Center:
                contentElement.parentElement.style.justifyContent = 'center';
                break;
            case HorizontalAlignment.Right:
                contentElement.parentElement.style.justifyContent = 'flex-end';
                break;
            default:
                break;
        }
        switch (this.settings.verticalDirection) {
            case VerticalAlignment.Top:
                contentElement.parentElement.style.alignItems = 'flex-start';
                break;
            case VerticalAlignment.Middle:
                contentElement.parentElement.style.alignItems = 'center';
                break;
            case VerticalAlignment.Bottom:
                contentElement.parentElement.style.alignItems = 'flex-end';
                break;
            default:
                break;
        }
    };
    /** @inheritdoc */
    /**
     * \@inheritdoc
     * @return {?}
     */
    GlobalPositionStrategy.prototype.clone = /**
     * \@inheritdoc
     * @return {?}
     */
    function () {
        return Util.cloneInstance(this);
    };
    return GlobalPositionStrategy;
}());
/**
 * Positions the element based on the directions passed in trough PositionSettings.
 * These are Top/Middle/Bottom for verticalDirection and Left/Center/Right for horizontalDirection
 */
export { GlobalPositionStrategy };
if (false) {
    /**
     * @type {?}
     * @private
     */
    GlobalPositionStrategy.prototype._defaultSettings;
    /**
     * \@inheritdoc
     * @type {?}
     */
    GlobalPositionStrategy.prototype.settings;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLXBvc2l0aW9uLXN0cmF0ZWd5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9vdmVybGF5L3Bvc2l0aW9uL2dsb2JhbC1wb3NpdGlvbi1zdHJhdGVneS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFvQixtQkFBbUIsRUFBRSxpQkFBaUIsRUFBUSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RyxPQUFPLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7OztBQU0zRDs7Ozs7SUFjSSxnQ0FBWSxRQUEyQjtRQWIvQixxQkFBZ0IsR0FBcUI7WUFDekMsbUJBQW1CLEVBQUUsbUJBQW1CLENBQUMsTUFBTTtZQUMvQyxpQkFBaUIsRUFBRSxpQkFBaUIsQ0FBQyxNQUFNO1lBQzNDLG9CQUFvQixFQUFFLG1CQUFtQixDQUFDLE1BQU07WUFDaEQsa0JBQWtCLEVBQUUsaUJBQWlCLENBQUMsTUFBTTtZQUM1QyxhQUFhLEVBQUUsTUFBTTtZQUNyQixjQUFjLEVBQUUsT0FBTztZQUN2QixPQUFPLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUU7U0FDbkMsQ0FBQztRQU1FLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7Ozs7Ozs7O0lBRUQseUNBQVE7Ozs7Ozs7SUFBUixVQUFTLGNBQTJCLEVBQUUsSUFBVyxFQUFFLFFBQW1CLEVBQUUsV0FBcUI7UUFDekYsY0FBYyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUMvRCxjQUFjLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsNEJBQTRCLENBQUMsQ0FBQztRQUN6RSxRQUFRLElBQUksQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUU7WUFDdkMsS0FBSyxtQkFBbUIsQ0FBQyxJQUFJO2dCQUN6QixjQUFjLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxjQUFjLEdBQUcsWUFBWSxDQUFDO2dCQUNqRSxNQUFNO1lBQ1YsS0FBSyxtQkFBbUIsQ0FBQyxNQUFNO2dCQUMzQixjQUFjLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxjQUFjLEdBQUcsUUFBUSxDQUFDO2dCQUM3RCxNQUFNO1lBQ1YsS0FBSyxtQkFBbUIsQ0FBQyxLQUFLO2dCQUMxQixjQUFjLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxjQUFjLEdBQUcsVUFBVSxDQUFDO2dCQUMvRCxNQUFNO1lBQ1Y7Z0JBQ0ksTUFBTTtTQUNiO1FBRUQsUUFBUSxJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFO1lBQ3JDLEtBQUssaUJBQWlCLENBQUMsR0FBRztnQkFDdEIsY0FBYyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFlBQVksQ0FBQztnQkFDN0QsTUFBTTtZQUNWLEtBQUssaUJBQWlCLENBQUMsTUFBTTtnQkFDekIsY0FBYyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQztnQkFDekQsTUFBTTtZQUNWLEtBQUssaUJBQWlCLENBQUMsTUFBTTtnQkFDekIsY0FBYyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztnQkFDM0QsTUFBTTtZQUNWO2dCQUNJLE1BQU07U0FDYjtJQUNMLENBQUM7SUFFRCxrQkFBa0I7Ozs7O0lBQ2xCLHNDQUFLOzs7O0lBQUw7UUFDSSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUNMLDZCQUFDO0FBQUQsQ0FBQyxBQXRERCxJQXNEQzs7Ozs7Ozs7Ozs7SUFyREcsa0RBUUU7Ozs7O0lBR0YsMENBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVBvc2l0aW9uU3RyYXRlZ3kgfSBmcm9tICcuL0lQb3NpdGlvblN0cmF0ZWd5JztcbmltcG9ydCB7IFBvc2l0aW9uU2V0dGluZ3MsIEhvcml6b250YWxBbGlnbm1lbnQsIFZlcnRpY2FsQWxpZ25tZW50LCBTaXplLCBVdGlsIH0gZnJvbSAnLi8uLi91dGlsaXRpZXMnO1xuaW1wb3J0IHsgZmFkZUluLCBmYWRlT3V0IH0gZnJvbSAnLi4vLi4vLi4vYW5pbWF0aW9ucy9tYWluJztcblxuLyoqXG4gKiBQb3NpdGlvbnMgdGhlIGVsZW1lbnQgYmFzZWQgb24gdGhlIGRpcmVjdGlvbnMgcGFzc2VkIGluIHRyb3VnaCBQb3NpdGlvblNldHRpbmdzLlxuICogVGhlc2UgYXJlIFRvcC9NaWRkbGUvQm90dG9tIGZvciB2ZXJ0aWNhbERpcmVjdGlvbiBhbmQgTGVmdC9DZW50ZXIvUmlnaHQgZm9yIGhvcml6b250YWxEaXJlY3Rpb25cbiAqL1xuZXhwb3J0IGNsYXNzIEdsb2JhbFBvc2l0aW9uU3RyYXRlZ3kgaW1wbGVtZW50cyBJUG9zaXRpb25TdHJhdGVneSB7XG4gICAgcHJpdmF0ZSBfZGVmYXVsdFNldHRpbmdzOiBQb3NpdGlvblNldHRpbmdzID0ge1xuICAgICAgICBob3Jpem9udGFsRGlyZWN0aW9uOiBIb3Jpem9udGFsQWxpZ25tZW50LkNlbnRlcixcbiAgICAgICAgdmVydGljYWxEaXJlY3Rpb246IFZlcnRpY2FsQWxpZ25tZW50Lk1pZGRsZSxcbiAgICAgICAgaG9yaXpvbnRhbFN0YXJ0UG9pbnQ6IEhvcml6b250YWxBbGlnbm1lbnQuQ2VudGVyLFxuICAgICAgICB2ZXJ0aWNhbFN0YXJ0UG9pbnQ6IFZlcnRpY2FsQWxpZ25tZW50Lk1pZGRsZSxcbiAgICAgICAgb3BlbkFuaW1hdGlvbjogZmFkZUluLFxuICAgICAgICBjbG9zZUFuaW1hdGlvbjogZmFkZU91dCxcbiAgICAgICAgbWluU2l6ZTogeyB3aWR0aDogMCwgaGVpZ2h0OiAwIH1cbiAgICB9O1xuXG4gICAgLyoqIEBpbmhlcml0ZG9jICovXG4gICAgcHVibGljIHNldHRpbmdzOiBQb3NpdGlvblNldHRpbmdzO1xuXG4gICAgY29uc3RydWN0b3Ioc2V0dGluZ3M/OiBQb3NpdGlvblNldHRpbmdzKSB7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9kZWZhdWx0U2V0dGluZ3MsIHNldHRpbmdzKTtcbiAgICB9XG5cbiAgICBwb3NpdGlvbihjb250ZW50RWxlbWVudDogSFRNTEVsZW1lbnQsIHNpemU/OiBTaXplLCBkb2N1bWVudD86IERvY3VtZW50LCBpbml0aWFsQ2FsbD86IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgY29udGVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaWd4LW92ZXJsYXlfX2NvbnRlbnQtLXJlbGF0aXZlJyk7XG4gICAgICAgIGNvbnRlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaWd4LW92ZXJsYXlfX3dyYXBwZXItLWZsZXgnKTtcbiAgICAgICAgc3dpdGNoICh0aGlzLnNldHRpbmdzLmhvcml6b250YWxEaXJlY3Rpb24pIHtcbiAgICAgICAgICAgIGNhc2UgSG9yaXpvbnRhbEFsaWdubWVudC5MZWZ0OlxuICAgICAgICAgICAgICAgIGNvbnRlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSAnZmxleC1zdGFydCc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEhvcml6b250YWxBbGlnbm1lbnQuQ2VudGVyOlxuICAgICAgICAgICAgICAgIGNvbnRlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSAnY2VudGVyJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgSG9yaXpvbnRhbEFsaWdubWVudC5SaWdodDpcbiAgICAgICAgICAgICAgICBjb250ZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnN0eWxlLmp1c3RpZnlDb250ZW50ID0gJ2ZsZXgtZW5kJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2ggKHRoaXMuc2V0dGluZ3MudmVydGljYWxEaXJlY3Rpb24pIHtcbiAgICAgICAgICAgIGNhc2UgVmVydGljYWxBbGlnbm1lbnQuVG9wOlxuICAgICAgICAgICAgICAgIGNvbnRlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuc3R5bGUuYWxpZ25JdGVtcyA9ICdmbGV4LXN0YXJ0JztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgVmVydGljYWxBbGlnbm1lbnQuTWlkZGxlOlxuICAgICAgICAgICAgICAgIGNvbnRlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuc3R5bGUuYWxpZ25JdGVtcyA9ICdjZW50ZXInO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBWZXJ0aWNhbEFsaWdubWVudC5Cb3R0b206XG4gICAgICAgICAgICAgICAgY29udGVudEVsZW1lbnQucGFyZW50RWxlbWVudC5zdHlsZS5hbGlnbkl0ZW1zID0gJ2ZsZXgtZW5kJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiogQGluaGVyaXRkb2MgKi9cbiAgICBjbG9uZSgpOiBJUG9zaXRpb25TdHJhdGVneSB7XG4gICAgICAgIHJldHVybiBVdGlsLmNsb25lSW5zdGFuY2UodGhpcyk7XG4gICAgfVxufVxuXG4iXX0=