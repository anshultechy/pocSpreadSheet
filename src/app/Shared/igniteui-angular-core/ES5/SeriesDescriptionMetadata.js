/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { RenderRequestedEventArgsDescriptionMetadata } from "./RenderRequestedEventArgsDescriptionMetadata";
/**
 * @hidden
 */
var SeriesDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(SeriesDescriptionMetadata, _super);
    function SeriesDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SeriesDescriptionMetadata.b = function (a) {
        if (SeriesDescriptionMetadata.a == null) {
            SeriesDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            SeriesDescriptionMetadata.c(a, SeriesDescriptionMetadata.a);
            RenderRequestedEventArgsDescriptionMetadata.d(a);
        }
    };
    SeriesDescriptionMetadata.c = function (a, b) {
        b.item("LegendItemVisibility", "ExportedType:string:Visibility");
        b.item("LegendItemBadgeTemplateRef", "(w:LegendItemBadgeTemplate,wf:LegendItemBadgeTemplate)DataRef::object");
        b.item("LegendItemTemplateRef", "(w:LegendItemTemplate,wf:LegendItemTemplate)DataRef::object");
        b.item("DiscreteLegendItemTemplateRef", "(w:DiscreteLegendItemTemplate,wf:DiscreteLegendItemTemplate)DataRef::object");
        b.item("TransitionEasingFunctionRef", "(w:TransitionEasingFunction,wf:TransitionEasingFunction)MethodRef");
        b.item("TransitionInEasingFunctionRef", "(w:TransitionInEasingFunction,wf:TransitionInEasingFunction)MethodRef");
        b.item("TransitionDuration", "Number:int");
        b.item("Resolution", "Number:double");
        b.item("Brush", "Brush");
        b.item("ActualBrush", "Brush");
        b.item("Outline", "Brush");
        b.item("ActualOutline", "Brush");
        b.item("Thickness", "Number:double");
        b.item("IsHighlightingEnabled", "Boolean");
        b.item("IsDropShadowEnabled", "Boolean");
        b.item("ShadowBlur", "Number:double");
        b.item("ShadowColor", "Color");
        b.item("UseSingleShadow", "Boolean");
        b.item("ShadowOffsetX", "Number:double");
        b.item("ShadowOffsetY", "Number:double");
        b.item("AreaFillOpacity", "Number:double");
        b.item("ActualAreaFillOpacity", "Number:double");
        b.item("IsDefaultToolTipSelected", "Boolean");
        b.item("ShowDefaultTooltip", "Boolean");
        b.item("TransitionInDuration", "Number:int");
        b.item("TransitionInSpeedType", "ExportedType:string:TransitionInSpeedType");
        b.item("MouseOverEnabled", "Boolean");
        b.item("CoercionMethodsRef", "(w:CoercionMethods,wf:CoercionMethods)DataRef");
        b.item("ExpectFunctions", "Boolean");
        b.item("HitTestMode", "ExportedType:string:SeriesHitTestMode");
        b.item("ActualHitTestMode", "ExportedType:string:SeriesHitTestMode");
        b.item("FinalValue", "Number:double");
        b.item("PercentChange", "Number:double");
        b.item("RenderRequestedRef", "EventRef::renderRequested");
        SeriesDescriptionMetadata.e(a, b);
    };
    SeriesDescriptionMetadata.d = function (a) {
        SeriesDescriptionMetadata.b(a);
        a.m("Series", SeriesDescriptionMetadata.a);
    };
    SeriesDescriptionMetadata.e = function (a, b) {
        b.item("DataSourceRef", "(w:ItemsSource)DataRef:String");
        b.item("Title", "String");
        b.item("TooltipTemplateRef", "(w:ToolTip)DataRef:String");
    };
    SeriesDescriptionMetadata.$t = markType(SeriesDescriptionMetadata, 'SeriesDescriptionMetadata');
    SeriesDescriptionMetadata.a = null;
    return SeriesDescriptionMetadata;
}(Base));
export { SeriesDescriptionMetadata };
//# sourceMappingURL=SeriesDescriptionMetadata.js.map