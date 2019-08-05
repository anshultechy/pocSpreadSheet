/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, NotSupportedException, Nullable$1, Boolean_$type, markType } from "../../igniteui-angular-core/ES2015/type";
import { WorkbookColorInfo, ExcelUtils, ColorsInternal, IWorkbookFont_$type } from "../../igniteui-angular-excel/ES2015/excel.core";
import { Color } from "../../igniteui-angular-core/ES2015/Color";
import { nullableNotEquals, wrapNullable, unwrapNullable } from "../../igniteui-angular-core/ES2015/nullable";
/**
 * @hidden
 */
export class WorkbookFontSnapshot extends Base {
    constructor(a) {
        super();
        this._f = Nullable$1.toNullable(Boolean_$type, null);
        this._c = null;
        this._e = 0;
        this._g = Nullable$1.toNullable(Boolean_$type, null);
        this._i = null;
        this._h = Nullable$1.toNullable(Boolean_$type, null);
        this._a = 0;
        this._b = 0;
        this._j = new Color();
        this._f = a._c2;
        this._c = a._bh;
        this._e = a._cq;
        this._g = a._c3;
        this._i = a._df;
        this._h = a._c4;
        this._a = a._a0;
        this._b = a._a1;
        this._j = WorkbookFontSnapshot._l(this._c, a.v);
    }
    _d(a) {
        if (nullableNotEquals(this._f, a._c2) || WorkbookColorInfo.l_op_Inequality(this._c, a._bh) || this._e != a._cq || nullableNotEquals(this._g, a._c3) || this._i != a._df || nullableNotEquals(this._h, a._c4) || this._a != a._a0 || this._b != a._a1) {
            return new WorkbookFontSnapshot(a);
        }
        return this;
    }
    static _l(a, b) {
        return WorkbookColorInfo.l_op_Equality(a, null) ? ColorsInternal.c : ExcelUtils.g1(a._aj(b, true, true));
    }
    setFontFormatting(a) {
        throw new NotSupportedException(0);
    }
    get bold() {
        return unwrapNullable(this._bold$i);
    }
    set bold(a) {
        arguments[0] = wrapNullable(Boolean_$type, arguments[0]);
        this._bold$i = arguments[0];
    }
    get _bold$i() {
        return this._f;
    }
    set _bold$i(a) {
        throw new NotSupportedException(0);
    }
    get colorInfo() {
        return this._c;
    }
    set colorInfo(a) {
        throw new NotSupportedException(0);
    }
    get height() {
        return this._e;
    }
    set height(a) {
        throw new NotSupportedException(0);
    }
    get italic() {
        return unwrapNullable(this._italic$i);
    }
    set italic(a) {
        arguments[0] = wrapNullable(Boolean_$type, arguments[0]);
        this._italic$i = arguments[0];
    }
    get _italic$i() {
        return this._g;
    }
    set _italic$i(a) {
        throw new NotSupportedException(0);
    }
    get name() {
        return this._i;
    }
    set name(a) {
        throw new NotSupportedException(0);
    }
    get strikeout() {
        return unwrapNullable(this._strikeout$i);
    }
    set strikeout(a) {
        arguments[0] = wrapNullable(Boolean_$type, arguments[0]);
        this._strikeout$i = arguments[0];
    }
    get _strikeout$i() {
        return this._h;
    }
    set _strikeout$i(a) {
        throw new NotSupportedException(0);
    }
    get superscriptSubscriptStyle() {
        return this._a;
    }
    set superscriptSubscriptStyle(a) {
        throw new NotSupportedException(0);
    }
    get underlineStyle() {
        return this._b;
    }
    set underlineStyle(a) {
        throw new NotSupportedException(0);
    }
    get _k() {
        return this._j;
    }
    set _k(a) {
        throw new NotSupportedException(0);
    }
}
WorkbookFontSnapshot.$t = markType(WorkbookFontSnapshot, 'WorkbookFontSnapshot', Base.$, [IWorkbookFont_$type]);
//# sourceMappingURL=WorkbookFontSnapshot.js.map
