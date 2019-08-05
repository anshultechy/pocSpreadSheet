/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, IDisposable_$type, markType } from "./type";
import { UTF8Encoding } from "./UTF8Encoding";
import { BitConverter } from "./BitConverter";
/**
 * @hidden
 */
var BinaryWriter = /** @class */ (function (_super) {
    tslib_1.__extends(BinaryWriter, _super);
    function BinaryWriter(a) {
        var _rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            _rest[_i - 1] = arguments[_i];
        }
        var _this = _super.call(this) || this;
        _this.b = null;
        _this.d = null;
        a = (a == void 0) ? 0 : a;
        switch (a) {
            case 0: break;
            case 1:
                {
                    var c = _rest[0];
                    var d = [c, new UTF8Encoding(0, false, true)];
                    {
                        var f = d[0];
                        var g = d[1];
                        _this.b = f;
                        _this.d = g;
                    }
                }
                break;
            case 2:
                {
                    var c = _rest[0];
                    var d = _rest[1];
                    _this.b = c;
                    _this.d = d;
                }
                break;
        }
        return _this;
    }
    BinaryWriter.prototype.get_c = function () {
        return this.b;
    };
    Object.defineProperty(BinaryWriter.prototype, "c", {
        get: function () {
            return this.get_c();
        },
        enumerable: true,
        configurable: true
    });
    BinaryWriter.prototype.e = function () {
        this.disposeCore(true);
    };
    BinaryWriter.prototype.dispose = function () {
        this.disposeCore(true);
    };
    BinaryWriter.prototype.disposeCore = function (a) {
        if (a) {
            this.b.close();
        }
    };
    BinaryWriter.prototype.g = function () {
        this.b.flush();
    };
    BinaryWriter.prototype.a = function (a, b) {
        return this.b.seek(a, b);
    };
    BinaryWriter.prototype.l = function (a) {
        this.b.write(BitConverter.a(a), 0, 1);
    };
    BinaryWriter.prototype.m = function (a) {
        this.b.write(BitConverter.d(a), 0, 1);
    };
    BinaryWriter.prototype.h = function (a) {
        this.b.write(a, 0, a.length);
    };
    BinaryWriter.prototype.n = function (a) {
    };
    BinaryWriter.prototype.i = function (a) {
    };
    BinaryWriter.prototype.o = function (a) {
        this.b.write(BitConverter.c(a), 0, 8);
    };
    BinaryWriter.prototype.t = function (a) {
        this.b.write(BitConverter.g(a), 0, 4);
    };
    BinaryWriter.prototype.q = function (a) {
        this.b.write(BitConverter.e(a), 0, 4);
    };
    BinaryWriter.prototype.r = function (a) {
        this.b.write(BitConverter.f(a), 0, 8);
    };
    BinaryWriter.prototype.s = function (a) {
        this.b.write(BitConverter.d(a), 0, 2);
    };
    BinaryWriter.prototype.p = function (a) {
        this.b.write(BitConverter.d(a), 0, 2);
    };
    BinaryWriter.prototype.u = function (a) {
    };
    BinaryWriter.prototype.w = function (a) {
        this.b.write(BitConverter.i(a), 0, 4);
    };
    BinaryWriter.prototype.x = function (a) {
        this.b.write(BitConverter.j(a), 0, 8);
    };
    BinaryWriter.prototype.v = function (a) {
        this.b.write(BitConverter.h(a), 0, 2);
    };
    BinaryWriter.prototype.j = function (a, b, c) {
    };
    BinaryWriter.prototype.k = function (a, b, c) {
    };
    BinaryWriter.prototype.y = function (a) {
    };
    BinaryWriter.$t = markType(BinaryWriter, 'BinaryWriter', Base.$, [IDisposable_$type]);
    return BinaryWriter;
}(Base));
export { BinaryWriter };
//# sourceMappingURL=BinaryWriter.js.map