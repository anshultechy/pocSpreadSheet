/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { CategoryAxisBaseDescription } from "./CategoryAxisBaseDescription";
import { markType } from "./type";
/**
 * @hidden
 */
var TimeAxisBaseDescription = /** @class */ (function (_super) {
    tslib_1.__extends(TimeAxisBaseDescription, _super);
    function TimeAxisBaseDescription() {
        var _this = _super.call(this) || this;
        _this.dk = null;
        _this.da = false;
        _this.dd = new Date();
        _this.dc = new Date();
        _this.df = new Date();
        _this.de = new Date();
        return _this;
    }
    TimeAxisBaseDescription.prototype.get_type = function () {
        return "TimeAxisBase";
    };
    Object.defineProperty(TimeAxisBaseDescription.prototype, "dateTimeMemberPath", {
        get: function () {
            return this.dk;
        },
        set: function (a) {
            this.dk = a;
            this.e("DateTimeMemberPath");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeAxisBaseDescription.prototype, "isDataPreSorted", {
        get: function () {
            return this.da;
        },
        set: function (a) {
            this.da = a;
            this.e("IsDataPreSorted");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeAxisBaseDescription.prototype, "actualMinimumValue", {
        get: function () {
            return this.dd;
        },
        set: function (a) {
            this.dd = a;
            this.e("ActualMinimumValue");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeAxisBaseDescription.prototype, "actualMaximumValue", {
        get: function () {
            return this.dc;
        },
        set: function (a) {
            this.dc = a;
            this.e("ActualMaximumValue");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeAxisBaseDescription.prototype, "minimumValue", {
        get: function () {
            return this.df;
        },
        set: function (a) {
            this.df = a;
            this.e("MinimumValue");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeAxisBaseDescription.prototype, "maximumValue", {
        get: function () {
            return this.de;
        },
        set: function (a) {
            this.de = a;
            this.e("MaximumValue");
        },
        enumerable: true,
        configurable: true
    });
    TimeAxisBaseDescription.$t = markType(TimeAxisBaseDescription, 'TimeAxisBaseDescription', CategoryAxisBaseDescription.$);
    return TimeAxisBaseDescription;
}(CategoryAxisBaseDescription));
export { TimeAxisBaseDescription };
//# sourceMappingURL=TimeAxisBaseDescription.js.map