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
export class LiveGridFilterDialogDescription extends Description {
    constructor() {
        super();
        this.f = false;
        this.i = 0;
        this.h = 0;
        this.l = null;
        this.n = null;
        this.m = null;
    }
    get_type() {
        return "LiveGridFilterDialog";
    }
    get type() {
        return this.get_type();
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
    get DialogOpeningRef() {
        return this.l;
    }
    set DialogOpeningRef(a) {
        this.l = a;
        this.e("DialogOpeningRef");
    }
    get FilterChangingRef() {
        return this.n;
    }
    set FilterChangingRef(a) {
        this.n = a;
        this.e("FilterChangingRef");
    }
    get FilterChangedRef() {
        return this.m;
    }
    set FilterChangedRef(a) {
        this.m = a;
        this.e("FilterChangedRef");
    }
}
LiveGridFilterDialogDescription.$t = markType(LiveGridFilterDialogDescription, 'LiveGridFilterDialogDescription', Description.$);
//# sourceMappingURL=LiveGridFilterDialogDescription.js.map