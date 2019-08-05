/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, INotifyPropertyChanged_$type, PropertyChangedEventArgs, String_$type, markType } from "../../igniteui-angular-core/ES2015/type";
import { Dictionary$2 } from "../../igniteui-angular-core/ES2015/Dictionary$2";
import { PaletteEntry } from "./PaletteEntry";
import { WorkbookColorInfo } from "../../igniteui-angular-excel/ES2015/excel.core";
import { Color } from "../../igniteui-angular-core/ES2015/Color";
import { stringFormat } from "../../igniteui-angular-core/ES2015/stringExtended";
/**
 * @hidden
 */
export class ThemeColorPickerControlViewModel extends Base {
    constructor(a, b) {
        super();
        this._c = null;
        this._b = null;
        this._a = null;
        this.propertyChanged = null;
        this._d(a);
        this._a = a;
        this._c = b;
    }
    _e(a) {
    }
    _d(a) {
        if (null != this._b) {
            return;
        }
        this._b = new Dictionary$2(String_$type, PaletteEntry.$, 0);
        let b = [0, -0.05, -0.15, -0.25, -0.35, -0.5];
        let c = [0, 0.5, 0.35, 0.25, 0.15, 0.05];
        let d = [0, -0.1, -0.25, -0.5, -0.75, -0.9];
        let e = [0, 0.8, 0.6, 0.4, -0.25, -0.5];
        let f = "";
        let g = 0;
        let h = g.toString();
        for (let i = 0; i < 6; i++) {
            f = i.toString();
            g = 0;
            h = g.toString();
            this._b.addItem(stringFormat("{0}-{1}", f, h), new PaletteEntry(new WorkbookColorInfo(0, b[i]), a));
            g++;
            h = g.toString();
            this._b.addItem(stringFormat("{0}-{1}", f, h), new PaletteEntry(new WorkbookColorInfo(1, c[i]), a));
            g++;
            h = g.toString();
            this._b.addItem(stringFormat("{0}-{1}", f, h), new PaletteEntry(new WorkbookColorInfo(2, d[i]), a));
            g++;
            h = g.toString();
            this._b.addItem(stringFormat("{0}-{1}", f, h), new PaletteEntry(new WorkbookColorInfo(3, e[i]), a));
            g++;
            h = g.toString();
            this._b.addItem(stringFormat("{0}-{1}", f, h), new PaletteEntry(new WorkbookColorInfo(4, e[i]), a));
            g++;
            h = g.toString();
            this._b.addItem(stringFormat("{0}-{1}", f, h), new PaletteEntry(new WorkbookColorInfo(5, e[i]), a));
            g++;
            h = g.toString();
            this._b.addItem(stringFormat("{0}-{1}", f, h), new PaletteEntry(new WorkbookColorInfo(6, e[i]), a));
            g++;
            h = g.toString();
            this._b.addItem(stringFormat("{0}-{1}", f, h), new PaletteEntry(new WorkbookColorInfo(7, e[i]), a));
            g++;
            h = g.toString();
            this._b.addItem(stringFormat("{0}-{1}", f, h), new PaletteEntry(new WorkbookColorInfo(8, e[i]), a));
            g++;
            h = g.toString();
            this._b.addItem(stringFormat("{0}-{1}", f, h), new PaletteEntry(new WorkbookColorInfo(9, e[i]), a));
            g++;
            h = g.toString();
        }
        f = "6";
        g = 0;
        h = g.toString();
        this._b.addItem(stringFormat("{0}-{1}", f, h), new PaletteEntry(new WorkbookColorInfo(Color.u(255, 192, 0, 0)), a));
        g++;
        h = g.toString();
        this._b.addItem(stringFormat("{0}-{1}", f, h), new PaletteEntry(new WorkbookColorInfo(Color.u(255, 255, 0, 0)), a));
        g++;
        h = g.toString();
        this._b.addItem(stringFormat("{0}-{1}", f, h), new PaletteEntry(new WorkbookColorInfo(Color.u(255, 255, 192, 0)), a));
        g++;
        h = g.toString();
        this._b.addItem(stringFormat("{0}-{1}", f, h), new PaletteEntry(new WorkbookColorInfo(Color.u(255, 255, 255, 0)), a));
        g++;
        h = g.toString();
        this._b.addItem(stringFormat("{0}-{1}", f, h), new PaletteEntry(new WorkbookColorInfo(Color.u(255, 146, 205, 80)), a));
        g++;
        h = g.toString();
        this._b.addItem(stringFormat("{0}-{1}", f, h), new PaletteEntry(new WorkbookColorInfo(Color.u(255, 0, 176, 80)), a));
        g++;
        h = g.toString();
        this._b.addItem(stringFormat("{0}-{1}", f, h), new PaletteEntry(new WorkbookColorInfo(Color.u(255, 0, 176, 240)), a));
        g++;
        h = g.toString();
        this._b.addItem(stringFormat("{0}-{1}", f, h), new PaletteEntry(new WorkbookColorInfo(Color.u(255, 0, 112, 192)), a));
        g++;
        h = g.toString();
        this._b.addItem(stringFormat("{0}-{1}", f, h), new PaletteEntry(new WorkbookColorInfo(Color.u(255, 0, 32, 96)), a));
        g++;
        h = g.toString();
        this._b.addItem(stringFormat("{0}-{1}", f, h), new PaletteEntry(new WorkbookColorInfo(Color.u(255, 112, 48, 160)), a));
        g++;
        h = g.toString();
    }
    _f(a) {
        this._e(a);
        let b = this.propertyChanged;
        if (null != b) {
            b(this, new PropertyChangedEventArgs(a));
        }
    }
}
ThemeColorPickerControlViewModel.$t = markType(ThemeColorPickerControlViewModel, 'ThemeColorPickerControlViewModel', Base.$, [INotifyPropertyChanged_$type]);
//# sourceMappingURL=ThemeColorPickerControlViewModel.js.map
