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
let NEXT_ID = 0;
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
export class IgxExpansionPanelComponent {
    /**
     * @param {?} cdr
     * @param {?} builder
     */
    constructor(cdr, builder) {
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
        this.id = `igx-expansion-panel-${NEXT_ID++}`;
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
    /**
     * @hidden
     * @return {?}
     */
    get headerId() {
        return this.header ? `${this.id}-header` : '';
    }
    /**
     * @hidden
     * @return {?}
     */
    ngAfterContentInit() {
        if (this.body && this.header) {
            // schedule at end of turn:
            Promise.resolve().then(() => {
                this.body.labelledBy = this.body.labelledBy || this.headerId;
                this.body.label = this.body.label || this.id + '-region';
            });
        }
    }
    /**
     * @private
     * @param {?} cb
     * @return {?}
     */
    playOpenAnimation(cb) {
        if (!this.body) { // if not body element is passed, there is nothing to animate
            return;
        }
        /** @type {?} */
        const animation = useAnimation(this.animationSettings.openAnimation);
        /** @type {?} */
        const animationBuilder = this.builder.build(animation);
        /** @type {?} */
        const openAnimationPlayer = animationBuilder.create(this.body.element.nativeElement);
        openAnimationPlayer.onDone(() => {
            cb();
            openAnimationPlayer.reset();
        });
        openAnimationPlayer.play();
    }
    /**
     * @private
     * @param {?} cb
     * @return {?}
     */
    playCloseAnimation(cb) {
        if (!this.body) { // if not body element is passed, there is nothing to animate
            return;
        }
        /** @type {?} */
        const animation = useAnimation(this.animationSettings.closeAnimation);
        /** @type {?} */
        const animationBuilder = this.builder.build(animation);
        /** @type {?} */
        const closeAnimationPlayer = animationBuilder.create(this.body.element.nativeElement);
        closeAnimationPlayer.onDone(() => {
            cb();
            closeAnimationPlayer.reset();
        });
        closeAnimationPlayer.play();
    }
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
    collapse(evt) {
        if (this.collapsed) { // If expansion panel is already collapsed, do nothing
            return;
        }
        this.playCloseAnimation(() => {
            this.onCollapsed.emit({ event: evt, panel: this });
            this.collapsed = true;
        });
    }
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
    expand(evt) {
        if (!this.collapsed) { // If the panel is already opened, do nothing
            return;
        }
        this.collapsed = false;
        this.cdr.detectChanges();
        this.playOpenAnimation(() => {
            this.onExpanded.emit({ event: evt, panel: this });
        });
    }
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
    toggle(evt) {
        if (this.collapsed) {
            this.open(evt);
        }
        else {
            this.close(evt);
        }
    }
    /**
     * @param {?=} evt
     * @return {?}
     */
    open(evt) {
        this.expand(evt);
    }
    /**
     * @param {?=} evt
     * @return {?}
     */
    close(evt) {
        this.collapse(evt);
    }
}
IgxExpansionPanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'igx-expansion-panel',
                template: "<ng-content select=\"igx-expansion-panel-header\"></ng-content>\n<ng-content *ngIf=\"!collapsed\" select=\"igx-expansion-panel-body\"></ng-content>\n",
                providers: [{ provide: IGX_EXPANSION_PANEL_COMPONENT, useExisting: IgxExpansionPanelComponent }]
            }] }
];
/** @nocollapse */
IgxExpansionPanelComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: AnimationBuilder }
];
IgxExpansionPanelComponent.propDecorators = {
    animationSettings: [{ type: Input }],
    id: [{ type: HostBinding, args: ['attr.id',] }, { type: Input }],
    cssClass: [{ type: HostBinding, args: ['class.igx-expansion-panel',] }],
    collapsed: [{ type: Input }],
    onCollapsed: [{ type: Output }],
    onExpanded: [{ type: Output }],
    body: [{ type: ContentChild, args: [forwardRef(() => IgxExpansionPanelBodyComponent),
                { read: forwardRef(() => IgxExpansionPanelBodyComponent), static: false },] }],
    header: [{ type: ContentChild, args: [forwardRef(() => IgxExpansionPanelHeaderComponent),
                { read: forwardRef(() => IgxExpansionPanelHeaderComponent), static: false },] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5zaW9uLXBhbmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lnbml0ZXVpLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvZXhwYW5zaW9uLXBhbmVsL2V4cGFuc2lvbi1wYW5lbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2pCLFlBQVksRUFDWixXQUFXLEVBQ1gsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ1osVUFBVSxFQUViLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBOEIsWUFBWSxFQUErQixNQUFNLHFCQUFxQixDQUFDO0FBQzlILE9BQU8sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDM0QsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDbEYsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDdEYsT0FBTyxFQUFFLDZCQUE2QixFQUFtRCxNQUFNLDBCQUEwQixDQUFDOztJQUV0SCxPQUFPLEdBQUcsQ0FBQzs7OztBQUVmLHVDQUdDOzs7SUFGRywwQ0FBMEM7O0lBQzFDLDJDQUEyQzs7QUFPL0MsTUFBTSxPQUFPLDBCQUEwQjs7Ozs7SUFnSW5DLFlBQW9CLEdBQXNCLEVBQVUsT0FBeUI7UUFBekQsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUEvRnRFLHNCQUFpQixHQUFzQjtZQUMxQyxhQUFhLEVBQUUsU0FBUztZQUN4QixjQUFjLEVBQUUsVUFBVTtTQUM3QixDQUFDOzs7Ozs7Ozs7Ozs7UUFlSyxPQUFFLEdBQUcsdUJBQXVCLE9BQU8sRUFBRSxFQUFFLENBQUM7Ozs7UUFNeEMsYUFBUSxHQUFHLHFCQUFxQixDQUFD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OzBCQWlCTCxNQUFNO3lCQWlCTixNQUFNO21CQWFOLFlBQVksU0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsOEJBQThCLENBQUM7Z0JBQzFELEVBQUUsSUFBSSxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7cUJBTTVFLFlBQVksU0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsZ0NBQWdDLENBQUM7Z0JBQzVELEVBQUUsSUFBSSxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBN0YvRSx1REFJRTs7Ozs7Ozs7Ozs7OztJQWFGLHdDQUUrQzs7Ozs7SUFLL0MsOENBQ3dDOzs7Ozs7Ozs7Ozs7O0lBYXhDLCtDQUN3Qjs7Ozs7Ozs7Ozs7Ozs7OztJQWdCeEIsaURBQ2tFOzs7Ozs7Ozs7Ozs7Ozs7O0lBZ0JsRSxnREFDaUU7Ozs7O0lBWWpFLDBDQUU0Qzs7Ozs7SUFLNUMsNENBRWdEOzs7OztJQUVwQyx5Q0FBOEI7Ozs7O0lBQUUsNkNBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBDb21wb25lbnQsXG4gICAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgRXZlbnRFbWl0dGVyLFxuICAgIEhvc3RCaW5kaW5nLFxuICAgIElucHV0LFxuICAgIE91dHB1dCxcbiAgICBDb250ZW50Q2hpbGQsXG4gICAgZm9yd2FyZFJlZixcbiAgICBBZnRlckNvbnRlbnRJbml0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQW5pbWF0aW9uQnVpbGRlciwgQW5pbWF0aW9uUmVmZXJlbmNlTWV0YWRhdGEsIHVzZUFuaW1hdGlvbiwgQW5pbWF0aW9uQW5pbWF0ZVJlZk1ldGFkYXRhIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBncm93VmVyT3V0LCBncm93VmVySW4gfSBmcm9tICcuLi9hbmltYXRpb25zL21haW4nO1xuaW1wb3J0IHsgSWd4RXhwYW5zaW9uUGFuZWxCb2R5Q29tcG9uZW50IH0gZnJvbSAnLi9leHBhbnNpb24tcGFuZWwtYm9keS5jb21wb25lbnQnO1xuaW1wb3J0IHsgSWd4RXhwYW5zaW9uUGFuZWxIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL2V4cGFuc2lvbi1wYW5lbC1oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IElHWF9FWFBBTlNJT05fUEFORUxfQ09NUE9ORU5ULCBJZ3hFeHBhbnNpb25QYW5lbEJhc2UsIElFeHBhbnNpb25QYW5lbEV2ZW50QXJncyB9IGZyb20gJy4vZXhwYW5zaW9uLXBhbmVsLmNvbW1vbic7XG5cbmxldCBORVhUX0lEID0gMDtcblxuZXhwb3J0IGludGVyZmFjZSBBbmltYXRpb25TZXR0aW5ncyB7XG4gICAgb3BlbkFuaW1hdGlvbjogQW5pbWF0aW9uUmVmZXJlbmNlTWV0YWRhdGE7XG4gICAgY2xvc2VBbmltYXRpb246IEFuaW1hdGlvblJlZmVyZW5jZU1ldGFkYXRhO1xufVxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdpZ3gtZXhwYW5zaW9uLXBhbmVsJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2V4cGFuc2lvbi1wYW5lbC5jb21wb25lbnQuaHRtbCcsXG4gICAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBJR1hfRVhQQU5TSU9OX1BBTkVMX0NPTVBPTkVOVCwgdXNlRXhpc3Rpbmc6IElneEV4cGFuc2lvblBhbmVsQ29tcG9uZW50IH1dXG59KVxuZXhwb3J0IGNsYXNzIElneEV4cGFuc2lvblBhbmVsQ29tcG9uZW50IGltcGxlbWVudHMgSWd4RXhwYW5zaW9uUGFuZWxCYXNlLCBBZnRlckNvbnRlbnRJbml0IHtcbiAgICAvKipcbiAgICAgKiBTZXRzL2dldHMgdGhlIGFuaW1hdGlvbiBzZXR0aW5ncyBvZiB0aGUgZXhwYW5zaW9uIHBhbmVsIGNvbXBvbmVudFxuICAgICAqIE9wZW4gYW5kIENsb3NlIGFuaW1hdGlvbiBzaG91bGQgYmUgcGFzc2VkXG4gICAgICpcbiAgICAgKiBHZXRcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogIGNvbnN0IGN1cnJlbnRBbmltYXRpb25zID0gdGhpcy5wYW5lbC5hbmltYXRpb25TZXR0aW5ncztcbiAgICAgKiBgYGBcbiAgICAgKiBTZXRcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogIGltcG9ydCB7IHNsaWRlSW5MZWZ0LCBzbGlkZU91dFJpZ2h0IH0gZnJvbSAnaWduaXRldWktYW5ndWxhcic7XG4gICAgICogIC4uLlxuICAgICAqICB0aGlzLnBhbmVsLmFuaW1hdGlvbnNTZXR0aW5ncyA9IHtcbiAgICAgKiAgICAgIG9wZW5BbmltYXRpb246IHNsaWRlSW5MZWZ0LFxuICAgICAqICAgICAgY2xvc2VBbmltYXRpb246IHNsaWRlT3V0UmlnaHRcbiAgICAgKiB9O1xuICAgICAqIGBgYFxuICAgICAqIG9yIHZpYSB0ZW1wbGF0ZVxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiAgaW1wb3J0IHsgc2xpZGVJbkxlZnQsIHNsaWRlT3V0UmlnaHQgfSBmcm9tICdpZ25pdGV1aS1hbmd1bGFyJztcbiAgICAgKiAgLi4uXG4gICAgICogIG15Q3VzdG9tQW5pbWF0aW9uT2JqZWN0ID0ge1xuICAgICAqICAgICAgb3BlbkFuaW1hdGlvbjogc2xpZGVJbkxlZnQsXG4gICAgICogICAgICBjbG9zZUFuaW1hdGlvbjogc2xpZGVPdXRSaWdodFxuICAgICAqIH07XG4gICAgICogYGBgaHRtbFxuICAgICAqICA8aWd4LWV4cGFuc2lvbi1wYW5lbCBbYW5pbWF0aW9uU2V0dGluZ3NdPSdteUN1c3RvbUFuaW1hdGlvbk9iamVjdCc+XG4gICAgICogIC4uLlxuICAgICAqICA8L2lneC1leHBhbnNpb24tcGFuZWw+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgYW5pbWF0aW9uU2V0dGluZ3M6IEFuaW1hdGlvblNldHRpbmdzID0ge1xuICAgICAgICBvcGVuQW5pbWF0aW9uOiBncm93VmVySW4sXG4gICAgICAgIGNsb3NlQW5pbWF0aW9uOiBncm93VmVyT3V0XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNldHMvZ2V0cyB0aGUgYGlkYCBvZiB0aGUgZXhwYW5zaW9uIHBhbmVsIGNvbXBvbmVudC5cbiAgICAgKiBJZiBub3Qgc2V0LCBgaWRgIHdpbGwgaGF2ZSB2YWx1ZSBgXCJpZ3gtZXhwYW5zaW9uLXBhbmVsLTBcImA7XG4gICAgICogYGBgaHRtbFxuICAgICAqIDxpZ3gtZXhwYW5zaW9uLXBhbmVsIGlkID0gXCJteS1maXJzdC1leHBhbnNpb24tcGFuZWxcIj48L2lneC1leHBhbnNpb24tcGFuZWw+XG4gICAgICogYGBgXG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGxldCBwYW5lbElkID0gIHRoaXMucGFuZWwuaWQ7XG4gICAgICogYGBgXG4gICAgICogQG1lbWJlcm9mIElneEV4cGFuc2lvblBhbmVsQ29tcG9uZW50XG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdhdHRyLmlkJylcbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBpZCA9IGBpZ3gtZXhwYW5zaW9uLXBhbmVsLSR7TkVYVF9JRCsrfWA7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pZ3gtZXhwYW5zaW9uLXBhbmVsJylcbiAgICBwdWJsaWMgY3NzQ2xhc3MgPSAnaWd4LWV4cGFuc2lvbi1wYW5lbCc7XG5cbiAgICAvKipcbiAgICAgKiBHZXRzL3NldHMgd2hldGhlciB0aGUgY29tcG9uZW50IGlzIGNvbGxhcHNlZCAoaXRzIGNvbnRlbnQgaXMgaGlkZGVuKVxuICAgICAqIEdldFxuICAgICAqIGBgYHR5cGVzY3JpcHRcbiAgICAgKiAgY29uc3QgbXlQYW5lbFN0YXRlOiBib29sZWFuID0gdGhpcy5wYW5lbC5jb2xsYXBzZWQ7XG4gICAgICogYGBgXG4gICAgICogU2V0XG4gICAgICogYGBgaHRtbFxuICAgICAqICB0aGlzLnBhbmVsLmNvbGxhcHNlZCA9IHRydWU7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgY29sbGFwc2VkID0gdHJ1ZTtcblxuICAgIC8qKlxuICAgICAqIEVtaXR0ZWQgd2hlbiB0aGUgZXhwYW5zaW9uIHBhbmVsIGZpbmlzaGVzIGNvbGxhcHNpbmdcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogIGhhbmRsZUNvbGxhcHNlZChldmVudDoge1xuICAgICAqICBwYW5lbDogSWd4RXhwYW5zaW9uUGFuZWxDb21wb25lbnQsXG4gICAgICogIGV2ZW50OiBFdmVudFxuICAgICAqIH0pXG4gICAgICogYGBgXG4gICAgICogYGBgaHRtbFxuICAgICAqICA8aWd4LWV4cGFuc2lvbi1wYW5lbCAob25Db2xsYXBzZWQpPVwiaGFuZGxlQ29sbGFwc2VkKCRldmVudClcIj5cbiAgICAgKiAgICAgIC4uLlxuICAgICAqICA8L2lneC1leHBhbnNpb24tcGFuZWw+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIG9uQ29sbGFwc2VkID0gbmV3IEV2ZW50RW1pdHRlcjxJRXhwYW5zaW9uUGFuZWxFdmVudEFyZ3M+KCk7XG5cbiAgICAvKipcbiAgICAgKiBFbWl0dGVkIHdoZW4gdGhlIGV4cGFuc2lvbiBwYW5lbCBmaW5pc2hlcyBleHBhbmRpbmdcbiAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICogIGhhbmRsZUV4cGFuZGVkKGV2ZW50OiB7XG4gICAgICogIHBhbmVsOiBJZ3hFeHBhbnNpb25QYW5lbENvbXBvbmVudCxcbiAgICAgKiAgZXZlbnQ6IEV2ZW50XG4gICAgICogfSlcbiAgICAgKiBgYGBcbiAgICAgKiBgYGBodG1sXG4gICAgICogIDxpZ3gtZXhwYW5zaW9uLXBhbmVsIChvbkV4cGFuZGVkKT1cImhhbmRsZUV4cGFuZGVkKCRldmVudClcIj5cbiAgICAgKiAgICAgIC4uLlxuICAgICAqICA8L2lneC1leHBhbnNpb24tcGFuZWw+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIG9uRXhwYW5kZWQgPSBuZXcgRXZlbnRFbWl0dGVyPElFeHBhbnNpb25QYW5lbEV2ZW50QXJncz4oKTtcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IGhlYWRlcklkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5oZWFkZXIgPyBgJHt0aGlzLmlkfS1oZWFkZXJgIDogJyc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIEBDb250ZW50Q2hpbGQoZm9yd2FyZFJlZigoKSA9PiBJZ3hFeHBhbnNpb25QYW5lbEJvZHlDb21wb25lbnQpLFxuICAgICAgICB7IHJlYWQ6IGZvcndhcmRSZWYoKCkgPT4gSWd4RXhwYW5zaW9uUGFuZWxCb2R5Q29tcG9uZW50KSwgc3RhdGljOiBmYWxzZSB9KVxuICAgIHB1YmxpYyBib2R5OiBJZ3hFeHBhbnNpb25QYW5lbEJvZHlDb21wb25lbnQ7XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgQENvbnRlbnRDaGlsZChmb3J3YXJkUmVmKCgpID0+IElneEV4cGFuc2lvblBhbmVsSGVhZGVyQ29tcG9uZW50KSxcbiAgICAgICAgeyByZWFkOiBmb3J3YXJkUmVmKCgpID0+IElneEV4cGFuc2lvblBhbmVsSGVhZGVyQ29tcG9uZW50KSwgc3RhdGljOiBmYWxzZSB9KVxuICAgIHB1YmxpYyBoZWFkZXI6IElneEV4cGFuc2lvblBhbmVsSGVhZGVyQ29tcG9uZW50O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIGJ1aWxkZXI6IEFuaW1hdGlvbkJ1aWxkZXIpIHsgfVxuXG4gICAgLyoqIEBoaWRkZW4gKi9cbiAgICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmJvZHkgJiYgdGhpcy5oZWFkZXIpIHtcbiAgICAgICAgICAgIC8vIHNjaGVkdWxlIGF0IGVuZCBvZiB0dXJuOlxuICAgICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5ib2R5LmxhYmVsbGVkQnkgPSB0aGlzLmJvZHkubGFiZWxsZWRCeSB8fCB0aGlzLmhlYWRlcklkO1xuICAgICAgICAgICAgICAgIHRoaXMuYm9keS5sYWJlbCA9IHRoaXMuYm9keS5sYWJlbCB8fCB0aGlzLmlkICsgJy1yZWdpb24nO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHBsYXlPcGVuQW5pbWF0aW9uKGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgICAgIGlmICghdGhpcy5ib2R5KSB7IC8vIGlmIG5vdCBib2R5IGVsZW1lbnQgaXMgcGFzc2VkLCB0aGVyZSBpcyBub3RoaW5nIHRvIGFuaW1hdGVcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhbmltYXRpb24gPSB1c2VBbmltYXRpb24odGhpcy5hbmltYXRpb25TZXR0aW5ncy5vcGVuQW5pbWF0aW9uKTtcbiAgICAgICAgY29uc3QgYW5pbWF0aW9uQnVpbGRlciA9IHRoaXMuYnVpbGRlci5idWlsZChhbmltYXRpb24pO1xuICAgICAgICBjb25zdCBvcGVuQW5pbWF0aW9uUGxheWVyID0gYW5pbWF0aW9uQnVpbGRlci5jcmVhdGUodGhpcy5ib2R5LmVsZW1lbnQubmF0aXZlRWxlbWVudCk7XG5cbiAgICAgICAgb3BlbkFuaW1hdGlvblBsYXllci5vbkRvbmUoKCkgPT4ge1xuICAgICAgICAgICAgY2IoKTtcbiAgICAgICAgICAgIG9wZW5BbmltYXRpb25QbGF5ZXIucmVzZXQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgb3BlbkFuaW1hdGlvblBsYXllci5wbGF5KCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBwbGF5Q2xvc2VBbmltYXRpb24oY2I6ICgpID0+IHZvaWQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmJvZHkpIHsgLy8gaWYgbm90IGJvZHkgZWxlbWVudCBpcyBwYXNzZWQsIHRoZXJlIGlzIG5vdGhpbmcgdG8gYW5pbWF0ZVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFuaW1hdGlvbiA9IHVzZUFuaW1hdGlvbih0aGlzLmFuaW1hdGlvblNldHRpbmdzLmNsb3NlQW5pbWF0aW9uKTtcbiAgICAgICAgY29uc3QgYW5pbWF0aW9uQnVpbGRlciA9IHRoaXMuYnVpbGRlci5idWlsZChhbmltYXRpb24pO1xuICAgICAgICBjb25zdCBjbG9zZUFuaW1hdGlvblBsYXllciA9IGFuaW1hdGlvbkJ1aWxkZXIuY3JlYXRlKHRoaXMuYm9keS5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgICBjbG9zZUFuaW1hdGlvblBsYXllci5vbkRvbmUoKCkgPT4ge1xuICAgICAgICAgICAgY2IoKTtcbiAgICAgICAgICAgIGNsb3NlQW5pbWF0aW9uUGxheWVyLnJlc2V0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNsb3NlQW5pbWF0aW9uUGxheWVyLnBsYXkoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb2xsYXBzZXMgdGhlIHBhbmVsXG4gICAgICpcbiAgICAgKiBgYGBodG1sXG4gICAgICogIDxpZ3gtZXhwYW5zaW9uLXBhbmVsICNteVBhbmVsPlxuICAgICAqICAgICAgLi4uXG4gICAgICogIDwvaWd4LWV4cGFuc2lvbi1wYW5lbD5cbiAgICAgKiAgPGJ1dHRvbiAoY2xpY2spPVwibXlQYW5lbC5jb2xsYXBzZSgkZXZlbnQpXCI+Q29sbHBhc2UgUGFuZWw8L2J1dHRvbj5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBjb2xsYXBzZShldnQ/OiBFdmVudCkge1xuICAgICAgICBpZiAodGhpcy5jb2xsYXBzZWQpIHsgLy8gSWYgZXhwYW5zaW9uIHBhbmVsIGlzIGFscmVhZHkgY29sbGFwc2VkLCBkbyBub3RoaW5nXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wbGF5Q2xvc2VBbmltYXRpb24oXG4gICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbkNvbGxhcHNlZC5lbWl0KHsgZXZlbnQ6IGV2dCwgcGFuZWw6IHRoaXMgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsYXBzZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4cGFuZHMgdGhlIHBhbmVsXG4gICAgICpcbiAgICAgKiBgYGBodG1sXG4gICAgICogIDxpZ3gtZXhwYW5zaW9uLXBhbmVsICNteVBhbmVsPlxuICAgICAqICAgICAgLi4uXG4gICAgICogIDwvaWd4LWV4cGFuc2lvbi1wYW5lbD5cbiAgICAgKiAgPGJ1dHRvbiAoY2xpY2spPVwibXlQYW5lbC5leHBhbmQoJGV2ZW50KVwiPkV4cGFuZCBQYW5lbDwvYnV0dG9uPlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIGV4cGFuZChldnQ/OiBFdmVudCkge1xuICAgICAgICBpZiAoIXRoaXMuY29sbGFwc2VkKSB7IC8vIElmIHRoZSBwYW5lbCBpcyBhbHJlYWR5IG9wZW5lZCwgZG8gbm90aGluZ1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29sbGFwc2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgdGhpcy5wbGF5T3BlbkFuaW1hdGlvbihcbiAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uRXhwYW5kZWQuZW1pdCh7IGV2ZW50OiBldnQsIHBhbmVsOiB0aGlzIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRvZ2dsZXMgdGhlIHBhbmVsXG4gICAgICpcbiAgICAgKiBgYGBodG1sXG4gICAgICogIDxpZ3gtZXhwYW5zaW9uLXBhbmVsICNteVBhbmVsPlxuICAgICAqICAgICAgLi4uXG4gICAgICogIDwvaWd4LWV4cGFuc2lvbi1wYW5lbD5cbiAgICAgKiAgPGJ1dHRvbiAoY2xpY2spPVwibXlQYW5lbC50b2dnbGUoJGV2ZW50KVwiPkV4cGFuZCBQYW5lbDwvYnV0dG9uPlxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIHRvZ2dsZShldnQ/OiBFdmVudCkge1xuICAgICAgICBpZiAodGhpcy5jb2xsYXBzZWQpIHtcbiAgICAgICAgICAgIHRoaXMub3BlbihldnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jbG9zZShldnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb3BlbihldnQ/OiBFdmVudCkge1xuICAgICAgICB0aGlzLmV4cGFuZChldnQpO1xuICAgIH1cbiAgICBjbG9zZShldnQ/OiBFdmVudCkge1xuICAgICAgICB0aGlzLmNvbGxhcHNlKGV2dCk7XG4gICAgfVxuXG59XG4iXX0=