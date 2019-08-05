/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { EventArgs, markType } from "./type";
/**
 * @hidden
 */
var TriangulationStatusEventArgs = /** @class */ (function (_super) {
    tslib_1.__extends(TriangulationStatusEventArgs, _super);
    function TriangulationStatusEventArgs(a) {
        var _this = _super.call(this) || this;
        _this._currentStatus = 0;
        _this.currentStatus = a;
        return _this;
    }
    Object.defineProperty(TriangulationStatusEventArgs.prototype, "currentStatus", {
        get: function () {
            return this._currentStatus;
        },
        set: function (a) {
            this._currentStatus = a;
        },
        enumerable: true,
        configurable: true
    });
    TriangulationStatusEventArgs.$t = markType(TriangulationStatusEventArgs, 'TriangulationStatusEventArgs', EventArgs.$);
    return TriangulationStatusEventArgs;
}(EventArgs));
export { TriangulationStatusEventArgs };
//# sourceMappingURL=TriangulationStatusEventArgs.js.map