/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { HighlightingInfoDescriptionMetadata } from "./HighlightingInfoDescriptionMetadata";
/**
 * @hidden
 */
var AssigningCategoryStyleEventArgsBaseDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(AssigningCategoryStyleEventArgsBaseDescriptionMetadata, _super);
    function AssigningCategoryStyleEventArgsBaseDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AssigningCategoryStyleEventArgsBaseDescriptionMetadata.b = function (a) {
        if (AssigningCategoryStyleEventArgsBaseDescriptionMetadata.a == null) {
            AssigningCategoryStyleEventArgsBaseDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            AssigningCategoryStyleEventArgsBaseDescriptionMetadata.c(a, AssigningCategoryStyleEventArgsBaseDescriptionMetadata.a);
            HighlightingInfoDescriptionMetadata.d(a);
        }
    };
    AssigningCategoryStyleEventArgsBaseDescriptionMetadata.c = function (a, b) {
        b.item("StartIndex", "Number:int");
        b.item("EndIndex", "Number:int");
        b.item("StartDate", "Date");
        b.item("EndDate", "Date");
        b.item("GetItemsRef", "(w:GetItems,wf:GetItems)MethodRef");
        b.item("Fill", "Brush");
        b.item("Stroke", "Brush");
        b.item("Opacity", "Number:double");
        b.item("HighlightingInfo", "ExportedType");
        b.item("MaxAllSeriesHighlightingProgress", "Number:double");
        b.item("SumAllSeriesHighlightingProgress", "Number:double");
        b.item("HighlightingHandled", "Boolean");
        b.item("HasDateRange", "Boolean");
        b.item("IsNegativeShape", "Boolean");
        b.item("IsThumbnail", "Boolean");
    };
    AssigningCategoryStyleEventArgsBaseDescriptionMetadata.d = function (a) {
        AssigningCategoryStyleEventArgsBaseDescriptionMetadata.b(a);
        a.m("AssigningCategoryStyleEventArgsBase", AssigningCategoryStyleEventArgsBaseDescriptionMetadata.a);
    };
    AssigningCategoryStyleEventArgsBaseDescriptionMetadata.$t = markType(AssigningCategoryStyleEventArgsBaseDescriptionMetadata, 'AssigningCategoryStyleEventArgsBaseDescriptionMetadata');
    AssigningCategoryStyleEventArgsBaseDescriptionMetadata.a = null;
    return AssigningCategoryStyleEventArgsBaseDescriptionMetadata;
}(Base));
export { AssigningCategoryStyleEventArgsBaseDescriptionMetadata };
//# sourceMappingURL=AssigningCategoryStyleEventArgsBaseDescriptionMetadata.js.map