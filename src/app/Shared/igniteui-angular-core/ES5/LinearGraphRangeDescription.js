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
var LinearGraphRangeDescription = /** @class */ (function (_super) {
    tslib_1.__extends(LinearGraphRangeDescription, _super);
    function LinearGraphRangeDescription() {
        var _this = _super.call(this) || this;
        _this.u = null;
        _this.t = null;
        _this.v = null;
        _this.k = 0;
        _this.f = 0;
        _this.h = 0;
        _this.g = 0;
        _this.j = 0;
        _this.i = 0;
        _this.l = 0;
        return _this;
    }
    LinearGraphRangeDescription.prototype.get_type = function () {
        return "LinearGraphRange";
    };
    Object.defineProperty(LinearGraphRangeDescription.prototype, "type", {
        get: function () {
            return this.get_type();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinearGraphRangeDescription.prototype, "name", {
        get: function () {
            return this.u;
        },
        set: function (a) {
            this.u = a;
            this.e("Name");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinearGraphRangeDescription.prototype, "brush", {
        get: function () {
            return this.t;
        },
        set: function (a) {
            this.t = a;
            this.e("Brush");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinearGraphRangeDescription.prototype, "outline", {
        get: function () {
            return this.v;
        },
        set: function (a) {
            this.v = a;
            this.e("Outline");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinearGraphRangeDescription.prototype, "startValue", {
        get: function () {
            return this.k;
        },
        set: function (a) {
            this.k = a;
            this.e("StartValue");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinearGraphRangeDescription.prototype, "endValue", {
        get: function () {
            return this.f;
        },
        set: function (a) {
            this.f = a;
            this.e("EndValue");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinearGraphRangeDescription.prototype, "innerStartExtent", {
        get: function () {
            return this.h;
        },
        set: function (a) {
            this.h = a;
            this.e("InnerStartExtent");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinearGraphRangeDescription.prototype, "innerEndExtent", {
        get: function () {
            return this.g;
        },
        set: function (a) {
            this.g = a;
            this.e("InnerEndExtent");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinearGraphRangeDescription.prototype, "outerStartExtent", {
        get: function () {
            return this.j;
        },
        set: function (a) {
            this.j = a;
            this.e("OuterStartExtent");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinearGraphRangeDescription.prototype, "outerEndExtent", {
        get: function () {
            return this.i;
        },
        set: function (a) {
            this.i = a;
            this.e("OuterEndExtent");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinearGraphRangeDescription.prototype, "strokeThickness", {
        get: function () {
            return this.l;
        },
        set: function (a) {
            this.l = a;
            this.e("StrokeThickness");
        },
        enumerable: true,
        configurable: true
    });
    LinearGraphRangeDescription.$t = markType(LinearGraphRangeDescription, 'LinearGraphRangeDescription', Description.$);
    return LinearGraphRangeDescription;
}(Description));
export { LinearGraphRangeDescription };
//# sourceMappingURL=LinearGraphRangeDescription.js.map