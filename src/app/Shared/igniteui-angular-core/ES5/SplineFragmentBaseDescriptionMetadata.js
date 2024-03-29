/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { SplineSeriesBaseDescriptionMetadata } from "./SplineSeriesBaseDescriptionMetadata";
/**
 * @hidden
 */
var SplineFragmentBaseDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(SplineFragmentBaseDescriptionMetadata, _super);
    function SplineFragmentBaseDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SplineFragmentBaseDescriptionMetadata.b = function (a) {
        if (SplineFragmentBaseDescriptionMetadata.a == null) {
            SplineFragmentBaseDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            SplineFragmentBaseDescriptionMetadata.c(a, SplineFragmentBaseDescriptionMetadata.a);
        }
    };
    SplineFragmentBaseDescriptionMetadata.c = function (a, b) {
        SplineSeriesBaseDescriptionMetadata.c(a, b);
    };
    SplineFragmentBaseDescriptionMetadata.d = function (a) {
        SplineFragmentBaseDescriptionMetadata.b(a);
        a.m("SplineFragmentBase", SplineFragmentBaseDescriptionMetadata.a);
    };
    SplineFragmentBaseDescriptionMetadata.$t = markType(SplineFragmentBaseDescriptionMetadata, 'SplineFragmentBaseDescriptionMetadata');
    SplineFragmentBaseDescriptionMetadata.a = null;
    return SplineFragmentBaseDescriptionMetadata;
}(Base));
export { SplineFragmentBaseDescriptionMetadata };
//# sourceMappingURL=SplineFragmentBaseDescriptionMetadata.js.map