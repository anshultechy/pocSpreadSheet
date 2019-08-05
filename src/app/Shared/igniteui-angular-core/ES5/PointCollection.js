/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { List$1 } from "./List$1";
import { Point_$type, markType } from "./type";
/**
 * @hidden
 */
var PointCollection = /** @class */ (function (_super) {
    tslib_1.__extends(PointCollection, _super);
    function PointCollection(a) {
        var _rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            _rest[_i - 1] = arguments[_i];
        }
        var _this = this;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    _this = _super.call(this, Point_$type, 0) || this;
                }
                break;
            case 1:
                {
                    var source_ = _rest[0];
                    _this = _super.call(this, Point_$type, 0) || this;
                    _this._inner = source_._inner;
                }
                break;
        }
        return _this;
    }
    PointCollection.$t = markType(PointCollection, 'PointCollection', List$1.$.specialize(Point_$type));
    return PointCollection;
}(List$1));
export { PointCollection };
//# sourceMappingURL=PointCollection.js.map