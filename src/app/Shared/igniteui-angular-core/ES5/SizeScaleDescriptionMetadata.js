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
import { SizeScaleDescription } from "./SizeScaleDescription";
/**
 * @hidden
 */
var SizeScaleDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(SizeScaleDescriptionMetadata, _super);
    function SizeScaleDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SizeScaleDescriptionMetadata.b = function (a) {
        if (SizeScaleDescriptionMetadata.a == null) {
            SizeScaleDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            SizeScaleDescriptionMetadata.c(a, SizeScaleDescriptionMetadata.a);
            PropertyUpdatedEventArgsDescriptionMetadata.d(a);
        }
    };
    SizeScaleDescriptionMetadata.c = function (a, b) {
        b.item("MinimumValue", "Number:double");
        b.item("MaximumValue", "Number:double");
        b.item("IsLogarithmic", "Boolean");
        b.item("LogarithmBase", "Number:int");
        b.item("PropertyUpdatedRef", "EventRef::propertyUpdated");
    };
    SizeScaleDescriptionMetadata.d = function (a) {
        SizeScaleDescriptionMetadata.b(a);
        a.n("SizeScale", function () { return new SizeScaleDescription(); });
        a.m("SizeScale", SizeScaleDescriptionMetadata.a);
    };
    SizeScaleDescriptionMetadata.$t = markType(SizeScaleDescriptionMetadata, 'SizeScaleDescriptionMetadata');
    SizeScaleDescriptionMetadata.a = null;
    return SizeScaleDescriptionMetadata;
}(Base));
export { SizeScaleDescriptionMetadata };
//# sourceMappingURL=SizeScaleDescriptionMetadata.js.map