/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { StraightNumericAxisBaseDescriptionMetadata } from "./StraightNumericAxisBaseDescriptionMetadata";
import { NumericYAxisDescription } from "./NumericYAxisDescription";
/**
 * @hidden
 */
var NumericYAxisDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(NumericYAxisDescriptionMetadata, _super);
    function NumericYAxisDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NumericYAxisDescriptionMetadata.b = function (a) {
        if (NumericYAxisDescriptionMetadata.a == null) {
            NumericYAxisDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            NumericYAxisDescriptionMetadata.c(a, NumericYAxisDescriptionMetadata.a);
        }
    };
    NumericYAxisDescriptionMetadata.c = function (a, b) {
        StraightNumericAxisBaseDescriptionMetadata.c(a, b);
    };
    NumericYAxisDescriptionMetadata.d = function (a) {
        NumericYAxisDescriptionMetadata.b(a);
        a.n("NumericYAxis", function () { return new NumericYAxisDescription(); });
        a.m("NumericYAxis", NumericYAxisDescriptionMetadata.a);
    };
    NumericYAxisDescriptionMetadata.$t = markType(NumericYAxisDescriptionMetadata, 'NumericYAxisDescriptionMetadata');
    NumericYAxisDescriptionMetadata.a = null;
    return NumericYAxisDescriptionMetadata;
}(Base));
export { NumericYAxisDescriptionMetadata };
//# sourceMappingURL=NumericYAxisDescriptionMetadata.js.map