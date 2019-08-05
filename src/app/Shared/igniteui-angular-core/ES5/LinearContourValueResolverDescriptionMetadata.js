/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { ContourValueResolverDescriptionMetadata } from "./ContourValueResolverDescriptionMetadata";
import { LinearContourValueResolverDescription } from "./LinearContourValueResolverDescription";
/**
 * @hidden
 */
var LinearContourValueResolverDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(LinearContourValueResolverDescriptionMetadata, _super);
    function LinearContourValueResolverDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LinearContourValueResolverDescriptionMetadata.b = function (a) {
        if (LinearContourValueResolverDescriptionMetadata.a == null) {
            LinearContourValueResolverDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            LinearContourValueResolverDescriptionMetadata.c(a, LinearContourValueResolverDescriptionMetadata.a);
        }
    };
    LinearContourValueResolverDescriptionMetadata.c = function (a, b) {
        ContourValueResolverDescriptionMetadata.c(a, b);
        b.item("ValueCount", "Number:int");
    };
    LinearContourValueResolverDescriptionMetadata.d = function (a) {
        LinearContourValueResolverDescriptionMetadata.b(a);
        a.n("LinearContourValueResolver", function () { return new LinearContourValueResolverDescription(); });
        a.m("LinearContourValueResolver", LinearContourValueResolverDescriptionMetadata.a);
    };
    LinearContourValueResolverDescriptionMetadata.$t = markType(LinearContourValueResolverDescriptionMetadata, 'LinearContourValueResolverDescriptionMetadata');
    LinearContourValueResolverDescriptionMetadata.a = null;
    return LinearContourValueResolverDescriptionMetadata;
}(Base));
export { LinearContourValueResolverDescriptionMetadata };
//# sourceMappingURL=LinearContourValueResolverDescriptionMetadata.js.map