/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { HorizontalAnchoredCategorySeriesDescriptionMetadata } from "./HorizontalAnchoredCategorySeriesDescriptionMetadata";
import { ColumnSeriesDescription } from "./ColumnSeriesDescription";
/**
 * @hidden
 */
var ColumnSeriesDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(ColumnSeriesDescriptionMetadata, _super);
    function ColumnSeriesDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ColumnSeriesDescriptionMetadata.b = function (a) {
        if (ColumnSeriesDescriptionMetadata.a == null) {
            ColumnSeriesDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            ColumnSeriesDescriptionMetadata.c(a, ColumnSeriesDescriptionMetadata.a);
        }
    };
    ColumnSeriesDescriptionMetadata.c = function (a, b) {
        HorizontalAnchoredCategorySeriesDescriptionMetadata.c(a, b);
        b.item("RadiusX", "Number:double");
        b.item("RadiusY", "Number:double");
        b.item("ConsolidatedColumnVerticalPosition", "ExportedType:string:ConsolidatedItemsPosition");
    };
    ColumnSeriesDescriptionMetadata.d = function (a) {
        ColumnSeriesDescriptionMetadata.b(a);
        a.n("ColumnSeries", function () { return new ColumnSeriesDescription(); });
        a.m("ColumnSeries", ColumnSeriesDescriptionMetadata.a);
    };
    ColumnSeriesDescriptionMetadata.$t = markType(ColumnSeriesDescriptionMetadata, 'ColumnSeriesDescriptionMetadata');
    ColumnSeriesDescriptionMetadata.a = null;
    return ColumnSeriesDescriptionMetadata;
}(Base));
export { ColumnSeriesDescriptionMetadata };
//# sourceMappingURL=ColumnSeriesDescriptionMetadata.js.map