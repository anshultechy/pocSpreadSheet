/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { FrameworkElement } from "./FrameworkElement";
import { markType } from "./type";
/**
 * @hidden
 */
export class TextBlock extends FrameworkElement {
    constructor() {
        super(...arguments);
        this.aj = null;
        this.am = null;
        this.af = true;
        this.ae = null;
        this.ad = null;
        this.ab = null;
        this.ac = null;
        this.ah = -1;
    }
    get ak() {
        return this.aj;
    }
    set ak(a) {
        if (this.aj != a) {
            this.af = true;
            this.aj = a;
        }
    }
    ag(a, b) {
        if (this.ah == -1) {
            return -1;
        }
        if (!this.af) {
            if (this.ab[this.ah] == a) {
                return this.ae[this.ah];
            }
        }
        for (let c = 0; c < 5; c++) {
            let d = this.ah - c;
            if (d < 0) {
                d = (5) + d;
            }
            if (b != this.ac[d] || a != this.ab[d] || this.aj != this.ad[d]) {
                continue;
            }
            return this.ae[d];
        }
        return -1;
    }
    al(a, b, c) {
        if (this.ah == -1) {
            this.ad = new Array(5);
            this.ab = new Array(5);
            this.ac = new Array(5);
            this.ae = new Array(5);
        }
        this.ah++;
        if (this.ah > 5 - 1) {
            this.ah = 0;
        }
        this.ad[this.ah] = this.aj;
        this.ab[this.ah] = a;
        this.ac[this.ah] = b;
        this.ae[this.ah] = c;
        this.af = false;
    }
}
TextBlock.$t = markType(TextBlock, 'TextBlock', FrameworkElement.$);
//# sourceMappingURL=TextBlock.js.map