/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { RingSeriesBaseDescriptionMetadata } from "./RingSeriesBaseDescriptionMetadata";
import { RingDescription } from "./RingDescription";
/**
 * @hidden
 */
var RingDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(RingDescriptionMetadata, _super);
    function RingDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RingDescriptionMetadata.b = function (a) {
        if (RingDescriptionMetadata.a == null) {
            RingDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            RingDescriptionMetadata.c(a, RingDescriptionMetadata.a);
            RingSeriesBaseDescriptionMetadata.d(a);
        }
    };
    RingDescriptionMetadata.c = function (a, b) {
        b.item("Index", "Number:int");
        b.item("InnerExtend", "Number:double");
        b.item("ControlSize", "Size");
        b.item("Center", "Point");
        b.item("RingSeries", "ExportedType");
        b.item("RingBreadth", "Number:double");
    };
    RingDescriptionMetadata.d = function (a) {
        RingDescriptionMetadata.b(a);
        a.n("Ring", function () { return new RingDescription(); });
        a.m("Ring", RingDescriptionMetadata.a);
    };
    RingDescriptionMetadata.$t = markType(RingDescriptionMetadata, 'RingDescriptionMetadata');
    RingDescriptionMetadata.a = null;
    return RingDescriptionMetadata;
}(Base));
export { RingDescriptionMetadata };
//# sourceMappingURL=RingDescriptionMetadata.js.map