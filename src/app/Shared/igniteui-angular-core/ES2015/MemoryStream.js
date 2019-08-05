/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Stream, typeGetValue, markType } from "./type";
/**
 * @hidden
 */
export class MemoryStream extends Stream {
    constructor(a, ..._rest) {
        super();
        this.o = null;
        this.t = 0;
        this.s = 0;
        this.r = false;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    let c = [0];
                    {
                        let e = c[0];
                        this.o = new Array(e);
                        for (let f = 0; f < e; f++) {
                            this.o[f] = 0;
                        }
                    }
                }
                break;
            case 1:
                {
                    let c = _rest[0];
                    this.o = new Array(c);
                    for (let d = 0; d < c; d++) {
                        this.o[d] = 0;
                    }
                }
                break;
            case 2:
                {
                    let c = _rest[0];
                    this.o = c;
                    this.s = c.length;
                    this.r = this.s != 0 && typeof this.o[0] === 'string';
                }
                break;
        }
    }
    get_canRead() {
        return true;
    }
    get canRead() {
        return this.get_canRead();
    }
    get_canSeek() {
        return true;
    }
    get canSeek() {
        return this.get_canSeek();
    }
    get_canWrite() {
        return true;
    }
    get canWrite() {
        return this.get_canWrite();
    }
    get_capacity() {
        return this.o.length;
    }
    set_capacity(a) {
        if (this.o.length == a) {
            return;
        }
        for (let b = this.s; b < a; b++) {
            this.o[b] = 0;
        }
    }
    get capacity() {
        return this.get_capacity();
    }
    set capacity(a) {
        this.set_capacity(a);
    }
    get_length() {
        return this.s;
    }
    get length() {
        return this.get_length();
    }
    get_position() {
        return this.t;
    }
    set_position(a) {
        if (this.t == a) {
            return;
        }
        this.t = a;
        if (this.capacity <= this.t) {
            this.capacity = this.t + 1;
        }
    }
    get position() {
        return this.get_position();
    }
    set position(a) {
        this.set_position(a);
    }
    disposeCore(a) {
    }
    flush() {
    }
    getBuffer() {
        return this.o;
    }
    read(a, b, c) {
        let d = Math.min(this.s - this.t, c);
        if (this.r) {
            for (let e = 0; e < d; e++) {
                a[b++] = (this.o[this.t++].charCodeAt(0) & 0xFF);
            }
        }
        else {
            for (let f = 0; f < d; f++) {
                a[b++] = this.o[this.t++];
            }
        }
        return d;
    }
    readByte() {
        if (this.s <= this.t) {
            return -1;
        }
        if (this.r) {
            return (this.o[this.t++].charCodeAt(0) & 0xFF);
        }
        return this.o[this.t++];
    }
    seek(a, b) {
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
    }
    setLength(a) {
        if (this.capacity < a) {
            this.capacity = Math.max(a, this.capacity * 2);
        }
        this.s = a;
        if (this.s < this.t) {
            this.t = this.s;
        }
    }
    toArray() {
        if (this.r) {
            let a = new Array(this.s);
            let b = this.position;
            this.position = 0;
            this.read(a, 0, a.length);
            this.position = b;
            return a;
        }
        return (this.o.slice(0, this.s));
    }
    write(a, b, c) {
        let d = this.t + c;
        if (this.length < d) {
            this.setLength(d);
        }
        let e = c != 0 && typeof a[b] === 'string';
        if (e == this.r) {
            for (let f = 0; f < c; f++) {
                this.o[this.t++] = a[b++];
            }
        }
        else if (e) {
            for (let g = 0; g < c; g++) {
                this.o[this.t++] = (a.charCodeAt(b++) & 0xFF);
            }
        }
        else {
            for (let h = 0; h < c; h++) {
                this.o[this.t++] = typeGetValue((String.fromCharCode(a[b++])));
            }
        }
    }
    writeByte(a) {
        let b = typeof a === 'string';
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
    }
    writeTo(a) {
        a.write(this.o, 0, this.s);
    }
}
MemoryStream.$t = markType(MemoryStream, 'MemoryStream', Stream.$);
//# sourceMappingURL=MemoryStream.js.map