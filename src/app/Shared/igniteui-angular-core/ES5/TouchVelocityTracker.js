/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "./type";
import { TouchHistoryItem } from "./TouchHistoryItem";
import { TouchVelocityReading } from "./TouchVelocityReading";
import { isNaN_ } from "./number";
/**
 * @hidden
 */
var TouchVelocityTracker = /** @class */ (function (_super) {
    tslib_1.__extends(TouchVelocityTracker, _super);
    function TouchVelocityTracker() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.a = new Array(5);
        _this.d = 0;
        return _this;
    }
    TouchVelocityTracker.prototype.g = function (a, b, c) {
        if (isNaN_(a) || isNaN_(b)) {
            return;
        }
        var d = ((function () {
            var $ret = new TouchHistoryItem();
            $ret.a = a;
            $ret.b = b;
            $ret.c = c;
            return $ret;
        })());
        this.a[this.d] = d;
        this.d++;
        if (this.d > 5 - 1) {
            this.d = 0;
        }
    };
    TouchVelocityTracker.prototype.f = function () {
        this.d = 0;
        for (var a = 0; a < 5; a++) {
            this.a[a] = null;
        }
    };
    TouchVelocityTracker.prototype.b = function (a) {
        var b = a;
        var c = NaN;
        var d = NaN;
        var e = NaN;
        var f = NaN;
        var g = 0;
        var h = 0;
        var i = true;
        for (var j = 0; j < 5; j++) {
            if (this.a[j] == null) {
                continue;
            }
            var k = (this.a[j].c - b) > 300;
            if (k) {
                continue;
            }
            if (i) {
                i = false;
                c = this.a[j].a;
                d = this.a[j].a;
                e = this.a[j].b;
                f = this.a[j].b;
                g = this.a[j].c;
                h = this.a[j].c;
            }
            else {
                if (this.a[j].c < g) {
                    g = this.a[j].c;
                    d = this.a[j].a;
                    f = this.a[j].b;
                }
                if (this.a[j].c > h) {
                    h = this.a[j].c;
                    c = this.a[j].a;
                    e = this.a[j].b;
                }
            }
        }
        if (g == h || isNaN_(c) || isNaN_(d) || isNaN_(e) || isNaN_(f)) {
            return ((function () {
                var $ret = new TouchVelocityReading();
                $ret.a = NaN;
                $ret.b = NaN;
                return $ret;
            })());
        }
        return ((function () {
            var $ret = new TouchVelocityReading();
            $ret.a = (c - d) / ((h - g) / 1000);
            $ret.b = (e - f) / ((h - g) / 1000);
            return $ret;
        })());
    };
    TouchVelocityTracker.$t = markType(TouchVelocityTracker, 'TouchVelocityTracker');
    return TouchVelocityTracker;
}(Base));
export { TouchVelocityTracker };
//# sourceMappingURL=TouchVelocityTracker.js.map