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
var ColumnFilterConditionDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(ColumnFilterConditionDescriptionMetadata, _super);
    function ColumnFilterConditionDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ColumnFilterConditionDescriptionMetadata.b = function (a) {
        if (ColumnFilterConditionDescriptionMetadata.a == null) {
            ColumnFilterConditionDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            ColumnFilterConditionDescriptionMetadata.c(a, ColumnFilterConditionDescriptionMetadata.a);
        }
    };
    ColumnFilterConditionDescriptionMetadata.c = function (a, b) {
    };
    ColumnFilterConditionDescriptionMetadata.d = function (a) {
        ColumnFilterConditionDescriptionMetadata.b(a);
        a.m("ColumnFilterCondition", ColumnFilterConditionDescriptionMetadata.a);
    };
    ColumnFilterConditionDescriptionMetadata.$t = markType(ColumnFilterConditionDescriptionMetadata, 'ColumnFilterConditionDescriptionMetadata');
    ColumnFilterConditionDescriptionMetadata.a = null;
    return ColumnFilterConditionDescriptionMetadata;
}(Base));
export { ColumnFilterConditionDescriptionMetadata };
//# sourceMappingURL=ColumnFilterConditionDescriptionMetadata.js.map