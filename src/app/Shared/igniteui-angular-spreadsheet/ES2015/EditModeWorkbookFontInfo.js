/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, Nullable$1, Boolean_$type, Number_$type, String_$type, typeGetValue, markType } from "../../igniteui-angular-core/ES2015/type";
import { WorkbookColorInfo, WorksheetCellFormatData, FontSuperscriptSubscriptStyle_$type, FontUnderlineStyle_$type } from "../../igniteui-angular-excel/ES2015/excel.core";
import { EqualityComparer$1 } from "../../igniteui-angular-core/ES2015/EqualityComparer$1";
import { stringEmpty } from "../../igniteui-angular-core/ES2015/string";
/**
 * @hidden
 */
export class EditModeWorkbookFontInfo extends Base {
    constructor() {
        super(...arguments);
        this.e = Nullable$1.toNullable(Boolean_$type, null);
        this.c = null;
        this.d = 0;
        this.f = Nullable$1.toNullable(Boolean_$type, null);
        this.i = null;
        this.g = Nullable$1.toNullable(Boolean_$type, null);
        this.a = 0;
        this.b = 0;
    }
    h(a) {
        let b = null;
        let c = this.k(Nullable$1.$.specialize(Boolean_$type), this.e, a.e, "Bold", b);
        this.e = c.p0;
        b = c.p3;
        let d = this.k(WorkbookColorInfo.$, this.c, a.c, "ColorInfo", b);
        this.c = d.p0;
        b = d.p3;
        let e = this.k(Number_$type, this.d, a.d, "Height", b);
        this.d = e.p0;
        b = e.p3;
        let f = this.k(Nullable$1.$.specialize(Boolean_$type), this.f, a.f, "Italic", b);
        this.f = f.p0;
        b = f.p3;
        let g = this.k(String_$type, this.i, a.i, "Name", b);
        this.i = g.p0;
        b = g.p3;
        let h = this.k(Nullable$1.$.specialize(Boolean_$type), this.g, a.g, "Strikeout", b);
        this.g = h.p0;
        b = h.p3;
        let i = this.k(FontSuperscriptSubscriptStyle_$type, this.a, a.a, "SuperscriptSubscriptStyle", b);
        this.a = i.p0;
        b = i.p3;
        let j = this.k(FontUnderlineStyle_$type, this.b, a.b, "UnderlineStyle", b);
        this.b = j.p0;
        b = j.p3;
        return b;
    }
    j() {
        this.e = Nullable$1.toNullable(Boolean_$type, false);
        this.c = WorkbookColorInfo.automatic;
        this.d = typeGetValue(WorksheetCellFormatData._c8(512));
        this.f = Nullable$1.toNullable(Boolean_$type, false);
        this.i = WorksheetCellFormatData._c8(2048);
        this.g = Nullable$1.toNullable(Boolean_$type, false);
        this.a = 0;
        this.b = 0;
    }
    k($t, a, b, c, d) {
        if (!EqualityComparer$1.defaultEqualityComparerValue($t).equalsC(a, b)) {
            a = b;
            if (d == null) {
                d = c;
            }
            else {
                d = stringEmpty();
            }
        }
        return {
            p0: a,
            p3: d
        };
    }
}
EditModeWorkbookFontInfo.$t = markType(EditModeWorkbookFontInfo, 'EditModeWorkbookFontInfo');
//# sourceMappingURL=EditModeWorkbookFontInfo.js.map
