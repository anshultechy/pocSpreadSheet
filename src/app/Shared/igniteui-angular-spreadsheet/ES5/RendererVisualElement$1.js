/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { LayerVisualElement } from "./LayerVisualElement";
import { Rect } from "../../igniteui-angular-core/ES5/Rect";
import { markType } from "../../igniteui-angular-core/ES5/type";
/**
 * @hidden
 */
var RendererVisualElement$1 = /** @class */ (function (_super) {
    tslib_1.__extends(RendererVisualElement$1, _super);
    function RendererVisualElement$1($tGraphics, a, b) {
        var _this = _super.call(this, a, b) || this;
        _this.$tGraphics = null;
        _this.cn = null;
        _this.ci = null;
        _this.$tGraphics = $tGraphics;
        _this.$type = _this.$type.specialize(_this.$tGraphics);
        _this.cn = new Rect(4);
        return _this;
    }
    RendererVisualElement$1.prototype.b5 = function () {
        this.ck();
        this.t = true;
        _super.prototype.b5.call(this);
    };
    RendererVisualElement$1.prototype.an = function (a, b, c, d) {
        var e = this.a3;
        var f = this.av;
        var g = _super.prototype.an.call(this, a, b, c, d);
        if (g && (e != this.a3 || f != this.av)) {
            this.ck();
        }
        return g;
    };
    Object.defineProperty(RendererVisualElement$1.prototype, "ch", {
        get: function () {
            return this.cn.width > 0 || this.cn.height > 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RendererVisualElement$1.prototype, "co", {
        get: function () {
            return this.cn;
        },
        enumerable: true,
        configurable: true
    });
    RendererVisualElement$1.prototype.ck = function () {
        if (this.cn.x != this.ax || this.cn.y != this.a2 || this.cn.width != this.a3 || this.cn.height != this.av) {
            this.cn.x = this.ax;
            this.cn.y = this.a2;
            this.cn.width = this.a3;
            this.cn.height = this.av;
            this.b1();
        }
    };
    RendererVisualElement$1.prototype.cl = function (a, b, c) {
        this.cm(a, b, this.cn, c);
        this.cn.width = 0;
        this.cn.height = 0;
    };
    RendererVisualElement$1.$t = markType(RendererVisualElement$1, 'RendererVisualElement$1', LayerVisualElement.$);
    return RendererVisualElement$1;
}(LayerVisualElement));
export { RendererVisualElement$1 };
//# sourceMappingURL=RendererVisualElement$1.js.map
