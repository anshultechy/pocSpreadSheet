/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { FormatLinearGraphLabelEventArgsDescriptionMetadata } from "./FormatLinearGraphLabelEventArgsDescriptionMetadata";
import { AlignLinearGraphLabelEventArgsDescription } from "./AlignLinearGraphLabelEventArgsDescription";
/**
 * @hidden
 */
var AlignLinearGraphLabelEventArgsDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(AlignLinearGraphLabelEventArgsDescriptionMetadata, _super);
    function AlignLinearGraphLabelEventArgsDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AlignLinearGraphLabelEventArgsDescriptionMetadata.b = function (a) {
        if (AlignLinearGraphLabelEventArgsDescriptionMetadata.a == null) {
            AlignLinearGraphLabelEventArgsDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            AlignLinearGraphLabelEventArgsDescriptionMetadata.c(a, AlignLinearGraphLabelEventArgsDescriptionMetadata.a);
        }
    };
    AlignLinearGraphLabelEventArgsDescriptionMetadata.c = function (a, b) {
        FormatLinearGraphLabelEventArgsDescriptionMetadata.c(a, b);
    };
    AlignLinearGraphLabelEventArgsDescriptionMetadata.d = function (a) {
        AlignLinearGraphLabelEventArgsDescriptionMetadata.b(a);
        a.n("AlignLinearGraphLabelEventArgs", function () { return new AlignLinearGraphLabelEventArgsDescription(); });
        a.m("AlignLinearGraphLabelEventArgs", AlignLinearGraphLabelEventArgsDescriptionMetadata.a);
    };
    AlignLinearGraphLabelEventArgsDescriptionMetadata.$t = markType(AlignLinearGraphLabelEventArgsDescriptionMetadata, 'AlignLinearGraphLabelEventArgsDescriptionMetadata');
    AlignLinearGraphLabelEventArgsDescriptionMetadata.a = null;
    return AlignLinearGraphLabelEventArgsDescriptionMetadata;
}(Base));
export { AlignLinearGraphLabelEventArgsDescriptionMetadata };
//# sourceMappingURL=AlignLinearGraphLabelEventArgsDescriptionMetadata.js.map