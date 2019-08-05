/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, Nullable$1, String_$type, typeCast, Date_$type, fromEnum, markType } from "../../igniteui-angular-core/ES5/type";
import { ReadOnlyCollection$1 } from "../../igniteui-angular-core/ES5/ReadOnlyCollection$1";
import { Formula, ErrorValue, ExcelUtils, WorksheetRegionAddress, WorksheetPaneSelection, WorksheetCellAddress } from "../../igniteui-angular-excel/ES5/excel.core";
import { CultureInfo } from "../../igniteui-angular-core/ES5/culture";
import { boxArray$1 } from "../../igniteui-angular-core/ES5/array";
import { isNaN_ } from "../../igniteui-angular-core/ES5/number";
import { numberToString } from "../../igniteui-angular-core/ES5/numberExtended";
/**
 * @hidden
 */
var WorkbookSerializationProviderBase = /** @class */ (function (_super) {
    tslib_1.__extends(WorkbookSerializationProviderBase, _super);
    function WorkbookSerializationProviderBase(a) {
        var _rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            _rest[_i - 1] = arguments[_i];
        }
        var _this = _super.call(this) || this;
        _this.e = null;
        _this.f = null;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    var c = [];
                    for (var b = 0; b < _rest.length; b++) {
                        c[b - 0] = _rest[b];
                    }
                    var d = [c, c];
                    {
                        var f = d[0];
                        var g = d[1];
                        _this.e = new ReadOnlyCollection$1(String_$type, 1, boxArray$1(f || WorkbookSerializationProviderBase.a));
                        _this.f = new ReadOnlyCollection$1(String_$type, 1, boxArray$1(g || WorkbookSerializationProviderBase.a));
                    }
                }
                break;
            case 1:
                {
                    var d = _rest[0];
                    var e = _rest[1];
                    _this.e = new ReadOnlyCollection$1(String_$type, 1, boxArray$1(d || WorkbookSerializationProviderBase.a));
                    _this.f = new ReadOnlyCollection$1(String_$type, 1, boxArray$1(e || WorkbookSerializationProviderBase.a));
                }
                break;
        }
        return _this;
    }
    WorkbookSerializationProviderBase.prototype.b = function (a, b, c, d, e) {
        if (c == null && isNaN_(b)) {
            return true;
        }
        var f = d.getCellFormula(e);
        var g = d.worksheet;
        var h = g.workbook;
        var i = CultureInfo.invariantCulture;
        if (f != null) {
            if (f._as) {
                g._h3(f, false);
                f._bt(h);
            }
            var j = f._bk(h.cellReferenceMode, i).substr(1);
            if (c != null) {
                f = Formula._parse4("=(" + j + ")" + WorkbookSerializationProviderBase.i(a) + "(" + c._bk(h.cellReferenceMode, i).substr(1) + ")", h.cellReferenceMode, i);
            }
            else {
                f = Formula._parse4("=(" + j + ")" + WorkbookSerializationProviderBase.i(a) + numberToString(b, i), h.cellReferenceMode, i);
            }
        }
        else {
            var k = WorkbookSerializationProviderBase.g(h, d._getCellValue1(e));
            if (isNaN_(k)) {
                return true;
            }
            if (c != null) {
                f = Formula._parse4("=" + numberToString(k, i) + WorkbookSerializationProviderBase.i(a) + "(" + c._bk(h.cellReferenceMode, i).substr(1) + ")", h.cellReferenceMode, i);
            }
            else {
                var l = void 0;
                switch (a) {
                    case 1:
                        l = k + b;
                        break;
                    case 2:
                        l = k - b;
                        break;
                    case 3:
                        l = k * b;
                        break;
                    case 4:
                        if (b == 0) {
                            l = ErrorValue.divisionByZero;
                        }
                        else {
                            l = k / b;
                        }
                        break;
                    default: return false;
                }
                d.setCellValue(e, l);
                return true;
            }
        }
        f._bp(d, e);
        return true;
    };
    WorkbookSerializationProviderBase.i = function (a) {
        switch (a) {
            default:
            case 0: return "";
            case 1: return "+";
            case 2: return "-";
            case 4: return "/";
            case 3: return "*";
        }
    };
    WorkbookSerializationProviderBase.g = function (a, b) {
        var c;
        if (b == null) {
            c = 0;
        }
        else if (ExcelUtils.ba(b) || typeCast(Date_$type, b) !== null) {
            if (!((function () { var d = ExcelUtils.b0(a, b, c); c = d.p2; return d.ret; })())) {
                c = NaN;
            }
        }
        else {
            c = NaN;
        }
        return c;
    };
    WorkbookSerializationProviderBase.prototype.j = function (a) {
        var e_1, _a;
        try {
            for (var _b = tslib_1.__values(fromEnum(this.e)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var b = _c.value;
                if (a.e(b)) {
                    return b;
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
        return null;
    };
    WorkbookSerializationProviderBase.h = function (a, b) {
        var c = Nullable$1.toNullable(WorksheetRegionAddress.$, null);
        for (var e = 0; e < a.length; e++) {
            var d = a[e];
            var f = d.displayOptions._af;
            var g = f.a(d.displayOptions._z);
            if (g == null) {
                g = WorksheetPaneSelection.c(d.displayOptions._z);
                f.b.add(g);
            }
            if (g.f >= b.length || false == b[g.f]._g(g.b) || false == b[g.f].equals(g.d.item(g.f))) {
                var h = g.f = Math.min(g.f, b.length - 1);
                g.b = new WorksheetCellAddress(1, b[h]._ac, b[h]._w);
            }
            g.d.clear();
            for (var i = 0; i < b.length; i++) {
                var j = b[i];
                var k = d._hi(j);
                j = k.p0;
                if (WorksheetRegionAddress._p(c, Nullable$1.toNullable(WorksheetRegionAddress.$, null)) && WorksheetRegionAddress._q(j, b[i])) {
                    c = Nullable$1.toNullable(WorksheetRegionAddress.$, b[i]);
                }
                g.d.add(j);
            }
        }
        return c;
    };
    WorkbookSerializationProviderBase.$t = markType(WorkbookSerializationProviderBase, 'WorkbookSerializationProviderBase');
    WorkbookSerializationProviderBase.a = new Array(0);
    return WorkbookSerializationProviderBase;
}(Base));
export { WorkbookSerializationProviderBase };
//# sourceMappingURL=WorkbookSerializationProviderBase.js.map
