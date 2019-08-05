/*
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE:
https://www.infragistics.com/legal/license/igultimate-la
https://www.infragistics.com/legal/license/igultimate-eula
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/
import { Base, markType } from "../../igniteui-angular-core/ES2015/type";
import { ElementLayerInfo } from "./ElementLayerInfo";
/**
 * @hidden
 */
export class PredefinedSpreadsheetLayers extends Base {
    static get k() {
        return PredefinedSpreadsheetLayers.a;
    }
    static get l() {
        return PredefinedSpreadsheetLayers.b;
    }
    static get m() {
        return PredefinedSpreadsheetLayers.c;
    }
    static get n() {
        return PredefinedSpreadsheetLayers.d;
    }
    static get o() {
        return PredefinedSpreadsheetLayers.e;
    }
    static get p() {
        return PredefinedSpreadsheetLayers.f;
    }
    static get r() {
        return PredefinedSpreadsheetLayers.h;
    }
    static get q() {
        return PredefinedSpreadsheetLayers.g;
    }
    static get s() {
        return PredefinedSpreadsheetLayers.i;
    }
    static get t() {
        return PredefinedSpreadsheetLayers.j;
    }
}
PredefinedSpreadsheetLayers.$t = markType(PredefinedSpreadsheetLayers, 'PredefinedSpreadsheetLayers');
PredefinedSpreadsheetLayers.a = new ElementLayerInfo(0, "Background", null, null);
PredefinedSpreadsheetLayers.e = new ElementLayerInfo(1, "CellValues", null, ["Background", "CellBackgrounds", "Gridlines"], null, null);
PredefinedSpreadsheetLayers.d = new ElementLayerInfo(0, "CellBorders", null, ["Background", "CellBackgrounds", "Gridlines", "CellValues"]);
PredefinedSpreadsheetLayers.f = new ElementLayerInfo(0, "Gridlines", null, ["Background", "CellBackgrounds"]);
PredefinedSpreadsheetLayers.c = new ElementLayerInfo(0, "CellBackgrounds", ["CellValues", "Gridlines", "Selection"], ["Background"]);
PredefinedSpreadsheetLayers.i = new ElementLayerInfo(0, "Selection", null, ["Buttons", "CellValues", "CellBorders", "Gridlines"]);
PredefinedSpreadsheetLayers.b = new ElementLayerInfo(0, "Buttons", null, ["CellValues", "CellBorders", "Gridlines"]);
PredefinedSpreadsheetLayers.j = new ElementLayerInfo(0, "Shapes", null, ["Selection", "Buttons"]);
PredefinedSpreadsheetLayers.h = new ElementLayerInfo(0, "InvalidData", ["InteractionOverlay"], ["Shapes", "Selection", "Buttons"]);
PredefinedSpreadsheetLayers.g = new ElementLayerInfo(0, "InteractionOverlay", null, ["Shapes", "Selection", "Buttons"]);
//# sourceMappingURL=PredefinedSpreadsheetLayers.js.map