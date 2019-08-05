/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { LinearGraphRangeDescription } from "./LinearGraphRangeDescription";
/**
 * @hidden
 */
var LinearGraphRangeDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(LinearGraphRangeDescriptionMetadata, _super);
    function LinearGraphRangeDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LinearGraphRangeDescriptionMetadata.b = function (a) {
        if (LinearGraphRangeDescriptionMetadata.a == null) {
            LinearGraphRangeDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            LinearGraphRangeDescriptionMetadata.c(a, LinearGraphRangeDescriptionMetadata.a);
        }
    };
    LinearGraphRangeDescriptionMetadata.c = function (a, b) {
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
    LinearGraphRangeDescriptionMetadata.d = function (a) {
        LinearGraphRangeDescriptionMetadata.b(a);
        a.n("LinearGraphRange", function () { return new LinearGraphRangeDescription(); });
        a.m("LinearGraphRange", LinearGraphRangeDescriptionMetadata.a);
    };
    LinearGraphRangeDescriptionMetadata.$t = markType(LinearGraphRangeDescriptionMetadata, 'LinearGraphRangeDescriptionMetadata');
    LinearGraphRangeDescriptionMetadata.a = null;
    return LinearGraphRangeDescriptionMetadata;
}(Base));
export { LinearGraphRangeDescriptionMetadata };
//# sourceMappingURL=LinearGraphRangeDescriptionMetadata.js.map