/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "./type";
import { NotImplementedException } from "./NotImplementedException";
import { Environment } from "./Environment";
import { stringFormat, stringFormat1, stringFormat2 } from "./stringExtended";
/**
 * @hidden
 */
var StringBuilder = /** @class */ (function (_super) {
    tslib_1.__extends(StringBuilder, _super);
    function StringBuilder(a) {
        var _rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            _rest[_i - 1] = arguments[_i];
        }
        var _this = _super.call(this) || this;
        _this._internal = null;
        _this.b = 0;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    _this.internal = "";
                }
                break;
            case 1:
                {
                    var c = _rest[0];
                    {
                        _this.internal = "";
                    }
                }
                break;
            case 2:
                {
                    var c = _rest[0];
                    _this.internal = c;
                }
                break;
        }
        return _this;
    }
    Object.defineProperty(StringBuilder.prototype, "internal", {
        get: function () {
            return this._internal;
        },
        set: function (a) {
            this._internal = a;
        },
        enumerable: true,
        configurable: true
    });
    StringBuilder.prototype.k = function (a) {
        if (a != null) {
            this.l(a.toString());
        }
        return this;
    };
    StringBuilder.prototype.l = function (str_) {
        if (str_ != null) {
            this.internal = this.internal.concat(str_);
        }
        ;
        return this;
    };
    StringBuilder.prototype.n = function (a) {
        var str_ = a.toString();
        this.internal = this.internal.concat(str_);
        return this;
    };
    StringBuilder.prototype.h = function (chr_) {
        this.internal = this.internal.concat(chr_);
        return this;
    };
    StringBuilder.prototype.i = function (chr_, count_) {
        if (chr_.repeat) {
            this.internal = this.internal.concat(chr_.repeat(count_));
        }
        else {
            for (var a = 0; a < count_; a++) {
                this.internal = this.internal.concat(chr_);
            }
        }
        return this;
    };
    StringBuilder.prototype.j = function (value_) {
        this.internal = this.internal.concat(value_.toString());
        return this;
    };
    StringBuilder.prototype.m = function (value_, startIndex_, count_) {
        this.internal = this.internal.concat(value_.substr(startIndex_, count_));
        return this;
    };
    StringBuilder.prototype.g = function (value_, startIndex_, charCount_) {
        this.internal = this.internal.concat(value_.slice(startIndex_, startIndex_ + charCount_).join(''));
        return this;
    };
    StringBuilder.prototype.t = function () {
        return this.u("");
    };
    StringBuilder.prototype.u = function (str_) {
        if (str_ != null) {
            this.internal = this.internal.concat(str_);
        }
        this.internal = this.internal.concat(Environment.newLine);
        return this;
    };
    StringBuilder.prototype.v = function () {
        this.internal = "";
        return this;
    };
    StringBuilder.prototype.w = function (index_, chr_) {
        if (index_ == this.c) {
            this.h(chr_);
        }
        else {
            this.internal = this.internal.substring(0, index_).concat(chr_).concat(this.internal.substring(index_, this.internal.length));
        }
        return this;
    };
    StringBuilder.prototype.x = function (index_, str_) {
        if (index_ == this.c) {
            this.l(str_);
        }
        else {
            this.internal = this.internal.substring(0, index_).concat(str_).concat(this.internal.substring(index_, this.internal.length));
        }
        return this;
    };
    StringBuilder.prototype.y = function (startIndex_, length_) {
        this.internal = this.internal.substring(0, startIndex_).concat(this.internal.substring(startIndex_ + length_, this.internal.length));
        return this;
    };
    StringBuilder.prototype.z = function (oldCh_, newCh_) {
        this.internal = this.internal.replace(oldCh_, newCh_);
        return this;
    };
    StringBuilder.prototype.toString = function () {
        return this.internal;
    };
    StringBuilder.prototype.f = function (a, b) {
        return this.internal.substr(a, b);
    };
    Object.defineProperty(StringBuilder.prototype, "c", {
        get: function () {
            return this.internal.length;
        },
        set: function (a) {
            if (a <= this.c) {
                this.internal = this.internal.substring(0, a);
            }
            else {
                throw new NotImplementedException(0);
            }
        },
        enumerable: true,
        configurable: true
    });
    StringBuilder.prototype.item = function (index_, a) {
        if (arguments.length === 2) {
            this.internal = this.internal.substring(0, index_).concat(a).concat(this.internal.substring(index_ + 1, this.internal.length));
            return a;
        }
        else {
            return this.internal.charAt(index_);
        }
    };
    StringBuilder.prototype.q = function (a, b) {
        return this.l(stringFormat(a, b));
    };
    StringBuilder.prototype.p = function (a) {
        var b = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            b[_i - 1] = arguments[_i];
        }
        return this.l(stringFormat1.apply(void 0, tslib_1.__spread([a], b)));
    };
    StringBuilder.prototype.o = function (a, b) {
        var c = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            c[_i - 2] = arguments[_i];
        }
        return this.l(stringFormat2.apply(void 0, tslib_1.__spread([a, b], c)));
    };
    StringBuilder.prototype.r = function (a, b, c) {
        return this.l(stringFormat(a, b, c));
    };
    StringBuilder.prototype.s = function (a, b, c, d) {
        return this.l(stringFormat(a, b, c, d));
    };
    StringBuilder.$t = markType(StringBuilder, 'StringBuilder');
    return StringBuilder;
}(Base));
export { StringBuilder };
//# sourceMappingURL=StringBuilder.js.map