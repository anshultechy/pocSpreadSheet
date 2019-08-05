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
export class AxisRangeChangedEventArgsDescription extends Description {
    constructor() {
        super();
        this.i = 0;
        this.g = 0;
        this.h = 0;
        this.f = 0;
    }
    get_type() {
        return "AxisRangeChangedEventArgs";
    }
    get type() {
        return this.get_type();
    }
    get oldMinimumValue() {
        return this.i;
    }
    set oldMinimumValue(a) {
        this.i = a;
        this.e("OldMinimumValue");
    }
    get minimumValue() {
        return this.g;
    }
    set minimumValue(a) {
        this.g = a;
        this.e("MinimumValue");
    }
    get oldMaximumValue() {
        return this.h;
    }
    set oldMaximumValue(a) {
        this.h = a;
        this.e("OldMaximumValue");
    }
    get maximumValue() {
        return this.f;
    }
    set maximumValue(a) {
        this.f = a;
        this.e("MaximumValue");
    }
}
AxisRangeChangedEventArgsDescription.$t = markType(AxisRangeChangedEventArgsDescription, 'AxisRangeChangedEventArgsDescription', Description.$);
//# sourceMappingURL=AxisRangeChangedEventArgsDescription.js.map