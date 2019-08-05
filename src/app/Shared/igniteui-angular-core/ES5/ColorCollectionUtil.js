/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "./type";
import { ObservableColorCollection } from "./ObservableColorCollection";
import { MathUtil } from "./MathUtil";
import { ColorUtil } from "./ColorUtil";
import { truncate } from "./number";
/**
 * @hidden
 */
var ColorCollectionUtil = /** @class */ (function (_super) {
    tslib_1.__extends(ColorCollectionUtil, _super);
    function ColorCollectionUtil() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ColorCollectionUtil.b = function (a, b) {
        b = MathUtil.b(b, 0, a.count - 1);
        var c = truncate(Math.floor(b));
        if (c == b) {
            return a._inner[c];
        }
        return ColorCollectionUtil.c(b - c, a._inner[c], a._inner[c + 1], a.af);
    };
    ColorCollectionUtil.c = function (a, b, c, d) {
        return ColorUtil.n(b, a, c, d);
    };
    ColorCollectionUtil.a = function (a) {
        var b = new ObservableColorCollection();
        b.o(a);
        return b;
    };
    ColorCollectionUtil.$t = markType(ColorCollectionUtil, 'ColorCollectionUtil');
    return ColorCollectionUtil;
}(Base));
export { ColorCollectionUtil };
//# sourceMappingURL=ColorCollectionUtil.js.map