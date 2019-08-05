import { OverlaySettings, OverlayEventArgs, OverlayInfo, OverlayAnimationEventArgs, OverlayCancelableEventArgs, OverlayClosingEventArgs } from './utilities';
import { ApplicationRef, ComponentFactoryResolver, ElementRef, EventEmitter, Injector, Type, OnDestroy, NgModuleRef, NgZone } from '@angular/core';
import { AnimationBuilder } from '@angular/animations';
/**
 * [Documentation](https://www.infragistics.com/products/ignite-ui-angular/angular/components/overlay_main.html)
 * The overlay service allows users to show components on overlay div above all other elements in the page.
 */
export declare class IgxOverlayService implements OnDestroy {
    private _factoryResolver;
    private _appRef;
    private _injector;
    private builder;
    private document;
    private _zone;
    private _componentId;
    private _overlayInfos;
    private _overlayElement;
    private _document;
    private destroy$;
    private _defaultSettings;
    /**
     * Emitted before the component is opened.
     * ```typescript
     * onOpening(event: OverlayCancelableEventArgs){
     *     const onOpening = event;
     * }
     * ```
     */
    onOpening: EventEmitter<OverlayCancelableEventArgs>;
    /**
     * Emitted after the component is opened and all animations are finished.
     * ```typescript
     * onOpened(event: OverlayEventArgs){
     *     const onOpened = event;
     * }
     * ```
     */
    onOpened: EventEmitter<OverlayEventArgs>;
    /**
     * Emitted before the component is closed.
     * ```typescript
     * onClosing(event: OverlayCancelableEventArgs){
     *     const onClosing = event;
     * }
     * ```
     */
    onClosing: EventEmitter<OverlayClosingEventArgs>;
    /**
     * Emitted after the component is closed and all animations are finished.
     * ```typescript
     * onClosed(event: OverlayEventArgs){
     *     const onClosed = event;
     * }
     * ```
     */
    onClosed: EventEmitter<OverlayEventArgs>;
    /**
     * Emitted before animation is started
     * ```typescript
     * onAnimation(event: OverlayAnimationEventArgs){
     *     const onAnimation = event;
     * }
     * ```
     */
    onAnimation: EventEmitter<OverlayAnimationEventArgs>;
    constructor(_factoryResolver: ComponentFactoryResolver, _appRef: ApplicationRef, _injector: Injector, builder: AnimationBuilder, document: any, _zone: NgZone);
    /**
     * Generates Id. Provide this Id when call `show(id, settings?)` method
     * @param component ElementRef to show in overlay
     * @param settings Display settings for the overlay, such as positioning and scroll/close behavior.
     * @returns Id of the created overlay. Valid until `onClosed` is emitted.
     */
    attach(element: ElementRef, settings?: OverlaySettings): string;
    /**
     * Generates Id. Provide this Id when call `show(id, settings?)` method
     * @param component Component Type to show in overlay
     * @param settings Display settings for the overlay, such as positioning and scroll/close behavior.
     * @param moduleRef Optional reference to the NgModule that can resolve the component's factory
     * @returns Id of the created overlay. Valid until `onClosed` is emitted.
     */
    attach(component: Type<any>, settings?: OverlaySettings, moduleRef?: NgModuleRef<any>): string;
    /**
     * Shows the overlay for provided id.
     * @param id Id to show overlay for
     * @param settings Display settings for the overlay, such as positioning and scroll/close behavior.
     */
    show(id: string, settings?: OverlaySettings): string;
    /**
     * Shows the provided component.
     * @param component ElementRef or Component Type to show in overlay
     * @param settings Display settings for the overlay, such as positioning and scroll/close behavior.
     * @returns Id of the created overlay. Valid until `onClosed` is emitted.
     * ```typescript
     * this.overlay.show(element, settings);
     * ```
     * @deprecated Use `attach(component)` to obtain an Id. Then `show(id, settings?)` with provided Id.
     */
    show(component: ElementRef | Type<any>, settings?: OverlaySettings): string;
    /**
     * Hides the component with the ID provided as a parameter.
     * ```typescript
     * this.overlay.hide(id);
     * ```
     */
    hide(id: string): void;
    /**
     * Hides all the components and the overlay.
     * ```typescript
     * this.overlay.hideAll();
     * ```
     */
    hideAll(): void;
    /**
     * Repositions the component with ID provided as a parameter.
     * ```typescript
     * this.overlay.reposition(id);
     * ```
     */
    reposition(id: string): void;
    private _show;
    private _hide;
    private getOverlayInfo;
    private placeElementHook;
    private moveElementToOverlay;
    private getWrapperElement;
    private getContentElement;
    private getOverlayElement;
    private updateSize;
    private setupModalWrapper;
    private onCloseDone;
    private cleanUp;
    private playOpenAnimation;
    private playCloseAnimation;
    private applyAnimationParams;
    /** @hidden @internal */
    getOverlayById(id: string): OverlayInfo;
    private documentClicked;
    private addOutsideClickListener;
    private removeOutsideClickListener;
    private addResizeHandler;
    private removeResizeHandler;
    /** @hidden */
    repositionAll: () => void;
    /**
     *@hidden
     */
    ngOnDestroy(): void;
}
