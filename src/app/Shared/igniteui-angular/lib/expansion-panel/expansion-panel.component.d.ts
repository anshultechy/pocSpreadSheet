import { ChangeDetectorRef, EventEmitter, AfterContentInit } from '@angular/core';
import { AnimationBuilder, AnimationReferenceMetadata } from '@angular/animations';
import { IgxExpansionPanelBodyComponent } from './expansion-panel-body.component';
import { IgxExpansionPanelHeaderComponent } from './expansion-panel-header.component';
import { IgxExpansionPanelBase, IExpansionPanelEventArgs } from './expansion-panel.common';
export interface AnimationSettings {
    openAnimation: AnimationReferenceMetadata;
    closeAnimation: AnimationReferenceMetadata;
}
export declare class IgxExpansionPanelComponent implements IgxExpansionPanelBase, AfterContentInit {
    private cdr;
    private builder;
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
    animationSettings: AnimationSettings;
    /**
     * Sets/gets the `id` of the expansion panel component.
     * If not set, `id` will have value `"igx-expansion-panel-0"`;
     * ```html
     * <igx-expansion-panel id = "my-first-expansion-panel"></igx-expansion-panel>
     * ```
     * ```typescript
     * let panelId =  this.panel.id;
     * ```
     * @memberof IgxExpansionPanelComponent
     */
    id: string;
    /**
     * @hidden
     */
    cssClass: string;
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
    collapsed: boolean;
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
    onCollapsed: EventEmitter<IExpansionPanelEventArgs>;
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
    onExpanded: EventEmitter<IExpansionPanelEventArgs>;
    /**
     * @hidden
     */
    readonly headerId: string;
    /**
     * @hidden
     */
    body: IgxExpansionPanelBodyComponent;
    /**
     * @hidden
     */
    header: IgxExpansionPanelHeaderComponent;
    constructor(cdr: ChangeDetectorRef, builder: AnimationBuilder);
    /** @hidden */
    ngAfterContentInit(): void;
    private playOpenAnimation;
    private playCloseAnimation;
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
    collapse(evt?: Event): void;
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
    expand(evt?: Event): void;
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
    toggle(evt?: Event): void;
    open(evt?: Event): void;
    close(evt?: Event): void;
}