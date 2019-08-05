/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, IEnumerator$1_$type, Number_$type, markType, getEnumerator } from "../../igniteui-angular-core/ES5/type";
/**
 * @hidden
 */
var ExcelWorkbookSerializationProvider_SourceRowColumnIndexEnumerator = /** @class */ (function (_super) {
    tslib_1.__extends(ExcelWorkbookSerializationProvider_SourceRowColumnIndexEnumerator, _super);
    function ExcelWorkbookSerializationProvider_SourceRowColumnIndexEnumerator(a, b, c, d) {
        var _this = _super.call(this) || this;
        _this._c = null;
        _this._a = null;
        _this._g = 0;
        _this._f = 0;
        _this._h = 0;
        _this._d = null;
        _this._e = 0;
        _this._i = 0;
        _this._j = 0;
        _this._b = null;
        _this._c = a;
        _this._a = b;
        _this._g = d;
        _this._j = c;
        _this.reset();
        return _this;
    }
    Object.defineProperty(ExcelWorkbookSerializationProvider_SourceRowColumnIndexEnumerator.prototype, "current", {
        get: function () {
            return this._e;
        },
        enumerable: true,
        configurable: true
    });
    ExcelWorkbookSerializationProvider_SourceRowColumnIndexEnumerator.prototype.dispose = function () {
        this._d = null;
    };
    Object.defineProperty(ExcelWorkbookSerializationProvider_SourceRowColumnIndexEnumerator.prototype, "currentObject", {
        get: function () {
            return this.current;
        },
        enumerable: true,
        configurable: true
    });
    ExcelWorkbookSerializationProvider_SourceRowColumnIndexEnumerator.prototype._k = function () {
        if (this._b != null) {
            this._b.u();
        }
        this._b = null;
    };
    ExcelWorkbookSerializationProvider_SourceRowColumnIndexEnumerator.prototype.moveNext = function () {
        if (this._f < this._g) {
            if (this._d.moveNext()) {
                this._e = this._j + (this._f * this._a.l) + this._i + (this._d.current.r - this._a.a[this._h]._i);
                this._k();
                this._b = this._d.current;
                return true;
            }
            this._k();
            this._i += this._a.a[this._h]._h - this._a.a[this._h]._i + 1;
            this._h++;
            if (this._h >= this._a.a.length) {
                this._i = 0;
                this._h = 0;
                this._f++;
            }
            this._l();
            return this.moveNext();
        }
        return false;
    };
    ExcelWorkbookSerializationProvider_SourceRowColumnIndexEnumerator.prototype._l = function () {
        this._k();
        this._d = getEnumerator(this._c._ch(this._a.a[this._h]._i, this._a.a[this._h]._h));
    };
    ExcelWorkbookSerializationProvider_SourceRowColumnIndexEnumerator.prototype.reset = function () {
        this._f = 0;
        this._h = 0;
        this._l();
    };
    ExcelWorkbookSerializationProvider_SourceRowColumnIndexEnumerator.$t = markType(ExcelWorkbookSerializationProvider_SourceRowColumnIndexEnumerator, 'ExcelWorkbookSerializationProvider_SourceRowColumnIndexEnumerator', Base.$, [IEnumerator$1_$type.specialize(Number_$type)]);
    return ExcelWorkbookSerializationProvider_SourceRowColumnIndexEnumerator;
}(Base));
export { ExcelWorkbookSerializationProvider_SourceRowColumnIndexEnumerator };
//# sourceMappingURL=ExcelWorkbookSerializationProvider_SourceRowColumnIndexEnumerator.js.map
