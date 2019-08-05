/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, markType } from "./type";
/**
 * @hidden
 */
export class AnimationState extends Base {
    constructor() {
        super(...arguments);
        this.e = 0;
        this.d = 0;
        this.i = null;
        this.g = 0;
        this.c = new Date();
        this.a = null;
        this.f = null;
        this.j = null;
        this.h = 0;
        this.b = false;
    }
}
AnimationState.$t = markType(AnimationState, 'AnimationState');
//# sourceMappingURL=AnimationState.js.map