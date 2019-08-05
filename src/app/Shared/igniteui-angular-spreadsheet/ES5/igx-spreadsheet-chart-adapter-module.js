import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxExcelModule } from "../../igniteui-angular-excel/ES5/igx-excel-module";
import { IgxSpreadsheetModule } from "igniteui-angular-spreadsheet/ES5/igx-spreadsheet-module";
import { SpreadsheetChartAdapterLocaleEn } from './SpreadsheetChartAdapterLocaleEn';
import { Localization } from "../../igniteui-angular-core/ES5/Localization";
import { IgxDataChartCoreModule } from "igniteui-angular-charts/ES5/igx-data-chart-core-module";
import { IgxPieChartModule } from "igniteui-angular-charts/ES5/igx-pie-chart-module";
import { IgxLineSeriesDynamicModule } from "igniteui-angular-charts/ES5/igx-line-series-dynamic-module";
import { IgxAreaSeriesDynamicModule } from "igniteui-angular-charts/ES5/igx-area-series-dynamic-module";
import { IgxColumnSeriesDynamicModule } from "igniteui-angular-charts/ES5/igx-column-series-dynamic-module";
import { IgxBarSeriesDynamicModule } from "igniteui-angular-charts/ES5/igx-bar-series-dynamic-module";
import { IgxSplineSeriesDynamicModule } from "igniteui-angular-charts/ES5/igx-spline-series-dynamic-module";
import { IgxSplineAreaSeriesDynamicModule } from "igniteui-angular-charts/ES5/igx-spline-area-series-dynamic-module";
import { IgxStepLineSeriesDynamicModule } from "igniteui-angular-charts/ES5/igx-step-line-series-dynamic-module";
import { IgxStepAreaSeriesDynamicModule } from "igniteui-angular-charts/ES5/igx-step-area-series-dynamic-module";
import { IgxPointSeriesDynamicModule } from "igniteui-angular-charts/ES5/igx-point-series-dynamic-module";
import { IgxWaterfallSeriesDynamicModule } from "igniteui-angular-charts/ES5/igx-waterfall-series-dynamic-module";
import { IgxCrosshairLayerDynamicModule } from "igniteui-angular-charts/ES5/igx-crosshair-layer-dynamic-module";
import { IgxCalloutLayerDynamicModule } from "igniteui-angular-charts/ES5/igx-callout-layer-dynamic-module";
import { IgxItemToolTipLayerDynamicModule } from "igniteui-angular-charts/ES5/igx-item-tool-tip-layer-dynamic-module";
import { IgxCategoryToolTipLayerDynamicModule } from "igniteui-angular-charts/ES5/igx-category-tool-tip-layer-dynamic-module";
import { IgxCategoryHighlightLayerDynamicModule } from "igniteui-angular-charts/ES5/igx-category-highlight-layer-dynamic-module";
import { IgxCategoryItemHighlightLayerDynamicModule } from "igniteui-angular-charts/ES5/igx-category-item-highlight-layer-dynamic-module";
import { IgxFinalValueLayerDynamicModule } from "igniteui-angular-charts/ES5/igx-final-value-layer-dynamic-module";
import { IgxNumberAbbreviatorModule } from "igniteui-angular-charts/ES5/igx-number-abbreviator-module";
import { IgxDataChartInteractivityModule } from "igniteui-angular-charts/ES5/igx-data-chart-interactivity-module";
import { IgxDataChartCategoryTrendLineModule } from "igniteui-angular-charts/ES5/igx-data-chart-category-trend-line-module";
import { IgxDataChartAnnotationModule } from "igniteui-angular-charts/ES5/igx-data-chart-annotation-module";
import { IgxComponentRendererContainerModule } from "../../igniteui-angular-core/ES5/igx-component-renderer-container-module";
import { IgxDoughnutChartModule } from "igniteui-angular-charts/ES5/igx-doughnut-chart-module";
import { IgxCategoryXAxisDynamicModule } from "igniteui-angular-charts/ES5/igx-category-x-axis-dynamic-module";
import { IgxNumericYAxisDynamicModule } from "igniteui-angular-charts/ES5/igx-numeric-y-axis-dynamic-module";
import { IgxCategoryDateTimeXAxisDynamicModule } from "igniteui-angular-charts/ES5/igx-category-date-time-x-axis-dynamic-module";
import { IgxTimeXAxisDynamicModule } from "igniteui-angular-charts/ES5/igx-time-x-axis-dynamic-module";
import { IgxOrdinalTimeXAxisDynamicModule } from "igniteui-angular-charts/ES5/igx-ordinal-time-x-axis-dynamic-module";
import { IgxNumericRadiusAxisDynamicModule } from "igniteui-angular-charts/ES5/igx-numeric-radius-axis-dynamic-module";
import { IgxNumericAngleAxisDynamicModule } from "igniteui-angular-charts/ES5/igx-numeric-angle-axis-dynamic-module";
import { IgxCategoryAngleAxisDynamicModule } from "igniteui-angular-charts/ES5/igx-category-angle-axis-dynamic-module";
import { IgxCategoryYAxisDynamicModule } from "igniteui-angular-charts/ES5/igx-category-y-axis-dynamic-module";
import { IgxNumericXAxisDynamicModule } from "igniteui-angular-charts/ES5/igx-numeric-x-axis-dynamic-module";
import { IgxRadialColumnSeriesDynamicModule } from "igniteui-angular-charts/ES5/igx-radial-column-series-dynamic-module";
import { IgxRadialPieSeriesDynamicModule } from "igniteui-angular-charts/ES5/igx-radial-pie-series-dynamic-module";
import { IgxRadialLineSeriesDynamicModule } from "igniteui-angular-charts/ES5/igx-radial-line-series-dynamic-module";
import { IgxRadialAreaSeriesDynamicModule } from "igniteui-angular-charts/ES5/igx-radial-area-series-dynamic-module";
import { IgxPolarLineSeriesDynamicModule } from "igniteui-angular-charts/ES5/igx-polar-line-series-dynamic-module";
import { IgxPolarSplineSeriesDynamicModule } from "igniteui-angular-charts/ES5/igx-polar-spline-series-dynamic-module";
import { IgxPolarAreaSeriesDynamicModule } from "igniteui-angular-charts/ES5/igx-polar-area-series-dynamic-module";
import { IgxPolarSplineAreaSeriesDynamicModule } from "igniteui-angular-charts/ES5/igx-polar-spline-area-series-dynamic-module";
import { IgxPolarScatterSeriesDynamicModule } from "igniteui-angular-charts/ES5/igx-polar-scatter-series-dynamic-module";
import { IgxRangeAreaSeriesDynamicModule } from "igniteui-angular-charts/ES5/igx-range-area-series-dynamic-module";
import { IgxRangeColumnSeriesDynamicModule } from "igniteui-angular-charts/ES5/igx-range-column-series-dynamic-module";
import { IgxPercentChangeYAxisDynamicModule } from "igniteui-angular-charts/ES5/igx-percent-change-y-axis-dynamic-module";
import { IgxFinancialPriceSeriesDynamicModule } from "igniteui-angular-charts/ES5/igx-financial-price-series-dynamic-module";
import { IgxIndicatorsDynamicModule } from "igniteui-angular-charts/ES5/igx-indicators-dynamic-module";
import { IgxOverlaysDynamicModule } from "igniteui-angular-charts/ES5/igx-overlays-dynamic-module";
import { IgxZoomSliderDynamicModule } from "igniteui-angular-charts/ES5/igx-zoom-slider-dynamic-module";
import { IgxFinancialLegendModule } from "igniteui-angular-charts/ES5/igx-financial-legend-module";
import { IgxLegendModule } from "igniteui-angular-charts/ES5/igx-legend-module";
import { IgxItemLegendModule } from "igniteui-angular-charts/ES5/igx-item-legend-module";
import { IgxScatterSeriesDynamicModule } from "igniteui-angular-charts/ES5/igx-scatter-series-dynamic-module";
import { IgxScatterLineSeriesDynamicModule } from "igniteui-angular-charts/ES5/igx-scatter-line-series-dynamic-module";
import { IgxScatterSplineSeriesDynamicModule } from "igniteui-angular-charts/ES5/igx-scatter-spline-series-dynamic-module";
import { IgxBubbleSeriesDynamicModule } from "igniteui-angular-charts/ES5/igx-bubble-series-dynamic-module";
import { IgxRingSeriesDynamicModule } from "igniteui-angular-charts/ES5/igx-ring-series-dynamic-module";
import { IgxStackedAreaSeriesDynamicModule } from "igniteui-angular-charts/ES5/igx-stacked-area-series-dynamic-module";
import { IgxStackedBarSeriesDynamicModule } from "igniteui-angular-charts/ES5/igx-stacked-bar-series-dynamic-module";
import { IgxStackedColumnSeriesDynamicModule } from "igniteui-angular-charts/ES5/igx-stacked-column-series-dynamic-module";
import { IgxStackedLineSeriesDynamicModule } from "igniteui-angular-charts/ES5/igx-stacked-line-series-dynamic-module";
import { IgxStacked100AreaSeriesDynamicModule } from "igniteui-angular-charts/ES5/igx-stacked-100-area-series-dynamic-module";
import { IgxStacked100BarSeriesDynamicModule } from "igniteui-angular-charts/ES5/igx-stacked-100-bar-series-dynamic-module";
import { IgxStacked100ColumnSeriesDynamicModule } from "igniteui-angular-charts/ES5/igx-stacked-100-column-series-dynamic-module";
import { IgxStacked100LineSeriesDynamicModule } from "igniteui-angular-charts/ES5/igx-stacked-100-line-series-dynamic-module";
import { IgxStackedFragmentSeriesDynamicModule } from "igniteui-angular-charts/ES5/igx-stacked-fragment-series-dynamic-module";
import { IgxAreaFragmentDynamicModule } from "igniteui-angular-charts/ES5/igx-area-fragment-dynamic-module";
import { IgxColumnFragmentDynamicModule } from "igniteui-angular-charts/ES5/igx-column-fragment-dynamic-module";
import { IgxLineFragmentDynamicModule } from "igniteui-angular-charts/ES5/igx-line-fragment-dynamic-module";
import { IgxSplineFragmentDynamicModule } from "igniteui-angular-charts/ES5/igx-spline-fragment-dynamic-module";
import { IgxSplineAreaFragmentDynamicModule } from "igniteui-angular-charts/ES5/igx-spline-area-fragment-dynamic-module";
import { IgxBarFragmentDynamicModule } from "igniteui-angular-charts/ES5/igx-bar-fragment-dynamic-module";
import { IgxDataChartComponent } from "igniteui-angular-charts/ES5/igx-data-chart-component";
import { IgxPieChartComponent } from "igniteui-angular-charts/ES5/igx-pie-chart-component";
import { IgxDoughnutChartComponent } from "igniteui-angular-charts/ES5/igx-doughnut-chart-component";
import { IgxFinancialLegendComponent } from "igniteui-angular-charts/ES5/igx-financial-legend-component";
import { IgxLegendComponent } from "igniteui-angular-charts/ES5/igx-legend-component";
import { IgxItemLegendComponent } from "igniteui-angular-charts/ES5/igx-item-legend-component";
import { TypeRegistrar } from "../../igniteui-angular-core/ES5/type";
var IgxSpreadsheetChartAdapterModule = /** @class */ (function () {
    function IgxSpreadsheetChartAdapterModule() {
        Localization.register("spreadsheetchartadapter", new SpreadsheetChartAdapterLocaleEn());
        TypeRegistrar.registerCons("IgxDataChartComponent", IgxDataChartComponent);
        TypeRegistrar.registerCons("IgxPieChartComponent", IgxPieChartComponent);
        TypeRegistrar.registerCons("IgxDoughnutChartComponent", IgxDoughnutChartComponent);
        TypeRegistrar.registerCons("IgxLegendComponent", IgxLegendComponent);
        TypeRegistrar.registerCons("IgxItemLegendComponent", IgxItemLegendComponent);
        TypeRegistrar.registerCons("IgxFinancialLegendComponent", IgxFinancialLegendComponent);
    }
    IgxSpreadsheetChartAdapterModule = tslib_1.__decorate([
        NgModule({
            declarations: [],
            exports: [],
            imports: [CommonModule,
                IgxExcelModule,
                IgxSpreadsheetModule,
                IgxDataChartCoreModule,
                IgxPieChartModule,
                IgxLineSeriesDynamicModule,
                IgxAreaSeriesDynamicModule,
                IgxColumnSeriesDynamicModule,
                IgxBarSeriesDynamicModule,
                IgxSplineSeriesDynamicModule,
                IgxSplineAreaSeriesDynamicModule,
                IgxStepLineSeriesDynamicModule,
                IgxStepAreaSeriesDynamicModule,
                IgxPointSeriesDynamicModule,
                IgxWaterfallSeriesDynamicModule,
                IgxCrosshairLayerDynamicModule,
                IgxCalloutLayerDynamicModule,
                IgxItemToolTipLayerDynamicModule,
                IgxCategoryToolTipLayerDynamicModule,
                IgxCategoryHighlightLayerDynamicModule,
                IgxCategoryItemHighlightLayerDynamicModule,
                IgxFinalValueLayerDynamicModule,
                IgxNumberAbbreviatorModule,
                IgxDataChartInteractivityModule,
                IgxDataChartCategoryTrendLineModule,
                IgxDataChartAnnotationModule,
                IgxComponentRendererContainerModule,
                IgxDoughnutChartModule,
                IgxCategoryXAxisDynamicModule,
                IgxNumericYAxisDynamicModule,
                IgxCategoryDateTimeXAxisDynamicModule,
                IgxTimeXAxisDynamicModule,
                IgxOrdinalTimeXAxisDynamicModule,
                IgxNumericRadiusAxisDynamicModule,
                IgxNumericAngleAxisDynamicModule,
                IgxCategoryAngleAxisDynamicModule,
                IgxCategoryYAxisDynamicModule,
                IgxNumericXAxisDynamicModule,
                IgxRadialColumnSeriesDynamicModule,
                IgxRadialPieSeriesDynamicModule,
                IgxRadialLineSeriesDynamicModule,
                IgxRadialAreaSeriesDynamicModule,
                IgxPolarLineSeriesDynamicModule,
                IgxPolarSplineSeriesDynamicModule,
                IgxPolarAreaSeriesDynamicModule,
                IgxPolarSplineAreaSeriesDynamicModule,
                IgxPolarScatterSeriesDynamicModule,
                IgxRangeAreaSeriesDynamicModule,
                IgxRangeColumnSeriesDynamicModule,
                IgxPercentChangeYAxisDynamicModule,
                IgxFinancialPriceSeriesDynamicModule,
                IgxIndicatorsDynamicModule,
                IgxOverlaysDynamicModule,
                IgxZoomSliderDynamicModule,
                IgxFinancialLegendModule,
                IgxLegendModule,
                IgxItemLegendModule,
                IgxScatterSeriesDynamicModule,
                IgxScatterLineSeriesDynamicModule,
                IgxScatterSplineSeriesDynamicModule,
                IgxBubbleSeriesDynamicModule,
                IgxStackedAreaSeriesDynamicModule,
                IgxStackedBarSeriesDynamicModule,
                IgxStackedColumnSeriesDynamicModule,
                IgxStackedLineSeriesDynamicModule,
                IgxStacked100AreaSeriesDynamicModule,
                IgxStacked100BarSeriesDynamicModule,
                IgxStacked100ColumnSeriesDynamicModule,
                IgxStacked100LineSeriesDynamicModule,
                IgxStackedFragmentSeriesDynamicModule,
                IgxAreaFragmentDynamicModule,
                IgxColumnFragmentDynamicModule,
                IgxLineFragmentDynamicModule,
                IgxSplineFragmentDynamicModule,
                IgxSplineAreaFragmentDynamicModule,
                IgxBarFragmentDynamicModule,
                IgxRingSeriesDynamicModule
            ],
            entryComponents: [
                IgxDataChartComponent,
                IgxPieChartComponent,
                IgxDoughnutChartComponent,
                IgxLegendComponent,
                IgxItemLegendComponent,
                IgxFinancialLegendComponent
            ]
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], IgxSpreadsheetChartAdapterModule);
    return IgxSpreadsheetChartAdapterModule;
}());
export { IgxSpreadsheetChartAdapterModule };
//# sourceMappingURL=igx-spreadsheet-chart-adapter-module.js.map
