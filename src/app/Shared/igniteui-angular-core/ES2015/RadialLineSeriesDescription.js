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
export class RadialLineSeriesDescription extends AnchoredRadialSeriesDescription {
    constructor() {
        super();
        this.cq = null;
    }
    get_type() {
        return "RadialLineSeries";
    }
    get unknownValuePlotting() {
        return this.cq;
    }
    set unknownValuePlotting(a) {
        this.cq = a;
        this.e("UnknownValuePlotting");
    }
}
RadialLineSeriesDescription.$t = markType(RadialLineSeriesDescription, 'RadialLineSeriesDescription', AnchoredRadialSeriesDescription.$);
//# sourceMappingURL=RadialLineSeriesDescription.js.map