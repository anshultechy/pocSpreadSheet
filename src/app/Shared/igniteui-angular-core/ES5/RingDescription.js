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
var RingDescription = /** @class */ (function (_super) {
    tslib_1.__extends(RingDescription, _super);
    function RingDescription() {
        var _this = _super.call(this) || this;
        _this.p = 0;
        _this.l = 0;
        _this.j = null;
        _this.f = null;
        _this.h = null;
        _this.m = 0;
        return _this;
    }
    RingDescription.prototype.get_type = function () {
        return "Ring";
    };
    Object.defineProperty(RingDescription.prototype, "type", {
        get: function () {
            return this.get_type();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RingDescription.prototype, "index", {
        get: function () {
            return this.p;
        },
        set: function (a) {
            this.p = a;
            this.e("Index");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RingDescription.prototype, "innerExtend", {
        get: function () {
            return this.l;
        },
        set: function (a) {
            this.l = a;
            this.e("InnerExtend");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RingDescription.prototype, "controlSize", {
        get: function () {
            return this.j;
        },
        set: function (a) {
            this.j = a;
            this.e("ControlSize");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RingDescription.prototype, "center", {
        get: function () {
            return this.f;
        },
        set: function (a) {
            this.f = a;
            this.e("Center");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RingDescription.prototype, "ringSeries", {
        get: function () {
            return this.h;
        },
        set: function (a) {
            this.h = a;
            this.e("RingSeries");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RingDescription.prototype, "ringBreadth", {
        get: function () {
            return this.m;
        },
        set: function (a) {
            this.m = a;
            this.e("RingBreadth");
        },
        enumerable: true,
        configurable: true
    });
    RingDescription.$t = markType(RingDescription, 'RingDescription', Description.$);
    return RingDescription;
}(Description));
export { RingDescription };
//# sourceMappingURL=RingDescription.js.map