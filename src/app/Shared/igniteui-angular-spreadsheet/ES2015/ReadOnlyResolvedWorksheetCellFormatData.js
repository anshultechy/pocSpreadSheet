/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, NotSupportedException, Boolean_$type, markType } from "../../igniteui-angular-core/ES2015/type";
import { IWorksheetCellFormat_$type } from "../../igniteui-angular-excel/ES2015/excel.core";
import { ResolvedWorksheetCellFormatDataFont } from "./ResolvedWorksheetCellFormatDataFont";
import { wrapNullable, unwrapNullable } from "../../igniteui-angular-core/ES2015/nullable";
/**
 * @hidden
 */
export class ReadOnlyResolvedWorksheetCellFormatData extends Base {
    constructor(a) {
        super();
        this._b = null;
        this._a = null;
        this._c(a);
    }
    _c(a) {
        this._b = a;
        if (this._a == null) {
            this._a = new ResolvedWorksheetCellFormatDataFont(a);
        }
        else {
            this._a._b(a);
        }
    }
    setFormatting(a) {
        throw new NotSupportedException(0);
    }
    get alignment() {
        return this._b._a4;
    }
    set alignment(a) {
        throw new NotSupportedException(0);
    }
    get bottomBorderColorInfo() {
        return this._b._bf;
    }
    set bottomBorderColorInfo(a) {
        throw new NotSupportedException(0);
    }
    get bottomBorderStyle() {
        return this._b._al;
    }
    set bottomBorderStyle(a) {
        throw new NotSupportedException(0);
    }
    get diagonalBorderColorInfo() {
        return this._b._bg;
    }
    set diagonalBorderColorInfo(a) {
        throw new NotSupportedException(0);
    }
    get diagonalBorders() {
        return this._b._aw;
    }
    set diagonalBorders(a) {
        throw new NotSupportedException(0);
    }
    get diagonalBorderStyle() {
        return this._b._am;
    }
    set diagonalBorderStyle(a) {
        throw new NotSupportedException(0);
    }
    get fill() {
        return this._b._ar;
    }
    set fill(a) {
        throw new NotSupportedException(0);
    }
    get font() {
        return this._a;
    }
    get formatOptions() {
        return this._b._bz;
    }
    set formatOptions(a) {
        throw new NotSupportedException(0);
    }
    get formatString() {
        return this._b._dg;
    }
    set formatString(a) {
        throw new NotSupportedException(0);
    }
    get indent() {
        return this._b._ct;
    }
    set indent(a) {
        throw new NotSupportedException(0);
    }
    get leftBorderColorInfo() {
        return this._b._bk;
    }
    set leftBorderColorInfo(a) {
        throw new NotSupportedException(0);
    }
    get leftBorderStyle() {
        return this._b._an;
    }
    set leftBorderStyle(a) {
        throw new NotSupportedException(0);
    }
    get locked() {
        return unwrapNullable(this._locked$i);
    }
    set locked(a) {
        arguments[0] = wrapNullable(Boolean_$type, arguments[0]);
        this._locked$i = arguments[0];
    }
    get _locked$i() {
        return this._b._c5;
    }
    set _locked$i(a) {
        throw new NotSupportedException(0);
    }
    get rightBorderColorInfo() {
        return this._b._bl;
    }
    set rightBorderColorInfo(a) {
        throw new NotSupportedException(0);
    }
    get rightBorderStyle() {
        return this._b._ao;
    }
    set rightBorderStyle(a) {
        throw new NotSupportedException(0);
    }
    get rotation() {
        return this._b._cw;
    }
    set rotation(a) {
        throw new NotSupportedException(0);
    }
    get shrinkToFit() {
        return unwrapNullable(this._shrinkToFit$i);
    }
    set shrinkToFit(a) {
        arguments[0] = wrapNullable(Boolean_$type, arguments[0]);
        this._shrinkToFit$i = arguments[0];
    }
    get _shrinkToFit$i() {
        return this._b._c6;
    }
    set _shrinkToFit$i(a) {
        throw new NotSupportedException(0);
    }
    get style() {
        return this._b._bs;
    }
    set style(a) {
        throw new NotSupportedException(0);
    }
    get topBorderColorInfo() {
        return this._b._bm;
    }
    set topBorderColorInfo(a) {
        throw new NotSupportedException(0);
    }
    get topBorderStyle() {
        return this._b._ap;
    }
    set topBorderStyle(a) {
        throw new NotSupportedException(0);
    }
    get verticalAlignment() {
        return this._b._a9;
    }
    set verticalAlignment(a) {
        throw new NotSupportedException(0);
    }
    get wrapText() {
        return unwrapNullable(this._wrapText$i);
    }
    set wrapText(a) {
        arguments[0] = wrapNullable(Boolean_$type, arguments[0]);
        this._wrapText$i = arguments[0];
    }
    get _wrapText$i() {
        return this._b._c7;
    }
    set _wrapText$i(a) {
        throw new NotSupportedException(0);
    }
}
ReadOnlyResolvedWorksheetCellFormatData.$t = markType(ReadOnlyResolvedWorksheetCellFormatData, 'ReadOnlyResolvedWorksheetCellFormatData', Base.$, [IWorksheetCellFormat_$type]);
//# sourceMappingURL=ReadOnlyResolvedWorksheetCellFormatData.js.map
