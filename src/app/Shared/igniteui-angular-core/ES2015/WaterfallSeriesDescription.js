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
export class WaterfallSeriesDescription extends HorizontalAnchoredCategorySeriesDescription {
    constructor() {
        super();
        this.c8 = null;
        this.c4 = 0;
        this.c5 = 0;
        this.c9 = null;
    }
    get_type() {
        return "WaterfallSeries";
    }
    get negativeBrush() {
        return this.c8;
    }
    set negativeBrush(a) {
        this.c8 = a;
        this.e("NegativeBrush");
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
    get negativeOutline() {
        return this.c9;
    }
    set negativeOutline(a) {
        this.c9 = a;
        this.e("NegativeOutline");
    }
}
WaterfallSeriesDescription.$t = markType(WaterfallSeriesDescription, 'WaterfallSeriesDescription', HorizontalAnchoredCategorySeriesDescription.$);
//# sourceMappingURL=WaterfallSeriesDescription.js.map