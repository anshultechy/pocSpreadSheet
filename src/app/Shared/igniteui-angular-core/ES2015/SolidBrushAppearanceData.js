/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { BrushAppearanceData } from "./BrushAppearanceData";
import { markType } from "./type";
/**
 * @hidden
 */
export class SolidBrushAppearanceData extends BrushAppearanceData {
    constructor() {
        super(...arguments);
        this._colorValue = null;
    }
    get_type() {
        return "solid";
    }
    get type() {
        return this.get_type();
    }
    get colorValue() {
        return this._colorValue;
    }
    set colorValue(a) {
        this._colorValue = a;
    }
    a() {
        return "colorValue: " + (this.colorValue != null ? this.colorValue.serialize() : "null");
    }
}
SolidBrushAppearanceData.$t = markType(SolidBrushAppearanceData, 'SolidBrushAppearanceData', BrushAppearanceData.$);
//# sourceMappingURL=SolidBrushAppearanceData.js.map