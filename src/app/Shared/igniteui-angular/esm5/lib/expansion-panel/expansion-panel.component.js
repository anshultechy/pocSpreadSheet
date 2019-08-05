/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectorRef, EventEmitter, HostBinding, Input, Output, ContentChild, forwardRef } from '@angular/core';
import { AnimationBuilder, useAnimation } from '@angular/animations';
import { growVerOut, growVerIn } from '../animations/main';
import { IgxExpansionPanelBodyComponent } from './expansion-panel-body.component';
import { IgxExpansionPanelHeaderComponent } from './expansion-panel-header.component';
import { IGX_EXPANSION_PANEL_COMPONENT } from './expansion-panel.common';
/** @type {?} */
var NEXT_ID = 0;
/**
 * @record
 */
export function AnimationSettings() { }
if (false) {
    /** @type {?} */
    AnimationSettings.prototype.openAnimation;
    /** @type {?} */
    AnimationSettings.prototype.closeAnimation;
}
var IgxExpansionPanelComponent = /** @class */ (function () {
    function IgxExpansionPanelComponent(cdr, builder) {
        this.cdr = cdr;
        this.builder = builder;
        /**
         * Sets/gets the animation settings of the expansion panel component
         * Open and Close animation should be passed
         *
         * Get
         * ```typescript
         *  const currentAnimations = this.panel.animationSettings;
         * ```
         * Set
         * ```typescript
         *  import { slideInLeft, slideOutRight } from 'igniteui-angular';
         *  ...
         *  this.panel.animationsSettings = {
         *      openAnimation: slideInLeft,
         *      closeAnimation: slideOutRight
         * };
         * ```
         * or via template
         * ```typescript
         *  import { slideInLeft, slideOutRight } from 'igniteui-angular';
         *  ...
         *  myCustomAnimationObject = {
         *      openAnimation: slideInLeft,
         *      closeAnimation: slideOutRight
         * };
         * ```html
         *  <igx-expansion-panel [animationSettings]='myCustomAnimationObject'>
         *  ...
         *  </igx-expansion-panel>
         * ```
         */
        this.animationSettings = {
            openAnimation: growVerIn,
            closeAnimation: growVerOut
        };
        /**
         * Sets/gets the `id` of the expansion panel component.
         * If not set, `id` will have value `"igx-expansion-panel-0"`;
         * ```html
         * <igx-expansion-panel id = "my-first-expansion-panel"></igx-expansion-panel>
         * ```
         * ```typescript
         * let panelId =  this.panel.id;
         * ```
         * \@memberof IgxExpansionPanelComponent
         */
        this.id = "igx-expansion-panel-" + NEXT_ID++;
        /**
         * @hidden
         */
        this.cssClass = 'igx-expansion-panel';
        /**
         * Gets/sets whether the component is collapsed (its content is hidden)
         * Get
         * ```typescript
         *  const myPanelState: boolean = this.panel.collapsed;
         * ```
         * Set
         * ```html
         *  this.panel.collapsed = true;
         * ```
         */
        this.collapsed = true;
        /**
         * Emitted when the expansion panel finishes collapsing
         * ```typescript
         *  handleCollapsed(event: {
         *  panel: IgxExpansionPanelComponent,
         *  event: Event
         * })
         * ```
         * ```html
         *  <igx-expansion-panel (onCollapsed)="handleCollapsed($event)">
         *      ...
         *  </igx-expansion-panel>
         * ```
         */
        this.onCollapsed = new EventEmitter();
        /**
         * Emitted when the expansion panel finishes expanding
         * ```typescript
         *  handleExpanded(event: {
         *  panel: IgxExpansionPanelComponent,
         *  event: Event
         * })
         * ```
         * ```html
         *  <igx-expansion-panel (onExpanded)="handleExpanded($event)">
         *      ...
         *  </igx-expansion-panel>
         * ```
         */
        this.onExpanded = new EventEmitter();
    }
    Object.defineProperty(IgxExpansionPanelComponent.prototype, "headerId", {
        /**
         * @hidden
         */
        get: /**
         * @hidden
         * @return {?}
         */
        function () {
            return this.header ? this.id + "-header" : '';
        },
        enumerable: true,
        configurable: true
    });
    /** @hidden */
    /**
     * @hidden
     * @return {?}
     */
    IgxExpansionPanelComponent.prototype.ngAfterContentInit = /**
     * @hidden
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.body && this.header) {
            // schedule at end of turn:
            Promise.resolve().then(function () {
                _this.body.labelledBy = _this.body.labelledBy || _this.headerId;
                _this.body.label = _this.body.label || _this.id + '-region';
            });
        }
    };
    /**
     * @private
     * @param {?} cb
     * @return {?}
     */
    IgxExpansionPanelComponent.prototype.playOpenAnimation = /**
     * @private
     * @param {?} cb
     * @return {?}
     */
    function (cb) {
        if (!this.body) { // if not body element is passed, there is nothing to animate
            return;
        }
        /** @type {?} */
        var animation = useAnimation(this.animationSettings.openAnimation);
        /** @type {?} */
        var animationBuilder = this.builder.build(animation);
        /** @type {?} */
        var openAnimationPlayer = animationBuilder.create(this.body.element.nativeElement);
        openAnimationPlayer.onDone(function () {
            cb();
            openAnimationPlayer.reset();
        });
        openAnimationPlayer.play();
    };
    /**
     * @private
     * @param {?} cb
     * @return {?}
     */
    IgxExpansionPanelComponent.prototype.playCloseAnimation = /**
     * @private
     * @param {?} cb
     * @return {?}
     */
    function (cb) {
        if (!this.body) { // if not body element is passed, there is nothing to animate
            return;
        }
        /** @type {?} */
        var animation = useAnimation(this.animationSettings.closeAnimation);
        /** @type {?} */
        var animationBuilder = this.builder.build(animation);
        /** @type {?} */
        var closeAnimationPlayer = animationBuilder.create(this.body.element.nativeElement);
        closeAnimationPlayer.onDone(function () {
            cb();
            closeAnimationPlayer.reset();
        });
        closeAnimationPlayer.play();
    };
    /**
     * Collapses the panel
     *
     * ```html
     *  <igx-expansion-panel #myPanel>
     *      ...
     *  </igx-expansion-panel>
     *  <button (click)="myPanel.collapse($event)">Collpase Panel</button>
     * ```
     */
    /**
     * Collapses the panel
     *
     * ```html
     *  <igx-expansion-panel #myPanel>
     *      ...
     *  </igx-expansion-panel>
     *  <button (click)="myPanel.collapse($event)">Collpase Panel</button>
     * ```
     * @param {?=} evt
     * @return {?}
     */
    IgxExpansionPanelComponent.prototype.collapse = /**
     * Collapses the panel
     *
     * ```html
     *  <igx-expansion-panel #myPanel>
     *      ...
     *  </igx-expansion-panel>
     *  <button (click)="myPanel.collapse($event)">Collpase Panel</button>
     * ```
     * @param {?=} evt
     * @return {?}
     */
    function (evt) {
        var _this = this;
        if (this.collapsed) { // If expansion panel is already collapsed, do nothing
            return;
        }
        this.playCloseAnimation(function () {
            _this.onCollapsed.emit({ event: evt, panel: _this });
            _this.collapsed = true;
        });
    };
    /**
     * Expands the panel
     *
     * ```html
     *  <igx-expansion-panel #myPanel>
     *      ...
     *  </igx-expansion-panel>
     *  <button (click)="myPanel.expand($event)">Expand Panel</button>
     * ```
     */
    /**
     * Expands the panel
     *
     * ```html
     *  <igx-expansion-panel #myPanel>
     *      ...
     *  </igx-expansion-panel>
     *  <button (click)="myPanel.expand($event)">Expand Panel</button>
     * ```
     * @param {?=} evt
     * @return {?}
     */
    IgxExpansionPanelComponent.prototype.expand = /**
     * Expands the panel
     *
     * ```html
     *  <igx-expansion-panel #myPanel>
     *      ...
     *  </igx-expansion-panel>
     *  <button (click)="myPanel.expand($event)">Expand Panel</button>
     * ```
     * @param {?=} evt
     * @return {?}
     */
    function (evt) {
        var _this = this;
        if (!this.collapsed) { // If the panel is already opened, do nothing
            return;
        }
        this.collapsed = false;
        this.cdr.detectChanges();
        this.playOpenAnimation(function () {
            _this.onExpanded.emit({ event: evt, panel: _this });
        });
    };
    /**
     * Toggles the panel
     *
     * ```html
     *  <igx-expansion-panel #myPanel>
     *      ...
     *  </igx-expansion-panel>
     *  <button (click)="myPanel.toggle($event)">Expand Panel</button>
     * ```
     */
    /**
     * Toggles the panel
     *
     * ```html
     *  <igx-expansion-panel #myPanel>
     *      ...
     *  </igx-expansion-panel>
     *  <button (click)="myPanel.toggle($event)">Expand Panel</button>
     * ```
     * @param {?=} evt
     * @return {?}
     */
    IgxExpansionPanelComponent.prototype.toggle = /**
     * Toggles the panel
     *
     * ```html
     *  <igx-expansion-panel #myPanel>
     *      ...
     *  </igx-expansion-panel>
     *  <button (click)="myPanel.toggle($event)">Expand Panel</button>
     * ```
     * @param {?=} evt
     * @return {?}
     */
    function (evt) {
        if (this.collapsed) {
            this.open(evt);
        }
        else {
            this.close(evt);
        }
    };
    /**
     * @param {?=} evt
     * @return {?}
     */
    IgxExpansionPanelComponent.prototype.open = /**
     * @param {?=} evt
     * @return {?}
     */
    function (evt) {
        this.expand(evt);
    };
    /**
     * @param {?=} evt
     * @return {?}
     */
    IgxExpansionPanelComponent.prototype.close = /**
     * @param {?=} evt
     * @return {?}
     */
    function (evt) {
        this.collapse(evt);
    };
    IgxExpansionPanelComponent.decorators = [
        { type: Component, args: [{
                    selector: 'igx-expansion-panel',
                    template: "<ng-content select=\"igx-expansion-panel-header\"></ng-content>\n<ng-content *ngIf=\"!collapsed\" select=\"igx-expansion-panel-body\"></ng-content>\n",
                    providers: [{ provide: IGX_EXPANSION_PANEL_COMPONENT, useExisting: IgxExpansionPanelComponent }]
                }] }
    ];
    /** @nocollapse */
    IgxExpansionPanelComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: AnimationBuilder }
    ]; };
    IgxExpansionPanelComponent.propDecorators = {
        animationSettings: [{ type: Input }],
        id: [{ type: HostBinding, args: ['attr.id',] }, { type: Input }],
        cssClass: [{ type: HostBinding, args: ['class.igx-expansion-panel',] }],
        collapsed: [{ type: Input }],
        onCollapsed: [{ type: Output }],
        onExpanded: [{ type: Output }],
        body: [{ type: ContentChild, args: [forwardRef(function () { return IgxExpansionPanelBodyComponent; }),
                    { read: forwardRef(function () { return IgxExpansionPanelBodyComponent; }), static: false },] }],
        header: [{ type: ContentChild, args: [forwardRef(function () { return IgxExpansionPanelHeaderComponent; }),
                    { read: forwardRef(function () { return IgxExpansionPanelHeaderComponent; }), static: false },] }]
    };
    return IgxExpansionPanelComponent;
}());
export { IgxExpansionPanelComponent };
if (false) {
    /**
     * Sets/gets the animation settings of the expansion panel component
     * Open and Close animation should be passed
     *
     * Get
     * ```typescript
     *  const currentAnimations = this.panel.animationSettings;
     * ```
     * Set
     * ```typescript
     *  import { slideInLeft, slideOutRight } from 'igniteui-angular';
     *  ...
     *  this.panel.animationsSettings = {
     *      openAnimation: slideInLeft,
     *      closeAnimation: slideOutRight
     * };
     * ```
     * or via template
     * ```typescript
     *  import { slideInLeft, slideOutRight } from 'igniteui-angular';
     *  ...
     *  myCustomAnimationObject = {
     *      openAnimation: slideInLeft,
     *      closeAnimation: slideOutRight
     * };
     * ```html
     *  <igx-expansion-panel [animationSettings]='myCustomAnimationObject'>
     *  ...
     *  </igx-expansion-panel>
     * ```
     * @type {?}
     */
    IgxExpansionPanelComponent.prototype.animationSettings;
    /**
     * Sets/gets the `id` of the expansion panel component.
     * If not set, `id` will have value `"igx-expansion-panel-0"`;
     * ```html
     * <igx-expansion-panel id = "my-first-expansion-panel"></igx-expansion-panel>
     * ```
     * ```typescript
     * let panelId =  this.panel.id;
     * ```
     * \@memberof IgxExpansionPanelComponent
     * @type {?}
     */
    IgxExpansionPanelComponent.prototype.id;
    /**
     * @hidden
     * @type {?}
     */
    IgxExpansionPanelComponent.prototype.cssClass;
    /**
     * Gets/sets whether the component is collapsed (its content is hidden)
     * Get
     * ```typescript
     *  const myPanelState: boolean = this.panel.collapsed;
     * ```
     * Set
     * ```html
     *  this.panel.collapsed = true;
     * ```
     * @type {?}
     */
    IgxExpansionPanelComponent.prototype.collapsed;
    /**
     * Emitted when the expansion panel finishes collapsing
     * ```typescript
     *  handleCollapsed(event: {
     *  panel: IgxExpansionPanelComponent,
     *  event: Event
     * })
     * ```
     * ```html
     *  <igx-expansion-panel (onCollapsed)="handleCollapsed($event)">
     *      ...
     *  </igx-expansion-panel>
     * ```
     * @type {?}
     */
    IgxExpansionPanelComponent.prototype.onCollapsed;
    /**
     * Emitted when the expansion panel finishes expanding
     * ```typescript
     *  handleExpanded(event: {
     *  panel: IgxExpansionPanelComponent,
     *  event: Event
     * })
     * ```
     * ```html
     *  <igx-expansion-panel (onExpanded)="handleExpanded($event)">
     *      ...
     *  </igx-expansion-panel>
     * ```
     * @type {?}
     */
    IgxExpansionPanelComponent.prototype.onExpanded;
    /**
     * @hidden
     * @type {?}
     */
    IgxExpansionPanelComponent.prototype.body;
    /**
     * @hidden
     * @type {?}
     */
    IgxExpansionPanelComponent.prototype.header;
    /**
     * @type {?}
     * @private
     */
    IgxExpansionPanelComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    IgxExpansionPanelComponent.prototype.builder;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5zaW9uLXBhbmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvZXhwYW5zaW9uLXBhbmVsL2V4cGFuc2lvbi1wYW5lbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2pCLFlBQVksRUFDWixXQUFXLEVBQ1gsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ1osVUFBVSxFQUViLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBOEIsWUFBWSxFQUErQixNQUFNLHFCQUFxQixDQUFDO0FBQzlILE9BQU8sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDM0QsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDbEYsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDdEYsT0FBTyxFQUFFLDZCQUE2QixFQUFtRCxNQUFNLDBCQUEwQixDQUFDOztJQUV0SCxPQUFPLEdBQUcsQ0FBQzs7OztBQUVmLHVDQUdDOzs7SUFGRywwQ0FBMEM7O0lBQzFDLDJDQUEyQzs7QUFFL0M7SUFxSUksb0NBQW9CLEdBQXNCLEVBQVUsT0FBeUI7UUFBekQsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUEvRnRFLHNCQUFpQixHQUFzQjtZQUMxQyxhQUFhLEVBQUUsU0FBUztZQUN4QixjQUFjLEVBQUUsVUFBVTtTQUM3QixDQUFDOzs7Ozs7Ozs7Ozs7UUFlSyxPQUFFLEdBQUcseUJBQXVCLE9BQU8sRUFBSSxDQUFDOzs7O1FBTXhDLGFBQVEsR0FBRyxxQkFBcUIsQ0FBQzs7Ozs7Ozs7Ozs7O1FBY2pDLGNBQVMsR0FB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V0FBVyxFQUFFLDBCQUEwQixFQUFFLENBQUM7aUJBQ25HOzs7O2dCQXpCRyxpQkFBaUI7Z0JBU1osZ0JBQWdCOzs7b0NBaURwQixLQUFLO3FCQWlCTCxXQUFXLFNBQUMsU0FBUyxjQUNyQixLQUFLOzJCQU1MLFdBQVcsU0FBQywyQkFBMkI7NEJBY3ZDLEtBQUs7OEJBaUJMLE1BQU07NkJBaUJOLE1BQU07dUJBYU4sWUFBWSxTQUFDLFVBQVUsQ0FBQyxjQUFNLE9BQUEsOEJBQThCLEVBQTlCLENBQThCLENBQUM7b0JBQzFELEVBQUUsSUFBSSxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsOEJBQThCLEVBQTlCLENBQThCLENBQUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO3lCQU01RSxZQUFZLFNBQUMsVUFBVSxDQUFDLGNBQU0sT0FBQSxnQ0FBZ0MsRUFBaEMsQ0FBZ0MsQ0FBQztvQkFDNUQsRUFBRSxJQUFJLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxnQ0FBZ0MsRUFBaEMsQ0FBZ0MsQ0FBQyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7O0lBcUhuRixpQ0FBQztDQUFBLEFBdlBELElBdVBDO1NBbFBZLDBCQUEwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWdDbkMsdURBSUU7Ozs7Ozs7Ozs7Ozs7SUFhRix3Q0FFK0M7Ozs7O0lBSy9DLDhDQUN3Qzs7Ozs7Ozs7Ozs7OztJQWF4QywrQ0FDd0I7Ozs7Ozs7Ozs7Ozs7Ozs7SUFnQnhCLGlEQUNrRTs7Ozs7Ozs7Ozs7Ozs7OztJQWdCbEUsZ0RBQ2lFOzs7OztJQVlqRSwwQ0FFNEM7Ozs7O0lBSzVDLDRDQUVnRDs7Ozs7SUFFcEMseUNBQThCOzs7OztJQUFFLDZDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgQ29tcG9uZW50LFxuICAgIENoYW5nZURldGVjdG9yUmVmLFxuICAgIEV2ZW50RW1pdHRlcixcbiAgICBIb3N0QmluZGluZyxcbiAgICBJbnB1dCxcbiAgICBPdXRwdXQsXG4gICAgQ29udGVudENoaWxkLFxuICAgIGZvcndhcmRSZWYsXG4gICAgQWZ0ZXJDb250ZW50SW5pdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFuaW1hdGlvbkJ1aWxkZXIsIEFuaW1hdGlvblJlZmVyZW5jZU1ldGFkYXRhLCB1c2VBbmltYXRpb24sIEFuaW1hdGlvbkFuaW1hdGVSZWZNZXRhZGF0YSB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgZ3Jvd1Zlck91dCwgZ3Jvd1ZlckluIH0gZnJvbSAnLi4vYW5pbWF0aW9ucy9tYWluJztcbmltcG9ydCB7IElneEV4cGFuc2lvblBhbmVsQm9keUNvbXBvbmVudCB9IGZyb20gJy4vZXhwYW5zaW9uLXBhbmVsLWJvZHkuY29tcG9uZW50JztcbmltcG9ydCB7IElneEV4cGFuc2lvblBhbmVsSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9leHBhbnNpb24tcGFuZWwtaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJR1hfRVhQQU5TSU9OX1BBTkVMX0NPTVBPTkVOVCwgSWd4RXhwYW5zaW9uUGFuZWxCYXNlLCBJRXhwYW5zaW9uUGFuZWxFdmVudEFyZ3MgfSBmcm9tICcuL2V4cGFuc2lvbi1wYW5lbC5jb21tb24nO1xuXG5sZXQgTkVYVF9JRCA9IDA7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQW5pbWF0aW9uU2V0dGluZ3Mge1xuICAgIG9wZW5BbmltYXRpb246IEFuaW1hdGlvblJlZmVyZW5jZU1ldGFkYXRhO1xuICAgIGNsb3NlQW5pbWF0aW9uOiBBbmltYXRpb25SZWZlcmVuY2VNZXRhZGF0YTtcbn1cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnaWd4LWV4cGFuc2lvbi1wYW5lbCcsXG4gICAgdGVtcGxhdGVVcmw6ICdleHBhbnNpb24tcGFuZWwuY29tcG9uZW50Lmh0bWwnLFxuICAgIHByb3ZpZGVyczogW3sgcHJvdmlkZTogSUdYX0VYUEFOU0lPTl9QQU5FTF9DT01QT05FTlQsIHVzZUV4aXN0aW5nOiBJZ3hFeHBhbnNpb25QYW5lbENvbXBvbmVudCB9XVxufSlcbmV4cG9ydCBjbGFzcyBJZ3hFeHBhbnNpb25QYW5lbENvbXBvbmVudCBpbXBsZW1lbnRzIElneEV4cGFuc2lvblBhbmVsQmFzZSwgQWZ0ZXJDb250ZW50SW5pdCB7XG4gICAgLyoqXG4gICAgICogU2V0cy9nZXRzIHRoZSBhbmltYXRpb24gc2V0dGluZ3Mgb2YgdGhlIGV4cGFuc2lvbiBwYW5lbCBjb21wb25lbnRcbiAgICAgKiBPcGVuIGFuZCBDbG9zZSBhbmltYXRpb24gc2hvdWxkIGJlIHBhc3NlZFxuICAgICAqXG4gICAgICogR2V0XG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqICBjb25zdCBjdXJyZW50QW5pbWF0aW9ucyA9IHRoaXMucGFuZWwuYW5pbWF0aW9uU2V0dGluZ3M7XG4gICAgICogYGBgXG4gICAgICogU2V0XG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqICBpbXBvcnQgeyBzbGlkZUluTGVmdCwgc2xpZGVPdXRSaWdodCB9IGZyb20gJ2lnbml0ZXVpLWFuZ3VsYXInO1xuICAgICAqICAuLi5cbiAgICAgKiAgdGhpcy5wYW5lbC5hbmltYXRpb25zU2V0dGluZ3MgPSB7XG4gICAgICogICAgICBvcGVuQW5pbWF0aW9uOiBzbGlkZUluTGVmdCxcbiAgICAgKiAgICAgIGNsb3NlQW5pbWF0aW9uOiBzbGlkZU91dFJpZ2h0XG4gICAgICogfTtcbiAgICAgKiBgYGBcbiAgICAgKiBvciB2aWEgdGVtcGxhdGVcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogIGltcG9ydCB7IHNsaWRlSW5MZWZ0LCBzbGlkZU91dFJpZ2h0IH0gZnJvbSAnaWduaXRldWktYW5ndWxhcic7XG4gICAgICogIC4uLlxuICAgICAqICBteUN1c3RvbUFuaW1hdGlvbk9iamVjdCA9IHtcbiAgICAgKiAgICAgIG9wZW5BbmltYXRpb246IHNsaWRlSW5MZWZ0LFxuICAgICAqICAgICAgY2xvc2VBbmltYXRpb246IHNsaWRlT3V0UmlnaHRcbiAgICAgKiB9O1xuICAgICAqIGBgYGh0bWxcbiAgICAgKiAgPGlneC1leHBhbnNpb24tcGFuZWwgW2FuaW1hdGlvblNldHRpbmdzXT0nbXlDdXN0b21BbmltYXRpb25PYmplY3QnPlxuICAgICAqICAuLi5cbiAgICAgKiAgPC9pZ3gtZXhwYW5zaW9uLXBhbmVsPlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGFuaW1hdGlvblNldHRpbmdzOiBBbmltYXRpb25TZXR0aW5ncyA9IHtcbiAgICAgICAgb3BlbkFuaW1hdGlvbjogZ3Jvd1ZlckluLFxuICAgICAgICBjbG9zZUFuaW1hdGlvbjogZ3Jvd1Zlck91dFxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTZXRzL2dldHMgdGhlIGBpZGAgb2YgdGhlIGV4cGFuc2lvbiBwYW5lbCBjb21wb25lbnQuXG4gICAgICogSWYgbm90IHNldCwgYGlkYCB3aWxsIGhhdmUgdmFsdWUgYFwiaWd4LWV4cGFuc2lvbi1wYW5lbC0wXCJgO1xuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aWd4LWV4cGFuc2lvbi1wYW5lbCBpZCA9IFwibXktZmlyc3QtZXhwYW5zaW9uLXBhbmVsXCI+PC9pZ3gtZXhwYW5zaW9uLXBhbmVsPlxuICAgICAqIGBgYFxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiBsZXQgcGFuZWxJZCA9ICB0aGlzLnBhbmVsLmlkO1xuICAgICAqIGBgYFxuICAgICAqIEBtZW1iZXJvZiBJZ3hFeHBhbnNpb25QYW5lbENvbXBvbmVudFxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnYXR0ci5pZCcpXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgaWQgPSBgaWd4LWV4cGFuc2lvbi1wYW5lbC0ke05FWFRfSUQrK31gO1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBIb3N0QmluZGluZygnY2xhc3MuaWd4LWV4cGFuc2lvbi1wYW5lbCcpXG4gICAgcHVibGljIGNzc0NsYXNzID0gJ2lneC1leHBhbnNpb24tcGFuZWwnO1xuXG4gICAgLyoqXG4gICAgICogR2V0cy9zZXRzIHdoZXRoZXIgdGhlIGNvbXBvbmVudCBpcyBjb2xsYXBzZWQgKGl0cyBjb250ZW50IGlzIGhpZGRlbilcbiAgICAgKiBHZXRcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogIGNvbnN0IG15UGFuZWxTdGF0ZTogYm9vbGVhbiA9IHRoaXMucGFuZWwuY29sbGFwc2VkO1xuICAgICAqIGBgYFxuICAgICAqIFNldFxuICAgICAqIGBgYGh0bWxcbiAgICAgKiAgdGhpcy5wYW5lbC5jb2xsYXBzZWQgPSB0cnVlO1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGNvbGxhcHNlZCA9IHRydWU7XG5cbiAgICAvKipcbiAgICAgKiBFbWl0dGVkIHdoZW4gdGhlIGV4cGFuc2lvbiBwYW5lbCBmaW5pc2hlcyBjb2xsYXBzaW5nXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqICBoYW5kbGVDb2xsYXBzZWQoZXZlbnQ6IHtcbiAgICAgKiAgcGFuZWw6IElneEV4cGFuc2lvblBhbmVsQ29tcG9uZW50LFxuICAgICAqICBldmVudDogRXZlbnRcbiAgICAgKiB9KVxuICAgICAqIGBgYFxuICAgICAqIGBgYGh0bWxcbiAgICAgKiAgPGlneC1leHBhbnNpb24tcGFuZWwgKG9uQ29sbGFwc2VkKT1cImhhbmRsZUNvbGxhcHNlZCgkZXZlbnQpXCI+XG4gICAgICogICAgICAuLi5cbiAgICAgKiAgPC9pZ3gtZXhwYW5zaW9uLXBhbmVsPlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBvbkNvbGxhcHNlZCA9IG5ldyBFdmVudEVtaXR0ZXI8SUV4cGFuc2lvblBhbmVsRXZlbnRBcmdzPigpO1xuXG4gICAgLyoqXG4gICAgICogRW1pdHRlZCB3aGVuIHRoZSBleHBhbnNpb24gcGFuZWwgZmluaXNoZXMgZXhwYW5kaW5nXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqICBoYW5kbGVFeHBhbmRlZChldmVudDoge1xuICAgICAqICBwYW5lbDogSWd4RXhwYW5zaW9uUGFuZWxDb21wb25lbnQsXG4gICAgICogIGV2ZW50OiBFdmVudFxuICAgICAqIH0pXG4gICAgICogYGBgXG4gICAgICogYGBgaHRtbFxuICAgICAqICA8aWd4LWV4cGFuc2lvbi1wYW5lbCAob25FeHBhbmRlZCk9XCJoYW5kbGVFeHBhbmRlZCgkZXZlbnQpXCI+XG4gICAgICogICAgICAuLi5cbiAgICAgKiAgPC9pZ3gtZXhwYW5zaW9uLXBhbmVsPlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBvbkV4cGFuZGVkID0gbmV3IEV2ZW50RW1pdHRlcjxJRXhwYW5zaW9uUGFuZWxFdmVudEFyZ3M+KCk7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHVibGljIGdldCBoZWFkZXJJZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGVhZGVyID8gYCR7dGhpcy5pZH0taGVhZGVyYCA6ICcnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBAQ29udGVudENoaWxkKGZvcndhcmRSZWYoKCkgPT4gSWd4RXhwYW5zaW9uUGFuZWxCb2R5Q29tcG9uZW50KSxcbiAgICAgICAgeyByZWFkOiBmb3J3YXJkUmVmKCgpID0+IElneEV4cGFuc2lvblBhbmVsQm9keUNvbXBvbmVudCksIHN0YXRpYzogZmFsc2UgfSlcbiAgICBwdWJsaWMgYm9keTogSWd4RXhwYW5zaW9uUGFuZWxCb2R5Q29tcG9uZW50O1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBDb250ZW50Q2hpbGQoZm9yd2FyZFJlZigoKSA9PiBJZ3hFeHBhbnNpb25QYW5lbEhlYWRlckNvbXBvbmVudCksXG4gICAgICAgIHsgcmVhZDogZm9yd2FyZFJlZigoKSA9PiBJZ3hFeHBhbnNpb25QYW5lbEhlYWRlckNvbXBvbmVudCksIHN0YXRpYzogZmFsc2UgfSlcbiAgICBwdWJsaWMgaGVhZGVyOiBJZ3hFeHBhbnNpb25QYW5lbEhlYWRlckNvbXBvbmVudDtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSBidWlsZGVyOiBBbmltYXRpb25CdWlsZGVyKSB7IH1cblxuICAgIC8qKiBAaGlkZGVuICovXG4gICAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5ib2R5ICYmIHRoaXMuaGVhZGVyKSB7XG4gICAgICAgICAgICAvLyBzY2hlZHVsZSBhdCBlbmQgb2YgdHVybjpcbiAgICAgICAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYm9keS5sYWJlbGxlZEJ5ID0gdGhpcy5ib2R5LmxhYmVsbGVkQnkgfHwgdGhpcy5oZWFkZXJJZDtcbiAgICAgICAgICAgICAgICB0aGlzLmJvZHkubGFiZWwgPSB0aGlzLmJvZHkubGFiZWwgfHwgdGhpcy5pZCArICctcmVnaW9uJztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBwbGF5T3BlbkFuaW1hdGlvbihjYjogKCkgPT4gdm9pZCkge1xuICAgICAgICBpZiAoIXRoaXMuYm9keSkgeyAvLyBpZiBub3QgYm9keSBlbGVtZW50IGlzIHBhc3NlZCwgdGhlcmUgaXMgbm90aGluZyB0byBhbmltYXRlXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYW5pbWF0aW9uID0gdXNlQW5pbWF0aW9uKHRoaXMuYW5pbWF0aW9uU2V0dGluZ3Mub3BlbkFuaW1hdGlvbik7XG4gICAgICAgIGNvbnN0IGFuaW1hdGlvbkJ1aWxkZXIgPSB0aGlzLmJ1aWxkZXIuYnVpbGQoYW5pbWF0aW9uKTtcbiAgICAgICAgY29uc3Qgb3BlbkFuaW1hdGlvblBsYXllciA9IGFuaW1hdGlvbkJ1aWxkZXIuY3JlYXRlKHRoaXMuYm9keS5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQpO1xuXG4gICAgICAgIG9wZW5BbmltYXRpb25QbGF5ZXIub25Eb25lKCgpID0+IHtcbiAgICAgICAgICAgIGNiKCk7XG4gICAgICAgICAgICBvcGVuQW5pbWF0aW9uUGxheWVyLnJlc2V0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG9wZW5BbmltYXRpb25QbGF5ZXIucGxheSgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgcGxheUNsb3NlQW5pbWF0aW9uKGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgICAgIGlmICghdGhpcy5ib2R5KSB7IC8vIGlmIG5vdCBib2R5IGVsZW1lbnQgaXMgcGFzc2VkLCB0aGVyZSBpcyBub3RoaW5nIHRvIGFuaW1hdGVcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhbmltYXRpb24gPSB1c2VBbmltYXRpb24odGhpcy5hbmltYXRpb25TZXR0aW5ncy5jbG9zZUFuaW1hdGlvbik7XG4gICAgICAgIGNvbnN0IGFuaW1hdGlvbkJ1aWxkZXIgPSB0aGlzLmJ1aWxkZXIuYnVpbGQoYW5pbWF0aW9uKTtcbiAgICAgICAgY29uc3QgY2xvc2VBbmltYXRpb25QbGF5ZXIgPSBhbmltYXRpb25CdWlsZGVyLmNyZWF0ZSh0aGlzLmJvZHkuZWxlbWVudC5uYXRpdmVFbGVtZW50KTtcbiAgICAgICAgY2xvc2VBbmltYXRpb25QbGF5ZXIub25Eb25lKCgpID0+IHtcbiAgICAgICAgICAgIGNiKCk7XG4gICAgICAgICAgICBjbG9zZUFuaW1hdGlvblBsYXllci5yZXNldCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjbG9zZUFuaW1hdGlvblBsYXllci5wbGF5KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29sbGFwc2VzIHRoZSBwYW5lbFxuICAgICAqXG4gICAgICogYGBgaHRtbFxuICAgICAqICA8aWd4LWV4cGFuc2lvbi1wYW5lbCAjbXlQYW5lbD5cbiAgICAgKiAgICAgIC4uLlxuICAgICAqICA8L2lneC1leHBhbnNpb24tcGFuZWw+XG4gICAgICogIDxidXR0b24gKGNsaWNrKT1cIm15UGFuZWwuY29sbGFwc2UoJGV2ZW50KVwiPkNvbGxwYXNlIFBhbmVsPC9idXR0b24+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgY29sbGFwc2UoZXZ0PzogRXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuY29sbGFwc2VkKSB7IC8vIElmIGV4cGFuc2lvbiBwYW5lbCBpcyBhbHJlYWR5IGNvbGxhcHNlZCwgZG8gbm90aGluZ1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucGxheUNsb3NlQW5pbWF0aW9uKFxuICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMub25Db2xsYXBzZWQuZW1pdCh7IGV2ZW50OiBldnQsIHBhbmVsOiB0aGlzIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuY29sbGFwc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFeHBhbmRzIHRoZSBwYW5lbFxuICAgICAqXG4gICAgICogYGBgaHRtbFxuICAgICAqICA8aWd4LWV4cGFuc2lvbi1wYW5lbCAjbXlQYW5lbD5cbiAgICAgKiAgICAgIC4uLlxuICAgICAqICA8L2lneC1leHBhbnNpb24tcGFuZWw+XG4gICAgICogIDxidXR0b24gKGNsaWNrKT1cIm15UGFuZWwuZXhwYW5kKCRldmVudClcIj5FeHBhbmQgUGFuZWw8L2J1dHRvbj5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBleHBhbmQoZXZ0PzogRXZlbnQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNvbGxhcHNlZCkgeyAvLyBJZiB0aGUgcGFuZWwgaXMgYWxyZWFkeSBvcGVuZWQsIGRvIG5vdGhpbmdcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbGxhcHNlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgIHRoaXMucGxheU9wZW5BbmltYXRpb24oXG4gICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbkV4cGFuZGVkLmVtaXQoeyBldmVudDogZXZ0LCBwYW5lbDogdGhpcyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUb2dnbGVzIHRoZSBwYW5lbFxuICAgICAqXG4gICAgICogYGBgaHRtbFxuICAgICAqICA8aWd4LWV4cGFuc2lvbi1wYW5lbCAjbXlQYW5lbD5cbiAgICAgKiAgICAgIC4uLlxuICAgICAqICA8L2lneC1leHBhbnNpb24tcGFuZWw+XG4gICAgICogIDxidXR0b24gKGNsaWNrKT1cIm15UGFuZWwudG9nZ2xlKCRldmVudClcIj5FeHBhbmQgUGFuZWw8L2J1dHRvbj5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICB0b2dnbGUoZXZ0PzogRXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuY29sbGFwc2VkKSB7XG4gICAgICAgICAgICB0aGlzLm9wZW4oZXZ0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoZXZ0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9wZW4oZXZ0PzogRXZlbnQpIHtcbiAgICAgICAgdGhpcy5leHBhbmQoZXZ0KTtcbiAgICB9XG4gICAgY2xvc2UoZXZ0PzogRXZlbnQpIHtcbiAgICAgICAgdGhpcy5jb2xsYXBzZShldnQpO1xuICAgIH1cblxufVxuIl19