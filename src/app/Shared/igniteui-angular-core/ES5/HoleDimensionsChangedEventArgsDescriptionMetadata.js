/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { HoleDimensionsChangedEventArgsDescription } from "./HoleDimensionsChangedEventArgsDescription";
/**
 * @hidden
 */
var HoleDimensionsChangedEventArgsDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(HoleDimensionsChangedEventArgsDescriptionMetadata, _super);
    function HoleDimensionsChangedEventArgsDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HoleDimensionsChangedEventArgsDescriptionMetadata.b = function (a) {
        if (HoleDimensionsChangedEventArgsDescriptionMetadata.a == null) {
            HoleDimensionsChangedEventArgsDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            HoleDimensionsChangedEventArgsDescriptionMetadata.c(a, HoleDimensionsChangedEventArgsDescriptionMetadata.a);
        }
    };
    HoleDimensionsChangedEventArgsDescriptionMetadata.c = function (a, b) {
    };
    HoleDimensionsChangedEventArgsDescriptionMetadata.d = function (a) {
        HoleDimensionsChangedEventArgsDescriptionMetadata.b(a);
        a.n("HoleDimensionsChangedEventArgs", function () { return new HoleDimensionsChangedEventArgsDescription(); });
        a.m("HoleDimensionsChangedEventArgs", HoleDimensionsChangedEventArgsDescriptionMetadata.a);
    };
    HoleDimensionsChangedEventArgsDescriptionMetadata.$t = markType(HoleDimensionsChangedEventArgsDescriptionMetadata, 'HoleDimensionsChangedEventArgsDescriptionMetadata');
    HoleDimensionsChangedEventArgsDescriptionMetadata.a = null;
    return HoleDimensionsChangedEventArgsDescriptionMetadata;
}(Base));
export { HoleDimensionsChangedEventArgsDescriptionMetadata };
//# sourceMappingURL=HoleDimensionsChangedEventArgsDescriptionMetadata.js.map