/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, Nullable$1, runOn, delegateRemove, Number_$type, delegateCombine, markType } from "../../igniteui-angular-core/ES5/type";
import { IPlatformScrollBarAdapter_$type } from "./IPlatformScrollBarAdapter";
import { stringIsNullOrEmpty } from "../../igniteui-angular-core/ES5/string";
/**
 * @hidden
 */
var JsScrollBarAdapter = /** @class */ (function (_super) {
    tslib_1.__extends(JsScrollBarAdapter, _super);
    function JsScrollBarAdapter(a) {
        var _this = _super.call(this) || this;
        _this.a = null;
        _this.c = null;
        _this.a = a;
        return _this;
    }
    Object.defineProperty(JsScrollBarAdapter.prototype, "b", {
        get: function () {
            return this.a.a.ck;
        },
        enumerable: true,
        configurable: true
    });
    JsScrollBarAdapter.prototype.d = function () {
        this.a.c();
    };
    JsScrollBarAdapter.prototype.getValue = function () {
        return this.b._ac;
    };
    JsScrollBarAdapter.prototype.initialize = function (a, b, c, d, e, f) {
        var g = this.b;
        if (this.c != null) {
            g.propertyChanged = delegateRemove(g.propertyChanged, runOn(this, this.e));
        }
        g._ab = a;
        g._ae = f;
        g._ah = Nullable$1.toNullable(Number_$type, e);
        g._aj(c, b + e, d);
        if (this.c != null) {
            g.propertyChanged = delegateCombine(g.propertyChanged, runOn(this, this.e));
        }
    };
    JsScrollBarAdapter.prototype.setMinimum = function (a) {
        this.b._ab = a;
    };
    JsScrollBarAdapter.prototype.setMaximum = function (a) {
        var b = this.b;
        b._aj(b._af, a + b._z, b._ac);
    };
    JsScrollBarAdapter.prototype.setViewportSize = function (a) {
        var b = this.b;
        b._aj(a, b._t, b._ac);
    };
    JsScrollBarAdapter.prototype.setValue = function (a) {
        this.b._aq(a);
    };
    JsScrollBarAdapter.prototype.setLargeChange = function (a) {
        this.b._ah = Nullable$1.toNullable(Number_$type, a);
    };
    JsScrollBarAdapter.prototype.setSmallChange = function (a) {
        this.b._ae = a;
    };
    JsScrollBarAdapter.prototype.setIsEnabled = function (a) {
        this.a.b = a;
    };
    JsScrollBarAdapter.prototype.setIsVisible = function (a) {
        this.a.a.ac = a;
    };
    JsScrollBarAdapter.prototype.setOnValueChangeCallback = function (a) {
        if (this.c != null) {
            var b = this.b;
            b.propertyChanged = delegateRemove(b.propertyChanged, runOn(this, this.e));
        }
        this.c = a;
        if (this.c != null) {
            var c = this.b;
            c.propertyChanged = delegateCombine(c.propertyChanged, runOn(this, this.e));
        }
    };
    JsScrollBarAdapter.prototype.e = function (a, b) {
        if (stringIsNullOrEmpty(b.propertyName) || b.propertyName == "Offset") {
            if (this.c != null) {
                this.c(this.b._ac);
            }
        }
    };
    JsScrollBarAdapter.$t = markType(JsScrollBarAdapter, 'JsScrollBarAdapter', Base.$, [IPlatformScrollBarAdapter_$type]);
    return JsScrollBarAdapter;
}(Base));
export { JsScrollBarAdapter };
//# sourceMappingURL=JsScrollBarAdapter.js.map
