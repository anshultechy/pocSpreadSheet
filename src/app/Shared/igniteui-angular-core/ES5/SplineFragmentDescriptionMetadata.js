/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { SplineFragmentBaseDescriptionMetadata } from "./SplineFragmentBaseDescriptionMetadata";
import { SplineFragmentDescription } from "./SplineFragmentDescription";
/**
 * @hidden
 */
var SplineFragmentDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(SplineFragmentDescriptionMetadata, _super);
    function SplineFragmentDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SplineFragmentDescriptionMetadata.b = function (a) {
        if (SplineFragmentDescriptionMetadata.a == null) {
            SplineFragmentDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            SplineFragmentDescriptionMetadata.c(a, SplineFragmentDescriptionMetadata.a);
        }
    };
    SplineFragmentDescriptionMetadata.c = function (a, b) {
        SplineFragmentBaseDescriptionMetadata.c(a, b);
    };
    SplineFragmentDescriptionMetadata.d = function (a) {
        SplineFragmentDescriptionMetadata.b(a);
        a.n("SplineFragment", function () { return new SplineFragmentDescription(); });
        a.m("SplineFragment", SplineFragmentDescriptionMetadata.a);
    };
    SplineFragmentDescriptionMetadata.$t = markType(SplineFragmentDescriptionMetadata, 'SplineFragmentDescriptionMetadata');
    SplineFragmentDescriptionMetadata.a = null;
    return SplineFragmentDescriptionMetadata;
}(Base));
export { SplineFragmentDescriptionMetadata };
//# sourceMappingURL=SplineFragmentDescriptionMetadata.js.map