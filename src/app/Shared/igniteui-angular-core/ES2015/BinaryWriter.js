/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, IDisposable_$type, markType } from "./type";
import { UTF8Encoding } from "./UTF8Encoding";
import { BitConverter } from "./BitConverter";
/**
 * @hidden
 */
export class BinaryWriter extends Base {
    constructor(a, ..._rest) {
        super();
        this.b = null;
        this.d = null;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0: break;
            case 1:
                {
                    let c = _rest[0];
                    let d = [c, new UTF8Encoding(0, false, true)];
                    {
                        let f = d[0];
                        let g = d[1];
                        this.b = f;
                        this.d = g;
                    }
                }
                break;
            case 2:
                {
                    let c = _rest[0];
                    let d = _rest[1];
                    this.b = c;
                    this.d = d;
                }
                break;
        }
    }
    get_c() {
        return this.b;
    }
    get c() {
        return this.get_c();
    }
    e() {
        this.disposeCore(true);
    }
    dispose() {
        this.disposeCore(true);
    }
    disposeCore(a) {
        if (a) {
            this.b.close();
        }
    }
    g() {
        this.b.flush();
    }
    a(a, b) {
        return this.b.seek(a, b);
    }
    l(a) {
        this.b.write(BitConverter.a(a), 0, 1);
    }
    m(a) {
        this.b.write(BitConverter.d(a), 0, 1);
    }
    h(a) {
        this.b.write(a, 0, a.length);
    }
    n(a) {
    }
    i(a) {
    }
    o(a) {
        this.b.write(BitConverter.c(a), 0, 8);
    }
    t(a) {
        this.b.write(BitConverter.g(a), 0, 4);
    }
    q(a) {
        this.b.write(BitConverter.e(a), 0, 4);
    }
    r(a) {
        this.b.write(BitConverter.f(a), 0, 8);
    }
    s(a) {
        this.b.write(BitConverter.d(a), 0, 2);
    }
    p(a) {
        this.b.write(BitConverter.d(a), 0, 2);
    }
    u(a) {
    }
    w(a) {
        this.b.write(BitConverter.i(a), 0, 4);
    }
    x(a) {
        this.b.write(BitConverter.j(a), 0, 8);
    }
    v(a) {
        this.b.write(BitConverter.h(a), 0, 2);
    }
    j(a, b, c) {
    }
    k(a, b, c) {
    }
    y(a) {
    }
}
BinaryWriter.$t = markType(BinaryWriter, 'BinaryWriter', Base.$, [IDisposable_$type]);
//# sourceMappingURL=BinaryWriter.js.map