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
export class ResponsivePhaseDescription extends Description {
    constructor() {
        super();
        this.h = null;
        this.f = 0;
    }
    get_type() {
        return "ResponsivePhase";
    }
    get type() {
        return this.get_type();
    }
    get name() {
        return this.h;
    }
    set name(a) {
        this.h = a;
        this.e("Name");
    }
    get delayMilliseconds() {
        return this.f;
    }
    set delayMilliseconds(a) {
        this.f = a;
        this.e("DelayMilliseconds");
    }
}
ResponsivePhaseDescription.$t = markType(ResponsivePhaseDescription, 'ResponsivePhaseDescription', Description.$);
//# sourceMappingURL=ResponsivePhaseDescription.js.map