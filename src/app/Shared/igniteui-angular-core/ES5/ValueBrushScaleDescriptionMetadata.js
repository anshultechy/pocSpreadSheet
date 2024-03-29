/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { BrushScaleDescriptionMetadata } from "./BrushScaleDescriptionMetadata";
import { ValueBrushScaleDescription } from "./ValueBrushScaleDescription";
/**
 * @hidden
 */
var ValueBrushScaleDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(ValueBrushScaleDescriptionMetadata, _super);
    function ValueBrushScaleDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ValueBrushScaleDescriptionMetadata.b = function (a) {
        if (ValueBrushScaleDescriptionMetadata.a == null) {
            ValueBrushScaleDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            ValueBrushScaleDescriptionMetadata.c(a, ValueBrushScaleDescriptionMetadata.a);
        }
    };
    ValueBrushScaleDescriptionMetadata.c = function (a, b) {
        BrushScaleDescriptionMetadata.c(a, b);
        b.item("MinimumValue", "Number:double");
        b.item("MaximumValue", "Number:double");
        b.item("IsLogarithmic", "Boolean");
        b.item("LogarithmBase", "Number:int");
    };
    ValueBrushScaleDescriptionMetadata.d = function (a) {
        ValueBrushScaleDescriptionMetadata.b(a);
        a.n("ValueBrushScale", function () { return new ValueBrushScaleDescription(); });
        a.m("ValueBrushScale", ValueBrushScaleDescriptionMetadata.a);
    };
    ValueBrushScaleDescriptionMetadata.$t = markType(ValueBrushScaleDescriptionMetadata, 'ValueBrushScaleDescriptionMetadata');
    ValueBrushScaleDescriptionMetadata.a = null;
    return ValueBrushScaleDescriptionMetadata;
}(Base));
export { ValueBrushScaleDescriptionMetadata };
//# sourceMappingURL=ValueBrushScaleDescriptionMetadata.js.map