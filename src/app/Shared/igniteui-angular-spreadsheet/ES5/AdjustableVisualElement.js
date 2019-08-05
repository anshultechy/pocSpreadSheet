/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { VisualElement } from "./VisualElement";
import { Point_$type, markType } from "../../igniteui-angular-core/ES5/type";
import { RootVisualElement } from "./RootVisualElement";
/**
 * @hidden
 */
var AdjustableVisualElement = /** @class */ (function (_super) {
    tslib_1.__extends(AdjustableVisualElement, _super);
    function AdjustableVisualElement(a, b) {
        var _this = _super.call(this, a, b) || this;
        _this.cf = false;
        _this.cn = null;
        _this.co = null;
        return _this;
    }
    AdjustableVisualElement.prototype.get_x = function () {
        return true;
    };
    AdjustableVisualElement.prototype.b4 = function () {
        _super.prototype.b4.call(this);
        this.ci(true);
    };
    AdjustableVisualElement.prototype.ad = function (a) {
        if (!this.cf && a.a() == 1) {
            if (!this.cg()) {
                return false;
            }
            var b = a.h();
            if (a.d()) {
                this.cf = true;
                this.co = { $type: Point_$type, x: b.x, y: b.y };
                this.cn = { $type: Point_$type, x: b.x + this.ax, y: b.y + this.a2 };
                this.cm();
                return true;
            }
        }
        return _super.prototype.ad.call(this, a);
    };
    AdjustableVisualElement.prototype.ag = function (a) {
        if (this.cf) {
            var b = a.h();
            var c = b.x + this.ax - this.cn.x;
            var d = b.y + this.a2 - this.cn.y;
            if (c != 0 || d != 0) {
                this.cl(c, d);
            }
        }
        return _super.prototype.ag.call(this, a);
    };
    AdjustableVisualElement.prototype.ah = function (a) {
        if (this.cf) {
            var b = a.h();
            var c = b.x + this.ax - this.cn.x;
            var d = b.y + this.a2 - this.cn.y;
            this.ci(false);
            this.ck(c, d);
        }
        return _super.prototype.ah.call(this, a);
    };
    Object.defineProperty(AdjustableVisualElement.prototype, "ch", {
        get: function () {
            return this.cf;
        },
        enumerable: true,
        configurable: true
    });
    AdjustableVisualElement.prototype.ci = function (a) {
        if (this.cf) {
            this.cf = false;
            this.cn = this.co = null;
            var b = this.g(RootVisualElement.$);
            if (b != null) {
                b.dk(this);
            }
            if (a) {
                this.cj();
            }
        }
    };
    AdjustableVisualElement.prototype.cg = function () {
        return true;
    };
    AdjustableVisualElement.prototype.cm = function () {
    };
    AdjustableVisualElement.prototype.cj = function () {
    };
    AdjustableVisualElement.$t = markType(AdjustableVisualElement, 'AdjustableVisualElement', VisualElement.$);
    return AdjustableVisualElement;
}(VisualElement));
export { AdjustableVisualElement };
//# sourceMappingURL=AdjustableVisualElement.js.map
