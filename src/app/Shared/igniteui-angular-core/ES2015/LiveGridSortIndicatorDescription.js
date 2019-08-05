/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Description } from "./Description";
import { markType } from "./type";
/**
 * @hidden
 */
export class LiveGridSortIndicatorDescription extends Description {
    constructor() {
        super();
        this.l = null;
        this.f = false;
        this.i = 0;
        this.h = 0;
    }
    get_type() {
        return "LiveGridSortIndicator";
    }
    get type() {
        return this.get_type();
    }
    get sortDirection() {
        return this.l;
    }
    set sortDirection(a) {
        this.l = a;
        this.e("SortDirection");
    }
    get isAnimationEnabled() {
        return this.f;
    }
    set isAnimationEnabled(a) {
        this.f = a;
        this.e("IsAnimationEnabled");
    }
    get pixelScalingRatio() {
        return this.i;
    }
    set pixelScalingRatio(a) {
        this.i = a;
        this.e("PixelScalingRatio");
    }
    get actualPixelScalingRatio() {
        return this.h;
    }
    set actualPixelScalingRatio(a) {
        this.h = a;
        this.e("ActualPixelScalingRatio");
    }
}
LiveGridSortIndicatorDescription.$t = markType(LiveGridSortIndicatorDescription, 'LiveGridSortIndicatorDescription', Description.$);
//# sourceMappingURL=LiveGridSortIndicatorDescription.js.map