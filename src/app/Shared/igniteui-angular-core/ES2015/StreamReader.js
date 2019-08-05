/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { TextReader } from "./TextReader";
import { markType } from "./type";
import { Encoding } from "./Encoding";
import { NotImplementedException } from "./NotImplementedException";
import { StringBuilder } from "./StringBuilder";
import { arrayCopy1 } from "./arrayExtended";
/**
 * @hidden
 */
export class StreamReader extends TextReader {
    constructor(a) {
        super();
        this.o = null;
        this.q = null;
        this.p = null;
        this.k = null;
        this.l = 0;
        this.m = 0;
        this.o = a;
        this.q = Encoding.uTF8;
        this.p = this.q.getDecoder();
        this.k = new Array(this.q.getMaxCharCount(1024));
    }
    r() {
        let a = new Array(1024);
        let b = this.o.read(a, 0, a.length);
        this.l = this.p.c(a, 0, b, this.k, 0);
        this.m = 0;
    }
    a() {
        if (this.m == this.l) {
            this.r();
            if (this.m == this.l) {
                return -1;
            }
        }
        return this.k[this.m].charCodeAt(0);
    }
    b() {
        if (this.m == this.l) {
            this.r();
            if (this.m == this.l) {
                return -1;
            }
        }
        return this.k[this.m++].charCodeAt(0);
    }
    c(a, b, c) {
        let d = 0;
        while (c > 0) {
            let e = Math.min(c, this.l - this.m);
            if (e == 0) {
                this.r();
                e = Math.min(c, this.l - this.m);
                if (e == 0) {
                    break;
                }
            }
            arrayCopy1(this.k, this.m, a, b, e);
            d += e;
            c -= e;
            this.m += e;
        }
        return d;
    }
    g() {
        throw new NotImplementedException(0);
    }
    h() {
        let a = new StringBuilder(0);
        while (true) {
            let b = this.l - this.m;
            if (b == 0) {
                this.r();
                b = this.l - this.m;
                if (b == 0) {
                    break;
                }
            }
            a.g(this.k, this.m, b);
            this.m = this.l;
        }
        return a.toString();
    }
}
StreamReader.$t = markType(StreamReader, 'StreamReader', TextReader.$);
//# sourceMappingURL=StreamReader.js.map