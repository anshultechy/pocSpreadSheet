/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
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
export class Encoding extends Base {
    static get uTF8() {
        if (Encoding.t == null) {
            Encoding.t = new UTF8Encoding(1);
        }
        return Encoding.t;
    }
    static get uTF8Unmarked() {
        if (Encoding.s == null) {
            Encoding.s = new UTF8Encoding(1);
        }
        return Encoding.s;
    }
    static get unicode() {
        if (Encoding.r == null) {
            Encoding.r = new UnicodeEncoding(0);
        }
        return Encoding.r;
    }
    getString1(a, b, c) {
        return "";
    }
    getBytes(a, b, c) {
        let d = new Array(this.getByteCount(a, b, c));
        this.getBytes2(a, b, c, d, 0);
        return d;
    }
    getBytes1(a) {
        if (a == null) {
            throw new ArgumentNullException(0, "input");
        }
        let b = new Array(a.length);
        for (let c = 0; c < a.length; c++) {
            b[c] = a.charAt(c);
        }
        return this.getBytes(b, 0, b.length);
    }
    getString(a) {
        return this.getString1(a, 0, a.length);
    }
    getCharCount(a) {
        if (a == null) {
            throw new ArgumentNullException(0, "bytes");
        }
        return this.getCharCount1(a, 0, a.length);
    }
    getCharCount1(a, b, c) {
        throw new NotImplementedException(0);
    }
    getChars(a, b, c, d, e) {
        throw new NotImplementedException(0);
    }
    static get aSCII() {
        if (Encoding.p == null) {
            Encoding.p = new AsciiEncoding(1);
        }
        return Encoding.p;
    }
    getDecoder() {
        return new DefaultDecoder(this);
    }
    getBytes3(a, b, c, d, e) {
        return this.getBytes2(stringToCharArray(a), b, c, d, e);
    }
    getMaxCharCount(a) {
        return a;
    }
    getMaxByteCount(a) {
        return a + 1;
    }
    getPreamble() {
        return new Array(0);
    }
    static get bigEndianUnicode() {
        if (Encoding.q == null) {
            Encoding.q = new UnicodeEncoding(1, true, false);
        }
        return Encoding.q;
    }
    static get defaultValue() {
        return Encoding.aSCII;
    }
    static getEncoding(a) {
        switch (a.toUpperCase()) {
            case "ASCII": return Encoding.aSCII;
            case "UNICODE": return Encoding.unicode;
            case "UTF-8": return Encoding.uTF8;
            default: throw new ArgumentException(1, "'" + a + "' is not a valid encoding name.");
        }
    }
    get_webName() {
        throw new NotImplementedException(0);
    }
    get webName() {
        return this.get_webName();
    }
}
Encoding.$t = markType(Encoding, 'Encoding');
Encoding.t = null;
Encoding.s = null;
Encoding.r = null;
Encoding.p = null;
Encoding.q = null;
/**
 * @hidden
 */
export class UnicodeEncoding extends Encoding {
    constructor(a, ..._rest) {
        super();
        this.ab = false;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0: break;
            case 1:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    this.ab = c;
                }
                break;
        }
    }
    getString1(bytes_, a, b) {
        let c = "";
        let d = a + b;
        for (let i_ = a; i_ < d; i_ = i_ + 2) {
            if (i_ + 1 >= d) {
                c = c + '�';
            }
            else {
                let e;
                let f;
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
                let g = parseInt(f + e, 16);
                c = c + String.fromCharCode(g);
            }
        }
        return c;
    }
    getCharCount1(a, b, c) {
        return intDivide(c, 2);
    }
    getBytes(a, b, c) {
        return super.getBytes(a, b, c);
    }
    getBytes1(a) {
        let b = new Array(a.length * 2);
        this.getBytes3(a, 0, a.length, b, 0);
        return b;
    }
    getMaxByteCount(a) {
        return (a + 1) * 2;
    }
    getMaxCharCount(a) {
        return truncate(Math.ceil(a / 2)) + 1;
    }
    getBytes3(a, b, c, d, e) {
        for (let f = b; f < b + c; f++) {
            let g = a.charCodeAt(f);
            let h = (g & 255);
            let i = ((g >> 8) & 255);
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
    }
    getByteCount(a, b, c) {
        throw new NotImplementedException(0);
    }
    getBytes2(a, b, c, d, e) {
        throw new NotImplementedException(0);
    }
    getChars(a, b, c, d, e) {
        throw new NotImplementedException(0);
    }
}
UnicodeEncoding.$t = markType(UnicodeEncoding, 'UnicodeEncoding', Encoding.$);
/**
 * @hidden
 */
export class UTF8Encoding extends Encoding {
    constructor(a, ..._rest) {
        super();
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                }
                break;
            case 1: break;
        }
    }
    getString1(a, b, c) {
        let d = "";
        let e = b;
        let f = 0;
        let g = 0;
        let h = 0;
        let i = 0;
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
                let j = ((f & 7) << 18) | ((g & 63) << 12) | ((h & 63) << 6) | (i & 63);
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
    }
    getCharCount1(a, b, c) {
        return c;
    }
    getByteCount(a, b, c) {
        throw new NotImplementedException(0);
    }
    getBytes2(chars_, charIndex_, charCount_, a, b) {
        let inputUTF8_ = (unescape(encodeURIComponent(chars_.slice(charIndex_, charIndex_ + charCount_).join(""))));
        for (let i_ = 0; i_ < inputUTF8_.length; i_++) {
            a[b + i_] = (inputUTF8_.charCodeAt(i_));
        }
        return inputUTF8_.length;
    }
    getBytes(a, b, c) {
        return super.getBytes(a, b, c);
    }
    getBytes1(input_) {
        let a = new Array(input_.length);
        let inputUTF8_ = (unescape(encodeURIComponent(input_)));
        for (let i_ = 0; i_ < inputUTF8_.length; i_++) {
            a[i_] = (inputUTF8_.charCodeAt(i_));
        }
        return a;
    }
    getChars(a, b, c, d, e) {
        let f = e;
        let g = b;
        let h = 0;
        let i = 0;
        let j = 0;
        let k = 0;
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
                let l = ((h & 7) << 18) | ((i & 63) << 12) | ((j & 63) << 6) | (k & 63);
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
    }
    getDecoder() {
        return new UTF8Encoding_UTF8Decoder(this);
    }
    getMaxByteCount(a) {
        return (a + 1) * 3;
    }
    getMaxCharCount(a) {
        return a + 1;
    }
}
UTF8Encoding.$t = markType(UTF8Encoding, 'UTF8Encoding', Encoding.$);
/**
 * @hidden
 */
export class UTF8Encoding_UTF8Decoder extends Decoder {
    constructor(a) {
        super();
        this.g = 0;
        this.h = 0;
        this.i = 0;
        this.j = 0;
        this.k = null;
        this.k = a;
    }
    a(a, b, c) {
        return this.b(a, b, c, false);
    }
    b(a, b, c, d) {
        let e = 0;
        let f = b;
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
                        let g = ((this.g & 7) << 18) | ((this.h & 63) << 12) | ((this.i & 63) << 6) | (this.j & 63);
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
    }
    c(a, b, c, d, e) {
        return this.d(a, b, c, d, e, false);
    }
    d(a, b, c, d, e, f) {
        let g = e;
        let h = b;
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
                        let i = ((this.g & 7) << 18) | ((this.h & 63) << 12) | ((this.i & 63) << 6) | (this.j & 63);
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
    }
}
UTF8Encoding_UTF8Decoder.$t = markType(UTF8Encoding_UTF8Decoder, 'UTF8Encoding_UTF8Decoder', Decoder.$);
/**
 * @hidden
 */
export class AsciiEncoding extends Encoding {
    constructor(a, ..._rest) {
        super();
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                }
                break;
            case 1: break;
        }
    }
    getString1(bytes_, a, b) {
        let ret_ = "";
        for (let i_ = a; i_ < a + b; i_++) {
            if (bytes_[i_] == 0) {
                break;
            }
            ret_ = ret_ + String.fromCharCode(bytes_[i_]);
        }
        return ret_;
    }
    getCharCount1(a, b, c) {
        return c;
    }
    getByteCount(a, b, c) {
        return c;
    }
    getBytes2(a, b, c, d, e) {
        throw new NotImplementedException(0);
    }
    getBytes(a, b, c) {
        return super.getBytes(a, b, c);
    }
    getBytes1(input_) {
        let a = new Array(input_.length);
        for (let i_ = 0; i_ < input_.length; i_++) {
            a[i_] = (input_.charCodeAt(i_));
        }
        return a;
    }
    getChars(bytes_, byteIndex_, a, b, c) {
        let d = c;
        for (let i_ = 0; i_ < a; i_++) {
            if (bytes_[i_] == 0) {
                break;
            }
            b[c++] = (String.fromCharCode(bytes_[byteIndex_++]));
        }
        return c - d;
    }
}
AsciiEncoding.$t = markType(AsciiEncoding, 'AsciiEncoding', Encoding.$);
/**
 * @hidden
 */
export class DefaultDecoder extends Decoder {
    constructor(a) {
        super();
        this.g = null;
        this.g = a;
    }
    a(a, b, c) {
        return this.b(a, b, c, false);
    }
    b(a, b, c, d) {
        return this.g.getCharCount1(a, b, c);
    }
    c(a, b, c, d, e) {
        return this.d(a, b, c, d, e, false);
    }
    d(a, b, c, d, e, f) {
        return this.g.getChars(a, b, c, d, e);
    }
}
DefaultDecoder.$t = markType(DefaultDecoder, 'DefaultDecoder', Decoder.$);
//# sourceMappingURL=Encoding_combined.js.map