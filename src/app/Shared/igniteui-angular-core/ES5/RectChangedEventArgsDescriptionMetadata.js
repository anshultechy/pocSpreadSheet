/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { RectChangedEventArgsDescription } from "./RectChangedEventArgsDescription";
/**
 * @hidden
 */
var RectChangedEventArgsDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(RectChangedEventArgsDescriptionMetadata, _super);
    function RectChangedEventArgsDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RectChangedEventArgsDescriptionMetadata.b = function (a) {
        if (RectChangedEventArgsDescriptionMetadata.a == null) {
            RectChangedEventArgsDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            RectChangedEventArgsDescriptionMetadata.c(a, RectChangedEventArgsDescriptionMetadata.a);
        }
    };
    RectChangedEventArgsDescriptionMetadata.c = function (a, b) {
        b.item("OldRect", "Rect");
        b.item("NewRect", "Rect");
    };
    RectChangedEventArgsDescriptionMetadata.d = function (a) {
        RectChangedEventArgsDescriptionMetadata.b(a);
        a.n("RectChangedEventArgs", function () { return new RectChangedEventArgsDescription(); });
        a.m("RectChangedEventArgs", RectChangedEventArgsDescriptionMetadata.a);
    };
    RectChangedEventArgsDescriptionMetadata.$t = markType(RectChangedEventArgsDescriptionMetadata, 'RectChangedEventArgsDescriptionMetadata');
    RectChangedEventArgsDescriptionMetadata.a = null;
    return RectChangedEventArgsDescriptionMetadata;
}(Base));
export { RectChangedEventArgsDescriptionMetadata };
//# sourceMappingURL=RectChangedEventArgsDescriptionMetadata.js.map