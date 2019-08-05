/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { GeometryData } from "./GeometryData";
import { List$1 } from "./List$1";
import { PathFigureData } from "./PathFigureData";
import { StringBuilder } from "./StringBuilder";
import { fromEnum, markType } from "./type";
/**
 * @hidden
 */
var PathGeometryData = /** @class */ (function (_super) {
    tslib_1.__extends(PathGeometryData, _super);
    function PathGeometryData() {
        var _this = _super.call(this) || this;
        _this._figures = null;
        _this.figures = new List$1(PathFigureData.$, 0);
        return _this;
    }
    PathGeometryData.prototype.get_type = function () {
        return "Path";
    };
    Object.defineProperty(PathGeometryData.prototype, "type", {
        get: function () {
            return this.get_type();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PathGeometryData.prototype, "figures", {
        get: function () {
            return this._figures;
        },
        set: function (a) {
            this._figures = a;
        },
        enumerable: true,
        configurable: true
    });
    PathGeometryData.prototype.a = function () {
        var a = new StringBuilder(0);
        a.u("figures: [");
        for (var b = 0; b < this.figures.count; b++) {
            if (b != 0) {
                a.l(", ");
            }
            a.l(this.figures._inner[b].serialize());
        }
        a.u("]");
        return a.toString();
    };
    PathGeometryData.prototype.scaleByViewport = function (a) {
        var e_1, _a;
        try {
            for (var _b = tslib_1.__values(fromEnum(this.figures)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var b = _c.value;
                b.d(a);
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
    PathGeometryData.prototype.getPointsOverride = function (a, b) {
        for (var c = 0; c < this.figures.count; c++) {
            var d = this.figures._inner[c];
            d.getPointsOverride(a, b);
        }
    };
    PathGeometryData.$t = markType(PathGeometryData, 'PathGeometryData', GeometryData.$);
    return PathGeometryData;
}(GeometryData));
export { PathGeometryData };
//# sourceMappingURL=PathGeometryData.js.map