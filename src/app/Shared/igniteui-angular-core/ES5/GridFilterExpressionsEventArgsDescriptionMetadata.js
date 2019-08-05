/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { GridFilterExpressionsEventArgsDescription } from "./GridFilterExpressionsEventArgsDescription";
/**
 * @hidden
 */
var GridFilterExpressionsEventArgsDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(GridFilterExpressionsEventArgsDescriptionMetadata, _super);
    function GridFilterExpressionsEventArgsDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GridFilterExpressionsEventArgsDescriptionMetadata.b = function (a) {
        if (GridFilterExpressionsEventArgsDescriptionMetadata.a == null) {
            GridFilterExpressionsEventArgsDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            GridFilterExpressionsEventArgsDescriptionMetadata.c(a, GridFilterExpressionsEventArgsDescriptionMetadata.a);
        }
    };
    GridFilterExpressionsEventArgsDescriptionMetadata.c = function (a, b) {
        b.item("FilterExpressions", "Collection:FilterExpressionDescription:FilterExpressionCollection:FilterExpressionDescription");
    };
    GridFilterExpressionsEventArgsDescriptionMetadata.d = function (a) {
        GridFilterExpressionsEventArgsDescriptionMetadata.b(a);
        a.n("GridFilterExpressionsEventArgs", function () { return new GridFilterExpressionsEventArgsDescription(); });
        a.m("GridFilterExpressionsEventArgs", GridFilterExpressionsEventArgsDescriptionMetadata.a);
    };
    GridFilterExpressionsEventArgsDescriptionMetadata.$t = markType(GridFilterExpressionsEventArgsDescriptionMetadata, 'GridFilterExpressionsEventArgsDescriptionMetadata');
    GridFilterExpressionsEventArgsDescriptionMetadata.a = null;
    return GridFilterExpressionsEventArgsDescriptionMetadata;
}(Base));
export { GridFilterExpressionsEventArgsDescriptionMetadata };
//# sourceMappingURL=GridFilterExpressionsEventArgsDescriptionMetadata.js.map