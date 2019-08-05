/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { CellRegionMapBase } from "./CellRegionMapBase";
import { IntRange } from "./IntRange";
import { WorksheetRegionAddress } from "../../igniteui-angular-excel/ES5/excel.core";
import { markType } from "../../igniteui-angular-core/ES5/type";
/**
 * @hidden
 */
var CellRegionMapSingle = /** @class */ (function (_super) {
    tslib_1.__extends(CellRegionMapSingle, _super);
    function CellRegionMapSingle(a) {
        var _this = _super.call(this) || this;
        _this.p = new WorksheetRegionAddress();
        _this.r = 0;
        _this.q = 0;
        _this.n = null;
        _this.m = null;
        _this.o = null;
        _this.p = a;
        _this.r = a._af;
        _this.q = a._ad;
        _this.n = [new IntRange(1, a._ac, a._ae)];
        _this.m = [new IntRange(1, a._w, a._x)];
        _this.o = [a];
        return _this;
    }
    CellRegionMapSingle.prototype.f = function (a) {
        return this.p._h(a);
    };
    CellRegionMapSingle.prototype.g = function (a) {
        return this.p._w + (a % this.r);
    };
    CellRegionMapSingle.prototype.h = function (a) {
        return this.p._ac + (a % this.q);
    };
    CellRegionMapSingle.prototype.e = function (a, b) {
        return this.p._i(a, b) ? this.p : WorksheetRegionAddress._b;
    };
    CellRegionMapSingle.prototype.j = function (a) {
        return 0;
    };
    CellRegionMapSingle.prototype.i = function (a) {
        return 0;
    };
    CellRegionMapSingle.prototype.get_a = function () {
        return this.m;
    };
    Object.defineProperty(CellRegionMapSingle.prototype, "a", {
        get: function () {
            return this.get_a();
        },
        enumerable: true,
        configurable: true
    });
    CellRegionMapSingle.prototype.get_c = function () {
        return this.n;
    };
    Object.defineProperty(CellRegionMapSingle.prototype, "c", {
        get: function () {
            return this.get_c();
        },
        enumerable: true,
        configurable: true
    });
    CellRegionMapSingle.prototype.get_b = function () {
        return this.o;
    };
    Object.defineProperty(CellRegionMapSingle.prototype, "b", {
        get: function () {
            return this.get_b();
        },
        enumerable: true,
        configurable: true
    });
    CellRegionMapSingle.prototype.get_l = function () {
        return this.r;
    };
    Object.defineProperty(CellRegionMapSingle.prototype, "l", {
        get: function () {
            return this.get_l();
        },
        enumerable: true,
        configurable: true
    });
    CellRegionMapSingle.prototype.get_k = function () {
        return this.q;
    };
    Object.defineProperty(CellRegionMapSingle.prototype, "k", {
        get: function () {
            return this.get_k();
        },
        enumerable: true,
        configurable: true
    });
    CellRegionMapSingle.prototype.d = function () {
        return this;
    };
    CellRegionMapSingle.$t = markType(CellRegionMapSingle, 'CellRegionMapSingle', CellRegionMapBase.$);
    return CellRegionMapSingle;
}(CellRegionMapBase));
export { CellRegionMapSingle };
//# sourceMappingURL=CellRegionMapSingle.js.map
