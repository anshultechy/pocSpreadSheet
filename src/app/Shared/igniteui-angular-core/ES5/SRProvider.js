/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import * as tslib_1 from "tslib";
import { DependencyObject } from "./DependencyObject";
import { DVSR } from "./DVSR";
import { markType } from "./type";
/**
 * @hidden
 */
var SRProvider = /** @class */ (function (_super) {
    tslib_1.__extends(SRProvider, _super);
    function SRProvider(a) {
        var _this = _super.call(this) || this;
        _this.j = null;
        _this.k = null;
        _super.prototype.toString.call(_this);
        _this.k = a;
        _this.j = new DVSR(a);
        return _this;
    }
    Object.defineProperty(SRProvider.prototype, "l", {
        get: function () {
            return this.k;
        },
        set: function (a) {
            this.k = a;
            this.j.container = this.k;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SRProvider.prototype, "an", {
        get: function () {
            return this.j.getString("OPD_DefaultInteraction");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SRProvider.prototype, "ao", {
        get: function () {
            return this.j.getString("OPD_ScaleToFit");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SRProvider.prototype, "aq", {
        get: function () {
            return this.j.getString("OPD_ZoomTo100");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SRProvider.prototype, "ap", {
        get: function () {
            return this.j.getString("OPD_ScaleToFit_SeriesViewer");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SRProvider.prototype, "ar", {
        get: function () {
            return this.j.getString("PieChart_Others");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SRProvider.prototype, "aj", {
        get: function () {
            return this.j.getString("FinancialSeries_Open");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SRProvider.prototype, "ag", {
        get: function () {
            return this.j.getString("FinancialSeries_Close");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SRProvider.prototype, "ai", {
        get: function () {
            return this.j.getString("FinancialSeries_Low");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SRProvider.prototype, "ah", {
        get: function () {
            return this.j.getString("FinancialSeries_High");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SRProvider.prototype, "ak", {
        get: function () {
            return this.j.getString("FinancialSeries_Volume");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SRProvider.prototype, "m", {
        get: function () {
            return this.j.getString("BubbleSeries_Radius");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SRProvider.prototype, "r", {
        get: function () {
            return this.j.getString("DataProviderNotInitialized");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SRProvider.prototype, "am", {
        get: function () {
            return this.j.getString("Object_Sealed");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SRProvider.prototype, "as", {
        get: function () {
            return this.j.getString("RangeModificationsNotSupported");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SRProvider.prototype, "s", {
        get: function () {
            return this.j.getString("Default_Series_Title");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SRProvider.prototype, "n", {
        get: function () {
            return this.j.getString("DataChart_InteractivityNotLoaded");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SRProvider.prototype, "p", {
        get: function () {
            return this.j.getString("DataChart_TrendLinesNotLoaded");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SRProvider.prototype, "o", {
        get: function () {
            return this.j.getString("DataChart_NumberAbbreviatorNotLoaded");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SRProvider.prototype, "q", {
        get: function () {
            return this.j.getString("DataChart_VisualDataNotLoaded");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SRProvider.prototype, "au", {
        get: function () {
            return this.j.getString("TRIAL_VERSION");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SRProvider.prototype, "at", {
        get: function () {
            return this.j.getString("ScatterSeries_Value");
        },
        enumerable: true,
        configurable: true
    });
    SRProvider.prototype.al = function (a) {
        return this.j.getString(a);
    };
    Object.defineProperty(SRProvider.prototype, "aa", {
        get: function () {
            return this.j.getString("FinancialChart_RangeSelector_OneMonth");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SRProvider.prototype, "ad", {
        get: function () {
            return this.j.getString("FinancialChart_RangeSelector_ThreeMonths");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SRProvider.prototype, "ac", {
        get: function () {
            return this.j.getString("FinancialChart_RangeSelector_SixMonths");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SRProvider.prototype, "af", {
        get: function () {
            return this.j.getString("FinancialChart_RangeSelector_YearToDate");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SRProvider.prototype, "ab", {
        get: function () {
            return this.j.getString("FinancialChart_RangeSelector_OneYear");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SRProvider.prototype, "y", {
        get: function () {
            return this.j.getString("FinancialChart_RangeSelector_All");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SRProvider.prototype, "z", {
        get: function () {
            return this.j.getString("FinancialChart_RangeSelector_From");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SRProvider.prototype, "ae", {
        get: function () {
            return this.j.getString("FinancialChart_RangeSelector_To");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SRProvider.prototype, "t", {
        get: function () {
            return this.j.getString("FinancialChart_IndicatorMenu_Header");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SRProvider.prototype, "v", {
        get: function () {
            return this.j.getString("FinancialChart_IndicatorMenu_OverlaysCategoryHeader");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SRProvider.prototype, "w", {
        get: function () {
            return this.j.getString("FinancialChart_IndicatorMenu_TrendlinesCategoryHeader");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SRProvider.prototype, "x", {
        get: function () {
            return this.j.getString("FinancialChart_IndicatorMenu_VolumeCategoryHeader");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SRProvider.prototype, "u", {
        get: function () {
            return this.j.getString("FinancialChart_IndicatorMenu_IndicatorsCategoryHeader");
        },
        enumerable: true,
        configurable: true
    });
    SRProvider.$t = markType(SRProvider, 'SRProvider', DependencyObject.$);
    return SRProvider;
}(DependencyObject));
export { SRProvider };
//# sourceMappingURL=SRProvider.js.map