/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, Type, markType } from "./type";
import { LinkedList$1 } from "./LinkedList$1";
import { LRUCacheItem$2 } from "./LRUCacheItem$2";
import { FastIterationDictionary$2 } from "./FastIterationDictionary$2";
/**
 * @hidden
 */
var LRUCache$2 = /** @class */ (function (_super) {
    tslib_1.__extends(LRUCache$2, _super);
    function LRUCache$2($tKey, $tValue, a) {
        var _rest = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            _rest[_i - 3] = arguments[_i];
        }
        var _this = _super.call(this) || this;
        _this.$tKey = null;
        _this.$tValue = null;
        _this.f = 0;
        _this.e = null;
        _this.a = null;
        _this.$tKey = $tKey;
        _this.$tValue = $tValue;
        _this.$type = _this.$type.specialize(_this.$tKey, _this.$tValue);
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    var c = _rest[0];
                    var d = [c, null];
                    {
                        var f = d[0];
                        var g = d[1];
                        _this.e = new LinkedList$1(LRUCacheItem$2.$.specialize(_this.$tKey, _this.$tValue));
                        _this.a = new FastIterationDictionary$2(_this.$tKey, LRUCacheItem$2.$.specialize(_this.$tKey, _this.$tValue), 1, g);
                        _this.f = f;
                    }
                }
                break;
            case 1:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    _this.e = new LinkedList$1(LRUCacheItem$2.$.specialize(_this.$tKey, _this.$tValue));
                    _this.a = new FastIterationDictionary$2(_this.$tKey, LRUCacheItem$2.$.specialize(_this.$tKey, _this.$tValue), 1, d);
                    _this.f = c;
                }
                break;
        }
        return _this;
    }
    Object.defineProperty(LRUCache$2.prototype, "h", {
        get: function () {
            return this.f;
        },
        set: function (a) {
            this.f = a;
            while (this.a.r > this.f) {
                this.j(this.e.d.c.a);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LRUCache$2.prototype, "b", {
        get: function () {
            return this.a;
        },
        enumerable: true,
        configurable: true
    });
    LRUCache$2.prototype.d = function (a) {
        return this.a.d(a);
    };
    LRUCache$2.prototype.item = function (a, b) {
        if (arguments.length === 2) {
            if (!this.a.d(a)) {
                var c = new LRUCacheItem$2(this.$tKey, this.$tValue);
                c.b = b;
                c.a = a;
                this.e.e(c);
                c.c = this.e.c;
                this.a.s(a, c);
            }
            else {
                var d = this.item(a);
                this.a.item(a).b = b;
            }
            while (this.a.r > this.f) {
                this.j(this.e.d.c.a);
            }
            return b;
        }
        else {
            if (!this.a.d(a)) {
                return Type.getDefaultValue(this.$tValue);
            }
            var b_1 = this.a.item(a);
            var c = b_1.c;
            this.e.h(c);
            this.e.e(c.c);
            b_1.c = this.e.c;
            return b_1.b;
        }
    };
    LRUCache$2.prototype.j = function (a) {
        if (!this.a.d(a)) {
            return;
        }
        var b = this.a.item(a);
        this.e.h(b.c);
        this.a.f(b.a);
    };
    LRUCache$2.prototype.i = function () {
        this.a.u();
        this.e = new LinkedList$1(LRUCacheItem$2.$.specialize(this.$tKey, this.$tValue));
    };
    Object.defineProperty(LRUCache$2.prototype, "g", {
        get: function () {
            return this.a.r;
        },
        enumerable: true,
        configurable: true
    });
    LRUCache$2.$t = markType(LRUCache$2, 'LRUCache$2');
    return LRUCache$2;
}(Base));
export { LRUCache$2 };
//# sourceMappingURL=LRUCache$2.js.map