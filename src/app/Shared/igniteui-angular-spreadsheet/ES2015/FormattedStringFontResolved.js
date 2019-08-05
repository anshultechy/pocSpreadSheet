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
export class FormattedStringFontResolved extends Base {
    constructor(a, b) {
        super();
        this._b = null;
        this._a = null;
        this._a = a;
        this._b = b;
    }
    _c(a, b) {
        this._a = a;
        this._b = b;
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
        let a = this._a._bold$i;
        if (nullableEquals(a, null)) {
            a = this._b._c2;
        }
        return a;
    }
    set _bold$i(a) {
        throw new NotSupportedException(0);
    }
    get colorInfo() {
        let a = this._a.colorInfo;
        if (WorkbookColorInfo.l_op_Equality(a, null)) {
            a = this._b._bh;
        }
        return a;
    }
    set colorInfo(a) {
        throw new NotSupportedException(0);
    }
    get height() {
        let a = this._a.height;
        if (a < 0) {
            a = this._b._cq;
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
        let a = this._a._italic$i;
        if (nullableEquals(a, null)) {
            a = this._b._c3;
        }
        return a;
    }
    set _italic$i(a) {
        throw new NotSupportedException(0);
    }
    get name() {
        let a = this._a.name;
        if (a == null) {
            a = this._b._df;
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
        let a = this._a._strikeout$i;
        if (nullableEquals(a, null)) {
            a = this._b._c4;
        }
        return a;
    }
    set _strikeout$i(a) {
        throw new NotSupportedException(0);
    }
    get superscriptSubscriptStyle() {
        let a = this._a.superscriptSubscriptStyle;
        if (a == -1) {
            a = this._b._a0;
        }
        return a;
    }
    set superscriptSubscriptStyle(a) {
        throw new NotSupportedException(0);
    }
    get underlineStyle() {
        let a = this._a.underlineStyle;
        if (a == -1) {
            a = this._b._a1;
        }
        return a;
    }
    set underlineStyle(a) {
        throw new NotSupportedException(0);
    }
}
FormattedStringFontResolved.$t = markType(FormattedStringFontResolved, 'FormattedStringFontResolved', Base.$, [IWorkbookFont_$type]);
//# sourceMappingURL=FormattedStringFontResolved.js.map