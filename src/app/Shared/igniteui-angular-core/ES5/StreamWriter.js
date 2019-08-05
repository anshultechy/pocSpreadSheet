//
// System.IO.StreamWriter.cs
//
// Authors:
//   Dietmar Maurer (dietmar@ximian.com)
//   Paolo Molaro (lupus@ximian.com)
//
// (C) Ximian, Inc.  http://www.ximian.com
//
import * as tslib_1 from "tslib";
//
// Copyright (C) 2004 Novell, Inc (http://www.novell.com)
//
// Permission is hereby granted, free of charge, to any person obtaining
// a copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to
// permit persons to whom the Software is furnished to do so, subject to
// the following conditions:
// 
// The above copyright notice and this permission notice shall be
// included in all copies or substantial portions of the Software.
// 
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
// LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
// OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
//
import { TextWriter } from "./TextWriter";
import { markType } from "./type";
import { Encoding } from "./Encoding";
import { ArgumentNullException } from "./ArgumentNullException";
import { ArgumentOutOfRangeException } from "./ArgumentOutOfRangeException";
import { ArgumentException } from "./ArgumentException";
import { ObjectDisposedException } from "./ObjectDisposedException";
import { NullStream } from "./NullStream";
import { arrayCopy1 } from "./arrayExtended";
/**
 * @hidden
 */
var StreamWriter = /** @class */ (function (_super) {
    tslib_1.__extends(StreamWriter, _super);
    function StreamWriter(a) {
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
                    var d = [c, Encoding.uTF8Unmarked, 1024];
                    {
                        var f = d[0];
                        var g = d[1];
                        var h = d[2];
                        _this = _super.call(this, 0) || this;
                        _this.a8 = null;
                        _this.a6 = null;
                        _this.ay = false;
                        _this.au = null;
                        _this.a0 = 0;
                        _this.av = null;
                        _this.a1 = 0;
                        _this.ax = false;
                        _this.az = false;
                        if (null == f) {
                            throw new ArgumentNullException(0, "stream");
                        }
                        if (null == g) {
                            throw new ArgumentNullException(0, "encoding");
                        }
                        if (h <= 0) {
                            throw new ArgumentOutOfRangeException(1, "bufferSize");
                        }
                        if (!f.canWrite) {
                            throw new ArgumentException(1, "Can not write to stream");
                        }
                        _this.a6 = f;
                        _this.bb(g, h);
                    }
                }
                break;
            case 1:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    var e = [c, d, 1024];
                    {
                        var g = e[0];
                        var h = e[1];
                        var i = e[2];
                        _this = _super.call(this, 0) || this;
                        _this.a8 = null;
                        _this.a6 = null;
                        _this.ay = false;
                        _this.au = null;
                        _this.a0 = 0;
                        _this.av = null;
                        _this.a1 = 0;
                        _this.ax = false;
                        _this.az = false;
                        if (null == g) {
                            throw new ArgumentNullException(0, "stream");
                        }
                        if (null == h) {
                            throw new ArgumentNullException(0, "encoding");
                        }
                        if (i <= 0) {
                            throw new ArgumentOutOfRangeException(1, "bufferSize");
                        }
                        if (!g.canWrite) {
                            throw new ArgumentException(1, "Can not write to stream");
                        }
                        _this.a6 = g;
                        _this.bb(h, i);
                    }
                }
                break;
            case 2:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    var e = _rest[2];
                    _this = _super.call(this, 0) || this;
                    _this.a8 = null;
                    _this.a6 = null;
                    _this.ay = false;
                    _this.au = null;
                    _this.a0 = 0;
                    _this.av = null;
                    _this.a1 = 0;
                    _this.ax = false;
                    _this.az = false;
                    if (null == c) {
                        throw new ArgumentNullException(0, "stream");
                    }
                    if (null == d) {
                        throw new ArgumentNullException(0, "encoding");
                    }
                    if (e <= 0) {
                        throw new ArgumentOutOfRangeException(1, "bufferSize");
                    }
                    if (!c.canWrite) {
                        throw new ArgumentException(1, "Can not write to stream");
                    }
                    _this.a6 = c;
                    _this.bb(d, e);
                }
                break;
        }
        return _this;
    }
    StreamWriter.prototype.bb = function (a, b) {
        this.a8 = a;
        this.a1 = this.a0 = 0;
        var c = Math.max(b, 256);
        this.av = new Array(c);
        this.au = new Array(a.getMaxByteCount(c));
        if (this.a6.canSeek && this.a6.position > 0) {
            this.az = true;
        }
    };
    StreamWriter.prototype.get_aw = function () {
        return this.ay;
    };
    StreamWriter.prototype.set_aw = function (a) {
        this.ay = a;
        if (this.ay) {
            this.k();
        }
    };
    Object.defineProperty(StreamWriter.prototype, "aw", {
        get: function () {
            return this.get_aw();
        },
        set: function (a) {
            this.set_aw(a);
        },
        enumerable: true,
        configurable: true
    });
    StreamWriter.prototype.get_a5 = function () {
        return this.a6;
    };
    Object.defineProperty(StreamWriter.prototype, "a5", {
        get: function () {
            return this.get_a5();
        },
        enumerable: true,
        configurable: true
    });
    StreamWriter.prototype.get_h = function () {
        return this.a8;
    };
    Object.defineProperty(StreamWriter.prototype, "h", {
        get: function () {
            return this.get_h();
        },
        enumerable: true,
        configurable: true
    });
    StreamWriter.prototype.dispose1 = function (a) {
        var b = null;
        if (!this.ax && a && this.a6 != null) {
            try {
                this.k();
            }
            catch (c) {
                b = c;
            }
            this.ax = true;
            try {
                this.a6.close();
            }
            catch (d) {
                if (b == null) {
                    b = d;
                }
            }
        }
        this.a6 = null;
        this.au = null;
        this.a8 = null;
        this.av = null;
        if (b != null) {
            throw b;
        }
    };
    StreamWriter.prototype.k = function () {
        if (this.ax) {
            throw new ObjectDisposedException(0, "StreamWriter");
        }
        this.a9();
        if (this.a0 > 0) {
            this.ba();
            this.a6.flush();
        }
    };
    StreamWriter.prototype.ba = function () {
        if (!this.az && this.a0 > 0) {
            var a = this.a8.getPreamble();
            if (a.length > 0) {
                this.a6.write(a, 0, a.length);
            }
            this.az = true;
        }
        this.a6.write(this.au, 0, this.a0);
        this.a0 = 0;
    };
    StreamWriter.prototype.a9 = function () {
        if (this.a0 > 0) {
            this.ba();
        }
        if (this.a1 > 0) {
            var a = this.a8.getBytes2(this.av, 0, this.a1, this.au, this.a0);
            this.a0 += a;
            this.a1 = 0;
        }
    };
    StreamWriter.prototype.m = function (a, b, c) {
        if (this.ax) {
            throw new ObjectDisposedException(0, "StreamWriter");
        }
        if (a == null) {
            throw new ArgumentNullException(0, "buffer");
        }
        if (b < 0) {
            throw new ArgumentOutOfRangeException(2, "index", "< 0");
        }
        if (c < 0) {
            throw new ArgumentOutOfRangeException(2, "count", "< 0");
        }
        if (b > a.length - c) {
            throw new ArgumentException(1, "index + count > buffer.Length");
        }
        this.bc(a, b, c);
        if (this.ay) {
            this.k();
        }
    };
    StreamWriter.prototype.bc = function (a, b, c) {
        while (c > 0) {
            var d = this.av.length - this.a1;
            if (d == 0) {
                this.a9();
                d = this.av.length;
            }
            if (d > c) {
                d = c;
            }
            arrayCopy1(a, b, this.av, this.a1, d);
            c -= d;
            b += d;
            this.a1 += d;
        }
    };
    StreamWriter.prototype.bd = function (a) {
        var b = a.length;
        var c = 0;
        while (b > 0) {
            var d = this.av.length - this.a1;
            if (d == 0) {
                this.a9();
                d = this.av.length;
            }
            if (d > b) {
                d = b;
            }
            for (var e = 0; e < d; e++) {
                this.av[e + this.a1] = a.charAt(e + c);
            }
            b -= d;
            c += d;
            this.a1 += d;
        }
    };
    StreamWriter.prototype.o = function (a) {
        if (this.ax) {
            throw new ObjectDisposedException(0, "StreamWriter");
        }
        if (this.a1 >= this.av.length) {
            this.a9();
        }
        this.av[this.a1++] = a;
        if (this.ay) {
            this.k();
        }
    };
    StreamWriter.prototype.l = function (a) {
        if (this.ax) {
            throw new ObjectDisposedException(0, "StreamWriter");
        }
        if (a != null) {
            this.bc(a, 0, a.length);
        }
        if (this.ay) {
            this.k();
        }
    };
    StreamWriter.prototype.v = function (a) {
        if (this.ax) {
            throw new ObjectDisposedException(0, "StreamWriter");
        }
        if (a != null) {
            this.bd(a);
        }
        if (this.ay) {
            this.k();
        }
    };
    StreamWriter.prototype.i = function () {
        this.dispose1(true);
    };
    StreamWriter.$t = markType(StreamWriter, 'StreamWriter', TextWriter.$);
    StreamWriter.a7 = new StreamWriter(2, new NullStream(), Encoding.uTF8Unmarked, 1);
    return StreamWriter;
}(TextWriter));
export { StreamWriter };
//# sourceMappingURL=StreamWriter.js.map