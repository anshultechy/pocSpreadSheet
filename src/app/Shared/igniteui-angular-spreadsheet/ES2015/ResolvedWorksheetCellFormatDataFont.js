/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, NotSupportedException, Boolean_$type, markType } from "../../igniteui-angular-core/ES2015/type";
import { IWorkbookFont_$type } from "../../igniteui-angular-excel/ES2015/excel.core";
import { wrapNullable, unwrapNullable } from "../../igniteui-angular-core/ES2015/nullable";
/**
 * @hidden
 */
export class ResolvedWorksheetCellFormatDataFont extends Base {
    constructor(a) {
        super();
        this._a = null;
        this._b(a);
    }
    _b(a) {
        this._a = a;
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
        return this._a._c2;
    }
    set _bold$i(a) {
        throw new NotSupportedException(0);
    }
    get colorInfo() {
        return this._a._bh;
    }
    set colorInfo(a) {
        throw new NotSupportedException(0);
    }
    get height() {
        return this._a._cq;
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
        return this._a._c3;
    }
    set _italic$i(a) {
        throw new NotSupportedException(0);
    }
    get name() {
        return this._a._df;
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
        return this._a._c4;
    }
    set _strikeout$i(a) {
        throw new NotSupportedException(0);
    }
    get superscriptSubscriptStyle() {
        return this._a._a0;
    }
    set superscriptSubscriptStyle(a) {
        throw new NotSupportedException(0);
    }
    get underlineStyle() {
        return this._a._a1;
    }
    set underlineStyle(a) {
        throw new NotSupportedException(0);
    }
}
ResolvedWorksheetCellFormatDataFont.$t = markType(ResolvedWorksheetCellFormatDataFont, 'ResolvedWorksheetCellFormatDataFont', Base.$, [IWorkbookFont_$type]);
//# sourceMappingURL=ResolvedWorksheetCellFormatDataFont.js.map
