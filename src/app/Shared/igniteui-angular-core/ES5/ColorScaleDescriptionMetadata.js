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
/**
 * @hidden
 */
var ColorScaleDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(ColorScaleDescriptionMetadata, _super);
    function ColorScaleDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ColorScaleDescriptionMetadata.b = function (a) {
        if (ColorScaleDescriptionMetadata.a == null) {
            ColorScaleDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            ColorScaleDescriptionMetadata.c(a, ColorScaleDescriptionMetadata.a);
            PropertyUpdatedEventArgsDescriptionMetadata.d(a);
        }
    };
    ColorScaleDescriptionMetadata.c = function (a, b) {
        b.item("PropertyUpdatedRef", "EventRef::propertyUpdated");
    };
    ColorScaleDescriptionMetadata.d = function (a) {
        ColorScaleDescriptionMetadata.b(a);
        a.m("ColorScale", ColorScaleDescriptionMetadata.a);
    };
    ColorScaleDescriptionMetadata.$t = markType(ColorScaleDescriptionMetadata, 'ColorScaleDescriptionMetadata');
    ColorScaleDescriptionMetadata.a = null;
    return ColorScaleDescriptionMetadata;
}(Base));
export { ColorScaleDescriptionMetadata };
//# sourceMappingURL=ColorScaleDescriptionMetadata.js.map