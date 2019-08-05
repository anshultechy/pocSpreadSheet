/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { TimeAxisBaseDescription } from "./TimeAxisBaseDescription";
import { markType } from "./type";
/**
 * @hidden
 */
var CategoryDateTimeXAxisDescription = /** @class */ (function (_super) {
    tslib_1.__extends(CategoryDateTimeXAxisDescription, _super);
    function CategoryDateTimeXAxisDescription() {
        var _this = _super.call(this) || this;
        _this.dv = null;
        _this.dp = 0;
        _this.dm = 0;
        _this.dq = 0;
        _this.dn = 0;
        return _this;
    }
    CategoryDateTimeXAxisDescription.prototype.get_type = function () {
        return "CategoryDateTimeXAxis";
    };
    Object.defineProperty(CategoryDateTimeXAxisDescription.prototype, "displayType", {
        get: function () {
            return this.dv;
        },
        set: function (a) {
            this.dv = a;
            this.e("DisplayType");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CategoryDateTimeXAxisDescription.prototype, "interval", {
        get: function () {
            return this.dp;
        },
        set: function (a) {
            this.dp = a;
            this.e("Interval");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CategoryDateTimeXAxisDescription.prototype, "actualInterval", {
        get: function () {
            return this.dm;
        },
        set: function (a) {
            this.dm = a;
            this.e("ActualInterval");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CategoryDateTimeXAxisDescription.prototype, "minorInterval", {
        get: function () {
            return this.dq;
        },
        set: function (a) {
            this.dq = a;
            this.e("MinorInterval");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CategoryDateTimeXAxisDescription.prototype, "actualMinorInterval", {
        get: function () {
            return this.dn;
        },
        set: function (a) {
            this.dn = a;
            this.e("ActualMinorInterval");
        },
        enumerable: true,
        configurable: true
    });
    CategoryDateTimeXAxisDescription.$t = markType(CategoryDateTimeXAxisDescription, 'CategoryDateTimeXAxisDescription', TimeAxisBaseDescription.$);
    return CategoryDateTimeXAxisDescription;
}(TimeAxisBaseDescription));
export { CategoryDateTimeXAxisDescription };
//# sourceMappingURL=CategoryDateTimeXAxisDescription.js.map