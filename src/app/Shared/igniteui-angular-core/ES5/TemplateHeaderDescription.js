/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { HeaderDescription } from "./HeaderDescription";
import { markType } from "./type";
/**
 * @hidden
 */
var TemplateHeaderDescription = /** @class */ (function (_super) {
    tslib_1.__extends(TemplateHeaderDescription, _super);
    function TemplateHeaderDescription() {
        var _this = _super.call(this) || this;
        _this.bi = null;
        return _this;
    }
    TemplateHeaderDescription.prototype.get_type = function () {
        return "TemplateHeader";
    };
    Object.defineProperty(TemplateHeaderDescription.prototype, "CellUpdatingRef", {
        get: function () {
            return this.bi;
        },
        set: function (a) {
            this.bi = a;
            this.e("CellUpdatingRef");
        },
        enumerable: true,
        configurable: true
    });
    TemplateHeaderDescription.$t = markType(TemplateHeaderDescription, 'TemplateHeaderDescription', HeaderDescription.$);
    return TemplateHeaderDescription;
}(HeaderDescription));
export { TemplateHeaderDescription };
//# sourceMappingURL=TemplateHeaderDescription.js.map