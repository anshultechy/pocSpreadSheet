/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { AssigningCategoryStyleEventArgsBaseDescriptionMetadata } from "./AssigningCategoryStyleEventArgsBaseDescriptionMetadata";
import { AssigningCategoryStyleEventArgsDescription } from "./AssigningCategoryStyleEventArgsDescription";
/**
 * @hidden
 */
export class AssigningCategoryStyleEventArgsDescriptionMetadata extends Base {
    static b(a) {
        if (AssigningCategoryStyleEventArgsDescriptionMetadata.a == null) {
            AssigningCategoryStyleEventArgsDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            AssigningCategoryStyleEventArgsDescriptionMetadata.c(a, AssigningCategoryStyleEventArgsDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        AssigningCategoryStyleEventArgsBaseDescriptionMetadata.c(a, b);
        b.item("StrokeThickness", "Number:double");
        b.item("RadiusX", "Number:double");
        b.item("RadiusY", "Number:double");
    }
    static d(a) {
        AssigningCategoryStyleEventArgsDescriptionMetadata.b(a);
        a.n("AssigningCategoryStyleEventArgs", () => new AssigningCategoryStyleEventArgsDescription());
        a.m("AssigningCategoryStyleEventArgs", AssigningCategoryStyleEventArgsDescriptionMetadata.a);
    }
}
AssigningCategoryStyleEventArgsDescriptionMetadata.$t = markType(AssigningCategoryStyleEventArgsDescriptionMetadata, 'AssigningCategoryStyleEventArgsDescriptionMetadata');
AssigningCategoryStyleEventArgsDescriptionMetadata.a = null;
//# sourceMappingURL=AssigningCategoryStyleEventArgsDescriptionMetadata.js.map