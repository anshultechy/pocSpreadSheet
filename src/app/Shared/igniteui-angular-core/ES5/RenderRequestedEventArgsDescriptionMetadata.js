/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { RenderRequestedEventArgsDescription } from "./RenderRequestedEventArgsDescription";
/**
 * @hidden
 */
var RenderRequestedEventArgsDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(RenderRequestedEventArgsDescriptionMetadata, _super);
    function RenderRequestedEventArgsDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RenderRequestedEventArgsDescriptionMetadata.b = function (a) {
        if (RenderRequestedEventArgsDescriptionMetadata.a == null) {
            RenderRequestedEventArgsDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            RenderRequestedEventArgsDescriptionMetadata.c(a, RenderRequestedEventArgsDescriptionMetadata.a);
        }
    };
    RenderRequestedEventArgsDescriptionMetadata.c = function (a, b) {
        b.item("Animate", "Boolean");
    };
    RenderRequestedEventArgsDescriptionMetadata.d = function (a) {
        RenderRequestedEventArgsDescriptionMetadata.b(a);
        a.n("RenderRequestedEventArgs", function () { return new RenderRequestedEventArgsDescription(); });
        a.m("RenderRequestedEventArgs", RenderRequestedEventArgsDescriptionMetadata.a);
    };
    RenderRequestedEventArgsDescriptionMetadata.$t = markType(RenderRequestedEventArgsDescriptionMetadata, 'RenderRequestedEventArgsDescriptionMetadata');
    RenderRequestedEventArgsDescriptionMetadata.a = null;
    return RenderRequestedEventArgsDescriptionMetadata;
}(Base));
export { RenderRequestedEventArgsDescriptionMetadata };
//# sourceMappingURL=RenderRequestedEventArgsDescriptionMetadata.js.map