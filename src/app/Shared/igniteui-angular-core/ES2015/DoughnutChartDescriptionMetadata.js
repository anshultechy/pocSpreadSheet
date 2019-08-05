/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { SliceClickEventArgsDescriptionMetadata } from "./SliceClickEventArgsDescriptionMetadata";
import { HoleDimensionsChangedEventArgsDescriptionMetadata } from "./HoleDimensionsChangedEventArgsDescriptionMetadata";
import { DoughnutChartDescription } from "./DoughnutChartDescription";
/**
 * @hidden
 */
export class DoughnutChartDescriptionMetadata extends Base {
    static e(a, b) {
        b.item("_qualifiedName", "String:Infragistics.Controls.Charts.XamDoughnutChart");
        b.item("Series", "Collection:RingSeriesBase:RingSeriesCollection:RingSeriesBase");
        b.item("Background", "(wf:BackColor/ColorTransform)Brush");
    }
    static b(a) {
        if (DoughnutChartDescriptionMetadata.a == null) {
            DoughnutChartDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            DoughnutChartDescriptionMetadata.c(a, DoughnutChartDescriptionMetadata.a);
            SliceClickEventArgsDescriptionMetadata.d(a);
            HoleDimensionsChangedEventArgsDescriptionMetadata.d(a);
        }
    }
    static c(a, b) {
        b.item("AllowSliceSelection", "Boolean");
        b.item("IsSurfaceInteractionDisabled", "Boolean");
        b.item("AllowSliceExplosion", "Boolean");
        b.item("InnerExtent", "Number:double");
        b.item("SelectedSliceFill", "(w:SelectedStyle.Fill,wf:SelectedSliceFill)String");
        b.item("SelectedSliceStroke", "(w:SelectedStyle.Stroke,wf:SelectedSliceStroke)String");
        b.item("SelectedSliceStrokeThickness", "(w:SelectedStyle.StrokeThickness,wf:SelectedSliceStrokeThickness)Number:double");
        b.item("SelectedSliceOpacity", "(w:SelectedStyle.Opacity,wf:SelectedSliceOpacity)Number:double");
        b.item("PixelScalingRatio", "Number:double");
        b.item("ActualPixelScalingRatio", "Number:double");
        b.item("SliceClickRef", "EventRef::sliceClick");
        b.item("HoleDimensionsChangedRef", "EventRef::holeDimensionsChanged");
        DoughnutChartDescriptionMetadata.e(a, b);
    }
    static d(a) {
        DoughnutChartDescriptionMetadata.b(a);
        a.n("DoughnutChart", () => new DoughnutChartDescription());
        a.m("DoughnutChart", DoughnutChartDescriptionMetadata.a);
    }
}
DoughnutChartDescriptionMetadata.$t = markType(DoughnutChartDescriptionMetadata, 'DoughnutChartDescriptionMetadata');
DoughnutChartDescriptionMetadata.a = null;
//# sourceMappingURL=DoughnutChartDescriptionMetadata.js.map