/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, IDisposable_$type, BaseError, markType } from "../../igniteui-angular-core/ES2015/type";
/**
 * @hidden
 */
export class RendererContainer extends Base {
    constructor(a) {
        super();
        this._f = null;
        this._a = null;
        this._onReady = null;
        this._isDisposed = false;
        this._isReady = false;
        this._container = null;
        this._e = null;
        this._a = a;
    }
    dispose() {
        if (!this.isDisposed) {
            this.isDisposed = true;
            let a = this._e;
            if (a != null && a.parentNode != this._f) {
                if (a.parentNode != null) {
                    a.parentNode.removeChild(a);
                }
                if (this._f != null) {
                    this._f.appendChild(a);
                }
            }
            if (this._a != null) {
                this._a();
            }
        }
    }
    get onReady() {
        return this._onReady;
    }
    set onReady(a) {
        this._onReady = a;
    }
    get isDisposed() {
        return this._isDisposed;
    }
    set isDisposed(a) {
        this._isDisposed = a;
    }
    get isReady() {
        return this._isReady;
    }
    set isReady(a) {
        this._isReady = a;
    }
    get container() {
        return this._container;
    }
    set container(a) {
        this._container = a;
    }
    get containerElement() {
        return this._e;
    }
    set containerElement(a) {
        this._e = a;
    }
    initialize(a, b) {
        if (a == this.container && b == this.containerElement) {
            return;
        }
        if (this.containerElement != null) {
            throw new BaseError(0);
        }
        this.container = a;
        this._e = b;
        if (!this.isDisposed) {
            this._f = this._e.parentElement;
            if (this._e.parentNode != null) {
                this._e.parentNode.removeChild(this._e);
            }
            this.isReady = true;
            if (this.onReady != null) {
                this.onReady();
            }
        }
    }
}
RendererContainer.$t = markType(RendererContainer, 'RendererContainer', Base.$, [IDisposable_$type]);
//# sourceMappingURL=RendererContainer.js.map