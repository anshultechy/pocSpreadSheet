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
var HorizontalStackedSeriesBaseDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(HorizontalStackedSeriesBaseDescriptionMetadata, _super);
    function HorizontalStackedSeriesBaseDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HorizontalStackedSeriesBaseDescriptionMetadata.b = function (a) {
        if (HorizontalStackedSeriesBaseDescriptionMetadata.a == null) {
            HorizontalStackedSeriesBaseDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            HorizontalStackedSeriesBaseDescriptionMetadata.c(a, HorizontalStackedSeriesBaseDescriptionMetadata.a);
        }
    };
    HorizontalStackedSeriesBaseDescriptionMetadata.c = function (a, b) {
        StackedSeriesBaseDescriptionMetadata.c(a, b);
        b.item("XAxisRef", "(w:XAxis,wf:XAxis)DataRef::object");
        b.item("YAxisRef", "(w:YAxis,wf:YAxis)DataRef::object");
    };
    HorizontalStackedSeriesBaseDescriptionMetadata.d = function (a) {
        HorizontalStackedSeriesBaseDescriptionMetadata.b(a);
        a.m("HorizontalStackedSeriesBase", HorizontalStackedSeriesBaseDescriptionMetadata.a);
    };
    HorizontalStackedSeriesBaseDescriptionMetadata.$t = markType(HorizontalStackedSeriesBaseDescriptionMetadata, 'HorizontalStackedSeriesBaseDescriptionMetadata');
    HorizontalStackedSeriesBaseDescriptionMetadata.a = null;
    return HorizontalStackedSeriesBaseDescriptionMetadata;
}(Base));
export { HorizontalStackedSeriesBaseDescriptionMetadata };
//# sourceMappingURL=HorizontalStackedSeriesBaseDescriptionMetadata.js.map