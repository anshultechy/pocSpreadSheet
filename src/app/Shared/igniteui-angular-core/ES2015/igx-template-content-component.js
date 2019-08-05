/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Component, ChangeDetectionStrategy, TemplateRef, ChangeDetectorRef, Input, ViewContainerRef } from '@angular/core';
let IgxTemplateContentComponent = class IgxTemplateContentComponent {
    constructor(_changeDetectorRef, viewContainer) {
        this._changeDetectorRef = _changeDetectorRef;
        this.viewContainer = viewContainer;
        this._template = null;
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
    set context(value) {
        if (this._context == null && value == null) {
            return;
        }
        this._context = value;
        this._changeDetectorRef.detectChanges();
    }
    get context() {
        return this._context;
    }
    markChanged() {
        this._changeDetectorRef.detectChanges();
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", TemplateRef),
    tslib_1.__metadata("design:paramtypes", [TemplateRef])
], IgxTemplateContentComponent.prototype, "template", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], IgxTemplateContentComponent.prototype, "context", null);
IgxTemplateContentComponent = tslib_1.__decorate([
    Component({
        selector: 'igx-template-content',
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: `
    <ng-template #defaultTemplate>
        <div></div>
    </ng-template>
    <ng-container *ngTemplateOutlet="template ? template : defaultTemplate; context: context">
    </ng-container>
  `,
        host: { class: "ig-template-content igx-template-content" },
        styles: [`
  :host {
    display: block;
  }
`]
    }),
    tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ViewContainerRef])
], IgxTemplateContentComponent);
export { IgxTemplateContentComponent };
//# sourceMappingURL=igx-template-content-component.js.map