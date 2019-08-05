/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { CalculatedColumnDescription } from "./CalculatedColumnDescription";
/**
 * @hidden
 */
var CalculatedColumnDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(CalculatedColumnDescriptionMetadata, _super);
    function CalculatedColumnDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CalculatedColumnDescriptionMetadata.b = function (a) {
        if (CalculatedColumnDescriptionMetadata.a == null) {
            CalculatedColumnDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            CalculatedColumnDescriptionMetadata.c(a, CalculatedColumnDescriptionMetadata.a);
        }
    };
    CalculatedColumnDescriptionMetadata.c = function (a, b) {
    };
    CalculatedColumnDescriptionMetadata.d = function (a) {
        CalculatedColumnDescriptionMetadata.b(a);
        a.n("CalculatedColumn", function () { return new CalculatedColumnDescription(); });
        a.m("CalculatedColumn", CalculatedColumnDescriptionMetadata.a);
    };
    CalculatedColumnDescriptionMetadata.$t = markType(CalculatedColumnDescriptionMetadata, 'CalculatedColumnDescriptionMetadata');
    CalculatedColumnDescriptionMetadata.a = null;
    return CalculatedColumnDescriptionMetadata;
}(Base));
export { CalculatedColumnDescriptionMetadata };
//# sourceMappingURL=CalculatedColumnDescriptionMetadata.js.map