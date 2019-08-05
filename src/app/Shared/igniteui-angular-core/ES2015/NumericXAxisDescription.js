/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { StraightNumericAxisBaseDescription } from "./StraightNumericAxisBaseDescription";
import { markType } from "./type";
/**
 * @hidden
 */
export class NumericXAxisDescription extends StraightNumericAxisBaseDescription {
    constructor() {
        super();
    }
    get_type() {
        return "NumericXAxis";
    }
}
NumericXAxisDescription.$t = markType(NumericXAxisDescription, 'NumericXAxisDescription', StraightNumericAxisBaseDescription.$);
//# sourceMappingURL=NumericXAxisDescription.js.map