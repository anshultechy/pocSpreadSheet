/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, fromEnum, markType } from "./type";
import { Rect } from "./Rect";
import { List$1 } from "./List$1";
import { RectUtil } from "./RectUtil";
import { MathUtil } from "./MathUtil";
/**
 * @hidden
 */
var SmartPlacer = /** @class */ (function (_super) {
    tslib_1.__extends(SmartPlacer, _super);
    function SmartPlacer() {
        var _this = _super.call(this) || this;
        _this.e = null;
        _this.c = 0;
        _this.b = 0;
        _this.a = new List$1(Rect.$, 0);
        _this.e = Rect.empty;
        _this.c = 0.3;
        _this.b = 2;
        return _this;
    }
    SmartPlacer.prototype.d = function (a) {
        var e_1, _a;
        if (a == null) {
            return;
        }
        var b = 1.7976931348623157E+308;
        var c = Rect.empty;
        var d = 7;
        var e = false;
        var h = a.getSmartPositions();
        for (var g = 0; g < h.length; g++) {
            var f = h[g];
            var i = a.getSmartBounds(f);
            if (this.e.isEmpty || this.e.containsRect(i)) {
                var j = 0;
                try {
                    for (var _b = tslib_1.__values(fromEnum(this.a)), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var k = _c.value;
                        j += RectUtil.i(i, k);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                if (j == 0) {
                    b = j;
                    d = f;
                    c = i;
                    e = true;
                    break;
                }
                if (j < b) {
                    b = j;
                    d = f;
                    c = i;
                    e = true;
                }
            }
        }
        var l = 0;
        if (e) {
            l = b / RectUtil.e(c);
        }
        if (!e || l > this.c) {
            a.opacity = 0;
        }
        else {
            if (b > 0) {
                a.opacity = Math.pow(1 - MathUtil.b(0, l, 1), this.b);
            }
            else {
                a.opacity = 1;
            }
            a.smartPosition = d;
            this.a.add(c);
        }
    };
    SmartPlacer.$t = markType(SmartPlacer, 'SmartPlacer');
    return SmartPlacer;
}(Base));
export { SmartPlacer };
//# sourceMappingURL=SmartPlacer.js.map