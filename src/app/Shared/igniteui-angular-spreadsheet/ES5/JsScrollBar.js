/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "../../igniteui-angular-core/ES5/type";
import { ScrollBarVisualElement } from "./ScrollBarVisualElement";
/**
 * @hidden
 */
var JsScrollBar = /** @class */ (function (_super) {
    tslib_1.__extends(JsScrollBar, _super);
    function JsScrollBar(a, b) {
        var _this = _super.call(this) || this;
        _this.a = null;
        _this.a = new ScrollBarVisualElement(a, b, "ScrollBar");
        var c = _this.a.cn;
        return _this;
    }
    Object.defineProperty(JsScrollBar.prototype, "b", {
        get: function () {
            return this.a.u;
        },
        set: function (a) {
            if (a != this.a.u) {
                this.a.u = a;
            }
        },
        enumerable: true,
        configurable: true
    });
    JsScrollBar.prototype.c = function () {
        this.a.ab = true;
    };
    JsScrollBar.$t = markType(JsScrollBar, 'JsScrollBar');
    return JsScrollBar;
}(Base));
export { JsScrollBar };
//# sourceMappingURL=JsScrollBar.js.map
