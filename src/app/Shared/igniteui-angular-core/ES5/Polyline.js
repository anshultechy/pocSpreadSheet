/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Shape } from "./Shape";
import { PointCollection } from "./PointCollection";
import { markType } from "./type";
/**
 * @hidden
 */
var Polyline = /** @class */ (function (_super) {
    tslib_1.__extends(Polyline, _super);
    function Polyline() {
        var _this = _super.call(this) || this;
        _this.aj = null;
        _this.aj = new PointCollection(0);
        return _this;
    }
    Polyline.$t = markType(Polyline, 'Polyline', Shape.$);
    return Polyline;
}(Shape));
export { Polyline };
//# sourceMappingURL=Polyline.js.map