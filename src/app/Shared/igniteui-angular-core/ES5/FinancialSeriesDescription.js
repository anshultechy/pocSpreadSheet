/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { SeriesDescription } from "./SeriesDescription";
import { markType } from "./type";
/**
 * @hidden
 */
var FinancialSeriesDescription = /** @class */ (function (_super) {
    tslib_1.__extends(FinancialSeriesDescription, _super);
    function FinancialSeriesDescription() {
        var _this = _super.call(this) || this;
        _this.b0 = null;
        _this.b6 = null;
        _this.b7 = null;
        _this.b1 = null;
        _this.by = null;
        _this.bz = null;
        _this.bx = null;
        _this.b5 = null;
        _this.bs = false;
        _this.b2 = null;
        _this.bt = false;
        _this.bw = null;
        _this.b3 = null;
        _this.b4 = null;
        return _this;
    }
    FinancialSeriesDescription.prototype.get_type = function () {
        return "FinancialSeries";
    };
    Object.defineProperty(FinancialSeriesDescription.prototype, "negativeBrush", {
        get: function () {
            return this.b0;
        },
        set: function (a) {
            this.b0 = a;
            this.e("NegativeBrush");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinancialSeriesDescription.prototype, "xAxisRef", {
        get: function () {
            return this.b6;
        },
        set: function (a) {
            this.b6 = a;
            this.e("XAxisRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinancialSeriesDescription.prototype, "yAxisRef", {
        get: function () {
            return this.b7;
        },
        set: function (a) {
            this.b7 = a;
            this.e("YAxisRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinancialSeriesDescription.prototype, "openMemberPath", {
        get: function () {
            return this.b1;
        },
        set: function (a) {
            this.b1 = a;
            this.e("OpenMemberPath");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinancialSeriesDescription.prototype, "highMemberPath", {
        get: function () {
            return this.by;
        },
        set: function (a) {
            this.by = a;
            this.e("HighMemberPath");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinancialSeriesDescription.prototype, "lowMemberPath", {
        get: function () {
            return this.bz;
        },
        set: function (a) {
            this.bz = a;
            this.e("LowMemberPath");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinancialSeriesDescription.prototype, "closeMemberPath", {
        get: function () {
            return this.bx;
        },
        set: function (a) {
            this.bx = a;
            this.e("CloseMemberPath");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinancialSeriesDescription.prototype, "volumeMemberPath", {
        get: function () {
            return this.b5;
        },
        set: function (a) {
            this.b5 = a;
            this.e("VolumeMemberPath");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinancialSeriesDescription.prototype, "isCustomCategoryStyleAllowed", {
        get: function () {
            return this.bs;
        },
        set: function (a) {
            this.bs = a;
            this.e("IsCustomCategoryStyleAllowed");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinancialSeriesDescription.prototype, "transitionInMode", {
        get: function () {
            return this.b2;
        },
        set: function (a) {
            this.b2 = a;
            this.e("TransitionInMode");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinancialSeriesDescription.prototype, "isTransitionInEnabled", {
        get: function () {
            return this.bt;
        },
        set: function (a) {
            this.bt = a;
            this.e("IsTransitionInEnabled");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinancialSeriesDescription.prototype, "AssigningCategoryStyleRef", {
        get: function () {
            return this.bw;
        },
        set: function (a) {
            this.bw = a;
            this.e("AssigningCategoryStyleRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinancialSeriesDescription.prototype, "TypicalRef", {
        get: function () {
            return this.b3;
        },
        set: function (a) {
            this.b3 = a;
            this.e("TypicalRef");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinancialSeriesDescription.prototype, "TypicalBasedOnRef", {
        get: function () {
            return this.b4;
        },
        set: function (a) {
            this.b4 = a;
            this.e("TypicalBasedOnRef");
        },
        enumerable: true,
        configurable: true
    });
    FinancialSeriesDescription.$t = markType(FinancialSeriesDescription, 'FinancialSeriesDescription', SeriesDescription.$);
    return FinancialSeriesDescription;
}(SeriesDescription));
export { FinancialSeriesDescription };
//# sourceMappingURL=FinancialSeriesDescription.js.map