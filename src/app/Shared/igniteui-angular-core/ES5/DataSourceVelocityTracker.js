/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, Point_$type, markType } from "./type";
import { DataSourceVelocityReading } from "./DataSourceVelocityReading";
import { dateNow } from "./date";
/**
 * @hidden
 */
var DataSourceVelocityTracker = /** @class */ (function (_super) {
    tslib_1.__extends(DataSourceVelocityTracker, _super);
    function DataSourceVelocityTracker() {
        var _this = _super.call(this) || this;
        _this.f = 0;
        _this.d = 6;
        _this.a = null;
        _this.b = 0;
        _this.c = 0;
        _this.f = _this.g();
        _this.c = 0;
        _this.a = new Array(_this.d);
        return _this;
    }
    DataSourceVelocityTracker.prototype.i = function (a) {
        var b = this.e();
        this.a[this.b] = new DataSourceVelocityReading(a, b);
        this.b++;
        if (this.b > (this.d - 1)) {
            this.b = 0;
        }
    };
    DataSourceVelocityTracker.prototype.h = function () {
        for (var a = 0; a < this.d; a++) {
            this.a[a] = null;
        }
    };
    DataSourceVelocityTracker.prototype.j = function () {
        var a = 0x7FFFFFFF;
        var b = -2147483648;
        var c = 0;
        var d = 0;
        var e = 0;
        var f = 0;
        var g = this.e();
        for (var h = 0; h < this.d; h++) {
            if (this.a[h] == null) {
                continue;
            }
            if ((g - this.a[h].a) > 300) {
                continue;
            }
            if (this.a[h].a < a) {
                a = this.a[h].a;
                c = this.a[h].b.x;
                d = this.a[h].b.y;
            }
            if (this.a[h].a > b) {
                b = this.a[h].a;
                e = this.a[h].b.x;
                f = this.a[h].b.y;
            }
        }
        var i = b - a;
        i = Math.max(i, 16);
        var j = (i) / 1000;
        if (j == 0) {
            return { $type: Point_$type, x: c, y: d };
        }
        return { $type: Point_$type, x: (e - c) / j, y: (f - d) / j };
    };
    DataSourceVelocityTracker.prototype.g = function () {
        var a = dateNow();
        return a.getTime();
    };
    DataSourceVelocityTracker.prototype.e = function () {
        var a = (this.g() - this.f);
        if (a == this.c) {
            a += 1;
        }
        this.c = a;
        return a;
    };
    DataSourceVelocityTracker.$t = markType(DataSourceVelocityTracker, 'DataSourceVelocityTracker');
    return DataSourceVelocityTracker;
}(Base));
export { DataSourceVelocityTracker };
//# sourceMappingURL=DataSourceVelocityTracker.js.map