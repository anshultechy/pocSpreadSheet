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
var ChartCursorEventArgsDescription = /** @class */ (function (_super) {
    tslib_1.__extends(ChartCursorEventArgsDescription, _super);
    function ChartCursorEventArgsDescription() {
        var _this = _super.call(this) || this;
        _this.j = null;
        _this.f = null;
        _this.h = null;
        return _this;
    }
    ChartCursorEventArgsDescription.prototype.get_type = function () {
        return "ChartCursorEventArgs";
    };
    Object.defineProperty(ChartCursorEventArgsDescription.prototype, "type", {
        get: function () {
            return this.get_type();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChartCursorEventArgsDescription.prototype, "itemRef", {
        get: function () {
            return this.j;
        },
        set: function (a) {
            this.j = a;
            this.e("ItemRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChartCursorEventArgsDescription.prototype, "series", {
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
    Object.defineProperty(ChartCursorEventArgsDescription.prototype, "seriesViewer", {
        get: function () {
            return this.h;
        },
        set: function (a) {
            this.h = a;
            this.e("SeriesViewer");
        },
        enumerable: true,
        configurable: true
    });
    ChartCursorEventArgsDescription.$t = markType(ChartCursorEventArgsDescription, 'ChartCursorEventArgsDescription', Description.$);
    return ChartCursorEventArgsDescription;
}(Description));
export { ChartCursorEventArgsDescription };
//# sourceMappingURL=ChartCursorEventArgsDescription.js.map