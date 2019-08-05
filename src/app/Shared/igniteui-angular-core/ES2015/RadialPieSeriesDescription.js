/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { AnchoredRadialSeriesDescription } from "./AnchoredRadialSeriesDescription";
import { markType } from "./type";
/**
 * @hidden
 */
export class RadialPieSeriesDescription extends AnchoredRadialSeriesDescription {
    constructor() {
        super();
        this.cq = 0;
        this.cr = 0;
    }
    get_type() {
        return "RadialPieSeries";
    }
    get radiusX() {
        return this.cq;
    }
    set radiusX(a) {
        this.cq = a;
        this.e("RadiusX");
    }
    get radiusY() {
        return this.cr;
    }
    set radiusY(a) {
        this.cr = a;
        this.e("RadiusY");
    }
}
RadialPieSeriesDescription.$t = markType(RadialPieSeriesDescription, 'RadialPieSeriesDescription', AnchoredRadialSeriesDescription.$);
//# sourceMappingURL=RadialPieSeriesDescription.js.map