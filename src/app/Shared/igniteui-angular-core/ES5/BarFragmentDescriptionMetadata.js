/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { ColumnFragmentDescriptionMetadata } from "./ColumnFragmentDescriptionMetadata";
import { BarFragmentDescription } from "./BarFragmentDescription";
/**
 * @hidden
 */
var BarFragmentDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(BarFragmentDescriptionMetadata, _super);
    function BarFragmentDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BarFragmentDescriptionMetadata.b = function (a) {
        if (BarFragmentDescriptionMetadata.a == null) {
            BarFragmentDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            BarFragmentDescriptionMetadata.c(a, BarFragmentDescriptionMetadata.a);
        }
    };
    BarFragmentDescriptionMetadata.c = function (a, b) {
        ColumnFragmentDescriptionMetadata.c(a, b);
    };
    BarFragmentDescriptionMetadata.d = function (a) {
        BarFragmentDescriptionMetadata.b(a);
        a.n("BarFragment", function () { return new BarFragmentDescription(); });
        a.m("BarFragment", BarFragmentDescriptionMetadata.a);
    };
    BarFragmentDescriptionMetadata.$t = markType(BarFragmentDescriptionMetadata, 'BarFragmentDescriptionMetadata');
    BarFragmentDescriptionMetadata.a = null;
    return BarFragmentDescriptionMetadata;
}(Base));
export { BarFragmentDescriptionMetadata };
//# sourceMappingURL=BarFragmentDescriptionMetadata.js.map