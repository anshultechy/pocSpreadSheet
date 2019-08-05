/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
var IgxSimpleDefaultTooltipComponent_1;
import { Component, EventEmitter, Output, ViewChild, ChangeDetectionStrategy, TemplateRef, ChangeDetectorRef } from '@angular/core';
import { TypeRegistrar } from "../../igniteui-angular-core/ES2015/type";
let IgxSimpleDefaultTooltipComponent = IgxSimpleDefaultTooltipComponent_1 = class IgxSimpleDefaultTooltipComponent {
    constructor(_changeDetectorRef) {
        this._changeDetectorRef = _changeDetectorRef;
        this.onContentReady = new EventEmitter();
    }
    ensureDefaultTooltip(gauge) {
        if (gauge.showToolTip) {
            gauge.tooltipTemplate = this.tooltip;
        }
        else {
            gauge.tooltipTemplate = null;
        }
    }
    getLabel(context) {
        if (context.itemName == null) {
            let label = context.label.split(":");
            return label.length < 2 ? context.label : label[1].trim();
        }
        return context.label;
    }
    ngAfterContentInit() {
        this.onContentReady.emit({});
    }
    static register() {
        TypeRegistrar.registerCons("IgxSimpleDefaultTooltipComponent", IgxSimpleDefaultTooltipComponent_1);
    }
};
tslib_1.__decorate([
    ViewChild("tooltip", { static: true }),
    tslib_1.__metadata("design:type", TemplateRef)
], IgxSimpleDefaultTooltipComponent.prototype, "tooltip", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], IgxSimpleDefaultTooltipComponent.prototype, "onContentReady", void 0);
IgxSimpleDefaultTooltipComponent = IgxSimpleDefaultTooltipComponent_1 = tslib_1.__decorate([
    Component({
        selector: 'igx-simple-default-tooltips',
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: `  
  <ng-template #tooltip let-context="i" >
    <div class='ui-simple-default-tooltip-content' *ngIf="context">
        <span  style="white-space: nowrap;font-weight: bold;" >{{getLabel(context)}}</span>
    </div>
  </ng-template>
  `,
        styles: []
    }),
    tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef])
], IgxSimpleDefaultTooltipComponent);
export { IgxSimpleDefaultTooltipComponent };
//# sourceMappingURL=igx-simple-default-tooltip-component.js.map