/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, IDisposable_$type, markType } from "./type";
/**
 * @hidden
 */
export class BinaryReader extends Base {
    constructor(a, ..._rest) {
        super();
        this._data = null;
        this.d = false;
        this.n = 0;
        this.e = false;
        this.f = false;
        this._stream = null;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    this._data = c;
                    this.d = d;
                    let data_ = this._data;
                    if ((typeof Uint8Array != 'undefined' && data_ instanceof Uint8Array)) {
                        this.e = true;
                    }
                }
                break;
            case 1:
                {
                    let c = _rest[0];
                    this._stream = c;
                    this.f = true;
                }
                break;
        }
    }
    get canRead() {
        return this.n < this._data.length;
    }
    get currentPosition() {
        return this.n;
    }
    get length() {
        if (this.f) {
            return this._stream.length;
        }
        return this._data.length;
    }
    i(offset_) {
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
    }
    a(offset_, a) {
        let b = new Array(a);
        if (this.f) {
            this._stream.position = offset_;
            this._stream.read(b, 0, a);
        }
        else if (this.e) {
            for (let i_ = 0; i_ < a; i_++) {
                b[i_] = (+this._data[offset_ + i_] & 0xFF);
            }
        }
        else {
            for (let i_ = 0; i_ < a; i_++) {
                b[i_] = (this._data.charCodeAt(offset_ + i_) & 0xFF);
            }
        }
        return b;
    }
    b(offset_, length_) {
        let a = new Array(length_);
        if (this.f) {
            this._stream.position = offset_;
            this._stream.read(a, 0, length_);
            a.reverse();
        }
        else if (this.e) {
            for (let i_ = 0; i_ < length_; i_++) {
                a[i_] = (+this._data[offset_ + (length_ - 1 - i_)] & 0xFF);
            }
        }
        else {
            for (let i_ = 0; i_ < length_; i_++) {
                a[i_] = (this._data.charCodeAt(offset_ + (length_ - 1 - i_)) & 0xFF);
            }
        }
        return a;
    }
    readByte() {
        if (this.f) {
            this.n = this._stream.position;
        }
        let a = this.i(this.n);
        this.n = this.n + 1;
        return a;
    }
    readBytes(a) {
        if (this.f) {
            this.n = this._stream.position;
        }
        let b = this.a(this.n, a);
        this.n = this.n + a;
        return b;
    }
    readUInt32() {
        if (this.f) {
            this.n = this._stream.position;
        }
        let a = 0;
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
    }
    readUInt16() {
        if (this.f) {
            this.n = this._stream.position;
        }
        let a = 0;
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
    }
    readInt32() {
        if (this.f) {
            this.n = this._stream.position;
        }
        let a = 0;
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
    }
    readDouble() {
        if (this.f) {
            this.n = this._stream.position;
        }
        let a = this.b(this.n, 8);
        this.n = this.n + 8;
        let b = a[0] >>> 7;
        let c = 0;
        c = c + (a[1] >>> 4);
        c = c + ((a[0] & 127) << 4);
        let d = 1;
        let e = a[1];
        let f = 1 / 2;
        let g = 0;
        let h = false;
        for (g = 5; g <= 8; g++) {
            if ((e & (1 << (8 - g))) > 0) {
                d = d + f;
                h = true;
            }
            f = f / 2;
        }
        for (let i = 2; i < 8; i++) {
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
        let j = c - 1023;
        return Math.pow(-1, b) * Math.pow(2, j) * d;
    }
    readSingle() {
        if (this.f) {
            this.n = this._stream.position;
        }
        let a = this.b(this.n, 4);
        this.n = this.n + 4;
        let b = a[0] >>> 7;
        let c = 0;
        c = c + (a[1] >>> 7);
        c = c + ((a[0] & 127) << 1);
        let d = 1;
        let e = a[1];
        let f = 1 / 2;
        let g = 0;
        let h = false;
        for (g = 2; g <= 8; g++) {
            if ((e & (1 << (8 - g))) > 0) {
                d = d + f;
                h = true;
            }
            f = f / 2;
        }
        for (let i = 2; i < 4; i++) {
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
        let j = c - 127;
        return Math.pow(-1, b) * Math.pow(2, j) * d;
    }
    get_baseStream() {
        return this._stream;
    }
    get baseStream() {
        return this.get_baseStream();
    }
    readBoolean() {
        if (this.f) {
            this.n = this._stream.position;
        }
        let a = this.i(this.n);
        this.n = this.n + 1;
        return a != 0;
    }
    readInt16() {
        if (this.f) {
            this.n = this._stream.position;
        }
        let a = 0;
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
    }
    readSByte() {
        if (this.f) {
            this.n = this._stream.position;
        }
        let a = this.i(this.n);
        this.n = this.n + 1;
        if (a > 127) {
            return (a - 255 + 1);
        }
        return a;
    }
    close() {
        this.dispose();
    }
    dispose() {
        if (this.f) {
            this._stream.dispose();
        }
    }
}
BinaryReader.$t = markType(BinaryReader, 'BinaryReader', Base.$, [IDisposable_$type]);
//# sourceMappingURL=BinaryReader.js.map