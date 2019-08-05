/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { CellInfoDescription } from "./CellInfoDescription";
import { markType } from "./type";
/**
 * @hidden
 */
var DateTimeCellInfoDescription = /** @class */ (function (_super) {
    tslib_1.__extends(DateTimeCellInfoDescription, _super);
    function DateTimeCellInfoDescription() {
        var _this = _super.call(this) || this;
        _this.c4 = new Date();
        _this.c7 = null;
        _this.c6 = null;
        _this.c2 = false;
        return _this;
    }
    DateTimeCellInfoDescription.prototype.get_type = function () {
        return "DateTimeCellInfo";
    };
    Object.defineProperty(DateTimeCellInfoDescription.prototype, "dateTimeValue", {
        get: function () {
            return this.c4;
        },
        set: function (a) {
            this.c4 = a;
            this.e("DateTimeValue");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTimeCellInfoDescription.prototype, "formatOverrideRef", {
        get: function () {
            return this.c7;
        },
        set: function (a) {
            this.c7 = a;
            this.e("FormatOverrideRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTimeCellInfoDescription.prototype, "dateTimeFormat", {
        get: function () {
            return this.c6;
        },
        set: function (a) {
            this.c6 = a;
            this.e("DateTimeFormat");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTimeCellInfoDescription.prototype, "isOffsetValue", {
        get: function () {
            return this.c2;
        },
        set: function (a) {
            this.c2 = a;
            this.e("IsOffsetValue");
        },
        enumerable: true,
        configurable: true
    });
    DateTimeCellInfoDescription.$t = markType(DateTimeCellInfoDescription, 'DateTimeCellInfoDescription', CellInfoDescription.$);
    return DateTimeCellInfoDescription;
}(CellInfoDescription));
export { DateTimeCellInfoDescription };
//# sourceMappingURL=DateTimeCellInfoDescription.js.map