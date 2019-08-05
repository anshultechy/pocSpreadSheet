/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, typeCast, markType } from "../../igniteui-angular-core/ES2015/type";
import { RowColumnBase } from "../../igniteui-angular-excel/ES2015/excel.core";
/**
 * @hidden
 */
export class SpreadsheetPaneManager_SetBorderHelper extends Base {
    constructor(a, b, c) {
        super();
        this.c = null;
        this.b = 0;
        this.a = 0;
        this.f = false;
        this.d = false;
        this.e = false;
        this.c = b;
        this.b = c;
        this.a = a;
        this.f = c == 0;
        this.d = (this.a & 64) == 64;
        this.e = (this.a & 128) == 128;
    }
    g(a) {
        a.bottomBorderStyle = this.b;
        a.bottomBorderColorInfo = this.c;
    }
    h(a) {
        let b = a.diagonalBorders;
        let c = typeCast(RowColumnBase.$, a._s) !== null ? 8 : 0;
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
    }
    i(a, b, c) {
        this.h(a._bc(c));
    }
    j(a) {
        a.leftBorderStyle = this.b;
        a.leftBorderColorInfo = this.c;
    }
    k(a) {
        a.leftBorderStyle = this.b;
        a.leftBorderColorInfo = this.c;
        a.rightBorderStyle = this.b;
        a.rightBorderColorInfo = this.c;
    }
    l(a, b, c, d) {
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
    }
    m(a) {
        a.rightBorderStyle = this.b;
        a.rightBorderColorInfo = this.c;
    }
    n(a) {
        a.topBorderStyle = this.b;
        a.topBorderColorInfo = this.c;
    }
    o(a) {
        a.topBorderStyle = this.b;
        a.topBorderColorInfo = this.c;
        a.bottomBorderStyle = this.b;
        a.bottomBorderColorInfo = this.c;
    }
}
SpreadsheetPaneManager_SetBorderHelper.$t = markType(SpreadsheetPaneManager_SetBorderHelper, 'SpreadsheetPaneManager_SetBorderHelper');
//# sourceMappingURL=SpreadsheetPaneManager_SetBorderHelper.js.map
