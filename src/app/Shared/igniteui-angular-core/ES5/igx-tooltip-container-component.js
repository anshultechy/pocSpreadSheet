/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Component, ViewChild, ChangeDetectionStrategy, TemplateRef, ChangeDetectorRef, Input } from '@angular/core';
import { IgxTemplateContentComponent } from './igx-template-content-component';
import { TypeRegistrar } from './type';
var IgxTooltipContainerComponent = /** @class */ (function () {
    function IgxTooltipContainerComponent(_changeDetectorRef) {
        this._changeDetectorRef = _changeDetectorRef;
        this._template = null;
        this._containerTemplate = null;
        this._context = null;
    }
    IgxTooltipContainerComponent_1 = IgxTooltipContainerComponent;
    Object.defineProperty(IgxTooltipContainerComponent.prototype, "template", {
        get: function () {
            return this._template;
        },
        set: function (value) {
            this._template = value;
            if (this._context != null) {
                this._changeDetectorRef.detectChanges();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxTooltipContainerComponent.prototype, "containerTemplate", {
        get: function () {
            return this._containerTemplate;
        },
        set: function (value) {
            this._containerTemplate = value;
            if (this._context != null) {
                this._changeDetectorRef.detectChanges();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IgxTooltipContainerComponent.prototype, "context", {
        get: function () {
            return this._context;
        },
        set: function (value) {
            this._context = value;
            this._changeDetectorRef.detectChanges();
            if (this._tooltipContent != null) {
                this._tooltipContent.markChanged();
            }
            //console.log("tool:" + this._tooltipContent != null);
        },
        enumerable: true,
        configurable: true
    });
    IgxTooltipContainerComponent.register = function () {
        TypeRegistrar.registerCons("IgxTooltipContainerComponent", IgxTooltipContainerComponent_1);
    };
    var IgxTooltipContainerComponent_1;
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
            template: "\n    <ng-template #defaultContainer>\n        <div class='ig-tooltip-container-background' *ngIf=\"context !== null && context.item !== null\"\n            [style.border-color]=\"context && context.isSubContent ? 'transparent' : '#666'\">\n            <igx-template-content *ngIf=\"context !== null\" [template]=\"template\" [context]=\"context\"></igx-template-content>\n        </div>\n    </ng-template>\n    <ng-container *ngTemplateOutlet=\"containerTemplate ? containerTemplate : defaultContainer; context: context\">\n    </ng-container>\n  ",
            styles: ["\n        .ig-tooltip-container-background {\n            padding: 5px; \n            padding: var(--tooltip-container-padding, 5px);\n            background-color: white; \n            background-color: var(--tooltip-container-background-color, white);\n            border-style: solid; \n            border-style: var(--tooltip-container-border-style, solid);\n            border-width: 1px; \n            border-width: var(--tooltip-container-border-width, 1px);\n            color: inherit; \n            color: var(--tooltip-container-text-color, inherit);\n            pointer-events: none;\n            white-space: nowrap;\n        }\n"]
        }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef])
    ], IgxTooltipContainerComponent);
    return IgxTooltipContainerComponent;
}());
export { IgxTooltipContainerComponent };
//# sourceMappingURL=igx-tooltip-container-component.js.map