/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { HorizontalAnchoredCategorySeriesDescription } from "./HorizontalAnchoredCategorySeriesDescription";
import { markType } from "./type";
/**
 * @hidden
 */
export class AreaSeriesDescription extends HorizontalAnchoredCategorySeriesDescription {
    constructor() {
        super();
        this.c4 = null;
    }
    get_type() {
        return "AreaSeries";
    }
    get unknownValuePlotting() {
        return this.c4;
    }
    set unknownValuePlotting(a) {
        this.c4 = a;
        this.e("UnknownValuePlotting");
    }
}
AreaSeriesDescription.$t = markType(AreaSeriesDescription, 'AreaSeriesDescription', HorizontalAnchoredCategorySeriesDescription.$);
//# sourceMappingURL=AreaSeriesDescription.js.map