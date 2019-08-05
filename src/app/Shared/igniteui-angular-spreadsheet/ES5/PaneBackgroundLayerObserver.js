/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { SpreadsheetPaneLayerObserver } from "./SpreadsheetPaneLayerObserver";
import { markType } from "../../igniteui-angular-core/ES5/type";
/**
 * @hidden
 */
var PaneBackgroundLayerObserver = /** @class */ (function (_super) {
    tslib_1.__extends(PaneBackgroundLayerObserver, _super);
    function PaneBackgroundLayerObserver(a, b) {
        var _this = _super.call(this, a) || this;
        _this._g = null;
        _this._g = b;
        _this._b(a.columnScrollRegion._x);
        _this._b(a.rowScrollRegion._x);
        _this._b(a);
        return _this;
    }
    PaneBackgroundLayerObserver.prototype._d = function (a, b, c) {
        var d = false;
        switch (b != null ? b : "") {
            case "":
            case "Offset":
                if (this._f._ac != null) {
                    if (a == this._f.rowScrollRegion._x || a == this._f.columnScrollRegion._x) {
                        d = true;
                    }
                }
                break;
            case "Background":
                if (a == this._f) {
                    d = true;
                }
                break;
        }
        if (d) {
            this._g();
        }
    };
    PaneBackgroundLayerObserver.prototype.dispose = function () {
        this._e(this._f.columnScrollRegion._x);
        this._e(this._f.rowScrollRegion._x);
        this._e(this._f);
    };
    PaneBackgroundLayerObserver.$t = markType(PaneBackgroundLayerObserver, 'PaneBackgroundLayerObserver', SpreadsheetPaneLayerObserver.$);
    return PaneBackgroundLayerObserver;
}(SpreadsheetPaneLayerObserver));
export { PaneBackgroundLayerObserver };
//# sourceMappingURL=PaneBackgroundLayerObserver.js.map
