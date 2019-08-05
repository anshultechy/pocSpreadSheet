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
var EllipseGeometry = /** @class */ (function (_super) {
    tslib_1.__extends(EllipseGeometry, _super);
    function EllipseGeometry() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.d = null;
        _this.b = 0;
        _this.c = 0;
        return _this;
    }
    EllipseGeometry.prototype.get_a = function () {
        return 3;
    };
    Object.defineProperty(EllipseGeometry.prototype, "a", {
        get: function () {
            return this.get_a();
        },
        enumerable: true,
        configurable: true
    });
    EllipseGeometry.$t = markType(EllipseGeometry, 'EllipseGeometry', Geometry.$);
    return EllipseGeometry;
}(Geometry));
export { EllipseGeometry };
//# sourceMappingURL=EllipseGeometry.js.map