/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { Base, markType } from "./type";
import { ISectionInformation_$type } from "./ISectionInformation";
/**
 * @hidden
 */
var DefaultSectionInformation = /** @class */ (function (_super) {
    tslib_1.__extends(DefaultSectionInformation, _super);
    function DefaultSectionInformation(a, b, c, d) {
        var _this = _super.call(this) || this;
        _this.d = 0;
        _this.c = 0;
        _this.a = null;
        _this.b = null;
        _this.d = a;
        _this.c = b;
        _this.a = c;
        _this.b = d;
        return _this;
    }
    Object.defineProperty(DefaultSectionInformation.prototype, "startIndex", {
        get: function () {
            return this.d;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DefaultSectionInformation.prototype, "endIndex", {
        get: function () {
            return this.c;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DefaultSectionInformation.prototype, "groupKeyValues", {
        get: function () {
            return this.b;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DefaultSectionInformation.prototype, "groupKeyProperties", {
        get: function () {
            return this.a;
        },
        enumerable: true,
        configurable: true
    });
    DefaultSectionInformation.$t = markType(DefaultSectionInformation, 'DefaultSectionInformation', Base.$, [ISectionInformation_$type]);
    return DefaultSectionInformation;
}(Base));
export { DefaultSectionInformation };
//# sourceMappingURL=DefaultSectionInformation.js.map