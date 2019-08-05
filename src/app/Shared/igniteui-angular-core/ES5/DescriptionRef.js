/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "./type";
import { List$1 } from "./List$1";
import { RefValueChangedTarget } from "./RefValueChangedTarget";
import { DescriptionRefValueChangedEventArgs } from "./DescriptionRefValueChangedEventArgs";
/**
 * @hidden
 */
var DescriptionRef = /** @class */ (function (_super) {
    tslib_1.__extends(DescriptionRef, _super);
    function DescriptionRef(a) {
        var _this = _super.call(this) || this;
        _this.c = null;
        _this.a = null;
        _this.c = a;
        _this.a = new List$1(RefValueChangedTarget.$, 0);
        return _this;
    }
    Object.defineProperty(DescriptionRef.prototype, "d", {
        get: function () {
            return this.c;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DescriptionRef.prototype, "b", {
        get: function () {
            return this.a.count;
        },
        enumerable: true,
        configurable: true
    });
    DescriptionRef.prototype.f = function (a, b, c) {
        this.a.add(((function () {
            var $ret = new RefValueChangedTarget();
            $ret.b = a;
            $ret.c = b;
            $ret.a = c;
            return $ret;
        })()));
    };
    DescriptionRef.prototype.i = function (a, b) {
        for (var c = this.a.count - 1; c >= 0; c--) {
            if (this.a._inner[c].b == a && this.a._inner[c].c == b) {
                this.a.removeAt(c);
            }
        }
    };
    DescriptionRef.prototype.g = function () {
        this.a.clear();
    };
    DescriptionRef.prototype.h = function (a) {
        for (var b = this.a.count - 1; b >= 0; b--) {
            if (this.a._inner[b].b == a) {
                this.a.removeAt(b);
            }
        }
    };
    DescriptionRef.prototype.e = function (a, b) {
        for (var c = 0; c < this.a.count; c++) {
            this.a._inner[c].a(this, ((function () {
                var $ret = new DescriptionRefValueChangedEventArgs();
                $ret.b = a;
                $ret.a = b;
                return $ret;
            })()));
        }
    };
    DescriptionRef.$t = markType(DescriptionRef, 'DescriptionRef');
    return DescriptionRef;
}(Base));
export { DescriptionRef };
//# sourceMappingURL=DescriptionRef.js.map