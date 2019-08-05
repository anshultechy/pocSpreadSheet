/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { PrimitiveVisualData } from "./PrimitiveVisualData";
import { List$1 } from "./List$1";
import { GeometryData } from "./GeometryData";
import { AppearanceHelper } from "./AppearanceHelper";
import { StringBuilder } from "./StringBuilder";
import { fromEnum, markType } from "./type";
/**
 * @hidden
 */
var PathVisualData = /** @class */ (function (_super) {
    tslib_1.__extends(PathVisualData, _super);
    function PathVisualData(a) {
        var _rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            _rest[_i - 1] = arguments[_i];
        }
        var _this = this;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    _this = _super.call(this, 1, "path1") || this;
                    _this._data = null;
                    _this.data = new List$1(GeometryData.$, 0);
                }
                break;
            case 1:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    _this = _super.call(this, 1, c) || this;
                    _this._data = null;
                    _this.data = AppearanceHelper.g(d.aj);
                    AppearanceHelper.p(_this.appearance, d);
                }
                break;
            case 2:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    _this = _super.call(this, 1, c) || this;
                    _this._data = null;
                    _this.data = AppearanceHelper.h(d);
                    AppearanceHelper.p(_this.appearance, d);
                }
                break;
        }
        return _this;
    }
    PathVisualData.prototype.get_type = function () {
        return "Path";
    };
    Object.defineProperty(PathVisualData.prototype, "type", {
        get: function () {
            return this.get_type();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PathVisualData.prototype, "data", {
        get: function () {
            return this._data;
        },
        set: function (a) {
            this._data = a;
        },
        enumerable: true,
        configurable: true
    });
    PathVisualData.prototype.e = function () {
        var a = new StringBuilder(0);
        a.u("data: [");
        for (var b = 0; b < this.data.count; b++) {
            if (b != 0) {
                a.l(", ");
            }
            a.l((this.data._inner[b] != null ? this.data._inner[b].serialize() : "null"));
        }
        a.u("]");
        return a.toString();
    };
    PathVisualData.prototype.scaleByViewport = function (a) {
        var e_1, _a;
        _super.prototype.scaleByViewport.call(this, a);
        try {
            for (var _b = tslib_1.__values(fromEnum(this.data)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var b = _c.value;
                b.scaleByViewport(a);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    PathVisualData.prototype.getPointsOverride = function (a, b) {
        for (var c = 0; c < this.data.count; c++) {
            var d = this.data._inner[c];
            d.getPointsOverride(a, b);
        }
    };
    PathVisualData.$t = markType(PathVisualData, 'PathVisualData', PrimitiveVisualData.$);
    return PathVisualData;
}(PrimitiveVisualData));
export { PathVisualData };
//# sourceMappingURL=PathVisualData.js.map