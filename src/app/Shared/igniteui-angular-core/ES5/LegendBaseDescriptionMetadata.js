/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { LegendMouseButtonEventArgsDescriptionMetadata } from "./LegendMouseButtonEventArgsDescriptionMetadata";
import { LegendMouseEventArgsDescriptionMetadata } from "./LegendMouseEventArgsDescriptionMetadata";
/**
 * @hidden
 */
var LegendBaseDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(LegendBaseDescriptionMetadata, _super);
    function LegendBaseDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LegendBaseDescriptionMetadata.e = function (a, b) {
        b.item("Background", "(wf:BackColor/ColorTransform)Brush");
    };
    LegendBaseDescriptionMetadata.b = function (a) {
        if (LegendBaseDescriptionMetadata.a == null) {
            LegendBaseDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            LegendBaseDescriptionMetadata.c(a, LegendBaseDescriptionMetadata.a);
            LegendMouseButtonEventArgsDescriptionMetadata.d(a);
            LegendMouseEventArgsDescriptionMetadata.d(a);
        }
    };
    LegendBaseDescriptionMetadata.c = function (a, b) {
        b.item("LegendItemMouseLeftButtonDownRef", "EventRef::legendItemMouseLeftButtonDown");
        b.item("LegendItemMouseLeftButtonUpRef", "EventRef::legendItemMouseLeftButtonUp");
        b.item("LegendItemMouseEnterRef", "EventRef::legendItemMouseEnter");
        b.item("LegendItemMouseLeaveRef", "EventRef::legendItemMouseLeave");
        b.item("LegendItemMouseMoveRef", "EventRef::legendItemMouseMove");
        LegendBaseDescriptionMetadata.e(a, b);
    };
    LegendBaseDescriptionMetadata.d = function (a) {
        LegendBaseDescriptionMetadata.b(a);
        a.m("LegendBase", LegendBaseDescriptionMetadata.a);
    };
    LegendBaseDescriptionMetadata.$t = markType(LegendBaseDescriptionMetadata, 'LegendBaseDescriptionMetadata');
    LegendBaseDescriptionMetadata.a = null;
    return LegendBaseDescriptionMetadata;
}(Base));
export { LegendBaseDescriptionMetadata };
//# sourceMappingURL=LegendBaseDescriptionMetadata.js.map