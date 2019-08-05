/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { AssigningCategoryStyleEventArgsBaseDescriptionMetadata } from "./AssigningCategoryStyleEventArgsBaseDescriptionMetadata";
import { AssigningCategoryMarkerStyleEventArgsDescription } from "./AssigningCategoryMarkerStyleEventArgsDescription";
/**
 * @hidden
 */
export class AssigningCategoryMarkerStyleEventArgsDescriptionMetadata extends Base {
    static b(a) {
        if (AssigningCategoryMarkerStyleEventArgsDescriptionMetadata.a == null) {
            AssigningCategoryMarkerStyleEventArgsDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            AssigningCategoryMarkerStyleEventArgsDescriptionMetadata.c(a, AssigningCategoryMarkerStyleEventArgsDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        AssigningCategoryStyleEventArgsBaseDescriptionMetadata.c(a, b);
    }
    static d(a) {
        AssigningCategoryMarkerStyleEventArgsDescriptionMetadata.b(a);
        a.n("AssigningCategoryMarkerStyleEventArgs", () => new AssigningCategoryMarkerStyleEventArgsDescription());
        a.m("AssigningCategoryMarkerStyleEventArgs", AssigningCategoryMarkerStyleEventArgsDescriptionMetadata.a);
    }
}
AssigningCategoryMarkerStyleEventArgsDescriptionMetadata.$t = markType(AssigningCategoryMarkerStyleEventArgsDescriptionMetadata, 'AssigningCategoryMarkerStyleEventArgsDescriptionMetadata');
AssigningCategoryMarkerStyleEventArgsDescriptionMetadata.a = null;
//# sourceMappingURL=AssigningCategoryMarkerStyleEventArgsDescriptionMetadata.js.map