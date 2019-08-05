/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { ResponsiveStateEnteredEventArgsDescription } from "./ResponsiveStateEnteredEventArgsDescription";
/**
 * @hidden
 */
var ResponsiveStateEnteredEventArgsDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(ResponsiveStateEnteredEventArgsDescriptionMetadata, _super);
    function ResponsiveStateEnteredEventArgsDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ResponsiveStateEnteredEventArgsDescriptionMetadata.b = function (a) {
        if (ResponsiveStateEnteredEventArgsDescriptionMetadata.a == null) {
            ResponsiveStateEnteredEventArgsDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            ResponsiveStateEnteredEventArgsDescriptionMetadata.c(a, ResponsiveStateEnteredEventArgsDescriptionMetadata.a);
        }
    };
    ResponsiveStateEnteredEventArgsDescriptionMetadata.c = function (a, b) {
    };
    ResponsiveStateEnteredEventArgsDescriptionMetadata.d = function (a) {
        ResponsiveStateEnteredEventArgsDescriptionMetadata.b(a);
        a.n("ResponsiveStateEnteredEventArgs", function () { return new ResponsiveStateEnteredEventArgsDescription(); });
        a.m("ResponsiveStateEnteredEventArgs", ResponsiveStateEnteredEventArgsDescriptionMetadata.a);
    };
    ResponsiveStateEnteredEventArgsDescriptionMetadata.$t = markType(ResponsiveStateEnteredEventArgsDescriptionMetadata, 'ResponsiveStateEnteredEventArgsDescriptionMetadata');
    ResponsiveStateEnteredEventArgsDescriptionMetadata.a = null;
    return ResponsiveStateEnteredEventArgsDescriptionMetadata;
}(Base));
export { ResponsiveStateEnteredEventArgsDescriptionMetadata };
//# sourceMappingURL=ResponsiveStateEnteredEventArgsDescriptionMetadata.js.map