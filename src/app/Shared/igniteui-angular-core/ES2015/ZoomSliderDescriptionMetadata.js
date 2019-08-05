/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { ZoomSliderResolvingAxisValueEventArgsDescriptionMetadata } from "./ZoomSliderResolvingAxisValueEventArgsDescriptionMetadata";
import { RectChangedEventArgsDescriptionMetadata } from "./RectChangedEventArgsDescriptionMetadata";
import { ZoomSliderDescription } from "./ZoomSliderDescription";
/**
 * @hidden
 */
export class ZoomSliderDescriptionMetadata extends Base {
    static b(a) {
        if (ZoomSliderDescriptionMetadata.a == null) {
            ZoomSliderDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            ZoomSliderDescriptionMetadata.c(a, ZoomSliderDescriptionMetadata.a);
            ZoomSliderResolvingAxisValueEventArgsDescriptionMetadata.d(a);
            RectChangedEventArgsDescriptionMetadata.d(a);
        }
    }
    static c(a, b) {
        b.item("PanTransitionDuration", "Number:int");
        b.item("MaxZoomWidth", "Number:double");
        b.item("PixelScalingRatio", "Number:double");
        b.item("ActualPixelScalingRatio", "Number:double");
        b.item("WindowRect", "Rect");
        b.item("MinZoomWidth", "Number:double");
        b.item("StartInset", "Number:double");
        b.item("EndInset", "Number:double");
        b.item("TrackStartInset", "Number:double");
        b.item("TrackEndInset", "Number:double");
        b.item("BarExtent", "Number:double");
        b.item("Orientation", "ExportedType:string:ZoomSliderOrientation");
        b.item("LowerThumbBrush", "Brush");
        b.item("LowerThumbStrokeThickness", "Number:double");
        b.item("HigherThumbStrokeThickness", "Number:double");
        b.item("HigherThumbBrush", "Brush");
        b.item("LowerThumbOutline", "Brush");
        b.item("HigherThumbOutline", "Brush");
        b.item("LowerThumbRidgesBrush", "Brush");
        b.item("HigherThumbRidgesBrush", "Brush");
        b.item("LowerThumbWidth", "Number:double");
        b.item("HigherThumbWidth", "Number:double");
        b.item("LowerThumbHeight", "Number:double");
        b.item("HigherThumbHeight", "Number:double");
        b.item("LowerShadeBrush", "Brush");
        b.item("LowerShadeOutline", "Brush");
        b.item("LowerShadeStrokeThickness", "Number:double");
        b.item("HigherShadeBrush", "Brush");
        b.item("HigherShadeOutline", "Brush");
        b.item("HigherShadeStrokeThickness", "Number:double");
        b.item("BarBrush", "Brush");
        b.item("BarOutline", "Brush");
        b.item("BarStrokeThickness", "Number:double");
        b.item("RangeThumbBrush", "Brush");
        b.item("RangeThumbOutline", "Brush");
        b.item("RangeThumbStrokeThickness", "Number:double");
        b.item("RangeThumbRidgesBrush", "Brush");
        b.item("LowerCalloutBrush", "Brush");
        b.item("LowerCalloutTextColor", "Brush");
        b.item("LowerCalloutOutline", "Brush");
        b.item("LowerCalloutStrokeThickness", "Number:double");
        b.item("HigherCalloutBrush", "Brush");
        b.item("HigherCalloutTextColor", "Brush");
        b.item("HigherCalloutOutline", "Brush");
        b.item("HigherCalloutStrokeThickness", "Number:double");
        b.item("AreThumbCalloutsEnabled", "Boolean");
        b.item("ThumbCalloutFontFamily", "(w:ThumbCalloutFontFamily/FontFamilyTransform,wf:ThumbCalloutFontFamily,web:thumbCalloutTextStyle/FontFamilyTransform)String");
        b.item("ThumbCalloutFontSize", "(w:ThumbCalloutFontSize,wf:ThumbCalloutFontSize,web:thumbCalloutTextStyle/FontSizeTransform)Number:double");
        b.item("ThumbCalloutFontStyle", "(w:ThumbCalloutFontStyle/FontStyleTransform,wf:ThumbCalloutFontFamily/FontStyleTransform,web:thumbCalloutTextStyle/FontStyleTransform)String");
        b.item("ThumbCalloutFontWeight", "(w:ThumbCalloutFontWeight/FontWeightTransform,wf:ThumbCalloutFontFamily/FontWeightTransform,web:thumbCalloutTextStyle/FontWeightTransform)String");
        b.item("ResolvingAxisValueRef", "EventRef::resolvingAxisValue");
        b.item("WindowRectChangedRef", "EventRef::windowRectChanged");
    }
    static d(a) {
        ZoomSliderDescriptionMetadata.b(a);
        a.n("ZoomSlider", () => new ZoomSliderDescription());
        a.m("ZoomSlider", ZoomSliderDescriptionMetadata.a);
    }
}
ZoomSliderDescriptionMetadata.$t = markType(ZoomSliderDescriptionMetadata, 'ZoomSliderDescriptionMetadata');
ZoomSliderDescriptionMetadata.a = null;
//# sourceMappingURL=ZoomSliderDescriptionMetadata.js.map