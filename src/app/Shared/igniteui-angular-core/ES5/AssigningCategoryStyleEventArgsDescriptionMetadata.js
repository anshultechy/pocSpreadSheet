/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { AssigningCategoryStyleEventArgsBaseDescriptionMetadata } from "./AssigningCategoryStyleEventArgsBaseDescriptionMetadata";
import { AssigningCategoryStyleEventArgsDescription } from "./AssigningCategoryStyleEventArgsDescription";
/**
 * @hidden
 */
var AssigningCategoryStyleEventArgsDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(AssigningCategoryStyleEventArgsDescriptionMetadata, _super);
    function AssigningCategoryStyleEventArgsDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AssigningCategoryStyleEventArgsDescriptionMetadata.b = function (a) {
        if (AssigningCategoryStyleEventArgsDescriptionMetadata.a == null) {
            AssigningCategoryStyleEventArgsDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            AssigningCategoryStyleEventArgsDescriptionMetadata.c(a, AssigningCategoryStyleEventArgsDescriptionMetadata.a);
        }
    };
    AssigningCategoryStyleEventArgsDescriptionMetadata.c = function (a, b) {
        AssigningCategoryStyleEventArgsBaseDescriptionMetadata.c(a, b);
        b.item("StrokeThickness", "Number:double");
        b.item("RadiusX", "Number:double");
        b.item("RadiusY", "Number:double");
    };
    AssigningCategoryStyleEventArgsDescriptionMetadata.d = function (a) {
        AssigningCategoryStyleEventArgsDescriptionMetadata.b(a);
        a.n("AssigningCategoryStyleEventArgs", function () { return new AssigningCategoryStyleEventArgsDescription(); });
        a.m("AssigningCategoryStyleEventArgs", AssigningCategoryStyleEventArgsDescriptionMetadata.a);
    };
    AssigningCategoryStyleEventArgsDescriptionMetadata.$t = markType(AssigningCategoryStyleEventArgsDescriptionMetadata, 'AssigningCategoryStyleEventArgsDescriptionMetadata');
    AssigningCategoryStyleEventArgsDescriptionMetadata.a = null;
    return AssigningCategoryStyleEventArgsDescriptionMetadata;
}(Base));
export { AssigningCategoryStyleEventArgsDescriptionMetadata };
//# sourceMappingURL=AssigningCategoryStyleEventArgsDescriptionMetadata.js.map