/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { ResponsivePhaseDescription } from "./ResponsivePhaseDescription";
/**
 * @hidden
 */
var ResponsivePhaseDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(ResponsivePhaseDescriptionMetadata, _super);
    function ResponsivePhaseDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ResponsivePhaseDescriptionMetadata.b = function (a) {
        if (ResponsivePhaseDescriptionMetadata.a == null) {
            ResponsivePhaseDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            ResponsivePhaseDescriptionMetadata.c(a, ResponsivePhaseDescriptionMetadata.a);
        }
    };
    ResponsivePhaseDescriptionMetadata.c = function (a, b) {
        b.item("Name", "String");
        b.item("DelayMilliseconds", "Number:int");
    };
    ResponsivePhaseDescriptionMetadata.d = function (a) {
        ResponsivePhaseDescriptionMetadata.b(a);
        a.n("ResponsivePhase", function () { return new ResponsivePhaseDescription(); });
        a.m("ResponsivePhase", ResponsivePhaseDescriptionMetadata.a);
    };
    ResponsivePhaseDescriptionMetadata.$t = markType(ResponsivePhaseDescriptionMetadata, 'ResponsivePhaseDescriptionMetadata');
    ResponsivePhaseDescriptionMetadata.a = null;
    return ResponsivePhaseDescriptionMetadata;
}(Base));
export { ResponsivePhaseDescriptionMetadata };
//# sourceMappingURL=ResponsivePhaseDescriptionMetadata.js.map