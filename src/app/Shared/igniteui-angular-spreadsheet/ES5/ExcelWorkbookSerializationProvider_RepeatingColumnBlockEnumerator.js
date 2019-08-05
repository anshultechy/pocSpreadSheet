/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, IEnumerator$1_$type, markType, getEnumerator } from "../../igniteui-angular-core/ES5/type";
import { IntRange } from "./IntRange";
import { WorksheetColumnBlock } from "../../igniteui-angular-excel/ES5/excel.core";
import { Enumerable } from "../../igniteui-angular-core/ES5/Enumerable";
/**
 * @hidden
 */
var ExcelWorkbookSerializationProvider_RepeatingColumnBlockEnumerator = /** @class */ (function (_super) {
    tslib_1.__extends(ExcelWorkbookSerializationProvider_RepeatingColumnBlockEnumerator, _super);
    function ExcelWorkbookSerializationProvider_RepeatingColumnBlockEnumerator(a, b) {
        var _this = _super.call(this) || this;
        _this._b = null;
        _this._d = 0;
        _this._e = 0;
        _this._a = null;
        _this._c = 0;
        _this._b = a._ff;
        _this._d = b;
        _this._e = a._columns$i.maxCount;
        _this.reset();
        return _this;
    }
    Object.defineProperty(ExcelWorkbookSerializationProvider_RepeatingColumnBlockEnumerator.prototype, "current", {
        get: function () {
            var a = this._c * this._e;
            return new IntRange(1, this._a.current.q + a, this._a.current.r + a);
        },
        enumerable: true,
        configurable: true
    });
    ExcelWorkbookSerializationProvider_RepeatingColumnBlockEnumerator.prototype.dispose = function () {
    };
    Object.defineProperty(ExcelWorkbookSerializationProvider_RepeatingColumnBlockEnumerator.prototype, "currentObject", {
        get: function () {
            return this.current;
        },
        enumerable: true,
        configurable: true
    });
    ExcelWorkbookSerializationProvider_RepeatingColumnBlockEnumerator.prototype.moveNext = function () {
        if (this._c < this._d) {
            if (this._a.moveNext()) {
                return true;
            }
            this._c++;
            if (this._c < this._d) {
                this._a = getEnumerator(Enumerable.u(WorksheetColumnBlock.$, this._b, function (a) { return !a.b._ca(a.b.v._ca._p); }));
                return this.moveNext();
            }
        }
        return false;
    };
    ExcelWorkbookSerializationProvider_RepeatingColumnBlockEnumerator.prototype.reset = function () {
        this._c = 0;
        this._a = getEnumerator(Enumerable.u(WorksheetColumnBlock.$, this._b, function (a) { return !a.b._ca(a.b.v._ca._p); }));
    };
    ExcelWorkbookSerializationProvider_RepeatingColumnBlockEnumerator.$t = markType(ExcelWorkbookSerializationProvider_RepeatingColumnBlockEnumerator, 'ExcelWorkbookSerializationProvider_RepeatingColumnBlockEnumerator', Base.$, [IEnumerator$1_$type.specialize(IntRange.$)]);
    return ExcelWorkbookSerializationProvider_RepeatingColumnBlockEnumerator;
}(Base));
export { ExcelWorkbookSerializationProvider_RepeatingColumnBlockEnumerator };
//# sourceMappingURL=ExcelWorkbookSerializationProvider_RepeatingColumnBlockEnumerator.js.map
