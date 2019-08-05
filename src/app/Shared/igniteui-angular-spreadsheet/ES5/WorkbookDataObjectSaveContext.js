/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, fromEnum, String_$type, Boolean_$type, markType } from "../../igniteui-angular-core/ES5/type";
import { ArgumentNullException } from "../../igniteui-angular-core/ES5/ArgumentNullException";
import { Sheet, Worksheet, WorksheetRegionAddress } from "../../igniteui-angular-excel/ES5/excel.core";
import { List$1 } from "../../igniteui-angular-core/ES5/List$1";
import { CoreUtilities } from "./CoreUtilities";
import { ReadOnlyCollection$1 } from "../../igniteui-angular-core/ES5/ReadOnlyCollection$1";
import { Enumerable } from "../../igniteui-angular-core/ES5/Enumerable";
import { CellRegionMapSingle } from "./CellRegionMapSingle";
import { CellRegionMapMany } from "./CellRegionMapMany";
import { Dictionary$2 } from "../../igniteui-angular-core/ES5/Dictionary$2";
/**
 * @hidden
 */
var WorkbookDataObjectSaveContext = /** @class */ (function (_super) {
    tslib_1.__extends(WorkbookDataObjectSaveContext, _super);
    function WorkbookDataObjectSaveContext(a, b, c, d) {
        var e_1, _a;
        var _this = _super.call(this) || this;
        _this.q = null;
        _this.i = null;
        _this.n = null;
        _this.o = null;
        _this.k = null;
        _this.j = null;
        _this.c = false;
        _this.d = false;
        _this.a = null;
        _this.b = null;
        CoreUtilities.z(a, "workbook");
        _this.b = a;
        _this.n = c;
        _this.o = d;
        _this.r = b;
        var e = new List$1(Sheet.$, 0);
        var f = new List$1(Worksheet.$, 0);
        try {
            for (var _b = tslib_1.__values(fromEnum(a._worksheets$i)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var g = _c.value;
                if (g._w) {
                    f.add(g);
                    e.add(g);
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
        _this.k = new ReadOnlyCollection$1(Worksheet.$, 1, f);
        _this.j = new ReadOnlyCollection$1(Sheet.$, 1, e);
        var h = a.windowOptions.selectedWorksheet;
        if (h == null || h.type == 0) {
            h = Enumerable.af(Worksheet.$, f);
        }
        if (h != null) {
            h.displayOptions._br();
            var i = h.displayOptions._af;
            var j = i.a(h.displayOptions._z);
            if (j != null) {
                if (j.d.count == 1) {
                    _this.a = new CellRegionMapSingle(j.d.item(0));
                }
                else {
                    _this.a = new CellRegionMapMany(Enumerable.a(WorksheetRegionAddress.$, j.d));
                }
                _this.c = _this.a.c.length == 1 && _this.a.c[0]._i == 0 && _this.a.c[0]._h >= h._rows$i.maxCount - 1;
                _this.d = _this.a.a.length == 1 && _this.a.a[0]._i == 0 && _this.a.a[0]._h >= h._columns$i.maxCount - 1;
            }
        }
        return _this;
    }
    Object.defineProperty(WorkbookDataObjectSaveContext.prototype, "r", {
        get: function () {
            return this.q;
        },
        set: function (a) {
            if (this.q != a) {
                if (a == null) {
                    throw new ArgumentNullException(1);
                }
                this.q = a;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkbookDataObjectSaveContext.prototype, "e", {
        get: function () {
            return this.c;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkbookDataObjectSaveContext.prototype, "f", {
        get: function () {
            return this.d;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkbookDataObjectSaveContext.prototype, "l", {
        get: function () {
            return this.j;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkbookDataObjectSaveContext.prototype, "m", {
        get: function () {
            return this.k;
        },
        enumerable: true,
        configurable: true
    });
    WorkbookDataObjectSaveContext.prototype.p = function (a, b) {
        this.q.setData(a, b);
    };
    WorkbookDataObjectSaveContext.prototype.g = function (a) {
        var _this = this;
        if (this.n == null) {
            return true;
        }
        if (this.i == null) {
            this.i = new Dictionary$2(String_$type, Boolean_$type, 0);
        }
        var b;
        if (!((function () { var c = _this.i.tryGetValue(a, b); b = c.p1; return c.ret; })())) {
            b = this.i.item(a, this.n(a));
        }
        return b;
    };
    WorkbookDataObjectSaveContext.prototype.h = function () {
        if (this.o != null) {
            return this.o();
        }
        return false;
    };
    WorkbookDataObjectSaveContext.$t = markType(WorkbookDataObjectSaveContext, 'WorkbookDataObjectSaveContext');
    return WorkbookDataObjectSaveContext;
}(Base));
export { WorkbookDataObjectSaveContext };
//# sourceMappingURL=WorkbookDataObjectSaveContext.js.map
