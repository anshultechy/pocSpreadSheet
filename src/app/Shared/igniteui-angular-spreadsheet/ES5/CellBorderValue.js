/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "../../igniteui-angular-core/ES5/type";
/**
 * @hidden
 */
var CellBorderValue = /** @class */ (function (_super) {
    tslib_1.__extends(CellBorderValue, _super);
    function CellBorderValue() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.c = false;
        _this.a = 0;
        _this.b = null;
        _this.d = false;
        return _this;
    }
    CellBorderValue.prototype.e = function (a, b) {
        if (!this.c) {
            this.c = true;
            this.a = a;
            this.b = b;
        }
        else if (this.d) {
            return false;
        }
        else if (this.a != a || !Base.equalsStatic(this.b, b)) {
            this.d = true;
            this.a = -1;
            this.b = null;
            return false;
        }
        return true;
    };
    CellBorderValue.$t = markType(CellBorderValue, 'CellBorderValue');
    return CellBorderValue;
}(Base));
export { CellBorderValue };
//# sourceMappingURL=CellBorderValue.js.map
