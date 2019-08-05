/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { EventEmitter, Injector, ComponentFactoryResolver, Component, Renderer2, ViewChild, NgZone, ChangeDetectionStrategy, ViewContainerRef } from '@angular/core';
var IgxComponentRendererContainerComponent = /** @class */ (function () {
    function IgxComponentRendererContainerComponent(_renderer, _elRef, _ngZone, _componentFactoryResolver, _injector) {
        this._renderer = _renderer;
        this._elRef = _elRef;
        this._ngZone = _ngZone;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._injector = _injector;
        this.listeners = [];
        this._currentRoot = null;
        this._currentRootRef = null;
    }
    IgxComponentRendererContainerComponent.isEvent = function (ev) {
        return ev instanceof EventEmitter;
    };
    IgxComponentRendererContainerComponent.prototype.replaceRootItem = function (t, continueActions) {
        if (this._currentRoot != null) {
            this._currentRoot;
        }
        var cf = this._componentFactoryResolver.resolveComponentFactory(t);
        var cr = this._dynamicContent.createComponent(cf);
        this._currentRootRef = cr;
        this._currentRoot = cr.instance;
        this._currentRoot.width = "100%";
        this._currentRoot.height = "100%";
        continueActions(false);
    };
    IgxComponentRendererContainerComponent.prototype.clearContainer = function (continueActions) {
        if (this._currentRootRef) {
            this._currentRootRef.destroy();
            this._currentRootRef = null;
            this._currentRoot = null;
        }
        continueActions(false);
    };
    IgxComponentRendererContainerComponent.prototype.getRootObject = function () {
        return this._currentRoot;
    };
    tslib_1.__decorate([
        ViewChild("dynamicContent", { read: ViewContainerRef, static: true }),
        tslib_1.__metadata("design:type", ViewContainerRef)
    ], IgxComponentRendererContainerComponent.prototype, "_dynamicContent", void 0);
    IgxComponentRendererContainerComponent = tslib_1.__decorate([
        Component({
            selector: 'igx-component-renderer-container',
            changeDetection: ChangeDetectionStrategy.OnPush,
            template: "\n    <ng-container #dynamicContent></ng-container>\n  ",
            styles: ["\n  :host {\n    display: block;\n  }"]
        }),
        tslib_1.__metadata("design:paramtypes", [Renderer2,
            ViewContainerRef,
            NgZone,
            ComponentFactoryResolver,
            Injector])
    ], IgxComponentRendererContainerComponent);
    return IgxComponentRendererContainerComponent;
}());
export { IgxComponentRendererContainerComponent };
//# sourceMappingURL=igx-component-renderer-container-component.js.map