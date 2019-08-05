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
var TemplateColumnDescription = /** @class */ (function (_super) {
    tslib_1.__extends(TemplateColumnDescription, _super);
    function TemplateColumnDescription() {
        var _this = _super.call(this) || this;
        _this.cc = null;
        return _this;
    }
    TemplateColumnDescription.prototype.get_type = function () {
        return "TemplateColumn";
    };
    Object.defineProperty(TemplateColumnDescription.prototype, "CellUpdatingRef", {
        get: function () {
            return this.cc;
        },
        set: function (a) {
            this.cc = a;
            this.e("CellUpdatingRef");
        },
        enumerable: true,
        configurable: true
    });
    TemplateColumnDescription.$t = markType(TemplateColumnDescription, 'TemplateColumnDescription', ColumnDescription.$);
    return TemplateColumnDescription;
}(ColumnDescription));
export { TemplateColumnDescription };
//# sourceMappingURL=TemplateColumnDescription.js.map