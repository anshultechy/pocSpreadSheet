/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, IEnumerator$1_$type, markType } from "../../igniteui-angular-core/ES5/type";
import { IntRange } from "./IntRange";
/**
 * @hidden
 */
var ExcelWorkbookSerializationProvider_RepeatingBlockEnumerator = /** @class */ (function (_super) {
    tslib_1.__extends(ExcelWorkbookSerializationProvider_RepeatingBlockEnumerator, _super);
    function ExcelWorkbookSerializationProvider_RepeatingBlockEnumerator(a, b, c) {
        var _this = _super.call(this) || this;
        _this._b = null;
        _this._d = 0;
        _this._e = 0;
        _this._a = null;
        _this._c = 0;
        _this._b = a;
        _this._d = c;
        _this._e = b;
        _this.reset();
        return _this;
    }
    Object.defineProperty(ExcelWorkbookSerializationProvider_RepeatingBlockEnumerator.prototype, "current", {
        get: function () {
            var a = this._c * this._e;
            return new IntRange(1, this._a.current._i + a, this._a.current._h + a);
        },
        enumerable: true,
        configurable: true
    });
    ExcelWorkbookSerializationProvider_RepeatingBlockEnumerator.prototype.dispose = function () {
    };
    Object.defineProperty(ExcelWorkbookSerializationProvider_RepeatingBlockEnumerator.prototype, "currentObject", {
        get: function () {
            return this.current;
        },
        enumerable: true,
        configurable: true
    });
    ExcelWorkbookSerializationProvider_RepeatingBlockEnumerator.prototype.moveNext = function () {
        if (this._c < this._d) {
            if (this._a.moveNext()) {
                return true;
            }
            this._c++;
            if (this._c < this._d) {
                this._a = this._b.getEnumerator();
                return this.moveNext();
            }
        }
        return false;
    };
    ExcelWorkbookSerializationProvider_RepeatingBlockEnumerator.prototype.reset = function () {
        this._c = 0;
        this._a = this._b.getEnumerator();
    };
    ExcelWorkbookSerializationProvider_RepeatingBlockEnumerator.$t = markType(ExcelWorkbookSerializationProvider_RepeatingBlockEnumerator, 'ExcelWorkbookSerializationProvider_RepeatingBlockEnumerator', Base.$, [IEnumerator$1_$type.specialize(IntRange.$)]);
    return ExcelWorkbookSerializationProvider_RepeatingBlockEnumerator;
}(Base));
export { ExcelWorkbookSerializationProvider_RepeatingBlockEnumerator };
//# sourceMappingURL=ExcelWorkbookSerializationProvider_RepeatingBlockEnumerator.js.map
