/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, IList$1_$type, Point_$type, markType } from "./type";
/**
 * @hidden
 */
var EdgeClipper = /** @class */ (function (_super) {
    tslib_1.__extends(EdgeClipper, _super);
    function EdgeClipper() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.h = null;
        _this._nextClipper = null;
        _this.c = true;
        _this.j = null;
        _this.l = null;
        _this.g = false;
        _this.d = false;
        _this.f = false;
        return _this;
    }
    Object.defineProperty(EdgeClipper.prototype, "i", {
        get: function () {
            return this.h;
        },
        set: function (a) {
            if (this.h != a) {
                this.c = true;
                this.h = a;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EdgeClipper.prototype, "nextClipper", {
        get: function () {
            return this._nextClipper;
        },
        set: function (a) {
            this._nextClipper = a;
        },
        enumerable: true,
        configurable: true
    });
    EdgeClipper.prototype.add = function (a) {
        var b = this.e(a);
        if (this.c) {
            this.c = false;
            this.j = a;
        }
        else {
            if (true) {
                if (b) {
                    if (!this.g) {
                        this.h.add(this.k(this.l, a));
                    }
                    else {
                        if (!this.d && !this.f) {
                            this.h.add(this.l);
                            this.f = true;
                        }
                    }
                    this.h.add(a);
                }
                else {
                    if (this.g) {
                        if (!this.d && !this.f) {
                            this.h.add(this.l);
                            this.f = true;
                        }
                        this.h.add(this.k(this.l, a));
                    }
                }
            }
        }
        this.l = a;
        this.g = b;
    };
    EdgeClipper.prototype.clear = function () {
        if (this.d && !this.c) {
            this.add(this.j);
        }
        if (this._nextClipper != null) {
            this._nextClipper.clear();
        }
        this.c = true;
        this.f = false;
    };
    EdgeClipper.prototype.getEnumeratorObject = function () {
        return null;
    };
    EdgeClipper.prototype.getEnumerator = function () {
        return null;
    };
    Object.defineProperty(EdgeClipper.prototype, "isReadOnly", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EdgeClipper.prototype, "count", {
        get: function () {
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    EdgeClipper.prototype.remove = function (a) {
        return false;
    };
    EdgeClipper.prototype.removeAt = function (a) {
    };
    EdgeClipper.prototype.copyTo = function (a, b) {
    };
    EdgeClipper.prototype.contains = function (a) {
        return false;
    };
    EdgeClipper.prototype.item = function (a, b) {
        if (arguments.length === 2) {
            return b;
        }
        else {
            return { $type: Point_$type, x: 0, y: 0 };
        }
    };
    EdgeClipper.prototype.insert = function (a, b) {
    };
    EdgeClipper.prototype.indexOf = function (a) {
        return -1;
    };
    EdgeClipper.$t = markType(EdgeClipper, 'EdgeClipper', Base.$, [IList$1_$type.specialize(Point_$type)]);
    return EdgeClipper;
}(Base));
export { EdgeClipper };
//# sourceMappingURL=EdgeClipper.js.map