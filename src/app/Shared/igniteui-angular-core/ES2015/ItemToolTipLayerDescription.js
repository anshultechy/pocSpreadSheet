/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { AnnotationLayerDescription } from "./AnnotationLayerDescription";
import { markType } from "./type";
/**
 * @hidden
 */
export class ItemToolTipLayerDescription extends AnnotationLayerDescription {
    constructor() {
        super();
        this.b3 = false;
        this.b2 = false;
    }
    get_type() {
        return "ItemToolTipLayer";
    }
    get useInterpolation() {
        return this.b3;
    }
    set useInterpolation(a) {
        this.b3 = a;
        this.e("UseInterpolation");
    }
    get skipUnknownValues() {
        return this.b2;
    }
    set skipUnknownValues(a) {
        this.b2 = a;
        this.e("SkipUnknownValues");
    }
}
ItemToolTipLayerDescription.$t = markType(ItemToolTipLayerDescription, 'ItemToolTipLayerDescription', AnnotationLayerDescription.$);
//# sourceMappingURL=ItemToolTipLayerDescription.js.map