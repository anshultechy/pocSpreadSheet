/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { DataContextDescriptionMetadata } from "./DataContextDescriptionMetadata";
import { PieSliceDataContextDescription } from "./PieSliceDataContextDescription";
/**
 * @hidden
 */
var PieSliceDataContextDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(PieSliceDataContextDescriptionMetadata, _super);
    function PieSliceDataContextDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PieSliceDataContextDescriptionMetadata.b = function (a) {
        if (PieSliceDataContextDescriptionMetadata.a == null) {
            PieSliceDataContextDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            PieSliceDataContextDescriptionMetadata.c(a, PieSliceDataContextDescriptionMetadata.a);
        }
    };
    PieSliceDataContextDescriptionMetadata.c = function (a, b) {
        DataContextDescriptionMetadata.c(a, b);
        b.item("PercentValue", "Number:double");
        b.item("IsOthersSlice", "Boolean");
    };
    PieSliceDataContextDescriptionMetadata.d = function (a) {
        PieSliceDataContextDescriptionMetadata.b(a);
        a.n("PieSliceDataContext", function () { return new PieSliceDataContextDescription(); });
        a.m("PieSliceDataContext", PieSliceDataContextDescriptionMetadata.a);
    };
    PieSliceDataContextDescriptionMetadata.$t = markType(PieSliceDataContextDescriptionMetadata, 'PieSliceDataContextDescriptionMetadata');
    PieSliceDataContextDescriptionMetadata.a = null;
    return PieSliceDataContextDescriptionMetadata;
}(Base));
export { PieSliceDataContextDescriptionMetadata };
//# sourceMappingURL=PieSliceDataContextDescriptionMetadata.js.map