/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { ItemwiseStrategyBasedIndicatorDescription } from "./ItemwiseStrategyBasedIndicatorDescription";
import { markType } from "./type";
/**
 * @hidden
 */
export class WeightedCloseIndicatorDescription extends ItemwiseStrategyBasedIndicatorDescription {
    constructor() {
        super();
    }
    get_type() {
        return "WeightedCloseIndicator";
    }
}
WeightedCloseIndicatorDescription.$t = markType(WeightedCloseIndicatorDescription, 'WeightedCloseIndicatorDescription', ItemwiseStrategyBasedIndicatorDescription.$);
//# sourceMappingURL=WeightedCloseIndicatorDescription.js.map