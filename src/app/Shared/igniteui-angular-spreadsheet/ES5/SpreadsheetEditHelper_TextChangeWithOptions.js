/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, Nullable$1, Boolean_$type, typeCast, fromEnum, markType } from "../../igniteui-angular-core/ES5/type";
import { WorkbookColorInfo, MathUtilities } from "../../igniteui-angular-excel/ES5/excel.core";
import { IGFormattedTextRun } from "./IGFormattedTextRun";
import { IGFormattedTextSpan } from "./IGFormattedTextSpan";
import { nullableNotEquals, nullableEquals } from "../../igniteui-angular-core/ES5/nullable";
import { truncate } from "../../igniteui-angular-core/ES5/number";
import { stringIsNullOrEmpty } from "../../igniteui-angular-core/ES5/string";
/**
 * @hidden
 */
var SpreadsheetEditHelper_TextChangeWithOptions = /** @class */ (function (_super) {
    tslib_1.__extends(SpreadsheetEditHelper_TextChangeWithOptions, _super);
    function SpreadsheetEditHelper_TextChangeWithOptions(a, b, c) {
        var _this = _super.call(this) || this;
        _this.b = null;
        _this.a = null;
        _this.c = null;
        _this.a = c;
        _this.b = b;
        _this.c = a;
        return _this;
    }
    SpreadsheetEditHelper_TextChangeWithOptions.prototype.d = function (a, b) {
        if (!stringIsNullOrEmpty(b._v)) {
            a.name = b._v;
        }
        if (WorkbookColorInfo.l_op_Inequality(b._d, null)) {
            a.colorInfo = b._d;
        }
        if (nullableNotEquals(b._p, null)) {
            a.height = truncate(MathUtilities.f(b._p.value));
        }
        if (nullableNotEquals(b._r, null)) {
            a._strikeout$i = Nullable$1.toNullable(Boolean_$type, nullableEquals(b._r, true) ? true : false);
        }
        if (nullableNotEquals(b._t, null)) {
            a.underlineStyle = b._t.value;
        }
        if (nullableNotEquals(b._o, null)) {
            a._bold$i = Nullable$1.toNullable(Boolean_$type, nullableEquals(b._o, false) ? false : true);
        }
        if (nullableNotEquals(b._q, null)) {
            a._italic$i = Nullable$1.toNullable(Boolean_$type, nullableEquals(b._q, false) ? false : true);
        }
        if (nullableNotEquals(b._s, null)) {
            a.superscriptSubscriptStyle = b._s.value;
        }
    };
    SpreadsheetEditHelper_TextChangeWithOptions.prototype.e = function (a, b) {
        if (this.b._f()) {
            var c = a.getCellFormat(b);
            var d = c.font;
            var e = this.b;
            this.d(d, e);
        }
    };
    SpreadsheetEditHelper_TextChangeWithOptions.prototype.f = function (a) {
        this.g(a, this.a.h);
    };
    SpreadsheetEditHelper_TextChangeWithOptions.prototype.g = function (a, b) {
        var e_1, _a;
        if (a._owner == null) {
            return;
        }
        try {
            for (var _b = tslib_1.__values(fromEnum(b)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var c = _c.value;
                var d = typeCast(IGFormattedTextRun.$, c);
                if (d != null) {
                    if (d.e > 0) {
                        this.d(a._getFont1(d.f, d.e), d.a);
                    }
                }
                else {
                    var e = typeCast(IGFormattedTextSpan.$, c);
                    if (e != null) {
                        this.g(a, e.h);
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
    SpreadsheetEditHelper_TextChangeWithOptions.$t = markType(SpreadsheetEditHelper_TextChangeWithOptions, 'SpreadsheetEditHelper_TextChangeWithOptions');
    return SpreadsheetEditHelper_TextChangeWithOptions;
}(Base));
export { SpreadsheetEditHelper_TextChangeWithOptions };
//# sourceMappingURL=SpreadsheetEditHelper_TextChangeWithOptions.js.map
