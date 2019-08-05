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
export class CategoryItemHighlightLayerDescription extends AnnotationLayerDescription {
    constructor() {
        super();
        this.ca = null;
        this.b3 = false;
        this.b8 = null;
        this.b9 = null;
        this.b6 = 0;
        this.b2 = false;
    }
    get_type() {
        return "CategoryItemHighlightLayer";
    }
    get targetSeriesRef() {
        return this.ca;
    }
    set targetSeriesRef(a) {
        this.ca = a;
        this.e("TargetSeriesRef");
    }
    get useInterpolation() {
        return this.b3;
    }
    set useInterpolation(a) {
        this.b3 = a;
        this.e("UseInterpolation");
    }
    get highlightType() {
        return this.b8;
    }
    set highlightType(a) {
        this.b8 = a;
        this.e("HighlightType");
    }
    get markerTemplateRef() {
        return this.b9;
    }
    set markerTemplateRef(a) {
        this.b9 = a;
        this.e("MarkerTemplateRef");
    }
    get bandHighlightWidth() {
        return this.b6;
    }
    set bandHighlightWidth(a) {
        this.b6 = a;
        this.e("BandHighlightWidth");
    }
    get skipUnknownValues() {
        return this.b2;
    }
    set skipUnknownValues(a) {
        this.b2 = a;
        this.e("SkipUnknownValues");
    }
}
CategoryItemHighlightLayerDescription.$t = markType(CategoryItemHighlightLayerDescription, 'CategoryItemHighlightLayerDescription', AnnotationLayerDescription.$);
//# sourceMappingURL=CategoryItemHighlightLayerDescription.js.map