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
var ColumnPropertySetterDescription = /** @class */ (function (_super) {
    tslib_1.__extends(ColumnPropertySetterDescription, _super);
    function ColumnPropertySetterDescription() {
        var _this = _super.call(this) || this;
        _this.f = null;
        _this.g = null;
        _this.h = null;
        return _this;
    }
    ColumnPropertySetterDescription.prototype.get_type = function () {
        return "ColumnPropertySetter";
    };
    Object.defineProperty(ColumnPropertySetterDescription.prototype, "type", {
        get: function () {
            return this.get_type();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColumnPropertySetterDescription.prototype, "columnName", {
        get: function () {
            return this.f;
        },
        set: function (a) {
            this.f = a;
            this.e("ColumnName");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColumnPropertySetterDescription.prototype, "propertyName", {
        get: function () {
            return this.g;
        },
        set: function (a) {
            this.g = a;
            this.e("PropertyName");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColumnPropertySetterDescription.prototype, "valueRef", {
        get: function () {
            return this.h;
        },
        set: function (a) {
            this.h = a;
            this.e("ValueRef");
        },
        enumerable: true,
        configurable: true
    });
    ColumnPropertySetterDescription.$t = markType(ColumnPropertySetterDescription, 'ColumnPropertySetterDescription', Description.$);
    return ColumnPropertySetterDescription;
}(Description));
export { ColumnPropertySetterDescription };
//# sourceMappingURL=ColumnPropertySetterDescription.js.map