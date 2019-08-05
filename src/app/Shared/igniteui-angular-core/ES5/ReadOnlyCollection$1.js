/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, IList$1_$type, IList_$type, typeCastObjTo$t, markType, getEnumerator } from "./type";
/**
 * @hidden
 */
var ReadOnlyCollection$1 = /** @class */ (function (_super) {
    tslib_1.__extends(ReadOnlyCollection$1, _super);
    function ReadOnlyCollection$1($t, a) {
        var _rest = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            _rest[_i - 2] = arguments[_i];
        }
        var _this = _super.call(this) || this;
        _this.$t = null;
        _this.a = null;
        _this.c = {};
        _this.$t = $t;
        _this.$type = _this.$type.specialize(_this.$t);
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0: break;
            case 1:
                {
                    var c = _rest[0];
                    _this.a = c;
                }
                break;
        }
        return _this;
    }
    ReadOnlyCollection$1.prototype.item = function (a, b) {
        if (arguments.length === 2) {
            this.a.item(a, b);
            return b;
        }
        else {
            return this.a.item(a);
        }
    };
    ReadOnlyCollection$1.prototype.indexOf = function (a) {
        return this.a.indexOf(a);
    };
    ReadOnlyCollection$1.prototype.insert = function (a, b) {
    };
    ReadOnlyCollection$1.prototype.removeAt = function (a) {
    };
    Object.defineProperty(ReadOnlyCollection$1.prototype, "count", {
        get: function () {
            return this.a.count;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReadOnlyCollection$1.prototype, "isReadOnly", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    ReadOnlyCollection$1.prototype.add = function (a) {
    };
    ReadOnlyCollection$1.prototype.clear = function () {
    };
    ReadOnlyCollection$1.prototype.contains = function (a) {
        return this.a.contains(a);
    };
    ReadOnlyCollection$1.prototype.copyTo = function (a, b) {
        this.a.copyTo(a, b);
    };
    ReadOnlyCollection$1.prototype.remove = function (a) {
        return false;
    };
    ReadOnlyCollection$1.prototype.getEnumerator = function () {
        return getEnumerator(this.a);
    };
    ReadOnlyCollection$1.prototype.getEnumeratorObject = function () {
        return getEnumerator(this.a);
    };
    Object.defineProperty(ReadOnlyCollection$1.prototype, "isFixedSize", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    ReadOnlyCollection$1.prototype.add1 = function (a) {
        return -1;
    };
    ReadOnlyCollection$1.prototype.contains1 = function (a) {
        return this.a.contains(typeCastObjTo$t(this.$t, a));
    };
    ReadOnlyCollection$1.prototype.indexOf1 = function (a) {
        return this.a.indexOf(typeCastObjTo$t(this.$t, a));
    };
    ReadOnlyCollection$1.prototype.insert1 = function (a, b) {
    };
    ReadOnlyCollection$1.prototype.remove1 = function (a) {
    };
    ReadOnlyCollection$1.prototype.copyTo1 = function (a, b) {
        this.a.copyTo(a, b);
    };
    Object.defineProperty(ReadOnlyCollection$1.prototype, "b", {
        get: function () {
            return this.a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReadOnlyCollection$1.prototype, "isSynchronized", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReadOnlyCollection$1.prototype, "syncRoot", {
        get: function () {
            return this.c;
        },
        enumerable: true,
        configurable: true
    });
    ReadOnlyCollection$1.$t = markType(ReadOnlyCollection$1, 'ReadOnlyCollection$1', Base.$, [IList$1_$type.specialize(0), IList_$type]);
    return ReadOnlyCollection$1;
}(Base));
export { ReadOnlyCollection$1 };
//# sourceMappingURL=ReadOnlyCollection$1.js.map