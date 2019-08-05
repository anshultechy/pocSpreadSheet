/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { ColumnPropertySetterDescription } from "./ColumnPropertySetterDescription";
/**
 * @hidden
 */
export class ColumnPropertySetterDescriptionMetadata extends Base {
    static b(a) {
        if (ColumnPropertySetterDescriptionMetadata.a == null) {
            ColumnPropertySetterDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            ColumnPropertySetterDescriptionMetadata.c(a, ColumnPropertySetterDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        b.item("ColumnName", "String");
        b.item("PropertyName", "String");
        b.item("ValueRef", "(w:Value,wf:Value)DataRef");
    }
    static d(a) {
        ColumnPropertySetterDescriptionMetadata.b(a);
        a.n("ColumnPropertySetter", () => new ColumnPropertySetterDescription());
        a.m("ColumnPropertySetter", ColumnPropertySetterDescriptionMetadata.a);
    }
}
ColumnPropertySetterDescriptionMetadata.$t = markType(ColumnPropertySetterDescriptionMetadata, 'ColumnPropertySetterDescriptionMetadata');
ColumnPropertySetterDescriptionMetadata.a = null;
//# sourceMappingURL=ColumnPropertySetterDescriptionMetadata.js.map