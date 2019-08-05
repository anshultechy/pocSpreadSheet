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
var DataChartMouseButtonEventArgsDescription = /** @class */ (function (_super) {
    tslib_1.__extends(DataChartMouseButtonEventArgsDescription, _super);
    function DataChartMouseButtonEventArgsDescription() {
        var _this = _super.call(this) || this;
        _this.j = false;
        _this.l = null;
        _this.f = null;
        _this.h = null;
        return _this;
    }
    DataChartMouseButtonEventArgsDescription.prototype.get_type = function () {
        return "DataChartMouseButtonEventArgs";
    };
    Object.defineProperty(DataChartMouseButtonEventArgsDescription.prototype, "type", {
        get: function () {
            return this.get_type();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataChartMouseButtonEventArgsDescription.prototype, "handled", {
        get: function () {
            return this.j;
        },
        set: function (a) {
            this.j = a;
            this.e("Handled");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataChartMouseButtonEventArgsDescription.prototype, "itemRef", {
        get: function () {
            return this.l;
        },
        set: function (a) {
            this.l = a;
            this.e("ItemRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataChartMouseButtonEventArgsDescription.prototype, "series", {
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
    Object.defineProperty(DataChartMouseButtonEventArgsDescription.prototype, "chart", {
        get: function () {
            return this.h;
        },
        set: function (a) {
            this.h = a;
            this.e("Chart");
        },
        enumerable: true,
        configurable: true
    });
    DataChartMouseButtonEventArgsDescription.$t = markType(DataChartMouseButtonEventArgsDescription, 'DataChartMouseButtonEventArgsDescription', Description.$);
    return DataChartMouseButtonEventArgsDescription;
}(Description));
export { DataChartMouseButtonEventArgsDescription };
//# sourceMappingURL=DataChartMouseButtonEventArgsDescription.js.map