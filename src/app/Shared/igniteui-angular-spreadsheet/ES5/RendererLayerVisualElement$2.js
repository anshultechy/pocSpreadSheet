/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { RendererVisualElement$1 } from "./RendererVisualElement$1";
import { List$1 } from "../../igniteui-angular-core/ES5/List$1";
import { RendererElementLayer$2 } from "./RendererElementLayer$2";
import { fromEnum, markType } from "../../igniteui-angular-core/ES5/type";
/**
 * @hidden
 */
var RendererLayerVisualElement$2 = /** @class */ (function (_super) {
    tslib_1.__extends(RendererLayerVisualElement$2, _super);
    function RendererLayerVisualElement$2($tViewModel, $tGraphics, a, b) {
        var _this = _super.call(this, $tGraphics, a, b) || this;
        _this.$tViewModel = null;
        _this.$tGraphics = null;
        _this.cq = null;
        _this.$tViewModel = $tViewModel;
        _this.$tGraphics = $tGraphics;
        _this.$type = _this.$type.specialize(_this.$tViewModel, _this.$tGraphics);
        _this.cq = new List$1(RendererElementLayer$2.$.specialize(_this.$tViewModel, _this.$tGraphics), 0);
        return _this;
    }
    RendererLayerVisualElement$2.prototype.cf = function (a) {
        for (var b = 0, c = this.cq.count; b < c; b++) {
            this.cq._inner[b]._g(a);
        }
    };
    RendererLayerVisualElement$2.prototype.bz = function () {
        var e_1, _a;
        var a = new List$1(RendererElementLayer$2.$.specialize(this.$tViewModel, this.$tGraphics), 1, this.cq);
        try {
            for (var _b = tslib_1.__values(fromEnum(a)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var b = _c.value;
                b.dispose();
                b._d.detach(b);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        _super.prototype.bz.call(this);
    };
    RendererLayerVisualElement$2.prototype.cg = function (a) {
        for (var b = 0, c = this.cq.count; b < c; b++) {
            this.cq._inner[b]._h(a);
        }
    };
    RendererLayerVisualElement$2.prototype.cr = function (a) {
        this.cq.add(a);
        this.t = true;
        this.ck();
    };
    RendererLayerVisualElement$2.prototype.cp = function () {
        return this.cq;
    };
    RendererLayerVisualElement$2.prototype.cm = function (a, b, c, d) {
        for (var e = 0, f = this.cq.count; e < f; e++) {
            this.cq._inner[e]._q(a, b, c, d);
        }
    };
    RendererLayerVisualElement$2.prototype.cs = function (a) {
        this.cq.remove(a);
        this.ck();
    };
    RendererLayerVisualElement$2.$t = markType(RendererLayerVisualElement$2, 'RendererLayerVisualElement$2', RendererVisualElement$1.$.specialize(1));
    return RendererLayerVisualElement$2;
}(RendererVisualElement$1));
export { RendererLayerVisualElement$2 };
//# sourceMappingURL=RendererLayerVisualElement$2.js.map
