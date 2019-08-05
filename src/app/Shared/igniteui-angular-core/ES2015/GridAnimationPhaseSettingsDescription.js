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
export class GridAnimationPhaseSettingsDescription extends Description {
    constructor() {
        super();
        this.i = 0;
        this.j = 0;
        this.k = 0;
        this.l = 0;
        this.h = 0;
        this.f = false;
        this.r = null;
    }
    get_type() {
        return "GridAnimationPhaseSettings";
    }
    get type() {
        return this.get_type();
    }
    get durationMilliseconds() {
        return this.i;
    }
    set durationMilliseconds(a) {
        this.i = a;
        this.e("DurationMilliseconds");
    }
    get holdInitialMilliseconds() {
        return this.j;
    }
    set holdInitialMilliseconds(a) {
        this.j = a;
        this.e("HoldInitialMilliseconds");
    }
    get perItemDelayMilliseconds() {
        return this.k;
    }
    set perItemDelayMilliseconds(a) {
        this.k = a;
        this.e("PerItemDelayMilliseconds");
    }
    get subItemDurationMilliseconds() {
        return this.l;
    }
    set subItemDurationMilliseconds(a) {
        this.l = a;
        this.e("SubItemDurationMilliseconds");
    }
    get desiredSubItemDurationMilliseconds() {
        return this.h;
    }
    set desiredSubItemDurationMilliseconds(a) {
        this.h = a;
        this.e("DesiredSubItemDurationMilliseconds");
    }
    get shouldItemsFinishSimultaneously() {
        return this.f;
    }
    set shouldItemsFinishSimultaneously(a) {
        this.f = a;
        this.e("ShouldItemsFinishSimultaneously");
    }
    get easingFunctionType() {
        return this.r;
    }
    set easingFunctionType(a) {
        this.r = a;
        this.e("EasingFunctionType");
    }
}
GridAnimationPhaseSettingsDescription.$t = markType(GridAnimationPhaseSettingsDescription, 'GridAnimationPhaseSettingsDescription', Description.$);
//# sourceMappingURL=GridAnimationPhaseSettingsDescription.js.map