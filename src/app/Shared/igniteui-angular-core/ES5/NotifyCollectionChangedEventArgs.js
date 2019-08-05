/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { EventArgs, Base, markType } from "./type";
import { List$1 } from "./List$1";
/**
 * @hidden
 */
var NotifyCollectionChangedEventArgs = /** @class */ (function (_super) {
    tslib_1.__extends(NotifyCollectionChangedEventArgs, _super);
    function NotifyCollectionChangedEventArgs(a) {
        var _rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            _rest[_i - 1] = arguments[_i];
        }
        var _this = this;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    var c = _rest[0];
                    _this = _super.call(this) || this;
                    _this.f = 0;
                    _this.b = null;
                    _this.h = 0;
                    _this.c = null;
                    _this.i = 0;
                    _this.f = c;
                    _this.c = new List$1(Base.$, 0);
                    _this.b = new List$1(Base.$, 0);
                }
                break;
            case 1:
                {
                    var c = _rest[0];
                    var d_1 = _rest[1];
                    var e = _rest[2];
                    _this = _super.call(this) || this;
                    _this.f = 0;
                    _this.b = null;
                    _this.h = 0;
                    _this.c = null;
                    _this.i = 0;
                    _this.f = c;
                    _this.c = new List$1(Base.$, 0);
                    if (_this.f == 1 || _this.f == 2) {
                        _this.c.add(d_1);
                        _this.i = e;
                    }
                    if (_this.f != 1) {
                        _this.b = ((function () {
                            var $ret = new List$1(Base.$, 0);
                            $ret.add1(d_1);
                            return $ret;
                        })());
                    }
                    else {
                        _this.b = new List$1(Base.$, 0);
                    }
                    _this.h = e;
                }
                break;
            case 2:
                {
                    var c = _rest[0];
                    var d_2 = _rest[1];
                    var e_1 = _rest[2];
                    var f = _rest[3];
                    _this = _super.call(this) || this;
                    _this.f = 0;
                    _this.b = null;
                    _this.h = 0;
                    _this.c = null;
                    _this.i = 0;
                    _this.f = c;
                    _this.h = f;
                    _this.i = f;
                    _this.b = ((function () {
                        var $ret = new List$1(Base.$, 0);
                        $ret.add1(d_2);
                        return $ret;
                    })());
                    _this.c = ((function () {
                        var $ret = new List$1(Base.$, 0);
                        $ret.add1(e_1);
                        return $ret;
                    })());
                }
                break;
        }
        return _this;
    }
    Object.defineProperty(NotifyCollectionChangedEventArgs.prototype, "action", {
        get: function () {
            return this.f;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NotifyCollectionChangedEventArgs.prototype, "newItems", {
        get: function () {
            return this.b;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NotifyCollectionChangedEventArgs.prototype, "newStartingIndex", {
        get: function () {
            return this.h;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NotifyCollectionChangedEventArgs.prototype, "oldItems", {
        get: function () {
            return this.c;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NotifyCollectionChangedEventArgs.prototype, "oldStartingIndex", {
        get: function () {
            return this.i;
        },
        enumerable: true,
        configurable: true
    });
    NotifyCollectionChangedEventArgs.$t = markType(NotifyCollectionChangedEventArgs, 'NotifyCollectionChangedEventArgs', EventArgs.$);
    return NotifyCollectionChangedEventArgs;
}(EventArgs));
export { NotifyCollectionChangedEventArgs };
//# sourceMappingURL=NotifyCollectionChangedEventArgs.js.map