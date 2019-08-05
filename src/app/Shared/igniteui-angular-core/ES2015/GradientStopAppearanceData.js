/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, markType } from "./type";
import { IVisualData_$type } from "./IVisualData";
/**
 * @hidden
 */
export class GradientStopAppearanceData extends Base {
    constructor() {
        super(...arguments);
        this._colorValue = null;
        this._offset = 0;
    }
    get colorValue() {
        return this._colorValue;
    }
    set colorValue(a) {
        this._colorValue = a;
    }
    get offset() {
        return this._offset;
    }
    set offset(a) {
        this._offset = a;
    }
    serialize() {
        return "{ " + "colorValue: " + (this.colorValue != null ? this.colorValue.serialize() : "null") + ", offset: " + this.offset + " }";
    }
}
GradientStopAppearanceData.$t = markType(GradientStopAppearanceData, 'GradientStopAppearanceData', Base.$, [IVisualData_$type]);
//# sourceMappingURL=GradientStopAppearanceData.js.map