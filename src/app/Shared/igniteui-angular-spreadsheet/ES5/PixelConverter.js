/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, Nullable$1, Number_$type, markType } from "../../igniteui-angular-core/ES5/type";
import { CoreUtilities } from "./CoreUtilities";
import { nullableNotEquals } from "../../igniteui-angular-core/ES5/nullable";
/**
 * @hidden
 */
var PixelConverter = /** @class */ (function (_super) {
    tslib_1.__extends(PixelConverter, _super);
    function PixelConverter() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.b = 1;
        _this.a = 0.5;
        return _this;
    }
    Object.defineProperty(PixelConverter.prototype, "d", {
        get: function () {
            return this.b;
        },
        set: function (a) {
            this.b = a;
            this.a = a / 2;
        },
        enumerable: true,
        configurable: true
    });
    PixelConverter.prototype.c = function (a, b) {
        if (b === void 0) { b = false; }
        var c = a % this.b;
        if (CoreUtilities.c(c, 0)) {
            return 0;
        }
        if (CoreUtilities.c(Math.abs(c), this.b)) {
            return 0;
        }
        if (false == b) {
            if (Math.abs(c) < this.a) {
                return -c;
            }
            return (Math.sign(c) * this.b) - c;
        }
        else {
            if (c < 0) {
                return -c;
            }
            return this.b - c;
        }
    };
    PixelConverter.prototype.f = function (a, b) {
        if (b === void 0) { b = Nullable$1.toNullable(Number_$type, null); }
        if (nullableNotEquals(b, null)) {
            return this.e(Math.max(a, b.value));
        }
        return this.e(a);
    };
    PixelConverter.prototype.e = function (a) {
        return a + this.c(a);
    };
    PixelConverter.prototype.h = function (a) {
        return a + this.c(a, true);
    };
    PixelConverter.prototype.g = function (a) {
        return a + this.c(a, false);
    };
    PixelConverter.$t = markType(PixelConverter, 'PixelConverter');
    return PixelConverter;
}(Base));
export { PixelConverter };
//# sourceMappingURL=PixelConverter.js.map
