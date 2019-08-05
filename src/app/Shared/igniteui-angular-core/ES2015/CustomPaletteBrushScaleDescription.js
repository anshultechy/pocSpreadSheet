/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { BrushScaleDescription } from "./BrushScaleDescription";
import { markType } from "./type";
/**
 * @hidden
 */
export class CustomPaletteBrushScaleDescription extends BrushScaleDescription {
    constructor() {
        super();
        this.k = null;
    }
    get_type() {
        return "CustomPaletteBrushScale";
    }
    get brushSelectionMode() {
        return this.k;
    }
    set brushSelectionMode(a) {
        this.k = a;
        this.e("BrushSelectionMode");
    }
}
CustomPaletteBrushScaleDescription.$t = markType(CustomPaletteBrushScaleDescription, 'CustomPaletteBrushScaleDescription', BrushScaleDescription.$);
//# sourceMappingURL=CustomPaletteBrushScaleDescription.js.map