/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, Nullable$1, typeCast, Number_$type, markType } from "../../igniteui-angular-core/ES5/type";
import { ExtendedRangeScrollInfo } from "./ExtendedRangeScrollInfo";
import { CoreUtilities } from "./CoreUtilities";
/**
 * @hidden
 */
var ExtendedScrollArrowHelperBase = /** @class */ (function (_super) {
    tslib_1.__extends(ExtendedScrollArrowHelperBase, _super);
    function ExtendedScrollArrowHelperBase(a) {
        var _this = _super.call(this) || this;
        _this.a = null;
        _this.e = null;
        _this.c = null;
        _this.f = false;
        CoreUtilities.y(a);
        _this.e = a;
        return _this;
    }
    Object.defineProperty(ExtendedScrollArrowHelperBase.prototype, "g", {
        get: function () {
            return this.f;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExtendedScrollArrowHelperBase.prototype, "b", {
        get: function () {
            return this.a;
        },
        set: function (a) {
            if (a != this.a) {
                var b = this.a;
                this.a = a;
                this.h(b, this.a);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExtendedScrollArrowHelperBase.prototype, "d", {
        get: function () {
            return this.c;
        },
        set: function (a) {
            if (a != this.c) {
                var b = this.c;
                this.c = a;
                if (this.g) {
                    if (typeCast(ExtendedRangeScrollInfo.$, b) !== null) {
                        b._ay();
                    }
                    if (typeCast(ExtendedRangeScrollInfo.$, a) !== null) {
                        a._a0();
                    }
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    ExtendedScrollArrowHelperBase.prototype.i = function () {
        if (this.f) {
            this.f = false;
            if (typeCast(ExtendedRangeScrollInfo.$, this.c) !== null) {
                this.c._ay();
            }
        }
    };
    ExtendedScrollArrowHelperBase.prototype.j = function (a) {
        if (a === void 0) { a = Nullable$1.toNullable(Number_$type, null); }
        if (!this.f) {
            this.f = true;
            if (typeCast(ExtendedRangeScrollInfo.$, this.c) !== null) {
                this.c._a0(a);
            }
        }
    };
    ExtendedScrollArrowHelperBase.$t = markType(ExtendedScrollArrowHelperBase, 'ExtendedScrollArrowHelperBase');
    return ExtendedScrollArrowHelperBase;
}(Base));
export { ExtendedScrollArrowHelperBase };
//# sourceMappingURL=ExtendedScrollArrowHelperBase.js.map
