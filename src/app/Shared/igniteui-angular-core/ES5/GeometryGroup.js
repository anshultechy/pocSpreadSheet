/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Geometry } from "./Geometry";
import { GeometryCollection } from "./GeometryCollection";
import { markType } from "./type";
/**
 * @hidden
 */
var GeometryGroup = /** @class */ (function (_super) {
    tslib_1.__extends(GeometryGroup, _super);
    function GeometryGroup() {
        var _this = _super.call(this) || this;
        _this.c = null;
        _this.b = 0;
        _this.c = new GeometryCollection();
        return _this;
    }
    GeometryGroup.prototype.get_a = function () {
        return 0;
    };
    Object.defineProperty(GeometryGroup.prototype, "a", {
        get: function () {
            return this.get_a();
        },
        enumerable: true,
        configurable: true
    });
    GeometryGroup.$t = markType(GeometryGroup, 'GeometryGroup', Geometry.$);
    return GeometryGroup;
}(Geometry));
export { GeometryGroup };
//# sourceMappingURL=GeometryGroup.js.map