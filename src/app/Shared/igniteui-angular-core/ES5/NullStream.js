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
import { Stream, markType } from "./type";
/**
 * @hidden
 */
var NullStream = /** @class */ (function (_super) {
    tslib_1.__extends(NullStream, _super);
    function NullStream() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NullStream.prototype.get_canRead = function () {
        return true;
    };
    Object.defineProperty(NullStream.prototype, "canRead", {
        get: function () {
            return this.get_canRead();
        },
        enumerable: true,
        configurable: true
    });
    NullStream.prototype.get_canSeek = function () {
        return true;
    };
    Object.defineProperty(NullStream.prototype, "canSeek", {
        get: function () {
            return this.get_canSeek();
        },
        enumerable: true,
        configurable: true
    });
    NullStream.prototype.get_canWrite = function () {
        return true;
    };
    Object.defineProperty(NullStream.prototype, "canWrite", {
        get: function () {
            return this.get_canWrite();
        },
        enumerable: true,
        configurable: true
    });
    NullStream.prototype.get_length = function () {
        return 0;
    };
    Object.defineProperty(NullStream.prototype, "length", {
        get: function () {
            return this.get_length();
        },
        enumerable: true,
        configurable: true
    });
    NullStream.prototype.get_position = function () {
        return 0;
    };
    NullStream.prototype.set_position = function (a) {
    };
    Object.defineProperty(NullStream.prototype, "position", {
        get: function () {
            return this.get_position();
        },
        set: function (a) {
            this.set_position(a);
        },
        enumerable: true,
        configurable: true
    });
    NullStream.prototype.flush = function () {
    };
    NullStream.prototype.read = function (a, b, c) {
        return 0;
    };
    NullStream.prototype.readByte = function () {
        return -1;
    };
    NullStream.prototype.seek = function (a, b) {
        return 0;
    };
    NullStream.prototype.setLength = function (a) {
    };
    NullStream.prototype.write = function (a, b, c) {
    };
    NullStream.prototype.writeByte = function (a) {
    };
    NullStream.$t = markType(NullStream, 'NullStream', Stream.$);
    return NullStream;
}(Stream));
export { NullStream };
//# sourceMappingURL=NullStream.js.map