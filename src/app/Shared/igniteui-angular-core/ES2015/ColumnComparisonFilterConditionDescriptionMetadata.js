/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { ColumnFilterConditionDescriptionMetadata } from "./ColumnFilterConditionDescriptionMetadata";
import { ColumnComparisonFilterConditionDescription } from "./ColumnComparisonFilterConditionDescription";
/**
 * @hidden
 */
export class ColumnComparisonFilterConditionDescriptionMetadata extends Base {
    static b(a) {
        if (ColumnComparisonFilterConditionDescriptionMetadata.a == null) {
            ColumnComparisonFilterConditionDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            ColumnComparisonFilterConditionDescriptionMetadata.c(a, ColumnComparisonFilterConditionDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        ColumnFilterConditionDescriptionMetadata.c(a, b);
        b.item("Operator", "ExportedType:string:ColumnComparisonConditionOperatorType");
        b.item("ValueRef", "(w:Value,wf:Value)DataRef");
        b.item("IsCaseSensitive", "Boolean");
    }
    static d(a) {
        ColumnComparisonFilterConditionDescriptionMetadata.b(a);
        a.n("ColumnComparisonFilterCondition", () => new ColumnComparisonFilterConditionDescription());
        a.m("ColumnComparisonFilterCondition", ColumnComparisonFilterConditionDescriptionMetadata.a);
    }
}
ColumnComparisonFilterConditionDescriptionMetadata.$t = markType(ColumnComparisonFilterConditionDescriptionMetadata, 'ColumnComparisonFilterConditionDescriptionMetadata');
ColumnComparisonFilterConditionDescriptionMetadata.a = null;
//# sourceMappingURL=ColumnComparisonFilterConditionDescriptionMetadata.js.map