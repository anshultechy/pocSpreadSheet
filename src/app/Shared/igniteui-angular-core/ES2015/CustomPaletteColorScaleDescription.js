/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { ColorScaleDescription } from "./ColorScaleDescription";
import { markType } from "./type";
/**
 * @hidden
 */
export class CustomPaletteColorScaleDescription extends ColorScaleDescription {
    constructor() {
        super();
        this.l = 0;
        this.k = 0;
        this.i = null;
        this.o = null;
    }
    get_type() {
        return "CustomPaletteColorScale";
    }
    get minimumValue() {
        return this.l;
    }
    set minimumValue(a) {
        this.l = a;
        this.e("MinimumValue");
    }
    get maximumValue() {
        return this.k;
    }
    set maximumValue(a) {
        this.k = a;
        this.e("MaximumValue");
    }
    get palette() {
        return this.i;
    }
    set palette(a) {
        this.i = a;
        this.e("Palette");
    }
    get interpolationMode() {
        return this.o;
    }
    set interpolationMode(a) {
        this.o = a;
        this.e("InterpolationMode");
    }
}
CustomPaletteColorScaleDescription.$t = markType(CustomPaletteColorScaleDescription, 'CustomPaletteColorScaleDescription', ColorScaleDescription.$);
//# sourceMappingURL=CustomPaletteColorScaleDescription.js.map