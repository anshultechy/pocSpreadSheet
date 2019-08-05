/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, markType } from "../../igniteui-angular-core/ES2015/type";
import { CoreUtilities } from "./CoreUtilities";
import { StringComparer } from "../../igniteui-angular-core/ES2015/StringComparer";
import { ISupportPositioning_$type } from "./ISupportPositioning";
/**
 * @hidden
 */
export class ElementLayerInfo extends Base {
    constructor(a, ..._rest) {
        super();
        this.f = null;
        this.b = null;
        this.a = null;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    let e = _rest[2];
                    let f = [c, d, e, null, null];
                    {
                        let h = f[0];
                        let i = f[1];
                        let j = f[2];
                        let k = f[3];
                        let l = f[4];
                        CoreUtilities.z(h, "identifier");
                        this.f = h;
                        this.b = new ElementLayerInfo_ElementOrderInfo(this, j, i);
                        this.a = new ElementLayerInfo_ElementOrderInfo(this, k, l);
                    }
                }
                break;
            case 1:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    let e = _rest[2];
                    let f = _rest[3];
                    let g = _rest[4];
                    CoreUtilities.z(c, "identifier");
                    this.f = c;
                    this.b = new ElementLayerInfo_ElementOrderInfo(this, e, d);
                    this.a = new ElementLayerInfo_ElementOrderInfo(this, f, g);
                }
                break;
        }
    }
    get g() {
        return this.f;
    }
    get c() {
        return this.a;
    }
    get d() {
        return this.b;
    }
}
ElementLayerInfo.$t = markType(ElementLayerInfo, 'ElementLayerInfo');
ElementLayerInfo.e = StringComparer.e;
/**
 * @hidden
 */
export class ElementLayerInfo_ElementOrderInfo extends Base {
    constructor(a, b, c) {
        super();
        this.a = null;
        this.c = null;
        this.b = null;
        this.a = a;
        this.c = b;
        this.b = c;
    }
    get after() {
        return this.b;
    }
    get before() {
        return this.c;
    }
    get key() {
        return this.a.f;
    }
}
ElementLayerInfo_ElementOrderInfo.$t = markType(ElementLayerInfo_ElementOrderInfo, 'ElementLayerInfo_ElementOrderInfo', Base.$, [ISupportPositioning_$type]);
//# sourceMappingURL=ElementLayerInfo_combined.js.map
