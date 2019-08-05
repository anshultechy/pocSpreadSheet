/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { RadialGaugeRangeDescription } from "./RadialGaugeRangeDescription";
/**
 * @hidden
 */
var RadialGaugeRangeDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(RadialGaugeRangeDescriptionMetadata, _super);
    function RadialGaugeRangeDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RadialGaugeRangeDescriptionMetadata.b = function (a) {
        if (RadialGaugeRangeDescriptionMetadata.a == null) {
            RadialGaugeRangeDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            RadialGaugeRangeDescriptionMetadata.c(a, RadialGaugeRangeDescriptionMetadata.a);
        }
    };
    RadialGaugeRangeDescriptionMetadata.c = function (a, b) {
        b.item("Name", "String");
        b.item("Brush", "Brush");
        b.item("Outline", "Brush");
        b.item("StartValue", "Number:double");
        b.item("EndValue", "Number:double");
        b.item("InnerStartExtent", "Number:double");
        b.item("InnerEndExtent", "Number:double");
        b.item("OuterStartExtent", "Number:double");
        b.item("OuterEndExtent", "Number:double");
        b.item("StrokeThickness", "Number:double");
    };
    RadialGaugeRangeDescriptionMetadata.d = function (a) {
        RadialGaugeRangeDescriptionMetadata.b(a);
        a.n("RadialGaugeRange", function () { return new RadialGaugeRangeDescription(); });
        a.m("RadialGaugeRange", RadialGaugeRangeDescriptionMetadata.a);
    };
    RadialGaugeRangeDescriptionMetadata.$t = markType(RadialGaugeRangeDescriptionMetadata, 'RadialGaugeRangeDescriptionMetadata');
    RadialGaugeRangeDescriptionMetadata.a = null;
    return RadialGaugeRangeDescriptionMetadata;
}(Base));
export { RadialGaugeRangeDescriptionMetadata };
//# sourceMappingURL=RadialGaugeRangeDescriptionMetadata.js.map