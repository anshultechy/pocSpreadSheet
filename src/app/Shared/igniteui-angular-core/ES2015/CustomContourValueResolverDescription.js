/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { ContourValueResolverDescription } from "./ContourValueResolverDescription";
import { markType } from "./type";
/**
 * @hidden
 */
export class CustomContourValueResolverDescription extends ContourValueResolverDescription {
    constructor() {
        super();
        this.g = null;
    }
    get_type() {
        return "CustomContourValueResolver";
    }
    get GetCustomContourValuesRef() {
        return this.g;
    }
    set GetCustomContourValuesRef(a) {
        this.g = a;
        this.e("GetCustomContourValuesRef");
    }
}
CustomContourValueResolverDescription.$t = markType(CustomContourValueResolverDescription, 'CustomContourValueResolverDescription', ContourValueResolverDescription.$);
//# sourceMappingURL=CustomContourValueResolverDescription.js.map