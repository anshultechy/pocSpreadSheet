/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, IDisposable_$type, markType } from "./type";
/**
 * @hidden
 */
var BinaryReader = /** @class */ (function (_super) {
    tslib_1.__extends(BinaryReader, _super);
    function BinaryReader(a) {
        var _rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            _rest[_i - 1] = arguments[_i];
        }
        var _this = _super.call(this) || this;
        _this._data = null;
        _this.d = false;
        _this.n = 0;
        _this.e = false;
        _this.f = false;
        _this._stream = null;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    _this._data = c;
                    _this.d = d;
                    var data_ = _this._data;
                    if ((typeof Uint8Array != 'undefined' && data_ instanceof Uint8Array)) {
                        _this.e = true;
                    }
                }
                break;
            case 1:
                {
                    var c = _rest[0];
                    _this._stream = c;
                    _this.f = true;
                }
                break;
        }
        return _this;
    }
    Object.defineProperty(BinaryReader.prototype, "canRead", {
        get: function () {
            return this.n < this._data.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BinaryReader.prototype, "currentPosition", {
        get: function () {
            return this.n;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BinaryReader.prototype, "length", {
        get: function () {
            if (this.f) {
                return this._stream.length;
            }
            return this._data.length;
        },
        enumerable: true,
        configurable: true
    });
    BinaryReader.prototype.i = function (offset_) {
        if (this.f) {
            this._stream.position = offset_;
            return this._stream.readByte();
        }
        else if (this.e) {
            return (+this._data[offset_] & 0xFF);
        }
        else {
            return (this._data.charCodeAt(offset_) & 0xFF);
        }
    };
    BinaryReader.prototype.a = function (offset_, a) {
        var b = new Array(a);
        if (this.f) {
            this._stream.position = offset_;
            this._stream.read(b, 0, a);
        }
        else if (this.e) {
            for (var i_ = 0; i_ < a; i_++) {
                b[i_] = (+this._data[offset_ + i_] & 0xFF);
            }
        }
        else {
            for (var i_ = 0; i_ < a; i_++) {
                b[i_] = (this._data.charCodeAt(offset_ + i_) & 0xFF);
            }
        }
        return b;
    };
    BinaryReader.prototype.b = function (offset_, length_) {
        var a = new Array(length_);
        if (this.f) {
            this._stream.position = offset_;
            this._stream.read(a, 0, length_);
            a.reverse();
        }
        else if (this.e) {
            for (var i_ = 0; i_ < length_; i_++) {
                a[i_] = (+this._data[offset_ + (length_ - 1 - i_)] & 0xFF);
            }
        }
        else {
            for (var i_ = 0; i_ < length_; i_++) {
                a[i_] = (this._data.charCodeAt(offset_ + (length_ - 1 - i_)) & 0xFF);
            }
        }
        return a;
    };
    BinaryReader.prototype.readByte = function () {
        if (this.f) {
            this.n = this._stream.position;
        }
        var a = this.i(this.n);
        this.n = this.n + 1;
        return a;
    };
    BinaryReader.prototype.readBytes = function (a) {
        if (this.f) {
            this.n = this._stream.position;
        }
        var b = this.a(this.n, a);
        this.n = this.n + a;
        return b;
    };
    BinaryReader.prototype.readUInt32 = function () {
        if (this.f) {
            this.n = this._stream.position;
        }
        var a = 0;
        if (this.d) {
            a = a + (this.i(this.n) << 24);
            this.n = this.n + 1;
            a = a + (this.i(this.n) << 16);
            this.n = this.n + 1;
            a = a + (this.i(this.n) << 8);
            this.n = this.n + 1;
            a = a + this.i(this.n);
            this.n = this.n + 1;
        }
        else {
            a = a + this.i(this.n);
            this.n = this.n + 1;
            a = a + (this.i(this.n) << 8);
            this.n = this.n + 1;
            a = a + (this.i(this.n) << 16);
            this.n = this.n + 1;
            a = a + (this.i(this.n) << 24);
            this.n = this.n + 1;
        }
        if (a < 0) {
            a = a + 0xFFFFFFFF + 1;
        }
        return a;
    };
    BinaryReader.prototype.readUInt16 = function () {
        if (this.f) {
            this.n = this._stream.position;
        }
        var a = 0;
        if (this.d) {
            a = a + (this.i(this.n) << 8);
            this.n = this.n + 1;
            a = a + this.i(this.n);
            this.n = this.n + 1;
        }
        else {
            a = a + this.i(this.n);
            this.n = this.n + 1;
            a = a + (this.i(this.n) << 8);
            this.n = this.n + 1;
        }
        return a;
    };
    BinaryReader.prototype.readInt32 = function () {
        if (this.f) {
            this.n = this._stream.position;
        }
        var a = 0;
        if (this.d) {
            a = a + (this.i(this.n) << 24);
            this.n = this.n + 1;
            a = a + (this.i(this.n) << 16);
            this.n = this.n + 1;
            a = a + (this.i(this.n) << 8);
            this.n = this.n + 1;
            a = a + this.i(this.n);
            this.n = this.n + 1;
        }
        else {
            a = a + this.i(this.n);
            this.n = this.n + 1;
            a = a + (this.i(this.n) << 8);
            this.n = this.n + 1;
            a = a + (this.i(this.n) << 16);
            this.n = this.n + 1;
            a = a + (this.i(this.n) << 24);
            this.n = this.n + 1;
        }
        if (a > 2147483647) {
            a = a - 0xFFFFFFFF - 1;
        }
        return a;
    };
    BinaryReader.prototype.readDouble = function () {
        if (this.f) {
            this.n = this._stream.position;
        }
        var a = this.b(this.n, 8);
        this.n = this.n + 8;
        var b = a[0] >>> 7;
        var c = 0;
        c = c + (a[1] >>> 4);
        c = c + ((a[0] & 127) << 4);
        var d = 1;
        var e = a[1];
        var f = 1 / 2;
        var g = 0;
        var h = false;
        for (g = 5; g <= 8; g++) {
            if ((e & (1 << (8 - g))) > 0) {
                d = d + f;
                h = true;
            }
            f = f / 2;
        }
        for (var i = 2; i < 8; i++) {
            e = a[i];
            for (g = 1; g <= 8; g++) {
                if ((e & (1 << (8 - g))) > 0) {
                    d = d + f;
                    h = true;
                }
                f = f / 2;
            }
        }
        if (c == 0 && !h) {
            return 0;
        }
        if (c == 0 && h) {
            c = 1;
            d = d - 1;
        }
        if (c == 1860 && !h) {
            if (b == 1) {
                return Number.NEGATIVE_INFINITY;
            }
            else {
                return Number.POSITIVE_INFINITY;
            }
        }
        if (c == 1860 && h) {
            return NaN;
        }
        var j = c - 1023;
        return Math.pow(-1, b) * Math.pow(2, j) * d;
    };
    BinaryReader.prototype.readSingle = function () {
        if (this.f) {
            this.n = this._stream.position;
        }
        var a = this.b(this.n, 4);
        this.n = this.n + 4;
        var b = a[0] >>> 7;
        var c = 0;
        c = c + (a[1] >>> 7);
        c = c + ((a[0] & 127) << 1);
        var d = 1;
        var e = a[1];
        var f = 1 / 2;
        var g = 0;
        var h = false;
        for (g = 2; g <= 8; g++) {
            if ((e & (1 << (8 - g))) > 0) {
                d = d + f;
                h = true;
            }
            f = f / 2;
        }
        for (var i = 2; i < 4; i++) {
            e = a[i];
            for (g = 1; g <= 8; g++) {
                if ((e & (1 << (8 - g))) > 0) {
                    d = d + f;
                    h = true;
                }
                f = f / 2;
            }
        }
        if (c == 0 && !h) {
            return 0;
        }
        if (c == 0 && h) {
            c = 1;
            d = d - 1;
        }
        if (c == 255 && !h) {
            if (b == 1) {
                return Number.NEGATIVE_INFINITY;
            }
            else {
                return Number.POSITIVE_INFINITY;
            }
        }
        if (c == 255 && h) {
            return NaN;
        }
        var j = c - 127;
        return Math.pow(-1, b) * Math.pow(2, j) * d;
    };
    BinaryReader.prototype.get_baseStream = function () {
        return this._stream;
    };
    Object.defineProperty(BinaryReader.prototype, "baseStream", {
        get: function () {
            return this.get_baseStream();
        },
        enumerable: true,
        configurable: true
    });
    BinaryReader.prototype.readBoolean = function () {
        if (this.f) {
            this.n = this._stream.position;
        }
        var a = this.i(this.n);
        this.n = this.n + 1;
        return a != 0;
    };
    BinaryReader.prototype.readInt16 = function () {
        if (this.f) {
            this.n = this._stream.position;
        }
        var a = 0;
        if (this.d) {
            a = a + (this.i(this.n) << 8);
            this.n = this.n + 1;
            a = a + this.i(this.n);
            this.n = this.n + 1;
        }
        else {
            a = a + this.i(this.n);
            this.n = this.n + 1;
            a = a + (this.i(this.n) << 8);
            this.n = this.n + 1;
        }
        if (a > 32767) {
            a -= (65535 + 1);
        }
        return a;
    };
    BinaryReader.prototype.readSByte = function () {
        if (this.f) {
            this.n = this._stream.position;
        }
        var a = this.i(this.n);
        this.n = this.n + 1;
        if (a > 127) {
            return (a - 255 + 1);
        }
        return a;
    };
    BinaryReader.prototype.close = function () {
        this.dispose();
    };
    BinaryReader.prototype.dispose = function () {
        if (this.f) {
            this._stream.dispose();
        }
    };
    BinaryReader.$t = markType(BinaryReader, 'BinaryReader', Base.$, [IDisposable_$type]);
    return BinaryReader;
}(Base));
export { BinaryReader };
//# sourceMappingURL=BinaryReader.js.map