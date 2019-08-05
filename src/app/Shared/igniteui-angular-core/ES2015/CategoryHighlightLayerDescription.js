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
export class CategoryHighlightLayerDescription extends AnnotationLayerDescription {
    constructor() {
        super();
        this.b6 = null;
        this.b2 = false;
        this.b4 = 0;
    }
    get_type() {
        return "CategoryHighlightLayer";
    }
    get targetAxisRef() {
        return this.b6;
    }
    set targetAxisRef(a) {
        this.b6 = a;
        this.e("TargetAxisRef");
    }
    get useInterpolation() {
        return this.b2;
    }
    set useInterpolation(a) {
        this.b2 = a;
        this.e("UseInterpolation");
    }
    get bandHighlightWidth() {
        return this.b4;
    }
    set bandHighlightWidth(a) {
        this.b4 = a;
        this.e("BandHighlightWidth");
    }
}
CategoryHighlightLayerDescription.$t = markType(CategoryHighlightLayerDescription, 'CategoryHighlightLayerDescription', AnnotationLayerDescription.$);
//# sourceMappingURL=CategoryHighlightLayerDescription.js.map