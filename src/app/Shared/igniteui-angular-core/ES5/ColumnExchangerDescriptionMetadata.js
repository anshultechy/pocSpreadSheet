/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { ColumnExchangerDescription } from "./ColumnExchangerDescription";
/**
 * @hidden
 */
var ColumnExchangerDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(ColumnExchangerDescriptionMetadata, _super);
    function ColumnExchangerDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ColumnExchangerDescriptionMetadata.b = function (a) {
        if (ColumnExchangerDescriptionMetadata.a == null) {
            ColumnExchangerDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            ColumnExchangerDescriptionMetadata.c(a, ColumnExchangerDescriptionMetadata.a);
        }
    };
    ColumnExchangerDescriptionMetadata.c = function (a, b) {
        b.item("TargetIndex", "Number:int");
    };
    ColumnExchangerDescriptionMetadata.d = function (a) {
        ColumnExchangerDescriptionMetadata.b(a);
        a.n("ColumnExchanger", function () { return new ColumnExchangerDescription(); });
        a.m("ColumnExchanger", ColumnExchangerDescriptionMetadata.a);
    };
    ColumnExchangerDescriptionMetadata.$t = markType(ColumnExchangerDescriptionMetadata, 'ColumnExchangerDescriptionMetadata');
    ColumnExchangerDescriptionMetadata.a = null;
    return ColumnExchangerDescriptionMetadata;
}(Base));
export { ColumnExchangerDescriptionMetadata };
//# sourceMappingURL=ColumnExchangerDescriptionMetadata.js.map