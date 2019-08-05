/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { StrategyBasedIndicatorDescription } from "./StrategyBasedIndicatorDescription";
import { markType } from "./type";
/**
 * @hidden
 */
export class EaseOfMovementIndicatorDescription extends StrategyBasedIndicatorDescription {
    constructor() {
        super();
    }
    get_type() {
        return "EaseOfMovementIndicator";
    }
}
EaseOfMovementIndicatorDescription.$t = markType(EaseOfMovementIndicatorDescription, 'EaseOfMovementIndicatorDescription', StrategyBasedIndicatorDescription.$);
//# sourceMappingURL=EaseOfMovementIndicatorDescription.js.map