/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { DependencyObject } from "./DependencyObject";
import { DVSR } from "./DVSR";
import { markType } from "./type";
/**
 * @hidden
 */
export class SRProvider extends DependencyObject {
    constructor(a) {
        super();
        this.j = null;
        this.k = null;
        super.toString();
        this.k = a;
        this.j = new DVSR(a);
    }
    get l() {
        return this.k;
    }
    set l(a) {
        this.k = a;
        this.j.container = this.k;
    }
    get an() {
        return this.j.getString("OPD_DefaultInteraction");
    }
    get ao() {
        return this.j.getString("OPD_ScaleToFit");
    }
    get aq() {
        return this.j.getString("OPD_ZoomTo100");
    }
    get ap() {
        return this.j.getString("OPD_ScaleToFit_SeriesViewer");
    }
    get ar() {
        return this.j.getString("PieChart_Others");
    }
    get aj() {
        return this.j.getString("FinancialSeries_Open");
    }
    get ag() {
        return this.j.getString("FinancialSeries_Close");
    }
    get ai() {
        return this.j.getString("FinancialSeries_Low");
    }
    get ah() {
        return this.j.getString("FinancialSeries_High");
    }
    get ak() {
        return this.j.getString("FinancialSeries_Volume");
    }
    get m() {
        return this.j.getString("BubbleSeries_Radius");
    }
    get r() {
        return this.j.getString("DataProviderNotInitialized");
    }
    get am() {
        return this.j.getString("Object_Sealed");
    }
    get as() {
        return this.j.getString("RangeModificationsNotSupported");
    }
    get s() {
        return this.j.getString("Default_Series_Title");
    }
    get n() {
        return this.j.getString("DataChart_InteractivityNotLoaded");
    }
    get p() {
        return this.j.getString("DataChart_TrendLinesNotLoaded");
    }
    get o() {
        return this.j.getString("DataChart_NumberAbbreviatorNotLoaded");
    }
    get q() {
        return this.j.getString("DataChart_VisualDataNotLoaded");
    }
    get au() {
        return this.j.getString("TRIAL_VERSION");
    }
    get at() {
        return this.j.getString("ScatterSeries_Value");
    }
    al(a) {
        return this.j.getString(a);
    }
    get aa() {
        return this.j.getString("FinancialChart_RangeSelector_OneMonth");
    }
    get ad() {
        return this.j.getString("FinancialChart_RangeSelector_ThreeMonths");
    }
    get ac() {
        return this.j.getString("FinancialChart_RangeSelector_SixMonths");
    }
    get af() {
        return this.j.getString("FinancialChart_RangeSelector_YearToDate");
    }
    get ab() {
        return this.j.getString("FinancialChart_RangeSelector_OneYear");
    }
    get y() {
        return this.j.getString("FinancialChart_RangeSelector_All");
    }
    get z() {
        return this.j.getString("FinancialChart_RangeSelector_From");
    }
    get ae() {
        return this.j.getString("FinancialChart_RangeSelector_To");
    }
    get t() {
        return this.j.getString("FinancialChart_IndicatorMenu_Header");
    }
    get v() {
        return this.j.getString("FinancialChart_IndicatorMenu_OverlaysCategoryHeader");
    }
    get w() {
        return this.j.getString("FinancialChart_IndicatorMenu_TrendlinesCategoryHeader");
    }
    get x() {
        return this.j.getString("FinancialChart_IndicatorMenu_VolumeCategoryHeader");
    }
    get u() {
        return this.j.getString("FinancialChart_IndicatorMenu_IndicatorsCategoryHeader");
    }
}
SRProvider.$t = markType(SRProvider, 'SRProvider', DependencyObject.$);
//# sourceMappingURL=SRProvider.js.map