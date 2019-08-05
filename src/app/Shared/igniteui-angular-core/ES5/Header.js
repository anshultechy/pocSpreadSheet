/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, Point_$type, markType } from "./type";
import { List$1 } from "./List$1";
import { XBaseField } from "./XBaseField";
/**
 * @hidden
 */
var Header = /** @class */ (function (_super) {
    tslib_1.__extends(Header, _super);
    function Header() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.a = 0;
        _this.e = null;
        _this.b = new List$1(XBaseField.$, 0);
        return _this;
    }
    Object.defineProperty(Header.prototype, "d", {
        get: function () {
            return { $type: Point_$type, x: this.e.left, y: this.e.top };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Header.prototype, "c", {
        get: function () {
            return { $type: Point_$type, x: this.e.right, y: this.e.bottom };
        },
        enumerable: true,
        configurable: true
    });
    Header.$t = markType(Header, 'Header');
    return Header;
}(Base));
export { Header };
//# sourceMappingURL=Header.js.map