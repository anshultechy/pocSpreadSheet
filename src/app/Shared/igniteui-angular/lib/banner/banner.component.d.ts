import { EventEmitter, ElementRef } from '@angular/core';
import { AnimationSettings } from '../expansion-panel/expansion-panel.component';
import { IgxIconComponent } from '../icon/index';
import { IToggleView } from '../core/navigation';
import { CancelableEventArgs } from '../core/utils';
export interface BannerEventArgs {
    banner: IgxBannerComponent;
    event?: Event;
}
export interface BannerCancelEventArgs extends BannerEventArgs, CancelableEventArgs {
}
/**
 * **Ignite UI for Angular Banner** -
 * [Documentation](https://www.infragistics.com/products/ignite-ui-angular/angular/components/banner.html)
 *
 * The Ignite UI Banner provides a highly templateable and easy to use banner that can be shown in your application.
 *
 * Usage:
 *
 * ```html
 * <igx-banner #banner>
 *   Our privacy settings have changed.
 *  <igx-banner-actions>
 *      <button igxButton="raised">Read More</button>
 *      <button igxButton="raised">Accept and Continue</button>
 *  </igx-banner-actions>
 * </igx-banner>
 * ```
 */
export declare class IgxBannerComponent implements IToggleView {
    elementRef: ElementRef;
    private _bannerEvent;
    private _animationSettings;
    private _expansionPanel;
    private _bannerActionTemplate;
    /**
     * @hidden
     */
    bannerIcon: IgxIconComponent;
    /**
     * Fires after the banner shows up
     * ```typescript
     * public handleOpened(event) {
     *  ...
     * }
     * ```
     * ```html
     * <igx-banner (onOpened)="handleOpened($event)"></igx-banner>
     * ```
     */
    onOpened: EventEmitter<BannerEventArgs>;
    /**
     * Fires before the banner shows up
     * ```typescript
     * public handleOpening(event) {
     *  ...
     * }
     * ```
     * ```html
     * <igx-banner (onOpening)="handleOpening($event)"></igx-banner>
     * ```
     */
    onOpening: EventEmitter<BannerCancelEventArgs>;
    /**
     * Fires after the banner hides
     * ```typescript
     * public handleClosed(event) {
     *  ...
     * }
     * ```
     * ```html
     * <igx-banner (onClosed)="handleClosed($event)"></igx-banner>
     * ```
     */
    onClosed: EventEmitter<BannerEventArgs>;
    /**
     * Fires before the banner hides
     * ```typescript
     * public handleClosing(event) {
     *  ...
     * }
     * ```
     * ```html
     * <igx-banner (onClosing)="handleClosing($event)"></igx-banner>
     * ```
     */
    onClosing: EventEmitter<BannerCancelEventArgs>;
    /** @hidden */
    readonly useDefaultTemplate: boolean;
    /**
     * Get the animation settings used by the banner open/close methods
     * ```typescript
     * let currentAnimations: AnimationSettings = banner.animationSettings
     * ```
     */
    /**
    * Set the animation settings used by the banner open/close methods
    * ```typescript
    * import { slideInLeft, slideOutRight } from 'igniteui-angular';
    * ...
    * banner.animationSettings: AnimationSettings = { openAnimation: slideInLeft, closeAnimation: slideOutRight };
    * ```
    */
    animationSettings: AnimationSettings;
    /**
     * Gets whether banner is collapsed
     *
     * ```typescript
     * const isCollapsed: boolean = banner.collapsed;
     * ```
     */
    readonly collapsed: boolean;
    /**
     * Returns the native element of the banner component
     * ```typescript
     *  const myBannerElement: HTMLElement = banner.element;
     * ```
     */
    readonly element: any;
    /**
     * @hidden
     */
    readonly displayStyle: string;
    constructor(elementRef: ElementRef);
    /**
     * Opens the banner
     *
     * ```typescript
     *  myBanner.open();
     * ```
     *
     * ```html
     * <igx-banner #banner>
     * ...
     * </igx-banner>
     * <button (click)="banner.open()">Open Banner</button>
     * ```
     */
    open(event?: Event): void;
    /**
     * Closes the banner
     *
     * ```typescript
     *  myBanner.close();
     * ```
     *
     * ```html
     * <igx-banner #banner>
     * ...
     * </igx-banner>
     * <button (click)="banner.close()">Close Banner</button>
     * ```
     */
    close(event?: Event): void;
    /**
     * Toggles the banner
     *
     * ```typescript
     *  myBanner.toggle();
     * ```
     *
     * ```html
     * <igx-banner #banner>
     * ...
     * </igx-banner>
     * <button (click)="banner.toggle()">Toggle Banner</button>
     * ```
     */
    toggle(event?: Event): void;
    /** @hidden */
    onExpansionPanelOpen(): void;
    /** @hidden */
    onExpansionPanelClose(): void;
}
/**
 * @hidden
 */
export declare class IgxBannerModule {
}
