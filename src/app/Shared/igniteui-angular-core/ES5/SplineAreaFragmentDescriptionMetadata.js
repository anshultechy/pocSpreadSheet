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
import { SplineAreaFragmentDescription } from "./SplineAreaFragmentDescription";
/**
 * @hidden
 */
var SplineAreaFragmentDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(SplineAreaFragmentDescriptionMetadata, _super);
    function SplineAreaFragmentDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SplineAreaFragmentDescriptionMetadata.b = function (a) {
        if (SplineAreaFragmentDescriptionMetadata.a == null) {
            SplineAreaFragmentDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            SplineAreaFragmentDescriptionMetadata.c(a, SplineAreaFragmentDescriptionMetadata.a);
        }
    };
    SplineAreaFragmentDescriptionMetadata.c = function (a, b) {
        SplineFragmentBaseDescriptionMetadata.c(a, b);
    };
    SplineAreaFragmentDescriptionMetadata.d = function (a) {
        SplineAreaFragmentDescriptionMetadata.b(a);
        a.n("SplineAreaFragment", function () { return new SplineAreaFragmentDescription(); });
        a.m("SplineAreaFragment", SplineAreaFragmentDescriptionMetadata.a);
    };
    SplineAreaFragmentDescriptionMetadata.$t = markType(SplineAreaFragmentDescriptionMetadata, 'SplineAreaFragmentDescriptionMetadata');
    SplineAreaFragmentDescriptionMetadata.a = null;
    return SplineAreaFragmentDescriptionMetadata;
}(Base));
export { SplineAreaFragmentDescriptionMetadata };
//# sourceMappingURL=SplineAreaFragmentDescriptionMetadata.js.map