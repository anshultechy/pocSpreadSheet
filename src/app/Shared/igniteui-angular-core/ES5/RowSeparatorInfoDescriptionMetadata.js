/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { CellInfoDescriptionMetadata } from "./CellInfoDescriptionMetadata";
import { RowSeparatorInfoDescription } from "./RowSeparatorInfoDescription";
/**
 * @hidden
 */
var RowSeparatorInfoDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(RowSeparatorInfoDescriptionMetadata, _super);
    function RowSeparatorInfoDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RowSeparatorInfoDescriptionMetadata.b = function (a) {
        if (RowSeparatorInfoDescriptionMetadata.a == null) {
            RowSeparatorInfoDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            RowSeparatorInfoDescriptionMetadata.c(a, RowSeparatorInfoDescriptionMetadata.a);
        }
    };
    RowSeparatorInfoDescriptionMetadata.c = function (a, b) {
        CellInfoDescriptionMetadata.c(a, b);
    };
    RowSeparatorInfoDescriptionMetadata.d = function (a) {
        RowSeparatorInfoDescriptionMetadata.b(a);
        a.n("RowSeparatorInfo", function () { return new RowSeparatorInfoDescription(); });
        a.m("RowSeparatorInfo", RowSeparatorInfoDescriptionMetadata.a);
    };
    RowSeparatorInfoDescriptionMetadata.$t = markType(RowSeparatorInfoDescriptionMetadata, 'RowSeparatorInfoDescriptionMetadata');
    RowSeparatorInfoDescriptionMetadata.a = null;
    return RowSeparatorInfoDescriptionMetadata;
}(Base));
export { RowSeparatorInfoDescriptionMetadata };
//# sourceMappingURL=RowSeparatorInfoDescriptionMetadata.js.map