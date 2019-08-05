/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { AssigningCategoryStyleEventArgsBaseDescription } from "./AssigningCategoryStyleEventArgsBaseDescription";
import { markType } from "./type";
/**
 * @hidden
 */
var AssigningCategoryStyleEventArgsDescription = /** @class */ (function (_super) {
    tslib_1.__extends(AssigningCategoryStyleEventArgsDescription, _super);
    function AssigningCategoryStyleEventArgsDescription() {
        var _this = _super.call(this) || this;
        _this.am = 0;
        _this.ak = 0;
        _this.al = 0;
        return _this;
    }
    AssigningCategoryStyleEventArgsDescription.prototype.get_type = function () {
        return "AssigningCategoryStyleEventArgs";
    };
    Object.defineProperty(AssigningCategoryStyleEventArgsDescription.prototype, "strokeThickness", {
        get: function () {
            return this.am;
        },
        set: function (a) {
            this.am = a;
            this.e("StrokeThickness");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AssigningCategoryStyleEventArgsDescription.prototype, "radiusX", {
        get: function () {
            return this.ak;
        },
        set: function (a) {
            this.ak = a;
            this.e("RadiusX");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AssigningCategoryStyleEventArgsDescription.prototype, "radiusY", {
        get: function () {
            return this.al;
        },
        set: function (a) {
            this.al = a;
            this.e("RadiusY");
        },
        enumerable: true,
        configurable: true
    });
    AssigningCategoryStyleEventArgsDescription.$t = markType(AssigningCategoryStyleEventArgsDescription, 'AssigningCategoryStyleEventArgsDescription', AssigningCategoryStyleEventArgsBaseDescription.$);
    return AssigningCategoryStyleEventArgsDescription;
}(AssigningCategoryStyleEventArgsBaseDescription));
export { AssigningCategoryStyleEventArgsDescription };
//# sourceMappingURL=AssigningCategoryStyleEventArgsDescription.js.map