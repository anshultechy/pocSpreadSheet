/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { FrameworkElement } from "./FrameworkElement";
import { markType } from "./type";
/**
 * @hidden
 */
var TextBlock = /** @class */ (function (_super) {
    tslib_1.__extends(TextBlock, _super);
    function TextBlock() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.aj = null;
        _this.am = null;
        _this.af = true;
        _this.ae = null;
        _this.ad = null;
        _this.ab = null;
        _this.ac = null;
        _this.ah = -1;
        return _this;
    }
    Object.defineProperty(TextBlock.prototype, "ak", {
        get: function () {
            return this.aj;
        },
        set: function (a) {
            if (this.aj != a) {
                this.af = true;
                this.aj = a;
            }
        },
        enumerable: true,
        configurable: true
    });
    TextBlock.prototype.ag = function (a, b) {
        if (this.ah == -1) {
            return -1;
        }
        if (!this.af) {
            if (this.ab[this.ah] == a) {
                return this.ae[this.ah];
            }
        }
        for (var c = 0; c < 5; c++) {
            var d = this.ah - c;
            if (d < 0) {
                d = (5) + d;
            }
            if (b != this.ac[d] || a != this.ab[d] || this.aj != this.ad[d]) {
                continue;
            }
            return this.ae[d];
        }
        return -1;
    };
    TextBlock.prototype.al = function (a, b, c) {
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
    };
    TextBlock.$t = markType(TextBlock, 'TextBlock', FrameworkElement.$);
    return TextBlock;
}(FrameworkElement));
export { TextBlock };
//# sourceMappingURL=TextBlock.js.map