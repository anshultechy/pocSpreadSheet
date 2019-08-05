/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "./type";
import { Rect } from "./Rect";
/**
 * @hidden
 */
var WriteableBitmap = /** @class */ (function (_super) {
    tslib_1.__extends(WriteableBitmap, _super);
    function WriteableBitmap(a, b) {
        var _this = _super.call(this) || this;
        _this.b = 0;
        _this.a = 0;
        _this.c = null;
        _this.d = null;
        _this.b = a;
        _this.a = b;
        _this.d = Rect.empty;
        return _this;
    }
    WriteableBitmap.$t = markType(WriteableBitmap, 'WriteableBitmap');
    return WriteableBitmap;
}(Base));
export { WriteableBitmap };
//# sourceMappingURL=WriteableBitmap.js.map