/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { CategoryXAxisDescription } from "./CategoryXAxisDescription";
import { markType } from "./type";
/**
 * @hidden
 */
export class OrdinalTimeXAxisDescription extends CategoryXAxisDescription {
    constructor() {
        super();
        this.dm = null;
        this.dj = new Date();
        this.di = new Date();
    }
    get_type() {
        return "OrdinalTimeXAxis";
    }
    get dateTimeMemberPath() {
        return this.dm;
    }
    set dateTimeMemberPath(a) {
        this.dm = a;
        this.e("DateTimeMemberPath");
    }
    get minimumValue() {
        return this.dj;
    }
    set minimumValue(a) {
        this.dj = a;
        this.e("MinimumValue");
    }
    get maximumValue() {
        return this.di;
    }
    set maximumValue(a) {
        this.di = a;
        this.e("MaximumValue");
    }
}
OrdinalTimeXAxisDescription.$t = markType(OrdinalTimeXAxisDescription, 'OrdinalTimeXAxisDescription', CategoryXAxisDescription.$);
//# sourceMappingURL=OrdinalTimeXAxisDescription.js.map