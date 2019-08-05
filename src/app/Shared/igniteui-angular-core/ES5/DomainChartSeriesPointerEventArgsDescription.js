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
var DomainChartSeriesPointerEventArgsDescription = /** @class */ (function (_super) {
    tslib_1.__extends(DomainChartSeriesPointerEventArgsDescription, _super);
    function DomainChartSeriesPointerEventArgsDescription() {
        var _this = _super.call(this) || this;
        _this.f = null;
        _this.h = null;
        return _this;
    }
    DomainChartSeriesPointerEventArgsDescription.prototype.get_type = function () {
        return "DomainChartSeriesPointerEventArgs";
    };
    Object.defineProperty(DomainChartSeriesPointerEventArgsDescription.prototype, "type", {
        get: function () {
            return this.get_type();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DomainChartSeriesPointerEventArgsDescription.prototype, "series", {
        get: function () {
            return this.f;
        },
        set: function (a) {
            this.f = a;
            this.e("Series");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DomainChartSeriesPointerEventArgsDescription.prototype, "itemRef", {
        get: function () {
            return this.h;
        },
        set: function (a) {
            this.h = a;
            this.e("ItemRef");
        },
        enumerable: true,
        configurable: true
    });
    DomainChartSeriesPointerEventArgsDescription.$t = markType(DomainChartSeriesPointerEventArgsDescription, 'DomainChartSeriesPointerEventArgsDescription', Description.$);
    return DomainChartSeriesPointerEventArgsDescription;
}(Description));
export { DomainChartSeriesPointerEventArgsDescription };
//# sourceMappingURL=DomainChartSeriesPointerEventArgsDescription.js.map