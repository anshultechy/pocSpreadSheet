/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "./type";
import { NotImplementedException } from "./NotImplementedException";
import { ArgumentNullException } from "./ArgumentNullException";
import { Decoder } from "./Decoder";
import { ArgumentException } from "./ArgumentException";
import { stringToCharArray } from "./string";
import { intDivide, truncate } from "./number";
import { InvalidOperationException } from "./InvalidOperationException";
/**
 * @hidden
 */
var Encoding = /** @class */ (function (_super) {
    tslib_1.__extends(Encoding, _super);
    function Encoding() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Encoding, "uTF8", {
        get: function () {
            if (Encoding.t == null) {
                Encoding.t = new UTF8Encoding(1);
            }
            return Encoding.t;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Encoding, "uTF8Unmarked", {
        get: function () {
            if (Encoding.s == null) {
                Encoding.s = new UTF8Encoding(1);
            }
            return Encoding.s;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Encoding, "unicode", {
        get: function () {
            if (Encoding.r == null) {
                Encoding.r = new UnicodeEncoding(0);
            }
            return Encoding.r;
        },
        enumerable: true,
        configurable: true
    });
    Encoding.prototype.getString1 = function (a, b, c) {
        return "";
    };
    Encoding.prototype.getBytes = function (a, b, c) {
        var d = new Array(this.getByteCount(a, b, c));
        this.getBytes2(a, b, c, d, 0);
        return d;
    };
    Encoding.prototype.getBytes1 = function (a) {
        if (a == null) {
            throw new ArgumentNullException(0, "input");
        }
        var b = new Array(a.length);
        for (var c = 0; c < a.length; c++) {
            b[c] = a.charAt(c);
        }
        return this.getBytes(b, 0, b.length);
    };
    Encoding.prototype.getString = function (a) {
        return this.getString1(a, 0, a.length);
    };
    Encoding.prototype.getCharCount = function (a) {
        if (a == null) {
            throw new ArgumentNullException(0, "bytes");
        }
        return this.getCharCount1(a, 0, a.length);
    };
    Encoding.prototype.getCharCount1 = function (a, b, c) {
        throw new NotImplementedException(0);
    };
    Encoding.prototype.getChars = function (a, b, c, d, e) {
        throw new NotImplementedException(0);
    };
    Object.defineProperty(Encoding, "aSCII", {
        get: function () {
            if (Encoding.p == null) {
                Encoding.p = new AsciiEncoding(1);
            }
            return Encoding.p;
        },
        enumerable: true,
        configurable: true
    });
    Encoding.prototype.getDecoder = function () {
        return new DefaultDecoder(this);
    };
    Encoding.prototype.getBytes3 = function (a, b, c, d, e) {
        return this.getBytes2(stringToCharArray(a), b, c, d, e);
    };
    Encoding.prototype.getMaxCharCount = function (a) {
        return a;
    };
    Encoding.prototype.getMaxByteCount = function (a) {
        return a + 1;
    };
    Encoding.prototype.getPreamble = function () {
        return new Array(0);
    };
    Object.defineProperty(Encoding, "bigEndianUnicode", {
        get: function () {
            if (Encoding.q == null) {
                Encoding.q = new UnicodeEncoding(1, true, false);
            }
            return Encoding.q;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Encoding, "defaultValue", {
        get: function () {
            return Encoding.aSCII;
        },
        enumerable: true,
        configurable: true
    });
    Encoding.getEncoding = function (a) {
        switch (a.toUpperCase()) {
            case "ASCII": return Encoding.aSCII;
            case "UNICODE": return Encoding.unicode;
            case "UTF-8": return Encoding.uTF8;
            default: throw new ArgumentException(1, "'" + a + "' is not a valid encoding name.");
        }
    };
    Encoding.prototype.get_webName = function () {
        throw new NotImplementedException(0);
    };
    Object.defineProperty(Encoding.prototype, "webName", {
        get: function () {
            return this.get_webName();
        },
        enumerable: true,
        configurable: true
    });
    Encoding.$t = markType(Encoding, 'Encoding');
    Encoding.t = null;
    Encoding.s = null;
    Encoding.r = null;
    Encoding.p = null;
    Encoding.q = null;
    return Encoding;
}(Base));
export { Encoding };
/**
 * @hidden
 */
var UnicodeEncoding = /** @class */ (function (_super) {
    tslib_1.__extends(UnicodeEncoding, _super);
    function UnicodeEncoding(a) {
        var _rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            _rest[_i - 1] = arguments[_i];
        }
        var _this = _super.call(this) || this;
        _this.ab = false;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0: break;
            case 1:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    _this.ab = c;
                }
                break;
        }
        return _this;
    }
    UnicodeEncoding.prototype.getString1 = function (bytes_, a, b) {
        var c = "";
        var d = a + b;
        for (var i_ = a; i_ < d; i_ = i_ + 2) {
            if (i_ + 1 >= d) {
                c = c + '�';
            }
            else {
                var e = void 0;
                var f = void 0;
                if (this.ab) {
                    e = bytes_[i_ + 1].toString(16);
                    f = bytes_[i_].toString(16);
                }
                else {
                    e = bytes_[i_].toString(16);
                    f = bytes_[i_ + 1].toString(16);
                }
                if (e.length == 1) {
                    e = "0" + e;
                }
                if (f.length == 1) {
                    f = "0" + f;
                }
                var g = parseInt(f + e, 16);
                c = c + String.fromCharCode(g);
            }
        }
        return c;
    };
    UnicodeEncoding.prototype.getCharCount1 = function (a, b, c) {
        return intDivide(c, 2);
    };
    UnicodeEncoding.prototype.getBytes = function (a, b, c) {
        return _super.prototype.getBytes.call(this, a, b, c);
    };
    UnicodeEncoding.prototype.getBytes1 = function (a) {
        var b = new Array(a.length * 2);
        this.getBytes3(a, 0, a.length, b, 0);
        return b;
    };
    UnicodeEncoding.prototype.getMaxByteCount = function (a) {
        return (a + 1) * 2;
    };
    UnicodeEncoding.prototype.getMaxCharCount = function (a) {
        return truncate(Math.ceil(a / 2)) + 1;
    };
    UnicodeEncoding.prototype.getBytes3 = function (a, b, c, d, e) {
        for (var f = b; f < b + c; f++) {
            var g = a.charCodeAt(f);
            var h = (g & 255);
            var i = ((g >> 8) & 255);
            if (this.ab) {
                d[e++] = i;
                d[e++] = h;
            }
            else {
                d[e++] = h;
                d[e++] = i;
            }
        }
        return c * 2;
    };
    UnicodeEncoding.prototype.getByteCount = function (a, b, c) {
        throw new NotImplementedException(0);
    };
    UnicodeEncoding.prototype.getBytes2 = function (a, b, c, d, e) {
        throw new NotImplementedException(0);
    };
    UnicodeEncoding.prototype.getChars = function (a, b, c, d, e) {
        throw new NotImplementedException(0);
    };
    UnicodeEncoding.$t = markType(UnicodeEncoding, 'UnicodeEncoding', Encoding.$);
    return UnicodeEncoding;
}(Encoding));
export { UnicodeEncoding };
/**
 * @hidden
 */
var UTF8Encoding = /** @class */ (function (_super) {
    tslib_1.__extends(UTF8Encoding, _super);
    function UTF8Encoding(a) {
        var _rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            _rest[_i - 1] = arguments[_i];
        }
        var _this = _super.call(this) || this;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                }
                break;
            case 1: break;
        }
        return _this;
    }
    UTF8Encoding.prototype.getString1 = function (a, b, c) {
        var d = "";
        var e = b;
        var f = 0;
        var g = 0;
        var h = 0;
        var i = 0;
        while (e < b + c) {
            f = a[e++];
            if (f < 128) {
                d += String.fromCharCode(f);
            }
            else if (f > 191 && f < 224) {
                if (e >= b + c) {
                    throw new InvalidOperationException(1, "UTF-8 decoding error.");
                }
                g = a[e++];
                d += String.fromCharCode((((f & 31) << 6) | (g & 63)));
            }
            else if (f > 223 && f < 240) {
                if (e + 1 >= b + c) {
                    throw new InvalidOperationException(1, "UTF-8 decoding error.");
                }
                g = a[e++];
                h = a[e++];
                d += String.fromCharCode((((f & 15) << 12) | ((g & 63) << 6) | (h & 63)));
            }
            else {
                if (e + 2 >= b + c) {
                    throw new InvalidOperationException(1, "UTF-8 decoding error.");
                }
                g = a[e++];
                h = a[e++];
                i = a[e++];
                var j = ((f & 7) << 18) | ((g & 63) << 12) | ((h & 63) << 6) | (i & 63);
                if (j < 65535) {
                    d += String.fromCharCode(j);
                }
                else {
                    j -= 65536;
                    d += String.fromCharCode(((j >> 10) | 55296));
                    d += String.fromCharCode(((j & 1023) | 56320));
                }
            }
        }
        return d;
    };
    UTF8Encoding.prototype.getCharCount1 = function (a, b, c) {
        return c;
    };
    UTF8Encoding.prototype.getByteCount = function (a, b, c) {
        throw new NotImplementedException(0);
    };
    UTF8Encoding.prototype.getBytes2 = function (chars_, charIndex_, charCount_, a, b) {
        var inputUTF8_ = (unescape(encodeURIComponent(chars_.slice(charIndex_, charIndex_ + charCount_).join(""))));
        for (var i_ = 0; i_ < inputUTF8_.length; i_++) {
            a[b + i_] = (inputUTF8_.charCodeAt(i_));
        }
        return inputUTF8_.length;
    };
    UTF8Encoding.prototype.getBytes = function (a, b, c) {
        return _super.prototype.getBytes.call(this, a, b, c);
    };
    UTF8Encoding.prototype.getBytes1 = function (input_) {
        var a = new Array(input_.length);
        var inputUTF8_ = (unescape(encodeURIComponent(input_)));
        for (var i_ = 0; i_ < inputUTF8_.length; i_++) {
            a[i_] = (inputUTF8_.charCodeAt(i_));
        }
        return a;
    };
    UTF8Encoding.prototype.getChars = function (a, b, c, d, e) {
        var f = e;
        var g = b;
        var h = 0;
        var i = 0;
        var j = 0;
        var k = 0;
        while (g < b + c) {
            h = a[g++];
            if (h < 128) {
                d[e++] = String.fromCharCode(h);
            }
            else if (h > 191 && h < 224) {
                if (g >= b + c) {
                    throw new InvalidOperationException(1, "UTF-8 decoding error.");
                }
                i = a[g++];
                d[e++] = String.fromCharCode((((h & 31) << 6) | (i & 63)));
            }
            else if (h > 223 && h < 240) {
                if (g + 1 >= b + c) {
                    throw new InvalidOperationException(1, "UTF-8 decoding error.");
                }
                i = a[g++];
                j = a[g++];
                d[e++] = String.fromCharCode((((h & 15) << 12) | ((i & 63) << 6) | (j & 63)));
            }
            else {
                if (g + 2 >= b + c) {
                    throw new InvalidOperationException(1, "UTF-8 decoding error.");
                }
                i = a[g++];
                j = a[g++];
                k = a[g++];
                var l = ((h & 7) << 18) | ((i & 63) << 12) | ((j & 63) << 6) | (k & 63);
                if (l < 65535) {
                    d[e++] = String.fromCharCode(l);
                }
                else {
                    l -= 65536;
                    d[e++] = String.fromCharCode(((l >> 10) | 55296));
                    d[e++] = String.fromCharCode(((l & 1023) | 56320));
                }
            }
        }
        return e - f;
    };
    UTF8Encoding.prototype.getDecoder = function () {
        return new UTF8Encoding_UTF8Decoder(this);
    };
    UTF8Encoding.prototype.getMaxByteCount = function (a) {
        return (a + 1) * 3;
    };
    UTF8Encoding.prototype.getMaxCharCount = function (a) {
        return a + 1;
    };
    UTF8Encoding.$t = markType(UTF8Encoding, 'UTF8Encoding', Encoding.$);
    return UTF8Encoding;
}(Encoding));
export { UTF8Encoding };
/**
 * @hidden
 */
var UTF8Encoding_UTF8Decoder = /** @class */ (function (_super) {
    tslib_1.__extends(UTF8Encoding_UTF8Decoder, _super);
    function UTF8Encoding_UTF8Decoder(a) {
        var _this = _super.call(this) || this;
        _this.g = 0;
        _this.h = 0;
        _this.i = 0;
        _this.j = 0;
        _this.k = null;
        _this.k = a;
        return _this;
    }
    UTF8Encoding_UTF8Decoder.prototype.a = function (a, b, c) {
        return this.b(a, b, c, false);
    };
    UTF8Encoding_UTF8Decoder.prototype.b = function (a, b, c, d) {
        var e = 0;
        var f = b;
        while (f < b + c) {
            if (this.g == 0) {
                this.g = a[f++];
            }
            if (this.g < 128) {
                e++;
            }
            else {
                if (f >= b + c) {
                    break;
                }
                if (this.h == 0) {
                    this.h = a[f++];
                }
                if (this.g > 191 && this.g < 224) {
                    e++;
                }
                else {
                    if (f >= b + c) {
                        break;
                    }
                    if (this.i == 0) {
                        this.i = a[f++];
                    }
                    if (this.g > 223 && this.g < 240) {
                        e++;
                    }
                    else {
                        if (f >= b + c) {
                            break;
                        }
                        if (this.j == 0) {
                            this.j = a[f++];
                        }
                        var g = ((this.g & 7) << 18) | ((this.h & 63) << 12) | ((this.i & 63) << 6) | (this.j & 63);
                        if (g < 65535) {
                            e++;
                        }
                        else {
                            e += 2;
                        }
                        this.j = 0;
                    }
                    this.i = 0;
                }
                this.h = 0;
            }
            this.g = 0;
        }
        if (d) {
            this.g = 0;
            this.h = 0;
            this.i = 0;
            this.j = 0;
        }
        return e;
    };
    UTF8Encoding_UTF8Decoder.prototype.c = function (a, b, c, d, e) {
        return this.d(a, b, c, d, e, false);
    };
    UTF8Encoding_UTF8Decoder.prototype.d = function (a, b, c, d, e, f) {
        var g = e;
        var h = b;
        while (h < b + c) {
            if (this.g == 0) {
                this.g = a[h++];
            }
            if (this.g < 128) {
                d[e++] = String.fromCharCode(this.g);
            }
            else {
                if (h >= b + c) {
                    break;
                }
                if (this.h == 0) {
                    this.h = a[h++];
                }
                if (this.g > 191 && this.g < 224) {
                    d[e++] = String.fromCharCode((((this.g & 31) << 6) | (this.h & 63)));
                }
                else {
                    if (h >= b + c) {
                        break;
                    }
                    if (this.i == 0) {
                        this.i = a[h++];
                    }
                    if (this.g > 223 && this.g < 240) {
                        d[e++] = String.fromCharCode((((this.g & 15) << 12) | ((this.h & 63) << 6) | (this.i & 63)));
                    }
                    else {
                        if (h >= b + c) {
                            break;
                        }
                        if (this.j == 0) {
                            this.j = a[h++];
                        }
                        var i = ((this.g & 7) << 18) | ((this.h & 63) << 12) | ((this.i & 63) << 6) | (this.j & 63);
                        if (i < 65535) {
                            d[e++] = String.fromCharCode(i);
                        }
                        else {
                            i -= 65536;
                            d[e++] = String.fromCharCode(((i >> 10) | 55296));
                            d[e++] = String.fromCharCode(((i & 1023) | 56320));
                        }
                        this.j = 0;
                    }
                    this.i = 0;
                }
                this.h = 0;
            }
            this.g = 0;
        }
        if (f) {
            this.g = 0;
            this.h = 0;
            this.i = 0;
            this.j = 0;
        }
        return e - g;
    };
    UTF8Encoding_UTF8Decoder.$t = markType(UTF8Encoding_UTF8Decoder, 'UTF8Encoding_UTF8Decoder', Decoder.$);
    return UTF8Encoding_UTF8Decoder;
}(Decoder));
export { UTF8Encoding_UTF8Decoder };
/**
 * @hidden
 */
var AsciiEncoding = /** @class */ (function (_super) {
    tslib_1.__extends(AsciiEncoding, _super);
    function AsciiEncoding(a) {
        var _rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            _rest[_i - 1] = arguments[_i];
        }
        var _this = _super.call(this) || this;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                }
                break;
            case 1: break;
        }
        return _this;
    }
    AsciiEncoding.prototype.getString1 = function (bytes_, a, b) {
        var ret_ = "";
        for (var i_ = a; i_ < a + b; i_++) {
            if (bytes_[i_] == 0) {
                break;
            }
            ret_ = ret_ + String.fromCharCode(bytes_[i_]);
        }
        return ret_;
    };
    AsciiEncoding.prototype.getCharCount1 = function (a, b, c) {
        return c;
    };
    AsciiEncoding.prototype.getByteCount = function (a, b, c) {
        return c;
    };
    AsciiEncoding.prototype.getBytes2 = function (a, b, c, d, e) {
        throw new NotImplementedException(0);
    };
    AsciiEncoding.prototype.getBytes = function (a, b, c) {
        return _super.prototype.getBytes.call(this, a, b, c);
    };
    AsciiEncoding.prototype.getBytes1 = function (input_) {
        var a = new Array(input_.length);
        for (var i_ = 0; i_ < input_.length; i_++) {
            a[i_] = (input_.charCodeAt(i_));
        }
        return a;
    };
    AsciiEncoding.prototype.getChars = function (bytes_, byteIndex_, a, b, c) {
        var d = c;
        for (var i_ = 0; i_ < a; i_++) {
            if (bytes_[i_] == 0) {
                break;
            }
            b[c++] = (String.fromCharCode(bytes_[byteIndex_++]));
        }
        return c - d;
    };
    AsciiEncoding.$t = markType(AsciiEncoding, 'AsciiEncoding', Encoding.$);
    return AsciiEncoding;
}(Encoding));
export { AsciiEncoding };
/**
 * @hidden
 */
var DefaultDecoder = /** @class */ (function (_super) {
    tslib_1.__extends(DefaultDecoder, _super);
    function DefaultDecoder(a) {
        var _this = _super.call(this) || this;
        _this.g = null;
        _this.g = a;
        return _this;
    }
    DefaultDecoder.prototype.a = function (a, b, c) {
        return this.b(a, b, c, false);
    };
    DefaultDecoder.prototype.b = function (a, b, c, d) {
        return this.g.getCharCount1(a, b, c);
    };
    DefaultDecoder.prototype.c = function (a, b, c, d, e) {
        return this.d(a, b, c, d, e, false);
    };
    DefaultDecoder.prototype.d = function (a, b, c, d, e, f) {
        return this.g.getChars(a, b, c, d, e);
    };
    DefaultDecoder.$t = markType(DefaultDecoder, 'DefaultDecoder', Decoder.$);
    return DefaultDecoder;
}(Decoder));
export { DefaultDecoder };
//# sourceMappingURL=Encoding_combined.js.map