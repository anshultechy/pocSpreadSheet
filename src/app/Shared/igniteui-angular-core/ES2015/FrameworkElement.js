/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { UIElement } from "./UIElement";
import { markType } from "./type";
/**
 * @hidden
 */
export class FrameworkElement extends UIElement {
    constructor() {
        super();
        this._name = null;
        this.m = 0;
        this.l = 0;
        this._visibility = 0;
        this._width = 0;
        this._height = 0;
        this.o = 0;
        this.n = 0;
        this.s = 0;
        this.x = null;
        this._dataContext = null;
        this._opacity = 1;
        this.y = null;
        this._opacity = 1;
        this.s = 0;
        this._visibility = 0;
        this.width = NaN;
        this.height = NaN;
    }
    get name() {
        return this._name;
    }
    set name(a) {
        this._name = a;
    }
    get visibility() {
        return this._visibility;
    }
    set visibility(a) {
        if (this._visibility != a) {
            let b = this._visibility;
            this._visibility = a;
            this.w(b, this._visibility);
        }
    }
    w(a, b) {
    }
    get width() {
        return this._width;
    }
    set width(a) {
        this._width = a;
    }
    get height() {
        return this._height;
    }
    set height(a) {
        this._height = a;
    }
    get dataContext() {
        return this._dataContext;
    }
    set dataContext(a) {
        this._dataContext = a;
    }
    get opacity() {
        return this._opacity;
    }
    set opacity(a) {
        if (this._opacity != a) {
            this._opacity = a;
            this.v();
        }
    }
    v() {
    }
}
FrameworkElement.$t = markType(FrameworkElement, 'FrameworkElement', UIElement.$);
//# sourceMappingURL=FrameworkElement.js.map