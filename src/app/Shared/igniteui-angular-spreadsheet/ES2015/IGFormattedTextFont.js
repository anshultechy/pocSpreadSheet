/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, NotSupportedException, Nullable$1, Boolean_$type, markType } from "../../igniteui-angular-core/ES2015/type";
import { MathUtilities, IWorkbookFont_$type } from "../../igniteui-angular-excel/ES2015/excel.core";
import { NotImplementedException } from "../../igniteui-angular-core/ES2015/NotImplementedException";
import { wrapNullable, unwrapNullable, nullableIsNull } from "../../igniteui-angular-core/ES2015/nullable";
import { truncate } from "../../igniteui-angular-core/ES2015/number";
/**
 * @hidden
 */
export class IGFormattedTextFont extends Base {
    constructor() {
        super(...arguments);
        this._a = null;
    }
    _b(a) {
        if (!a.hasValue) {
            return Nullable$1.toNullable(Boolean_$type, null);
        }
        return Nullable$1.toNullable(Boolean_$type, a.value ? true : false);
    }
    get bold() {
        return unwrapNullable(this._bold$i);
    }
    set bold(a) {
        arguments[0] = wrapNullable(Boolean_$type, arguments[0]);
        this._bold$i = arguments[0];
    }
    get _bold$i() {
        return this._b(this._a._o);
    }
    set _bold$i(a) {
        throw new NotSupportedException(0);
    }
    get colorInfo() {
        return this._a._d;
    }
    set colorInfo(a) {
        throw new NotSupportedException(0);
    }
    get height() {
        return truncate(MathUtilities.f(!nullableIsNull(this._a._p) ? this._a._p.value : 0));
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
        return this._b(this._a._q);
    }
    set _italic$i(a) {
        throw new NotSupportedException(0);
    }
    get name() {
        return this._a._v;
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
        return this._b(this._a._r);
    }
    set _strikeout$i(a) {
        throw new NotSupportedException(0);
    }
    get superscriptSubscriptStyle() {
        return !nullableIsNull(this._a._s) ? this._a._s.value : -1;
    }
    set superscriptSubscriptStyle(a) {
        throw new NotSupportedException(0);
    }
    get underlineStyle() {
        return !nullableIsNull(this._a._t) ? this._a._t.value : -1;
    }
    set underlineStyle(a) {
        throw new NotSupportedException(0);
    }
    setFontFormatting(a) {
        throw new NotImplementedException(0);
    }
}
IGFormattedTextFont.$t = markType(IGFormattedTextFont, 'IGFormattedTextFont', Base.$, [IWorkbookFont_$type]);
//# sourceMappingURL=IGFormattedTextFont.js.map
