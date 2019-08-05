/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Description } from "./Description";
import { markType } from "./type";
/**
 * @hidden
 */
var DataContextDescription = /** @class */ (function (_super) {
    tslib_1.__extends(DataContextDescription, _super);
    function DataContextDescription() {
        var _this = _super.call(this) || this;
        _this.k = null;
        _this.h = null;
        _this.m = null;
        _this.j = null;
        _this.i = null;
        _this.f = 0;
        _this.l = null;
        return _this;
    }
    DataContextDescription.prototype.get_type = function () {
        return "DataContext";
    };
    Object.defineProperty(DataContextDescription.prototype, "type", {
        get: function () {
            return this.get_type();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataContextDescription.prototype, "itemRef", {
        get: function () {
            return this.k;
        },
        set: function (a) {
            this.k = a;
            this.e("ItemRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataContextDescription.prototype, "actualItemBrush", {
        get: function () {
            return this.h;
        },
        set: function (a) {
            this.h = a;
            this.e("ActualItemBrush");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataContextDescription.prototype, "outline", {
        get: function () {
            return this.m;
        },
        set: function (a) {
            this.m = a;
            this.e("Outline");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataContextDescription.prototype, "itemLabelRef", {
        get: function () {
            return this.j;
        },
        set: function (a) {
            this.j = a;
            this.e("ItemLabelRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataContextDescription.prototype, "itemBrush", {
        get: function () {
            return this.i;
        },
        set: function (a) {
            this.i = a;
            this.e("ItemBrush");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataContextDescription.prototype, "thickness", {
        get: function () {
            return this.f;
        },
        set: function (a) {
            this.f = a;
            this.e("Thickness");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataContextDescription.prototype, "legendLabelRef", {
        get: function () {
            return this.l;
        },
        set: function (a) {
            this.l = a;
            this.e("LegendLabelRef");
        },
        enumerable: true,
        configurable: true
    });
    DataContextDescription.$t = markType(DataContextDescription, 'DataContextDescription', Description.$);
    return DataContextDescription;
}(Description));
export { DataContextDescription };
//# sourceMappingURL=DataContextDescription.js.map