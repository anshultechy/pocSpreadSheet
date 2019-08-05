/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "../../igniteui-angular-core/ES5/type";
import { List$1 } from "../../igniteui-angular-core/ES5/List$1";
/**
 * @hidden
 */
var DeferredOperation = /** @class */ (function (_super) {
    tslib_1.__extends(DeferredOperation, _super);
    function DeferredOperation(a) {
        var _this = _super.call(this) || this;
        _this.h = null;
        _this.g = 0;
        _this.b = null;
        _this.c = false;
        _this.b = a;
        return _this;
    }
    Object.defineProperty(DeferredOperation.prototype, "d", {
        get: function () {
            return this.h != null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeferredOperation.prototype, "e", {
        get: function () {
            return this.c;
        },
        enumerable: true,
        configurable: true
    });
    DeferredOperation.prototype.k = function () {
        if (this.h == null) {
            return;
        }
        this.h = null;
        var a = this.c;
        this.c = true;
        try {
            this.b();
        }
        finally {
            this.c = a;
        }
    };
    DeferredOperation.prototype.i = function () {
        if (this.h != null) {
            this.h = null;
            if (this == DeferredOperation.a) {
                window.clearTimeout(this.g);
            }
            else if (DeferredOperation.f.remove(this) && DeferredOperation.f.count == 0) {
                DeferredOperation.a.i();
            }
        }
    };
    DeferredOperation.prototype.m = function () {
        var _this = this;
        if (this.h != null) {
            return;
        }
        if (DeferredOperation.a == null) {
            DeferredOperation.j();
        }
        var a = {};
        this.h = a;
        if (this == DeferredOperation.a) {
            this.g = window.setTimeout(function () { return _this.l(a); }, 0);
        }
        else {
            DeferredOperation.f.add(this);
            DeferredOperation.a.m();
        }
    };
    DeferredOperation.j = function () {
        if (DeferredOperation.a == null) {
            DeferredOperation.f = new List$1(DeferredOperation.$, 0);
            DeferredOperation.a = new DeferredOperation(function () {
                var a = DeferredOperation.f.toArray();
                DeferredOperation.f.clear();
                for (var b = 0; b < a.length; b++) {
                    if (a[b] != null) {
                        a[b].k();
                    }
                }
            });
        }
    };
    DeferredOperation.prototype.l = function (a) {
        if (a != this.h) {
            return;
        }
        this.k();
    };
    DeferredOperation.$t = markType(DeferredOperation, 'DeferredOperation');
    DeferredOperation.f = null;
    DeferredOperation.a = null;
    return DeferredOperation;
}(Base));
export { DeferredOperation };
//# sourceMappingURL=DeferredOperation.js.map
