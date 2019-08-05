/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { LegendBaseDescription } from "./LegendBaseDescription";
import { markType } from "./type";
/**
 * @hidden
 */
export class ItemLegendDescription extends LegendBaseDescription {
    constructor() {
        super();
        this.t = null;
        this.s = null;
    }
    get width() {
        return this.t;
    }
    set width(a) {
        this.t = a;
        this.e("Width");
    }
    get height() {
        return this.s;
    }
    set height(a) {
        this.s = a;
        this.e("Height");
    }
    get_type() {
        return "ItemLegend";
    }
}
ItemLegendDescription.$t = markType(ItemLegendDescription, 'ItemLegendDescription', LegendBaseDescription.$);
//# sourceMappingURL=ItemLegendDescription.js.map