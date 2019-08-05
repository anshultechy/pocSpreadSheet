/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { MarkerSeriesDescription } from "./MarkerSeriesDescription";
import { markType } from "./type";
/**
 * @hidden
 */
export class RadialBaseDescription extends MarkerSeriesDescription {
    constructor() {
        super();
        this.b8 = null;
        this.b9 = null;
        this.b6 = false;
    }
    get_type() {
        return "RadialBase";
    }
    get angleAxisRef() {
        return this.b8;
    }
    set angleAxisRef(a) {
        this.b8 = a;
        this.e("AngleAxisRef");
    }
    get valueAxisRef() {
        return this.b9;
    }
    set valueAxisRef(a) {
        this.b9 = a;
        this.e("ValueAxisRef");
    }
    get clipSeriesToBounds() {
        return this.b6;
    }
    set clipSeriesToBounds(a) {
        this.b6 = a;
        this.e("ClipSeriesToBounds");
    }
}
RadialBaseDescription.$t = markType(RadialBaseDescription, 'RadialBaseDescription', MarkerSeriesDescription.$);
//# sourceMappingURL=RadialBaseDescription.js.map