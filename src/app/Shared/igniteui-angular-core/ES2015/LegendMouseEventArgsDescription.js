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
export class LegendMouseEventArgsDescription extends Description {
    constructor() {
        super();
        this.f = null;
        this.g = null;
    }
    get_type() {
        return "LegendMouseEventArgs";
    }
    get type() {
        return this.get_type();
    }
    get itemRef() {
        return this.f;
    }
    set itemRef(a) {
        this.f = a;
        this.e("ItemRef");
    }
    get legendItemRef() {
        return this.g;
    }
    set legendItemRef(a) {
        this.g = a;
        this.e("LegendItemRef");
    }
}
LegendMouseEventArgsDescription.$t = markType(LegendMouseEventArgsDescription, 'LegendMouseEventArgsDescription', Description.$);
//# sourceMappingURL=LegendMouseEventArgsDescription.js.map