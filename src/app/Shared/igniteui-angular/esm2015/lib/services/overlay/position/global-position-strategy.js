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
export class GlobalPositionStrategy {
    /**
     * @param {?=} settings
     */
    constructor(settings) {
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
    position(contentElement, size, document, initialCall) {
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
    }
    /**
     * \@inheritdoc
     * @return {?}
     */
    clone() {
        return Util.cloneInstance(this);
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLXBvc2l0aW9uLXN0cmF0ZWd5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9vdmVybGF5L3Bvc2l0aW9uL2dsb2JhbC1wb3NpdGlvbi1zdHJhdGVneS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFvQixtQkFBbUIsRUFBRSxpQkFBaUIsRUFBUSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RyxPQUFPLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7OztBQU0zRCxNQUFNLE9BQU8sc0JBQXNCOzs7O0lBYy9CLFlBQVksUUFBMkI7UUFiL0IscUJBQWdCLEdBQXFCO1lBQ3pDLG1CQUFtQixFQUFFLG1CQUFtQixDQUFDLE1BQU07WUFDL0MsaUJBQWlCLEVBQUUsaUJBQWlCLENBQUMsTUFBTTtZQUMzQyxvQkFBb0IsRUFBRSxtQkFBbUIsQ0FBQyxNQUFNO1lBQ2hELGtCQUFrQixFQUFFLGlCQUFpQixDQUFDLE1BQU07WUFDNUMsYUFBYSxFQUFFLE1BQU07WUFDckIsY0FBYyxFQUFFLE9BQU87WUFDdkIsT0FBTyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFO1NBQ25DLENBQUM7UUFNRSxJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUN2RSxDQUFDOzs7Ozs7OztJQUVELFFBQVEsQ0FBQyxjQUEyQixFQUFFLElBQVcsRUFBRSxRQUFtQixFQUFFLFdBQXFCO1FBQ3pGLGNBQWMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDL0QsY0FBYyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLDRCQUE0QixDQUFDLENBQUM7UUFDekUsUUFBUSxJQUFJLENBQUMsUUFBUSxDQUFDLG1CQUFtQixFQUFFO1lBQ3ZDLEtBQUssbUJBQW1CLENBQUMsSUFBSTtnQkFDekIsY0FBYyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsY0FBYyxHQUFHLFlBQVksQ0FBQztnQkFDakUsTUFBTTtZQUNWLEtBQUssbUJBQW1CLENBQUMsTUFBTTtnQkFDM0IsY0FBYyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsY0FBYyxHQUFHLFFBQVEsQ0FBQztnQkFDN0QsTUFBTTtZQUNWLEtBQUssbUJBQW1CLENBQUMsS0FBSztnQkFDMUIsY0FBYyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsY0FBYyxHQUFHLFVBQVUsQ0FBQztnQkFDL0QsTUFBTTtZQUNWO2dCQUNJLE1BQU07U0FDYjtRQUVELFFBQVEsSUFBSSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRTtZQUNyQyxLQUFLLGlCQUFpQixDQUFDLEdBQUc7Z0JBQ3RCLGNBQWMsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxZQUFZLENBQUM7Z0JBQzdELE1BQU07WUFDVixLQUFLLGlCQUFpQixDQUFDLE1BQU07Z0JBQ3pCLGNBQWMsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7Z0JBQ3pELE1BQU07WUFDVixLQUFLLGlCQUFpQixDQUFDLE1BQU07Z0JBQ3pCLGNBQWMsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7Z0JBQzNELE1BQU07WUFDVjtnQkFDSSxNQUFNO1NBQ2I7SUFDTCxDQUFDOzs7OztJQUdELEtBQUs7UUFDRCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEMsQ0FBQztDQUNKOzs7Ozs7SUFyREcsa0RBUUU7Ozs7O0lBR0YsMENBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVBvc2l0aW9uU3RyYXRlZ3kgfSBmcm9tICcuL0lQb3NpdGlvblN0cmF0ZWd5JztcbmltcG9ydCB7IFBvc2l0aW9uU2V0dGluZ3MsIEhvcml6b250YWxBbGlnbm1lbnQsIFZlcnRpY2FsQWxpZ25tZW50LCBTaXplLCBVdGlsIH0gZnJvbSAnLi8uLi91dGlsaXRpZXMnO1xuaW1wb3J0IHsgZmFkZUluLCBmYWRlT3V0IH0gZnJvbSAnLi4vLi4vLi4vYW5pbWF0aW9ucy9tYWluJztcblxuLyoqXG4gKiBQb3NpdGlvbnMgdGhlIGVsZW1lbnQgYmFzZWQgb24gdGhlIGRpcmVjdGlvbnMgcGFzc2VkIGluIHRyb3VnaCBQb3NpdGlvblNldHRpbmdzLlxuICogVGhlc2UgYXJlIFRvcC9NaWRkbGUvQm90dG9tIGZvciB2ZXJ0aWNhbERpcmVjdGlvbiBhbmQgTGVmdC9DZW50ZXIvUmlnaHQgZm9yIGhvcml6b250YWxEaXJlY3Rpb25cbiAqL1xuZXhwb3J0IGNsYXNzIEdsb2JhbFBvc2l0aW9uU3RyYXRlZ3kgaW1wbGVtZW50cyBJUG9zaXRpb25TdHJhdGVneSB7XG4gICAgcHJpdmF0ZSBfZGVmYXVsdFNldHRpbmdzOiBQb3NpdGlvblNldHRpbmdzID0ge1xuICAgICAgICBob3Jpem9udGFsRGlyZWN0aW9uOiBIb3Jpem9udGFsQWxpZ25tZW50LkNlbnRlcixcbiAgICAgICAgdmVydGljYWxEaXJlY3Rpb246IFZlcnRpY2FsQWxpZ25tZW50Lk1pZGRsZSxcbiAgICAgICAgaG9yaXpvbnRhbFN0YXJ0UG9pbnQ6IEhvcml6b250YWxBbGlnbm1lbnQuQ2VudGVyLFxuICAgICAgICB2ZXJ0aWNhbFN0YXJ0UG9pbnQ6IFZlcnRpY2FsQWxpZ25tZW50Lk1pZGRsZSxcbiAgICAgICAgb3BlbkFuaW1hdGlvbjogZmFkZUluLFxuICAgICAgICBjbG9zZUFuaW1hdGlvbjogZmFkZU91dCxcbiAgICAgICAgbWluU2l6ZTogeyB3aWR0aDogMCwgaGVpZ2h0OiAwIH1cbiAgICB9O1xuXG4gICAgLyoqIEBpbmhlcml0ZG9jICovXG4gICAgcHVibGljIHNldHRpbmdzOiBQb3NpdGlvblNldHRpbmdzO1xuXG4gICAgY29uc3RydWN0b3Ioc2V0dGluZ3M/OiBQb3NpdGlvblNldHRpbmdzKSB7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9kZWZhdWx0U2V0dGluZ3MsIHNldHRpbmdzKTtcbiAgICB9XG5cbiAgICBwb3NpdGlvbihjb250ZW50RWxlbWVudDogSFRNTEVsZW1lbnQsIHNpemU/OiBTaXplLCBkb2N1bWVudD86IERvY3VtZW50LCBpbml0aWFsQ2FsbD86IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgY29udGVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaWd4LW92ZXJsYXlfX2NvbnRlbnQtLXJlbGF0aXZlJyk7XG4gICAgICAgIGNvbnRlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaWd4LW92ZXJsYXlfX3dyYXBwZXItLWZsZXgnKTtcbiAgICAgICAgc3dpdGNoICh0aGlzLnNldHRpbmdzLmhvcml6b250YWxEaXJlY3Rpb24pIHtcbiAgICAgICAgICAgIGNhc2UgSG9yaXpvbnRhbEFsaWdubWVudC5MZWZ0OlxuICAgICAgICAgICAgICAgIGNvbnRlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSAnZmxleC1zdGFydCc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEhvcml6b250YWxBbGlnbm1lbnQuQ2VudGVyOlxuICAgICAgICAgICAgICAgIGNvbnRlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSAnY2VudGVyJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgSG9yaXpvbnRhbEFsaWdubWVudC5SaWdodDpcbiAgICAgICAgICAgICAgICBjb250ZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnN0eWxlLmp1c3RpZnlDb250ZW50ID0gJ2ZsZXgtZW5kJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2ggKHRoaXMuc2V0dGluZ3MudmVydGljYWxEaXJlY3Rpb24pIHtcbiAgICAgICAgICAgIGNhc2UgVmVydGljYWxBbGlnbm1lbnQuVG9wOlxuICAgICAgICAgICAgICAgIGNvbnRlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuc3R5bGUuYWxpZ25JdGVtcyA9ICdmbGV4LXN0YXJ0JztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgVmVydGljYWxBbGlnbm1lbnQuTWlkZGxlOlxuICAgICAgICAgICAgICAgIGNvbnRlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuc3R5bGUuYWxpZ25JdGVtcyA9ICdjZW50ZXInO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBWZXJ0aWNhbEFsaWdubWVudC5Cb3R0b206XG4gICAgICAgICAgICAgICAgY29udGVudEVsZW1lbnQucGFyZW50RWxlbWVudC5zdHlsZS5hbGlnbkl0ZW1zID0gJ2ZsZXgtZW5kJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiogQGluaGVyaXRkb2MgKi9cbiAgICBjbG9uZSgpOiBJUG9zaXRpb25TdHJhdGVneSB7XG4gICAgICAgIHJldHVybiBVdGlsLmNsb25lSW5zdGFuY2UodGhpcyk7XG4gICAgfVxufVxuXG4iXX0=