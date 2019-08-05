/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { FragmentBaseDescriptionMetadata } from "./FragmentBaseDescriptionMetadata";
import { ColumnFragmentDescription } from "./ColumnFragmentDescription";
/**
 * @hidden
 */
var ColumnFragmentDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(ColumnFragmentDescriptionMetadata, _super);
    function ColumnFragmentDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ColumnFragmentDescriptionMetadata.b = function (a) {
        if (ColumnFragmentDescriptionMetadata.a == null) {
            ColumnFragmentDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            ColumnFragmentDescriptionMetadata.c(a, ColumnFragmentDescriptionMetadata.a);
        }
    };
    ColumnFragmentDescriptionMetadata.c = function (a, b) {
        FragmentBaseDescriptionMetadata.c(a, b);
        b.item("RadiusX", "Number:double");
        b.item("RadiusY", "Number:double");
    };
    ColumnFragmentDescriptionMetadata.d = function (a) {
        ColumnFragmentDescriptionMetadata.b(a);
        a.n("ColumnFragment", function () { return new ColumnFragmentDescription(); });
        a.m("ColumnFragment", ColumnFragmentDescriptionMetadata.a);
    };
    ColumnFragmentDescriptionMetadata.$t = markType(ColumnFragmentDescriptionMetadata, 'ColumnFragmentDescriptionMetadata');
    ColumnFragmentDescriptionMetadata.a = null;
    return ColumnFragmentDescriptionMetadata;
}(Base));
export { ColumnFragmentDescriptionMetadata };
//# sourceMappingURL=ColumnFragmentDescriptionMetadata.js.map