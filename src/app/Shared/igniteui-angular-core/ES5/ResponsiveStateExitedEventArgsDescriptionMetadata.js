/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { ResponsiveStateExitedEventArgsDescription } from "./ResponsiveStateExitedEventArgsDescription";
/**
 * @hidden
 */
var ResponsiveStateExitedEventArgsDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(ResponsiveStateExitedEventArgsDescriptionMetadata, _super);
    function ResponsiveStateExitedEventArgsDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ResponsiveStateExitedEventArgsDescriptionMetadata.b = function (a) {
        if (ResponsiveStateExitedEventArgsDescriptionMetadata.a == null) {
            ResponsiveStateExitedEventArgsDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            ResponsiveStateExitedEventArgsDescriptionMetadata.c(a, ResponsiveStateExitedEventArgsDescriptionMetadata.a);
        }
    };
    ResponsiveStateExitedEventArgsDescriptionMetadata.c = function (a, b) {
    };
    ResponsiveStateExitedEventArgsDescriptionMetadata.d = function (a) {
        ResponsiveStateExitedEventArgsDescriptionMetadata.b(a);
        a.n("ResponsiveStateExitedEventArgs", function () { return new ResponsiveStateExitedEventArgsDescription(); });
        a.m("ResponsiveStateExitedEventArgs", ResponsiveStateExitedEventArgsDescriptionMetadata.a);
    };
    ResponsiveStateExitedEventArgsDescriptionMetadata.$t = markType(ResponsiveStateExitedEventArgsDescriptionMetadata, 'ResponsiveStateExitedEventArgsDescriptionMetadata');
    ResponsiveStateExitedEventArgsDescriptionMetadata.a = null;
    return ResponsiveStateExitedEventArgsDescriptionMetadata;
}(Base));
export { ResponsiveStateExitedEventArgsDescriptionMetadata };
//# sourceMappingURL=ResponsiveStateExitedEventArgsDescriptionMetadata.js.map