/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, INotifyPropertyChanged_$type, PropertyChangedEventArgs, markType } from "./type";
import { ILegendContext_$type } from "./ILegendContext";
/**
 * @hidden
 */
export class DataContext extends Base {
    constructor() {
        super(...arguments);
        this._series = null;
        this.c = null;
        this.h = null;
        this.j = null;
        this.d = null;
        this.i = null;
        this.a = 0;
        this.e = null;
        this.propertyChanged = null;
    }
    get series() {
        return this._series;
    }
    set series(a) {
        this._series = a;
    }
    get item() {
        return this.c;
    }
    set item(a) {
        if (a != this.c) {
            this.c = a;
            this.g("Item");
        }
    }
    get actualItemBrush() {
        return this.h;
    }
    set actualItemBrush(a) {
        if (a != this.h) {
            this.h = a;
            this.g("ActualItemBrush");
        }
    }
    get outline() {
        return this.j;
    }
    set outline(a) {
        if (a != this.j) {
            this.j = a;
            this.g("Outline");
        }
    }
    get itemLabel() {
        return this.d;
    }
    set itemLabel(a) {
        if (a != this.d) {
            this.d = a;
            this.g("ItemLabel");
        }
    }
    get itemBrush() {
        return this.i;
    }
    set itemBrush(a) {
        if (a != this.i) {
            this.i = a;
            this.g("ItemBrush");
        }
    }
    get thickness() {
        return this.a;
    }
    set thickness(a) {
        if (a != this.a) {
            this.a = a;
            this.g("Thickness");
        }
    }
    get legendLabel() {
        return this.e;
    }
    set legendLabel(a) {
        if (a != this.e) {
            this.e = a;
            this.g("LegendLabel");
        }
    }
    g(a) {
        if (this.propertyChanged != null) {
            this.propertyChanged(this, new PropertyChangedEventArgs(a));
        }
    }
    flatten() {
        let series_ = this.series;
        let item_ = this.item;
        let actualItemBrush_ = this.actualItemBrush;
        let outline_ = this.outline;
        let itemLabel_ = this.itemLabel;
        let itemBrush_ = this.itemBrush;
        let thickness_ = this.thickness;
        return { item: item_, itemBrush: actualItemBrush_, outline: outline_, itemLabel: itemLabel_, thickness: thickness_ };
    }
}
DataContext.$t = markType(DataContext, 'DataContext', Base.$, [ILegendContext_$type, INotifyPropertyChanged_$type]);
//# sourceMappingURL=DataContext.js.map