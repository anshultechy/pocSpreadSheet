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
var ColumnWidthDescription = /** @class */ (function (_super) {
    tslib_1.__extends(ColumnWidthDescription, _super);
    function ColumnWidthDescription() {
        var _this = _super.call(this) || this;
        _this.f = false;
        _this.i = 0;
        _this.h = 0;
        return _this;
    }
    ColumnWidthDescription.prototype.get_type = function () {
        return "ColumnWidth";
    };
    Object.defineProperty(ColumnWidthDescription.prototype, "type", {
        get: function () {
            return this.get_type();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColumnWidthDescription.prototype, "isStarSized", {
        get: function () {
            return this.f;
        },
        set: function (a) {
            this.f = a;
            this.e("IsStarSized");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColumnWidthDescription.prototype, "value", {
        get: function () {
            return this.i;
        },
        set: function (a) {
            this.i = a;
            this.e("Value");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColumnWidthDescription.prototype, "minimumWidth", {
        get: function () {
            return this.h;
        },
        set: function (a) {
            this.h = a;
            this.e("MinimumWidth");
        },
        enumerable: true,
        configurable: true
    });
    ColumnWidthDescription.$t = markType(ColumnWidthDescription, 'ColumnWidthDescription', Description.$);
    return ColumnWidthDescription;
}(Description));
export { ColumnWidthDescription };
//# sourceMappingURL=ColumnWidthDescription.js.map