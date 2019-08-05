/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { ColumnFilterConditionDescriptionMetadata } from "./ColumnFilterConditionDescriptionMetadata";
import { ColumnComparisonFilterConditionDescription } from "./ColumnComparisonFilterConditionDescription";
/**
 * @hidden
 */
var ColumnComparisonFilterConditionDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(ColumnComparisonFilterConditionDescriptionMetadata, _super);
    function ColumnComparisonFilterConditionDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ColumnComparisonFilterConditionDescriptionMetadata.b = function (a) {
        if (ColumnComparisonFilterConditionDescriptionMetadata.a == null) {
            ColumnComparisonFilterConditionDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            ColumnComparisonFilterConditionDescriptionMetadata.c(a, ColumnComparisonFilterConditionDescriptionMetadata.a);
        }
    };
    ColumnComparisonFilterConditionDescriptionMetadata.c = function (a, b) {
        ColumnFilterConditionDescriptionMetadata.c(a, b);
        b.item("Operator", "ExportedType:string:ColumnComparisonConditionOperatorType");
        b.item("ValueRef", "(w:Value,wf:Value)DataRef");
        b.item("IsCaseSensitive", "Boolean");
    };
    ColumnComparisonFilterConditionDescriptionMetadata.d = function (a) {
        ColumnComparisonFilterConditionDescriptionMetadata.b(a);
        a.n("ColumnComparisonFilterCondition", function () { return new ColumnComparisonFilterConditionDescription(); });
        a.m("ColumnComparisonFilterCondition", ColumnComparisonFilterConditionDescriptionMetadata.a);
    };
    ColumnComparisonFilterConditionDescriptionMetadata.$t = markType(ColumnComparisonFilterConditionDescriptionMetadata, 'ColumnComparisonFilterConditionDescriptionMetadata');
    ColumnComparisonFilterConditionDescriptionMetadata.a = null;
    return ColumnComparisonFilterConditionDescriptionMetadata;
}(Base));
export { ColumnComparisonFilterConditionDescriptionMetadata };
//# sourceMappingURL=ColumnComparisonFilterConditionDescriptionMetadata.js.map