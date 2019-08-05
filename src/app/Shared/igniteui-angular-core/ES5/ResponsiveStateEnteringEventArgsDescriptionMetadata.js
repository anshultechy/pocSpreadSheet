/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { ResponsiveStateEnteringEventArgsDescription } from "./ResponsiveStateEnteringEventArgsDescription";
/**
 * @hidden
 */
var ResponsiveStateEnteringEventArgsDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(ResponsiveStateEnteringEventArgsDescriptionMetadata, _super);
    function ResponsiveStateEnteringEventArgsDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ResponsiveStateEnteringEventArgsDescriptionMetadata.b = function (a) {
        if (ResponsiveStateEnteringEventArgsDescriptionMetadata.a == null) {
            ResponsiveStateEnteringEventArgsDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            ResponsiveStateEnteringEventArgsDescriptionMetadata.c(a, ResponsiveStateEnteringEventArgsDescriptionMetadata.a);
        }
    };
    ResponsiveStateEnteringEventArgsDescriptionMetadata.c = function (a, b) {
    };
    ResponsiveStateEnteringEventArgsDescriptionMetadata.d = function (a) {
        ResponsiveStateEnteringEventArgsDescriptionMetadata.b(a);
        a.n("ResponsiveStateEnteringEventArgs", function () { return new ResponsiveStateEnteringEventArgsDescription(); });
        a.m("ResponsiveStateEnteringEventArgs", ResponsiveStateEnteringEventArgsDescriptionMetadata.a);
    };
    ResponsiveStateEnteringEventArgsDescriptionMetadata.$t = markType(ResponsiveStateEnteringEventArgsDescriptionMetadata, 'ResponsiveStateEnteringEventArgsDescriptionMetadata');
    ResponsiveStateEnteringEventArgsDescriptionMetadata.a = null;
    return ResponsiveStateEnteringEventArgsDescriptionMetadata;
}(Base));
export { ResponsiveStateEnteringEventArgsDescriptionMetadata };
//# sourceMappingURL=ResponsiveStateEnteringEventArgsDescriptionMetadata.js.map