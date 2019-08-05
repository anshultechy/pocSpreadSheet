/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { StackedSeriesBaseDescriptionMetadata } from "./StackedSeriesBaseDescriptionMetadata";
/**
 * @hidden
 */
var VerticalStackedSeriesBaseDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(VerticalStackedSeriesBaseDescriptionMetadata, _super);
    function VerticalStackedSeriesBaseDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VerticalStackedSeriesBaseDescriptionMetadata.b = function (a) {
        if (VerticalStackedSeriesBaseDescriptionMetadata.a == null) {
            VerticalStackedSeriesBaseDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            VerticalStackedSeriesBaseDescriptionMetadata.c(a, VerticalStackedSeriesBaseDescriptionMetadata.a);
        }
    };
    VerticalStackedSeriesBaseDescriptionMetadata.c = function (a, b) {
        StackedSeriesBaseDescriptionMetadata.c(a, b);
        b.item("XAxisRef", "(w:XAxis,wf:XAxis)DataRef::object");
        b.item("YAxisRef", "(w:YAxis,wf:YAxis)DataRef::object");
    };
    VerticalStackedSeriesBaseDescriptionMetadata.d = function (a) {
        VerticalStackedSeriesBaseDescriptionMetadata.b(a);
        a.m("VerticalStackedSeriesBase", VerticalStackedSeriesBaseDescriptionMetadata.a);
    };
    VerticalStackedSeriesBaseDescriptionMetadata.$t = markType(VerticalStackedSeriesBaseDescriptionMetadata, 'VerticalStackedSeriesBaseDescriptionMetadata');
    VerticalStackedSeriesBaseDescriptionMetadata.a = null;
    return VerticalStackedSeriesBaseDescriptionMetadata;
}(Base));
export { VerticalStackedSeriesBaseDescriptionMetadata };
//# sourceMappingURL=VerticalStackedSeriesBaseDescriptionMetadata.js.map