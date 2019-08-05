/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { GroupDataDescription } from "./GroupDataDescription";
/**
 * @hidden
 */
export class GroupDataDescriptionMetadata extends Base {
    static b(a) {
        if (GroupDataDescriptionMetadata.a == null) {
            GroupDataDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            GroupDataDescriptionMetadata.c(a, GroupDataDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        b.item("GroupName", "String");
        b.item("GroupValueRef", "(w:GroupValue,wf:GroupValue)DataRef");
        b.item("FormattedText", "String");
    }
    static d(a) {
        GroupDataDescriptionMetadata.b(a);
        a.n("GroupData", () => new GroupDataDescription());
        a.m("GroupData", GroupDataDescriptionMetadata.a);
    }
}
GroupDataDescriptionMetadata.$t = markType(GroupDataDescriptionMetadata, 'GroupDataDescriptionMetadata');
GroupDataDescriptionMetadata.a = null;
//# sourceMappingURL=GroupDataDescriptionMetadata.js.map