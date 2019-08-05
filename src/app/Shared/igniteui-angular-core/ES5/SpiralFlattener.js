/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, Number_$type, markType } from "./type";
import { List$1 } from "./List$1";
import { Stack$1 } from "./Stack$1";
import { SpiralTodo } from "./SpiralTodo";
import { isNaN_ } from "./number";
/**
 * @hidden
 */
var SpiralFlattener = /** @class */ (function (_super) {
    tslib_1.__extends(SpiralFlattener, _super);
    function SpiralFlattener() {
        return _super.call(this) || this;
    }
    SpiralFlattener.a = function (a, b, c, d, e) {
        if (isNaN_(e) || e <= 0) {
            e = 1;
        }
        var f = new List$1(Number_$type, 0);
        var g = new Stack$1(SpiralTodo.$);
        var h = (d - b) / (c - a);
        var i = b - h * a;
        var j = h * h;
        var k = i * i;
        var l = i * h;
        g.h(((function () {
            var $ret = new SpiralTodo();
            $ret.a = 0;
            $ret.b = 1;
            return $ret;
        })()));
        var _loop_1 = function () {
            var m = g.e();
            var n = b + m.a * (d - b);
            var o = a + m.a * (c - a);
            var p = o * o;
            var q = p * o;
            var r = b + m.b * (d - b);
            var s = a + m.b * (c - a);
            var t = s * s;
            var u = t * s;
            var v = void 0;
            if (h == 0) {
                v = k * (s - o) / 2 + l * (t - p) / 2 + j * (u - q) / 6;
            }
            else {
                v = (Math.pow(i + h * s, 3) - Math.pow(i + h * o, 3)) / (6 * h);
            }
            var w = 0.5 * n * r * Math.sin(s - o);
            if (v - w > e) {
                var x_1 = 0.5 * (m.a + m.b);
                g.h(((function () {
                    var $ret = new SpiralTodo();
                    $ret.a = x_1;
                    $ret.b = m.b;
                    return $ret;
                })()));
                g.h(((function () {
                    var $ret = new SpiralTodo();
                    $ret.a = m.a;
                    $ret.b = x_1;
                    return $ret;
                })()));
            }
            else {
                f.add(m.a);
            }
        };
        while (g.f != 0) {
            _loop_1();
        }
        f.add(1);
        return f;
    };
    SpiralFlattener.$t = markType(SpiralFlattener, 'SpiralFlattener');
    return SpiralFlattener;
}(Base));
export { SpiralFlattener };
//# sourceMappingURL=SpiralFlattener.js.map