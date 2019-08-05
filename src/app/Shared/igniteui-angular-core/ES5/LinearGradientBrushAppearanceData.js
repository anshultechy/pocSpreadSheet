/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { BrushAppearanceData } from "./BrushAppearanceData";
import { List$1 } from "./List$1";
import { GradientStopAppearanceData } from "./GradientStopAppearanceData";
import { StringBuilder } from "./StringBuilder";
import { markType } from "./type";
/**
 * @hidden
 */
var LinearGradientBrushAppearanceData = /** @class */ (function (_super) {
    tslib_1.__extends(LinearGradientBrushAppearanceData, _super);
    function LinearGradientBrushAppearanceData() {
        var _this = _super.call(this) || this;
        _this._startX = 0;
        _this._startY = 0;
        _this._endX = 0;
        _this._endY = 0;
        _this._stops = null;
        _this.stops = new List$1(GradientStopAppearanceData.$, 0);
        return _this;
    }
    LinearGradientBrushAppearanceData.prototype.get_type = function () {
        return "linear";
    };
    Object.defineProperty(LinearGradientBrushAppearanceData.prototype, "type", {
        get: function () {
            return this.get_type();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinearGradientBrushAppearanceData.prototype, "startX", {
        get: function () {
            return this._startX;
        },
        set: function (a) {
            this._startX = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinearGradientBrushAppearanceData.prototype, "startY", {
        get: function () {
            return this._startY;
        },
        set: function (a) {
            this._startY = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinearGradientBrushAppearanceData.prototype, "endX", {
        get: function () {
            return this._endX;
        },
        set: function (a) {
            this._endX = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinearGradientBrushAppearanceData.prototype, "endY", {
        get: function () {
            return this._endY;
        },
        set: function (a) {
            this._endY = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinearGradientBrushAppearanceData.prototype, "stops", {
        get: function () {
            return this._stops;
        },
        set: function (a) {
            this._stops = a;
        },
        enumerable: true,
        configurable: true
    });
    LinearGradientBrushAppearanceData.prototype.a = function () {
        var a = new StringBuilder(0);
        a.l("startX: " + this.startX + ", endX: " + this.endX + ", startY: " + this.startY + ", endY: " + this.endY);
        a.l(", stops: [");
        for (var b = 0; b < this.stops.count; b++) {
            if (b > 0) {
                a.l(", ");
            }
            a.l(this.stops._inner[b].serialize());
        }
        a.l("]");
        return a.toString();
    };
    LinearGradientBrushAppearanceData.$t = markType(LinearGradientBrushAppearanceData, 'LinearGradientBrushAppearanceData', BrushAppearanceData.$);
    return LinearGradientBrushAppearanceData;
}(BrushAppearanceData));
export { LinearGradientBrushAppearanceData };
//# sourceMappingURL=LinearGradientBrushAppearanceData.js.map