/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { ScatterBaseDescription } from "./ScatterBaseDescription";
import { markType } from "./type";
/**
 * @hidden
 */
export class BubbleSeriesDescription extends ScatterBaseDescription {
    constructor() {
        super();
        this.c0 = null;
        this.cw = null;
        this.cz = null;
        this.cy = null;
        this.cu = null;
    }
    get_type() {
        return "BubbleSeries";
    }
    get radiusMemberPath() {
        return this.c0;
    }
    set radiusMemberPath(a) {
        this.c0 = a;
        this.e("RadiusMemberPath");
    }
    get radiusScale() {
        return this.cw;
    }
    set radiusScale(a) {
        this.cw = a;
        this.e("RadiusScale");
    }
    get labelMemberPath() {
        return this.cz;
    }
    set labelMemberPath(a) {
        this.cz = a;
        this.e("LabelMemberPath");
    }
    get fillMemberPath() {
        return this.cy;
    }
    set fillMemberPath(a) {
        this.cy = a;
        this.e("FillMemberPath");
    }
    get fillScale() {
        return this.cu;
    }
    set fillScale(a) {
        this.cu = a;
        this.e("FillScale");
    }
}
BubbleSeriesDescription.$t = markType(BubbleSeriesDescription, 'BubbleSeriesDescription', ScatterBaseDescription.$);
//# sourceMappingURL=BubbleSeriesDescription.js.map