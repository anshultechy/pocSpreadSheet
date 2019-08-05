/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { CategoryXAxisDescriptionMetadata } from "./CategoryXAxisDescriptionMetadata";
import { OrdinalTimeXAxisDescription } from "./OrdinalTimeXAxisDescription";
/**
 * @hidden
 */
var OrdinalTimeXAxisDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(OrdinalTimeXAxisDescriptionMetadata, _super);
    function OrdinalTimeXAxisDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OrdinalTimeXAxisDescriptionMetadata.b = function (a) {
        if (OrdinalTimeXAxisDescriptionMetadata.a == null) {
            OrdinalTimeXAxisDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            OrdinalTimeXAxisDescriptionMetadata.c(a, OrdinalTimeXAxisDescriptionMetadata.a);
        }
    };
    OrdinalTimeXAxisDescriptionMetadata.c = function (a, b) {
        CategoryXAxisDescriptionMetadata.c(a, b);
        b.item("DateTimeMemberPath", "String");
        b.item("MinimumValue", "Date");
        b.item("MaximumValue", "Date");
    };
    OrdinalTimeXAxisDescriptionMetadata.d = function (a) {
        OrdinalTimeXAxisDescriptionMetadata.b(a);
        a.n("OrdinalTimeXAxis", function () { return new OrdinalTimeXAxisDescription(); });
        a.m("OrdinalTimeXAxis", OrdinalTimeXAxisDescriptionMetadata.a);
    };
    OrdinalTimeXAxisDescriptionMetadata.$t = markType(OrdinalTimeXAxisDescriptionMetadata, 'OrdinalTimeXAxisDescriptionMetadata');
    OrdinalTimeXAxisDescriptionMetadata.a = null;
    return OrdinalTimeXAxisDescriptionMetadata;
}(Base));
export { OrdinalTimeXAxisDescriptionMetadata };
//# sourceMappingURL=OrdinalTimeXAxisDescriptionMetadata.js.map