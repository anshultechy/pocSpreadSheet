/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "./type";
/**
 * @hidden
 */
var Style = /** @class */ (function (_super) {
    tslib_1.__extends(Style, _super);
    function Style() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fill = null;
        _this.stroke = null;
        _this.strokeThickness = NaN;
        _this.opacity = NaN;
        return _this;
    }
    Style.$t = markType(Style, 'Style');
    return Style;
}(Base));
export { Style };
//# sourceMappingURL=Style.js.map