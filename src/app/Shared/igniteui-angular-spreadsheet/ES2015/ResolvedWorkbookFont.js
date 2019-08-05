/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, NotSupportedException, Boolean_$type, markType } from "../../igniteui-angular-core/ES2015/type";
import { WorkbookColorInfo, IWorkbookFont_$type } from "../../igniteui-angular-excel/ES2015/excel.core";
import { wrapNullable, unwrapNullable, nullableEquals } from "../../igniteui-angular-core/ES2015/nullable";
/**
 * @hidden
 */
export class ResolvedWorkbookFont extends Base {
    constructor(a, b, c) {
        super();
        this._a = null;
        this._b = null;
        this._c = null;
        this._b = a;
        this._a = b;
        this._c = c;
    }
    _d(a) {
        this._b = a;
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
        let a = this._b._bold$i;
        if (nullableEquals(a, null)) {
            a = this._a._bold$i;
        }
        return a;
    }
    set _bold$i(a) {
        throw new NotSupportedException(0);
    }
    get colorInfo() {
        let a = this._b.colorInfo;
        if (WorkbookColorInfo.l_op_Equality(a, null)) {
            a = this._a.colorInfo;
        }
        return a;
    }
    set colorInfo(a) {
        throw new NotSupportedException(0);
    }
    get height() {
        let a = this._b.height;
        if (a < 0) {
            a = this._a.height;
        }
        return a;
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
        let a = this._b._italic$i;
        if (nullableEquals(a, null)) {
            a = this._a._italic$i;
        }
        return a;
    }
    set _italic$i(a) {
        throw new NotSupportedException(0);
    }
    get name() {
        let a = this._b.name;
        if (a == null) {
            a = this._a.name;
        }
        if (this._c != null) {
            a = this._c._gv(a);
        }
        return a;
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
        let a = this._b._strikeout$i;
        if (nullableEquals(a, null)) {
            a = this._a._strikeout$i;
        }
        return a;
    }
    set _strikeout$i(a) {
        throw new NotSupportedException(0);
    }
    get superscriptSubscriptStyle() {
        let a = this._b.superscriptSubscriptStyle;
        if (a == -1) {
            a = this._a.superscriptSubscriptStyle;
        }
        return a;
    }
    set superscriptSubscriptStyle(a) {
        throw new NotSupportedException(0);
    }
    get underlineStyle() {
        let a = this._b.underlineStyle;
        if (a == -1) {
            a = this._a.underlineStyle;
        }
        return a;
    }
    set underlineStyle(a) {
        throw new NotSupportedException(0);
    }
}
ResolvedWorkbookFont.$t = markType(ResolvedWorkbookFont, 'ResolvedWorkbookFont', Base.$, [IWorkbookFont_$type]);
//# sourceMappingURL=ResolvedWorkbookFont.js.map
