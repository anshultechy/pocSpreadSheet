/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, markType } from "./type";
import { CrosshairLayerDescriptionMetadata } from "./CrosshairLayerDescriptionMetadata";
import { CategoryToolTipLayerDescriptionMetadata } from "./CategoryToolTipLayerDescriptionMetadata";
import { ItemToolTipLayerDescriptionMetadata } from "./ItemToolTipLayerDescriptionMetadata";
import { CategoryItemHighlightLayerDescriptionMetadata } from "./CategoryItemHighlightLayerDescriptionMetadata";
import { CategoryHighlightLayerDescriptionMetadata } from "./CategoryHighlightLayerDescriptionMetadata";
import { FinalValueLayerDescriptionMetadata } from "./FinalValueLayerDescriptionMetadata";
import { CalloutLayerDescriptionMetadata } from "./CalloutLayerDescriptionMetadata";
/**
 * @hidden
 */
export class DataChartAnnotationLayersDescriptionModule extends Base {
    static register(a) {
        CrosshairLayerDescriptionMetadata.d(a);
        CategoryToolTipLayerDescriptionMetadata.d(a);
        ItemToolTipLayerDescriptionMetadata.d(a);
        CategoryItemHighlightLayerDescriptionMetadata.d(a);
        CategoryHighlightLayerDescriptionMetadata.d(a);
        FinalValueLayerDescriptionMetadata.d(a);
        CalloutLayerDescriptionMetadata.d(a);
    }
}
DataChartAnnotationLayersDescriptionModule.$t = markType(DataChartAnnotationLayersDescriptionModule, 'DataChartAnnotationLayersDescriptionModule');
//# sourceMappingURL=DataChartAnnotationLayersDescriptionModule.js.map