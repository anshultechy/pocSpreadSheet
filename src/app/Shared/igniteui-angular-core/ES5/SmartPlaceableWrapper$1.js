/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, Point_$type, markType } from "./type";
import { ISmartPlaceable_$type } from "./ISmartPlaceable";
import { Size } from "./Size";
import { Rect } from "./Rect";
/**
 * @hidden
 */
var SmartPlaceableWrapper$1 = /** @class */ (function (_super) {
    tslib_1.__extends(SmartPlaceableWrapper$1, _super);
    function SmartPlaceableWrapper$1($t) {
        var _this = _super.call(this) || this;
        _this.$t = null;
        _this.f = false;
        _this.c = null;
        _this.g = null;
        _this.i = null;
        _this.a = [4];
        _this.b = [4, 5, 2, 1, 8, 7, 0, 3, 6];
        _this.j = new Size();
        _this.e = 0;
        _this.$t = $t;
        _this.$type = _this.$type.specialize(_this.$t);
        _this.f = false;
        return _this;
    }
    Object.defineProperty(SmartPlaceableWrapper$1.prototype, "d", {
        get: function () {
            return this.c;
        },
        set: function (a) {
            this.c = a;
        },
        enumerable: true,
        configurable: true
    });
    SmartPlaceableWrapper$1.prototype.getSmartPositions = function () {
        if (this.f) {
            return this.a;
        }
        else {
            return this.b;
        }
    };
    SmartPlaceableWrapper$1.prototype.k = function () {
        return this.j;
    };
    SmartPlaceableWrapper$1.prototype.getSmartBounds = function (a) {
        var b = this.k();
        var c = b.width;
        var d = b.height;
        var e;
        {
            e = this.h(a, c, d);
        }
        return new Rect(0, this.i.x + e.x, this.i.y + e.y, c, d);
    };
    Object.defineProperty(SmartPlaceableWrapper$1.prototype, "opacity", {
        get: function () {
            return this.d._opacity;
        },
        set: function (a) {
            this.d._opacity = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SmartPlaceableWrapper$1.prototype, "smartPosition", {
        get: function () {
            return this.e;
        },
        set: function (a) {
            this.e = a;
            var b = this.k();
            var c = b.height;
            var d = b.width;
            var e;
            {
                e = this.h(this.e, d, c);
            }
            this.g = { $type: Point_$type, x: this.i.x + e.x, y: this.i.y + e.y };
        },
        enumerable: true,
        configurable: true
    });
    SmartPlaceableWrapper$1.prototype.h = function (a, b, c) {
        var d = 0.25;
        switch (a) {
            case 0: return { $type: Point_$type, x: -b * d, y: -c * d };
            case 1: return { $type: Point_$type, x: 0, y: -c * d };
            case 2: return { $type: Point_$type, x: b * d, y: -c * d };
            case 3: return { $type: Point_$type, x: -b * d, y: 0 };
            case 4: return { $type: Point_$type, x: 0, y: 0 };
            case 5: return { $type: Point_$type, x: b * d, y: 0 };
            case 6: return { $type: Point_$type, x: -b * d, y: c * d };
            case 7: return { $type: Point_$type, x: 0, y: c * d };
            default: return { $type: Point_$type, x: b * d, y: c * d };
        }
    };
    SmartPlaceableWrapper$1.$t = markType(SmartPlaceableWrapper$1, 'SmartPlaceableWrapper$1', Base.$, [ISmartPlaceable_$type]);
    return SmartPlaceableWrapper$1;
}(Base));
export { SmartPlaceableWrapper$1 };
//# sourceMappingURL=SmartPlaceableWrapper$1.js.map