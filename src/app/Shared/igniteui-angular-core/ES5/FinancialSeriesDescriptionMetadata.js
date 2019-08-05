/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { AssigningCategoryStyleEventArgsDescriptionMetadata } from "./AssigningCategoryStyleEventArgsDescriptionMetadata";
import { FinancialEventArgsDescriptionMetadata } from "./FinancialEventArgsDescriptionMetadata";
import { SeriesDescriptionMetadata } from "./SeriesDescriptionMetadata";
/**
 * @hidden
 */
var FinancialSeriesDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(FinancialSeriesDescriptionMetadata, _super);
    function FinancialSeriesDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FinancialSeriesDescriptionMetadata.b = function (a) {
        if (FinancialSeriesDescriptionMetadata.a == null) {
            FinancialSeriesDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            FinancialSeriesDescriptionMetadata.c(a, FinancialSeriesDescriptionMetadata.a);
            AssigningCategoryStyleEventArgsDescriptionMetadata.d(a);
            FinancialEventArgsDescriptionMetadata.d(a);
        }
    };
    FinancialSeriesDescriptionMetadata.c = function (a, b) {
        SeriesDescriptionMetadata.c(a, b);
        b.item("NegativeBrush", "Brush");
        b.item("XAxisRef", "(w:XAxis,wf:XAxis)DataRef::object");
        b.item("YAxisRef", "(w:YAxis,wf:YAxis)DataRef::object");
        b.item("OpenMemberPath", "String");
        b.item("HighMemberPath", "String");
        b.item("LowMemberPath", "String");
        b.item("CloseMemberPath", "String");
        b.item("VolumeMemberPath", "String");
        b.item("IsCustomCategoryStyleAllowed", "Boolean");
        b.item("TransitionInMode", "ExportedType:string:CategoryTransitionInMode");
        b.item("IsTransitionInEnabled", "Boolean");
        b.item("AssigningCategoryStyleRef", "EventRef::assigningCategoryStyle");
        b.item("TypicalRef", "EventRef::typical");
        b.item("TypicalBasedOnRef", "EventRef::typicalBasedOn");
    };
    FinancialSeriesDescriptionMetadata.d = function (a) {
        FinancialSeriesDescriptionMetadata.b(a);
        a.m("FinancialSeries", FinancialSeriesDescriptionMetadata.a);
    };
    FinancialSeriesDescriptionMetadata.$t = markType(FinancialSeriesDescriptionMetadata, 'FinancialSeriesDescriptionMetadata');
    FinancialSeriesDescriptionMetadata.a = null;
    return FinancialSeriesDescriptionMetadata;
}(Base));
export { FinancialSeriesDescriptionMetadata };
//# sourceMappingURL=FinancialSeriesDescriptionMetadata.js.map