/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "./type";
import { stringContains, stringStartsWith } from "./string";
/**
 * @hidden
 */
var FastReflectionHelper = /** @class */ (function (_super) {
    tslib_1.__extends(FastReflectionHelper, _super);
    function FastReflectionHelper(a, b) {
        var _this = _super.call(this) || this;
        _this.c = false;
        _this._propertyName = null;
        _this.a = null;
        _this.b = false;
        _this.d = false;
        _this._index = -1;
        _this.k = null;
        _this._useTraditionalReflection = false;
        _this.useTraditionalReflection = a;
        _this.n(b);
        return _this;
    }
    FastReflectionHelper.needsHelper = function (a) {
        if (a == null) {
            return false;
        }
        if (a != "." && a != null && stringContains(a, ".") || stringContains(a, "[")) {
            return true;
        }
        return false;
    };
    Object.defineProperty(FastReflectionHelper.prototype, "propertyName", {
        get: function () {
            return this._propertyName;
        },
        set: function (a) {
            if (a != this.k) {
                this.n(a);
            }
        },
        enumerable: true,
        configurable: true
    });
    FastReflectionHelper.prototype.n = function (a) {
        this.k = a;
        this._propertyName = a;
        this.c = false;
        if (this._propertyName == ".") {
            this.c = true;
            return;
        }
        if (this._propertyName == null) {
            return;
        }
        var b = false;
        if (stringStartsWith(a, "[")) {
            b = true;
        }
        while (stringStartsWith(a, ".")) {
            a = a.substr(1);
        }
        while (stringStartsWith(a, "[")) {
            a = a.substr(1);
        }
        var c = a.indexOf("[");
        var d = a.indexOf(".");
        var e = -1;
        if (c < 0) {
            e = d;
        }
        else if (d < 0) {
            e = c;
        }
        else {
            e = Math.min(d, c);
        }
        if (e > 0) {
            if (a.charAt(e) == '[' || !b) {
                var f = a.substr(e, a.length - e);
                this.a = new FastReflectionHelper(this.useTraditionalReflection, f);
                this.n(a.substr(0, e));
                return;
            }
        }
        var g = a.indexOf("]");
        if (g > 0) {
            var h = a.substr(g + 1, a.length - g - 1);
            if (h.length > 0) {
                this.a = new FastReflectionHelper(this.useTraditionalReflection, h);
            }
            a = a.substr(0, g);
            if (this.f(a)) {
                this.b = true;
                this._index = parseInt(a);
            }
            else {
                this.d = true;
            }
        }
        else {
            this.b = false;
            this.d = false;
        }
        this._propertyName = a;
    };
    FastReflectionHelper.prototype.f = function (a) {
        if (a == null) {
            return false;
        }
        var b = a.trim();
        if (b.length == 0) {
            return false;
        }
        for (var c = 0; c < b.length; c++) {
            var d = b.charAt(c);
            var e = d.charCodeAt(0);
            if (48 <= e && e <= 57) {
                continue;
            }
            return false;
        }
        return true;
    };
    Object.defineProperty(FastReflectionHelper.prototype, "useTraditionalReflection", {
        get: function () {
            return this._useTraditionalReflection;
        },
        set: function (a) {
            this._useTraditionalReflection = a;
        },
        enumerable: true,
        configurable: true
    });
    FastReflectionHelper.prototype.getPropertyValue = function (a) {
        var from_ = a;
        if (this.c) {
            return from_;
        }
        var b = null;
        if (this.b) {
            b = from_[this._index];
        }
        else {
            b = from_[this._propertyName];
        }
        if (this.a != null) {
            return this.a.getPropertyValue(b);
        }
        return b;
    };
    Object.defineProperty(FastReflectionHelper.prototype, "invalid", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    FastReflectionHelper.$t = markType(FastReflectionHelper, 'FastReflectionHelper');
    return FastReflectionHelper;
}(Base));
export { FastReflectionHelper };
//# sourceMappingURL=FastReflectionHelper.js.map