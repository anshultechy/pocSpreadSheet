/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { NumericAxisBaseDescriptionMetadata } from "./NumericAxisBaseDescriptionMetadata";
import { NumericAngleAxisDescription } from "./NumericAngleAxisDescription";
/**
 * @hidden
 */
var NumericAngleAxisDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(NumericAngleAxisDescriptionMetadata, _super);
    function NumericAngleAxisDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NumericAngleAxisDescriptionMetadata.b = function (a) {
        if (NumericAngleAxisDescriptionMetadata.a == null) {
            NumericAngleAxisDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            NumericAngleAxisDescriptionMetadata.c(a, NumericAngleAxisDescriptionMetadata.a);
        }
    };
    NumericAngleAxisDescriptionMetadata.c = function (a, b) {
        NumericAxisBaseDescriptionMetadata.c(a, b);
        b.item("StartAngleOffset", "Number:double");
    };
    NumericAngleAxisDescriptionMetadata.d = function (a) {
        NumericAngleAxisDescriptionMetadata.b(a);
        a.n("NumericAngleAxis", function () { return new NumericAngleAxisDescription(); });
        a.m("NumericAngleAxis", NumericAngleAxisDescriptionMetadata.a);
    };
    NumericAngleAxisDescriptionMetadata.$t = markType(NumericAngleAxisDescriptionMetadata, 'NumericAngleAxisDescriptionMetadata');
    NumericAngleAxisDescriptionMetadata.a = null;
    return NumericAngleAxisDescriptionMetadata;
}(Base));
export { NumericAngleAxisDescriptionMetadata };
//# sourceMappingURL=NumericAngleAxisDescriptionMetadata.js.map