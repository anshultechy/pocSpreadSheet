/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { SpreadsheetHeaderContentLayerBase_HeaderInfo$1 } from "./SpreadsheetHeaderContentLayerBase_HeaderInfo$1";
import { HeaderVisual } from "./HeaderVisual";
import { markType } from "../../igniteui-angular-core/ES5/type";
/**
 * @hidden
 */
var HeaderVisualInfo = /** @class */ (function (_super) {
    tslib_1.__extends(HeaderVisualInfo, _super);
    function HeaderVisualInfo() {
        var _this = _super.call(this, HeaderVisual.$) || this;
        _this.q = null;
        _this.p = 0;
        _this.n = 0;
        _this.o = 0;
        _this.i = false;
        _this.l = 0;
        _this.m = 0;
        _this.k = 0;
        _this.j = 0;
        return _this;
    }
    HeaderVisualInfo.prototype.f = function (a, b, c, d) {
        this.i = true;
        this.l = a;
        this.m = b;
        this.k = c;
        this.j = d;
    };
    HeaderVisualInfo.prototype.g = function () {
        this.i = false;
    };
    HeaderVisualInfo.prototype.h = function (a, b) {
        this.n = a;
        this.o = b;
    };
    HeaderVisualInfo.$t = markType(HeaderVisualInfo, 'HeaderVisualInfo', SpreadsheetHeaderContentLayerBase_HeaderInfo$1.$.specialize(HeaderVisual.$));
    return HeaderVisualInfo;
}(SpreadsheetHeaderContentLayerBase_HeaderInfo$1));
export { HeaderVisualInfo };
//# sourceMappingURL=HeaderVisualInfo.js.map
