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
import { NumericXAxisDescription } from "./NumericXAxisDescription";
/**
 * @hidden
 */
var NumericXAxisDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(NumericXAxisDescriptionMetadata, _super);
    function NumericXAxisDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NumericXAxisDescriptionMetadata.b = function (a) {
        if (NumericXAxisDescriptionMetadata.a == null) {
            NumericXAxisDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            NumericXAxisDescriptionMetadata.c(a, NumericXAxisDescriptionMetadata.a);
        }
    };
    NumericXAxisDescriptionMetadata.c = function (a, b) {
        StraightNumericAxisBaseDescriptionMetadata.c(a, b);
    };
    NumericXAxisDescriptionMetadata.d = function (a) {
        NumericXAxisDescriptionMetadata.b(a);
        a.n("NumericXAxis", function () { return new NumericXAxisDescription(); });
        a.m("NumericXAxis", NumericXAxisDescriptionMetadata.a);
    };
    NumericXAxisDescriptionMetadata.$t = markType(NumericXAxisDescriptionMetadata, 'NumericXAxisDescriptionMetadata');
    NumericXAxisDescriptionMetadata.a = null;
    return NumericXAxisDescriptionMetadata;
}(Base));
export { NumericXAxisDescriptionMetadata };
//# sourceMappingURL=NumericXAxisDescriptionMetadata.js.map