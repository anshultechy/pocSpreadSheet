/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, markType } from "./type";
import { ScalerVisibleBounds } from "./ScalerVisibleBounds";
import { Rect } from "./Rect";
/**
 * @hidden
 */
export class HeatTileScaler extends Base {
    constructor() {
        super();
        this.b = 0;
        this.c = 0;
        this.d = 0;
        this.e = 0;
        this.b = 85.05112878 - -85.05112878;
        this.c = 180 - -180;
        this.d = this.k(85.05112878);
        this.e = this.k(85.05112878) - this.k(-85.05112878);
    }
    k(a) {
        let b = a * (0.017453292519943295);
        let c = Math.sin(b);
        let d = 0.5 * Math.log((1 + c) / (1 - c));
        return d;
    }
    static a(a, b) {
        let c = new Rect(0, b.left / a.width, b.top / a.height, b.width / a.width, b.height / a.height);
        let d = c.left + c.width * a.left;
        let e = c.left + c.width * a.right;
        let f = c.top + c.height * a.top;
        let g = c.top + c.height * a.bottom;
        let h = new ScalerVisibleBounds(d, f, e, g);
        return h;
    }
    static m(a) {
        a = Math.exp(2 * a);
        return Math.asin((a - 1) / (a + 1)) / 0.017453292519943295;
    }
    t(a, b, c) {
        let d = (a - c.top) * b.width + b.top * c.height;
        d = this.k(85.05112878) - d / (c.height / this.e);
        return HeatTileScaler.m(d);
    }
    r(a, b, c) {
        let d = c.top + this.l(a, c.height);
        return (d - b.top * c.height) / b.width;
    }
    l(a, b) {
        a = a > -85.05112878 ? (a < 85.05112878 ? a : 85.05112878) : -85.05112878;
        let c = this.k(a);
        let d = (this.d - c) * b / this.e;
        return (d);
    }
    u(a, b, c) {
        let d = b.left + b.width * (a - c.left) / c.width;
        return -180 + d * (this.c);
    }
    s(a, b, c) {
        let d = (a - -180) / (this.c);
        return c.left + c.width * (d - b.left) / b.width;
    }
    i(a, b) {
        let c = HeatTileScaler.a(a, b);
        return this.t(b.bottom, a, b);
    }
    g(a, b) {
        let c = HeatTileScaler.a(a, b);
        return this.t(b.top, a, b);
    }
    j(a, b) {
        let c = HeatTileScaler.a(a, b);
        return this.u(b.left, a, b);
    }
    h(a, b) {
        let c = HeatTileScaler.a(a, b);
        return this.u(b.right, a, b);
    }
    v(a, b, c) {
        let d = c.height;
        let e = c.top;
        for (let f = 0; f < a.count; f++) {
            let g = a._inner[f];
            g = g > -85.05112878 ? (g < 85.05112878 ? g : 85.05112878) : -85.05112878;
            let h = g * (0.017453292519943295);
            let i = Math.sin(h);
            let j = 0.5 * Math.log((1 + i) / (1 - i));
            let k = (this.d - j) * d / this.e;
            k = e + k;
            a._inner[f] = (k - b.top * d) / b.width;
        }
    }
    w(a, b, c) {
        let d = c.left;
        let e = c.width;
        let f = b.left;
        let g = b.width;
        for (let h = 0; h < a.count; h++) {
            let i = (a._inner[h] - -180) / (this.c);
            a._inner[h] = c.left + c.width * (i - b.left) / b.width;
        }
    }
}
HeatTileScaler.$t = markType(HeatTileScaler, 'HeatTileScaler');
//# sourceMappingURL=HeatTileScaler.js.map