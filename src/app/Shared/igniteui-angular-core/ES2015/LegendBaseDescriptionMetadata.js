/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { LegendMouseButtonEventArgsDescriptionMetadata } from "./LegendMouseButtonEventArgsDescriptionMetadata";
import { LegendMouseEventArgsDescriptionMetadata } from "./LegendMouseEventArgsDescriptionMetadata";
/**
 * @hidden
 */
export class LegendBaseDescriptionMetadata extends Base {
    static e(a, b) {
        b.item("Background", "(wf:BackColor/ColorTransform)Brush");
    }
    static b(a) {
        if (LegendBaseDescriptionMetadata.a == null) {
            LegendBaseDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            LegendBaseDescriptionMetadata.c(a, LegendBaseDescriptionMetadata.a);
            LegendMouseButtonEventArgsDescriptionMetadata.d(a);
            LegendMouseEventArgsDescriptionMetadata.d(a);
        }
    }
    static c(a, b) {
        b.item("LegendItemMouseLeftButtonDownRef", "EventRef::legendItemMouseLeftButtonDown");
        b.item("LegendItemMouseLeftButtonUpRef", "EventRef::legendItemMouseLeftButtonUp");
        b.item("LegendItemMouseEnterRef", "EventRef::legendItemMouseEnter");
        b.item("LegendItemMouseLeaveRef", "EventRef::legendItemMouseLeave");
        b.item("LegendItemMouseMoveRef", "EventRef::legendItemMouseMove");
        LegendBaseDescriptionMetadata.e(a, b);
    }
    static d(a) {
        LegendBaseDescriptionMetadata.b(a);
        a.m("LegendBase", LegendBaseDescriptionMetadata.a);
    }
}
LegendBaseDescriptionMetadata.$t = markType(LegendBaseDescriptionMetadata, 'LegendBaseDescriptionMetadata');
LegendBaseDescriptionMetadata.a = null;
//# sourceMappingURL=LegendBaseDescriptionMetadata.js.map