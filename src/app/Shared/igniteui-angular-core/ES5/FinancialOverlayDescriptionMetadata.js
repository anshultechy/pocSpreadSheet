/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { FinancialSeriesDescriptionMetadata } from "./FinancialSeriesDescriptionMetadata";
/**
 * @hidden
 */
var FinancialOverlayDescriptionMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(FinancialOverlayDescriptionMetadata, _super);
    function FinancialOverlayDescriptionMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FinancialOverlayDescriptionMetadata.b = function (a) {
        if (FinancialOverlayDescriptionMetadata.a == null) {
            FinancialOverlayDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            FinancialOverlayDescriptionMetadata.c(a, FinancialOverlayDescriptionMetadata.a);
        }
    };
    FinancialOverlayDescriptionMetadata.c = function (a, b) {
        FinancialSeriesDescriptionMetadata.c(a, b);
        b.item("IgnoreFirst", "Number:int");
    };
    FinancialOverlayDescriptionMetadata.d = function (a) {
        FinancialOverlayDescriptionMetadata.b(a);
        a.m("FinancialOverlay", FinancialOverlayDescriptionMetadata.a);
    };
    FinancialOverlayDescriptionMetadata.$t = markType(FinancialOverlayDescriptionMetadata, 'FinancialOverlayDescriptionMetadata');
    FinancialOverlayDescriptionMetadata.a = null;
    return FinancialOverlayDescriptionMetadata;
}(Base));
export { FinancialOverlayDescriptionMetadata };
//# sourceMappingURL=FinancialOverlayDescriptionMetadata.js.map