import { EmbeddedViewRef, OnChanges, ChangeDetectorRef, SimpleChanges, TemplateRef, ViewContainerRef, NgZone, EventEmitter } from '@angular/core';
/**
 * @hidden
 */
export declare class IgxTemplateOutletDirective implements OnChanges {
    _viewContainerRef: ViewContainerRef;
    private _zone;
    cdr: ChangeDetectorRef;
    private _viewRef;
    /**
    * The embedded views cache. Collection is key-value paired.
    * Key is the template id, value is the embedded view for the related template.
    */
    private _embeddedViewsMap;
    igxTemplateOutletContext: Object;
    igxTemplateOutlet: TemplateRef<any>;
    onViewCreated: EventEmitter<IViewChangeEventArgs>;
    onViewMoved: EventEmitter<IViewChangeEventArgs>;
    onCachedViewLoaded: EventEmitter<ICachedViewLoadedEventArgs>;
    constructor(_viewContainerRef: ViewContainerRef, _zone: NgZone, cdr: ChangeDetectorRef);
    ngOnChanges(changes: SimpleChanges): void;
    cleanCache(): void;
    cleanView(tmplID: any): void;
    private _recreateView;
    private _moveView;
    private _useCachedView;
    private _shouldRecreateView;
    private _hasContextShapeChanged;
    private _updateExistingContext;
    private _cloneContext;
    private _getActionType;
}
export interface IViewChangeEventArgs {
    owner: IgxTemplateOutletDirective;
    view: EmbeddedViewRef<any>;
    context: any;
}
export interface ICachedViewLoadedEventArgs extends IViewChangeEventArgs {
    oldContext: any;
}
/**
 * @hidden
 */
export declare class IgxTemplateOutletModule {
}
