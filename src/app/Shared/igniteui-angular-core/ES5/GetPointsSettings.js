/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "./type";
/**
 * @hidden
 */
var GetPointsSettings = /** @class */ (function (_super) {
    tslib_1.__extends(GetPointsSettings, _super);
    function GetPointsSettings() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._ignoreFigureStartPoint = false;
        return _this;
    }
    Object.defineProperty(GetPointsSettings.prototype, "ignoreFigureStartPoint", {
        get: function () {
            return this._ignoreFigureStartPoint;
        },
        set: function (a) {
            this._ignoreFigureStartPoint = a;
        },
        enumerable: true,
        configurable: true
    });
    GetPointsSettings.$t = markType(GetPointsSettings, 'GetPointsSettings');
    return GetPointsSettings;
}(Base));
export { GetPointsSettings };
//# sourceMappingURL=GetPointsSettings.js.map