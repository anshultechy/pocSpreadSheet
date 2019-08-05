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
import { NumericRadiusAxisDescription } from "./NumericRadiusAxisDescription";
/**
 * @hidden
 */
var NumericRadiusAxisDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(NumericRadiusAxisDescriptionMetadata, _super);
    function NumericRadiusAxisDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NumericRadiusAxisDescriptionMetadata.b = function (a) {
        if (NumericRadiusAxisDescriptionMetadata.a == null) {
            NumericRadiusAxisDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            NumericRadiusAxisDescriptionMetadata.c(a, NumericRadiusAxisDescriptionMetadata.a);
        }
    };
    NumericRadiusAxisDescriptionMetadata.c = function (a, b) {
        NumericAxisBaseDescriptionMetadata.c(a, b);
        b.item("RadiusExtentScale", "Number:double");
        b.item("InnerRadiusExtentScale", "Number:double");
    };
    NumericRadiusAxisDescriptionMetadata.d = function (a) {
        NumericRadiusAxisDescriptionMetadata.b(a);
        a.n("NumericRadiusAxis", function () { return new NumericRadiusAxisDescription(); });
        a.m("NumericRadiusAxis", NumericRadiusAxisDescriptionMetadata.a);
    };
    NumericRadiusAxisDescriptionMetadata.$t = markType(NumericRadiusAxisDescriptionMetadata, 'NumericRadiusAxisDescriptionMetadata');
    NumericRadiusAxisDescriptionMetadata.a = null;
    return NumericRadiusAxisDescriptionMetadata;
}(Base));
export { NumericRadiusAxisDescriptionMetadata };
//# sourceMappingURL=NumericRadiusAxisDescriptionMetadata.js.map