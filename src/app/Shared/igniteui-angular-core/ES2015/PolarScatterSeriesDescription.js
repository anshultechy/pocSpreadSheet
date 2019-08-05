/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { PolarBaseDescription } from "./PolarBaseDescription";
import { markType } from "./type";
/**
 * @hidden
 */
export class PolarScatterSeriesDescription extends PolarBaseDescription {
    constructor() {
        super();
    }
    get_type() {
        return "PolarScatterSeries";
    }
}
PolarScatterSeriesDescription.$t = markType(PolarScatterSeriesDescription, 'PolarScatterSeriesDescription', PolarBaseDescription.$);
//# sourceMappingURL=PolarScatterSeriesDescription.js.map