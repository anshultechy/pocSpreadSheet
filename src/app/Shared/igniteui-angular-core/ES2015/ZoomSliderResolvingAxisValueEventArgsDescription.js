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
export class ZoomSliderResolvingAxisValueEventArgsDescription extends Description {
    constructor() {
        super();
        this.f = 0;
        this.h = null;
    }
    get_type() {
        return "ZoomSliderResolvingAxisValueEventArgs";
    }
    get type() {
        return this.get_type();
    }
    get position() {
        return this.f;
    }
    set position(a) {
        this.f = a;
        this.e("Position");
    }
    get valueRef() {
        return this.h;
    }
    set valueRef(a) {
        this.h = a;
        this.e("ValueRef");
    }
}
ZoomSliderResolvingAxisValueEventArgsDescription.$t = markType(ZoomSliderResolvingAxisValueEventArgsDescription, 'ZoomSliderResolvingAxisValueEventArgsDescription', Description.$);
//# sourceMappingURL=ZoomSliderResolvingAxisValueEventArgsDescription.js.map