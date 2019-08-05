/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, SecurityContext, Inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
import * as i2 from "@angular/common";
/**
 * **Ignite UI for Angular Icon Service** -
 *
 * The Ignite UI Icon Service makes it easy for developers to include custom SVG images and use them with IgxIconComponent.
 * In addition it could be used to associate a custom class to be applied on IgxIconComponent according to given fontSet.
 *
 * Example:
 * ```typescript
 * this.iconService.registerFontSetAlias('material', 'material-icons');
 * this.iconService.addSvgIcon('aruba', '/assets/svg/country_flags/aruba.svg', 'svg-flags');
 * ```
 */
var IgxIconService = /** @class */ (function () {
    function IgxIconService(_sanitizer, _document) {
        this._sanitizer = _sanitizer;
        this._document = _document;
        this._fontSet = 'material-icons';
        this._fontSetAliases = new Map();
        this._cachedSvgIcons = new Set();
    }
    Object.defineProperty(IgxIconService.prototype, "defaultFontSet", {
        /**
         *  Returns the default font set.
         *```typescript
         *   const defaultFontSet = this.iconService.defaultFontSet;
         * ```
         */
        get: /**
         *  Returns the default font set.
         * ```typescript
         *   const defaultFontSet = this.iconService.defaultFontSet;
         * ```
         * @return {?}
         */
        function () {
            return this._fontSet;
        },
        /**
         *  Sets the default font set.
         *```typescript
         *   this.iconService.defaultFontSet = 'svg-flags';
         * ```
         */
        set: /**
         *  Sets the default font set.
         * ```typescript
         *   this.iconService.defaultFontSet = 'svg-flags';
         * ```
         * @param {?} className
         * @return {?}
         */
        function (className) {
            this._fontSet = className;
        },
        enumerable: true,
        configurable: true
    });
    /**
     *  Registers a custom class to be applied to IgxIconComponent for a given fontSet.
     *```typescript
     *   this.iconService.registerFontSetAlias('material', 'material-icons');
     * ```
     */
    /**
     *  Registers a custom class to be applied to IgxIconComponent for a given fontSet.
     * ```typescript
     *   this.iconService.registerFontSetAlias('material', 'material-icons');
     * ```
     * @template THIS
     * @this {THIS}
     * @param {?} alias
     * @param {?=} className
     * @return {THIS}
     */
    IgxIconService.prototype.registerFontSetAlias = /**
     *  Registers a custom class to be applied to IgxIconComponent for a given fontSet.
     * ```typescript
     *   this.iconService.registerFontSetAlias('material', 'material-icons');
     * ```
     * @template THIS
     * @this {THIS}
     * @param {?} alias
     * @param {?=} className
     * @return {THIS}
     */
    function (alias, className) {
        if (className === void 0) { className = alias; }
        (/** @type {?} */ (this))._fontSetAliases.set(alias, className);
        return (/** @type {?} */ (this));
    };
    /**
     *  Returns the custom class, if any, associated to a given fontSet.
     *```typescript
     *   const fontSetClass = this.iconService.fontSetClassName('material');
     * ```
     */
    /**
     *  Returns the custom class, if any, associated to a given fontSet.
     * ```typescript
     *   const fontSetClass = this.iconService.fontSetClassName('material');
     * ```
     * @param {?} alias
     * @return {?}
     */
    IgxIconService.prototype.fontSetClassName = /**
     *  Returns the custom class, if any, associated to a given fontSet.
     * ```typescript
     *   const fontSetClass = this.iconService.fontSetClassName('material');
     * ```
     * @param {?} alias
     * @return {?}
     */
    function (alias) {
        return this._fontSetAliases.get(alias) || alias;
    };
    /**
     *  Adds an SVG image to the cache. SVG source is an url.
     *```typescript
     *   this.iconService.addSvgIcon('aruba', '/assets/svg/country_flags/aruba.svg', 'svg-flags');
     * ```
     */
    /**
     *  Adds an SVG image to the cache. SVG source is an url.
     * ```typescript
     *   this.iconService.addSvgIcon('aruba', '/assets/svg/country_flags/aruba.svg', 'svg-flags');
     * ```
     * @param {?} iconName
     * @param {?} url
     * @param {?=} fontSet
     * @return {?}
     */
    IgxIconService.prototype.addSvgIcon = /**
     *  Adds an SVG image to the cache. SVG source is an url.
     * ```typescript
     *   this.iconService.addSvgIcon('aruba', '/assets/svg/country_flags/aruba.svg', 'svg-flags');
     * ```
     * @param {?} iconName
     * @param {?} url
     * @param {?=} fontSet
     * @return {?}
     */
    function (iconName, url, fontSet) {
        if (fontSet === void 0) { fontSet = ''; }
        if (iconName && url) {
            /** @type {?} */
            var safeUrl = this._sanitizer.bypassSecurityTrustResourceUrl(url);
            if (!safeUrl) {
                throw new Error("The provided URL could not be processed as trusted resource URL by Angular's DomSanitizer: \"" + url + "\".");
            }
            /** @type {?} */
            var sanitizedUrl = this._sanitizer.sanitize(SecurityContext.RESOURCE_URL, safeUrl);
            if (!sanitizedUrl) {
                throw new Error("The URL provided was not trusted as a resource URL: \"" + url + "\".");
            }
            this.fetchSvg(iconName, url, fontSet);
        }
        else {
            throw new Error('You should provide at least `iconName` and `url` to register an svg icon.');
        }
    };
    /**
     *  Adds an SVG image to the cache. SVG source is its text.
     *```typescript
     *   this.iconService.addSvgIcon('simple', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
     *   <path d="M74 74h54v54H74" /></svg>', 'svg-flags');
     * ```
     */
    /**
     *  Adds an SVG image to the cache. SVG source is its text.
     * ```typescript
     *   this.iconService.addSvgIcon('simple', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
     *   <path d="M74 74h54v54H74" /></svg>', 'svg-flags');
     * ```
     * @param {?} iconName
     * @param {?} iconText
     * @param {?=} fontSet
     * @return {?}
     */
    IgxIconService.prototype.addSvgIconFromText = /**
     *  Adds an SVG image to the cache. SVG source is its text.
     * ```typescript
     *   this.iconService.addSvgIcon('simple', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
     *   <path d="M74 74h54v54H74" /></svg>', 'svg-flags');
     * ```
     * @param {?} iconName
     * @param {?} iconText
     * @param {?=} fontSet
     * @return {?}
     */
    function (iconName, iconText, fontSet) {
        if (fontSet === void 0) { fontSet = ''; }
        if (iconName && iconText) {
            this.cacheSvgIcon(iconName, iconText, fontSet);
        }
        else {
            throw new Error('You should provide at least `iconName` and `iconText` to register an svg icon.');
        }
    };
    /**
     *  Returns whether a given SVG image is present in the cache.
     *```typescript
     *   const isSvgCached = this.iconService.isSvgIconCached('aruba', 'svg-flags');
     * ```
     */
    /**
     *  Returns whether a given SVG image is present in the cache.
     * ```typescript
     *   const isSvgCached = this.iconService.isSvgIconCached('aruba', 'svg-flags');
     * ```
     * @param {?} iconName
     * @param {?=} fontSet
     * @return {?}
     */
    IgxIconService.prototype.isSvgIconCached = /**
     *  Returns whether a given SVG image is present in the cache.
     * ```typescript
     *   const isSvgCached = this.iconService.isSvgIconCached('aruba', 'svg-flags');
     * ```
     * @param {?} iconName
     * @param {?=} fontSet
     * @return {?}
     */
    function (iconName, fontSet) {
        if (fontSet === void 0) { fontSet = ''; }
        /** @type {?} */
        var iconKey = this.getSvgIconKey(iconName, fontSet);
        return this._cachedSvgIcons.has(iconKey);
    };
    /**
     *  Returns the key of a cached SVG image.
     *```typescript
     *   const svgIconKey = this.iconService.getSvgIconKey('aruba', 'svg-flags');
     * ```
     */
    /**
     *  Returns the key of a cached SVG image.
     * ```typescript
     *   const svgIconKey = this.iconService.getSvgIconKey('aruba', 'svg-flags');
     * ```
     * @param {?} iconName
     * @param {?=} fontSet
     * @return {?}
     */
    IgxIconService.prototype.getSvgIconKey = /**
     *  Returns the key of a cached SVG image.
     * ```typescript
     *   const svgIconKey = this.iconService.getSvgIconKey('aruba', 'svg-flags');
     * ```
     * @param {?} iconName
     * @param {?=} fontSet
     * @return {?}
     */
    function (iconName, fontSet) {
        if (fontSet === void 0) { fontSet = ''; }
        return fontSet + '_' + iconName;
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @private
     * @param {?} iconName
     * @param {?} url
     * @param {?=} fontSet
     * @return {?}
     */
    IgxIconService.prototype.fetchSvg = /**
     * @hidden
     * @private
     * @param {?} iconName
     * @param {?} url
     * @param {?=} fontSet
     * @return {?}
     */
    function (iconName, url, fontSet) {
        if (fontSet === void 0) { fontSet = ''; }
        /** @type {?} */
        var instance = this;
        /** @type {?} */
        var httpRequest = new XMLHttpRequest();
        httpRequest.open('GET', url, true);
        httpRequest.responseType = 'text';
        // load – when the result is ready, that includes HTTP errors like 404.
        httpRequest.onload = function (event) {
            /** @type {?} */
            var request = (/** @type {?} */ (event.target));
            if (request.status === 200) {
                instance.cacheSvgIcon(iconName, request.responseText, fontSet);
            }
            else {
                throw new Error("Could not fetch SVG from url: " + url + "; error: " + request.status + " (" + request.statusText + ")");
            }
        };
        // error – when the request couldn’t be made, e.g.network down or invalid URL.
        httpRequest.onerror = function (event) {
            /** @type {?} */
            var request = (/** @type {?} */ (event.target));
            throw new Error("Could not fetch SVG from url: " + url + "; error status code: " + request.status + " (" + request.statusText + ")");
        };
        httpRequest.send();
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @private
     * @param {?} iconName
     * @param {?} value
     * @param {?=} fontSet
     * @return {?}
     */
    IgxIconService.prototype.cacheSvgIcon = /**
     * @hidden
     * @private
     * @param {?} iconName
     * @param {?} value
     * @param {?=} fontSet
     * @return {?}
     */
    function (iconName, value, fontSet) {
        if (fontSet === void 0) { fontSet = ''; }
        if (iconName && value) {
            this.ensureSvgContainerCreated();
            /** @type {?} */
            var div = this._document.createElement('DIV');
            div.innerHTML = value;
            /** @type {?} */
            var svg = (/** @type {?} */ (div.querySelector('svg')));
            if (svg) {
                /** @type {?} */
                var iconKey = this.getSvgIconKey(iconName, fontSet);
                svg.setAttribute('id', iconKey);
                svg.setAttribute('fit', '');
                svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
                svg.setAttribute('focusable', 'false'); // Disable IE11 default behavior to make SVGs focusable.
                if (this._cachedSvgIcons.has(iconKey)) {
                    /** @type {?} */
                    var oldChild = this._svgContainer.querySelector("svg[id='" + iconKey + "']");
                    this._svgContainer.removeChild(oldChild);
                }
                this._svgContainer.appendChild(svg);
                this._cachedSvgIcons.add(iconKey);
            }
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @private
     * @return {?}
     */
    IgxIconService.prototype.ensureSvgContainerCreated = /**
     * @hidden
     * @private
     * @return {?}
     */
    function () {
        if (!this._svgContainer) {
            this._svgContainer = this._document.documentElement.querySelector('.igx-svg-container');
            if (!this._svgContainer) {
                this._svgContainer = this._document.createElement('DIV');
                this._svgContainer.classList.add('igx-svg-container');
                this._document.documentElement.appendChild(this._svgContainer);
            }
        }
    };
    IgxIconService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    IgxIconService.ctorParameters = function () { return [
        { type: DomSanitizer },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    /** @nocollapse */ IgxIconService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function IgxIconService_Factory() { return new IgxIconService(i0.ɵɵinject(i1.DomSanitizer), i0.ɵɵinject(i2.DOCUMENT)); }, token: IgxIconService, providedIn: "root" });
    return IgxIconService;
}());
export { IgxIconService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    IgxIconService.prototype._fontSet;
    /**
     * @type {?}
     * @private
     */
    IgxIconService.prototype._fontSetAliases;
    /**
     * @type {?}
     * @private
     */
    IgxIconService.prototype._svgContainer;
    /**
     * @type {?}
     * @private
     */
    IgxIconService.prototype._cachedSvgIcons;
    /**
     * @type {?}
     * @private
     */
    IgxIconService.prototype._sanitizer;
    /**
     * @type {?}
     * @private
     */
    IgxIconService.prototype._document;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaWduaXRldWktYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9pY29uL2ljb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxlQUFlLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlM0M7SUFVSSx3QkFBb0IsVUFBd0IsRUFBNEIsU0FBYztRQUFsRSxlQUFVLEdBQVYsVUFBVSxDQUFjO1FBQTRCLGNBQVMsR0FBVCxTQUFTLENBQUs7UUFMOUUsYUFBUSxHQUFHLGdCQUFnQixDQUFDO1FBQzVCLG9CQUFlLEdBQUcsSUFBSSxHQUFHLEVBQWtCLENBQUM7UUFFNUMsb0JBQWUsR0FBZ0IsSUFBSSxHQUFHLEVBQVUsQ0FBQztJQUVpQyxDQUFDO0lBUTNGLHNCQUFJLDBDQUFjO1FBTmxCOzs7OztXQUtHOzs7Ozs7OztRQUNIO1lBQ0ksT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3pCLENBQUM7UUFFRDs7Ozs7V0FLRzs7Ozs7Ozs7O1FBQ0gsVUFBbUIsU0FBaUI7WUFDaEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUM7UUFDOUIsQ0FBQzs7O09BVkE7SUFZRDs7Ozs7T0FLRzs7Ozs7Ozs7Ozs7O0lBQ0ksNkNBQW9COzs7Ozs7Ozs7OztJQUEzQixVQUE0QixLQUFhLEVBQUUsU0FBeUI7UUFBekIsMEJBQUEsRUFBQSxpQkFBeUI7UUFDaEUsbUJBQUEsSUFBSSxFQUFBLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDM0MsT0FBTyxtQkFBQSxJQUFJLEVBQUEsQ0FBQztJQUNoQixDQUFDO0lB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Ozt5QkEzQmxFO0NBeU1DLEFBeExELElBd0xDO1NBcExZLGNBQWM7Ozs7OztJQUN2QixrQ0FBb0M7Ozs7O0lBQ3BDLHlDQUFvRDs7Ozs7SUFDcEQsdUNBQW1DOzs7OztJQUNuQyx5Q0FBeUQ7Ozs7O0lBRTdDLG9DQUFnQzs7Ozs7SUFBRSxtQ0FBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBTZWN1cml0eUNvbnRleHQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbi8qKlxuICogKipJZ25pdGUgVUkgZm9yIEFuZ3VsYXIgSWNvbiBTZXJ2aWNlKiogLVxuICpcbiAqIFRoZSBJZ25pdGUgVUkgSWNvbiBTZXJ2aWNlIG1ha2VzIGl0IGVhc3kgZm9yIGRldmVsb3BlcnMgdG8gaW5jbHVkZSBjdXN0b20gU1ZHIGltYWdlcyBhbmQgdXNlIHRoZW0gd2l0aCBJZ3hJY29uQ29tcG9uZW50LlxuICogSW4gYWRkaXRpb24gaXQgY291bGQgYmUgdXNlZCB0byBhc3NvY2lhdGUgYSBjdXN0b20gY2xhc3MgdG8gYmUgYXBwbGllZCBvbiBJZ3hJY29uQ29tcG9uZW50IGFjY29yZGluZyB0byBnaXZlbiBmb250U2V0LlxuICpcbiAqIEV4YW1wbGU6XG4gKiBgYGB0eXBlc2NyaXB0XG4gKiB0aGlzLmljb25TZXJ2aWNlLnJlZ2lzdGVyRm9udFNldEFsaWFzKCdtYXRlcmlhbCcsICdtYXRlcmlhbC1pY29ucycpO1xuICogdGhpcy5pY29uU2VydmljZS5hZGRTdmdJY29uKCdhcnViYScsICcvYXNzZXRzL3N2Zy9jb3VudHJ5X2ZsYWdzL2FydWJhLnN2ZycsICdzdmctZmxhZ3MnKTtcbiAqIGBgYFxuICovXG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBJZ3hJY29uU2VydmljZSB7XG4gICAgcHJpdmF0ZSBfZm9udFNldCA9ICdtYXRlcmlhbC1pY29ucyc7XG4gICAgcHJpdmF0ZSBfZm9udFNldEFsaWFzZXMgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nPigpO1xuICAgIHByaXZhdGUgX3N2Z0NvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBfY2FjaGVkU3ZnSWNvbnM6IFNldDxzdHJpbmc+ID0gbmV3IFNldDxzdHJpbmc+KCk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zYW5pdGl6ZXI6IERvbVNhbml0aXplciwgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBfZG9jdW1lbnQ6IGFueSkgeyB9XG5cbiAgICAvKipcbiAgICAgKiAgUmV0dXJucyB0aGUgZGVmYXVsdCBmb250IHNldC5cbiAgICAgKmBgYHR5cGVzY3JpcHRcbiAgICAgKiAgIGNvbnN0IGRlZmF1bHRGb250U2V0ID0gdGhpcy5pY29uU2VydmljZS5kZWZhdWx0Rm9udFNldDtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBnZXQgZGVmYXVsdEZvbnRTZXQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZvbnRTZXQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogIFNldHMgdGhlIGRlZmF1bHQgZm9udCBzZXQuXG4gICAgICpgYGB0eXBlc2NyaXB0XG4gICAgICogICB0aGlzLmljb25TZXJ2aWNlLmRlZmF1bHRGb250U2V0ID0gJ3N2Zy1mbGFncyc7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgc2V0IGRlZmF1bHRGb250U2V0KGNsYXNzTmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX2ZvbnRTZXQgPSBjbGFzc05hbWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogIFJlZ2lzdGVycyBhIGN1c3RvbSBjbGFzcyB0byBiZSBhcHBsaWVkIHRvIElneEljb25Db21wb25lbnQgZm9yIGEgZ2l2ZW4gZm9udFNldC5cbiAgICAgKmBgYHR5cGVzY3JpcHRcbiAgICAgKiAgIHRoaXMuaWNvblNlcnZpY2UucmVnaXN0ZXJGb250U2V0QWxpYXMoJ21hdGVyaWFsJywgJ21hdGVyaWFsLWljb25zJyk7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgcHVibGljIHJlZ2lzdGVyRm9udFNldEFsaWFzKGFsaWFzOiBzdHJpbmcsIGNsYXNzTmFtZTogc3RyaW5nID0gYWxpYXMpOiB0aGlzIHtcbiAgICAgICAgdGhpcy5fZm9udFNldEFsaWFzZXMuc2V0KGFsaWFzLCBjbGFzc05hbWUpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiAgUmV0dXJucyB0aGUgY3VzdG9tIGNsYXNzLCBpZiBhbnksIGFzc29jaWF0ZWQgdG8gYSBnaXZlbiBmb250U2V0LlxuICAgICAqYGBgdHlwZXNjcmlwdFxuICAgICAqICAgY29uc3QgZm9udFNldENsYXNzID0gdGhpcy5pY29uU2VydmljZS5mb250U2V0Q2xhc3NOYW1lKCdtYXRlcmlhbCcpO1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIHB1YmxpYyBmb250U2V0Q2xhc3NOYW1lKGFsaWFzOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fZm9udFNldEFsaWFzZXMuZ2V0KGFsaWFzKSB8fCBhbGlhcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiAgQWRkcyBhbiBTVkcgaW1hZ2UgdG8gdGhlIGNhY2hlLiBTVkcgc291cmNlIGlzIGFuIHVybC5cbiAgICAgKmBgYHR5cGVzY3JpcHRcbiAgICAgKiAgIHRoaXMuaWNvblNlcnZpY2UuYWRkU3ZnSWNvbignYXJ1YmEnLCAnL2Fzc2V0cy9zdmcvY291bnRyeV9mbGFncy9hcnViYS5zdmcnLCAnc3ZnLWZsYWdzJyk7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgcHVibGljIGFkZFN2Z0ljb24oaWNvbk5hbWU6IHN0cmluZywgdXJsOiBzdHJpbmcsIGZvbnRTZXQ6IHN0cmluZyA9ICcnKSB7XG4gICAgICAgIGlmIChpY29uTmFtZSAmJiB1cmwpIHtcbiAgICAgICAgICAgIGNvbnN0IHNhZmVVcmwgPSB0aGlzLl9zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFJlc291cmNlVXJsKHVybCk7XG4gICAgICAgICAgICBpZiAoIXNhZmVVcmwpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBwcm92aWRlZCBVUkwgY291bGQgbm90IGJlIHByb2Nlc3NlZCBhcyB0cnVzdGVkIHJlc291cmNlIFVSTCBieSBBbmd1bGFyJ3MgRG9tU2FuaXRpemVyOiBcIiR7dXJsfVwiLmApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBzYW5pdGl6ZWRVcmwgPSB0aGlzLl9zYW5pdGl6ZXIuc2FuaXRpemUoU2VjdXJpdHlDb250ZXh0LlJFU09VUkNFX1VSTCwgc2FmZVVybCk7XG4gICAgICAgICAgICBpZiAoIXNhbml0aXplZFVybCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIFVSTCBwcm92aWRlZCB3YXMgbm90IHRydXN0ZWQgYXMgYSByZXNvdXJjZSBVUkw6IFwiJHt1cmx9XCIuYCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuZmV0Y2hTdmcoaWNvbk5hbWUsIHVybCwgZm9udFNldCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBzaG91bGQgcHJvdmlkZSBhdCBsZWFzdCBgaWNvbk5hbWVgIGFuZCBgdXJsYCB0byByZWdpc3RlciBhbiBzdmcgaWNvbi4nKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqICBBZGRzIGFuIFNWRyBpbWFnZSB0byB0aGUgY2FjaGUuIFNWRyBzb3VyY2UgaXMgaXRzIHRleHQuXG4gICAgICpgYGB0eXBlc2NyaXB0XG4gICAgICogICB0aGlzLmljb25TZXJ2aWNlLmFkZFN2Z0ljb24oJ3NpbXBsZScsICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDIwMCAyMDBcIj5cbiAgICAgKiAgIDxwYXRoIGQ9XCJNNzQgNzRoNTR2NTRINzRcIiAvPjwvc3ZnPicsICdzdmctZmxhZ3MnKTtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBwdWJsaWMgYWRkU3ZnSWNvbkZyb21UZXh0KGljb25OYW1lOiBzdHJpbmcsIGljb25UZXh0OiBzdHJpbmcsIGZvbnRTZXQ6IHN0cmluZyA9ICcnKSB7XG4gICAgICAgIGlmIChpY29uTmFtZSAmJiBpY29uVGV4dCkge1xuICAgICAgICAgICAgdGhpcy5jYWNoZVN2Z0ljb24oaWNvbk5hbWUsIGljb25UZXh0LCBmb250U2V0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignWW91IHNob3VsZCBwcm92aWRlIGF0IGxlYXN0IGBpY29uTmFtZWAgYW5kIGBpY29uVGV4dGAgdG8gcmVnaXN0ZXIgYW4gc3ZnIGljb24uJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiAgUmV0dXJucyB3aGV0aGVyIGEgZ2l2ZW4gU1ZHIGltYWdlIGlzIHByZXNlbnQgaW4gdGhlIGNhY2hlLlxuICAgICAqYGBgdHlwZXNjcmlwdFxuICAgICAqICAgY29uc3QgaXNTdmdDYWNoZWQgPSB0aGlzLmljb25TZXJ2aWNlLmlzU3ZnSWNvbkNhY2hlZCgnYXJ1YmEnLCAnc3ZnLWZsYWdzJyk7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgcHVibGljIGlzU3ZnSWNvbkNhY2hlZChpY29uTmFtZTogc3RyaW5nLCBmb250U2V0OiBzdHJpbmcgPSAnJyk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCBpY29uS2V5ID0gdGhpcy5nZXRTdmdJY29uS2V5KGljb25OYW1lLCBmb250U2V0KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhY2hlZFN2Z0ljb25zLmhhcyhpY29uS2V5KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiAgUmV0dXJucyB0aGUga2V5IG9mIGEgY2FjaGVkIFNWRyBpbWFnZS5cbiAgICAgKmBgYHR5cGVzY3JpcHRcbiAgICAgKiAgIGNvbnN0IHN2Z0ljb25LZXkgPSB0aGlzLmljb25TZXJ2aWNlLmdldFN2Z0ljb25LZXkoJ2FydWJhJywgJ3N2Zy1mbGFncycpO1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRTdmdJY29uS2V5KGljb25OYW1lOiBzdHJpbmcsIGZvbnRTZXQ6IHN0cmluZyA9ICcnKSB7XG4gICAgICAgIHJldHVybiBmb250U2V0ICsgJ18nICsgaWNvbk5hbWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHByaXZhdGUgZmV0Y2hTdmcoaWNvbk5hbWU6IHN0cmluZywgdXJsOiBzdHJpbmcsIGZvbnRTZXQ6IHN0cmluZyA9ICcnKSB7XG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcztcbiAgICAgICAgY29uc3QgaHR0cFJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgaHR0cFJlcXVlc3Qub3BlbignR0VUJywgdXJsLCB0cnVlKTtcbiAgICAgICAgaHR0cFJlcXVlc3QucmVzcG9uc2VUeXBlID0gJ3RleHQnO1xuXG4gICAgICAgIC8vIGxvYWQg4oCTIHdoZW4gdGhlIHJlc3VsdCBpcyByZWFkeSwgdGhhdCBpbmNsdWRlcyBIVFRQIGVycm9ycyBsaWtlIDQwNC5cbiAgICAgICAgaHR0cFJlcXVlc3Qub25sb2FkID0gZnVuY3Rpb24gKGV2ZW50OiBQcm9ncmVzc0V2ZW50KSB7XG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gZXZlbnQudGFyZ2V0IGFzIFhNTEh0dHBSZXF1ZXN0O1xuICAgICAgICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICBpbnN0YW5jZS5jYWNoZVN2Z0ljb24oaWNvbk5hbWUsIHJlcXVlc3QucmVzcG9uc2VUZXh0LCBmb250U2V0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDb3VsZCBub3QgZmV0Y2ggU1ZHIGZyb20gdXJsOiAke3VybH07IGVycm9yOiAke3JlcXVlc3Quc3RhdHVzfSAoJHtyZXF1ZXN0LnN0YXR1c1RleHR9KWApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIGVycm9yIOKAkyB3aGVuIHRoZSByZXF1ZXN0IGNvdWxkbuKAmXQgYmUgbWFkZSwgZS5nLm5ldHdvcmsgZG93biBvciBpbnZhbGlkIFVSTC5cbiAgICAgICAgaHR0cFJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uIChldmVudDogUHJvZ3Jlc3NFdmVudCkge1xuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGV2ZW50LnRhcmdldCBhcyBYTUxIdHRwUmVxdWVzdDtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQ291bGQgbm90IGZldGNoIFNWRyBmcm9tIHVybDogJHt1cmx9OyBlcnJvciBzdGF0dXMgY29kZTogJHtyZXF1ZXN0LnN0YXR1c30gKCR7cmVxdWVzdC5zdGF0dXNUZXh0fSlgKTtcbiAgICAgICAgfTtcblxuICAgICAgICBodHRwUmVxdWVzdC5zZW5kKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHByaXZhdGUgY2FjaGVTdmdJY29uKGljb25OYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIGZvbnRTZXQ6IHN0cmluZyA9ICcnKSB7XG4gICAgICAgIGlmIChpY29uTmFtZSAmJiB2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5lbnN1cmVTdmdDb250YWluZXJDcmVhdGVkKCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGRpdiA9IHRoaXMuX2RvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xuICAgICAgICAgICAgZGl2LmlubmVySFRNTCA9IHZhbHVlO1xuICAgICAgICAgICAgY29uc3Qgc3ZnID0gZGl2LnF1ZXJ5U2VsZWN0b3IoJ3N2ZycpIGFzIFNWR0VsZW1lbnQ7XG5cbiAgICAgICAgICAgIGlmIChzdmcpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpY29uS2V5ID0gdGhpcy5nZXRTdmdJY29uS2V5KGljb25OYW1lLCBmb250U2V0KTtcblxuICAgICAgICAgICAgICAgIHN2Zy5zZXRBdHRyaWJ1dGUoJ2lkJywgaWNvbktleSk7XG4gICAgICAgICAgICAgICAgc3ZnLnNldEF0dHJpYnV0ZSgnZml0JywgJycpO1xuICAgICAgICAgICAgICAgIHN2Zy5zZXRBdHRyaWJ1dGUoJ3ByZXNlcnZlQXNwZWN0UmF0aW8nLCAneE1pZFlNaWQgbWVldCcpO1xuICAgICAgICAgICAgICAgIHN2Zy5zZXRBdHRyaWJ1dGUoJ2ZvY3VzYWJsZScsICdmYWxzZScpOyAvLyBEaXNhYmxlIElFMTEgZGVmYXVsdCBiZWhhdmlvciB0byBtYWtlIFNWR3MgZm9jdXNhYmxlLlxuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2NhY2hlZFN2Z0ljb25zLmhhcyhpY29uS2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBvbGRDaGlsZCA9IHRoaXMuX3N2Z0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKGBzdmdbaWQ9JyR7aWNvbktleX0nXWApO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zdmdDb250YWluZXIucmVtb3ZlQ2hpbGQob2xkQ2hpbGQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuX3N2Z0NvbnRhaW5lci5hcHBlbmRDaGlsZChzdmcpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2NhY2hlZFN2Z0ljb25zLmFkZChpY29uS2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwcml2YXRlIGVuc3VyZVN2Z0NvbnRhaW5lckNyZWF0ZWQoKSB7XG4gICAgICAgIGlmICghdGhpcy5fc3ZnQ29udGFpbmVyKSB7XG4gICAgICAgICAgICB0aGlzLl9zdmdDb250YWluZXIgPSB0aGlzLl9kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmlneC1zdmctY29udGFpbmVyJyk7XG4gICAgICAgICAgICBpZiAoIXRoaXMuX3N2Z0NvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgIHRoaXMuX3N2Z0NvbnRhaW5lciA9IHRoaXMuX2RvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3N2Z0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpZ3gtc3ZnLWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2RvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLl9zdmdDb250YWluZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIl19