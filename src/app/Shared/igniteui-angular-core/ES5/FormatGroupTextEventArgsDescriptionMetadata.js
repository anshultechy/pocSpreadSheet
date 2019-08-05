/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { FormatGroupTextEventArgsDescription } from "./FormatGroupTextEventArgsDescription";
/**
 * @hidden
 */
var FormatGroupTextEventArgsDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(FormatGroupTextEventArgsDescriptionMetadata, _super);
    function FormatGroupTextEventArgsDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FormatGroupTextEventArgsDescriptionMetadata.b = function (a) {
        if (FormatGroupTextEventArgsDescriptionMetadata.a == null) {
            FormatGroupTextEventArgsDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            FormatGroupTextEventArgsDescriptionMetadata.c(a, FormatGroupTextEventArgsDescriptionMetadata.a);
        }
    };
    FormatGroupTextEventArgsDescriptionMetadata.c = function (a, b) {
        b.item("GroupName", "String");
        b.item("GroupValueRef", "(w:GroupValue,wf:GroupValue)DataRef");
        b.item("FormattedValue", "String");
        b.item("FormattedText", "String");
    };
    FormatGroupTextEventArgsDescriptionMetadata.d = function (a) {
        FormatGroupTextEventArgsDescriptionMetadata.b(a);
        a.n("FormatGroupTextEventArgs", function () { return new FormatGroupTextEventArgsDescription(); });
        a.m("FormatGroupTextEventArgs", FormatGroupTextEventArgsDescriptionMetadata.a);
    };
    FormatGroupTextEventArgsDescriptionMetadata.$t = markType(FormatGroupTextEventArgsDescriptionMetadata, 'FormatGroupTextEventArgsDescriptionMetadata');
    FormatGroupTextEventArgsDescriptionMetadata.a = null;
    return FormatGroupTextEventArgsDescriptionMetadata;
}(Base));
export { FormatGroupTextEventArgsDescriptionMetadata };
//# sourceMappingURL=FormatGroupTextEventArgsDescriptionMetadata.js.map