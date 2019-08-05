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
import { LineFragmentDescription } from "./LineFragmentDescription";
/**
 * @hidden
 */
var LineFragmentDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(LineFragmentDescriptionMetadata, _super);
    function LineFragmentDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LineFragmentDescriptionMetadata.b = function (a) {
        if (LineFragmentDescriptionMetadata.a == null) {
            LineFragmentDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            LineFragmentDescriptionMetadata.c(a, LineFragmentDescriptionMetadata.a);
        }
    };
    LineFragmentDescriptionMetadata.c = function (a, b) {
        FragmentBaseDescriptionMetadata.c(a, b);
    };
    LineFragmentDescriptionMetadata.d = function (a) {
        LineFragmentDescriptionMetadata.b(a);
        a.n("LineFragment", function () { return new LineFragmentDescription(); });
        a.m("LineFragment", LineFragmentDescriptionMetadata.a);
    };
    LineFragmentDescriptionMetadata.$t = markType(LineFragmentDescriptionMetadata, 'LineFragmentDescriptionMetadata');
    LineFragmentDescriptionMetadata.a = null;
    return LineFragmentDescriptionMetadata;
}(Base));
export { LineFragmentDescriptionMetadata };
//# sourceMappingURL=LineFragmentDescriptionMetadata.js.map