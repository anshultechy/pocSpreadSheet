/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "../../igniteui-angular-core/ES5/type";
import { WorksheetRegionAddress } from "../../igniteui-angular-excel/ES5/excel.core";
/**
 * @hidden
 */
var CellRegionMapBase = /** @class */ (function (_super) {
    tslib_1.__extends(CellRegionMapBase, _super);
    function CellRegionMapBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CellRegionMapBase.prototype.f = function (a) {
        var b = this.b;
        for (var c = 0; c < b.length; c++) {
            if (b[c]._h(a)) {
                return true;
            }
        }
        return false;
    };
    CellRegionMapBase.prototype.e = function (a, b) {
        var c = this.b;
        for (var d = 0; d < c.length; d++) {
            if (c[d]._i(a, b)) {
                return c[d];
            }
        }
        return WorksheetRegionAddress._b;
    };
    CellRegionMapBase.$t = markType(CellRegionMapBase, 'CellRegionMapBase');
    return CellRegionMapBase;
}(Base));
export { CellRegionMapBase };
//# sourceMappingURL=CellRegionMapBase.js.map
