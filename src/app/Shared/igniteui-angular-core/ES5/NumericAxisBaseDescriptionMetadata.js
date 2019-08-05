/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { AxisDescriptionMetadata } from "./AxisDescriptionMetadata";
/**
 * @hidden
 */
var NumericAxisBaseDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(NumericAxisBaseDescriptionMetadata, _super);
    function NumericAxisBaseDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NumericAxisBaseDescriptionMetadata.b = function (a) {
        if (NumericAxisBaseDescriptionMetadata.a == null) {
            NumericAxisBaseDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            NumericAxisBaseDescriptionMetadata.c(a, NumericAxisBaseDescriptionMetadata.a);
        }
    };
    NumericAxisBaseDescriptionMetadata.c = function (a, b) {
        AxisDescriptionMetadata.c(a, b);
        b.item("MinimumValue", "Number:double");
        b.item("ActualMinimumValue", "Number:double");
        b.item("ActualVisibleMinimumValue", "Number:double");
        b.item("MaximumValue", "Number:double");
        b.item("ActualMaximumValue", "Number:double");
        b.item("ActualVisibleMaximumValue", "Number:double");
        b.item("Interval", "Number:double");
        b.item("ActualInterval", "Number:double");
        b.item("MinorInterval", "Number:double");
        b.item("ActualMinorInterval", "Number:double");
        b.item("ReferenceValue", "Number:double");
        b.item("IsLogarithmic", "Boolean");
        b.item("ActualIsLogarithmic", "Boolean");
        b.item("LogarithmBase", "Number:int");
        b.item("AbbreviateLargeNumbers", "Boolean");
    };
    NumericAxisBaseDescriptionMetadata.d = function (a) {
        NumericAxisBaseDescriptionMetadata.b(a);
        a.m("NumericAxisBase", NumericAxisBaseDescriptionMetadata.a);
    };
    NumericAxisBaseDescriptionMetadata.$t = markType(NumericAxisBaseDescriptionMetadata, 'NumericAxisBaseDescriptionMetadata');
    NumericAxisBaseDescriptionMetadata.a = null;
    return NumericAxisBaseDescriptionMetadata;
}(Base));
export { NumericAxisBaseDescriptionMetadata };
//# sourceMappingURL=NumericAxisBaseDescriptionMetadata.js.map