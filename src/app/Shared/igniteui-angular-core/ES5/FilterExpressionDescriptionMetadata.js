/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
/**
 * @hidden
 */
var FilterExpressionDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(FilterExpressionDescriptionMetadata, _super);
    function FilterExpressionDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FilterExpressionDescriptionMetadata.b = function (a) {
        if (FilterExpressionDescriptionMetadata.a == null) {
            FilterExpressionDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            FilterExpressionDescriptionMetadata.c(a, FilterExpressionDescriptionMetadata.a);
        }
    };
    FilterExpressionDescriptionMetadata.c = function (a, b) {
    };
    FilterExpressionDescriptionMetadata.d = function (a) {
        FilterExpressionDescriptionMetadata.b(a);
        a.m("FilterExpression", FilterExpressionDescriptionMetadata.a);
    };
    FilterExpressionDescriptionMetadata.$t = markType(FilterExpressionDescriptionMetadata, 'FilterExpressionDescriptionMetadata');
    FilterExpressionDescriptionMetadata.a = null;
    return FilterExpressionDescriptionMetadata;
}(Base));
export { FilterExpressionDescriptionMetadata };
//# sourceMappingURL=FilterExpressionDescriptionMetadata.js.map