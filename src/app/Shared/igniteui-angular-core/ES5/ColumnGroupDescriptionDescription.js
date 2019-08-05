/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { ColumnSortDescriptionDescription } from "./ColumnSortDescriptionDescription";
import { markType } from "./type";
/**
 * @hidden
 */
var ColumnGroupDescriptionDescription = /** @class */ (function (_super) {
    tslib_1.__extends(ColumnGroupDescriptionDescription, _super);
    function ColumnGroupDescriptionDescription() {
        var _this = _super.call(this) || this;
        _this.l = null;
        _this.k = null;
        _this.m = null;
        return _this;
    }
    ColumnGroupDescriptionDescription.prototype.get_type = function () {
        return "ColumnGroupDescription";
    };
    Object.defineProperty(ColumnGroupDescriptionDescription.prototype, "formatOverrideRef", {
        get: function () {
            return this.l;
        },
        set: function (a) {
            this.l = a;
            this.e("FormatOverrideRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColumnGroupDescriptionDescription.prototype, "displayName", {
        get: function () {
            return this.k;
        },
        set: function (a) {
            this.k = a;
            this.e("DisplayName");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColumnGroupDescriptionDescription.prototype, "FormatTextRef", {
        get: function () {
            return this.m;
        },
        set: function (a) {
            this.m = a;
            this.e("FormatTextRef");
        },
        enumerable: true,
        configurable: true
    });
    ColumnGroupDescriptionDescription.$t = markType(ColumnGroupDescriptionDescription, 'ColumnGroupDescriptionDescription', ColumnSortDescriptionDescription.$);
    return ColumnGroupDescriptionDescription;
}(ColumnSortDescriptionDescription));
export { ColumnGroupDescriptionDescription };
//# sourceMappingURL=ColumnGroupDescriptionDescription.js.map