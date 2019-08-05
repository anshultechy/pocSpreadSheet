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
var PropertyPath = /** @class */ (function (_super) {
    tslib_1.__extends(PropertyPath, _super);
    function PropertyPath(a) {
        var _this = _super.call(this) || this;
        _this.a = null;
        _this.b = a;
        return _this;
    }
    Object.defineProperty(PropertyPath.prototype, "b", {
        get: function () {
            return this.a;
        },
        set: function (a) {
            this.a = a;
        },
        enumerable: true,
        configurable: true
    });
    PropertyPath.$t = markType(PropertyPath, 'PropertyPath');
    return PropertyPath;
}(Base));
export { PropertyPath };
//# sourceMappingURL=PropertyPath.js.map