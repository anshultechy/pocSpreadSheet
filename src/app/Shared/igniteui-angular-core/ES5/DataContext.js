/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, INotifyPropertyChanged_$type, PropertyChangedEventArgs, markType } from "./type";
import { ILegendContext_$type } from "./ILegendContext";
/**
 * @hidden
 */
var DataContext = /** @class */ (function (_super) {
    tslib_1.__extends(DataContext, _super);
    function DataContext() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._series = null;
        _this.c = null;
        _this.h = null;
        _this.j = null;
        _this.d = null;
        _this.i = null;
        _this.a = 0;
        _this.e = null;
        _this.propertyChanged = null;
        return _this;
    }
    Object.defineProperty(DataContext.prototype, "series", {
        get: function () {
            return this._series;
        },
        set: function (a) {
            this._series = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataContext.prototype, "item", {
        get: function () {
            return this.c;
        },
        set: function (a) {
            if (a != this.c) {
                this.c = a;
                this.g("Item");
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataContext.prototype, "actualItemBrush", {
        get: function () {
            return this.h;
        },
        set: function (a) {
            if (a != this.h) {
                this.h = a;
                this.g("ActualItemBrush");
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataContext.prototype, "outline", {
        get: function () {
            return this.j;
        },
        set: function (a) {
            if (a != this.j) {
                this.j = a;
                this.g("Outline");
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataContext.prototype, "itemLabel", {
        get: function () {
            return this.d;
        },
        set: function (a) {
            if (a != this.d) {
                this.d = a;
                this.g("ItemLabel");
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataContext.prototype, "itemBrush", {
        get: function () {
            return this.i;
        },
        set: function (a) {
            if (a != this.i) {
                this.i = a;
                this.g("ItemBrush");
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataContext.prototype, "thickness", {
        get: function () {
            return this.a;
        },
        set: function (a) {
            if (a != this.a) {
                this.a = a;
                this.g("Thickness");
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataContext.prototype, "legendLabel", {
        get: function () {
            return this.e;
        },
        set: function (a) {
            if (a != this.e) {
                this.e = a;
                this.g("LegendLabel");
            }
        },
        enumerable: true,
        configurable: true
    });
    DataContext.prototype.g = function (a) {
        if (this.propertyChanged != null) {
            this.propertyChanged(this, new PropertyChangedEventArgs(a));
        }
    };
    DataContext.prototype.flatten = function () {
        var series_ = this.series;
        var item_ = this.item;
        var actualItemBrush_ = this.actualItemBrush;
        var outline_ = this.outline;
        var itemLabel_ = this.itemLabel;
        var itemBrush_ = this.itemBrush;
        var thickness_ = this.thickness;
        return { item: item_, itemBrush: actualItemBrush_, outline: outline_, itemLabel: itemLabel_, thickness: thickness_ };
    };
    DataContext.$t = markType(DataContext, 'DataContext', Base.$, [ILegendContext_$type, INotifyPropertyChanged_$type]);
    return DataContext;
}(Base));
export { DataContext };
//# sourceMappingURL=DataContext.js.map