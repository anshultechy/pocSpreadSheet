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
var SortDescription = /** @class */ (function (_super) {
    tslib_1.__extends(SortDescription, _super);
    function SortDescription() {
        var _this = _super.call(this) || this;
        _this.b = false;
        _this.g = null;
        _this.d = 0;
        return _this;
    }
    Object.defineProperty(SortDescription.prototype, "propertyName", {
        get: function () {
            return this.g;
        },
        set: function (a) {
            this.g = a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SortDescription.prototype, "direction", {
        get: function () {
            return this.d;
        },
        set: function (a) {
            this.d = a;
        },
        enumerable: true,
        configurable: true
    });
    SortDescription.prototype.equals = function (a) {
        var b = a;
        if (b == null) {
            return _super.prototype.equals.call(this, a);
        }
        return b.propertyName == this.propertyName && b.direction == this.direction;
    };
    SortDescription.prototype.getHashCode = function () {
        return Base.getHashCodeStatic(this.propertyName) * 17 + this.direction;
    };
    SortDescription.prototype.i = function () {
        this.b = true;
    };
    SortDescription.create = function (a, b) {
        var c = new SortDescription();
        c.propertyName = a;
        c.direction = b;
        return c;
    };
    SortDescription.$t = markType(SortDescription, 'SortDescription');
    return SortDescription;
}(Base));
export { SortDescription };
//# sourceMappingURL=SortDescription.js.map