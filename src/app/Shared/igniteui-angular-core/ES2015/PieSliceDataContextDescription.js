/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { DataContextDescription } from "./DataContextDescription";
import { markType } from "./type";
/**
 * @hidden
 */
export class PieSliceDataContextDescription extends DataContextDescription {
    constructor() {
        super();
        this.w = 0;
        this.u = false;
    }
    get_type() {
        return "PieSliceDataContext";
    }
    get percentValue() {
        return this.w;
    }
    set percentValue(a) {
        this.w = a;
        this.e("PercentValue");
    }
    get isOthersSlice() {
        return this.u;
    }
    set isOthersSlice(a) {
        this.u = a;
        this.e("IsOthersSlice");
    }
}
PieSliceDataContextDescription.$t = markType(PieSliceDataContextDescription, 'PieSliceDataContextDescription', DataContextDescription.$);
//# sourceMappingURL=PieSliceDataContextDescription.js.map