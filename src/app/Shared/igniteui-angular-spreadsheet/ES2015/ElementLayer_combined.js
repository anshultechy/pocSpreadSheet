/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, IDisposable_$type, Type, markType } from "../../igniteui-angular-core/ES2015/type";
import { CoreUtilities } from "./CoreUtilities";
/**
 * @hidden
 */
export class ElementLayer extends Base {
    constructor(a, b) {
        super();
        this._a = null;
        this._c = null;
        CoreUtilities.y(a);
        CoreUtilities.y(b);
        this._a = a;
        this._c = b;
    }
    get _b() {
        return this._a;
    }
    get _d() {
        return this._c;
    }
    _e() {
        this._c.invalidateArrange();
    }
    _f() {
        this._c.invalidateMeasure();
    }
    dispose() {
    }
}
ElementLayer.$t = markType(ElementLayer, 'ElementLayer', Base.$, [IDisposable_$type]);
/**
 * @hidden
 */
export let IElementLayerView_$type = new Type(null, 'IElementLayerView');
//# sourceMappingURL=ElementLayer_combined.js.map
