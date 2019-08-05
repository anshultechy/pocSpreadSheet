/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { HorizontalStackedSeriesBaseDescription } from "./HorizontalStackedSeriesBaseDescription";
import { markType } from "./type";
/**
 * @hidden
 */
export class StackedColumnSeriesDescription extends HorizontalStackedSeriesBaseDescription {
    constructor() {
        super();
        this.cw = 0;
        this.cx = 0;
    }
    get_type() {
        return "StackedColumnSeries";
    }
    get radiusX() {
        return this.cw;
    }
    set radiusX(a) {
        this.cw = a;
        this.e("RadiusX");
    }
    get radiusY() {
        return this.cx;
    }
    set radiusY(a) {
        this.cx = a;
        this.e("RadiusY");
    }
}
StackedColumnSeriesDescription.$t = markType(StackedColumnSeriesDescription, 'StackedColumnSeriesDescription', HorizontalStackedSeriesBaseDescription.$);
//# sourceMappingURL=StackedColumnSeriesDescription.js.map