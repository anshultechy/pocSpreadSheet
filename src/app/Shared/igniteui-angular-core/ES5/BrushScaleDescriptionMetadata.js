/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { PropertyUpdatedEventArgsDescriptionMetadata } from "./PropertyUpdatedEventArgsDescriptionMetadata";
import { BrushScaleDescription } from "./BrushScaleDescription";
/**
 * @hidden
 */
var BrushScaleDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(BrushScaleDescriptionMetadata, _super);
    function BrushScaleDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BrushScaleDescriptionMetadata.b = function (a) {
        if (BrushScaleDescriptionMetadata.a == null) {
            BrushScaleDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            BrushScaleDescriptionMetadata.c(a, BrushScaleDescriptionMetadata.a);
            PropertyUpdatedEventArgsDescriptionMetadata.d(a);
        }
    };
    BrushScaleDescriptionMetadata.c = function (a, b) {
        b.item("Brushes", "BrushCollection:string");
        b.item("PropertyUpdatedRef", "EventRef::propertyUpdated");
    };
    BrushScaleDescriptionMetadata.d = function (a) {
        BrushScaleDescriptionMetadata.b(a);
        a.n("BrushScale", function () { return new BrushScaleDescription(); });
        a.m("BrushScale", BrushScaleDescriptionMetadata.a);
    };
    BrushScaleDescriptionMetadata.$t = markType(BrushScaleDescriptionMetadata, 'BrushScaleDescriptionMetadata');
    BrushScaleDescriptionMetadata.a = null;
    return BrushScaleDescriptionMetadata;
}(Base));
export { BrushScaleDescriptionMetadata };
//# sourceMappingURL=BrushScaleDescriptionMetadata.js.map