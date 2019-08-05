/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, String_$type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { GridFilterExpressionsEventArgsDescription } from "./GridFilterExpressionsEventArgsDescription";
/**
 * @hidden
 */
export class GridFilterExpressionsEventArgsDescriptionMetadata extends Base {
    static b(a) {
        if (GridFilterExpressionsEventArgsDescriptionMetadata.a == null) {
            GridFilterExpressionsEventArgsDescriptionMetadata.a = new Dictionary$2(String_$type, String_$type, 0);
            GridFilterExpressionsEventArgsDescriptionMetadata.c(a, GridFilterExpressionsEventArgsDescriptionMetadata.a);
        }
    }
    static c(a, b) {
        b.item("FilterExpressions", "Collection:FilterExpressionDescription:FilterExpressionCollection:FilterExpressionDescription");
    }
    static d(a) {
        GridFilterExpressionsEventArgsDescriptionMetadata.b(a);
        a.n("GridFilterExpressionsEventArgs", () => new GridFilterExpressionsEventArgsDescription());
        a.m("GridFilterExpressionsEventArgs", GridFilterExpressionsEventArgsDescriptionMetadata.a);
    }
}
GridFilterExpressionsEventArgsDescriptionMetadata.$t = markType(GridFilterExpressionsEventArgsDescriptionMetadata, 'GridFilterExpressionsEventArgsDescriptionMetadata');
GridFilterExpressionsEventArgsDescriptionMetadata.a = null;
//# sourceMappingURL=GridFilterExpressionsEventArgsDescriptionMetadata.js.map