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
var QuadTreeBoundingBox = /** @class */ (function (_super) {
    tslib_1.__extends(QuadTreeBoundingBox, _super);
    function QuadTreeBoundingBox() {
        var _this = _super.call(this) || this;
        _this.b = 0;
        _this.c = 0;
        _this.e = 0;
        _this.d = 0;
        _this.g = null;
        return _this;
    }
    QuadTreeBoundingBox.prototype.a = function (a) {
        if (this.b + this.e < a.b - a.e || this.c + this.d < a.c - a.d || this.b - this.e > a.b + a.e || this.c - this.d > a.c + a.d) {
            return false;
        }
        return true;
    };
    QuadTreeBoundingBox.prototype.f = function (a) {
        var b = this.b - this.e;
        var c = this.c - this.d;
        var d = this.b + this.e;
        var e = this.c + this.d;
        var f = a.b - a.e;
        var g = a.c - a.d;
        var h = a.b + a.e;
        var i = a.c + a.d;
        var j = Math.max(b, f);
        var k = Math.min(d, h);
        var l = Math.max(c, g);
        var m = Math.min(e, i);
        return (k - j) * (m - l);
    };
    QuadTreeBoundingBox.$t = markType(QuadTreeBoundingBox, 'QuadTreeBoundingBox');
    return QuadTreeBoundingBox;
}(Base));
export { QuadTreeBoundingBox };
//# sourceMappingURL=QuadTreeBoundingBox.js.map