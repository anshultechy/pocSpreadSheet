/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Stream, typeGetValue, markType } from "./type";
/**
 * @hidden
 */
var MemoryStream = /** @class */ (function (_super) {
    tslib_1.__extends(MemoryStream, _super);
    function MemoryStream(a) {
        var _rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            _rest[_i - 1] = arguments[_i];
        }
        var _this = _super.call(this) || this;
        _this.o = null;
        _this.t = 0;
        _this.s = 0;
        _this.r = false;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    var c = [0];
                    {
                        var e = c[0];
                        _this.o = new Array(e);
                        for (var f = 0; f < e; f++) {
                            _this.o[f] = 0;
                        }
                    }
                }
                break;
            case 1:
                {
                    var c = _rest[0];
                    _this.o = new Array(c);
                    for (var d = 0; d < c; d++) {
                        _this.o[d] = 0;
                    }
                }
                break;
            case 2:
                {
                    var c = _rest[0];
                    _this.o = c;
                    _this.s = c.length;
                    _this.r = _this.s != 0 && typeof _this.o[0] === 'string';
                }
                break;
        }
        return _this;
    }
    MemoryStream.prototype.get_canRead = function () {
        return true;
    };
    Object.defineProperty(MemoryStream.prototype, "canRead", {
        get: function () {
            return this.get_canRead();
        },
        enumerable: true,
        configurable: true
    });
    MemoryStream.prototype.get_canSeek = function () {
        return true;
    };
    Object.defineProperty(MemoryStream.prototype, "canSeek", {
        get: function () {
            return this.get_canSeek();
        },
        enumerable: true,
        configurable: true
    });
    MemoryStream.prototype.get_canWrite = function () {
        return true;
    };
    Object.defineProperty(MemoryStream.prototype, "canWrite", {
        get: function () {
            return this.get_canWrite();
        },
        enumerable: true,
        configurable: true
    });
    MemoryStream.prototype.get_capacity = function () {
        return this.o.length;
    };
    MemoryStream.prototype.set_capacity = function (a) {
        if (this.o.length == a) {
            return;
        }
        for (var b = this.s; b < a; b++) {
            this.o[b] = 0;
        }
    };
    Object.defineProperty(MemoryStream.prototype, "capacity", {
        get: function () {
            return this.get_capacity();
        },
        set: function (a) {
            this.set_capacity(a);
        },
        enumerable: true,
        configurable: true
    });
    MemoryStream.prototype.get_length = function () {
        return this.s;
    };
    Object.defineProperty(MemoryStream.prototype, "length", {
        get: function () {
            return this.get_length();
        },
        enumerable: true,
        configurable: true
    });
    MemoryStream.prototype.get_position = function () {
        return this.t;
    };
    MemoryStream.prototype.set_position = function (a) {
        if (this.t == a) {
            return;
        }
        this.t = a;
        if (this.capacity <= this.t) {
            this.capacity = this.t + 1;
        }
    };
    Object.defineProperty(MemoryStream.prototype, "position", {
        get: function () {
            return this.get_position();
        },
        set: function (a) {
            this.set_position(a);
        },
        enumerable: true,
        configurable: true
    });
    MemoryStream.prototype.disposeCore = function (a) {
    };
    MemoryStream.prototype.flush = function () {
    };
    MemoryStream.prototype.getBuffer = function () {
        return this.o;
    };
    MemoryStream.prototype.read = function (a, b, c) {
        var d = Math.min(this.s - this.t, c);
        if (this.r) {
            for (var e = 0; e < d; e++) {
                a[b++] = (this.o[this.t++].charCodeAt(0) & 0xFF);
            }
        }
        else {
            for (var f = 0; f < d; f++) {
                a[b++] = this.o[this.t++];
            }
        }
        return d;
    };
    MemoryStream.prototype.readByte = function () {
        if (this.s <= this.t) {
            return -1;
        }
        if (this.r) {
            return (this.o[this.t++].charCodeAt(0) & 0xFF);
        }
        return this.o[this.t++];
    };
    MemoryStream.prototype.seek = function (a, b) {
        switch (b) {
            case 0:
                this.t = a;
                break;
            case 1:
                this.t += a;
                break;
            case 2:
                this.t = this.s + a;
                break;
        }
        return this.t;
    };
    MemoryStream.prototype.setLength = function (a) {
        if (this.capacity < a) {
            this.capacity = Math.max(a, this.capacity * 2);
        }
        this.s = a;
        if (this.s < this.t) {
            this.t = this.s;
        }
    };
    MemoryStream.prototype.toArray = function () {
        if (this.r) {
            var a = new Array(this.s);
            var b = this.position;
            this.position = 0;
            this.read(a, 0, a.length);
            this.position = b;
            return a;
        }
        return (this.o.slice(0, this.s));
    };
    MemoryStream.prototype.write = function (a, b, c) {
        var d = this.t + c;
        if (this.length < d) {
            this.setLength(d);
        }
        var e = c != 0 && typeof a[b] === 'string';
        if (e == this.r) {
            for (var f = 0; f < c; f++) {
                this.o[this.t++] = a[b++];
            }
        }
        else if (e) {
            for (var g = 0; g < c; g++) {
                this.o[this.t++] = (a.charCodeAt(b++) & 0xFF);
            }
        }
        else {
            for (var h = 0; h < c; h++) {
                this.o[this.t++] = typeGetValue((String.fromCharCode(a[b++])));
            }
        }
    };
    MemoryStream.prototype.writeByte = function (a) {
        var b = typeof a === 'string';
        if (b == this.r) {
            this.o[this.t++] = a;
        }
        else if (b) {
            this.o[this.t++] = (a.charCodeAt(0) & 0xFF);
        }
        else {
            this.o[this.t++] = typeGetValue((String.fromCharCode(a)));
        }
        if (this.s < this.t) {
            this.s = this.t;
        }
    };
    MemoryStream.prototype.writeTo = function (a) {
        a.write(this.o, 0, this.s);
    };
    MemoryStream.$t = markType(MemoryStream, 'MemoryStream', Stream.$);
    return MemoryStream;
}(Stream));
export { MemoryStream };
//# sourceMappingURL=MemoryStream.js.map