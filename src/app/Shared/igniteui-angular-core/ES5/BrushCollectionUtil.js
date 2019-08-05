/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, fromEnum, markType } from "./type";
import { Brush } from "./Brush";
import { BrushCollection } from "./BrushCollection";
import { MathUtil } from "./MathUtil";
import { ColorUtil } from "./ColorUtil";
import { truncate, isNaN_ } from "./number";
/**
 * @hidden
 */
var BrushCollectionUtil = /** @class */ (function (_super) {
    tslib_1.__extends(BrushCollectionUtil, _super);
    function BrushCollectionUtil() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BrushCollectionUtil.b = function (a, b) {
        if (isNaN_(b)) {
            return null;
        }
        b = MathUtil.b(b, 0, a.count - 1);
        var c = truncate(Math.floor(b));
        if (c == b) {
            return a.item(c);
        }
        return BrushCollectionUtil.c(b - c, a.item(c), a.item(c + 1), a.af);
    };
    BrushCollectionUtil.c = function (a, b, c, d) {
        var e = b.color;
        var f = c.color;
        var g = ColorUtil.n(e, a, f, d);
        var h = new Brush();
        h.color = g;
        return h;
    };
    BrushCollectionUtil.a = function (a) {
        var e_1, _a;
        var b = new BrushCollection();
        try {
            for (var _b = tslib_1.__values(fromEnum(a)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var c = _c.value;
                var d = ColorUtil.g(c);
                if (d != null) {
                    b.add(d);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return b;
    };
    BrushCollectionUtil.$t = markType(BrushCollectionUtil, 'BrushCollectionUtil');
    return BrushCollectionUtil;
}(Base));
export { BrushCollectionUtil };
//# sourceMappingURL=BrushCollectionUtil.js.map