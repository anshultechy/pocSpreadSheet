/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { LegendMouseEventArgsDescription } from "./LegendMouseEventArgsDescription";
/**
 * @hidden
 */
var LegendMouseEventArgsDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(LegendMouseEventArgsDescriptionMetadata, _super);
    function LegendMouseEventArgsDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LegendMouseEventArgsDescriptionMetadata.b = function (a) {
        if (LegendMouseEventArgsDescriptionMetadata.a == null) {
            LegendMouseEventArgsDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            LegendMouseEventArgsDescriptionMetadata.c(a, LegendMouseEventArgsDescriptionMetadata.a);
        }
    };
    LegendMouseEventArgsDescriptionMetadata.c = function (a, b) {
        b.item("ItemRef", "(w:Item,wf:Item)DataRef");
        b.item("LegendItemRef", "(w:LegendItem,wf:LegendItem)DataRef");
    };
    LegendMouseEventArgsDescriptionMetadata.d = function (a) {
        LegendMouseEventArgsDescriptionMetadata.b(a);
        a.n("LegendMouseEventArgs", function () { return new LegendMouseEventArgsDescription(); });
        a.m("LegendMouseEventArgs", LegendMouseEventArgsDescriptionMetadata.a);
    };
    LegendMouseEventArgsDescriptionMetadata.$t = markType(LegendMouseEventArgsDescriptionMetadata, 'LegendMouseEventArgsDescriptionMetadata');
    LegendMouseEventArgsDescriptionMetadata.a = null;
    return LegendMouseEventArgsDescriptionMetadata;
}(Base));
export { LegendMouseEventArgsDescriptionMetadata };
//# sourceMappingURL=LegendMouseEventArgsDescriptionMetadata.js.map