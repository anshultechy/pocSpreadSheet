import { IPositionStrategy } from './position/IPositionStrategy';
import { IScrollStrategy } from './scroll';
import { AnimationReferenceMetadata, AnimationPlayer } from '@angular/animations';
import { ComponentRef, ElementRef, NgZone } from '@angular/core';
import { IgxOverlayOutletDirective } from '../../directives/toggle/toggle.directive';
import { CancelableEventArgs, CancelableBrowserEventArgs } from '../../core/utils';
export declare enum HorizontalAlignment {
    Left = -1,
    Center = -0.5,
    Right = 0
}
export declare enum VerticalAlignment {
    Top = -1,
    Middle = -0.5,
    Bottom = 0
}
export declare class Point {
    x: number;
    y: number;
    constructor(x: number, y: number);
}
export interface PositionSettings {
    /** Attaching target for the component to show */
    target?: Point | HTMLElement;
    /** Direction in which the component should show */
    horizontalDirection?: HorizontalAlignment;
    /** Direction in which the component should show */
    verticalDirection?: VerticalAlignment;
    /** Target's starting point */
    horizontalStartPoint?: HorizontalAlignment;
    /** Target's starting point */
    verticalStartPoint?: VerticalAlignment;
    /** Animation applied while overlay opens */
    openAnimation?: AnimationReferenceMetadata;
    /** Animation applied while overlay closes */
    closeAnimation?: AnimationReferenceMetadata;
    /** The size up to which element may shrink when shown in elastic position strategy */
    minSize?: Size;
}
export interface OverlaySettings {
    /** Position strategy to use with this settings */
    positionStrategy?: IPositionStrategy;
    /** Scroll strategy to use with this settings */
    scrollStrategy?: IScrollStrategy;
    /** Set if the overlay should be in modal mode */
    modal?: boolean;
    /** Set if the overlay should closed on outside click */
    closeOnOutsideClick?: boolean;
    /** Set the outlet container to attach the overlay to */
    outlet?: IgxOverlayOutletDirective | ElementRef;
    /**
     * @hidden @internal
     * Exclude the position strategy target for outside clicks
     */
    excludePositionTarget?: boolean;
}
export interface OverlayEventArgs {
    /** Id of the overlay generated with `attach()` method */
    id: string;
    /** Available when `Type<T>` is provided to the `attach()` method and allows access to the created Component instance */
    componentRef?: ComponentRef<{}>;
}
export interface OverlayCancelableEventArgs extends OverlayEventArgs, CancelableEventArgs {
}
export interface OverlayClosingEventArgs extends OverlayEventArgs, CancelableBrowserEventArgs {
}
export interface OverlayAnimationEventArgs {
    /** Id of the overlay generated with `attach()` method */
    id: string;
    /** Animation player that will play the animation */
    animationPlayer: AnimationPlayer;
    /** Type of animation to be played. It should be either 'open' or 'close' */
    animationType: 'open' | 'close';
}
export interface Size {
    /** Gets or sets the horizontal component of Size */
    width: number;
    /** Gets or sets the vertical component of Size */
    height: number;
}
/** @hidden */
export interface OverlayInfo {
    id?: string;
    elementRef?: ElementRef;
    componentRef?: ComponentRef<{}>;
    settings?: OverlaySettings;
    initialSize?: Size;
    hook?: HTMLElement;
    openAnimationPlayer?: AnimationPlayer;
    closeAnimationPlayer?: AnimationPlayer;
    openAnimationInnerPlayer?: any;
    closeAnimationInnerPlayer?: any;
    ngZone: NgZone;
}
/** @hidden */
export declare class Util {
    /**
     * @hidden
     * Calculates the rectangle of target for provided overlay settings. Defaults to 0,0,0,0,0,0 rectangle
     * if no target is provided
     * @param settings Overlay settings for which to calculate target rectangle
     */
    static getTargetRect(settings: PositionSettings): ClientRect;
    /** @hidden @internal */
    static getViewportRect(document: Document): ClientRect;
    /** @hidden @internal */
    static getViewportScrollPosition(document: Document): Point;
    /** @hidden @internal*/
    static cloneInstance(object: any): any;
}
