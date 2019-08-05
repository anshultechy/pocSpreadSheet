/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { ColumnDescription } from "./ColumnDescription";
import { markType } from "./type";
/**
 * @hidden
 */
var DateTimeColumnDescription = /** @class */ (function (_super) {
    tslib_1.__extends(DateTimeColumnDescription, _super);
    function DateTimeColumnDescription() {
        var _this = _super.call(this) || this;
        _this.cc = null;
        _this.cd = null;
        return _this;
    }
    DateTimeColumnDescription.prototype.get_type = function () {
        return "DateTimeColumn";
    };
    Object.defineProperty(DateTimeColumnDescription.prototype, "dateTimeFormat", {
        get: function () {
            return this.cc;
        },
        set: function (a) {
            this.cc = a;
            this.e("DateTimeFormat");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTimeColumnDescription.prototype, "formatOverrideRef", {
        get: function () {
            return this.cd;
        },
        set: function (a) {
            this.cd = a;
            this.e("FormatOverrideRef");
        },
        enumerable: true,
        configurable: true
    });
    DateTimeColumnDescription.$t = markType(DateTimeColumnDescription, 'DateTimeColumnDescription', ColumnDescription.$);
    return DateTimeColumnDescription;
}(ColumnDescription));
export { DateTimeColumnDescription };
//# sourceMappingURL=DateTimeColumnDescription.js.map