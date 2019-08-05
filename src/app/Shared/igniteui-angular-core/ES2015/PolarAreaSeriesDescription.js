/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { PolarLineSeriesBaseDescription } from "./PolarLineSeriesBaseDescription";
import { markType } from "./type";
/**
 * @hidden
 */
export class PolarAreaSeriesDescription extends PolarLineSeriesBaseDescription {
    constructor() {
        super();
        this.cw = null;
    }
    get_type() {
        return "PolarAreaSeries";
    }
    get unknownValuePlotting() {
        return this.cw;
    }
    set unknownValuePlotting(a) {
        this.cw = a;
        this.e("UnknownValuePlotting");
    }
}
PolarAreaSeriesDescription.$t = markType(PolarAreaSeriesDescription, 'PolarAreaSeriesDescription', PolarLineSeriesBaseDescription.$);
//# sourceMappingURL=PolarAreaSeriesDescription.js.map