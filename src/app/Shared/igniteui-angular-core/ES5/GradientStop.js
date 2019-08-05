/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, Nullable$1, markType } from "./type";
import { Color } from "./Color";
/**
 * @hidden
 */
var GradientStop = /** @class */ (function (_super) {
    tslib_1.__extends(GradientStop, _super);
    function GradientStop() {
        var _this = _super.call(this) || this;
        _this.offset = 0;
        _this._fill = null;
        _this.d = null;
        _this.g = new Color();
        _this.offset = 0;
        return _this;
    }
    GradientStop.prototype.clone = function () {
        var a = new GradientStop();
        a.offset = this.offset;
        a._fill = this._fill;
        return a;
    };
    Object.defineProperty(GradientStop.prototype, "fill", {
        get: function () {
            return this._fill;
        },
        set: function (a) {
            this._fill = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GradientStop.prototype, "color", {
        get: function () {
            if (this._fill == this.d) {
                return this.g;
            }
            var a = new Color();
            if (this._fill != null) {
                a.colorString = this._fill;
                this.g = a;
                this.d = this._fill;
            }
            return a;
        },
        set: function (a) {
            this.g = a;
            this.d = this.g.colorString;
            this._fill = this.d;
        },
        enumerable: true,
        configurable: true
    });
    GradientStop.prototype.equals = function (a) {
        if (a == null) {
            return false;
        }
        var b = a;
        return this.offset == b.offset && this.color.equals(b.color) && Base.equalsStatic(this._fill, b._fill);
    };
    GradientStop.prototype.getHashCode = function () {
        var a = (this.offset);
        if (Color.e(Nullable$1.toNullable(Color.$, this.g), Nullable$1.toNullable(Color.$, null))) {
            a ^= this.g.getHashCode();
        }
        return a;
    };
    GradientStop.$t = markType(GradientStop, 'GradientStop');
    return GradientStop;
}(Base));
export { GradientStop };
//# sourceMappingURL=GradientStop.js.map