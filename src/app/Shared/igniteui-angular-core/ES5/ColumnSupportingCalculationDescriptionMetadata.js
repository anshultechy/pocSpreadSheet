/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { ColumnSupportingCalculationDescription } from "./ColumnSupportingCalculationDescription";
/**
 * @hidden
 */
var ColumnSupportingCalculationDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(ColumnSupportingCalculationDescriptionMetadata, _super);
    function ColumnSupportingCalculationDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ColumnSupportingCalculationDescriptionMetadata.b = function (a) {
        if (ColumnSupportingCalculationDescriptionMetadata.a == null) {
            ColumnSupportingCalculationDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            ColumnSupportingCalculationDescriptionMetadata.c(a, ColumnSupportingCalculationDescriptionMetadata.a);
        }
    };
    ColumnSupportingCalculationDescriptionMetadata.c = function (a, b) {
    };
    ColumnSupportingCalculationDescriptionMetadata.d = function (a) {
        ColumnSupportingCalculationDescriptionMetadata.b(a);
        a.n("ColumnSupportingCalculation", function () { return new ColumnSupportingCalculationDescription(); });
        a.m("ColumnSupportingCalculation", ColumnSupportingCalculationDescriptionMetadata.a);
    };
    ColumnSupportingCalculationDescriptionMetadata.$t = markType(ColumnSupportingCalculationDescriptionMetadata, 'ColumnSupportingCalculationDescriptionMetadata');
    ColumnSupportingCalculationDescriptionMetadata.a = null;
    return ColumnSupportingCalculationDescriptionMetadata;
}(Base));
export { ColumnSupportingCalculationDescriptionMetadata };
//# sourceMappingURL=ColumnSupportingCalculationDescriptionMetadata.js.map