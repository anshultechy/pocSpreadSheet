/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { ResponsiveStateEnteringEventArgsDescriptionMetadata } from "./ResponsiveStateEnteringEventArgsDescriptionMetadata";
import { ResponsiveStateEnteredEventArgsDescriptionMetadata } from "./ResponsiveStateEnteredEventArgsDescriptionMetadata";
import { ResponsiveStateExitedEventArgsDescriptionMetadata } from "./ResponsiveStateExitedEventArgsDescriptionMetadata";
import { ResponsiveStateDescription } from "./ResponsiveStateDescription";
/**
 * @hidden
 */
var ResponsiveStateDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(ResponsiveStateDescriptionMetadata, _super);
    function ResponsiveStateDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ResponsiveStateDescriptionMetadata.b = function (a) {
        if (ResponsiveStateDescriptionMetadata.a == null) {
            ResponsiveStateDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            ResponsiveStateDescriptionMetadata.c(a, ResponsiveStateDescriptionMetadata.a);
            ResponsiveStateEnteringEventArgsDescriptionMetadata.d(a);
            ResponsiveStateEnteredEventArgsDescriptionMetadata.d(a);
            ResponsiveStateExitedEventArgsDescriptionMetadata.d(a);
        }
    };
    ResponsiveStateDescriptionMetadata.c = function (a, b) {
        b.item("Name", "String");
        b.item("MinimumWidth", "Number:double");
        b.item("MaximumWidth", "Number:double");
        b.item("IsManualState", "Boolean");
        b.item("StateEnteringRef", "EventRef::stateEntering");
        b.item("StateEnteredRef", "EventRef::stateEntered");
        b.item("StateExitedRef", "EventRef::stateExited");
    };
    ResponsiveStateDescriptionMetadata.d = function (a) {
        ResponsiveStateDescriptionMetadata.b(a);
        a.n("ResponsiveState", function () { return new ResponsiveStateDescription(); });
        a.m("ResponsiveState", ResponsiveStateDescriptionMetadata.a);
    };
    ResponsiveStateDescriptionMetadata.$t = markType(ResponsiveStateDescriptionMetadata, 'ResponsiveStateDescriptionMetadata');
    ResponsiveStateDescriptionMetadata.a = null;
    return ResponsiveStateDescriptionMetadata;
}(Base));
export { ResponsiveStateDescriptionMetadata };
//# sourceMappingURL=ResponsiveStateDescriptionMetadata.js.map