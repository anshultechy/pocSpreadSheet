/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, typeCast, markType } from "../../igniteui-angular-core/ES5/type";
import { RowColumnBase } from "../../igniteui-angular-excel/ES5/excel.core";
/**
 * @hidden
 */
var SpreadsheetPaneManager_SetBorderHelper = /** @class */ (function (_super) {
    tslib_1.__extends(SpreadsheetPaneManager_SetBorderHelper, _super);
    function SpreadsheetPaneManager_SetBorderHelper(a, b, c) {
        var _this = _super.call(this) || this;
        _this.c = null;
        _this.b = 0;
        _this.a = 0;
        _this.f = false;
        _this.d = false;
        _this.e = false;
        _this.c = b;
        _this.b = c;
        _this.a = a;
        _this.f = c == 0;
        _this.d = (_this.a & 64) == 64;
        _this.e = (_this.a & 128) == 128;
        return _this;
    }
    SpreadsheetPaneManager_SetBorderHelper.prototype.g = function (a) {
        a.bottomBorderStyle = this.b;
        a.bottomBorderColorInfo = this.c;
    };
    SpreadsheetPaneManager_SetBorderHelper.prototype.h = function (a) {
        var b = a.diagonalBorders;
        var c = typeCast(RowColumnBase.$, a._s) !== null ? 8 : 0;
        if (this.f) {
            if (b != 1) {
                if (this.e) {
                    if (this.d || b == 5) {
                        a._ay(1, true, c);
                        a._ax(null, true, c);
                        a._az(0, true, c);
                    }
                    else if (b != 0) {
                        a._ay(3, true, c);
                    }
                }
                else if (b == 7) {
                    a._ay(5, true, c);
                }
                else if (b == 3) {
                    a._ay(1, true, c);
                    a._ax(null, true, c);
                    a._az(0, true, c);
                }
            }
        }
        else {
            if (b == 1) {
                b = 0;
            }
            if (this.e) {
                b |= 5;
            }
            if (this.d) {
                b |= 3;
            }
            a._ay(b, true, c);
            a._ax(this.c, true, c);
            a._az(this.b, true, c);
        }
    };
    SpreadsheetPaneManager_SetBorderHelper.prototype.i = function (a, b, c) {
        this.h(a._bc(c));
    };
    SpreadsheetPaneManager_SetBorderHelper.prototype.j = function (a) {
        a.leftBorderStyle = this.b;
        a.leftBorderColorInfo = this.c;
    };
    SpreadsheetPaneManager_SetBorderHelper.prototype.k = function (a) {
        a.leftBorderStyle = this.b;
        a.leftBorderColorInfo = this.c;
        a.rightBorderStyle = this.b;
        a.rightBorderColorInfo = this.c;
    };
    SpreadsheetPaneManager_SetBorderHelper.prototype.l = function (a, b, c, d) {
        if (c) {
            if (a.firstRow == b._ac) {
                if ((this.a & 2) == 2) {
                    this.n(a.cellFormat);
                }
            }
            else if ((this.a & 16) == 16) {
                this.n(a.cellFormat);
            }
            if (a.lastRow == b._ae) {
                if ((this.a & 8) == 8) {
                    this.g(a.cellFormat);
                }
            }
            else if ((this.a & 16) == 16) {
                this.g(a.cellFormat);
            }
        }
        if (d) {
            if (a.firstColumn == b._w) {
                if ((this.a & 1) == 1) {
                    this.j(a.cellFormat);
                }
            }
            else if ((this.a & 32) == 32) {
                this.j(a.cellFormat);
            }
            if (a.lastColumn == b._x) {
                if ((this.a & 4) == 4) {
                    this.m(a.cellFormat);
                }
            }
        }
    };
    SpreadsheetPaneManager_SetBorderHelper.prototype.m = function (a) {
        a.rightBorderStyle = this.b;
        a.rightBorderColorInfo = this.c;
    };
    SpreadsheetPaneManager_SetBorderHelper.prototype.n = function (a) {
        a.topBorderStyle = this.b;
        a.topBorderColorInfo = this.c;
    };
    SpreadsheetPaneManager_SetBorderHelper.prototype.o = function (a) {
        a.topBorderStyle = this.b;
        a.topBorderColorInfo = this.c;
        a.bottomBorderStyle = this.b;
        a.bottomBorderColorInfo = this.c;
    };
    SpreadsheetPaneManager_SetBorderHelper.$t = markType(SpreadsheetPaneManager_SetBorderHelper, 'SpreadsheetPaneManager_SetBorderHelper');
    return SpreadsheetPaneManager_SetBorderHelper;
}(Base));
export { SpreadsheetPaneManager_SetBorderHelper };
//# sourceMappingURL=SpreadsheetPaneManager_SetBorderHelper.js.map
