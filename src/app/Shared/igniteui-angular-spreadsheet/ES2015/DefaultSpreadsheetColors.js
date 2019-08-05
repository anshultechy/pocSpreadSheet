/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, callStaticConstructors, markType, EnumUtil } from "../../igniteui-angular-core/ES2015/type";
import { SpreadsheetResourceId_$type } from "./SpreadsheetResourceId";
import { Dictionary$2 } from "../../igniteui-angular-core/ES2015/Dictionary$2";
import { Color } from "../../igniteui-angular-core/ES2015/Color";
import { ExcelUtils } from "../../igniteui-angular-excel/ES2015/excel.core";
/**
 * @hidden
 */
export class DefaultSpreadsheetColors extends Base {
    static staticInit() {
        DefaultSpreadsheetColors.a = new Dictionary$2(SpreadsheetResourceId_$type, Color.$, 0);
        DefaultSpreadsheetColors.b = new Dictionary$2(SpreadsheetResourceId_$type, Color.$, 0);
        let a = EnumUtil.getValues(SpreadsheetResourceId_$type);
        for (let c = 0; c < a.length; c++) {
            let b = a[c];
            switch (b) {
                case 11:
                case 24:
                case 7:
                    DefaultSpreadsheetColors.a.item(b, Color.u(255, 241, 241, 241));
                    break;
                case 13:
                case 26:
                    DefaultSpreadsheetColors.a.item(b, Color.u(255, 212, 212, 212));
                    break;
                case 12:
                case 25:
                    DefaultSpreadsheetColors.a.item(b, Color.u(255, 211, 240, 224));
                    break;
                case 16:
                case 17:
                case 30:
                case 29:
                case 32:
                case 23:
                case 3:
                case 4:
                case 10:
                case 37:
                case 5:
                case 49:
                case 41:
                    DefaultSpreadsheetColors.a.item(b, Color.u(255, 33, 115, 70));
                    break;
                case 34:
                case 20:
                    DefaultSpreadsheetColors.a.item(b, Color.u(255, 198, 198, 198));
                    break;
                case 39:
                case 40:
                    DefaultSpreadsheetColors.a.item(b, Color.u(193, 127, 127, 127));
                    break;
                case 36:
                case 22:
                    DefaultSpreadsheetColors.a.item(b, Color.u(255, 160, 173, 166));
                    break;
                case 35:
                    DefaultSpreadsheetColors.a.item(b, Color.u(255, 184, 184, 184));
                    DefaultSpreadsheetColors.b.item(b, Color.u(255, 172, 172, 172));
                    break;
                case 21:
                    DefaultSpreadsheetColors.a.item(b, Color.u(255, 184, 184, 184));
                    DefaultSpreadsheetColors.b.item(b, Color.u(255, 172, 172, 172));
                    break;
                case 33:
                    DefaultSpreadsheetColors.a.item(b, Color.u(255, 219, 219, 219));
                    DefaultSpreadsheetColors.b.item(b, Color.u(255, 183, 183, 183));
                    break;
                case 19:
                    DefaultSpreadsheetColors.a.item(b, Color.u(255, 219, 219, 219));
                    DefaultSpreadsheetColors.b.item(b, Color.u(255, 183, 183, 183));
                    break;
                case 0:
                case 2:
                    DefaultSpreadsheetColors.a.item(b, Color.u(57, 0, 0, 0));
                    break;
                case 1:
                case 6:
                    DefaultSpreadsheetColors.a.item(b, Color.u(255, 255, 255, 255));
                    break;
                case 15:
                case 28:
                case 18:
                case 31:
                    DefaultSpreadsheetColors.a.item(b, Color.u(255, 38, 38, 38));
                    break;
                case 14:
                case 27:
                    DefaultSpreadsheetColors.a.item(b, Color.u(255, 159, 213, 183));
                    break;
                case 8:
                    DefaultSpreadsheetColors.a.item(b, Color.u(255, 198, 198, 198));
                    break;
                case 9:
                    DefaultSpreadsheetColors.a.item(b, Color.u(255, 158, 158, 158));
                    break;
                case 38:
                    DefaultSpreadsheetColors.a.item(b, Color.u(255, 212, 212, 212));
                    break;
                case 52:
                    DefaultSpreadsheetColors.a.item(b, Color.u(255, 119, 119, 119));
                    break;
                case 54:
                case 57:
                    DefaultSpreadsheetColors.a.item(b, Color.u(255, 67, 148, 103));
                    break;
                case 55:
                    DefaultSpreadsheetColors.a.item(b, Color.u(255, 10, 99, 50));
                    break;
                case 53:
                case 56:
                    DefaultSpreadsheetColors.a.item(b, Color.u(255, 198, 198, 198));
                    break;
                case 58:
                    DefaultSpreadsheetColors.a.item(b, Color.u(255, 179, 179, 179));
                    break;
                case 51:
                    DefaultSpreadsheetColors.a.item(b, Color.u(255, 171, 171, 171));
                    break;
                case 50:
                    DefaultSpreadsheetColors.a.item(b, Color.u(255, 246, 246, 246));
                    break;
                case 42:
                case 44:
                    DefaultSpreadsheetColors.a.item(b, Color.u(255, 255, 255, 255));
                    break;
                case 43:
                case 45:
                    DefaultSpreadsheetColors.a.item(b, Color.u(255, 38, 38, 38));
                    break;
                case 46:
                case 47:
                    DefaultSpreadsheetColors.a.item(b, Color.u(0, 255, 255, 255));
                    break;
                case 48:
                    DefaultSpreadsheetColors.a.item(b, Color.u(255, 68, 68, 68));
                    break;
                case 60:
                    DefaultSpreadsheetColors.a.item(b, Color.u(128, 134, 134, 134));
                    break;
                case 59:
                    DefaultSpreadsheetColors.a.item(b, Color.u(255, 211, 211, 211));
                    break;
                case 62:
                    DefaultSpreadsheetColors.a.item(b, Color.u(255, 255, 255, 225));
                    break;
                case 61:
                    DefaultSpreadsheetColors.a.item(b, Color.u(255, 100, 100, 100));
                    break;
                case 63:
                    DefaultSpreadsheetColors.a.item(b, Color.u(255, 93, 93, 93));
                    break;
                case 64:
                    DefaultSpreadsheetColors.a.item(b, Color.u(255, 255, 0, 0));
                    break;
                case 65:
                    DefaultSpreadsheetColors.a.item(b, Color.u(255, 166, 172, 179));
                    break;
                case 66:
                    DefaultSpreadsheetColors.a.item(b, Color.u(255, 254, 255, 255));
                    break;
                case 67:
                    DefaultSpreadsheetColors.a.item(b, Color.u(255, 78, 80, 82));
                    break;
                case 68:
                    DefaultSpreadsheetColors.a.item(b, Color.u(255, 145, 150, 157));
                    break;
                case 69:
                    DefaultSpreadsheetColors.a.item(b, Color.u(255, 221, 225, 231));
                    break;
                case 70:
                    DefaultSpreadsheetColors.a.item(b, Color.u(255, 83, 85, 87));
                    break;
                case 72:
                    DefaultSpreadsheetColors.a.item(b, Color.u(102, 0, 0, 0));
                    break;
                case 71:
                    DefaultSpreadsheetColors.a.item(b, Color.u(102, 255, 255, 255));
                    break;
            }
        }
    }
    static getDefaultColor(a) {
        return DefaultSpreadsheetColors.d(a, false);
    }
    static getDefaultColor2(a) {
        return DefaultSpreadsheetColors.d(a, true);
    }
    static d(a, b = false) {
        let c = false == b ? DefaultSpreadsheetColors.a : DefaultSpreadsheetColors.b;
        let d = new Color();
        let e = ((() => { let f = c.tryGetValue(a, d); d = f.p1; return f.ret; })());
        if (e) {
            return d;
        }
        return ExcelUtils.gv;
    }
}
DefaultSpreadsheetColors.$t = markType(DefaultSpreadsheetColors, 'DefaultSpreadsheetColors');
DefaultSpreadsheetColors.a = null;
DefaultSpreadsheetColors.b = null;
callStaticConstructors();
//# sourceMappingURL=DefaultSpreadsheetColors.js.map
