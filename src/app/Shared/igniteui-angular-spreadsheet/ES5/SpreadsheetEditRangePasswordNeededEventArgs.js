/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { CancelEventArgs } from "../../igniteui-angular-core/ES5/CancelEventArgs";
import { WorksheetProtectedRange, Worksheet, ExcelUtils, SecureString } from "../../igniteui-angular-excel/ES5/excel.core";
import { ReadOnlyCollection$1 } from "../../igniteui-angular-core/ES5/ReadOnlyCollection$1";
import { Enumerable } from "../../igniteui-angular-core/ES5/Enumerable";
import { typeCast, fromEnum, markType } from "../../igniteui-angular-core/ES5/type";
import { List$1 } from "../../igniteui-angular-core/ES5/List$1";
/**
 * @hidden
 */
var SpreadsheetEditRangePasswordNeededEventArgs = /** @class */ (function (_super) {
    tslib_1.__extends(SpreadsheetEditRangePasswordNeededEventArgs, _super);
    function SpreadsheetEditRangePasswordNeededEventArgs(a, b) {
        var _this = _super.call(this, 0) || this;
        _this._e = null;
        _this._f = null;
        _this._g = null;
        _this._f = b;
        _this._e = a;
        _this._g = new ReadOnlyCollection$1(WorksheetProtectedRange.$, 1, _this._e);
        return _this;
    }
    Object.defineProperty(SpreadsheetEditRangePasswordNeededEventArgs.prototype, "ranges", {
        get: function () {
            return Enumerable.a(WorksheetProtectedRange.$, this._g);
        },
        enumerable: true,
        configurable: true
    });
    SpreadsheetEditRangePasswordNeededEventArgs.prototype._i = function (a) {
        var b = new List$1(WorksheetProtectedRange.$, 0);
        this._j(a, this._e, b);
        if (b.count > 0) {
            var c_1 = new List$1(WorksheetProtectedRange.$, 0);
            ExcelUtils.fm(Worksheet.$, this._f, function (d) { return c_1.o(d.protection._allowedEditRanges$i); });
            this._j(a, c_1, null);
        }
    };
    SpreadsheetEditRangePasswordNeededEventArgs.prototype._j = function (a, b, c) {
        var e_1, _a;
        var d = typeCast(SecureString.$, a);
        try {
            for (var _b = tslib_1.__values(fromEnum(b)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var e = _c.value;
                if (e.isProtected) {
                    e.unprotect();
                    if (c != null && !e.isProtected) {
                        c.add(e);
                    }
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    SpreadsheetEditRangePasswordNeededEventArgs.prototype._getRangesArray = function () {
        return this.ranges;
    };
    SpreadsheetEditRangePasswordNeededEventArgs.prototype.unprotect = function () {
        this._i(null);
    };
    SpreadsheetEditRangePasswordNeededEventArgs.$t = markType(SpreadsheetEditRangePasswordNeededEventArgs, 'SpreadsheetEditRangePasswordNeededEventArgs', CancelEventArgs.$);
    return SpreadsheetEditRangePasswordNeededEventArgs;
}(CancelEventArgs));
export { SpreadsheetEditRangePasswordNeededEventArgs };
//# sourceMappingURL=SpreadsheetEditRangePasswordNeededEventArgs.js.map
