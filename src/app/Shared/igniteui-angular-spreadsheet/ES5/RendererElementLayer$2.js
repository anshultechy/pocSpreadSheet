/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { ElementLayer$1 } from "./ElementLayer$1";
import { Rect } from "../../igniteui-angular-core/ES5/Rect";
import { Size } from "../../igniteui-angular-core/ES5/Size";
import { markType } from "../../igniteui-angular-core/ES5/type";
/**
 * @hidden
 */
var RendererElementLayer$2 = /** @class */ (function (_super) {
    tslib_1.__extends(RendererElementLayer$2, _super);
    function RendererElementLayer$2($tViewModel, $tGraphics, a, b, c) {
        var _this = _super.call(this, $tViewModel, a, b, c) || this;
        _this.$tViewModel = null;
        _this.$tGraphics = null;
        _this._k = null;
        _this.$tViewModel = $tViewModel;
        _this.$tGraphics = $tGraphics;
        _this.$type = _this.$type.specialize(_this.$tViewModel, _this.$tGraphics);
        return _this;
    }
    RendererElementLayer$2.prototype._g = function (a) {
        var b = new Rect(0, 0, 0, a.width, a.height);
        this._k._arrange$i(a);
        return b;
    };
    RendererElementLayer$2.prototype.dispose = function () {
        if (this._k != null) {
            this._d.releaseRenderer(this._k);
            this._k.onUnloaded();
        }
        this._p();
    };
    RendererElementLayer$2.prototype._h = function (a) {
        if (this._k == null) {
            this._k = this._d.createRenderer();
        }
        this._k._measure$i(a);
        return new Size(0);
    };
    Object.defineProperty(RendererElementLayer$2.prototype, "_l", {
        get: function () {
            return this._k;
        },
        enumerable: true,
        configurable: true
    });
    RendererElementLayer$2.prototype._r = function (a) {
        return a;
    };
    RendererElementLayer$2.prototype._p = function () {
    };
    RendererElementLayer$2.prototype._o = function () {
        if (this._k != null) {
            this._k.invalidateRender();
        }
    };
    RendererElementLayer$2.prototype._n = function () {
        if (this._k != null) {
            this._k.invalidateLayout();
        }
    };
    RendererElementLayer$2.$t = markType(RendererElementLayer$2, 'RendererElementLayer$2', ElementLayer$1.$.specialize(0));
    return RendererElementLayer$2;
}(ElementLayer$1));
export { RendererElementLayer$2 };
//# sourceMappingURL=RendererElementLayer$2.js.map
