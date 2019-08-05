/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, ICollection_$type, IEnumerable_$type, toEnum, markType } from "./type";
import { ArgumentOutOfRangeException } from "./ArgumentOutOfRangeException";
import { IndexOutOfRangeException } from "./IndexOutOfRangeException";
import { ArgumentException } from "./ArgumentException";
import { intDivide } from "./number";
/**
 * @hidden
 */
export class BitArray extends Base {
    constructor(a, ..._rest) {
        super();
        this.i = 0;
        this.a = null;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0:
                {
                    let c = _rest[0];
                    let d = [c.a];
                    {
                        let f = d[0];
                        this.i = f.length * 32;
                        this.a = new Array(f.length);
                        for (let g = 0; g < f.length; g++) {
                            this.a[g] = f[g];
                        }
                    }
                    this.i = c.i;
                }
                break;
            case 1:
                {
                    let c = _rest[0];
                    this.j = c.length;
                    for (let d = 0; d < c.length; d++) {
                        this.item(d, c[d]);
                    }
                }
                break;
            case 2:
                {
                    let c = _rest[0];
                    let d = [c, false];
                    {
                        let f = d[0];
                        let g = d[1];
                        this.i = f;
                        this.a = new Array((intDivide((f - 1), 32)) + 1);
                        this.m(g);
                    }
                }
                break;
            case 3:
                {
                    let c = _rest[0];
                    this.i = c.length * 32;
                    this.a = new Array(c.length);
                    for (let d = 0; d < c.length; d++) {
                        this.a[d] = c[d];
                    }
                }
                break;
            case 4:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    this.i = c;
                    this.a = new Array((intDivide((c - 1), 32)) + 1);
                    this.m(d);
                }
                break;
        }
    }
    get count() {
        return this.i;
    }
    get c() {
        return false;
    }
    get isSynchronized() {
        return false;
    }
    get j() {
        return this.i;
    }
    set j(a) {
        if (a < 0) {
            throw new ArgumentOutOfRangeException(0);
        }
        this.i = a;
        let b = (intDivide((this.i - 1), 32)) + 1;
        if (this.a.length < b) {
            let c = this.a;
            this.a = new Array(b);
            for (let d = 0; d < c.length; d++) {
                this.a[d] = c[d];
            }
        }
    }
    get syncRoot() {
        return null;
    }
    item(a, b) {
        if (arguments.length === 2) {
            if (a < 0 || this.i <= a) {
                throw new IndexOutOfRangeException(0);
            }
            if (b) {
                this.a[intDivide(a, 32)] |= 1 << (a % 32);
            }
            else {
                this.a[intDivide(a, 32)] &= ~(1 << (a % 32));
            }
            return b;
        }
        else {
            if (a < 0 || this.i <= a) {
                throw new IndexOutOfRangeException(0);
            }
            return (this.a[intDivide(a, 32)] & (1 << (a % 32))) != 0;
        }
    }
    e(a) {
        if (a.j != this.j) {
            throw new ArgumentException(1, "The BitArrays do not have the same length");
        }
        for (let b = 0; b < this.a.length; b++) {
            this.a[b] &= a.a[b];
        }
        return this;
    }
    k() {
        return new BitArray(0, this);
    }
    copyTo(a, b) {
        for (let c = 0; c < this.i; c++) {
            a[b + c] = this.item(c);
        }
    }
    b(a) {
        return this.item(a);
    }
    *_getEnumeratorObject() {
        for (let a = 0; a < this.i; a++) {
            yield this.item(a);
        }
    }
    getEnumeratorObject() {
        return toEnum(() => this._getEnumeratorObject()).getEnumeratorObject();
    }
    f() {
        for (let a = 0; a < this.a.length; a++) {
            this.a[a] = ~this.a[a];
        }
        return this;
    }
    g(a) {
        if (a.j != this.j) {
            throw new ArgumentException(1, "The BitArrays do not have the same length");
        }
        for (let b = 0; b < this.a.length; b++) {
            this.a[b] |= a.a[b];
        }
        return this;
    }
    l(a, b) {
        this.item(a, b);
    }
    m(a) {
        let b = a ? -1 : 0;
        for (let c = 0; c < this.a.length; c++) {
            this.a[c] = b;
        }
    }
    h(a) {
        if (a.j != this.j) {
            throw new ArgumentException(1, "The BitArrays do not have the same length");
        }
        for (let b = 0; b < this.a.length; b++) {
            this.a[b] ^= a.a[b];
        }
        return this;
    }
}
BitArray.$t = markType(BitArray, 'BitArray', Base.$, [ICollection_$type, IEnumerable_$type]);
//# sourceMappingURL=BitArray.js.map