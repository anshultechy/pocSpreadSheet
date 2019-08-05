/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { EventEmitter, Injector, ComponentFactoryResolver, Component, Renderer2, ViewChild, NgZone, ChangeDetectionStrategy, ViewContainerRef } from '@angular/core';
let IgxComponentRendererContainerComponent = class IgxComponentRendererContainerComponent {
    constructor(_renderer, _elRef, _ngZone, _componentFactoryResolver, _injector) {
        this._renderer = _renderer;
        this._elRef = _elRef;
        this._ngZone = _ngZone;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._injector = _injector;
        this.listeners = [];
        this._currentRoot = null;
        this._currentRootRef = null;
    }
    static isEvent(ev) {
        return ev instanceof EventEmitter;
    }
    replaceRootItem(t, continueActions) {
        if (this._currentRoot != null) {
            this._currentRoot;
        }
        let cf = this._componentFactoryResolver.resolveComponentFactory(t);
        let cr = this._dynamicContent.createComponent(cf);
        this._currentRootRef = cr;
        this._currentRoot = cr.instance;
        this._currentRoot.width = "100%";
        this._currentRoot.height = "100%";
        continueActions(false);
    }
    clearContainer(continueActions) {
        if (this._currentRootRef) {
            this._currentRootRef.destroy();
            this._currentRootRef = null;
            this._currentRoot = null;
        }
        continueActions(false);
    }
    getRootObject() {
        return this._currentRoot;
    }
};
tslib_1.__decorate([
    ViewChild("dynamicContent", { read: ViewContainerRef, static: true }),
    tslib_1.__metadata("design:type", ViewContainerRef)
], IgxComponentRendererContainerComponent.prototype, "_dynamicContent", void 0);
IgxComponentRendererContainerComponent = tslib_1.__decorate([
    Component({
        selector: 'igx-component-renderer-container',
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: `
    <ng-container #dynamicContent></ng-container>
  `,
        styles: [`
  :host {
    display: block;
  }`]
    }),
    tslib_1.__metadata("design:paramtypes", [Renderer2,
        ViewContainerRef,
        NgZone,
        ComponentFactoryResolver,
        Injector])
], IgxComponentRendererContainerComponent);
export { IgxComponentRendererContainerComponent };
//# sourceMappingURL=igx-component-renderer-container-component.js.map