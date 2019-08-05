/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { CategoryXAxisDescription } from "./CategoryXAxisDescription";
import { markType } from "./type";
/**
 * @hidden
 */
var OrdinalTimeXAxisDescription = /** @class */ (function (_super) {
    tslib_1.__extends(OrdinalTimeXAxisDescription, _super);
    function OrdinalTimeXAxisDescription() {
        var _this = _super.call(this) || this;
        _this.dm = null;
        _this.dj = new Date();
        _this.di = new Date();
        return _this;
    }
    OrdinalTimeXAxisDescription.prototype.get_type = function () {
        return "OrdinalTimeXAxis";
    };
    Object.defineProperty(OrdinalTimeXAxisDescription.prototype, "dateTimeMemberPath", {
        get: function () {
            return this.dm;
        },
        set: function (a) {
            this.dm = a;
            this.e("DateTimeMemberPath");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrdinalTimeXAxisDescription.prototype, "minimumValue", {
        get: function () {
            return this.dj;
        },
        set: function (a) {
            this.dj = a;
            this.e("MinimumValue");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrdinalTimeXAxisDescription.prototype, "maximumValue", {
        get: function () {
            return this.di;
        },
        set: function (a) {
            this.di = a;
            this.e("MaximumValue");
        },
        enumerable: true,
        configurable: true
    });
    OrdinalTimeXAxisDescription.$t = markType(OrdinalTimeXAxisDescription, 'OrdinalTimeXAxisDescription', CategoryXAxisDescription.$);
    return OrdinalTimeXAxisDescription;
}(CategoryXAxisDescription));
export { OrdinalTimeXAxisDescription };
//# sourceMappingURL=OrdinalTimeXAxisDescription.js.map