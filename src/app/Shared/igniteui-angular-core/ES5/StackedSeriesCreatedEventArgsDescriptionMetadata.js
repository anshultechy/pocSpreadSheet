/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { StyleDescriptionMetadata } from "./StyleDescriptionMetadata";
import { StackedSeriesCreatedEventArgsDescription } from "./StackedSeriesCreatedEventArgsDescription";
/**
 * @hidden
 */
var StackedSeriesCreatedEventArgsDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(StackedSeriesCreatedEventArgsDescriptionMetadata, _super);
    function StackedSeriesCreatedEventArgsDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StackedSeriesCreatedEventArgsDescriptionMetadata.b = function (a) {
        if (StackedSeriesCreatedEventArgsDescriptionMetadata.a == null) {
            StackedSeriesCreatedEventArgsDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            StackedSeriesCreatedEventArgsDescriptionMetadata.c(a, StackedSeriesCreatedEventArgsDescriptionMetadata.a);
            StyleDescriptionMetadata.d(a);
        }
    };
    StackedSeriesCreatedEventArgsDescriptionMetadata.c = function (a, b) {
        b.item("Brush", "Brush");
        b.item("LegendItemTemplateRef", "(w:LegendItemTemplate,wf:LegendItemTemplate)DataRef::object");
        b.item("LegendItemBadgeTemplateRef", "(w:LegendItemBadgeTemplate,wf:LegendItemBadgeTemplate)DataRef::object");
        b.item("LegendItemVisibility", "ExportedType:string:Visibility");
        b.item("Outline", "Brush");
        b.item("Thickness", "Number:double");
        b.item("TitleRef", "(w:Title,wf:Title)DataRef");
        b.item("MarkerBrush", "Brush");
        b.item("MarkerOutline", "Brush");
        b.item("MarkerStyle", "ExportedType");
        b.item("MarkerTemplateRef", "(w:MarkerTemplate,wf:MarkerTemplate)DataRef::object");
        b.item("MarkerType", "ExportedType:string:MarkerType");
    };
    StackedSeriesCreatedEventArgsDescriptionMetadata.d = function (a) {
        StackedSeriesCreatedEventArgsDescriptionMetadata.b(a);
        a.n("StackedSeriesCreatedEventArgs", function () { return new StackedSeriesCreatedEventArgsDescription(); });
        a.m("StackedSeriesCreatedEventArgs", StackedSeriesCreatedEventArgsDescriptionMetadata.a);
    };
    StackedSeriesCreatedEventArgsDescriptionMetadata.$t = markType(StackedSeriesCreatedEventArgsDescriptionMetadata, 'StackedSeriesCreatedEventArgsDescriptionMetadata');
    StackedSeriesCreatedEventArgsDescriptionMetadata.a = null;
    return StackedSeriesCreatedEventArgsDescriptionMetadata;
}(Base));
export { StackedSeriesCreatedEventArgsDescriptionMetadata };
//# sourceMappingURL=StackedSeriesCreatedEventArgsDescriptionMetadata.js.map