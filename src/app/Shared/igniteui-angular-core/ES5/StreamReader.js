/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { TextReader } from "./TextReader";
import { markType } from "./type";
import { Encoding } from "./Encoding";
import { NotImplementedException } from "./NotImplementedException";
import { StringBuilder } from "./StringBuilder";
import { arrayCopy1 } from "./arrayExtended";
/**
 * @hidden
 */
var StreamReader = /** @class */ (function (_super) {
    tslib_1.__extends(StreamReader, _super);
    function StreamReader(a) {
        var _this = _super.call(this) || this;
        _this.o = null;
        _this.q = null;
        _this.p = null;
        _this.k = null;
        _this.l = 0;
        _this.m = 0;
        _this.o = a;
        _this.q = Encoding.uTF8;
        _this.p = _this.q.getDecoder();
        _this.k = new Array(_this.q.getMaxCharCount(1024));
        return _this;
    }
    StreamReader.prototype.r = function () {
        var a = new Array(1024);
        var b = this.o.read(a, 0, a.length);
        this.l = this.p.c(a, 0, b, this.k, 0);
        this.m = 0;
    };
    StreamReader.prototype.a = function () {
        if (this.m == this.l) {
            this.r();
            if (this.m == this.l) {
                return -1;
            }
        }
        return this.k[this.m].charCodeAt(0);
    };
    StreamReader.prototype.b = function () {
        if (this.m == this.l) {
            this.r();
            if (this.m == this.l) {
                return -1;
            }
        }
        return this.k[this.m++].charCodeAt(0);
    };
    StreamReader.prototype.c = function (a, b, c) {
        var d = 0;
        while (c > 0) {
            var e = Math.min(c, this.l - this.m);
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
    };
    StreamReader.prototype.g = function () {
        throw new NotImplementedException(0);
    };
    StreamReader.prototype.h = function () {
        var a = new StringBuilder(0);
        while (true) {
            var b = this.l - this.m;
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
    };
    StreamReader.$t = markType(StreamReader, 'StreamReader', TextReader.$);
    return StreamReader;
}(TextReader));
export { StreamReader };
//# sourceMappingURL=StreamReader.js.map