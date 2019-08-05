/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { PropertyUpdatedEventArgsDescriptionMetadata } from "./PropertyUpdatedEventArgsDescriptionMetadata";
import { StackedFragmentSeriesDescription } from "./StackedFragmentSeriesDescription";
/**
 * @hidden
 */
export class StackedFragmentSeriesDescriptionMetadata extends Base {
    static b(a) {
        if (StackedFragmentSeriesDescriptionMetadata.a == null) {
            StackedFragmentSeriesDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            StackedFragmentSeriesDescriptionMetadata.c(a, StackedFragmentSeriesDescriptionMetadata.a);
            PropertyUpdatedEventArgsDescriptionMetadata.d(a);
        }
    }
    static c(a, b) {
        b.item("Brush", "Brush");
        b.item("ActualBrush", "Brush");
        b.item("IsDropShadowEnabled", "Boolean");
        b.item("ActualIsDropShadowEnabled", "Boolean");
        b.item("ShadowBlur", "Number:double");
        b.item("ActualShadowBlur", "Number:double");
        b.item("ShadowColor", "Color");
        b.item("ActualShadowColor", "Color");
        b.item("UseSingleShadow", "Boolean");
        b.item("ActualUseSingleShadow", "Boolean");
        b.item("ShadowOffsetX", "Number:double");
        b.item("ActualShadowOffsetX", "Number:double");
        b.item("ShadowOffsetY", "Number:double");
        b.item("ActualShadowOffsetY", "Number:double");
        b.item("LegendItemBadgeTemplateRef", "(w:LegendItemBadgeTemplate,wf:LegendItemBadgeTemplate)DataRef::object");
        b.item("ActualLegendItemBadgeTemplateRef", "(w:ActualLegendItemBadgeTemplate,wf:ActualLegendItemBadgeTemplate)DataRef::object");
        b.item("LegendItemTemplateRef", "(w:LegendItemTemplate,wf:LegendItemTemplate)DataRef::object");
        b.item("ActualLegendItemTemplateRef", "(w:ActualLegendItemTemplate,wf:ActualLegendItemTemplate)DataRef::object");
        b.item("LegendItemVisibility", "ExportedType:string:Visibility");
        b.item("ActualLegendItemVisibility", "ExportedType:string:Visibility");
        b.item("MarkerBrush", "Brush");
        b.item("ActualMarkerBrush", "Brush");
        b.item("MarkerOutline", "Brush");
        b.item("ActualMarkerOutline", "Brush");
        b.item("MarkerTemplateRef", "(w:MarkerTemplate,wf:MarkerTemplate)DataRef::object");
        b.item("ActualMarkerTemplateRef", "(w:ActualMarkerTemplate,wf:ActualMarkerTemplate)DataRef::object");
        b.item("MarkerType", "ExportedType:string:MarkerType");
        b.item("ActualMarkerType", "ExportedType:string:MarkerType");
        b.item("Name", "String");
        b.item("Opacity", "Number:double");
        b.item("ActualOpacity", "Number:double");
        b.item("Outline", "Brush");
        b.item("ActualOutline", "Brush");
        b.item("AreaFillOpacity", "Number:double");
        b.item("ActualAreaFillOpacity", "Number:double");
        b.item("RadiusX", "Number:double");
        b.item("ActualRadiusX", "Number:double");
        b.item("RadiusY", "Number:double");
        b.item("ActualRadiusY", "Number:double");
        b.item("Thickness", "Number:double");
        b.item("ActualThickness", "Number:double");
        b.item("TitleRef", "(w:Title,wf:Title)DataRef");
        b.item("ValueMemberPath", "String");
        b.item("Visibility", "ExportedType:string:Visibility");
        b.item("ActualVisibility", "ExportedType:string:Visibility");
        b.item("ParentOrLocalBrush", "Brush");
        b.item("PropertyUpdatedRef", "EventRef::propertyUpdated");
    }
    static d(a) {
        StackedFragmentSeriesDescriptionMetadata.b(a);
        a.n("StackedFragmentSeries", () => new StackedFragmentSeriesDescription());
        a.m("StackedFragmentSeries", StackedFragmentSeriesDescriptionMetadata.a);
    }
}
StackedFragmentSeriesDescriptionMetadata.$t = markType(StackedFragmentSeriesDescriptionMetadata, 'StackedFragmentSeriesDescriptionMetadata');
StackedFragmentSeriesDescriptionMetadata.a = null;
//# sourceMappingURL=StackedFragmentSeriesDescriptionMetadata.js.map