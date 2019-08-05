/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { FormatLinearGraphLabelEventArgsDescription } from "./FormatLinearGraphLabelEventArgsDescription";
/**
 * @hidden
 */
var FormatLinearGraphLabelEventArgsDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(FormatLinearGraphLabelEventArgsDescriptionMetadata, _super);
    function FormatLinearGraphLabelEventArgsDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FormatLinearGraphLabelEventArgsDescriptionMetadata.b = function (a) {
        if (FormatLinearGraphLabelEventArgsDescriptionMetadata.a == null) {
            FormatLinearGraphLabelEventArgsDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            FormatLinearGraphLabelEventArgsDescriptionMetadata.c(a, FormatLinearGraphLabelEventArgsDescriptionMetadata.a);
        }
    };
    FormatLinearGraphLabelEventArgsDescriptionMetadata.c = function (a, b) {
    };
    FormatLinearGraphLabelEventArgsDescriptionMetadata.d = function (a) {
        FormatLinearGraphLabelEventArgsDescriptionMetadata.b(a);
        a.n("FormatLinearGraphLabelEventArgs", function () { return new FormatLinearGraphLabelEventArgsDescription(); });
        a.m("FormatLinearGraphLabelEventArgs", FormatLinearGraphLabelEventArgsDescriptionMetadata.a);
    };
    FormatLinearGraphLabelEventArgsDescriptionMetadata.$t = markType(FormatLinearGraphLabelEventArgsDescriptionMetadata, 'FormatLinearGraphLabelEventArgsDescriptionMetadata');
    FormatLinearGraphLabelEventArgsDescriptionMetadata.a = null;
    return FormatLinearGraphLabelEventArgsDescriptionMetadata;
}(Base));
export { FormatLinearGraphLabelEventArgsDescriptionMetadata };
//# sourceMappingURL=FormatLinearGraphLabelEventArgsDescriptionMetadata.js.map