/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "../../igniteui-angular-core/ES5/type";
import { MDList$1 } from "./MDList$1";
import { SpreadsheetCellRenderInfo } from "./SpreadsheetCellRenderInfo";
/**
 * @hidden
 */
var SpreadsheetCellRenderInfoArray = /** @class */ (function (_super) {
    tslib_1.__extends(SpreadsheetCellRenderInfoArray, _super);
    function SpreadsheetCellRenderInfoArray(a, b) {
        var _this = _super.call(this) || this;
        _this.a = null;
        _this.h(a, b);
        return _this;
    }
    Object.defineProperty(SpreadsheetCellRenderInfoArray.prototype, "e", {
        get: function () {
            return this.a.h;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpreadsheetCellRenderInfoArray.prototype, "f", {
        get: function () {
            return this.a.i;
        },
        enumerable: true,
        configurable: true
    });
    SpreadsheetCellRenderInfoArray.prototype.item = function (a, b) {
        return this.a.item(a, b) || SpreadsheetCellRenderInfoArray.b;
    };
    SpreadsheetCellRenderInfoArray.prototype.g = function (a, b, c, d) {
        if (this.a.item(a, b) == null && this.a.item(c, d) == null) {
            return;
        }
        var e = this.c(a, b);
        var f = this.c(c, d);
        f.f = e.f;
        f.g = e.g;
        f.a = e.a;
        f.c = e.c;
        f.l = e.l;
    };
    SpreadsheetCellRenderInfoArray.prototype.h = function (a, b) {
        if (this.a == null) {
            this.a = new MDList$1(SpreadsheetCellRenderInfo.$, a, b);
        }
        else {
            this.a.j(a, b);
        }
    };
    SpreadsheetCellRenderInfoArray.prototype.p = function (a, b, c, d) {
        if (c == 0 && this.a.item(a, b) == null) {
            return;
        }
        var e = this.c(a, b);
        e.e = c;
        e.n = d;
    };
    SpreadsheetCellRenderInfoArray.prototype.m = function (a, b, c, d) {
        if (c == 0 && this.a.item(a, b) == null) {
            return;
        }
        var e = this.c(a, b);
        e.d = c;
        e.m = d;
    };
    SpreadsheetCellRenderInfoArray.prototype.i = function (a, b, c) {
        if (c == null && this.a.item(a, b) == null) {
            return;
        }
        this.c(a, b).f = c;
    };
    SpreadsheetCellRenderInfoArray.prototype.k = function (a, b, c) {
        if (c == null && this.a.item(a, b) == null) {
            return;
        }
        this.c(a, b).g = c;
    };
    SpreadsheetCellRenderInfoArray.prototype.l = function (a, b, c, d, e) {
        if (c == 0 && this.a.item(a, b) == null) {
            return;
        }
        var f = this.c(a, b);
        f.a = c;
        f.c = d;
        f.l = e;
    };
    SpreadsheetCellRenderInfoArray.prototype.n = function (a, b, c) {
        if (c == 0 && this.a.item(a, b) == null) {
            return;
        }
        this.c(a, b).i = c;
    };
    SpreadsheetCellRenderInfoArray.prototype.o = function (a, b, c) {
        if (c == 0 && this.a.item(a, b) == null) {
            return;
        }
        this.c(a, b).j = c;
    };
    SpreadsheetCellRenderInfoArray.prototype.q = function (a, b, c) {
        if (c == 0 && this.a.item(a, b) == null) {
            return;
        }
        this.c(a, b).k = c;
    };
    SpreadsheetCellRenderInfoArray.prototype.j = function (a, b, c) {
        if (c == 0 && this.a.item(a, b) == null) {
            return;
        }
        this.c(a, b).h = c;
    };
    SpreadsheetCellRenderInfoArray.prototype.c = function (a, b) {
        var c = this.a.item(a, b);
        if (c == null) {
            this.a.item(a, b, c = SpreadsheetCellRenderInfo.b());
        }
        return c;
    };
    SpreadsheetCellRenderInfoArray.$t = markType(SpreadsheetCellRenderInfoArray, 'SpreadsheetCellRenderInfoArray');
    SpreadsheetCellRenderInfoArray.b = SpreadsheetCellRenderInfo.b();
    return SpreadsheetCellRenderInfoArray;
}(Base));
export { SpreadsheetCellRenderInfoArray };
//# sourceMappingURL=SpreadsheetCellRenderInfoArray.js.map
