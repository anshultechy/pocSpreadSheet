/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { CalloutStyleUpdatingEventArgsDescriptionMetadata } from "./CalloutStyleUpdatingEventArgsDescriptionMetadata";
import { CalloutContentUpdatingEventArgsDescriptionMetadata } from "./CalloutContentUpdatingEventArgsDescriptionMetadata";
import { CalloutLabelUpdatingEventArgsDescriptionMetadata } from "./CalloutLabelUpdatingEventArgsDescriptionMetadata";
import { CalloutSeriesSelectingEventArgsDescriptionMetadata } from "./CalloutSeriesSelectingEventArgsDescriptionMetadata";
import { AnnotationLayerDescriptionMetadata } from "./AnnotationLayerDescriptionMetadata";
import { CalloutLayerDescription } from "./CalloutLayerDescription";
/**
 * @hidden
 */
export class CalloutLayerDescriptionMetadata extends Base {
    static b(a) {
        if (CalloutLayerDescriptionMetadata.a == null) {
            CalloutLayerDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            CalloutLayerDescriptionMetadata.c(a, CalloutLayerDescriptionMetadata.a);
            CalloutStyleUpdatingEventArgsDescriptionMetadata.d(a);
            CalloutContentUpdatingEventArgsDescriptionMetadata.d(a);
            CalloutLabelUpdatingEventArgsDescriptionMetadata.d(a);
            CalloutSeriesSelectingEventArgsDescriptionMetadata.d(a);
        }
    }
    static c(a, b) {
        AnnotationLayerDescriptionMetadata.c(a, b);
        b.item("LabelMemberPath", "String");
        b.item("XMemberPath", "String");
        b.item("YMemberPath", "String");
        b.item("KeyMemberPath", "String");
        b.item("IsCalloutOffsettingEnabled", "Boolean");
        b.item("ContentMemberPath", "String");
        b.item("TargetSeriesRef", "(w:TargetSeries,wf:TargetSeries)DataRef::object");
        b.item("CollisionChannel", "String");
        b.item("IsAutoCalloutBehaviorEnabled", "Boolean");
        b.item("UseValueForAutoCalloutLabels", "Boolean");
        b.item("IsCustomCalloutStyleEnabled", "Boolean");
        b.item("AutoCalloutLabelPrecision", "Number:int");
        b.item("CalloutTextColor", "Brush");
        b.item("CalloutBackground", "Brush");
        b.item("CalloutInterpolatedValuePrecision", "Number:int");
        b.item("CalloutOutline", "Brush");
        b.item("CalloutLeaderBrush", "Brush");
        b.item("CalloutPaddingLeft", "Number:double");
        b.item("CalloutPaddingTop", "Number:double");
        b.item("CalloutPaddingRight", "Number:double");
        b.item("CalloutPaddingBottom", "Number:double");
        b.item("CalloutCollisionMode", "ExportedType:string:CalloutCollisionMode");
        b.item("CalloutPositionPadding", "Number:double");
        b.item("CalloutStrokeThickness", "Number:double");
        b.item("TextStyle", "String");
        b.item("CalloutStyleUpdatingRef", "EventRef::calloutStyleUpdating");
        b.item("CalloutContentUpdatingRef", "EventRef::calloutContentUpdating");
        b.item("CalloutLabelUpdatingRef", "EventRef::calloutLabelUpdating");
        b.item("CalloutSeriesSelectingRef", "EventRef::calloutSeriesSelecting");
    }
    static d(a) {
        CalloutLayerDescriptionMetadata.b(a);
        a.n("CalloutLayer", () => new CalloutLayerDescription());
        a.m("CalloutLayer", CalloutLayerDescriptionMetadata.a);
    }
}
CalloutLayerDescriptionMetadata.$t = markType(CalloutLayerDescriptionMetadata, 'CalloutLayerDescriptionMetadata');
CalloutLayerDescriptionMetadata.a = null;
//# sourceMappingURL=CalloutLayerDescriptionMetadata.js.map