/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { ColumnFilterConditionDescriptionMetadata } from "./ColumnFilterConditionDescriptionMetadata";
import { ColumnFilterConditionGroupDescription } from "./ColumnFilterConditionGroupDescription";
/**
 * @hidden
 */
export class ColumnFilterConditionGroupDescriptionMetadata extends Base {
    static b(a) {
        if (ColumnFilterConditionGroupDescriptionMetadata.a == null) {
            ColumnFilterConditionGroupDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            ColumnFilterConditionGroupDescriptionMetadata.c(a, ColumnFilterConditionGroupDescriptionMetadata.a);
            ColumnFilterConditionDescriptionMetadata.d(a);
        }
    }
    static c(a, b) {
        ColumnFilterConditionDescriptionMetadata.c(a, b);
        b.item("UsesOrOperator", "Boolean");
        b.item("Item", "(w:this[],wf:this[])ExportedType");
    }
    static d(a) {
        ColumnFilterConditionGroupDescriptionMetadata.b(a);
        a.n("ColumnFilterConditionGroup", () => new ColumnFilterConditionGroupDescription());
        a.m("ColumnFilterConditionGroup", ColumnFilterConditionGroupDescriptionMetadata.a);
    }
}
ColumnFilterConditionGroupDescriptionMetadata.$t = markType(ColumnFilterConditionGroupDescriptionMetadata, 'ColumnFilterConditionGroupDescriptionMetadata');
ColumnFilterConditionGroupDescriptionMetadata.a = null;
//# sourceMappingURL=ColumnFilterConditionGroupDescriptionMetadata.js.map