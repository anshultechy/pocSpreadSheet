/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { ShapeSeriesBaseDescription } from "./ShapeSeriesBaseDescription";
import { markType } from "./type";
/**
 * @hidden
 */
export class ScatterPolygonSeriesDescription extends ShapeSeriesBaseDescription {
    constructor() {
        super();
        this.b2 = null;
        this.b0 = null;
        this.cb = null;
        this.ca = null;
        this.b6 = null;
        this.b7 = null;
        this.b4 = null;
        this.b9 = null;
        this.b5 = null;
        this.b8 = null;
    }
    get_type() {
        return "ScatterPolygonSeries";
    }
    get shapeStyleSelector() {
        return this.b2;
    }
    set shapeStyleSelector(a) {
        this.b2 = a;
        this.e("ShapeStyleSelector");
    }
    get shapeStyle() {
        return this.b0;
    }
    set shapeStyle(a) {
        this.b0 = a;
        this.e("ShapeStyle");
    }
    get markerType() {
        return this.cb;
    }
    set markerType(a) {
        this.cb = a;
        this.e("MarkerType");
    }
    get markerTemplateRef() {
        return this.ca;
    }
    set markerTemplateRef(a) {
        this.ca = a;
        this.e("MarkerTemplateRef");
    }
    get actualMarkerTemplateRef() {
        return this.b6;
    }
    set actualMarkerTemplateRef(a) {
        this.b6 = a;
        this.e("ActualMarkerTemplateRef");
    }
    get markerBrush() {
        return this.b7;
    }
    set markerBrush(a) {
        this.b7 = a;
        this.e("MarkerBrush");
    }
    get actualMarkerBrush() {
        return this.b4;
    }
    set actualMarkerBrush(a) {
        this.b4 = a;
        this.e("ActualMarkerBrush");
    }
    get markerOutline() {
        return this.b9;
    }
    set markerOutline(a) {
        this.b9 = a;
        this.e("MarkerOutline");
    }
    get actualMarkerOutline() {
        return this.b5;
    }
    set actualMarkerOutline(a) {
        this.b5 = a;
        this.e("ActualMarkerOutline");
    }
    get markerCollisionAvoidance() {
        return this.b8;
    }
    set markerCollisionAvoidance(a) {
        this.b8 = a;
        this.e("MarkerCollisionAvoidance");
    }
}
ScatterPolygonSeriesDescription.$t = markType(ScatterPolygonSeriesDescription, 'ScatterPolygonSeriesDescription', ShapeSeriesBaseDescription.$);
//# sourceMappingURL=ScatterPolygonSeriesDescription.js.map