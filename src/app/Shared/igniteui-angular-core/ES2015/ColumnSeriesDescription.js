/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { HorizontalAnchoredCategorySeriesDescription } from "./HorizontalAnchoredCategorySeriesDescription";
import { markType } from "./type";
/**
 * @hidden
 */
export class ColumnSeriesDescription extends HorizontalAnchoredCategorySeriesDescription {
    constructor() {
        super();
        this.c4 = 0;
        this.c5 = 0;
        this.c8 = null;
    }
    get_type() {
        return "ColumnSeries";
    }
    get radiusX() {
        return this.c4;
    }
    set radiusX(a) {
        this.c4 = a;
        this.e("RadiusX");
    }
    get radiusY() {
        return this.c5;
    }
    set radiusY(a) {
        this.c5 = a;
        this.e("RadiusY");
    }
    get consolidatedColumnVerticalPosition() {
        return this.c8;
    }
    set consolidatedColumnVerticalPosition(a) {
        this.c8 = a;
        this.e("ConsolidatedColumnVerticalPosition");
    }
}
ColumnSeriesDescription.$t = markType(ColumnSeriesDescription, 'ColumnSeriesDescription', HorizontalAnchoredCategorySeriesDescription.$);
//# sourceMappingURL=ColumnSeriesDescription.js.map