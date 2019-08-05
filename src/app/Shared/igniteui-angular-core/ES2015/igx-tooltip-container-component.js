/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
var IgxTooltipContainerComponent_1;
import { Component, ViewChild, ChangeDetectionStrategy, TemplateRef, ChangeDetectorRef, Input } from '@angular/core';
import { IgxTemplateContentComponent } from './igx-template-content-component';
import { TypeRegistrar } from './type';
let IgxTooltipContainerComponent = IgxTooltipContainerComponent_1 = class IgxTooltipContainerComponent {
    constructor(_changeDetectorRef) {
        this._changeDetectorRef = _changeDetectorRef;
        this._template = null;
        this._containerTemplate = null;
        this._context = null;
    }
    set template(value) {
        this._template = value;
        if (this._context != null) {
            this._changeDetectorRef.detectChanges();
        }
    }
    get template() {
        return this._template;
    }
    set containerTemplate(value) {
        this._containerTemplate = value;
        if (this._context != null) {
            this._changeDetectorRef.detectChanges();
        }
    }
    get containerTemplate() {
        return this._containerTemplate;
    }
    set context(value) {
        this._context = value;
        this._changeDetectorRef.detectChanges();
        if (this._tooltipContent != null) {
            this._tooltipContent.markChanged();
        }
        //console.log("tool:" + this._tooltipContent != null);
    }
    get context() {
        return this._context;
    }
    static register() {
        TypeRegistrar.registerCons("IgxTooltipContainerComponent", IgxTooltipContainerComponent_1);
    }
};
tslib_1.__decorate([
    ViewChild(IgxTemplateContentComponent, { static: true }),
    tslib_1.__metadata("design:type", IgxTemplateContentComponent)
], IgxTooltipContainerComponent.prototype, "_tooltipContent", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", TemplateRef),
    tslib_1.__metadata("design:paramtypes", [TemplateRef])
], IgxTooltipContainerComponent.prototype, "template", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", TemplateRef),
    tslib_1.__metadata("design:paramtypes", [TemplateRef])
], IgxTooltipContainerComponent.prototype, "containerTemplate", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], IgxTooltipContainerComponent.prototype, "context", null);
IgxTooltipContainerComponent = IgxTooltipContainerComponent_1 = tslib_1.__decorate([
    Component({
        selector: 'igx-tooltip-container',
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: { class: "ig-tooltip-container igx-tooltip-container" },
        template: `
    <ng-template #defaultContainer>
        <div class='ig-tooltip-container-background' *ngIf="context !== null && context.item !== null"
            [style.border-color]="context && context.isSubContent ? 'transparent' : '#666'">
            <igx-template-content *ngIf="context !== null" [template]="template" [context]="context"></igx-template-content>
        </div>
    </ng-template>
    <ng-container *ngTemplateOutlet="containerTemplate ? containerTemplate : defaultContainer; context: context">
    </ng-container>
  `,
        styles: [`
        .ig-tooltip-container-background {
            padding: 5px; 
            padding: var(--tooltip-container-padding, 5px);
            background-color: white; 
            background-color: var(--tooltip-container-background-color, white);
            border-style: solid; 
            border-style: var(--tooltip-container-border-style, solid);
            border-width: 1px; 
            border-width: var(--tooltip-container-border-width, 1px);
            color: inherit; 
            color: var(--tooltip-container-text-color, inherit);
            pointer-events: none;
            white-space: nowrap;
        }
`]
    }),
    tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef])
], IgxTooltipContainerComponent);
export { IgxTooltipContainerComponent };
//# sourceMappingURL=igx-tooltip-container-component.js.map