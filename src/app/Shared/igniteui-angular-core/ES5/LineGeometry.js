/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Geometry } from "./Geometry";
import { markType } from "./type";
/**
 * @hidden
 */
var LineGeometry = /** @class */ (function (_super) {
    tslib_1.__extends(LineGeometry, _super);
    function LineGeometry() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.c = null;
        _this.b = null;
        return _this;
    }
    LineGeometry.prototype.get_a = function () {
        return 1;
    };
    Object.defineProperty(LineGeometry.prototype, "a", {
        get: function () {
            return this.get_a();
        },
        enumerable: true,
        configurable: true
    });
    LineGeometry.$t = markType(LineGeometry, 'LineGeometry', Geometry.$);
    return LineGeometry;
}(Geometry));
export { LineGeometry };
//# sourceMappingURL=LineGeometry.js.map