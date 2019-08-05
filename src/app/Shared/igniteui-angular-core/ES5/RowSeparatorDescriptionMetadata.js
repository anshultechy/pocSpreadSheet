/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { DefinitionBaseDescriptionMetadata } from "./DefinitionBaseDescriptionMetadata";
import { RowSeparatorDescription } from "./RowSeparatorDescription";
/**
 * @hidden
 */
var RowSeparatorDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(RowSeparatorDescriptionMetadata, _super);
    function RowSeparatorDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RowSeparatorDescriptionMetadata.b = function (a) {
        if (RowSeparatorDescriptionMetadata.a == null) {
            RowSeparatorDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            RowSeparatorDescriptionMetadata.c(a, RowSeparatorDescriptionMetadata.a);
        }
    };
    RowSeparatorDescriptionMetadata.c = function (a, b) {
        DefinitionBaseDescriptionMetadata.c(a, b);
    };
    RowSeparatorDescriptionMetadata.d = function (a) {
        RowSeparatorDescriptionMetadata.b(a);
        a.n("RowSeparator", function () { return new RowSeparatorDescription(); });
        a.m("RowSeparator", RowSeparatorDescriptionMetadata.a);
    };
    RowSeparatorDescriptionMetadata.$t = markType(RowSeparatorDescriptionMetadata, 'RowSeparatorDescriptionMetadata');
    RowSeparatorDescriptionMetadata.a = null;
    return RowSeparatorDescriptionMetadata;
}(Base));
export { RowSeparatorDescriptionMetadata };
//# sourceMappingURL=RowSeparatorDescriptionMetadata.js.map