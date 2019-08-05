/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Geometry } from "./Geometry";
import { PathFigureCollection } from "./PathFigureCollection";
import { markType } from "./type";
/**
 * @hidden
 */
var PathGeometry = /** @class */ (function (_super) {
    tslib_1.__extends(PathGeometry, _super);
    function PathGeometry() {
        var _this = _super.call(this) || this;
        _this.b = null;
        _this.b = new PathFigureCollection();
        return _this;
    }
    PathGeometry.prototype.get_a = function () {
        return 4;
    };
    Object.defineProperty(PathGeometry.prototype, "a", {
        get: function () {
            return this.get_a();
        },
        enumerable: true,
        configurable: true
    });
    PathGeometry.$t = markType(PathGeometry, 'PathGeometry', Geometry.$);
    return PathGeometry;
}(Geometry));
export { PathGeometry };
//# sourceMappingURL=PathGeometry.js.map