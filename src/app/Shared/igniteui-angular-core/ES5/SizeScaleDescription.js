/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Description } from "./Description";
import { markType } from "./type";
/**
 * @hidden
 */
var SizeScaleDescription = /** @class */ (function (_super) {
    tslib_1.__extends(SizeScaleDescription, _super);
    function SizeScaleDescription() {
        var _this = _super.call(this) || this;
        _this.i = 0;
        _this.h = 0;
        _this.f = false;
        _this.l = 0;
        _this.n = null;
        return _this;
    }
    SizeScaleDescription.prototype.get_type = function () {
        return "SizeScale";
    };
    Object.defineProperty(SizeScaleDescription.prototype, "type", {
        get: function () {
            return this.get_type();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SizeScaleDescription.prototype, "minimumValue", {
        get: function () {
            return this.i;
        },
        set: function (a) {
            this.i = a;
            this.e("MinimumValue");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SizeScaleDescription.prototype, "maximumValue", {
        get: function () {
            return this.h;
        },
        set: function (a) {
            this.h = a;
            this.e("MaximumValue");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SizeScaleDescription.prototype, "isLogarithmic", {
        get: function () {
            return this.f;
        },
        set: function (a) {
            this.f = a;
            this.e("IsLogarithmic");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SizeScaleDescription.prototype, "logarithmBase", {
        get: function () {
            return this.l;
        },
        set: function (a) {
            this.l = a;
            this.e("LogarithmBase");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SizeScaleDescription.prototype, "PropertyUpdatedRef", {
        get: function () {
            return this.n;
        },
        set: function (a) {
            this.n = a;
            this.e("PropertyUpdatedRef");
        },
        enumerable: true,
        configurable: true
    });
    SizeScaleDescription.$t = markType(SizeScaleDescription, 'SizeScaleDescription', Description.$);
    return SizeScaleDescription;
}(Description));
export { SizeScaleDescription };
//# sourceMappingURL=SizeScaleDescription.js.map