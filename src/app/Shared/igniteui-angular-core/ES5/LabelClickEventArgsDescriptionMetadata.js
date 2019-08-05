/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { LabelClickEventArgsDescription } from "./LabelClickEventArgsDescription";
/**
 * @hidden
 */
var LabelClickEventArgsDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(LabelClickEventArgsDescriptionMetadata, _super);
    function LabelClickEventArgsDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LabelClickEventArgsDescriptionMetadata.b = function (a) {
        if (LabelClickEventArgsDescriptionMetadata.a == null) {
            LabelClickEventArgsDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            LabelClickEventArgsDescriptionMetadata.c(a, LabelClickEventArgsDescriptionMetadata.a);
        }
    };
    LabelClickEventArgsDescriptionMetadata.c = function (a, b) {
        b.item("AllowSliceClick", "Boolean");
    };
    LabelClickEventArgsDescriptionMetadata.d = function (a) {
        LabelClickEventArgsDescriptionMetadata.b(a);
        a.n("LabelClickEventArgs", function () { return new LabelClickEventArgsDescription(); });
        a.m("LabelClickEventArgs", LabelClickEventArgsDescriptionMetadata.a);
    };
    LabelClickEventArgsDescriptionMetadata.$t = markType(LabelClickEventArgsDescriptionMetadata, 'LabelClickEventArgsDescriptionMetadata');
    LabelClickEventArgsDescriptionMetadata.a = null;
    return LabelClickEventArgsDescriptionMetadata;
}(Base));
export { LabelClickEventArgsDescriptionMetadata };
//# sourceMappingURL=LabelClickEventArgsDescriptionMetadata.js.map